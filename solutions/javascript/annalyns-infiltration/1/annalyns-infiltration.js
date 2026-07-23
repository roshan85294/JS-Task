// const knightIsAwake = true;
export function canExecuteFastAttack(knightIsAwake) {
 return knightIsAwake!=true;
}


export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake||archerIsAwake||knightIsAwake;
}


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake&&prisonerIsAwake;
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
   return (
    (petDogIsPresent && !archerIsAwake) ||
    (!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake)
  );
}
