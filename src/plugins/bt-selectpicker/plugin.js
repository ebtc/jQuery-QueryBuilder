QueryBuilder.define('bt-selectpicker', function(options) {
    if (!$.fn.selectpicker || !$.fn.selectpicker.Constructor) {
        error('Bootstrap Select is required to use "bt-selectpicker" plugin. Get it here: http://silviomoreto.github.io/bootstrap-select');
    }

    // init selectpicker
    this.on('afterCreateRuleFilters', function(rule) {
        rule.$el.find('.rule-filter-container select').removeClass('form-control').selectpicker(options);
    });

    this.on('afterCreateRuleOperators', function(rule) {
        rule.$el.find('.rule-operator-container select').removeClass('form-control').selectpicker(options);
    });

    // update selectpicker on change
    this.on('afterUpdateRuleFilter', function(rule) {
        rule.$el.find('.rule-filter-container select').selectpicker('render');
    });

    this.on('afterUpdateRuleOperator', function(rule) {
        rule.$el.find('.rule-operator-container select').selectpicker('render');
    });
}, {
    container: 'body',
    style: 'btn-inverse btn-xs',
    width: 'auto',
    showIcon: false
});