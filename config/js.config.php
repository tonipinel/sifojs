<?php
/**
 * SYNTAX:
 *
 * Every Key of the array is a group of JS files. All files inside a group will
 * be merged into a single file with the group name.
 *
 * The number is the Priority or order, the lower, the more soon the JS file
 * appears in the pack.
 *
 * $config['GROUP_NAME'] = array(
 *	LOAD ORDER IN PACK => array(
 *		'name' => 'A NAME TO IDENTIFY THIS JS FILE',
 *		'filename' => 'PATH TO FILENAME, EXCLUDING ROOT PATH'
 */

/* Default group, also known as CORE. */
$config['default'] = array(
	5 => array(
		'name' => 'DOM_ready',
		'filename' => '/libs/sifojs/core/_ready.js',
	),
	10 => array(
		'name' => 'labs',
		'filename' => '/libs/sifojs/libs/labjs/LAB.js',
	),
	15 => array(
		'name' => 'device_detection',
		'filename' => '/libs/sifojs/core/_device_detection.js',
	),
	20 => array(
		'name' => 'namespace',
		'filename' => '/libs/sifojs/core/_namespace.js',
	),
	30 => array(
		'name' => 'utilities_common',
		'filename' => '/libs/sifojs/core/_utilities.js',
	),
	100000 => array(
		'name' => 'init',
		'filename' => '/libs/sifojs/core/_init.js',
	)
);

$config['desktop'] = array(
	10 => array(
		'name' => 'jquery',
		'filename' => '/libs/sifojs/libs/jquery/jquery-1.8.3.min.js',
	),
	20 => array(
     'name' => 'modernizr',
     'filename' => '/libs/sifojs/libs/modernizr/modernizr-custom.js',
    )
);

$config['mobile'] = array(
    10 => array(
        'name' => 'jquery',
        'filename' => '/libs/sifojs/libs/zepto/zepto.js'
    )
);

/* Polyfills */
$config['polyfills'] = array(
	10 => array(
		'name' => 'polyfiller',
		'filename' => '/libs/sifojs/libs/modernizr/polyfills/polyfiller.js'
	),
	20 => array(
		'name' => 'cssfx',
		'filename' => '/libs/sifojs/libs/modernizr/polyfills/cssfx.js'
	),
	30 => array(
		'name' => 'selectivizr',
		'filename' => '/libs/sifojs/libs/modernizr/polyfills/selectivizr-min.js'
	)
);

/* Graphs libraries */
$config['graphs'] = array(
	10 => array(
		'name' => 'excanvas',
		'filename' => '/libs/sifojs/libs/flot/excanvas.min.js',
	),
	20 => array(
		'name' => 'float',
		'filename' => '/libs/sifojs/libs/flot/jquery.flot.js',
	),
	30 => array(
		'name' => 'jquery_graph_table',
		'filename' => '/libs/sifojs/libs/flot/jquery.graphTable.js',
	),
	40 => array(
		'name' => 'graphs_class',
		'filename' => '/libs/sifojs/classes/_graphs.js',
	)
);


/* Modal windows */
$config['modal'] = array(
	10 => array(
		'name' => 'colorbox',
		'filename' => '/libs/sifojs/libs/jquery-colorbox/jquery.colorbox.js',
	),
	20 => array(
		'name' => 'modals_class',
		'filename' => '/libs/sifojs/classes/_modals.js',
	)
);

/* Tag handling utilites */
$config['tags'] = array(
	10 => array(
		'name' => 'jquery_tag_editor',
		'filename' => '/libs/sifojs/libs/jquery-tageditor/jquery.tag.editor.js',
	),
	20 => array(
		'name' => 'tags_class',
		'filename' => '/libs/sifojs/classes/_tags.js',
	)
);

/* Autocompletion */
$config['autocomplete'] = array(
	10 => array(
		'name' => 'jquery_autocomplete',
		'filename' => '/libs/sifojs/libs/jquery-autocomplete/jquery.autocomplete.js',
	),
	20 => array(
		'name' => 'autocomplete_class',
		'filename' => '/libs/sifojs/classes/_autocomplete.js',
	)
);


/* Tabbed navigation */
$config['tabs'] = array(
	10 => array(
		'name' => 'tabber',
		'filename' => '/libs/sifojs/libs/tabifier/tabber.js',
	),
	20 => array(
		'name' => 'tabs_class',
		'filename' => '/libs/sifojs/classes/_tabs.js',
	)
);

/* User interface */
$config['user_interface'] = array(
	10 => array(
		'name' => 'jquery_ui',
		'filename' => '/libs/sifojs/libs/jquery-sortable/jquery.sortable.min.js',
	),
	20 => array(
		'name' => 'sortable_class',
		'filename' => '/libs/sifojs/classes/_sortable.js',
	)
);

/* Serialize */
$config['serialize'] = array(
	10 => array(
		'name' => 'jquery_serialize_tree',
		'filename' => '/libs/sifojs/libs/jquery-serialize/jquery.serializetree.js',
	),
	20 => array(
		'name' => 'serialize_class',
		'filename' => '/libs/sifojs/classes/_serialize.js',
	)
);

/* Editable fields */
$config['editable'] = array(
	10 => array(
		'name' => 'jquery_editable',
		'filename' => '/libs/sifojs/libs/jquery-jeditable/jquery.jeditable.js',
	),
	20 => array(
		'name' => 'jquery_editable_color',
		'filename' => '/libs/sifojs/libs/jquery-jeditable/jquery.color.js',
	),
	30 => array(
		'name' => 'editable-class',
		'filename' => '/libs/sifojs/classes/_editable.js',
	)
);

/* Prettify: Color source code */
$config['prettify'] = array(
	10 => array(
		'name' => 'prettifier',
		'filename' => '/libs/sifojs/libs/code-prettifier/prettify.js',
	),
	20 => array(
		'name' => 'editable-class',
		'filename' => '/libs/sifojs/classes/_prettify.js',
	)
);

/* Prettify: Color source code */
$config['pulldown'] = array(
	10 => array(
		'name' => 'pulldown_class',
		'filename' => '/libs/sifojs/classes/_pulldown.js',
	)
);