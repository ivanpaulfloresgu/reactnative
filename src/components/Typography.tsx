import React, { FC } from 'react'
import { PixelRatio, Text, TextProps, TextStyle } from 'react-native'
import { COLORS } from '../constants/colors'

export enum FontSize {
  XXL = 32,
  XL = 24,
  LG = 20,
  BASE = 16,
  MD = 18,
  MLG = 22,
  SM = 14,
  XS = 12,
  XXS = 10,
}

export enum FontWeight {
  REGULAR,
  SEMI_BOLD,
  BOLD,
  LIGHT,
  MEDIUM,
}

export enum FontColor {
  DARK,
}

export enum FontAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export const WORKSANS_REGULAR = 'WorkSans-Regular'
export const WORKSANS_SEMI_BOLD = 'WorkSans-SemiBold'
export const WORKSANS_BOLD = 'WorkSans-Bold'
export const WORKSANS_LIGHT = 'WorkSans-Light'
export const WORKSANS_MEDIUM = 'WorkSans-Medium'

const fontWeightMap: Record<FontWeight, string> = {
  [FontWeight.REGULAR]: WORKSANS_REGULAR,
  [FontWeight.SEMI_BOLD]: WORKSANS_SEMI_BOLD,
  [FontWeight.BOLD]: WORKSANS_BOLD,
  [FontWeight.LIGHT]: WORKSANS_LIGHT,
  [FontWeight.MEDIUM]: WORKSANS_MEDIUM,
}

const colorMap: Record<FontColor, string> = {
  [FontColor.DARK]: COLORS.BLACK,
}

const lineHeightMap: Record<FontSize, number> = {
  [FontSize.XXL]: 40,
  [FontSize.XL]: 30,
  [FontSize.LG]: 28,
  [FontSize.BASE]: 24,
  [FontSize.MD]: 18,
  [FontSize.MLG]: 22,
  [FontSize.SM]: 20,
  [FontSize.XS]: 16,
  [FontSize.XXS]: 10,
}

type TypographyCommonProps = TextProps & {
  color?: FontColor
  alignment?: FontAlignment
  weight?: FontWeight
  lineHeight?: FontSize
  size?: FontSize
}

type TypographyProps = TypographyCommonProps & {
  size: FontSize
  weight: FontWeight
  lineHeight: FontSize
}

type TypographyType = FC<TypographyProps> & {
  H1: FC<TypographyCommonProps>
  H2: FC<TypographyCommonProps>
  H3: FC<TypographyCommonProps>
  Headline: FC<TypographyCommonProps>
  Paragraph: FC<TypographyCommonProps>
  ParagraphSemiBold: FC<TypographyCommonProps>
  Caption: FC<TypographyCommonProps>
  CaptionSemiBold: FC<TypographyCommonProps>
  CaptionMedium: FC<TypographyCommonProps>
  CaptionSmall: FC<TypographyCommonProps>
  CaptionLight: FC<TypographyCommonProps>
  ParagraphLight: FC<TypographyCommonProps>
  ParagraphMedium: FC<TypographyCommonProps>
  CaptionLightSmall: FC<TypographyCommonProps>
}

const getFontSize = (originalSize: number) => {
  // @ts-ignore
  Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false }
  if (PixelRatio.get() < 1.5) {
    return (originalSize * 0.5) / PixelRatio.get()
  } else if (PixelRatio.get() >= 1.5 && PixelRatio.get() < 2.5) {
    return (originalSize * 1.5) / PixelRatio.get()
  } else if (PixelRatio.get() >= 2.5) {
    return (originalSize * 2.5) / PixelRatio.get()
  } else {
    return originalSize
  }
}

export const Typography: TypographyType = ({
  children,
  style,
  size,
  weight = FontWeight.REGULAR,
  color = FontColor.DARK,
  alignment = FontAlignment.LEFT,
  lineHeight,
  ...props
}) => {
  const textStyle: TextStyle = {
    fontSize: getFontSize(size),
    fontFamily: fontWeightMap[weight],
    color: colorMap[color],
    textAlign: alignment,
    lineHeight: lineHeightMap[lineHeight],
  }

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  )
}

const TypographyH1: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.XXL}
    weight={FontWeight.BOLD}
    lineHeight={lineHeightMap[FontSize.XXL]}
    {...props}
  />
)

const TypographyH2: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.XL}
    weight={FontWeight.BOLD}
    lineHeight={lineHeightMap[FontSize.XL]}
    {...props}
  />
)

const TypographyH3: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.LG}
    weight={FontWeight.SEMI_BOLD}
    lineHeight={lineHeightMap[FontSize.LG]}
    {...props}
  />
)

const TypographyHeadline: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.BASE}
    weight={FontWeight.SEMI_BOLD}
    lineHeight={lineHeightMap[FontSize.BASE]}
    {...props}
  />
)

const TypographyParagraph: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.BASE}
    weight={FontWeight.REGULAR}
    lineHeight={lineHeightMap[FontSize.BASE]}
    {...props}
  />
)
const TypographyParagraphLight: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.BASE}
    weight={FontWeight.LIGHT}
    lineHeight={lineHeightMap[FontSize.BASE]}
    {...props}
  />
)

const TypographyParagraphSemiBold: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.BASE}
    weight={FontWeight.SEMI_BOLD}
    lineHeight={lineHeightMap[FontSize.BASE]}
    {...props}
  />
)
const TypographyParagraphMedium: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.BASE}
    weight={FontWeight.MEDIUM}
    lineHeight={lineHeightMap[FontSize.BASE]}
    {...props}
  />
)

const TypographyCaption: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    weight={FontWeight.REGULAR}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)

const TypographyCaptionSemiBold: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    weight={FontWeight.SEMI_BOLD}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyCaptionMedium: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    weight={FontWeight.MEDIUM}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)

const TypographyCaptionSmall: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.XS}
    weight={FontWeight.REGULAR}
    lineHeight={lineHeightMap[FontSize.XS]}
    {...props}
  />
)
const TypographyCaptionLight: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    weight={FontWeight.LIGHT}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyCaptionLightSmall: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.XS}
    weight={FontWeight.LIGHT}
    lineHeight={lineHeightMap[FontSize.XS]}
    {...props}
  />
)

Typography.H1 = TypographyH1
Typography.H2 = TypographyH2
Typography.H3 = TypographyH3
Typography.Headline = TypographyHeadline
Typography.Paragraph = TypographyParagraph
Typography.ParagraphSemiBold = TypographyParagraphSemiBold
Typography.Caption = TypographyCaption
Typography.CaptionSemiBold = TypographyCaptionSemiBold
Typography.CaptionSmall = TypographyCaptionSmall
Typography.CaptionMedium = TypographyCaptionMedium
Typography.CaptionLight = TypographyCaptionLight
Typography.ParagraphLight = TypographyParagraphLight
Typography.ParagraphMedium = TypographyParagraphMedium
Typography.CaptionLightSmall = TypographyCaptionLightSmall
