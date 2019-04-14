Vue.component('task', {
  template: '<li><slot></slot></li>',
});

Vue.component('task-list', {
  template:
    '<div><task v-for="task in tasks" :key="task.task">{{ task.task }}</task></div>'
  ,

  data() {
    return {
      tasks: [
        { task: 'Go to the store', completed: true },
        { task: 'Go to the bank', completed: false },
        { task: 'Go to work', completed: false}
      ]
    };
  }
});

Vue.component('message', {
  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    };
  },

  template: `
    <article class="message" v-show="isVisible">
      <div class="message-header">
        {{ title }}
        <button type="button" @click="hideModal">x</button>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `,

  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }
});

Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p><slot></slot></p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
  `,
});

Vue.component('tabs', {
  template: `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>
      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
  `,

  data() {
    return {
      tabs: []
    }
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  },
});

Vue.component('tab', {
  props: {
    name: { required: true},
    selected: { default: false }
  },

  data() {
    return {
      isActive: false
    }
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  },

  template: `
    <div v-show="isActive"><slot></slot></div>
  `
});

Vue.component('coupon', {
  template: `
    <input placeholder="Coupon Code eingeben" @blur="onCouponApplied">
  `,

  methods: {
    onCouponApplied() {
      Event.$emit('applied');
    }
  }
});

window.Event = new Vue();

new Vue({
  el: '#root',

  data: {
    newName: '',
    // Array of names
    names: ['Joe', 'Mary', 'Jane', 'Jack'],
    hoverTitle: 'Ich bin ein cooler Button',
    className: 'color-red',
    isLoading: false,
    isDisabled: true,
    message: 'Hello World',
    showModal: false,
    couponApplied: false,
    tasks: [
      { description: 'Go to the store', completed: true },
      { description: 'Finish operations research homework', completed: false },
      { description: 'Make donation to Deutsche Tierrettung', completed: true },
      { description: 'Go through E-Mail inbox', completed: false },
      { description: 'Walk yuki', completed: true },
      { description: 'Clean apartment', completed: false },
    ]
  },

  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
    toggleClass() {
      this.isLoading = true;
    },
    toggleButtonState() {
      this.isDisabled = !this.isDisabled;
    },
    onCouponApplied() {
      this.couponApplied = true;
    }
  },

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  },

  created() {
    Event.$on('applied', () => {
      alert('Handling it!');
      this.onCouponApplied();
      }
    );
  }
});