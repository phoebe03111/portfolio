export const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const skills = document.querySelectorAll(".skills__list-item");
    skills.forEach((skill) => skill.classList.remove("highlight"));

    const randomSkill = pickRandomSkill();
    // highlight the skill
    randomSkill.classList.add("highlight");

    setTimeout(() => {
      // unhighlight the skill
      randomSkill.classList.remove("highlight");
    }, 150);
  }, 150);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomSkill = pickRandomSkill();
      randomSkill.classList.add("highlight");
    }, 150);
  }, times * 100);
};

const pickRandomSkill = () => {
  const skills = document.querySelectorAll(".skills__list-item");
  return skills[Math.floor(Math.random() * skills.length)];
};
