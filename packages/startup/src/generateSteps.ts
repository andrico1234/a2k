import { roundNumber } from "@a2000/utilities";

const generateSteps = (totalTime: number, interval: number) => {
  const totalStepCount = totalTime / interval;
  const steps = (interval / totalTime) * 100;
  const array: number[] = Array(totalStepCount).fill(steps);
  const arrayLen = array.length;

  for (let i = 0; i < 1000; i++) {
    const randomIndex1 = Math.floor(Math.random() * arrayLen);
    const firstVal = array[randomIndex1];

    const randomIndex2 = Math.floor(Math.random() * arrayLen);
    const secondVal = array[randomIndex2];

    const randomDeductable = roundNumber(Math.random() * firstVal);

    const newVal1 = roundNumber(firstVal - randomDeductable);
    const newVal2 = roundNumber(secondVal + randomDeductable);

    array[randomIndex1] = newVal1;
    array[randomIndex2] = newVal2;
  }

  return array;
};

export default generateSteps;
