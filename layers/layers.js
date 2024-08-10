var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiKecamatan_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_1 = format_BatasAdministrasiKecamatan_1.readFeatures(json_BatasAdministrasiKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_1.addFeatures(features_BatasAdministrasiKecamatan_1);
var lyr_BatasAdministrasiKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_1, 
                style: style_BatasAdministrasiKecamatan_1,
                popuplayertitle: "Batas Administrasi Kecamatan",
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_1.png" /> Batas Administrasi Kecamatan'
            });
var format_TrayekAngkutanPerdesaan_2 = new ol.format.GeoJSON();
var features_TrayekAngkutanPerdesaan_2 = format_TrayekAngkutanPerdesaan_2.readFeatures(json_TrayekAngkutanPerdesaan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrayekAngkutanPerdesaan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrayekAngkutanPerdesaan_2.addFeatures(features_TrayekAngkutanPerdesaan_2);
var lyr_TrayekAngkutanPerdesaan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrayekAngkutanPerdesaan_2, 
                style: style_TrayekAngkutanPerdesaan_2,
                popuplayertitle: "Trayek Angkutan Perdesaan",
                interactive: true,
    title: 'Trayek Angkutan Perdesaan<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_0.png" /> 103<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_1.png" /> 104<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_2.png" /> 105<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_3.png" /> 106<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_4.png" /> 110<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_5.png" /> 111<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_6.png" /> 114<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_7.png" /> 115<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_8.png" /> 116<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_9.png" /> 117<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_10.png" /> 120<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_11.png" /> 121<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_12.png" /> 122<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_13.png" /> 124<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_14.png" /> 125<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_15.png" /> 127<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_16.png" /> 130<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_17.png" /> 131<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_18.png" /> 132<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_19.png" /> 133<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_20.png" /> trayek 101<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_21.png" /> trayek 111<br />\
    <img src="styles/legend/TrayekAngkutanPerdesaan_2_22.png" /> <br />'
        });
var format_PerlintasanKA_3 = new ol.format.GeoJSON();
var features_PerlintasanKA_3 = format_PerlintasanKA_3.readFeatures(json_PerlintasanKA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerlintasanKA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerlintasanKA_3.addFeatures(features_PerlintasanKA_3);
var lyr_PerlintasanKA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerlintasanKA_3, 
                style: style_PerlintasanKA_3,
                popuplayertitle: "Perlintasan KA",
                interactive: true,
                title: '<img src="styles/legend/PerlintasanKA_3.png" /> Perlintasan KA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BatasAdministrasiKecamatan_1.setVisible(true);lyr_TrayekAngkutanPerdesaan_2.setVisible(true);lyr_PerlintasanKA_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasAdministrasiKecamatan_1,lyr_TrayekAngkutanPerdesaan_2,lyr_PerlintasanKA_3];
lyr_BatasAdministrasiKecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'LUAS_HACEA': 'LUAS_HACEA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_TrayekAngkutanPerdesaan_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'layer': 'layer', 'path': 'path', });
lyr_PerlintasanKA_3.set('fieldAliases', {'lat': 'lat', 'lon': 'lon', 'lokasi': 'lokasi', });
lyr_BatasAdministrasiKecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'LUAS_HACEA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TrayekAngkutanPerdesaan_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PerlintasanKA_3.set('fieldImages', {'lat': 'TextEdit', 'lon': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMKC': 'header label - always visible', 'LUAS_HACEA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_TrayekAngkutanPerdesaan_2.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PerlintasanKA_3.set('fieldLabels', {'lat': 'hidden field', 'lon': 'hidden field', 'lokasi': 'inline label - visible with data', });
lyr_PerlintasanKA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});