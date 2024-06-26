export default {
  methods: {
    setStyles() {
      let triggerPos = this.$refs.trigger.getBoundingClientRect();
      let bodyPos = this.$refs.body.getBoundingClientRect();
      let fProp = this.isVertical ? this.second : this.first;
      let sProp = this.isVertical ? this.first : this.second;
      this.$refs.body.style.top = this[fProp](triggerPos, bodyPos);
      this.$refs.body.style.left = this[sProp](triggerPos, bodyPos);
    },
    topVertical(trigger, body) {
      return trigger.top + 'px';
    },
    topHorizontal(trigger, body) {
      return (trigger.top - body.height) - this.offset + 'px';
    },
    centerVertical(trigger, body) {
      return ((trigger.top + (trigger.height / 2)) - (body.height / 2)) + 'px';
    },
    centerHorizontal(trigger, body) {
      return ((trigger.left + (trigger.width / 2)) - (body.width / 2)) + 'px';
    },
    bottomVertical(trigger, body) {
      return (trigger.top - (body.height - trigger.height)) + 'px'
    },
    bottomHorizontal(trigger, body) {
      return (trigger.top + trigger.height) + this.offset + 'px';
    },
    leftVertical(trigger, body) {
      return (trigger.left - body.width) - this.offset + 'px';
    },
    leftHorizontal(trigger, body) {
      return ((trigger.left + trigger.width) - body.width) + 'px';
    },
    rightVertical(trigger, body) {
      return (trigger.left + trigger.width) + this.offset + 'px';
    },
    rightHorizontal(trigger, body) {
      return trigger.left + 'px';
    }
  },
  computed: {
    isVertical() {
      let name = this.position.split('-')[0];
      return (name === 'left' || name === 'right');
    },
    setTranslate() {
      return this.isVertical ? 'translateY(-50%)' : 'translateX(-50%)';
    },
    second() {
      let name = this.position.split('-')[1];
      return this.isVertical ? `${name}Vertical` : `${name}Horizontal`;
    },
    first() {
      let name = this.position.split('-')[0];
      return this.isVertical ? `${name}Vertical` : `${name}Horizontal`;
    },
    pointerClasses() {
      let name = this.position.split('-')[0];
      return [
        'lav-dropdown-pointer',
        `lav-dropdown-pointer-${name}`
      ]
    }
  },
  watch: {
    visible(n) {
      if(n) {
        this.$nextTick(() => this.setStyles());
      }
    }
  }
}
