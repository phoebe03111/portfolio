export function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomSkill = pickRandomSkill();

    highlight(randomSkill);

    setTimeout(() => {
      unhighlight(randomSkill);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomSkill = pickRandomSkill();
      highlight(randomSkill);
    }, 100);
  }, times * 100);
}

export function pickRandomSkill(skillsArr) {
  const skills = skillsArr;
  return skills[Math.floor(Math.random() * skillsArr.length)];
}

export function highlight(skill) {
  skill.classList.add("highlight");
}

export function unhighlight(skill) {
  skill.classList.remove("hightlight");
}
