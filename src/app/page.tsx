import Hero from './components/hero/hero';
import Selling from './components/selling/selling';
import Overview from './components/overview/overview';
import Comments from './components/comments/comments';
import Calling from './components/calling/calling';

export default function Home() {
  return (
  <>
    <Hero users='10M+' location='50+' servers='120+'></Hero>
    <Selling></Selling>
    <Overview></Overview>
    <Comments></Comments>
    <Calling></Calling>
  </>
  );
}
