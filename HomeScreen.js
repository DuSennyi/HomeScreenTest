import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text>Christie Doe</Text>
        </View>
        <Image
          source={{ uri: 'https://images.search.yahoo.com/images/view;_ylt=Awr98PPJUAZniS4UpUeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I5MmExMmFjMWM0YzA2OGViYmZjYjNhNjY1MjYyYTMxBGdwb3MDMjMEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%25E1%25BA%25A3nh%2B%25C4%2591%25E1%25BA%25B9p%2B50x50%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D23&w=1000&h=1333&imgurl=anhcuoiviet.vn%2Fwp-content%2Fuploads%2F2022%2F09%2Fde-thuong-2.jpg&rurl=https%3A%2F%2Fthcshuynhphuoc-np.edu.vn%2Fbo-suu-tap-hinh-nen-anh-dep-cuc-chat-co-hon-999-mau-day-du-4k%2F&size=229KB&p=%E1%BA%A3nh+%C4%91%E1%BA%B9p+50x50&oid=b92a12ac1c4c068ebbfcb3a665262a31&fr2=piv-web&fr=mcafee&tt=B%E1%BB%99+S%C6%B0u+T%E1%BA%ADp+H%C3%ACnh+N%E1%BB%81n+%E1%BA%A2nh+%C4%90%E1%BA%B9p+C%E1%BB%B1c+Ch%E1%BA%A5t%2C+C%C3%B3+H%C6%A1n+999+M%E1%BA%ABu%2C+%C4%90%E1%BA%A7y+%C4%90%E1%BB%A7+4K&b=0&ni=21&no=23&ts=&tab=organic&sigr=5nmlKn3bDpvY&sigb=4fxUx.FqPBzs&sigi=dckeVbpmIAXa&sigt=GsQI18Flg1CW&.crumb=X4otzHU/HAB&fr=mcafee&fr2=piv-web&type=E210US91215G0' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.insightsSection}>
        <Text style={styles.sectionTitle}>Your Insights</Text>
        <View style={styles.grid}>
          <InsightCard icon="qrcode" bgColor="#E0E7FF" title="Scan new" value="Scanned 483" />
          <InsightCard icon="exclamation-triangle" bgColor="#FDE8E8" title="Counterfeits" value="Counterfeited 32" />
          <InsightCard icon="check-circle" bgColor="#D1FAE5" title="Success" value="Checkouts 8" />
          <InsightCard icon="calendar" bgColor="#DBEAFE" title="Directory" value="History 26" />
        </View>
      </View>

      <View style={styles.exploreSection}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <View style={styles.exploreContent}>
          <View style={styles.imageRow}>
            <Image source={{ uri: 'https://images.search.yahoo.com/images/view;_ylt=AwrjR_ZMUAZn9iIZpyaJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2QyNTNlMmM1OWE3MzA0ZWI3NDRhMzRlMTNjYzdhODlmBGdwb3MDMjQEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%25E1%25BA%25A3nh%2B100x100%2B%25C4%2591%25E1%25BA%25B9p%26ei%3DUTF-8%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D24&w=1080&h=1080&imgurl=kynguyenlamdep.com%2Fwp-content%2Fuploads%2F2022%2F08%2Favatar-co-nang-toc-ngan-deo-kinh.jpg&rurl=https%3A%2F%2Fdongphucdpnt.com%2Fanh-avatar-co-gai%2F&size=73KB&p=%E1%BA%A3nh+100x100+%C4%91%E1%BA%B9p&oid=d253e2c59a7304eb744a34e13cc7a89f&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=%E1%BA%A2nh+Avatar+C%C3%B4+G%C3%A1i%3A+T%E1%BA%A1o+H%C3%ACnh+%E1%BA%A2nh+Cool+Cho+T%C3%A0i+Kho%E1%BA%A3n+M%E1%BA%A1ng+X%C3%A3+H%E1%BB%99i+C%E1%BB%A7a+B%E1%BA%A1n%21+Nh%E1%BA%A5n+V%C3%A0o+%C4%90%C3%A2y%21&b=0&ni=160&no=24&ts=&tab=organic&sigr=eNS.ADu2nK7O&sigb=FZKkqZOKOO3H&sigi=ronku8ylUWpW&sigt=yNHCYA2ew8hR&.crumb=X4otzHU/HAB&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US91215G0' }} style={styles.exploreImage} />
            <Image source={{ uri: 'https://images.search.yahoo.com/images/view;_ylt=AwrjR_ZMUAZn9iIZpyaJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2QyNTNlMmM1OWE3MzA0ZWI3NDRhMzRlMTNjYzdhODlmBGdwb3MDMjQEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%25E1%25BA%25A3nh%2B100x100%2B%25C4%2591%25E1%25BA%25B9p%26ei%3DUTF-8%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D24&w=1080&h=1080&imgurl=kynguyenlamdep.com%2Fwp-content%2Fuploads%2F2022%2F08%2Favatar-co-nang-toc-ngan-deo-kinh.jpg&rurl=https%3A%2F%2Fdongphucdpnt.com%2Fanh-avatar-co-gai%2F&size=73KB&p=%E1%BA%A3nh+100x100+%C4%91%E1%BA%B9p&oid=d253e2c59a7304eb744a34e13cc7a89f&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=%E1%BA%A2nh+Avatar+C%C3%B4+G%C3%A1i%3A+T%E1%BA%A1o+H%C3%ACnh+%E1%BA%A2nh+Cool+Cho+T%C3%A0i+Kho%E1%BA%A3n+M%E1%BA%A1ng+X%C3%A3+H%E1%BB%99i+C%E1%BB%A7a+B%E1%BA%A1n%21+Nh%E1%BA%A5n+V%C3%A0o+%C4%90%C3%A2y%21&b=0&ni=160&no=24&ts=&tab=organic&sigr=eNS.ADu2nK7O&sigb=FZKkqZOKOO3H&sigi=ronku8ylUWpW&sigt=yNHCYA2ew8hR&.crumb=X4otzHU/HAB&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US91215G0' }} style={styles.exploreImage} />
            <Image source={{ uri: 'https://images.search.yahoo.com/images/view;_ylt=AwrjR_ZMUAZn9iIZpyaJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2QyNTNlMmM1OWE3MzA0ZWI3NDRhMzRlMTNjYzdhODlmBGdwb3MDMjQEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%25E1%25BA%25A3nh%2B100x100%2B%25C4%2591%25E1%25BA%25B9p%26ei%3DUTF-8%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D24&w=1080&h=1080&imgurl=kynguyenlamdep.com%2Fwp-content%2Fuploads%2F2022%2F08%2Favatar-co-nang-toc-ngan-deo-kinh.jpg&rurl=https%3A%2F%2Fdongphucdpnt.com%2Fanh-avatar-co-gai%2F&size=73KB&p=%E1%BA%A3nh+100x100+%C4%91%E1%BA%B9p&oid=d253e2c59a7304eb744a34e13cc7a89f&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=%E1%BA%A2nh+Avatar+C%C3%B4+G%C3%A1i%3A+T%E1%BA%A1o+H%C3%ACnh+%E1%BA%A2nh+Cool+Cho+T%C3%A0i+Kho%E1%BA%A3n+M%E1%BA%A1ng+X%C3%A3+H%E1%BB%99i+C%E1%BB%A7a+B%E1%BA%A1n%21+Nh%E1%BA%A5n+V%C3%A0o+%C4%90%C3%A2y%21&b=0&ni=160&no=24&ts=&tab=organic&sigr=eNS.ADu2nK7O&sigb=FZKkqZOKOO3H&sigi=ronku8ylUWpW&sigt=yNHCYA2ew8hR&.crumb=X4otzHU/HAB&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US91215G0' }} style={styles.exploreImage} />
          </View>
          <FontAwesome name="arrow-right" size={24} color="gray" />
        </View>
      </View>

      <View style={styles.bottomNav}>
        <FontAwesome name="home" size={28} color="#3B82F6" />
        <FontAwesome name="bell" size={28} color="gray" />
        <FontAwesome name="qrcode" size={28} color="gray" />
        <FontAwesome name="shopping-cart" size={28} color="gray" />
      </View>
    </View>
  );
};

const InsightCard = ({ icon, bgColor, title, value }) => (
  <View style={styles.card}>
    <View style={[styles.cardIconContainer, { backgroundColor: bgColor }]}>
      <FontAwesome name={icon} size={24} color="#000" />
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  grid: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
  },
  cardIconContainer: {
    padding: 12,
    borderRadius: 25,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  exploreSection: {
    marginTop: 20,
  },
  exploreContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exploreImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    elevation: 10,
  },
});

export default HomeScreen;
