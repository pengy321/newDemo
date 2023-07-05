import React, { useState, useEffect } from 'react';
import DrawingCss from './Drawing.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

const useStyles1 = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 20,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const StyledTab = withStyles((theme) => ({
  root: {
    border: '2px solid ', // 设置边框样式
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      opacity: 1,
    },
    '&$selected': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.primary.main,
    },
  },
  selected: {}, // 选择状态下的样式
}))((props) => <Tab {...props} />);



export default function Drawing() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  let [defaultValue, setDefaultValue] = React.useState(0)
  return (
    <div className="box">

      <div className='boxNav'>
        <ul>
          <Button >DALL.E2</Button>
          <Button color="secondary">Midjourney</Button>
        </ul>
        <ul>
          <Button color="primary">历史记录</Button>
          <Button color="primary">模板</Button>
        </ul>
      </div>

      <div className='boxImgText'>
        <Grid container alignItems="center" className={classes.root}  >
          <div className="custom-file-upload">
            <div className="image-preview"></div>
            <div className="text-description">span</div>
            <label htmlFor="upload-file" className="upload-button">选择文件</label>
            <input type="file" id="upload-file"></input>
          </div>
          <Divider orientation="vertical" flexItem />
          <input className='textInput'></input>


        </Grid>
      </div>

      <div className='boxImageSize'>
        <ul style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>图片大小</span>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <StyledTab label="256*256" />
            <StyledTab label="512*512" />
            <StyledTab label="1028*1028" />
          </Tabs>

        </ul>
      </div>
      <div className='boxPretto'>
        <div className={classes1.root} style={{ display: 'flex', alignItems: 'center', }}>
          <Typography gutterBottom>与参考图的相似度：</Typography>
          <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={defaultValue} />
          <span style={{ marginLeft: '10px' }}>{defaultValue}%</span>

        </div>

      </div>

      <div className='boxBut'>
        <Button variant="contained" color="secondary">
          生成草稿
        </Button>
      </div>
      <div className='boxImageShow'>
        <div>
          <p>图片生成中：{defaultValue}%</p>
        </div>
      </div>
    </div>
  );
}