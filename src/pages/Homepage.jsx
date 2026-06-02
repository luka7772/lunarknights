import React from 'react';
import { Intro } from './contnents/intro';
import { Motivation } from './contnents/motivation';
import { Exercises } from './contnents/exercisestypes';
import { Packs } from './contnents/packs';
import { Endinfo } from './contnents/endinfo';
import { Packstittle } from './contnents/packstittle';


function HomePage() {
  return (
    <>
      <Intro />
      <Motivation />
      <Exercises />
      <Packstittle />
      <Packs />
      <Endinfo />
    </>
  );
}

export default HomePage; 