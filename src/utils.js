export function getExperience() {
  const startDate = new Date(2023, 6);
  const now = new Date();
  
  const diffInMs = now - startDate;
  const diffInMonths = diffInMs / (1000 * 60 * 60 * 24 * 30.44);

  const years = Math.floor(diffInMonths / 12);
  const months = Math.floor(diffInMonths % 12);

  return { years, months };
}

export function getExperienceText() {
  const { years, months } = getExperience();

  if (years >= 2) return `${years}`; 
  if (years === 1) return `1 year ${months} months of experience`;
  
  return `${months} months of experience`;
}
