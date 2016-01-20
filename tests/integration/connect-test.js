import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('user-list', 'integration: connect test', {
    integration: true,
    setup() {
        this.inject.service('redux');
    }
});

test('should render parent component with one state and child component with another', function(assert) {
    this.render(hbs`{{user-list}}`);
    let $parent = this.$('.parent-state');
    let $child = this.$('.child-state');
    assert.equal($parent.text(), 0);
    assert.equal($child.text(), 9);
    this.$('.btn-up').trigger('click');
    assert.equal($parent.text(), 1);
    assert.equal($child.text(), 9);
    this.$('.btn-up').trigger('click');
    assert.equal($parent.text(), 2);
    assert.equal($child.text(), 9);
    this.$('.btn-down').trigger('click');
    assert.equal($parent.text(), 2);
    assert.equal($child.text(), 8);
    this.$('.btn-down').trigger('click');
    assert.equal($parent.text(), 2);
    assert.equal($child.text(), 7);
});
