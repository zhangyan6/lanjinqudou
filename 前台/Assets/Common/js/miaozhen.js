/**
 * Created by alfredgao on 16/6/28.
 */
(function(a, e, f, g, b, c, d) {a.ClickiTrackerName = b;
    a[b] = a[b] || function() {(a[b].queue = a[b].queue || []).push(arguments)};
    a[b].start = +new Date; c = e.createElement(f); d = e.getElementsByTagName(f)[0];
    c.async = 1; c.src = g; d.parentNode.insertBefore(c, d)
})(window, document, 'script', ('https:' == document.location.protocol ? 'https://stm-collect' : 'http://stm-cdn') + '.cn.miaozhen.com/clicki.min.js', 'stm_clicki');
stm_clicki('create', 'dc-342', 'auto');
stm_clicki('send', 'pageview');
stm_clicki('require','heatmap', ('https:'==document.location.protocol?'https://stm-collect':'http://stm-cdn')+'.cn.miaozhen.com/plugins/heatmap.js');
stm_clicki('heatmap:on',5);

function mz_normal(category,action){
    var sid_label = $('#sev_sid').val();
    //console.log(category);
    stm_clicki('send', 'event', category, action, sid_label);
}

function mz_search(search_context) {
    //console.log(search_context);
    var sid_label = $('#sev_sid').val();
    stm_clicki('send', 'event', {
        customActionId: 1
        ,customActionLabel1:search_context
        ,customActionLabel2:'站内搜索'
        ,customActionLabel3:'站内搜索'
        ,customActionLabel4:'站内搜索'
        ,customActionValue1: 1
        },'搜索',sid_label);
}