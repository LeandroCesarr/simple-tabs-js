const optionsDefault = {
  preSet: 'default',
  minHeight: true,
  customHeight: null,
};

export default class SimpleTabs {
  constructor(elm, options) {
    this.container = document.querySelector(elm);
    this.tabHolder = this.container.querySelector('[tab-list]');
    this.contentHolder = this.container.querySelector('[content-list]');
    this.listElements = [];
    this.lastTab = { tab: null, content: null };
    this.options = Object.assign(optionsDefault, options);
    this.setup();
  }

  setup() {
    this.createListElements();
    this.addSetupClassesHolders();
    this.addSetupClassesItems();
    this.setTabDefault();
    this.setMinHeight();
    this.setListeners();
    this.addElementForStyle();
  }

  createListElements() {
    this.tabHolder.querySelectorAll('[tab]').forEach((elm, i) => {
      this.listElements[i] = {
        tab: elm,
        content: this.contentHolder.querySelector(`[id=${elm.firstElementChild.getAttribute('href').replace(/^#/, '')}]`),
      };
    });
  }

  addSetupClassesHolders() {
    this.container.classList.add('simple-tabs', `pre-set-${this.options.preSet}`);

    this.tabHolder.classList.add('tab-list');
    this.contentHolder.classList.add('content-list');
  }

  addSetupClassesItems() {
    this.listElements.forEach((obj) => {
      obj.tab.classList.add('tab');
      obj.content.classList.add('content');
    });
  }

  setTabDefault() {
    const tabDefault = this.tabHolder.querySelector('[tab-default]');
    const targetDefault = tabDefault.firstElementChild.getAttribute('href').replace(/^#/, '');
    const contentDefault = this.contentHolder.querySelector(`[id=${targetDefault}]`);

    this.lastTab.tab = tabDefault;
    this.lastTab.content = contentDefault;

    tabDefault.classList.add('is-active');
    contentDefault.classList.add('is-active');
  }

  setMinHeight() {
    let minHeight = 0;

    if(this.options.customHeight === null) {
      if (this.options.minHeight) {
        this.listElements.forEach((elm) => {
          if (elm.content.offsetHeight > minHeight) {
            minHeight = elm.content.offsetHeight;
          }
        });
  
        this.contentHolder.style.minHeight = `${minHeight}px`;
      }
    } else {
      this.contentHolder.style.minHeight = this.options.customHeight;
    }
  }

  setListeners() {
    this.listElements.forEach((obj) => {
      obj.tab.addEventListener('click', (evt) => {
        evt.preventDefault();

        this.lastTab.tab.classList.remove('is-active');
        this.lastTab.content.classList.remove('is-active');

        obj.content.classList.add('is-active');
        obj.tab.classList.add('is-active');

        this.lastTab.tab = obj.tab;
        this.lastTab.content = obj.content;
      });
    });
  }
}

