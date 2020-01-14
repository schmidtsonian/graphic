import './styles/style.scss';

import gsap, {Back, Power1} from 'gsap';


const bulletFrom = {transformOrigin:"50% 50%", scale: 0};
const bulletTo = {scale: 1, ease: Back.easeOut.config(1.7)};

const circleFrom = {transformOrigin:"50% 50%", scale: 0};
const circleTo = {scale: 1, ease: Back.easeInOut.config(1.7)};
const tl = gsap.timeline();

tl
  .timeScale(1)
  .staggerFromTo('.bullet', 0.5, bulletFrom, bulletTo, 0.2)
  .staggerFromTo('.text-content', 0.5, {opacity: 0}, {opacity: 1}, 0.2, 0)

  .staggerFromTo('.circle-orange', 1, circleFrom, circleTo, 0.01, 1)
  .staggerTo('.circle-orange', 2, {scale: 0.9, yoyo: true, repeat: -1}, 0.01)

  .staggerFromTo('.circle-orange-2', 1, circleFrom, circleTo, 0.01, 2)
  .staggerTo('.circle-orange-2', 3, {scale: 0.85, yoyo: true, repeat: -1}, 0.01)

  .staggerFromTo('.circle-blue', 1, circleFrom, circleTo, 0.01, 3)
  .staggerTo('.circle-blue', 3, {scale: 0.85, yoyo: true, repeat: -1}, 0.01)

  .staggerFromTo('.circle-blue-2', 1, circleFrom, circleTo, 0.01, 3.5)
  .staggerTo('.circle-blue-2', 2, {scale: 0.85, yoyo: true, repeat: -1}, 0.01)

  .staggerFromTo('.circle-blue-3', 1, circleFrom, circleTo, 0.01, 4)
  .staggerTo('.circle-blue-3', 2, {scale: 0.85, yoyo: true, repeat: -1}, 0.01)

  .staggerFromTo('.circle-grey', 1, circleFrom, circleTo, 0.01, 4.5)
  .staggerTo('.circle-blue-grey', 2, {scale: 0.85, yoyo: true, repeat: -1}, 0.01)


  ;

gsap.fromTo('.g-cirlcles--a', 2, {transformOrigin:"50% 50%", y: '-3px'}, {y:'3px', yoyo: true, repeat: -1, ease: Power1.easeInOut});
gsap.fromTo('.g-cirlcles--b', 2.1, {transformOrigin:"50% 50%", y: '-3px'}, {y:'3px', yoyo: true, repeat: -1, ease: Power1.easeInOut});
gsap.fromTo('.g-cirlcles--c', 4.15, {transformOrigin:"50% 50%", y: '-3px'}, {y:'3px', yoyo: true, repeat: -1, ease: Power1.easeInOut});
gsap.fromTo('.g-cirlcles--d', 2.2, {transformOrigin:"50% 50%", y: '-3px'}, {y:'3px', yoyo: true, repeat: -1, ease: Power1.easeInOut});
gsap.fromTo('.g-cirlcles--e', 3.25, {transformOrigin:"50% 50%", y: '-3px'}, {y:'3px', yoyo: true, repeat: -1, ease: Power1.easeInOut});
gsap.fromTo('.g-cirlcles--f', 2.3, {transformOrigin:"50% 50%", y: '-3px'}, {y:'3px', yoyo: true, repeat: -1, ease: Power1.easeInOut});
gsap.fromTo('.g-cirlcles--g', 2.35, {transformOrigin:"50% 50%", y: '-3px'}, {y:'3px', yoyo: true, repeat: -1, ease: Power1.easeInOut});

const dashArray = 800;
const dashOffsetFrom = -800;
gsap.set(
  [
  '.connection-orange-a',
  '.connection-orange-b',
  '.connection-blue-a',
  '.connection-blue-b',
  '.connection-blue-c',
  '.connection-grey',
  ],
  {strokeDasharray:dashArray, strokeDashoffset: dashOffsetFrom}
);
const tl2 = gsap.timeline();
  tl2
    .staggerFromTo('.connection-orange-a', 1, {strokeDashoffset:dashOffsetFrom}, {strokeDashoffset:0}, 0.05, 1.1)
    .staggerFromTo('.connection-orange-b', 1, {strokeDashoffset:dashOffsetFrom}, {strokeDashoffset:0}, 0.05, 2.1)
    .staggerFromTo('.connection-blue-a', 1, {strokeDashoffset:dashOffsetFrom}, {strokeDashoffset:0}, 0.05, 3.1)
    .staggerFromTo('.connection-blue-b', 1, {strokeDashoffset:dashOffsetFrom}, {strokeDashoffset:0}, 0.05, 4.1)
    .staggerFromTo('.connection-blue-c', 1, {strokeDashoffset:dashOffsetFrom}, {strokeDashoffset:0}, 0.05, 4.6)
    .staggerFromTo('.connection-grey', 1, {strokeDashoffset:dashOffsetFrom}, {strokeDashoffset:0}, 0.05, 5.1)
