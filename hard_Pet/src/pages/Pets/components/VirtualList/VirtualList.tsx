import { useState, useRef, useCallback } from "react";
// TODO: реализуй компонент виртуализированного списка
function VirtualList({ items, itemHeight, containerHeight }) {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.floor(scrollTop / itemHeight)
  const totalHeight = itemHeight * items.length
  const visibleCount = Math.ceil(containerHeight / itemHeight)
  const endIndex = startIndex + visibleCount
  

  const overscan = 5
  const startIndexWithOverscan = Math.max(0, startIndex - overscan)
  const endIndexWithOverscan = Math.min(items.length, endIndex + overscan)

  const visibleitems = items.slice(startIndexWithOverscan, endIndexWithOverscan)
  
  return (
    <div
      onScroll={(event) => {
        setScrollTop(event.currentTarget.scrollTop)
      }} 
      style={{ 
        height: containerHeight, 
        overflow: "auto", 
        position: "relative" 
      }}>
      {/* TODO: контейнер с полной высотой для корректного scrollbar */}
      <div style={{
        height: totalHeight,
        position: 'relative',
      }}>
        {visibleitems.map(( item, index ) => (
          <div key={index} style={{height:itemHeight}}>{item}</div>
        ))}
      </div>
    </div>
  );
}
// Тест: 100 000 элементов
const itemsList = Array.from({ length: 100000 }, (_, i) => `Элемент #${i + 1}`);

console.log(itemsList)

export default function App() {
  return <VirtualList 
            items={itemsList} 
            itemHeight={40} 
            containerHeight={400} 
          />;
}
