import './App.css'
import Portal from './components/Portal';
// import { IconAdd } from './components/Icon/icons/IconAdd'
// import { IconEmail } from './components/Icon/icons/IconEmail'
// import { createFromIconfont } from './components/Icon/createFrontIconfont'
import Space from './components/Space';
import { ConfigProvider } from './components/Space/ConfigProvide';
import Watermark from './components/Watermark';
// import { ConfigContext } from './components/Space/ConfigProvide';
// import User from './pages/user'

// const Iconfont = createFromIconfont('https://at.alicdn.com/t/c/font_4576010_cj2jgnkw29l.js?spm=a313x.manage_type_myprojects.i1.10.3d9e3a81osxzew&file=font_4576010_cj2jgnkw29l.js');

function App() {

  return (
    <>
    <Watermark content={['dwq']} gap={[0,0]} offset={[10,20]}>
    <Portal attach={document.body}>
      <button>anniu</button>
    </Portal>
    <ConfigProvider space={{size:20}}>
      <Space direction="horizontal">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </Space>
      <Space direction="vertical">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </Space>
      </ConfigProvider>
  </Watermark>
      {/* <IconAdd size={'40px'}/>
      <IconEmail style={{color:'blue', fontSize:"100px"}} spin/>
      <Iconfont type='icon-moon' fill='yellow' size="40px"></Iconfont>
      <Space><div>111</div>
    <div>222</div>
    <div>333</div></Space> */}
      {/* <User></User> */}
      {/* <User></User> */}
    </>
  )
}

export default App
