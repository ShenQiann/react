import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    console.log(info)
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
      console.log(info)

    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
class AddBookContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }

  componentDidMount() {   
   
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState){
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
      console.log(file.preview)
    }
  };
  render() {
    return (
      <div>
       AddBookContainer
       <button onClick={()=>{this.props.history.push('/index/0000')}}></button>
       <Dragger {...props}
       onPreview={this.handlePreview}
       > 
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </div>
    );
  }
}

export default connect(
  state => ({
  // user:state.app.user,
}),
(dispatch) => {
  return bindActionCreators({
    // reqGetUser: Actions.getUser,
  }, dispatch);
}
)(AddBookContainer);
