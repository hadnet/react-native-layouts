import { css } from 'styled-components/native';
import type {
  Props,
  SpaceUnit,
  MarginProps,
  PaddingProps,
  FlexPositionsProps,
  Zindex,
  SpacesOptions,
} from '../types';
import { colors } from './colors';

export const setSpaceUnit = (p: SpaceUnit | 'auto' | undefined) =>
  p != null ? (typeof p === 'string' ? `${p}` : `${p ?? 0}px`) : undefined;

export const setSpaceUnitToProp = (
  p: SpaceUnit | 'auto' | undefined | `translate(-${number}px, -${number}px)`,
  prop: SpacesOptions
) =>
  p
    ? typeof p === 'string'
      ? `${prop}: ${p}`
      : `${prop}: ${p ?? 0}px`
    : undefined;

export const spaceUnitToNum = (s: SpaceUnit, d: number) =>
  typeof s === 'string' ? +s.replace(/px|%/, '') : s + d / 2;

export const mapJustifyContentOpts = (prop?: Props['justify']) => {
  return {
    top: 'flex-start',
    left: 'flex-start',
    right: 'flex-end',
    bottom: 'flex-end',
    center: 'center',
    middle: 'center',
    around: 'space-around',
    between: 'space-between',
    evenly: 'space-evenly',
  }[prop ?? 'left'];
};

export const mapAlignItemsOpts = (prop?: Props['align']) => {
  return {
    top: 'flex-start',
    left: 'flex-start',
    right: 'flex-end',
    bottom: 'flex-end',
    center: 'center',
    middle: 'center',
    stretch: 'stretch',
  }[prop ?? 'stretch'];
};

export const size = css<{ wfull?: boolean; hfull?: boolean }>`
  ${({ wfull }) => wfull && setSpaceUnitToProp('100%', 'width')};
  ${({ hfull }) => hfull && setSpaceUnitToProp('100%', 'height')};
`;

export const spacing = css<Partial<MarginProps & PaddingProps>>`
  ${({ p }) => setSpaceUnitToProp(p, 'padding')};
  ${({ pr, px }) => setSpaceUnitToProp(pr ?? px, 'padding-right')};
  ${({ pl, px }) => setSpaceUnitToProp(pl ?? px, 'padding-left')};
  ${({ pt, py }) => setSpaceUnitToProp(pt ?? py, 'padding-top')};
  ${({ pb, py }) => setSpaceUnitToProp(pb ?? py, 'padding-bottom')};
  ${({ m }) => setSpaceUnitToProp(m, 'margin')};
  ${({ mr, mx }) => setSpaceUnitToProp(mr ?? mx, 'margin-right')};
  ${({ ml, mx }) => setSpaceUnitToProp(ml ?? mx, 'margin-left')};
  ${({ mt, my }) => setSpaceUnitToProp(mt ?? my, 'margin-top')};
  ${({ mb, my }) => setSpaceUnitToProp(mb ?? my, 'margin-bottom')};
`;

export const zIndex = css<{ z?: Zindex }>`
  z-index: ${({ z = 1 }) => (z === 'front' ? 9999 : z === 'back' ? -9999 : z)};
`;

export const mapDirection = (row?: boolean) => {
  return !row
    ? css<FlexPositionsProps>`
        align-items: ${({ toLeft, center, toRight }) => {
          if (toLeft) return mapAlignItemsOpts('left');
          if (center) return mapAlignItemsOpts('center');
          if (toRight) return mapAlignItemsOpts('right');
          return mapAlignItemsOpts();
        }};
        justify-content: ${({
          toTop,
          middle,
          toBottom,
          evenly,
          around,
          between,
        }) => {
          if (toTop) return mapJustifyContentOpts('top');
          if (middle) return mapJustifyContentOpts('middle');
          if (toBottom) return mapJustifyContentOpts('bottom');
          if (evenly) return mapJustifyContentOpts('evenly');
          if (around) return mapJustifyContentOpts('around');
          if (between) return mapJustifyContentOpts('between');
          return mapJustifyContentOpts();
        }};
      `
    : css<FlexPositionsProps>`
        align-items: ${({ toTop, middle, toBottom }) => {
          if (toTop) return mapAlignItemsOpts('top');
          if (middle) return mapAlignItemsOpts('middle');
          if (toBottom) return mapAlignItemsOpts('bottom');
          return mapAlignItemsOpts();
        }};
        justify-content: ${({
          toLeft,
          center,
          toRight,
          evenly,
          around,
          between,
        }) => {
          if (toLeft) return mapJustifyContentOpts('left');
          if (center) return mapJustifyContentOpts('center');
          if (toRight) return mapJustifyContentOpts('right');
          if (evenly) return mapJustifyContentOpts('evenly');
          if (around) return mapJustifyContentOpts('around');
          if (between) return mapJustifyContentOpts('between');
          return mapJustifyContentOpts();
        }};
      `;
};

export const getRandomColor = () => colors[(Math.random() * colors.length) | 0];
