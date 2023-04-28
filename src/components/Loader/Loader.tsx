import { Spin } from "antd";
import { FC } from "react";

const Loader: FC = () => {
    return (
        <div style={{
            display: 'flex',
            minHeight: 350
        }}>
            <div style={{ margin: 'auto' }}><Spin size="large" /></div>
        </div>
    );
}
export default Loader;