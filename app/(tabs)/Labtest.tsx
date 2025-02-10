import { StyleSheet, Image, Platform, View, Pressable } from 'react-native';

import { Collapsible } from '@/components/CustomDrawerContent';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function LabTestsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E3F2FD', dark: '#1E2A38' }}
      headerImage={
       <Image source={ require("../../assets/images/labheader.jpeg")} className='w-full h-full' />
      }>
      
      {/* Title */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lab Tests</ThemedText>
      </ThemedView>

     
      <ThemedText>Get your health checked with our wide range of lab tests.</ThemedText>

     
      <Collapsible title="Top Lab Tests">
        <ThemedText type="defaultSemiBold">1. Complete Blood Count (CBC) - ₹500</ThemedText>
        <ThemedText type="defaultSemiBold">2. Lipid Profile - ₹700</ThemedText>
        <ThemedText type="defaultSemiBold">3. Thyroid Function Test - ₹800</ThemedText>
        <ThemedText type="defaultSemiBold">4. Vitamin D Test - ₹1200</ThemedText>
      </Collapsible>

     
      <Collapsible title="How It Works">
        <ThemedText>1. Choose your test</ThemedText>
        <ThemedText>2. Book a time slot</ThemedText>
        <ThemedText>3. Get results online</ThemedText>
      </Collapsible>

      
      <Collapsible title="Home Sample Collection">
        <ThemedText>We offer free home sample collection for selected tests.</ThemedText>
        <ExternalLink href="https://yourlabtests.com/book">
          <ThemedText type="link">Book a Home Visit</ThemedText>
        </ExternalLink>
      </Collapsible>

      
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/labtest.jpeg')}
          style={styles.image}
        />
      </View>

      
      <Pressable style={styles.button}>
        <ThemedText type="buttonText">Book a Lab Test</ThemedText>
      </Pressable>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#0D47A1',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 180,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0D47A1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
});
