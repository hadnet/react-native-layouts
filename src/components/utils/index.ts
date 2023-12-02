import { css } from 'styled-components/native';
import type {
  Alignment,
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

const getAlignOpts = (prop: NonNullable<Alignment>) => {
  const opts = {
    'left-top': ['left', 'top'],
    'right-top': ['right', 'top'],
    'center-top': ['center', 'top'],
    'left-bottom': ['left', 'bottom'],
    'left-center': ['left', 'middle'],
    'right-bottom': ['right', 'bottom'],
    'right-center': ['right', 'middle'],
    'center-bottom': ['center', 'bottom'],
    'center-center': ['center', 'middle'],
  } as const;
  return opts[prop];
};

export const mapDirection = (row?: boolean) => {
  return !row
    ? css<FlexPositionsProps>`
        align-items: ${({ alignLeft, center, alignRight, align }) => {
          if (align) return mapAlignItemsOpts(getAlignOpts(align)[0]);
          if (alignLeft) return mapAlignItemsOpts('left');
          if (center) return mapAlignItemsOpts('center');
          if (alignRight) return mapAlignItemsOpts('right');
          return mapAlignItemsOpts();
        }};
        justify-content: ${({
          alignTop,
          middle,
          alignBottom,
          evenly,
          around,
          between,
          align,
        }) => {
          if (align) return mapAlignItemsOpts(getAlignOpts(align)[1]);
          if (alignTop) return mapJustifyContentOpts('top');
          if (middle) return mapJustifyContentOpts('middle');
          if (alignBottom) return mapJustifyContentOpts('bottom');
          if (evenly) return mapJustifyContentOpts('evenly');
          if (around) return mapJustifyContentOpts('around');
          if (between) return mapJustifyContentOpts('between');
          return mapJustifyContentOpts();
        }};
      `
    : css<FlexPositionsProps>`
        align-items: ${({ alignTop, middle, alignBottom, align }) => {
          if (align) return mapAlignItemsOpts(getAlignOpts(align)[1]);
          if (alignTop) return mapAlignItemsOpts('top');
          if (middle) return mapAlignItemsOpts('middle');
          if (alignBottom) return mapAlignItemsOpts('bottom');
          return mapAlignItemsOpts();
        }};
        justify-content: ${({
          alignLeft,
          center,
          alignRight,
          evenly,
          around,
          between,
          align,
        }) => {
          if (align) return mapAlignItemsOpts(getAlignOpts(align)[0]);
          if (alignLeft) return mapJustifyContentOpts('left');
          if (center) return mapJustifyContentOpts('center');
          if (alignRight) return mapJustifyContentOpts('right');
          if (evenly) return mapJustifyContentOpts('evenly');
          if (around) return mapJustifyContentOpts('around');
          if (between) return mapJustifyContentOpts('between');
          return mapJustifyContentOpts();
        }};
      `;
};

export const getRandomColor = () => colors[(Math.random() * colors.length) | 0];
