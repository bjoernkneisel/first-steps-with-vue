Vue.component('task', {
  template: '<li><slot></slot></li>',
});

Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks" :key="task.task">{{ task.task }}</task>
    </div>
  `,
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
})

var app = new Vue({
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
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  }
})