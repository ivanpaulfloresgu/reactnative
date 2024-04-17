import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { IvanStackParamList } from '../../navigation/IvanStack/IvanFlowScreen'
import ViewBase from '../../components/ViewBase'
import Signature from '../../components/Signature'
import { COLORS } from '../../constants/colors'
import { StyleSheet } from 'react-native'
import { gridUnits } from '../../utils/dimensions'

type SignatureSectionProps = StackScreenProps<
  IvanStackParamList,
  'SIGNATURE_SECTION'
>
export const SignatureSection: FC<SignatureSectionProps> = ({ navigation }) => {
  const goToHome = () => {
    navigation.pop()
  }
  const handleOK = (signature: string) => {
    console.log(signature)
  }
  return (
    <ViewBase
      showHeader
      showRightButton
      backgroundColor={COLORS.SKY_BLUE}
      rightActionButton={goToHome}
      title="signature"
      contentStyle={styles.container}>
      <Signature handleOK={handleOK} />
    </ViewBase>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: gridUnits(2),
  },
})
