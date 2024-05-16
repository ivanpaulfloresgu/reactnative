import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import SignatureScreen from 'react-native-signature-canvas'
import { gridUnits, heightPercent, widthPercent } from '../utils/dimensions'
import { COLORS } from '../constants/colors'

type SignatureProps = {
  handleOK?: (signature: string) => void
}
const Signature: FC<SignatureProps> = ({ handleOK }) => {
  const webStyle = `.m-signature-pad--footer
      .save {
          display: none;
      }
      .clear {
          display: none;
      }
  `
  return (
    <View style={styles.container}>
      <SignatureScreen descriptionText="" onOK={handleOK} webStyle={webStyle} />
    </View>
  )
}

export default Signature

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.NEUTRAL[400],
    borderColor: COLORS.NEUTRAL[600],
    borderRadius: gridUnits(1),
    borderWidth: 1.5,
    height: heightPercent(0.19),
    justifyContent: 'center',
    marginVertical: gridUnits(1),
    width: widthPercent(0.92),
  },
})
