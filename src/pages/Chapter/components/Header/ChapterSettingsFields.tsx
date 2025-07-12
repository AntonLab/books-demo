import { Form, /* Select, */ Slider } from 'antd'
import { type FC } from 'react'

const ChapterSettingsFields: FC = () => (
  <>
    <Form.Item label="Brightness" name="brightness">
      <Slider max={5} />
    </Form.Item>

    <Form.Item label="Size" name="fontSize">
      <Slider min={10} max={40} />
    </Form.Item>

    <Form.Item label="Padding" name="padding">
      <Slider step={5} max={40} />
    </Form.Item>

    <Form.Item label="Line Height" name="lineHeight">
      <Slider max={5} />
    </Form.Item>

    {/* <Form.Item label="Font" name="font">
      <Select options={[{ label: '', value: '' }]} />
    </Form.Item> */}
  </>
)

export default ChapterSettingsFields
