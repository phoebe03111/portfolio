import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import skillsData from "../../data/skillsData";
import "./Skills.scss";

const Skills = () => {
  const [items, setItems] = useState(skillsData);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    console.log(event);
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <section className="skills">
      <h2 className="skills__title">Skillsets</h2>
      <p className="skills__subtitle">Try dragging & dropping the skills!</p>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items}>
          <ul className="skills__list">
            {items.map((skill, index) => (
              <SortableItem key={skill.id} id={skill.id}>
                <li className="skills__list-item">
                  {skill.logo} {skill.name}
                </li>
              </SortableItem>
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </section>
  );
};

export default Skills;
