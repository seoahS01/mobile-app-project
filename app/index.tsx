import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

export default function HomeScreen() {
  const [popupType, setPopupType] = useState(null);
  const [selectedImages, setSelectedImages] = useState({
    outerwear: null,
    tops: null,
    bottoms: null,
    accessories: null,
    shoes: null,
  });


  const categories = {
    outerwear: [
      { image: require('../assets/cloth-images/coat.png'), name: '코트' },
      { image: require('../assets/cloth-images/short-padding.png'), name: '숏패딩' },
      { image: require('../assets/cloth-images/long-padding.png'), name: '롱패딩' },
    ],
    tops: [
      { image: require('../assets/cloth-images/knit.png'), name: '니트' },
      { image: require('../assets/cloth-images/mantoman.png'), name: '맨투맨' },
      { image: require('../assets/cloth-images/fluff-mantoman.png'), name: '기모 상의' },
    ],
    bottoms: [
      { image: require('../assets/cloth-images/jeans.png'), name: '청바지' },
      { image: require('../assets/cloth-images/fluff-jeans.png'), name: '기모 청바지' },
      { image: require('../assets/cloth-images/long-skirt.png'), name: '롱치마' },
      { image: require('../assets/cloth-images/short-skirt.png'), name: '치마' },
    ],
    accessories: [
      { image: require('../assets/cloth-images/hat.png'), name: '모자' },
      { image: require('../assets/cloth-images/muffler.png'), name: '목도리' },
      { image: require('../assets/cloth-images/gloves.png'), name: '장갑' },
    ],
    shoes: [
      { image: require('../assets/cloth-images/boots.png'), name: '털부츠' },
      { image: require('../assets/cloth-images/sneakers.png'), name: '운동화' },
    ],
  };

  const openPopup = (type: React.SetStateAction<null>) => setPopupType(type);
  const closePopup = () => setPopupType(null);

  const selectImage = (category: any, image: undefined) => {
    setSelectedImages((prev) => ({ ...prev, [category]: image }));
    closePopup();
  };

  return (
    <View style={styles.container}>
      {/* 상단 정보 */}
      <View style={styles.header}>
        <Text style={styles.dateText}>2024년 12월 14일 오후 1시 30분</Text>
        <Text style={styles.weatherText}>오늘의 날씨   -4°C</Text>
      </View>

      {/* 제목 */}
      <Text style={styles.title}>따뜻한 오늘을 기억해보아요!</Text>

      {/* + 버튼들 */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={[styles.plusButton, styles.tallBox]} onPress={() => openPopup('outerwear')}>
          {selectedImages['outerwear'] ? (
            <Image source={selectedImages['outerwear']} style={styles.selectedImage} />
          ) : (
            <Text style={styles.plusText}>+</Text>
          )}
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <View style={styles.verticalColumn}>
            <TouchableOpacity style={[styles.plusButton, styles.mediumBox]} onPress={() => openPopup('tops')}>
              {selectedImages['tops'] ? (
                <Image source={selectedImages['tops']} style={styles.selectedImage} />
              ) : (
                <Text style={styles.plusText}>+</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.plusButton, styles.mediumBox]} onPress={() => openPopup('bottoms')}>
              {selectedImages['bottoms'] ? (
                <Image source={selectedImages['bottoms']} style={styles.selectedImage} />
              ) : (
                <Text style={styles.plusText}>+</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.plusButton, styles.smallBox]} onPress={() => openPopup('shoes')}>
              {selectedImages['shoes'] ? (
                <Image source={selectedImages['shoes']} style={styles.selectedImage} />
              ) : (
                <Text style={styles.plusText}>+</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.verticalColumn}>
            <TouchableOpacity style={[styles.plusButton, styles.mediumBox]} onPress={() => openPopup('accessories')}>
              {selectedImages['accessories'] ? (
                <Image source={selectedImages['accessories']} style={styles.selectedImage} />
              ) : (
                <Text style={styles.plusText}>+</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.plusButton, styles.mediumBox]}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.plusButton, styles.smallBox]}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 팝업창 */}
      <Modal visible={!!popupType} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.popupTitle}>{popupType.toUpperCase()}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              {categories[popupType]?.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <TouchableOpacity onPress={() => selectImage(popupType, item.image)}>
                    <Image source={item.image} style={styles.image} />
                  </TouchableOpacity>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      {/* 저장하기 버튼 */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>저장하기</Text>
      </TouchableOpacity>

      {/* 하단 아이콘 버튼 */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/images/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/images/albums.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E1D1',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    backgroundColor: '#EBD2C1',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 14,
  },
  weatherText: {
    backgroundColor: '#EBD2C1',
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    width: '90%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  verticalColumn: {
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  plusButton: {
    borderWidth: 1,
    borderColor: '#D1A794',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  plusText: {
    fontSize: 24,
    color: '#8B6F56',
  },
  tallBox: {
    height: 200,
    width: 100,
  },
  mediumBox: {
    height: 100,
    width: 100,
  },
  smallBox: {
    height: 66,
    width: 100,
  },
  saveButton: {
    backgroundColor: '#D1A794',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  saveText: {
    fontSize: 16,
    color: '#FFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#EBD2C1',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 18,
    color: '#8B6F56',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  itemText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#EBD2C1',
    padding: 10,
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

