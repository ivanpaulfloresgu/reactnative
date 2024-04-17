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
  NORMAL = 'normal',
  BOLD = 'bold',
  W_100 = '100',
  W_200 = '200',
  W_300 = '300',
  W_400 = '400',
  W_500 = '500',
  W_600 = '600',
  W_700 = '700',
  W_800 = '800',
  W_900 = '900',
}

export enum FontColor {
  BLACK,
  RED,
  SHADE_RED,
  WHITE,
  GRAY_0,
  GRAY_100,
  MEDIUM_GRAY,
  DARK_GRAY,
  GREEN,
  LIGHT_BLUE,
  SKY_BLUE,
  PURPLE_100,
  PURPLE_200,
  PURPLE_300,
  PRIMARY_100,
  PRIMARY_300,
  PRIMARY_400,
  PRIMARY_500,
  PRIMARY_600,
  PRIMARY_700,
  PRIMARY_800,
  NEUTRAL_100,
  NEUTRAL_500,
  NEUTRAL_600,
  NEUTRAL_700,
  NEUTRAL_800,
  NEUTRAL_900,
  ERROR_500,
  BLUE_100,
  BLUE_200,
  ORANGE,
  YELLOW_200,
  CYAN,
}

export enum FontAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum FontFamily {
  LATO_REGULAR = 'Lato-Regular',
  LATO_SEMIBOLD = 'Lato-Semibold',
  LATO_LIGHT = 'Lato-Light',
  LATO_BOLD = 'Lato-Bold',
  MONTSERRAT_REGULAR = 'Montserrat-Regular',
  MONTSERRAT_SEMIBOLD = 'Montserrat-SemiBold',
  MONTSERRAT_LIGHT = 'Montserrat-Light',
  MONTSERRAT_LINK = 'Montserrat-Link',
  MONTSERRAT_BOLD = 'Montserrat-Bold',
  AGRANDIR_BOLD = 'Agrandir-Bold',
  AGRANDIR_BOLDITALIC = 'Agrandir-BoldItalic',
  AGRANDIR_ITALIC = 'Agrandir-Italic',
  AGRANDIR_LIGHT = 'Agrandir-Light',
  AGRANDIR_LIGHTITALIC = 'Agrandir-LightItalic',
  AGRANDIR_REGULAR = 'Agrandir-Regular',
}

const colorMap: Record<FontColor, string> = {
  [FontColor.WHITE]: COLORS.WHITE,
  [FontColor.BLACK]: COLORS.BLACK,
  [FontColor.RED]: COLORS.RED,
  [FontColor.NEUTRAL_100]: COLORS.NEUTRAL[100],
  [FontColor.NEUTRAL_700]: COLORS.NEUTRAL[700],
  [FontColor.SHADE_RED]: COLORS.SHADE_RED[100],
  [FontColor.NEUTRAL_800]: COLORS.NEUTRAL[800],
  [FontColor.NEUTRAL_500]: COLORS.NEUTRAL[500],
  [FontColor.NEUTRAL_600]: COLORS.NEUTRAL[600],
  [FontColor.NEUTRAL_900]: COLORS.NEUTRAL[900],
  [FontColor.PRIMARY_100]: COLORS.PRIMARY[100],
  [FontColor.PRIMARY_300]: COLORS.PRIMARY[300],
  [FontColor.PRIMARY_400]: COLORS.PRIMARY[400],
  [FontColor.PRIMARY_500]: COLORS.PRIMARY[500],
  [FontColor.PRIMARY_600]: COLORS.PRIMARY[600],
  [FontColor.PRIMARY_700]: COLORS.PRIMARY[700],
  [FontColor.PRIMARY_800]: COLORS.PRIMARY[800],
  [FontColor.GRAY_0]: COLORS.GRAY[0],
  [FontColor.GRAY_100]: COLORS.GRAY[100],
  [FontColor.MEDIUM_GRAY]: COLORS.MEDIUM_GRAY,
  [FontColor.DARK_GRAY]: COLORS.DARK_GRAY,
  [FontColor.GREEN]: COLORS.PRIMARY_GREEN,
  [FontColor.LIGHT_BLUE]: COLORS.LIGHT_BLUE,
  [FontColor.SKY_BLUE]: COLORS.SKY_BLUE,
  [FontColor.PURPLE_100]: COLORS.PURPLE[100],
  [FontColor.PURPLE_200]: COLORS.PURPLE[200],
  [FontColor.PURPLE_300]: COLORS.PURPLE[300],
  [FontColor.ERROR_500]: COLORS.ERROR[500],
  [FontColor.BLUE_100]: COLORS.BLUE[100],
  [FontColor.BLUE_200]: COLORS.BLUE[200],
  [FontColor.ORANGE]: COLORS.ORANGE,
  [FontColor.YELLOW_200]: COLORS.YELLOW[200],
  [FontColor.CYAN]: COLORS.CYAN,
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
  fontFamily?: FontFamily
}

type TypographyProps = TypographyCommonProps & {
  size: FontSize
  weight?: FontWeight
  lineHeight: FontSize
  fontFamily?: FontFamily
}

type TypographyType = FC<TypographyProps> & {
  MontserratRegular: FC<TypographyCommonProps>
  MontserratSemiBold: FC<TypographyCommonProps>
  MontserratLight: FC<TypographyCommonProps>
  MontserratLink: FC<TypographyCommonProps>
  MontserratBold: FC<TypographyCommonProps>
  LatoRegular: FC<TypographyCommonProps>
  LatoSemiBold: FC<TypographyCommonProps>
  LatoBold: FC<TypographyCommonProps>
  LatoLight: FC<TypographyCommonProps>
  AgrandirBold: FC<TypographyCommonProps>
  AgrandirBoldItalic: FC<TypographyCommonProps>
  AgrandirItalic: FC<TypographyCommonProps>
  AgrandirLight: FC<TypographyCommonProps>
  AgrandirLightItalic: FC<TypographyCommonProps>
  AgrandirRegular: FC<TypographyCommonProps>
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
  fontFamily,
  color = FontColor.BLACK,
  alignment = FontAlignment.LEFT,
  lineHeight,
  weight,
  ...props
}) => {
  const textStyle: TextStyle = {
    fontSize: getFontSize(size),
    fontFamily: fontFamily,
    color: colorMap[color],
    textAlign: alignment,
    fontWeight: weight,
    lineHeight: lineHeightMap[lineHeight],
  }

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  )
}

const TypographyMontserratRegular: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.MONTSERRAT_REGULAR}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyMontserratBold: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.MONTSERRAT_BOLD}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyMontserratSemiBold: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.MONTSERRAT_SEMIBOLD}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyMontserratLight: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.MONTSERRAT_LIGHT}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyMontserratLink: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.MONTSERRAT_LINK}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyLatoRegular: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.LATO_REGULAR}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyLatoBold: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.LATO_BOLD}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyLatoSemiBold: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.LATO_SEMIBOLD}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyLatoLight: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.LATO_LIGHT}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyAgrandirBold: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.AGRANDIR_BOLD}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyAgrandirBoldItalic: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.AGRANDIR_BOLDITALIC}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyAgrandirItalic: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.AGRANDIR_ITALIC}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyAgrandirLight: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.AGRANDIR_LIGHT}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyAgrandirLightItalic: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.AGRANDIR_LIGHTITALIC}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)
const TypographyAgrandirRegular: FC<TypographyCommonProps> = props => (
  <Typography
    size={FontSize.SM}
    fontFamily={FontFamily.AGRANDIR_REGULAR}
    lineHeight={lineHeightMap[FontSize.SM]}
    {...props}
  />
)

Typography.MontserratRegular = TypographyMontserratRegular
Typography.MontserratBold = TypographyMontserratBold
Typography.MontserratSemiBold = TypographyMontserratSemiBold
Typography.MontserratLight = TypographyMontserratLight
Typography.MontserratLink = TypographyMontserratLink
Typography.LatoRegular = TypographyLatoRegular
Typography.LatoBold = TypographyLatoBold
Typography.LatoSemiBold = TypographyLatoSemiBold
Typography.LatoLight = TypographyLatoLight
Typography.AgrandirBold = TypographyAgrandirBold
Typography.AgrandirBoldItalic = TypographyAgrandirBoldItalic
Typography.AgrandirItalic = TypographyAgrandirItalic
Typography.AgrandirLight = TypographyAgrandirLight
Typography.AgrandirLightItalic = TypographyAgrandirLightItalic
Typography.AgrandirRegular = TypographyAgrandirRegular
