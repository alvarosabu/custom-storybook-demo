import SushiButton from "./SushiButton.vue";

export default {
  title: "Components/Button",
  component: SushiButton,
  argTypes: {
    label: { control: { type: "text", defaultValue: "Button" } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SushiButton },
  setup() {
    return { args };
  },
  template: '<sushi-button v-bind="args" />',
});

export const Basic = Template.bind({});

Basic.args = { label: "Button" };
