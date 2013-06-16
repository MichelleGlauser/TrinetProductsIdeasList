<div id = 'product_ideas_div'>
    <table id = 'product_numbers'>
        <tr><th id = 'product_title'>Product Ideas</th></tr>
    </table>
    <div id = "product_ideas_list"></div>
</div>

// Make call to API for products list.
// Grab product names.
// Grab product canonical names.
// Grab product URLs.
// Print product names. 
// Put product URLs in as a hrefs for the product names.
// Open API for each product canonical name. 
// Grab number of topics per product.
// Print number of topics per product.


// <div id="getsat-widget-6080"></div>
// <script type="text/javascript" src="https://loader.engage.gsfn.us/loader.js">
// if (typeof GSFN !== "undefined") { GSFN.loadWidget(6080,{"containerId":"getsat-widget-6080"}); }
// </script>


<script type="text/javascript">
    jQuery(document).ready(function () {
        var productName,
            productCanonicalName,
            productURL,
            apiBaseURL,
            numTopics,
            productList;

            apiBaseURL = 'http://api.getsatisfaction.com/companies/trinet/';

            jQuery.ajax({
                type: 'GET',
                url: apiBaseURL + 'products.json',
                dataType: 'jsonp',
                success: function(results) {
                    // If there is no alternative, do I even need an if statement?
                    // May I put all of these items in one if statement?
                    if (results.name), (results.canonical_name), (results.url) {
                        productName = results.name;
                        productCanonicalName = results.canonical_name;
                        productURL = results.url;
                        jQuery.ajax({
                            type: 'GET',
                            url: apiBaseURL + '/topics.json?product=' + productCanonicalName;
                            dataType: 'jsonp',
                            success: function(results)
                                // Is this if statement needed?
                                if (results.total) {
                                    numTopics = results.total;
                                };
                        })
    
                    },
                // What is this stuff?
                data: {},
                async: false,
                error: function(e, s, m){}
            });
            productList = '<div class = "num_topics">' + numTopics + '</div><div class = "product_name"><a href = " + productURL + ">' + productName + '</a></div>/';     
            jQuery('#product_ideas_div').insertAfter('#community_description');
            jQuery('#product_numbers').insertAfter('#product_ideas_div');
            jQuery('#product_ideas_list').html(productList);

    });
</script>
