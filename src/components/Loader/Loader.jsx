import { ColorRing } from "react-loader-spinner";

const Loader = () => { 
  return (
    <ColorRing
      // visible={true}
      height="40"
      width="40"
      // ariaLabel="blocks-loading"
      wrapperStyle={{margin: '0 auto'}}
      // wrapperClass="blocks-wrapper"
      // colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
}

export default Loader;