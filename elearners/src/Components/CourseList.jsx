import android from '../pictures/android.jpg';
import ml from '../pictures/ml.jpeg';
import python from '../pictures/python.png';
import webDev from '../pictures/wb.png';
import java from '../pictures/java.png';
import springBoot from '../pictures/springBoot.png';

const Courses = [
  {
    imgsrc: android,
    title: 'android',
  },
  {
    imgsrc: ml,
    title: 'machine learning',
  },
  {
    imgsrc: python,
    title: 'python',
  },
  {
    imgsrc: webDev,
    title: 'webDev',
  },
  {
    imgsrc: java,
    title: 'java',
  },
  {
    imgsrc: springBoot,
    title: 'spring boot',
  },
];

const CourseImage = {
  android,
  ml,
  python,
  webDev,
  java,
  springBoot,
};

export { CourseImage, Courses };
