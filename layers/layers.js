var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adducustomerlist_1 = new ol.format.GeoJSON();
var features_adducustomerlist_1 = format_adducustomerlist_1.readFeatures(json_adducustomerlist_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adducustomerlist_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adducustomerlist_1.addFeatures(features_adducustomerlist_1);
var lyr_adducustomerlist_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adducustomerlist_1, 
                style: style_adducustomerlist_1,
                interactive: true,
    title: 'addu customer list<br />\
    <img src="styles/legend/adducustomerlist_1_0.png" /> <br />\
    <img src="styles/legend/adducustomerlist_1_1.png" /> A- Households<br />\
    <img src="styles/legend/adducustomerlist_1_2.png" /> C- Commercial<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_adducustomerlist_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_adducustomerlist_1];
lyr_adducustomerlist_1.set('fieldAliases', {'Service Req Num': 'Service Req Num', 'Cust ID': 'Cust ID', 'Account Num': 'Account Num', 'Location ID': 'Location ID', 'Service Num': 'Service Num', 'Customer ID Num': 'Customer ID Num', 'Customer Name': 'Customer Name', 'Mobile': 'Mobile', 'Island': 'Island', 'District': 'District', 'Road': 'Road', 'Block': 'Block', 'Collection Zone': 'Collection Zone', 'House Name': 'House Name', 'Floor': 'Floor', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Apartment': 'Apartment', 'Collection Point Remarks': 'Collection Point Remarks', 'Service Remarks': 'Service Remarks', 'Old Ref': 'Old Ref', 'Service Category': 'Service Category', 'Service Description': 'Service Description', 'Qty': 'Qty', 'Service Start Date': 'Service Start Date', 'Service Stop Date': 'Service Stop Date', 'Entry on': 'Entry on', 'Entry by': 'Entry by', });
lyr_adducustomerlist_1.set('fieldImages', {'Service Req Num': 'TextEdit', 'Cust ID': 'TextEdit', 'Account Num': 'TextEdit', 'Location ID': 'TextEdit', 'Service Num': 'TextEdit', 'Customer ID Num': 'TextEdit', 'Customer Name': 'TextEdit', 'Mobile': 'TextEdit', 'Island': 'TextEdit', 'District': 'TextEdit', 'Road': 'TextEdit', 'Block': 'TextEdit', 'Collection Zone': 'TextEdit', 'House Name': 'TextEdit', 'Floor': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Apartment': 'TextEdit', 'Collection Point Remarks': 'TextEdit', 'Service Remarks': 'TextEdit', 'Old Ref': 'TextEdit', 'Service Category': 'TextEdit', 'Service Description': 'TextEdit', 'Qty': 'Range', 'Service Start Date': 'DateTime', 'Service Stop Date': 'DateTime', 'Entry on': 'DateTime', 'Entry by': 'TextEdit', });
lyr_adducustomerlist_1.set('fieldLabels', {'Service Req Num': 'no label', 'Cust ID': 'no label', 'Account Num': 'no label', 'Location ID': 'no label', 'Service Num': 'no label', 'Customer ID Num': 'no label', 'Customer Name': 'no label', 'Mobile': 'no label', 'Island': 'no label', 'District': 'no label', 'Road': 'no label', 'Block': 'no label', 'Collection Zone': 'no label', 'House Name': 'no label', 'Floor': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Apartment': 'no label', 'Collection Point Remarks': 'no label', 'Service Remarks': 'no label', 'Old Ref': 'no label', 'Service Category': 'no label', 'Service Description': 'no label', 'Qty': 'no label', 'Service Start Date': 'no label', 'Service Stop Date': 'no label', 'Entry on': 'no label', 'Entry by': 'no label', });
lyr_adducustomerlist_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});