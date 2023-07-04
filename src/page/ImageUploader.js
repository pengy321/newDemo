import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function App() {
    // 定义进度条初始值
  const [uploadOrDownloadCount, setUploadOrDownloadCount] = React.useState(0);

  const handleFileChange = (event) => {
    //获取files中第一个图片信息
    const file = event.target.files[0];
    //当file为真时
    if (file) {
      const reader = new FileReader();
      //onloadstart文件加载时触发
      reader.onloadstart = () => {
        setUploadOrDownloadCount(0);
      };
      //文件加载过程中触发 onprogress
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          console.log(event.loaded , event.total);
          setUploadOrDownloadCount(progress);
        }
      };

      //文件加载完成时触
      reader.onload = () => {
        // 图片加载完成后的处理
        // setUploadOrDownloadCount(100);
        console.log('Image loaded successfully');
        // 在这里可以使用 reader.result 来访问加载的图片数据
      };

      //文件加载过程中出现错误时触发
      reader.onerror = () => {
        setUploadOrDownloadCount(0);
        console.log('Error loading image');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h4>How to show upload/download percentage in ReactJS?</h4>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      <br />
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={uploadOrDownloadCount} />
        <Box
          bottom={0}
          right={0}
          top={0}
          justifyContent="center"
          left={0}
          display="flex"
          alignItems="center"
          position="absolute"
        >
          {`${Math.round(uploadOrDownloadCount)}%`}
        </Box>
      </Box>
    </div>
  );
}