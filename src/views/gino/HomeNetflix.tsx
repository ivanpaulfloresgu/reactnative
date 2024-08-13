import React, { Children, FC, useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import ViewBase from '../../components/ViewBase'
import {
  FontAlignment,
  FontColor,
  FontSize,
  Typography,
} from '../../components/Typography'
import { COLORS } from '../../constants/colors'
import {
  GinoFlowScreen,
  GinoStackParamList,
} from '../../navigation/GinoStack/GinoFlowScreen'
import { IMAGES } from '../../constants/images'
import { gridUnits, heightPercent, widthPercent } from '../../utils/dimensions'
import { CircularCarouselItem } from './components/CircularCarouselItem'
import WebView from 'react-native-webview'
import { MovieItem } from './components/MovieItem'
import axios, { Axios } from 'axios'
import { Character } from '../../models/Gino'

type HomeNetflixProps = StackScreenProps<GinoStackParamList, 'HOME_NETFLIX'>
export const HomeNetflix: FC<HomeNetflixProps> = ({ navigation, route }) => {
  const selectTrailer = route.params.ginoFlow?.selectTrailer
  const [modalVisible, setModalVisible] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/character/483',
        )
        setCharacter(response.data)
      } catch (error) {
        console.log('Error fetching character', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCharacter()
  }, [])

  const openTrailerMovie = (url: string) => {
    console.log('url', url)
    setVideoUrl(url)
    setModalVisible(true)
  }

  const closeTrailerMovie = () => {
    setModalVisible(false)
    setVideoUrl(null)
  }

  // console.log("character",character)
  const goToMovieInformation = (ch: Character) => {
    navigation.push(GinoFlowScreen.MOVIE_INFORMATION, {
      ginoFlow: {
        selectMovieInformation: ch,
      },
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ aspectRatio: 10 / 8 }}>
          <Image source={IMAGES.drawer.the100} style={styles.movieStyle} />
          <View style={styles.overlay}>
            <View style={styles.listContainer}>
              <Image source={IMAGES.drawer.n_icon} style={styles.icon} />
              <Typography.AgrandirBold
                size={FontSize.BASE}
                color={FontColor.WHITE}>
                {'TV Shows'}
              </Typography.AgrandirBold>
              <Typography.AgrandirBold
                size={FontSize.BASE}
                color={FontColor.WHITE}>
                {'Movies'}
              </Typography.AgrandirBold>
              <Typography.AgrandirBold
                size={FontSize.BASE}
                color={FontColor.WHITE}>
                {'MyList'}
              </Typography.AgrandirBold>
            </View>
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <Typography.AgrandirBold size={FontSize.SM} color={FontColor.WHITE}>
            {'Soapy'}
          </Typography.AgrandirBold>
          <Typography.AgrandirBold size={FontSize.SM} color={FontColor.WHITE}>
            {'Exciting'}
          </Typography.AgrandirBold>
          <Typography.AgrandirBold size={FontSize.SM} color={FontColor.WHITE}>
            {'Teen'}
          </Typography.AgrandirBold>
          <Typography.AgrandirBold size={FontSize.SM} color={FontColor.WHITE}>
            {'Drama'}
          </Typography.AgrandirBold>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginBottom: gridUnits(1),
          }}>
          <View style={{ alignItems: 'center' }}>
            <Typography.AgrandirBold size={FontSize.SM} color={FontColor.WHITE}>
              {'+'}
            </Typography.AgrandirBold>
            <Typography.AgrandirBold
              size={FontSize.SM}
              color={FontColor.WHITE}
              lineHeight={FontSize.SM}>
              {'My List'}
            </Typography.AgrandirBold>
          </View>

          <View style={styles.buttonPlayStyle}>
            <Typography.AgrandirBold
              size={FontSize.SM}
              alignment={FontAlignment.CENTER}
              color={FontColor.BLACK}
              lineHeight={FontSize.SM}>
              {'Play'}
            </Typography.AgrandirBold>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Typography.AgrandirBold size={FontSize.SM} color={FontColor.WHITE}>
              {'9'}
            </Typography.AgrandirBold>
            <Typography.AgrandirBold
              size={FontSize.SM}
              color={FontColor.WHITE}
              lineHeight={FontSize.SM}>
              {'Info'}
            </Typography.AgrandirBold>
          </View>
        </View>
        <View style={styles.movieContainer}>
          <Typography.AgrandirBold
            size={FontSize.SM}
            color={FontColor.WHITE}
            lineHeight={FontSize.SM}
            style={{ marginBottom: gridUnits(1.5) }}>
            {'Previews'}
          </Typography.AgrandirBold>
          <ScrollView horizontal>
            {selectTrailer?.preferences?.map((preferences, index) => (
              <CircularCarouselItem
                key={index}
                data={preferences}
                onPress={() => openTrailerMovie(preferences.link)}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.movieContainer}>
          <Typography.AgrandirBold
            size={FontSize.SM}
            color={FontColor.WHITE}
            lineHeight={FontSize.SM}
            style={{ marginBottom: gridUnits(1.5) }}>
            {'Movies'}
          </Typography.AgrandirBold>

          <FlatList
            horizontal
            data={character ? [character] : []}
            keyExtractor={(_, index) => String(index)}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => (
              <MovieItem data={item} onPress={goToMovieInformation} />
            )}
          />
        </View>
      </ScrollView>

      {videoUrl && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeTrailerMovie}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeTrailerMovie}>
                <Typography.AgrandirBold
                  size={FontSize.SM}
                  color={FontColor.WHITE}>
                  {'Close'}
                </Typography.AgrandirBold>
              </TouchableOpacity>
              <WebView
                source={{ uri: videoUrl }}
                style={styles.webview}
                // onError={(error: WebViewErrorEvent) => {
                //   console.error('WebView error:', error.nativeEvent);
                // }}
                // onLoadStart={() => console.log('Loading URL:', videoUrl)}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonPlayStyle: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.WHITE,
    borderRadius: gridUnits(0.5),
    borderWidth: 0.5,
    padding: gridUnits(0.6),
    width: widthPercent(0.34),
  },
  categoriesContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: gridUnits(8),
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: heightPercent(0.1),
    resizeMode: 'contain',
    width: widthPercent(0.1),
  },
  listContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: gridUnits(2),
    width: widthPercent(1),
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 10,
    height: '60%',
    overflow: 'hidden',
    width: '80%',
  },
  movieContainer: {
    padding: gridUnits(2),
  },
  movieStyle: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    top: -200,
  },
  webview: {
    flex: 1,
  },
})
