Laconic
===================

Laconic offers a sane solution to generating DOM content in JavaScript.
for documentation, see http://joestelmach.github.com/laconic/

**Note:** Added two methods for element caching - to and $to(available if jQuery is enabled)

        to(context, name) - save element to context[name]
        $to(context, name) - save element to context[name] as jQuery object

Using:

        $el.div('first name').to(window, 'cachedEl'),
        console.log(cachedEl); // <div>​first name​</div>
