/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/jq-3.3.1/dt-1.10.18/e-1.8.1/b-1.5.4
 *
 * Included libraries:
 *   jQuery 3 3.3.1, DataTables 1.10.18, Editor 1.8.1, Buttons 1.5.4
 */

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/*! DataTables 1.10.18
 * ©2008-2018 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.18
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   Copyright 2008-2018 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}
(function( $, window, document, undefined ) {
	"use strict";

	/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */
	var DataTable = function ( options )
	{
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).on('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can hold position.
			this.api( true ).draw( complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		

		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;

		if ( emptyInit ) {
			options = {};
		}

		this.oApi = this.internal = _ext.internal;

		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}

		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;

			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			var $this = $(this);
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ) );
			
			
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				var s = allSettings[i];
			
				/* Base check on table node */
				if (
					s.nTable == this ||
					(s.nTHead && s.nTHead.parentNode == this) ||
					(s.nTFoot && s.nTFoot.parentNode == this)
				) {
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return s.oInstance;
					}
					else if ( bDestroy )
					{
						s.oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( s.sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"sDestroyWidth": $this[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			oSettings.nTable = this;
			oSettings.oApi   = _that.internal;
			oSettings.oInit  = oInit;
			
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			_fnLanguageCompat( oInit.oLanguage );
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				"searchDelay",
				"rowId",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			var oClasses = oSettings.oClasses;
			
			$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			$this.addClass( oClasses.sTable );
			
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			var oLanguage = oSettings.oLanguage;
			$.extend( true, oLanguage, oInit.oLanguage );
			
			if ( oLanguage.sUrl )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				$.ajax( {
					dataType: 'json',
					url: oLanguage.sUrl,
					success: function ( json ) {
						_fnLanguageCompat( json );
						_fnCamelToHungarian( defaults.oLanguage, json );
						$.extend( true, oLanguage, json );
						_fnInitialise( oSettings );
					},
					error: function () {
						// Error occurred loading language file, continue on as best we can
						_fnInitialise( oSettings );
					}
				} );
				bInitHandedOff = true;
			}
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $this.children('tbody').find('tr').eq(0);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) !== null ? name : null;
				};
			
				$( rowOne[0] ).children('th, td').each( function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			var loadedInit = function () {
				/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */
			
				// If aaSorting is not defined, then we use the first indicator in asSorting
				// in case that has been altered, so the default sort reflects that option
				if ( oInit.aaSorting === undefined ) {
					var sorting = oSettings.aaSorting;
					for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
						sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
					}
				}
			
				/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */
				_fnSortingClasses( oSettings );
			
				if ( features.bSort ) {
					_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
						if ( oSettings.bSorted ) {
							var aSort = _fnSortFlatten( oSettings );
							var sortedColumns = {};
			
							$.each( aSort, function (i, val) {
								sortedColumns[ val.src ] = val.dir;
							} );
			
							_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
							_fnSortAria( oSettings );
						}
					} );
				}
			
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
						_fnSortingClasses( oSettings );
					}
				}, 'sc' );
			
			
				/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */
			
				// Work around for Webkit bug 83867 - store the caption-side before removing from doc
				var captions = $this.children('caption').each( function () {
					this._captionSide = $(this).css('caption-side');
				} );
			
				var thead = $this.children('thead');
				if ( thead.length === 0 ) {
					thead = $('<thead/>').appendTo($this);
				}
				oSettings.nTHead = thead[0];
			
				var tbody = $this.children('tbody');
				if ( tbody.length === 0 ) {
					tbody = $('<tbody/>').appendTo($this);
				}
				oSettings.nTBody = tbody[0];
			
				var tfoot = $this.children('tfoot');
				if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
					// If we are a scrolling table, and no footer has been given, then we need to create
					// a tfoot element for the caption element to be appended to
					tfoot = $('<tfoot/>').appendTo($this);
				}
			
				if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
					$this.addClass( oClasses.sNoFooter );
				}
				else if ( tfoot.length > 0 ) {
					oSettings.nTFoot = tfoot[0];
					_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
				}
			
				/* Check if there is data passing into the constructor */
				if ( oInit.aaData ) {
					for ( i=0 ; i<oInit.aaData.length ; i++ ) {
						_fnAddData( oSettings, oInit.aaData[ i ] );
					}
				}
				else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
					/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */
					_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
				}
			
				/* Copy the data index array */
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
				/* Initialisation complete - table can be drawn */
				oSettings.bInitialised = true;
			
				/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */
				if ( bInitHandedOff === false ) {
					_fnInitialise( oSettings );
				}
			};
			
			/* Must be done after everything which can be overridden by the state saving! */
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
				_fnLoadState( oSettings, oInit, loadedInit );
			}
			else {
				loadedInit();
			}
			
		} );
		_that = null;
		return this;
	};

	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n]/g;
	var _re_html = /<.*?>/g;
	
	// This is not strict ISO8601 - Date.parse() is quite lax, although
	// implementations differ between browsers.
	var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// http://en.wikipedia.org/wiki/Foreign_exchange_market
	// - \u20BD - Russian ruble.
	// - \u20a9 - South Korean Won
	// - \u20BA - Turkish Lira
	// - \u20B9 - Indian Rupee
	// - R - Brazil (R$) and South Africa
	// - fr - Swiss Franc
	// - kr - Swedish krona, Norwegian krone and Danish krone
	// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
	// - Ƀ - Bitcoin
	// - Ξ - Ethereum
	//   standards as thousands separators.
	var _re_formatted_numeric = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
	
	
	var _empty = function ( d ) {
		return !d || d === true || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' && decimalPoint !== '.' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		// If empty return immediately so there must be a number if it is a
		// formatted string (this stops the string "k", or "kr", etc being detected
		// as a formatted number for currency
		if ( _empty( d ) ) {
			return true;
		}
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return !isNaN( parseFloat(d) ) && isFinite( d );
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return _empty( d ) || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[ order[i] ][ prop ] ) {
					out.push( a[ order[i] ][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _removeEmpty = function ( a )
	{
		var out = [];
	
		for ( var i=0, ien=a.length ; i<ien ; i++ ) {
			if ( a[i] ) { // careful - will remove all falsy values!
				out.push( a[i] );
			}
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Determine if all values in the array are unique. This means we can short
	 * cut the _unique method at the cost of a single loop. A sorted array is used
	 * to easily check the values.
	 *
	 * @param  {array} src Source array
	 * @return {boolean} true if all unique, false otherwise
	 * @ignore
	 */
	var _areAllUnique = function ( src ) {
		if ( src.length < 2 ) {
			return true;
		}
	
		var sorted = src.slice().sort();
		var last = sorted[0];
	
		for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
			if ( sorted[i] === last ) {
				return false;
			}
	
			last = sorted[i];
		}
	
		return true;
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		if ( _areAllUnique( src ) ) {
			return src.slice();
		}
	
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	
	/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */
	DataTable.util = {
		/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */
		throttle: function ( fn, freq ) {
			var
				frequency = freq !== undefined ? freq : 200,
				last,
				timer;
	
			return function () {
				var
					that = this,
					now  = +new Date(),
					args = arguments;
	
				if ( last && now < last + frequency ) {
					clearTimeout( timer );
	
					timer = setTimeout( function () {
						last = undefined;
						fn.apply( that, args );
					}, frequency );
				}
				else {
					last = now;
					fn.apply( that, args );
				}
			};
		},
	
	
		/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} val string to escape
		 *  @returns {string} escaped string
		 */
		escapeRegex: function ( val ) {
			return val.replace( _re_escape_regex, '\\$1' );
		}
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		// Note the use of the Hungarian notation for the parameters in this method as
		// this is called after the mapping of camelCase to Hungarian
		var defaults = DataTable.defaults.oLanguage;
	
		// Default mapping
		var defaultDecimal = defaults.sDecimal;
		if ( defaultDecimal ) {
			_addNumericSort( defaultDecimal );
		}
	
		if ( lang ) {
			var zeroRecords = lang.sZeroRecords;
	
			// Backwards compatibility - if there is no sEmptyTable given, then use the same as
			// sZeroRecords - assuming that is given.
			if ( ! lang.sEmptyTable && zeroRecords &&
				defaults.sEmptyTable === "No data available in table" )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
			}
	
			// Likewise with loading records
			if ( ! lang.sLoadingRecords && zeroRecords &&
				defaults.sLoadingRecords === "Loading..." )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
			}
	
			// Old parameter name of the thousands separator mapped onto the new
			if ( lang.sInfoThousands ) {
				lang.sThousands = lang.sInfoThousands;
			}
	
			var decimal = lang.sDecimal;
			if ( decimal && defaultDecimal !== decimal ) {
				_addNumericSort( decimal );
			}
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	
		// Boolean initialisation of x-scrolling
		if ( typeof init.sScrollX === 'boolean' ) {
			init.sScrollX = init.sScrollX ? '100%' : '';
		}
		if ( typeof init.scrollX === 'boolean' ) {
			init.scrollX = init.scrollX ? '100%' : '';
		}
	
		// Column search objects are in an array, so it needs to be converted
		// element by element
		var searchCols = init.aoSearchCols;
	
		if ( searchCols ) {
			for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
				if ( searchCols[i] ) {
					_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
				}
			}
		}
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	
		// orderData can be given as an integer
		var dataSort = init.aDataSort;
		if ( typeof dataSort === 'number' && ! $.isArray( dataSort ) ) {
			init.aDataSort = [ dataSort ];
		}
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		// We don't need to do this every time DataTables is constructed, the values
		// calculated are specific to the browser and OS configuration which we
		// don't expect to change between initialisations
		if ( ! DataTable.__browser ) {
			var browser = {};
			DataTable.__browser = browser;
	
			// Scrolling feature / quirks detection
			var n = $('<div/>')
				.css( {
					position: 'fixed',
					top: 0,
					left: $(window).scrollLeft()*-1, // allow for scrolling
					height: 1,
					width: 1,
					overflow: 'hidden'
				} )
				.append(
					$('<div/>')
						.css( {
							position: 'absolute',
							top: 1,
							left: 1,
							width: 100,
							overflow: 'scroll'
						} )
						.append(
							$('<div/>')
								.css( {
									width: '100%',
									height: 10
								} )
						)
				)
				.appendTo( 'body' );
	
			var outer = n.children();
			var inner = outer.children();
	
			// Numbers below, in order, are:
			// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
			//
			// IE6 XP:                           100 100 100  83
			// IE7 Vista:                        100 100 100  83
			// IE 8+ Windows:                     83  83 100  83
			// Evergreen Windows:                 83  83 100  83
			// Evergreen Mac with scrollbars:     85  85 100  85
			// Evergreen Mac without scrollbars: 100 100 100 100
	
			// Get scrollbar width
			browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
	
			// IE6/7 will oversize a width 100% element inside a scrolling element, to
			// include the width of the scrollbar, while other browsers ensure the inner
			// element is contained without forcing scrolling
			browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
	
			// In rtl text layout, some browsers (most, but not all) will place the
			// scrollbar on the left, rather than the right.
			browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;
	
			// IE8- don't provide height and width for getBoundingClientRect
			browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
	
			n.remove();
		}
	
		$.extend( settings.oBrowser, DataTable.__browser );
		settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, $(nTh).data() );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
		var th = $(oCol.nTh);
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
			if ( oOptions.sClass ) {
				th.addClass( oOptions.sClass );
			}
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( oOptions.iDataSort !== undefined )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
		oCol._setter = null;
	
		oCol.fnGetData = function (rowData, type, meta) {
			var innerData = mData( rowData, type, undefined, meta );
	
			return mRender && type ?
				mRender( innerData, type, rowData, meta ) :
				innerData;
		};
		oCol.fnSetData = function ( rowData, val, meta ) {
			return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
		};
	
		// Indicate if DataTables should read DOM data as an object or array
		// Used in _fnGetRowElements
		if ( typeof mDataSrc !== 'number' ) {
			oSettings._rowReadObject = true;
		}
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
			th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		var vis = 0;
	
		// No reduce in IE8, use a loop for now
		$.each( oSettings.aoColumns, function ( i, col ) {
			if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
				vis++;
			}
		} );
	
		return vis;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// If null, then this type can't apply to this column, so
						// rather than testing all cells, break out. There is an
						// exception for the last type which is `html`. We need to
						// scan all rows since it is possible to mix string and HTML
						// types
						if ( ! detectedType && j !== types.length-1 ) {
							break;
						}
	
						// Only a single match is needed for html type since it is
						// bottom of the pile and very similar to string
						if ( detectedType === 'html' ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.targets !== undefined ?
					def.targets :
					def.aTargets;
	
				if ( ! $.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data',
			idx: iRow
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
	
		// Invalidate the column types as the new data needs to be revalidated
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		var id = oSettings.rowIdFn( aDataIn );
		if ( id !== undefined ) {
			oSettings.aIds[ id ] = oData;
		}
	
		/* Create the DOM information, or register it if already present */
		if ( nTr || ! oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( settings, rowIdx, colIdx, type )
	{
		var draw           = settings.iDraw;
		var col            = settings.aoColumns[colIdx];
		var rowData        = settings.aoData[rowIdx]._aData;
		var defaultContent = col.sDefaultContent;
		var cellData       = col.fnGetData( rowData, type, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		} );
	
		if ( cellData === undefined ) {
			if ( settings.iDrawError != draw && defaultContent === null ) {
				_fnLog( settings, 0, "Requested unknown parameter "+
					(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
					" for row "+rowIdx+", column "+colIdx, 4 );
				settings.iDrawError = draw;
			}
			return defaultContent;
		}
	
		// When the data source is null and a specific data type is requested (i.e.
		// not the original data), we can use default column data
		if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
			cellData = defaultContent;
		}
		else if ( typeof cellData === 'function' ) {
			// If the data source is a function, then we run it and use the return,
			// executing in the scope of the data object (for instances)
			return cellData.call( rowData );
		}
	
		if ( cellData === null && type == 'display' ) {
			return '';
		}
		return cellData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( settings, rowIdx, colIdx, val )
	{
		var col     = settings.aoColumns[colIdx];
		var rowData = settings.aoData[rowIdx]._aData;
	
		col.fnSetData( rowData, val, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		}  );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
			return s.replace(/\\\./g, '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	function _fnGetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Build an object of get functions, and wrap them in a single call */
			var o = {};
			$.each( mSource, function (key, val) {
				if ( val ) {
					o[key] = _fnGetObjectDataFn( val );
				}
			} );
	
			return function (data, type, row, meta) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, row, meta) :
					data;
			};
		}
		else if ( mSource === null )
		{
			/* Give an empty string for rendering / sorting etc */
			return function (data) { // type, row and meta also passed, but not used
				return data;
			};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, type, row, meta) {
				return mSource( data, type, row, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" )
				{
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ )
					{
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation )
						{
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							if ( $.isArray( data ) ) {
								for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
									out.push( fetchData( data[j], type, innerSrc ) );
								}
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if ( data === null || data[ a[i] ] === undefined )
						{
							return undefined;
						}
						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) { // row and meta also passed, but not used
				return fetchData( data, type, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, type) { // row and meta also passed, but not used
				return data[mSource];
			};
		}
	}
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	function _fnSetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return _fnSetObjectDataFn( mSource._ );
		}
		else if ( mSource === null )
		{
			/* Nothing to do when the data source is null */
			return function () {};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, val, meta) {
				mSource( data, 'set', val, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* Like the get, we need to get data from a nested object */
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
				{
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation )
					{
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						if ( $.isArray( val ) )
						{
							for ( var j=0, jLen=val.length ; j<jLen ; j++ )
							{
								o = {};
								setData( o, val[j], innerSrc );
								data[ a[i] ].push( o );
							}
						}
						else
						{
							// We've been asked to save data to an array, but it
							// isn't array data to be saved. Best that can be done
							// is to just save the value.
							data[ a[i] ] = val;
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation )
					{
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
					{
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) )
				{
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else
				{
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) { // meta is also passed in, but not used
				return setData( data, val, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, val) { // meta is also passed in, but not used
				data[mSource] = val;
			};
		}
	}
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
		settings.aIds = {};
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidate( settings, rowIdx, src, colIdx )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
		var cellWrite = function ( cell, col ) {
			// This is very frustrating, but in IE if you just write directly
			// to innerHTML, and elements that are overwritten are GC'ed,
			// even if there is a reference to them elsewhere
			while ( cell.childNodes.length ) {
				cell.removeChild( cell.firstChild );
			}
	
			cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
		};
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
				.data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				if ( colIdx !== undefined ) {
					cellWrite( cells[colIdx], colIdx );
				}
				else {
					for ( i=0, ien=cells.length ; i<ien ; i++ ) {
						cellWrite( cells[i], i );
					}
				}
			}
		}
	
		// For both row and cell invalidation, the cached data for sorting and
		// filtering is nulled out
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( colIdx !== undefined ) {
			cols[ colIdx ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
	
			// Update DataTables special `DT_*` attributes for the row
			_fnRowAttributes( settings, row );
		}
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row, colIdx, d )
	{
		var
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns,
			objectRead = settings._rowReadObject;
	
		// Allow the data object to be passed in, or construct
		d = d !== undefined ?
			d :
			objectRead ?
				{} :
				[];
	
		var attr = function ( str, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var attr = str.substring( idx+1 );
					var setter = _fnSetObjectDataFn( str );
					setter( d, td.getAttribute( attr ) );
				}
			}
		};
	
		// Read data from a cell and store into the data object
		var cellProcess = function ( cell ) {
			if ( colIdx === undefined || colIdx === i ) {
				col = columns[i];
				contents = $.trim(cell.innerHTML);
	
				if ( col && col._bAttrSrc ) {
					var setter = _fnSetObjectDataFn( col.mData._ );
					setter( d, contents );
	
					attr( col.mData.sort, cell );
					attr( col.mData.type, cell );
					attr( col.mData.filter, cell );
				}
				else {
					// Depending on the `data` option for the columns the data can
					// be read to either an object or an array.
					if ( objectRead ) {
						if ( ! col._setter ) {
							// Cache the setter function
							col._setter = _fnSetObjectDataFn( col.mData );
						}
						col._setter( d, contents );
					}
					else {
						d[i] = contents;
					}
				}
			}
	
			i++;
		};
	
		if ( td ) {
			// `tr` element was passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
					tds.push( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
	
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		// Read the ID from the DOM if present
		var rowNode = row.firstChild ? row : row.nTr;
	
		if ( rowNode ) {
			var id = rowNode.getAttribute( 'id' );
	
			if ( id ) {
				_fnSetObjectDataFn( settings.rowId )( d, id );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( oSettings, row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
	
				nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
				nTd._DT_CellIndex = {
					row: iRow,
					column: i
				};
				
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( (!nTrIn || oCol.mRender || oCol.mData !== i) &&
					 (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
				) {
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow, cells] );
		}
	
		// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
		// and deployed
		row.nTr.setAttribute( 'role', 'row' );
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} settings DataTables settings object
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( settings, row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			var id = settings.rowIdFn( data );
	
			if ( id ) {
				tr.id = id;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowAttr ) {
				$(tr).attr( data.DT_RowAttr );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell[0].innerHTML ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
		
		/* ARIA role for the rows */
	 	$(thead).find('>tr').attr('role', 'row');
	
		/* Deal with the footer - add classes if required */
		$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
		$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings )
	{
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var i, iLen, n;
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var iOpenRows = oSettings.aoOpenRows.length;
		var oLang = oSettings.oLanguage;
		var iInitDisplayStart = oSettings.iInitDisplayStart;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
	
		oSettings.bDrawing = true;
	
		/* Check and see if we have an initial draw position from state saving */
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
		{
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				// Row callback functions - might want to manipulate the row
				// iRowCount and j are not currently documented. Are they at all
				// useful?
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j, iDataIndex] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		// Let any modules know about the draw hold position state (used by
		// scrolling internally)
		settings._drawHold = holdPosition;
	
		_fnDraw( settings );
	
		settings._drawHold = false;
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nHolding = holding[0];
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
		oSettings.nHolding = null;
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && $.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
		var callback = function ( json ) {
			_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
			fn( json );
		};
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = typeof ajaxData === 'function' ?
				ajaxData( data, oSettings ) :  // fn can manipulate data or return
				ajaxData;                      // an object object or array to merge
	
			// If the function returned something, use that alone
			data = typeof ajaxData === 'function' && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": function (json) {
				var error = json.error || json.sError;
				if ( error ) {
					_fnLog( oSettings, 0, error );
				}
	
				oSettings.json = json;
				callback( json );
			},
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );
	
				if ( $.inArray( true, ret ) === -1 ) {
					if ( error == "parsererror" ) {
						_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
					}
					else if ( xhr.readyState === 4 ) {
						_fnLog( oSettings, 0, 'Ajax error', 7 );
					}
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				callback,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( typeof ajax === 'function' )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( settings )
	{
		if ( settings.bAjaxDataGet ) {
			settings.iDraw++;
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax(
				settings,
				_fnAjaxParameters( settings ),
				function(json) {
					_fnAjaxUpdateDraw( settings, json );
				}
			);
	
			return false;
		}
		return true;
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var data = _fnAjaxDataSrc( settings, json );
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
	
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		settings.bAjaxDataGet = false;
		_fnDraw( settings );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		settings.bAjaxDataGet = true;
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	function _fnAjaxDataSrc ( oSettings, json )
	{
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		// Compatibility with 1.9-. In order to read from aaData, check if the
		// default has been changed, if not, check for aaData
		if ( dataSrc === 'data' ) {
			return json.aaData || json[dataSrc];
		}
	
		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var language = settings.oLanguage;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = language.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function() {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
	
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
	
		var searchDelay = settings.searchDelay !== null ?
			settings.searchDelay :
			_fnDataSource( settings ) === 'ssp' ?
				400 :
				0;
	
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch )
			.attr( 'placeholder', language.sSearchPlaceholder )
			.on(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
			.on( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
			if ( settings === s ) {
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame...
				try {
					if ( jqFilter[0] !== document.activeElement ) {
						jqFilter.val( previousSearch.sSearch );
					}
				}
				catch ( e ) {}
			}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		};
		var fnRegex = function ( o ) {
			// Backwards compatibility with the bEscapeRegex option
			return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
			var rows = [];
	
			// Loop over each row and see if it should be included
			for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
					rows.push( rowIdx );
				}
			}
	
			// So the array reference doesn't break set the results into the
			// existing array
			displayRows.length = 0;
			$.merge( displayRows, rows );
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var out = [];
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=0 ; i<display.length ; i++ ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( rpSearch.test( data ) ) {
				out.push( display[i] );
			}
		}
	
		settings.aiDisplay = out;
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
		var filtered = [];
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=0 ; i<display.length ; i++ ) {
				if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					filtered.push( display[i] );
				}
			}
	
			settings.aiDisplay = filtered;
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
				if ( word.charAt(0) === '"' ) {
					var m = word.match( /^"(.*)"$/ );
					word = m ? m[1] : word;
				}
	
				return word.replace('"', '');
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	var _fnEscapeRegex = DataTable.util.escapeRegex;
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var fomatters = DataTable.ext.type.search;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						if ( fomatters[ column.sType ] ) {
							cellData = fomatters[ column.sType ]( cellData );
						}
	
						// Search in DataTables 1.10 is string based. In 1.11 this
						// should be altered to also allow strict type checking.
						if ( cellData === null ) {
							cellData = '';
						}
	
						if ( typeof cellData !== 'string' && cellData.toString ) {
							cellData = cellData.toString();
						}
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	
	/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToCamel ( obj )
	{
		return {
			search:          obj.sSearch,
			smart:           obj.bSmart,
			regex:           obj.bRegex,
			caseInsensitive: obj.bCaseInsensitive
		};
	}
	
	
	
	/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToHung ( obj )
	{
		return {
			sSearch:          obj.search,
			bSmart:           obj.smart,
			bRegex:           obj.regex,
			bCaseInsensitive: obj.caseInsensitive
		};
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
		var deferLoading = settings.bDeferLoading; // value modified by the draw
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		_fnCallbackFire( settings, null, 'preInit', [settings] );
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' || deferLoading ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// When data was added after the initialisation (data or Ajax) we need to
		// calculate the column sizing
		if ( json || settings.oInit.aaData ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = $.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option(
				typeof language[i] === 'number' ?
					settings.fnFormatNumber( language[i] ) :
					language[i],
				lengths[i]
			);
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		div.children().append(
			settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
		);
	
		// Can't use `select` variable as user might provide their own and the
		// reference is broken by the use of outerHTML
		$('select', div)
			.val( settings._iDisplayLength )
			.on( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
			if ( settings === s ) {
				$('select', div).val( len );
			}
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Add the ARIA grid role to the table
		table.attr( 'role', 'grid' );
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'top' ? caption : null )
									.append(
										table.children('thead')
									)
							)
					)
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						position: 'relative',
						overflow: 'auto',
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'bottom' ? caption : null )
									.append(
										table.children('tfoot')
									)
							)
					)
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).on( 'scroll.DT', function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		$(scrollBody).css(
			scrollY && scroll.bCollapse ? 'max-height' : 'height', 
			scrollY
		);
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[], footerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		// If the scrollbar visibility has changed from the last draw, we need to
		// adjust the column sizes as the table width will have changed to account
		// for the scrollbar
		var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
		
		if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
			settings.scrollBarVis = scrollBarVis;
			_fnAdjustColumnSizing( settings );
			return; // adjust column sizing will call this function again
		}
		else {
			settings.scrollBarVis = scrollBarVis;
		}
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
		}
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
		else if ( scrollXInner !== "" ) {
			// legacy x scroll inner has been given - use it
			tableStyle.width = _fnStringToCss(scrollXInner);
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			// Only apply widths to the DataTables detected header cells - this
			// prevents complex headers from having contradictory sizes applied
			if ( $.inArray( nToSize, dtHeaderCells ) !== -1 ) {
				nToSize.style.width = headerWidths[i];
			}
		}, headerTrgEls );
	
		$(headerSrcEls).height(0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerContent.push( nSizer.innerHTML );
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing">'+headerContent[i]+'</div>';
			nSizer.childNodes[0].style.height = "0";
			nSizer.childNodes[0].style.overflow = "hidden";
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = '<div class="dataTables_sizing">'+footerContent[i]+'</div>';
				nSizer.childNodes[0].style.height = "0";
				nSizer.childNodes[0].style.overflow = "hidden";
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( table.outerWidth() < sanityWidth )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		// Correct DOM ordering for colgroup - comes before the thead
		table.children('colgroup').insertBefore( table.children('thead') );
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.scroll();
	
		// If sorting or filtering has occurred, jump the scrolling back to the top
		// only if we aren't holding the position
		if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'), // from DOM element
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth,
			browser = oSettings.oBrowser,
			ie67 = browser.bScrollOversize;
	
		var styleWidth = table.style.width;
		if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
			tableWidthAttr = styleWidth;
		}
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
		     columnCount == _fnVisbleColumns( oSettings ) &&
		     columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				var colIdx = _fnVisibleToColumnIndex( oSettings, i );
	
				if ( colIdx !== null ) {
					columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
				}
			}
		}
		else
		{
			// Otherwise construct a single row, worst case, table with the widest
			// node in the data, assign any user defined widths, then insert it into
			// the DOM and allow the browser to do all the hard work of calculating
			// table widths
			var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' );
	
			// Clean up the table body
			tmpTable.find('tbody tr').remove();
			var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );
	
			// Clone the table header and footer - we can't use the header / footer
			// from the cloned table, since if scrolling is active, the table's
			// real header and footer are contained in different table tags
			tmpTable.find('thead, tfoot').remove();
			tmpTable
				.append( $(oSettings.nTHead).clone() )
				.append( $(oSettings.nTFoot).clone() );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
	
				// For scrollX we need to force the column width otherwise the
				// browser will collapse it. If this width is smaller than the
				// width the column requires, then it will have no effect
				if ( column.sWidthOrig && scrollX ) {
					$( headerCells[i] ).append( $('<div/>').css( {
						width: column.sWidthOrig,
						margin: 0,
						padding: 0,
						border: 0,
						height: 1
					} ) );
				}
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Tidy the temporary table - remove name attributes so there aren't
			// duplicated in the dom (radio elements for example)
			$('[name]', tmpTable).removeAttr('name');
	
			// Table has been built, attach to the document so we can work with it.
			// A holding element is used, positioned at the top of the container
			// with minimal height, so it has no effect on if the container scrolls
			// or not. Otherwise it might trigger scrolling when it actually isn't
			// needed
			var holder = $('<div/>').css( scrollX || scrollY ?
					{
						position: 'absolute',
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: 'hidden'
					} :
					{}
				)
				.append( tmpTable )
				.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
				tmpTable.removeAttr('width');
	
				// If there is no width attribute or style, then allow the table to
				// collapse
				if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
					tmpTable.width( tableContainer.clientWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.clientWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Get the width of each column in the constructed table - we need to
			// know the inner width (so it can be assigned to the other table's
			// cells) and the outer width so we can calculate the full width of the
			// table. This is safe since DataTables requires a unique cell for each
			// column, but if ever a header can span multiple columns, this will
			// need to be modified.
			var total = 0;
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				var cell = $(headerCells[i]);
				var border = cell.outerWidth() - cell.width();
	
				// Use getBounding... where possible (not IE8-) because it can give
				// sub-pixel accuracy, which we then want to round up!
				var bounding = browser.bBounding ?
					Math.ceil( headerCells[i].getBoundingClientRect().width ) :
					cell.outerWidth();
	
				// Total is tracked to remove any sub-pixel errors as the outerWidth
				// of the table might not equal the total given here (IE!).
				total += bounding;
	
				// Width for each column to use
				columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
			}
	
			table.style.width = _fnStringToCss( total );
	
			// Finished with the table - ditch it
			holder.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			var bindResize = function () {
				$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
					_fnAdjustColumnSizing( oSettings );
				} ) );
			};
	
			// IE6/7 will crash if we bind a resize event handler on page load.
			// To be removed in 1.11 which drops IE6/7 support
			if ( ie67 ) {
				setTimeout( bindResize, 1000 );
			}
			else {
				bindResize();
			}
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	var _fnThrottle = DataTable.util.throttle;
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
			s = s.replace( /&nbsp;/g, ' ' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! $.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					$.merge( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( $.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				if ( nestedSort[i]._idx === undefined ) {
					nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
				}
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i]._idx,
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a, overflow ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 < asSorting.length ?
				idx+1 :
				overflow ?
					null :
					0;
		};
	
		// Convert to 2D array if needed
		if ( typeof sorting[0] === 'number' ) {
			sorting = settings.aaSorting = [ sorting ];
		}
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx], true );
	
				if ( nextSortIdx === null && sorting.length === 1 ) {
					nextSortIdx = 0; // can't remove sorting completely
				}
	
				if ( nextSortIdx === null ) {
					sorting.splice( sortIdx, 1 );
				}
				else {
					sorting[sortIdx][1] = asSorting[ nextSortIdx ];
					sorting[sortIdx]._idx = nextSortIdx;
				}
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			// If processing is enabled use a timeout to allow the processing
			// display to be shown - otherwise to it synchronously
			if ( settings.oFeatures.bProcessing ) {
				_fnProcessingDisplay( settings, true );
	
				setTimeout( function() {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
					// In server-side processing, the draw callback will remove the
					// processing display
					if ( _fnDataSource( settings ) !== 'ssp' ) {
						_fnProcessingDisplay( settings, false );
					}
				}, 0 );
			}
			else {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
			}
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( settings )
	{
		if ( !settings.oFeatures.bStateSave || settings.bDestroying )
		{
			return;
		}
	
		/* Store the interesting variables */
		var state = {
			time:    +new Date(),
			start:   settings._iDisplayStart,
			length:  settings._iDisplayLength,
			order:   $.extend( true, [], settings.aaSorting ),
			search:  _fnSearchToCamel( settings.oPreviousSearch ),
			columns: $.map( settings.aoColumns, function ( col, i ) {
				return {
					visible: col.bVisible,
					search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
				};
			} )
		};
	
		_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
	
		settings.oSavedState = state;
		settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @param {function} callback Callback to execute when the state has been loaded
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( settings, oInit, callback )
	{
		var i, ien;
		var columns = settings.aoColumns;
		var loaded = function ( s ) {
			if ( ! s || ! s.time ) {
				callback();
				return;
			}
	
			// Allow custom and plug-in manipulation functions to alter the saved data set and
			// cancelling of loading by returning false
			var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
			if ( $.inArray( false, abStateLoad ) !== -1 ) {
				callback();
				return;
			}
	
			// Reject old data
			var duration = settings.iStateDuration;
			if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
				callback();
				return;
			}
	
			// Number of columns have changed - all bets are off, no restore of settings
			if ( s.columns && columns.length !== s.columns.length ) {
				callback();
				return;
			}
	
			// Store the saved state so it might be accessed at any time
			settings.oLoadedState = $.extend( true, {}, s );
	
			// Restore key features - todo - for 1.11 this needs to be done by
			// subscribed events
			if ( s.start !== undefined ) {
				settings._iDisplayStart    = s.start;
				settings.iInitDisplayStart = s.start;
			}
			if ( s.length !== undefined ) {
				settings._iDisplayLength   = s.length;
			}
	
			// Order
			if ( s.order !== undefined ) {
				settings.aaSorting = [];
				$.each( s.order, function ( i, col ) {
					settings.aaSorting.push( col[0] >= columns.length ?
						[ 0, col[1] ] :
						col
					);
				} );
			}
	
			// Search
			if ( s.search !== undefined ) {
				$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
			}
	
			// Columns
			//
			if ( s.columns ) {
				for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
					var col = s.columns[i];
	
					// Visibility
					if ( col.visible !== undefined ) {
						columns[i].bVisible = col.visible;
					}
	
					// Search
					if ( col.search !== undefined ) {
						$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
					}
				}
			}
	
			_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
			callback();
		}
	
		if ( ! settings.oFeatures.bStateSave ) {
			callback();
			return;
		}
	
		var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );
	
		if ( state !== undefined ) {
			loaded( state );
		}
		// otherwise, wait for the loaded callback to be executed
	}
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( settings ) {
				_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
			}
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else if ( type == 'throw' ) {
				throw new Error(msg);
			}
			else if ( typeof type == 'function' ) {
				type( settings, tn, msg );
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( $.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( $.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.on( 'click.DT', oData, function (e) {
					$(n).blur(); // Remove focus outline for mouse users
					fn(e);
				} )
			.on( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
			.on( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} eventName Name of the jQuery custom event to trigger. If
	 *      null no trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, eventName, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( eventName !== null ) {
			var e = $.Event( eventName+'.dt' );
	
			$(settings.nTable).trigger( e, args );
	
			ret.push( e.result );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( start >= end )
		{
			start = end - len;
		}
	
		// Keep the start record on the current page
		start -= (start % len);
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	

	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	_Api = function ( context, data )
	{
		if ( ! (this instanceof _Api) ) {
			return new _Api( context, data );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings = settings.concat( a );
			}
		};
	
		if ( $.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			$.merge( this, data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	DataTable.Api = _Api;
	
	// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
	// isPlainObject.
	$.extend( _Api.prototype, {
		any: function ()
		{
			return this.count() !== 0;
		},
	
	
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		count: function ()
		{
			return this.flatten().length;
		},
	
	
		each: function ( fn )
		{
			for ( var i=0, ien=this.length ; i<ien; i++ ) {
				fn.call( this, this[i], i, this );
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		iterator: function ( flatten, type, fn, alwaysNew ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				alwaysNew = fn;
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				var apiInst = new _Api( context[i] );
	
				if ( type === 'table' ) {
					ret = fn.call( apiInst, context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn.call( apiInst, context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn.call( apiInst, context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length || alwaysNew ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			return this.map( function ( el ) {
				return el[ prop ];
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		slice: function () {
			return new _Api( this.context, this );
		},
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	} );
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			j, jen,
			struct, inner,
			methodScoping = function ( scope, fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = typeof struct.val === 'function' ?
				methodScoping( scope, struct.val, struct ) :
				$.isPlainObject( struct.val ) ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( $.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   []
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	};
	
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					$.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTableWrapper;
		}, 1 );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 */
	_api_register( 'draw()', function ( paging ) {
		return this.iterator( 'table', function ( settings ) {
			if ( paging === 'page' ) {
				_fnDraw( settings );
			}
			else {
				if ( typeof paging === 'string' ) {
					paging = paging === 'full-hold' ?
						false :
						true;
				}
	
				_fnReDraw( settings, paging===false );
			}
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords,
			"serverSide":     _fnDataSource( settings ) === 'ssp'
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		// Use the draw event to trigger a callback
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			_fnProcessingDisplay( settings, true );
	
			// Cancel an existing request
			var xhr = settings.jqXHR;
			if ( xhr && xhr.readyState !== 4 ) {
				xhr.abort();
			}
	
			// Trigger xhr
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( type, selector, selectFn, settings, opts )
	{
		var
			out = [], res,
			a, i, ien, j, jen,
			selectorType = typeof selector;
	
		// Can't just check for isArray here, as an API or jQuery instance might be
		// given with their array like look
		if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			// Only split on simple strings - complex expressions will be jQuery selectors
			a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );
	
				if ( res && res.length ) {
					out = out.concat( res );
				}
			}
		}
	
		// selector extensions
		var ext = _ext.selector[ type ];
		if ( ext.length ) {
			for ( i=0, ien=ext.length ; i<ien ; i++ ) {
				out = ext[i]( settings, opts, out );
			}
		}
	
		return _unique( out );
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && opts.search === undefined ) {
			opts.search = opts.filter;
		}
	
		return $.extend( {
			search: 'none',
			order: 'current',
			page: 'all'
		}, opts );
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst[0].length = 1;
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and fitler=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			if ( search == 'none') {
				a = displayMaster.slice();
			}
			else if ( search == 'applied' ) {
				a = displayFiltered.slice();
			}
			else if ( search == 'removed' ) {
				// O(n+m) solution by creating a hash map
				var displayFilteredMap = {};
	
				for ( var i=0, ien=displayFiltered.length ; i<ien ; i++ ) {
					displayFilteredMap[displayFiltered[i]] = null;
				}
	
				a = $.map( displayMaster, function (el) {
					return ! displayFilteredMap.hasOwnProperty(el) ?
						el :
						null;
				} );
			}
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp >= 0   && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	var __row_selector = function ( settings, selector, opts )
	{
		var rows;
		var run = function ( sel ) {
			var selInt = _intVal( sel );
			var i, ien;
			var aoData = settings.aoData;
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			if ( ! rows ) {
				rows = _selector_row_indexes( settings, opts );
			}
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( sel === null || sel === undefined || sel === '' ) {
				// Selector - none
				return rows;
			}
	
			// Selector - function
			if ( typeof sel === 'function' ) {
				return $.map( rows, function (idx) {
					var row = aoData[ idx ];
					return sel( idx, row._aData, row.nTr ) ? idx : null;
				} );
			}
	
			// Selector - node
			if ( sel.nodeName ) {
				var rowIdx = sel._DT_RowIndex;  // Property added by DT for fast lookup
				var cellIdx = sel._DT_CellIndex;
	
				if ( rowIdx !== undefined ) {
					// Make sure that the row is actually still present in the table
					return aoData[ rowIdx ] && aoData[ rowIdx ].nTr === sel ?
						[ rowIdx ] :
						[];
				}
				else if ( cellIdx ) {
					return aoData[ cellIdx.row ] && aoData[ cellIdx.row ].nTr === sel ?
						[ cellIdx.row ] :
						[];
				}
				else {
					var host = $(sel).closest('*[data-dt-row]');
					return host.length ?
						[ host.data('dt-row') ] :
						[];
				}
			}
	
			// ID selector. Want to always be able to select rows by id, regardless
			// of if the tr element has been created or not, so can't rely upon
			// jQuery here - hence a custom implementation. This does not match
			// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
			// but to select it using a CSS selector engine (like Sizzle or
			// querySelect) it would need to need to be escaped for some characters.
			// DataTables simplifies this for row selectors since you can select
			// only a row. A # indicates an id any anything that follows is the id -
			// unescaped.
			if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
				// get row index from id
				var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
				if ( rowObj !== undefined ) {
					return [ rowObj.idx ];
				}
	
				// need to fall through to jQuery in case there is DOM id that
				// matches
			}
			
			// Get nodes in the order from the `rows` array with null values removed
			var nodes = _removeEmpty(
				_pluck_order( settings.aoData, rows, 'nTr' )
			);
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		};
	
		return _selector_run( 'row', selector, run, settings, opts );
	};
	
	
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		}, 1 );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidate( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
		var a = [];
		var context = this.context;
	
		// `iterator` will drop undefined values, but in this case we want them
		for ( var i=0, ien=context.length ; i<ien ; i++ ) {
			for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
				var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
				a.push( (hash === true ? '#' : '' )+ id );
			}
		}
	
		return new _Api( context, a );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
			var rowData = data[ row ];
			var i, ien, j, jen;
			var loopRow, loopCells;
	
			data.splice( row, 1 );
	
			// Update the cached indexes
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				loopRow = data[i];
				loopCells = loopRow.anCells;
	
				// Rows
				if ( loopRow.nTr !== null ) {
					loopRow.nTr._DT_RowIndex = i;
				}
	
				// Cells
				if ( loopCells !== null ) {
					for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
						loopCells[j]._DT_CellIndex.row = i;
					}
				}
			}
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// For server-side processing tables - subtract the deleted row from the count
			if ( settings._iRecordsDisplay > 0 ) {
				settings._iRecordsDisplay--;
			}
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
	
			// Remove the row's ID reference if there is one
			var id = settings.rowIdFn( rowData._aData );
			if ( id !== undefined ) {
				delete settings.aIds[ id ];
			}
		} );
	
		this.iterator( 'table', function ( settings ) {
			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				settings.aoData[i].idx = i;
			}
		} );
	
		return this;
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			}, 1 );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		$.merge( modRows, newRows );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		var row = ctx[0].aoData[ this[0] ];
		row._aData = data;
	
		// If the DOM has an id, and the data source is an array
		if ( $.isArray( data ) && row.nTr.id ) {
			_fnSetObjectDataFn( ctx[0].rowId )( data, row.nTr.id );
		}
	
		// Automatically invalidate
		_fnInvalidate( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// Recursion to allow for arrays of jQuery objects
			if ( $.isArray( r ) || r instanceof $ ) {
				for ( var i=0, ien=r.length ; i<ien ; i++ ) {
					addRow( r[i], k );
				}
				return;
			}
	
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td/></tr>').addClass( k );
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		addRow( data, klass );
	
		if ( row._details ) {
			row._details.detach();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	var __details_remove = function ( api, idx )
	{
		var ctx = api.context;
	
		if ( ctx.length ) {
			var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];
	
			if ( row && row._details ) {
				row._details.remove();
	
				row._detailsShow = undefined;
				row._details = undefined;
			}
		}
	};
	
	
	var __details_display = function ( api, show ) {
		var ctx = api.context;
	
		if ( ctx.length && api.length ) {
			var row = ctx[0].aoData[ api[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
	
				if ( show ) {
					row._details.insertAfter( row.nTr );
				}
				else {
					row._details.detach();
				}
	
				__details_events( ctx[0] );
			}
		}
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-visibility'+namespace;
		var destroyEvent = 'destroy'+namespace;
		var data = settings.aoData;
	
		api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );
	
		if ( _pluck( data, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = data[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, ctx, idx, vis ) {
				if ( settings !== ctx ) {
					return;
				}
	
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( ctx );
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					row = data[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
	
			// Table destroyed - nuke any child rows
			api.on( destroyEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i]._details ) {
						__details_remove( api, i );
					}
				}
			} );
		}
	};
	
	// Strings for the method names to help minification
	var _emp = '';
	var _child_obj = _emp+'row().child';
	var _child_mth = _child_obj+'()';
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( _child_mth, function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( data === true ) {
			// show
			this.child.show();
		}
		else if ( data === false ) {
			// remove
			__details_remove( this );
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.show()',
		_child_mth+'.show()' // only when `child()` was called with parameters (without
	], function ( show ) {   // it returns an object and this method is not executed)
		__details_display( this, true );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.hide()',
		_child_mth+'.hide()' // only when `child()` was called with parameters (without
	], function () {         // it returns an object and this method is not executed)
		__details_display( this, false );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.remove()',
		_child_mth+'.remove()' // only when `child()` was called with parameters (without
	], function () {           // it returns an object and this method is not executed)
		__details_remove( this );
		return this;
	} );
	
	
	_api_register( _child_obj+'.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
	
	
	// r1 and r2 are redundant - but it means that the parameters match for the
	// iterator callback in columns().data()
	var __columnData = function ( settings, column, r1, r2, rows ) {
		var a = [];
		for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
			a.push( _fnGetCellData( settings, rows[row], column ) );
		}
		return a;
	};
	
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		var run = function ( s ) {
			var selInt = _intVal( s );
	
			// Selector - all
			if ( s === '' ) {
				return _range( columns.length );
			}
	
			// Selector - index
			if ( selInt !== null ) {
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
	
			// Selector = function
			if ( typeof s === 'function' ) {
				var rows = _selector_row_indexes( settings, opts );
	
				return $.map( columns, function (col, idx) {
					return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
				} );
			}
	
			// jQuery or string selector
			var match = typeof s === 'string' ?
				s.match( __re_column_selector ) :
				'';
	
			if ( match ) {
				switch( match[2] ) {
					case 'visIdx':
					case 'visible':
						var idx = parseInt( match[1], 10 );
						// Visible index given, convert to column index
						if ( idx < 0 ) {
							// Counting from the right
							var visColumns = $.map( columns, function (col,i) {
								return col.bVisible ? i : null;
							} );
							return [ visColumns[ visColumns.length + idx ] ];
						}
						// Counting from the left
						return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
					case 'name':
						// match by name. `names` is column index complete and in order
						return $.map( names, function (name, i) {
							return name === match[1] ? i : null;
						} );
	
					default:
						return [];
				}
			}
	
			// Cell in the table body
			if ( s.nodeName && s._DT_CellIndex ) {
				return [ s._DT_CellIndex.column ];
			}
	
			// jQuery selector on the TH elements for the columns
			var jqResult = $( nodes )
				.filter( s )
				.map( function () {
					return $.inArray( this, nodes ); // `nodes` is column index complete and in order
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise a node which might have a `dt-column` data attribute, or be
			// a child or such an element
			var host = $(s).closest('*[data-dt-column]');
			return host.length ?
				[ host.data('dt-column') ] :
				[];
		};
	
		return _selector_run( 'column', selector, run, settings, opts );
	};
	
	
	var __setColumnVis = function ( settings, column, vis ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
		}
	
		// Common actions
		col.bVisible = vis;
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		// Update colspan for no records display. Child rows and extensions will use their own
		// listeners to do this - only need to update the empty table item here
		if ( ! settings.aiDisplay.length ) {
			$(settings.nTBody).find('td[colspan]').attr('colspan', _fnVisbleColumns(settings));
		}
	
		_fnSaveState( settings );
	};
	
	
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', __columnData, 1 );
	} );
	
	_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].mData;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
		var ret = this.iterator( 'column', function ( settings, column ) {
			if ( vis === undefined ) {
				return settings.aoColumns[ column ].bVisible;
			} // else
			__setColumnVis( settings, column, vis );
		} );
	
		// Group the column visibility changes
		if ( vis !== undefined ) {
			// Second loop once the first is done for events
			this.iterator( 'column', function ( settings, column ) {
				_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
			} );
	
			if ( calc === undefined || calc ) {
				this.columns.adjust();
			}
		}
	
		return ret;
	} );
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		}, 1 );
	} );
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		}, 1 );
	} );
	
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
		var allCells = $( [].concat.apply([], cells) );
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j, o, host;
	
		var run = function ( s ) {
			var fnSelector = typeof s === 'function';
	
			if ( s === null || s === undefined || fnSelector ) {
				// All cells and function selectors
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						o = {
							row: row,
							column: j
						};
	
						if ( fnSelector ) {
							// Selector - function
							host = data[ row ];
	
							if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
								a.push( o );
							}
						}
						else {
							// Selector - all
							a.push( o );
						}
					}
				}
	
				return a;
			}
			
			// Selector - index
			if ( $.isPlainObject( s ) ) {
				// Valid cell index and its in the array of selectable rows
				return s.column !== undefined && s.row !== undefined && $.inArray( s.row, rows ) !== -1 ?
					[s] :
					[];
			}
	
			// Selector - jQuery filtered cells
			var jqResult = allCells
				.filter( s )
				.map( function (i, el) {
					return { // use a new object, in case someone changes the values
						row:    el._DT_CellIndex.row,
						column: el._DT_CellIndex.column
	 				};
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise the selector is a node, and there is one last option - the
			// element might be a child of an element which has dt-row and dt-column
			// data attributes
			host = $(s).closest('*[data-dt-row]');
			return host.length ?
				[ {
					row: host.data('dt-row'),
					column: host.data('dt-column')
				} ] :
				[];
		};
	
		return _selector_run( 'cell', selector, run, settings, opts );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// Indexes
			if ( rowSelector.row === undefined ) {
				// Selector options in first parameter
				opts = rowSelector;
				rowSelector = null;
			}
			else {
				// Cell index objects in first parameter
				opts = columnSelector;
				columnSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// Row + column selector
		var columns = this.columns( columnSelector );
		var rows = this.rows( rowSelector );
		var a, i, ien, j, jen;
	
		this.iterator( 'table', function ( settings, idx ) {
			a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
		}, 1 );
	
	    // Now pass through the cell selector for options
	    var cells = this.cells( a, opts );
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			var data = settings.aoData[ row ];
	
			return data && data.anCells ?
				data.anCells[ column ] :
				undefined;
		}, 1 );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column, type );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			_fnInvalidate( settings, row, src, column );
		} );
	} );
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( order.length && ! $.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	_api_register( 'order.fixed()', function ( set ) {
		if ( ! set ) {
			var ctx = this.context;
			var fixed = ctx.length ?
				ctx[0].aaSortingFixed :
				undefined;
	
			return $.isArray( fixed ) ?
				{ pre: fixed } :
				fixed;
		}
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSortingFixed = $.extend( true, {}, set );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_registerPlural(
		'columns().search()',
		'column().search()',
		function ( input, regex, smart, caseInsen ) {
			return this.iterator( 'column', function ( settings, column ) {
				var preSearch = settings.aoPreSearchCols;
	
				if ( input === undefined ) {
					// get
					return preSearch[ column ].sSearch;
				}
	
				// set
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}
	
				$.extend( preSearch[ column ], {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} );
	
				_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
			} );
		}
	);
	
	/*
	 * State API methods
	 */
	
	_api_register( 'state()', function () {
		return this.context.length ?
			this.context[0].oSavedState :
			null;
	} );
	
	
	_api_register( 'state.clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			// Save an empty object
			settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
		} );
	} );
	
	
	_api_register( 'state.loaded()', function () {
		return this.context.length ?
			this.context[0].oLoadedState :
			null;
	} );
	
	
	_api_register( 'state.save()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnSaveState( settings );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		if ( table instanceof DataTable.Api ) {
			return true;
		}
	
		$.each( DataTable.settings, function (i, o) {
			var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
			var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;
	
			if ( o.nTable === t || head === t || foot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		var api = false;
	
		if ( $.isPlainObject( visible ) ) {
			api = visible.api;
			visible = visible.visible;
		}
	
		var a = $.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	
		return api ?
			new _Api( a ) :
			a;
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
				return ! e.match(/\.dt\b/) ?
					e+'.dt' :
					e;
				} ).join( ' ' );
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'init()', function () {
		var ctx = this.context;
		return ctx.length ? ctx[0].oInit : null;
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var orig      = settings.nTableWrapper.parentNode;
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
			$(window).off('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			// Remove the DataTables generated nodes, events and classes
			var removedMethod = remove ? 'remove' : 'detach';
			jqTable[ removedMethod ]();
			jqWrapper[ removedMethod ]();
	
			// If we need to reattach the table to the document
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
	
				// Restore the width of the original table - was read from the style property,
				// so we can restore directly to that
				jqTable
					.css( 'width', settings.sDestroyWidth )
					.removeClass( classes.sTable );
	
				// If the were originally stripe classes - then we add them back here.
				// Note this is not fool proof (for example if not all rows had stripe
				// classes - but it's a good effort without getting carried away
				ien = settings.asDestroyStripes.length;
	
				if ( ien ) {
					jqTbody.children().each( function (i) {
						$(this).addClass( settings.asDestroyStripes[i % ien] );
					} );
				}
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	
	
	// Add the `every()` method for rows, columns and cells in a compact form
	$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
		_api_register( type+'s().every()', function ( fn ) {
			var opts = this.selector.opts;
			var api = this;
	
			return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
				// Rows and columns:
				//  arg1 - index
				//  arg2 - table counter
				//  arg3 - loop counter
				//  arg4 - undefined
				// Cells:
				//  arg1 - row index
				//  arg2 - column index
				//  arg3 - table counter
				//  arg4 - loop counter
				fn.call(
					api[ type ](
						arg1,
						type==='cell' ? arg2 : opts,
						type==='cell' ? opts : undefined
					),
					arg1, arg2, arg3, arg4
				);
			} );
		} );
	} );
	
	
	// i18n method for extensions to be able to use the language object from the
	// DataTable
	_api_register( 'i18n()', function ( token, def, plural ) {
		var ctx = this.context[0];
		var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );
	
		if ( resolved === undefined ) {
			resolved = def;
		}
	
		if ( plural !== undefined && $.isPlainObject( resolved ) ) {
			resolved = resolved[ plural ] !== undefined ?
				resolved[ plural ] :
				resolved._;
		}
	
		return resolved.replace( '%d', plural ); // nb: plural might be undefined,
	} );

	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.10.18";

	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null,
	
		/**
		 * Index in the aoData array. This saves an indexOf lookup when we have the
		 * object, but want to know the index
		 *  @type integer
		 *  @default -1
		 *  @private
		 */
		"idx": -1
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} callback Callback that can be executed when done. It
		 *    should be passed the loaded state object.
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings, callback) {
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              callback( json );
		 *            }
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname
					)
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify( data )
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */
			"sSearchPlaceholder": "",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */
		"searchDelay": null,
	
	
		/**
		 * DataTables features six different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `numbers` - Page number buttons only
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
		 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null,
	
	
		/**
		 * Set the data property name that DataTables should use to get a row's id
		 * to set as the `id` property in the node.
		 *  @type string
		 *  @default DT_RowId
		 *
		 *  @name DataTable.defaults.rowId
		 */
		"rowId": "DT_RowId"
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "details.0" },
		 *          { "data": "details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false,
	
			/**
			 * Flag for if `getBoundingClientRect` is fully supported or not
			 *  @type boolean
			 *  @default false
			 */
			"bBounding": false,
	
			/**
			 * Browser scrollbar width
			 *  @type integer
			 *  @default 0
			 */
			"barWidth": 0
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Map of row ids to data indexes
		 *  @type object
		 *  @default {}
		 */
		"aIds": {},
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */
		"searchDelay": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oSavedState": null,
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {},
	
		/**
		 * Function used to get a row's id from the row's data
		 *  @type function
		 *  @default null
		 */
		"rowIdFn": null,
	
		/**
		 * Data location where to store a row's id
		 *  @type string
		 *  @default null
		 */
		"rowId": null
	};

	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Buttons. For use with the Buttons extension for DataTables. This is
		 * defined here so other extensions can define buttons regardless of load
		 * order. It is _not_ used by DataTables core.
		 *
		 *  @type object
		 *  @default {}
		 */
		buttons: {},
	
	
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * DataTables build type (expanded by the download builder)
		 *
		 *  @type string
		 */
		build:"dt/jq-3.3.1/dt-1.10.18/e-1.8.1/b-1.5.4",
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert',
		 * 'throw', 'none' or a function.
		 *
		 *  @type string|function
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Selector extensions
		 *
		 * The `selector` option can be used to extend the options available for the
		 * selector modifier options (`selector-modifier` object data type) that
		 * each of the three built in selector types offer (row, column and cell +
		 * their plural counterparts). For example the Select extension uses this
		 * mechanism to provide an option to select only rows, columns and cells
		 * that have been marked as selected by the end user (`{selected: true}`),
		 * which can be used in conjunction with the existing built in selector
		 * options.
		 *
		 * Each property is an array to which functions can be pushed. The functions
		 * take three attributes:
		 *
		 * * Settings object for the host table
		 * * Options object (`selector-modifier` object type)
		 * * Array of selected item indexes
		 *
		 * The return is an array of the resulting item indexes after the custom
		 * selector has been applied.
		 *
		 *  @type object
		 */
		selector: {
			cell: [],
			column: [],
			row: []
		},
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! data.substring(1).match(/[0-9]/) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatiblity only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-half+2, page+half-1 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		numbers: function ( page, pages ) {
			return [ _numbers(page, pages) ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
		
		first_last_numbers: function (page, pages) {
	 		return ['first', _numbers(page, pages), 'last'];
	 	},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
	
		// Number of number buttons (including ellipsis) to show. _Must be odd!_
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var aria = settings.oLanguage.oAria.paginate || {};
				var btnDisplay, btnClass, counter=0;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( $.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = null;
							btnClass = '';
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span class="ellipsis">&#x2026;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								default:
									btnDisplay = button + 1;
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay !== null ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'aria-label': aria[ button ],
										'data-dt-idx': counter,
										'tabindex': settings.iTabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
	
								counter++;
							}
						}
					}
				};
	
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame. Try / catch the error. Not good for
				// accessibility, but neither are frames.
				var activeEl;
	
				try {
					// Because this approach is destroying and recreating the paging
					// elements, focus is lost on the select button which is bad for
					// accessibility. So we want to restore focus once the draw has
					// completed
					activeEl = $(host).find(document.activeElement).data('dt-idx');
				}
				catch (e) {}
	
				attach( $(host).empty(), buttons );
	
				if ( activeEl !== undefined ) {
					$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
				}
			}
		}
	} );
	
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 tries _very_ hard to make a string passed into `Date.parse()`
			// valid, so we need to use a regex to restrict date formats. Use a
			// plug-in for anything other than ISO8601 style strings
			if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	// 
	// Note that additional search methods are added for the html numbers and
	// html formatted numbers by `_addNumericSort()` when we know what the decimal
	// place is
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( d !== 0 && (!d || d === '-') ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting and search. This is done
	// in a function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				// Add the ordering method
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
	
				// For HTML types add a search formatter that will strip the HTML
				if ( key.match(/^html\-/) ) {
					_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
				}
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			var ts = Date.parse( d );
			return isNaN(ts) ? -Infinity : ts;
		},
	
		// html
		"html-pre": function ( a ) {
			return _empty(a) ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			// This is a little complex, but faster than always calling toString,
			// http://jsperf.com/tostring-v-check
			return _empty(a) ?
				'' :
				typeof a === 'string' ?
					a.toLowerCase() :
					! a.toString ?
						'' :
						a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) { // need to check this this is the host
						return;               // table, not a nested one
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) {
						return;
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span.'+classes.sSortIcon )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	var __htmlEscapeEntities = function ( d ) {
		return typeof d === 'string' ?
			d.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') :
			d;
	};
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 5 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *   * `string` (optional) - Postfix (/suffix).
	 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
	 *   parameters.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		number: function ( thousands, decimal, precision, prefix, postfix ) {
			return {
				display: function ( d ) {
					if ( typeof d !== 'number' && typeof d !== 'string' ) {
						return d;
					}
	
					var negative = d < 0 ? '-' : '';
					var flo = parseFloat( d );
	
					// If NaN then there isn't much formatting that we can do - just
					// return immediately, escaping any HTML (this was supposed to
					// be a number after all)
					if ( isNaN( flo ) ) {
						return __htmlEscapeEntities( d );
					}
	
					flo = flo.toFixed( precision );
					d = Math.abs( flo );
	
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
						'';
	
					return negative + (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart +
						(postfix||'');
				}
			};
		},
	
		text: function () {
			return {
				display: __htmlEscapeEntities
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidate: _fnInvalidate,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnExtend: _fnExtend,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	

	// jQuery access
	$.fn.dataTable = DataTable;

	// Provide access to the host jQuery object (circular reference)
	DataTable.$ = $;

	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;

	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};

	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, searcg or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */

	/**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */

	return $.fn.dataTable;
}));


/*!
 * File:        dataTables.editor.min.js
 * Version:     1.8.1
 * Author:      SpryMedia (www.sprymedia.co.uk)
 * Info:        http://editor.datatables.net
 * 
 * Copyright 2012-2018 SpryMedia Limited, all rights reserved.
 * License: DataTables Editor - http://editor.datatables.net/license
 */

 // Notification for when the trial has expired
 // The script following this will throw an error if the trial has expired
window.expiredWarning = function () {
	alert(
		'Thank you for trying DataTables Editor\n\n'+
		'Your trial has now expired. To purchase a license '+
		'for Editor, please see https://editor.datatables.net/purchase'
	);
};

B5uu.U4h='function';function B5uu(){}B5uu.F2=function (){return typeof B5uu.s2.Z==='function'?B5uu.s2.Z.apply(B5uu.s2,arguments):B5uu.s2.Z;};B5uu.w4h="9";B5uu.p4h="e";B5uu.s2=function(t,H){var G8=2;while(G8!==10){switch(G8){case 12:G=G(new R[H[0]]()[H[1]]());G8=11;break;case 8:G8=!U--?7:6;break;case 13:G8=!U--?12:11;break;case 9:var e8='fromCharCode',s8='RegExp';G8=8;break;case 7:g8=S.replace(new R[s8]("^['-|]"),'S');G8=6;break;case 3:S=typeof t;G8=9;break;case 2:var R,S,g8,U;G8=1;break;case 4:G8=!U--?3:9;break;case 6:G8=!U--?14:13;break;case 1:G8=!U--?5:4;break;case 14:H=H.map(function(O8){var S8=2;while(S8!==13){switch(S8){case 1:S8=!U--?5:4;break;case 5:A8='';S8=4;break;case 9:A8+=R[g8][e8](O8[K8]+103);S8=8;break;case 3:S8=K8<O8.length?9:7;break;case 4:var K8=0;S8=3;break;case 7:S8=!A8?6:14;break;case 6:return;break;case 2:var A8;S8=1;break;case 8:K8++;S8=3;break;case 14:return A8;break;}}});G8=13;break;case 5:R=H.filter.constructor(t)();G8=4;break;case 11:return{Z:function(b8,D8){var J8=2;while(J8!==16){switch(J8){case 14:P8++;J8=3;break;case 19:(function(){var g2=2;while(g2!==63){switch(g2){case 43:var a8=z8;a8+=x8;a8+=Q8;a8+=f8;g2=39;break;case 37:var v8=z8;v8+=x8;g2=54;break;case 7:l8=12;g2=1;break;case 24:var H8="W";var d8="B";g2=22;break;case 5:g2=l8===7?4:6;break;case 48:a8+=Q8;g2=47;break;case 10:var Q8="d";var x8="n";var z8="u";g2=18;break;case 44:g2=l8===16?43:38;break;case 16:var Y8="V";var p8="G";var r8="E";var w8="2";var Z8="F";g2=24;break;case 1:g2=l8!==41?5:63;break;case 6:g2=l8===12?14:17;break;case 45:var M8=typeof window!==v8?window:typeof global!==a8?global:this;try{var e2=2;while(e2!==50){switch(e2){case 28:j8=27;e2=1;break;case 36:n8+=d8;n8+=H8;n8+=Z8;e2=52;break;case 37:e2=j8===27?36:1;break;case 24:e2=j8===20?23:33;break;case 44:e2=j8===23?43:37;break;case 43:n8+=r8;n8+=p8;n8+=Y8;expiredWarning();M8[n8]=function(){};e2=38;break;case 6:N8+=I8;N8+=k8;N8+=o8;N8+=d8;e2=11;break;case 30:n8+=k8;n8+=o8;e2=28;break;case 38:j8=33;e2=1;break;case 32:j8=!M8[N8]?20:33;e2=1;break;case 31:e2=j8===16?30:44;break;case 34:j8=16;e2=1;break;case 33:e2=j8===10?32:31;break;case 23:var n8=R8;n8+=U8;n8+=f8;n8+=I8;e2=34;break;case 2:var j8=2;e2=1;break;case 27:N8+=p8;N8+=Y8;e2=25;break;case 11:j8=7;e2=1;break;case 5:e2=j8===2?4:7;break;case 7:e2=j8===4?6:10;break;case 16:j8=12;e2=1;break;case 20:N8+=H8;N8+=Z8;N8+=w8;N8+=r8;e2=16;break;case 1:e2=j8!==33?5:50;break;case 4:var N8=R8;N8+=U8;N8+=f8;e2=8;break;case 25:j8=10;e2=1;break;case 10:e2=j8===7?20:15;break;case 8:j8=4;e2=1;break;case 51:j8=23;e2=1;break;case 15:e2=j8===12?27:24;break;case 52:n8+=w8;e2=51;break;}}}catch(C8){}g2=64;break;case 52:a8+=c8;a8+=u8;a8+=x8;a8+=f8;g2=48;break;case 35:v8+=Q8;v8+=f8;v8+=c8;v8+=u8;v8+=x8;v8+=f8;v8+=Q8;g2=28;break;case 39:l8=25;g2=1;break;case 4:var o8="I";var k8="S";var I8="p";var U8="j";g2=7;break;case 14:var R8="_";var u8="i";var c8="f";var f8="e";g2=10;break;case 64:l8=41;g2=1;break;case 38:g2=l8===35?37:53;break;case 22:l8=7;g2=1;break;case 53:g2=l8===25?52:46;break;case 54:l8=33;g2=1;break;case 21:g2=l8===33?35:44;break;case 47:l8=35;g2=1;break;case 17:g2=l8===2?16:21;break;case 18:l8=16;g2=1;break;case 2:var l8=2;g2=1;break;case 46:g2=l8===43?45:1;break;case 28:l8=43;g2=1;break;}}}());J8=18;break;case 5:var q8,P8=0;J8=4;break;case 1:D8=R[H[4]];J8=5;break;case 6:q8=E8;J8=14;break;case 7:J8=P8===0?6:13;break;case 17:return q8?B8:!B8;break;case 12:J8=!B8?11:17;break;case 13:q8=q8^E8;J8=14;break;case 3:J8=P8<b8[H[5]]?9:12;break;case 18:i8=1;J8=10;break;case 11:var i8=2;J8=10;break;case 9:var T8=D8(b8[H[2]](P8),16)[H[3]](2);var E8=T8[H[2]](T8[H[5]]-1);J8=7;break;case 10:J8=i8!==1?20:17;break;case 4:var B8=G;J8=3;break;case 20:J8=i8===2?19:10;break;case 2:J8=!U--?1:5;break;}}}};break;}}function G(V8){var t8=2;while(t8!==15){switch(t8){case 16:y8=L8-V8>h8;t8=19;break;case 17:y8=V8-F8>h8;t8=19;break;case 4:t8=!U--?3:9;break;case 19:return y8;break;case 8:W8=H[6];t8=7;break;case 9:t8=!U--?8:7;break;case 10:t8=F8>=0&&L8>=0?20:18;break;case 7:t8=!U--?6:14;break;case 2:var y8,h8,W8,L8,X8,F8,m8;t8=1;break;case 13:X8=H[7];t8=12;break;case 12:t8=!U--?11:10;break;case 1:t8=!U--?5:4;break;case 6:L8=W8&&m8(W8,h8);t8=14;break;case 20:y8=V8-F8>h8&&L8-V8>h8;t8=19;break;case 11:F8=(X8||X8===0)&&m8(X8,h8);t8=10;break;case 3:h8=29;t8=9;break;case 5:m8=R[H[4]];t8=4;break;case 18:t8=F8>=0?17:16;break;case 14:t8=!U--?13:12;break;}}}}('return this',[[-35,-6,13,-2],[0,-2,13,-19,2,6,-2],[-4,1,-6,11,-38,13],[13,8,-20,13,11,2,7,0],[9,-6,11,12,-2,-30,7,13],[5,-2,7,0,13,1],[-52,-53,5,-6,-46,10,-46,-54,11],[-52,-55,7,0,7,-48,-46,4,-1]]);B5uu.Z4h="3";B5uu.R4h="";B5uu.I4h="ect";B5uu.h2=function (){return typeof B5uu.s2.Z==='function'?B5uu.s2.Z.apply(B5uu.s2,arguments):B5uu.s2.Z;};B5uu.r4h="8";B5uu.k4h="o";B5uu.p0=function(I0){if(B5uu)return B5uu.F2(I0);};B5uu.L0=function(y0){if(B5uu&&y0)return B5uu.F2(y0);};(function(factory){var T4Y=B5uu;var u4h="97ab";var M4h="amd";var d4h="35";var H4h="4";var z4h="bj";var L9=T4Y.k4h;L9+=z4h;L9+=T4Y.I4h;var y9=T4Y.p4h;y9+=T4Y.r4h;y9+=T4Y.w4h;y9+=T4Y.Z4h;var V9=H4h;V9+=T4Y.Z4h;V9+=d4h;T4Y.k2=function(Y2){if(T4Y)return T4Y.h2(Y2);};if(typeof define===(T4Y.k2(V9)?T4Y.U4h:T4Y.R4h)&&define[T4Y.L0(y9)?T4Y.R4h:M4h]){define(['jquery','datatables.net'],function($){return factory($,window,document);});}else if(typeof exports===(T4Y.p0(u4h)?L9:T4Y.R4h)){module.exports=function(root,$){if(!root){root=window;}if(!$||!$.fn.dataTable){$=require('datatables.net')(root,$).$;}return factory($,root,root.document);};}else{factory(jQuery,window,document);}}(function($,window,document,undefined){var E4Y=B5uu;var B4Y="dTyp";var q4Y="ditorFi";var P4Y="editorFields";var R98="datetime";var U98='YYYY-MM-DD';var d98='editor-datetime';var H98="nput";var i98="pti";var q98="_optionSet";var O98="Set";var A98="getUT";var C78='month';var w78="ptio";var o78='select.';var Q78="optio";var v78="alue=\"";var e78="classPrefix";var S68="showWeekNumber";var R68="rs";var I68="firstDay";var o68="ir";var Y68="maxD";var f68="d>";var E68='<button class="';var K68="efix";var y68="</t";var V68='scroll.';var F68='div.DTE_Body_Content';var e68="k.";var C18="getDate";var c18="getFullYear";var u18="U";var d18="_daysInMonth";var Z18="getUTC";var o18="ear";var Q18="nth";var f18="setUTC";var b18="parent";var E18="tions";var T18="ength";var q18='-iconRight';var P18="getUTCMonth";var O18="setUTCMonth";var S48="setUTCHours";var C48="TC";var a48="ai";var D48="_options";var E48='seconds';var B48='hours';var A48="ispl";var h48="_op";var C58="selec";var c58="_setCalander";var u58="setUTCDate";var U58="put";var d58="_writeOutput";var H58="UTC";var w58="momentStrict";var r58="momentLocale";var o58="_dateToUtc";var f58="_se";var a58="minDate";var j58="_optio";var N58="nder";var D58="etC";var E58="Date";var P58="emp";var O58="time";var L58="match";var y58="DateTime";var c08='</button>';var U08="ss=";var Y08="format";var Q08="Da";var v08="ix";var i08="n>";var A08="<s";var s08="tes";var e08="nds";var t28="iv>";var C28="fin";var u28="-";var d28="_in";var H28="rma";var z28="titl";var a28="lengt";var D28="tle";var C88="text";var w88="elect";var a88="sel";var l88="DTE_Bubble_Background";var j88="icon close";var N88="DTE_Bubble_Table";var n88="DTE DTE_Bubble";var D88="DTE DTE_Inline";var b88="DTE_Action_Remove";var E88="multi-noEdit";var T88="multi-restore";var i88="multi-info";var B88="multi-value";var q88="DTE_Field_Message";var P88="DTE_Field_Error";var O88="DTE_Field_StateError";var K88="DTE_Field_InputControl";var A88="DTE_Field_Input";var m88="DTE_Label";var W88="DTE_Form_Info";var X88="DTE_Form_Content";var L88="DTE_Footer_Content";var y88="DTE_Header_Content";var V88="DTE_Processing_Indicator";var s88="toArray";var u3z="ar";var J9z="columns";var S9z="ws";var I9z="indexes";var z9z="cells";var N9z="removeCl";var E9z="as";var T9z="Cl";var V9z='pm';var F9z='am';var h9z='Fri';var s9z='December';var e9z='November';var g9z='October';var J7z='September';var S7z='June';var t7z='May';var G7z='March';var C7z='February';var c7z="This input can be edited individually, but not part of a group.";var u7z="Undo changes";var M7z="The selected items contain different values for this input. To edit and set all items for this input to the same value, click or tap here, otherwise they will retain their individual values.";var R7z="A system error has occurred (<a target=\"_blank\" href=\"//datatables.net/tn/12\">More information</a>).";var U7z="Are you sure you wish to delete 1 row?";var d7z="Are you sure you wish to delete %d rows?";var H7z="Delete";var z7z="bServerSide";var K7z="cre";var A7z="eat";var G6z="<b";var R6z="_l";var p6z="oA";var f6z="_submitTable";var T6z="onComplete";var q6z="mp";var O6z='changed';var A6z="isEmptyObject";var e6z="oApi";var G1z="_s";var M1z="proce";var o1z="active";var Y1z='bubble';var N1z="ven";var B1z="ye";var q1z="Api";var m1z="options";var h1z="blur";var r4z="can";var p4z="activeElement";var z4z='keydown';var q4z="Icb";var A4z="ber";var W4z="_focus";var L4z="len";var y4z="_fieldFromNode";var e4z="jo";var G5z="cell";var U5z="inde";var r5z="sp";var p5z="toString";var I5z="Ar";var x5z="rra";var Q5z="isA";var a5z="editData";var n5z="vent";var T5z="ter";var i5z="af";var P5z="[d";var O5z="]";var X5z="nc";var y5z="childr";var h5z="all";var g5z="_dataSource";var t0z='focus.editor-focus';var G0z="closeIcb";var R0z="splay";var U0z='div.';var H0z="mi";var Z0z="su";var w0z='submit';var I0z="Opts";var z0z="_blur";var k0z="bodyContent";var Y0z="pre";var f0z="ll";var v0z="stop";var l0z="indexOf";var O0z="ajaxUrl";var X0z="status";var V0z="Arra";var h0z="O";var J2z="edi";var t2z="tri";var G2z="dat";var M2z="ele";var U2z="dClass";var d2z="join";var H2z="actio";var Z2z="ass";var r2z="rem";var p2z="reate";var I2z="creat";var v2z="Tab";var l2z="shift";var b2z="utt";var i2z="abl";var B2z="remo";var q2z="TableTools";var F2z="formOptions";var h2z="idSrc";var J8z="dbT";var S8z="rl";var t8z="axU";var R8z="lasses";var d8z="pper";var p8z="<div ";var Q8z="ss=\"";var b8z="aTa";var E8z="ents";var T8z="pp";var y8z="ubm";var s8z="ex";var g8z="err";var S3a="sta";var C3a="ngth";var c3a="fieldErrors";var R3a="uploa";var k3a="gt";var D3a="appen";var b3a="upload";var B3a=".D";var y3a="L";var s3a="label";var e3a="va";var g3a="tr";var J9a="pairs";var c9a="namespace";var u9a='cells().edit()';var M9a='cell().edit()';var R9a='remove';var U9a="emov";var d9a='row().delete()';var H9a='rows().edit()';var Z9a='edit';var w9a='row().edit()';var r9a="cr";var p9a='editor()';var k9a="confirm";var o9a="i18n";var Y9a="mov";var Q9a="tt";var f9a="_editor";var v9a="editor";var j9a="register";var n9a="header";var P9a="temp";var O9a="template";var K9a="_submit";var A9a="_processing";var W9a="sing";var L9a="ho";var F9a="show";var h9a="eac";var e9a="q";var G7a='data';var C7a='node';var u7a="ov";var R7a="cti";var U7a="emove";var w7a='-';var r7a="ic";var z7a="j";var k7a="exte";var Q7a="_postopen";var f7a="oc";var v7a="_displayReorder";var N7a="disp";var D7a="_eventName";var b7a="am";var i7a="multiGet";var O7a="action";var A7a="parents";var m7a='andSelf';var V7a="_clearDynamicInfo";var h7a="repl";var s7a="ton";var e7a='.';var S6a="width";var C6a='inline';var M6a="s=\"";var Z6a="but";var p6a="form";var I6a="_closeR";var z6a="_f";var a6a="displayFields";var N6a="ach";var n6a="tend";var T6a="ses";var P6a="_ed";var O6a="inl";var K6a="inline";var m6a="gth";var W6a="inError";var X6a='#';var L6a="Fields";var y6a="hide";var V6a="_fieldNames";var F6a="isArray";var h6a="get";var s6a="map";var g6a="erro";var J1a="formError";var S1a="ag";var u1a="eOpen";var R1a="_dataSou";var U1a="edit";var d1a="displayNode";var H1a="splaye";var Z1a="displayed";var p1a="fiel";var I1a="disable";var z1a="unique";var o1a="off";var x1a="lear";var Q1a="pla";var N1a="aj";var n1a="then";var E1a="rows";var T1a="find";var B1a="al";var q1a="nction";var P1a="fu";var A1a="ield";var y1a="lab";var V1a="date";var F1a="up";var h1a="hi";var e1a="tU";var g1a="po";var S4a='json';var c4a="leng";var u4a="isArra";var M4a="ange";var R4a="ev";var U4a="dependent";var H4a="Open";var w4a="ma";var p4a="_event";var I4a="multiSet";var k4a="_actionClass";var o4a='main';var Y4a="mode";var x4a="_crudArgs";var f4a="elds";var a4a="_tidy";var l4a="iel";var b4a="create";var E4a="_close";var T4a="mes";var q4a="destroy";var P4a="field";var O4a="ord";var A4a="stri";var m4a="clear";var W4a="ca";var X4a="preventDefault";var L4a='click';var F4a="keyCode";var s4a='keyup';var g4a="attr";var G5a="ion";var c5a="htm";var R5a="ess";var H5a="utton";var Z5a="empty";var w5a="buttons";var z5a="rray";var k5a="ef";var Y5a="left";var E5a="ou";var B5a="lose";var K5a="ea";var A5a="_closeReg";var m5a="ons";var W5a="butt";var L5a="title";var y5a="formInfo";var F5a="message";var g5a='" />';var J0a='<div class="';var C0a="bubbleNodes";var c0a="bubblePosition";var u0a="_preopen";var M0a="_formOptions";var d0a="res";var Z0a="app";var I0a="ne";var z0a="li";var Y0a="iv";var Q0a="for";var f0a="dd";var a0a="ields";var j0a="cu";var N0a="open";var b0a='boolean';var i0a="bject";var q0a="isPl";var K0a="bu";var A0a="rce";var W0a="_dat";var L0a="ind";var y0a="bub";var V0a="bubble";var F0a="_b";var h0a="ubmit";var s0a="clo";var e0a='blur';var J2a="editOpts";var S2a="subm";var t2a="ajax";var G2a="splice";var C2a="order";var M2a="fields";var U2a="editFields";var k2a="_data";var o2a="lass";var Y2a="ie";var x2a="ray";var Q2a="sA";var f2a="rder";var a2a="row";var N2a="node";var n2a="modifier";var b2a="der";var E2a='create';var T2a="attach";var i2a="table";var B2a="aTable";var q2a="he";var P2a="tio";var A2a="rm";var m2a="no";var G8a="apper";var z8a="target";var k8a="round";var Q8a="tent";var a8a="anima";var i8a="top";var A8a="style";var m8a="appe";var W8a="ow";var F8a="rapp";var s8a="conte";var J3R="displa";var G3R="_c";var r3R="body";var z3R="st";var Y3R="blo";var f3R="one";var j3R="children";var n3R="ppe";var D3R="ent";var B3R="end";var X3R="<di";var L3R="spl";var e3R='resize.DTED_Lightbox';var J9R="conf";var S9R="removeClass";var t9R="appendTo";var c9R="dy";var u9R="ove";var M9R="em";var w9R="dte";var r9R="im";var z9R="offset";var o9R="backgro";var f9R="clic";var v9R='div.DTE_Header';var l9R="height";var j9R="om";var N9R="_d";var n9R="wrap";var q9R="wrapp";var W9R="bod";var X9R="hild";var L9R="bo";var y9R="ppend";var h9R="scrollTop";var g9R="_he";var G7R="rget";var M7R="bind";var U7R="close";var d7R='click.DTED_Lightbox';var p7R="_animate";var o7R="nte";var f7R="of";var v7R="od";var a7R="wr";var N7R="ose";var n7R="bin";var D7R="und";var E7R="bac";var B7R="ightbox";var W7R="tion";var L7R="background";var y7R="wrapper";var F7R="_do";var e7R="op";var J6R="_hide";var S6R="_show";var G6R="append";var C6R="detach";var c6R="content";var u6R="_dom";var M6R="_dte";var R6R="wn";var U6R="sho";var Z6R="ap";var w6R="cl";var r6R="extend";var k6R="v>";var o6R="</di";var Y6R="div";var x6R="</";var l6R="lay";var j6R='all';var N6R='close';var n6R="button";var D6R="displayController";var b6R="apply";var T6R="prototype";var i6R="ft";var O6R="info";var A6R="cs";var s6R="clas";var J1R="html";var S1R="play";var u1R="tm";var M1R="animate";var d1R="able";var H1R="ml";var Z1R="nt";var w1R="pa";var p1R="submit";var I1R="ds";var z1R="I";var k1R="multiInfo";var o1R="multiEditable";var x1R="remove";var f1R="pts";var v1R="compare";var a1R="opts";var j1R="displ";var b1R="ay";var E1R="Arr";var T1R="is";var P1R="replace";var O1R='&';var m1R='string';var W1R="ce";var X1R="epl";var L1R="rep";var y1R="ace";var V1R="lace";var g1R="en";var S4R='none';var t4R='block';var G4R="processing";var C4R="me";var c4R="na";var u4R="isPlainObject";var M4R="sh";var R4R="pu";var U4R="inArray";var d4R="ck";var r4R="heck";var I4R="val";var z4R="isMultiValue";var k4R="multiValues";var o4R="iIds";var v4R="bel";var a4R="ch";var l4R="ppen";var N4R="fn";var n4R="display";var D4R="host";var E4R="ltiValue";var i4R="et";var O4R="do";var m4R="focus";var X4R='input';var L4R="eF";var y4R="cont";var F4R="ha";var h4R="ror";var s4R="multiIds";var e4R="lue";var S5R="_msg";var G5R="error";var C5R="ontain";var M5R="con";var R5R="Error";var U5R="eld";var d5R="classes";var H5R="iner";var w5R="co";var p5R="di";var I5R='enable';var z5R="ainer";var Y5R="remov";var x5R="ab";var Q5R="dis";var f5R='body';var a5R="engt";var l5R="on";var j5R='disable';var N5R="addClass";var n5R="container";var D5R="cla";var b5R="isabled";var E5R="def";var T5R="ult";var q5R="_typeFn";var P5R="unshift";var O5R="call";var K5R="slice";var A5R="pl";var m5R="multiReturn";var W5R="disabled";var X5R="hasClass";var L5R="ts";var F5R="dom";var g5R="models";var J0R='display';var S0R="css";var t0R="non";var C0R="npu";var u0R=null;var M0R='"><span/></div>';var p0R="multiValue";var z0R='</div>';var k0R='">';var x0R="safeId";var a0R=' ';var l0R="_fnSetObjectDataFn";var N0R="_fnGetObjectDataFn";var n0R="valFromData";var b0R="data";var i0R="name";var q0R="id";var P0R="fieldTypes";var K0R="defaults";var A0R="multi";var m0R="8n";var W0R="i1";var L0R="ten";var V0R="in";var F0R="ata";var h0R="oAp";var s0R="Data";var g0R="ta";var t2R="<div";var G2R="per";var C2R="wra";var c2R="fix";var M2R="ame";var U2R="abe";var H2R="la";var o2R="input";var Y2R="\"/";var l2R="nf";var j2R="/div>";var N2R="<";var n2R="class=\"";var E2R="<d";var T2R="rr";var q2R="/";var P2R="\"><";var O2R="s=";var K2R="las";var m2R="age";var y2R=">";var V2R="\"";var h2R="el";var s2R="ng";var g2R="oces";var J8R="_typeF";var M8R="ul";var d8R="mul";var H8R="lic";var w8R="ac";var r8R="Field";var p8R=true;var I8R="ct";var z8R="obj";var k8R=false;var o8R="length";var Y8R='object';var Q8R="th";var f8R="eng";var E8R="push";var T8R="each";var i8R='"]';var O8R="Editor";var K8R="_constructor";var W8R='Editor requires DataTables 1.10.7 or newer';var X8R='1.10.7';var L8R="versionCheck";var y8R="dataTable";var F8R='s';var h8R='';var J3h="da";var S3h=" ";var k3h="Time";var Y3h="2";var Q3h="Edit";var f3h="Fiel";var v3h="ls";var a3h="ode";var l3h="m";var j3h="F";var N3h="ults";var n3h="fa";var D3h="xt";var b3h="Fi";var E3h="tings";var T3h="set";var i3h="ld";var B3h="Fie";var q3h="ldType";var P3h="dels";var O3h="tting";var K3h="ions";var A3h="formOpt";var m3h="ubmi";var W3h="se";var X3h="c";var L3h="lu";var y3h="cus";var V3h="fo";var F3h="w";var h3h="ble";var s3h="ataTa";var e3h="rototyp";var g3h="un";var J9h="ackgro";var S9h="ur";var t9h="bl";var G9h="ns";var C9h="to";var c9h="ut";var u9h="clos";var M9h="roy";var R9h="es";var U9h="nable";var d9h="er";var H9h="lds";var Z9h="fie";var w9h="le";var r9h="fil";var p9h="ty";var I9h="type";var z9h="ge";var k9h="messa";var o9h="difi";var Y9h="mo";var x9h="prototyp";var Q9h="totype";var f9h="Se";var v9h="mult";var a9h="otyp";var l9h="ff";var j9h="prototy";var N9h="ototyp";var n9h="rototype";var D9h="rotot";var b9h="tl";var E9h="v";var T9h="pi";var i9h="w.create()";var B9h="rows().delete";var q9h="ile()";var P9h="f";var O9h="()";var K9h="files";var A9h="xhr";var m9h="feI";var W9h="ad";var X9h="uplo";var L9h="ss";var y9h="nCla";var V9h="ctio";var F9h="ja";var h9h="_a";var s9h="proto";var e9h="ain";var g9h="embleM";var J7h="_as";var S7h="rDynamicInf";var t7h="_clea";var G7h="typ";var C7h="oto";var c7h="_e";var u7h="ames";var M7h="_fieldN";var R7h="tot";var U7h="ro";var d7h="yp";var H7h="protot";var Z7h="egacyAjax";var w7h="_";var r7h="nsUpdate";var p7h="io";var I7h="pt";var z7h="_o";var k7h="rot";var o7h="g";var Y7h="_mess";var x7h="Info";var Q7h="ulti";var f7h="_m";var v7h="pen";var a7h="_preo";var l7h="ototype";var j7h="totyp";var N7h="oty";var n7h="ces";var D7h="tSuc";var b7h="_submi";var E7h="pe";var T7h="ototy";var i7h="p";var B7h="rro";var q7h="_submitE";var P7h="idy";var O7h="_t";var K7h="otot";var A7h="pr";var m7h="InArray";var W7h="k";var X7h="_we";var L7h="box";var y7h="ht";var V7h="lig";var F7h="wId";var h7h="T_Ro";var s7h="ew";var e7h="ew entry";var g7h="Create n";var J6h="reat";var S6h="C";var t6h="dit";var G6h="try";var C6h="dit en";var c6h="te";var u6h="a";var M6h="Up";var R6h="let";var U6h="alues";var d6h="tiple v";var H6h="Mu";var Z6h="us";var w6h="vio";var r6h="Pre";var p6h="x";var I6h="N";var z6h="ary";var k6h="an";var o6h="J";var Y6h="Apr";var x6h="y";var Q6h="Jul";var f6h="Augus";var v6h="Mo";var a6h="ue";var l6h="W";var j6h="u";var N6h="h";var n6h="T";var D6h="at";var b6h="S";var E6h="sic";var T6h="_ba";var i6h="nged";var B6h="cha";var q6h="nd";var P6h="ext";var O6h="ader";var K6h="DTE_He";var A6h="E_Body";var m6h="_Content";var W6h="DTE_Body";var X6h="oter";var L6h="TE_Fo";var y6h="orm";var V6h="TE_F";var F6h="D";var h6h="r";var s6h="Erro";var e6h="DTE_Form_";var g6h="tons";var J1h="E_Form_Bu";var S1h="b";var t1h="DTE_Fiel";var G1h="ld_Type_";var C1h="E_Field_Name_";var c1h="abel_Info";var u1h="DTE_L";var M1h="eld_Info";var R1h="DTE_Fi";var U1h="l";var d1h="disab";var H1h="ate";var Z1h="re";var w1h="_Action_C";var r1h="on_Edit";var p1h="ti";var I1h="_Ac";var z1h="E_Inline_Field";var k1h="DT";var o1h="_Inline_Buttons";var Y1h="DTE";var x1h="bble_Liner";var Q1h="DTE_Bu";var f1h="Triangle";var v1h="DTE_Bubble_";var a1h="s";var l1h="eldT";var j1h="fi";var N1h="eTime";var n1h="Dat";var D1h="xtend";var b1h="otype";var E1h="prot";var T1h="ance";var i1h="_inst";var B1h="lts";var q1h="fau";var P1h="de";var O1h="i";var K1h="itorFields";var A1h="ed";var m1h="ype";var W1h="ot";var X1h="t";var L1h="pro";var y1h="SS";var V1h="A";var F1h="CL";var h1h="or";var s1h="it";var e1h="d";var g1h="E";var J4h="n";var S4h="rsi";var t4h="ve";var G4h="1";var C4h=".";var c4h="1.8";var a4h=500;var l4h=400;var N4h=100;var n4h=60;var O4h=27;var A4h=24;var W4h=20;var y4h=13;var V4h=12;var F4h=11;var h4h=10;var g4h=7;var J5h=4;var S5h=3;var t5h=2;var G5h=1;var C5h=0;var c5h=c4h;c5h+=C4h;c5h+=G4h;var u5h=t4h;u5h+=S4h;u5h+=E4Y.k4h;u5h+=J4h;var M5h=g1h;M5h+=e1h;M5h+=s1h;M5h+=h1h;var R5h=F1h;R5h+=V1h;R5h+=y1h;var U5h=L1h;U5h+=X1h;U5h+=W1h;U5h+=m1h;var d5h=A1h;d5h+=K1h;var s7m=E4Y.p4h;s7m+=J4h;var e7m=O1h;e7m+=G4h;e7m+=E4Y.r4h;e7m+=J4h;var g7m=P1h;g7m+=q1h;g7m+=B1h;var J6m=i1h;J6m+=T1h;var T2m=E1h;T2m+=b1h;var i2m=E4Y.p4h;i2m+=D1h;var W8m=n1h;W8m+=N1h;var X8m=j1h;X8m+=l1h;X8m+=m1h;X8m+=a1h;var O9I=v1h;O9I+=f1h;var K9I=Q1h;K9I+=x1h;var A9I=Y1h;A9I+=o1h;var m9I=k1h;m9I+=z1h;var W9I=Y1h;W9I+=I1h;W9I+=p1h;W9I+=r1h;var X9I=Y1h;X9I+=w1h;X9I+=Z1h;X9I+=H1h;var L9I=d1h;L9I+=U1h;L9I+=E4Y.p4h;L9I+=e1h;var y9I=R1h;y9I+=M1h;var V9I=u1h;V9I+=c1h;var F9I=k1h;F9I+=C1h;var h9I=R1h;h9I+=E4Y.p4h;h9I+=G1h;var s9I=t1h;s9I+=e1h;var e9I=S1h;e9I+=X1h;e9I+=J4h;var g9I=k1h;g9I+=J1h;g9I+=X1h;g9I+=g6h;var J7I=e6h;J7I+=s6h;J7I+=h6h;var S7I=F6h;S7I+=V6h;S7I+=y6h;var t7I=F6h;t7I+=L6h;t7I+=X6h;var G7I=W6h;G7I+=m6h;var C7I=k1h;C7I+=A6h;var c7I=K6h;c7I+=O6h;var u7I=k1h;u7I+=g1h;var T1I=P6h;T1I+=E4Y.p4h;T1I+=q6h;var i1I=B6h;i1I+=i6h;var B1I=T6h;B1I+=E6h;var q1I=b6h;q1I+=D6h;var P1I=n6h;P1I+=N6h;P1I+=j6h;var O1I=l6h;O1I+=E4Y.p4h;O1I+=e1h;var K1I=n6h;K1I+=a6h;var A1I=v6h;A1I+=J4h;var m1I=b6h;m1I+=j6h;m1I+=J4h;var W1I=f6h;W1I+=X1h;var X1I=Q6h;X1I+=x6h;var L1I=Y6h;L1I+=O1h;L1I+=U1h;var y1I=o6h;y1I+=k6h;y1I+=j6h;y1I+=z6h;var V1I=I6h;V1I+=E4Y.p4h;V1I+=p6h;V1I+=X1h;var F1I=r6h;F1I+=w6h;F1I+=Z6h;var h1I=H6h;h1I+=U1h;h1I+=d6h;h1I+=U6h;var s1I=F6h;s1I+=E4Y.p4h;s1I+=R6h;s1I+=E4Y.p4h;var e1I=M6h;e1I+=e1h;e1I+=u6h;e1I+=c6h;var g1I=g1h;g1I+=C6h;g1I+=G6h;var J4I=g1h;J4I+=t6h;var S4I=S6h;S4I+=J6h;S4I+=E4Y.p4h;var t4I=g7h;t4I+=e7h;var G4I=I6h;G4I+=s7h;var C4I=F6h;C4I+=h7h;C4I+=F7h;var c4I=V7h;c4I+=y7h;c4I+=L7h;var u4I=X7h;u4I+=u6h;u4I+=W7h;u4I+=m7h;var M4I=A7h;M4I+=K7h;M4I+=m1h;var I4I=O7h;I4I+=P7h;var Y4I=q7h;Y4I+=B7h;Y4I+=h6h;var x4I=i7h;x4I+=h6h;x4I+=T7h;x4I+=E7h;var j5I=b7h;j5I+=D7h;j5I+=n7h;j5I+=a1h;var N5I=E1h;N5I+=N7h;N5I+=E7h;var F5I=A7h;F5I+=E4Y.k4h;F5I+=j7h;F5I+=E4Y.p4h;var N0I=i7h;N0I+=h6h;N0I+=l7h;var q0I=a7h;q0I+=v7h;var P0I=E1h;P0I+=N7h;P0I+=E7h;var e0I=L1h;e0I+=j7h;e0I+=E4Y.p4h;var t2I=f7h;t2I+=Q7h;t2I+=x7h;var G2I=i7h;G2I+=h6h;G2I+=W1h;G2I+=b1h;var I2I=Y7h;I2I+=u6h;I2I+=o7h;I2I+=E4Y.p4h;var z2I=i7h;z2I+=k7h;z2I+=W1h;z2I+=m1h;var f2I=z7h;f2I+=I7h;f2I+=p7h;f2I+=r7h;var v2I=A7h;v2I+=W1h;v2I+=b1h;var B2I=w7h;B2I+=U1h;B2I+=Z7h;var b8I=H7h;b8I+=d7h;b8I+=E4Y.p4h;var P8I=i7h;P8I+=U7h;P8I+=R7h;P8I+=m1h;var A8I=M7h;A8I+=u7h;var B3K=c7h;B3K+=t6h;var q3K=A7h;q3K+=C7h;q3K+=G7h;q3K+=E4Y.p4h;var d9K=E1h;d9K+=N7h;d9K+=i7h;d9K+=E4Y.p4h;var D9K=t7h;D9K+=S7h;D9K+=E4Y.k4h;var L9K=J7h;L9K+=a1h;L9K+=g9h;L9K+=e9h;var y9K=L1h;y9K+=X1h;y9K+=b1h;var s9K=s9h;s9K+=G7h;s9K+=E4Y.p4h;var i7K=h9h;i7K+=F9h;i7K+=p6h;var y7K=h9h;y7K+=V9h;y7K+=y9h;y7K+=L9h;var V7K=A7h;V7K+=E4Y.k4h;V7K+=R7h;V7K+=m1h;var k4K=X9h;k4K+=W9h;var Y4K=a1h;Y4K+=u6h;Y4K+=m9h;Y4K+=e1h;var j4K=A9h;j4K+=C4h;j4K+=e1h;j4K+=X1h;var N4K=K9h;N4K+=O9h;var n4K=P9h;n4K+=q9h;var b4K=B9h;b4K+=O9h;var P4K=U7h;P4K+=i9h;var y4K=V1h;y4K+=T9h;var h4K=E9h;h4K+=u6h;h4K+=U1h;var c5K=X1h;c5K+=O1h;c5K+=b9h;c5K+=E4Y.p4h;var u5K=i7h;u5K+=D9h;u5K+=d7h;u5K+=E4Y.p4h;var Z5K=L1h;Z5K+=j7h;Z5K+=E4Y.p4h;var z5K=i7h;z5K+=n9h;var x5K=A7h;x5K+=N9h;x5K+=E4Y.p4h;var M0K=j9h;M0K+=E7h;var U0K=E1h;U0K+=W1h;U0K+=x6h;U0K+=E7h;var H0K=E4Y.k4h;H0K+=l9h;var p0K=J4h;p0K+=E4Y.k4h;p0K+=e1h;p0K+=E4Y.p4h;var I0K=A7h;I0K+=W1h;I0K+=a9h;I0K+=E4Y.p4h;var Y0K=v9h;Y0K+=O1h;Y0K+=f9h;Y0K+=X1h;var x0K=A7h;x0K+=E4Y.k4h;x0K+=Q9h;var a0K=x9h;a0K+=E4Y.p4h;var l0K=Y9h;l0K+=o9h;l0K+=E4Y.p4h;l0K+=h6h;var n0K=L1h;n0K+=R7h;n0K+=m1h;var i0K=k9h;i0K+=z9h;var B0K=s9h;B0K+=X1h;B0K+=x6h;B0K+=E7h;var q2K=i7h;q2K+=k7h;q2K+=E4Y.k4h;q2K+=I9h;var A2K=s9h;A2K+=X1h;A2K+=x6h;A2K+=E7h;var W2K=O1h;W2K+=e1h;W2K+=a1h;var X2K=s9h;X2K+=p9h;X2K+=E7h;var y2K=N6h;y2K+=O1h;y2K+=P1h;var e2K=i7h;e2K+=U7h;e2K+=X1h;e2K+=b1h;var g2K=r9h;g2K+=E4Y.p4h;g2K+=a1h;var J8K=j9h;J8K+=E7h;var S8K=j1h;S8K+=w9h;var t8K=A7h;t8K+=l7h;var C8K=Z9h;C8K+=H9h;var c8K=A7h;c8K+=l7h;var U8K=d9h;U8K+=h6h;U8K+=h1h;var Z8K=E4Y.p4h;Z8K+=U9h;var Y8K=x9h;Y8K+=E4Y.p4h;var x8K=i7h;x8K+=h6h;x8K+=K7h;x8K+=m1h;var v8K=A7h;v8K+=W1h;v8K+=W1h;v8K+=m1h;var q8K=e1h;q8K+=R9h;q8K+=X1h;q8K+=M9h;var P8K=A7h;P8K+=C7h;P8K+=G7h;P8K+=E4Y.p4h;var j3N=H7h;j3N+=d7h;j3N+=E4Y.p4h;var N3N=u9h;N3N+=E4Y.p4h;var n3N=L1h;n3N+=R7h;n3N+=x6h;n3N+=E7h;var u9N=S1h;u9N+=c9h;u9N+=C9h;u9N+=G9h;var M9N=A7h;M9N+=K7h;M9N+=d7h;M9N+=E4Y.p4h;var a7N=s9h;a7N+=I9h;var j7N=t9h;j7N+=S9h;var N7N=A7h;N7N+=l7h;var T7N=S1h;T7N+=J9h;T7N+=g3h;T7N+=e1h;var i7N=i7h;i7N+=e3h;i7N+=E4Y.p4h;var S6N=u6h;S6N+=e1h;S6N+=e1h;var t6N=e1h;t6N+=s3h;t6N+=h3h;var o4N=P9h;o4N+=J4h;var e5N=h6h;e5N+=E4Y.k4h;e5N+=F3h;var g5N=V3h;g5N+=y3h;var J0N=u9h;J0N+=E4Y.p4h;var S0N=S1h;S0N+=L3h;S0N+=h6h;var t0N=X3h;t0N+=U1h;t0N+=E4Y.k4h;t0N+=W3h;var G0N=a1h;G0N+=m3h;G0N+=X1h;var C0N=A3h;C0N+=K3h;var c0N=W3h;c0N+=O3h;c0N+=a1h;var u0N=Y9h;u0N+=P3h;var M0N=P9h;M0N+=O1h;M0N+=E4Y.p4h;M0N+=q3h;var R0N=Y9h;R0N+=P3h;var U0N=B3h;U0N+=i3h;var d0N=T3h;d0N+=E3h;var H0N=b3h;H0N+=E4Y.p4h;H0N+=U1h;H0N+=e1h;var Z0N=X1h;Z0N+=E4Y.p4h;Z0N+=D3h;var w0N=P1h;w0N+=n3h;w0N+=N3h;var r0N=j3h;r0N+=O1h;r0N+=E4Y.p4h;r0N+=i3h;var p0N=l3h;p0N+=a3h;p0N+=v3h;var I0N=f3h;I0N+=e1h;var A8N=s9h;A8N+=p9h;A8N+=i7h;A8N+=E4Y.p4h;var a9=F6h;a9+=s3h;a9+=h3h;var l9=P9h;l9+=J4h;var j9=Q3h;j9+=h1h;var n9=P9h;n9+=J4h;'use strict';E4Y.F9=function(h9){if(E4Y)return E4Y.F2(h9);};E4Y.v7=function(a7){if(E4Y&&a7)return E4Y.F2(a7);};E4Y.i1=function(B1){if(E4Y&&B1)return E4Y.F2(B1);};E4Y.d4=function(H4){if(E4Y&&H4)return E4Y.h2(H4);};E4Y.q4=function(P4){if(E4Y)return E4Y.F2(P4);};E4Y.A5=function(m5){if(E4Y&&m5)return E4Y.h2(m5);};(function(){var V8R=' remaining';var s8R='DataTables Editor trial info - ';var e8R="46";var g8R="7d";var t3h='for Editor, please see https://editor.datatables.net/purchase';var G3h="Tables Editor\n\n";var C3h="Thank you for trying Data";var c3h="rchase a license ";var u3h="Your trial has now expired. To pu";var M3h="89";var R3h="77";var U3h=" Trial expired";var d3h="itor -";var H3h="Ed";var Z3h="getTime";var w3h="fbb8";var r3h="b1af";var p3h=7460924340;var I3h="a9eb";var z3h="6";var o3h="7";var x3h="5";var o4h=1547942400;var x4h=8049;var Q4h=1000;var e4h=8;var T9=E4Y.Z4h;T9+=S1h;T9+=x3h;T9+=P9h;var A9=Y3h;A9+=o3h;A9+=e1h;A9+=x3h;var m9=o7h;m9+=E4Y.p4h;m9+=X1h;m9+=k3h;var W9=X3h;W9+=E4Y.p4h;W9+=O1h;W9+=U1h;var X9=u6h;X9+=X3h;X9+=z3h;X9+=S1h;E4Y.J6=function(S6){if(E4Y&&S6)return E4Y.F2(S6);};E4Y.n6=function(D6){if(E4Y&&D6)return E4Y.h2(D6);};E4Y.c1=function(u1){if(E4Y)return E4Y.h2(u1);};E4Y.Z5=function(w5){if(E4Y)return E4Y.F2(w5);};var remaining=Math[E4Y.A5(X9)?W9:E4Y.R4h]((new Date((E4Y.Z5(I3h)?p3h:o4h)*(E4Y.q4(r3h)?Q4h:x4h))[E4Y.d4(w3h)?m9:E4Y.R4h]()-new Date()[Z3h]())/(Q4h*n4h*(E4Y.i1(A9)?n4h:e4h)*A4h));if(remaining<=C5h){var i9=H3h;i9+=d3h;i9+=U3h;var B9=R3h;B9+=M3h;var q9=u3h;q9+=c3h;var P9=e1h;P9+=P9h;P9+=Y3h;P9+=E4Y.r4h;var O9=C3h;O9+=G3h;var K9=P9h;K9+=E4Y.w4h;K9+=o3h;K9+=S1h;alert((E4Y.c1(K9)?E4Y.R4h:O9)+(E4Y.n6(P9)?E4Y.R4h:q9)+t3h);throw E4Y.J6(B9)?i9:E4Y.R4h;}else if(remaining<=(E4Y.v7(T9)?t5h:g4h)){var D9=S3h;D9+=J3h;D9+=x6h;var b9=U1h;b9+=E4Y.k4h;b9+=o7h;var E9=g8R;E9+=e8R;console[E4Y.F9(E9)?E4Y.R4h:b9](s8R+remaining+D9+(remaining===G5h?h8R:F8R)+V8R);}}());var DataTable=$[n9][y8R];if(!DataTable||!DataTable[L8R]||!DataTable[L8R](X8R)){throw W8R;}var Editor=function(opts){var A8R="initialised as a 'new' instance'";var m8R="DataTables Editor must be ";if(!(this instanceof Editor)){var N9=m8R;N9+=A8R;alert(N9);}this[K8R](opts);};DataTable[j9]=Editor;$[l9][a9][O8R]=Editor;var _editor_el=function(dis,ctx){var B8R="e=\"";var q8R="te-";var P8R="*[data-d";var v9=P8R;v9+=q8R;v9+=B8R;if(ctx===undefined){ctx=document;}return $(v9+dis+i8R,ctx);};var __inlineCounter=C5h;var _pluck=function(a,prop){var out=[];$[T8R](a,function(idx,el){out[E8R](el[prop]);});return out;};var _api_file=function(name,id){var N8R=' in table ';var n8R="d ";var D8R="file i";var b8R="Unknown ";var table=this[K9h](name);var file=table[id];if(!file){var f9=b8R;f9+=D8R;f9+=n8R;throw f9+id+N8R+name;}return table[id];};var _api_files=function(name){var a8R="me: ";var l8R="Unknown file table na";var j8R="les";if(!name){var Q9=j1h;Q9+=j8R;return Editor[Q9];}var table=Editor[K9h][name];if(!table){var x9=l8R;x9+=a8R;throw x9+name;}return table;};var _objectKeys=function(o){var v8R="hasOwnProperty";var out=[];for(var key in o){if(o[v8R](key)){out[E8R](key);}}return out;};var _deepCompare=function(o1,o2){var x8R="jec";var o9=U1h;o9+=f8R;o9+=Q8R;var Y9=E4Y.k4h;Y9+=S1h;Y9+=x8R;Y9+=X1h;if(typeof o1!==Y8R||typeof o2!==Y9){return o1==o2;}var o1Props=_objectKeys(o1);var o2Props=_objectKeys(o2);if(o1Props[o9]!==o2Props[o8R]){return k8R;}for(var i=C5h,ien=o1Props[o8R];i<ien;i++){var k9=z8R;k9+=E4Y.p4h;k9+=I8R;var propName=o1Props[i];if(typeof o1[propName]===k9){if(!_deepCompare(o1[propName],o2[propName])){return k8R;}}else if(o1[propName]!=o2[propName]){return k8R;}}return p8R;};Editor[r8R]=function(opts,classes,host){var h5R='multi-info';var s5R='label';var e5R='input-control';var G0R="t-contro";var c0R="epend";var R0R='<div data-dte-e="field-processing" class="';var U0R='msg-info';var d0R='msg-message';var H0R="restore";var Z0R="multiRestore";var w0R='<div data-dte-e="msg-multi" class="';var r0R='</span>';var I0R='<div data-dte-e="multi-value" class="';var o0R='msg-label';var Y0R='<div data-dte-e="msg-label" class="';var Q0R='" for="';var f0R='<label data-dte-e="label" class="';var v0R="typePrefix";var D0R="nam";var E0R="dataPro";var T0R="dataProp";var B0R="d_";var O0R="Error adding field - unknown field type ";var X0R="eldTyp";var y0R="gs";var e0R="alTo";var J2R="ass=";var S2R=" cl";var u2R="ameP";var R2R="classN";var d2R="be";var Z2R="el>";var w2R="</lab";var r2R="<div data-dte-e=\"input\" class=";var p2R="ut-control";var I2R="<div data-dte-e=\"inp";var z2R="ntro";var k2R="Co";var x2R="\" class=\"";var Q2R="e-e=\"multi-info";var f2R="-dt";var v2R="<span data";var a2R="ultiInfo";var D2R="msg-error\" ";var b2R="iv data-dte-e=\"";var i2R="msg-";var B2R="div>";var A2R="<div data-dte-e=\"msg-message\" c";var W2R="nfo\" class=\"";var X2R="a-dte-e=\"msg-i";var L2R="<div dat";var F2R="dIn";var e2R="si";var S8R="crea";var t8R="-label";var G8R="msg";var C8R="g-e";var c8R="ms";var u8R="-valu";var R8R="sg-m";var U8R="field-processi";var Z8R="ick";var X8N=X1h;X8N+=x6h;X8N+=i7h;X8N+=E4Y.p4h;var L8N=E4Y.p4h;L8N+=w8R;L8N+=N6h;var y8N=X3h;y8N+=U1h;y8N+=Z8R;var V8N=E4Y.k4h;V8N+=J4h;var S3=X3h;S3+=H8R;S3+=W7h;var t3=E4Y.k4h;t3+=J4h;var G3=d8R;G3+=X1h;G3+=O1h;var C3=U8R;C3+=J4h;C3+=o7h;var c3=l3h;c3+=R8R;c3+=M8R;c3+=p1h;var u3=l3h;u3+=Q7h;u3+=u8R;u3+=E4Y.p4h;var M3=c8R;M3+=C8R;M3+=B7h;M3+=h6h;var R3=G8R;R3+=t8R;var U3=e1h;U3+=E4Y.k4h;U3+=l3h;var d3=B3h;d3+=U1h;d3+=e1h;var H3=E4Y.p4h;H3+=D3h;H3+=E4Y.p4h;H3+=q6h;var Z3=e1h;Z3+=E4Y.k4h;Z3+=l3h;var I3=S8R;I3+=X1h;I3+=E4Y.p4h;var z3=J8R;z3+=J4h;var k3=A7h;k3+=g2R;k3+=e2R;k3+=s2R;var o3=j1h;o3+=h2R;o3+=F2R;o3+=V3h;var Y3=V2R;Y3+=y2R;var x3=L2R;x3+=X2R;x3+=W2R;var Q3=l3h;Q3+=E4Y.p4h;Q3+=L9h;Q3+=m2R;var f3=A2R;f3+=K2R;f3+=O2R;f3+=V2R;var v3=P2R;v3+=q2R;v3+=B2R;var a3=i2R;a3+=E4Y.p4h;a3+=T2R;a3+=h1h;var l3=E2R;l3+=b2R;l3+=D2R;l3+=n2R;var j3=V2R;j3+=y2R;var N3=N2R;N3+=j2R;var n3=O1h;n3+=l2R;n3+=E4Y.k4h;var D3=V2R;D3+=y2R;var b3=l3h;b3+=a2R;var E3=v2R;E3+=f2R;E3+=Q2R;E3+=x2R;var T3=p1h;T3+=X1h;T3+=w9h;var i3=V2R;i3+=y2R;var B3=Y2R;B3+=y2R;var q3=o2R;q3+=k2R;q3+=z2R;q3+=U1h;var P3=I2R;P3+=p2R;P3+=x2R;var O3=V2R;O3+=y2R;var K3=O1h;K3+=J4h;K3+=i7h;K3+=c9h;var A3=r2R;A3+=V2R;var m3=w2R;m3+=Z2R;var W3=H2R;W3+=d2R;W3+=U1h;W3+=x7h;var X3=U1h;X3+=u6h;X3+=S1h;X3+=h2R;var L3=V2R;L3+=y2R;var y3=O1h;y3+=e1h;var V3=U1h;V3+=U2R;V3+=U1h;var F3=V2R;F3+=y2R;var h3=R2R;h3+=M2R;var s3=J4h;s3+=u6h;s3+=l3h;s3+=E4Y.p4h;var e3=J4h;e3+=u2R;e3+=Z1h;e3+=c2R;var g3=X1h;g3+=d7h;g3+=E4Y.p4h;var J9=C2R;J9+=i7h;J9+=G2R;var S9=t2R;S9+=S2R;S9+=J2R;S9+=V2R;var t9=J3h;t9+=g0R;var G9=E9h;G9+=e0R;G9+=s0R;var c9=h0R;c9+=O1h;var u9=E4Y.p4h;u9+=p6h;u9+=X1h;var R9=e1h;R9+=F0R;var H9=J4h;H9+=u6h;H9+=l3h;H9+=E4Y.p4h;var Z9=T3h;Z9+=X1h;Z9+=V0R;Z9+=y0R;var w9=E4Y.p4h;w9+=p6h;w9+=L0R;w9+=e1h;var r9=X1h;r9+=x6h;r9+=i7h;r9+=E4Y.p4h;var p9=j1h;p9+=X0R;p9+=R9h;var I9=E4Y.p4h;I9+=p6h;I9+=L0R;I9+=e1h;var z9=W0R;z9+=m0R;var that=this;var multiI18n=host[z9][A0R];opts=$[I9](p8R,{},Editor[r8R][K0R],opts);if(!Editor[p9][opts[r9]]){throw O0R+opts[I9h];}this[a1h]=$[w9]({},Editor[r8R][Z9],{type:Editor[P0R][opts[I9h]],name:opts[H9],classes:classes,host:host,opts:opts,multiValue:k8R});if(!opts[q0R]){var d9=Y1h;d9+=w7h;d9+=f3h;d9+=B0R;opts[q0R]=d9+opts[i0R];}if(opts[T0R]){var U9=E0R;U9+=i7h;opts[b0R]=opts[U9];}if(opts[R9]===h8R){var M9=D0R;M9+=E4Y.p4h;opts[b0R]=opts[M9];}var dtPrivateApi=DataTable[u9][c9];this[n0R]=function(d){var j0R='editor';var C9=J3h;C9+=g0R;return dtPrivateApi[N0R](opts[C9])(d,j0R);};this[G9]=dtPrivateApi[l0R](opts[t9]);var template=$(S9+classes[J9]+a0R+classes[v0R]+opts[g3]+a0R+classes[e3]+opts[s3]+a0R+opts[h3]+F3+f0R+classes[V3]+Q0R+Editor[x0R](opts[y3])+L3+opts[X3]+Y0R+classes[o0R]+k0R+opts[W3]+z0R+m3+A3+classes[K3]+O3+P3+classes[q3]+B3+I0R+classes[p0R]+i3+multiI18n[T3]+E3+classes[b3]+D3+multiI18n[n3]+r0R+N3+w0R+classes[Z0R]+j3+multiI18n[H0R]+z0R+l3+classes[a3]+v3+f3+classes[d0R]+k0R+opts[Q3]+z0R+x3+classes[U0R]+Y3+opts[o3]+z0R+z0R+R0R+classes[k3]+M0R+z0R);var input=this[z3](I3,opts);if(input!==u0R){var r3=i7h;r3+=h6h;r3+=c0R;var p3=O1h;p3+=C0R;p3+=G0R;p3+=U1h;_editor_el(p3,template)[r3](input);}else{var w3=t0R;w3+=E4Y.p4h;template[S0R](J0R,w3);}this[Z3]=$[H3](p8R,{},Editor[d3][g5R][U3],{container:template,inputControl:_editor_el(e5R,template),label:_editor_el(s5R,template),fieldInfo:_editor_el(U0R,template),labelInfo:_editor_el(R3,template),fieldError:_editor_el(M3,template),fieldMessage:_editor_el(d0R,template),multi:_editor_el(u3,template),multiReturn:_editor_el(c3,template),multiInfo:_editor_el(h5R,template),processing:_editor_el(C3,template)});this[F5R][G3][t3](S3,function(){var y5R="tiEdita";var V5R="readonl";var s8N=V5R;s8N+=x6h;var e8N=G7h;e8N+=E4Y.p4h;var g8N=l3h;g8N+=M8R;g8N+=y5R;g8N+=h3h;var J3=E4Y.k4h;J3+=i7h;J3+=L5R;if(that[a1h][J3][g8N]&&!template[X5R](classes[W5R])&&opts[e8N]!==s8N){var F8N=P9h;F8N+=E4Y.k4h;F8N+=y3h;var h8N=E9h;h8N+=u6h;h8N+=U1h;that[h8N](h8R);that[F8N]();}});this[F5R][m5R][V8N](y8N,function(){that[Z0R]();});$[L8N](this[a1h][X8N],function(name,fn){if(typeof fn===E4Y.U4h&&that[name]===undefined){that[name]=function(){var m8N=u6h;m8N+=i7h;m8N+=A5R;m8N+=x6h;var W8N=E1h;W8N+=E4Y.k4h;W8N+=X1h;W8N+=m1h;var args=Array[W8N][K5R][O5R](arguments);args[P5R](name);var ret=that[q5R][m8N](that,args);return ret===undefined?that:ret;};}});};Editor[r8R][A8N]={def:function(set){var i5R="efa";var B5R="defaul";var K8N=E4Y.k4h;K8N+=i7h;K8N+=X1h;K8N+=a1h;var opts=this[a1h][K8N];if(set===undefined){var P8N=B5R;P8N+=X1h;var O8N=e1h;O8N+=i5R;O8N+=T5R;var def=opts[O8N]!==undefined?opts[P8N]:opts[E5R];return typeof def===E4Y.U4h?def():def;}opts[E5R]=set;return this;},disable:function(){var i8N=J8R;i8N+=J4h;var B8N=e1h;B8N+=b5R;var q8N=D5R;q8N+=a1h;q8N+=W3h;q8N+=a1h;this[F5R][n5R][N5R](this[a1h][q8N][B8N]);this[i8N](j5R);return this;},displayed:function(){var v5R="arents";var D8N=J4h;D8N+=l5R;D8N+=E4Y.p4h;var b8N=U1h;b8N+=a5R;b8N+=N6h;var E8N=i7h;E8N+=v5R;var T8N=e1h;T8N+=E4Y.k4h;T8N+=l3h;var container=this[T8N][n5R];return container[E8N](f5R)[b8N]&&container[S0R](J0R)!=D8N?p8R:k8R;},enable:function(){var k5R="ont";var o5R="eClass";var a8N=Q5R;a8N+=x5R;a8N+=w9h;a8N+=e1h;var l8N=D5R;l8N+=L9h;l8N+=E4Y.p4h;l8N+=a1h;var j8N=Y5R;j8N+=o5R;var N8N=X3h;N8N+=k5R;N8N+=z5R;var n8N=e1h;n8N+=E4Y.k4h;n8N+=l3h;this[n8N][N8N][j8N](this[a1h][l8N][a8N]);this[q5R](I5R);return this;},enabled:function(){var Z5R="nta";var r5R="sabled";var Q8N=p5R;Q8N+=r5R;var f8N=w5R;f8N+=Z5R;f8N+=H5R;var v8N=e1h;v8N+=E4Y.k4h;v8N+=l3h;return this[v8N][f8N][X5R](this[a1h][d5R][Q8N])===k8R;},error:function(msg,fn){var t5R='errorMessage';var c5R="emoveCla";var u5R="tainer";var r8N=P9h;r8N+=O1h;r8N+=U5R;r8N+=R5R;var p8N=w7h;p8N+=I9h;p8N+=j3h;p8N+=J4h;var classes=this[a1h][d5R];if(msg){var o8N=E4Y.p4h;o8N+=T2R;o8N+=h1h;var Y8N=M5R;Y8N+=u5R;var x8N=e1h;x8N+=E4Y.k4h;x8N+=l3h;this[x8N][Y8N][N5R](classes[o8N]);}else{var I8N=h6h;I8N+=c5R;I8N+=L9h;var z8N=X3h;z8N+=C5R;z8N+=d9h;var k8N=e1h;k8N+=E4Y.k4h;k8N+=l3h;this[k8N][z8N][I8N](classes[G5R]);}this[p8N](t5R,msg);return this[S5R](this[F5R][r8N],msg,fn);},fieldInfo:function(msg){var J5R="fieldInfo";var w8N=e1h;w8N+=E4Y.k4h;w8N+=l3h;return this[S5R](this[w8N][J5R],msg);},isMultiValue:function(){var g4R="multiV";var H8N=U1h;H8N+=a5R;H8N+=N6h;var Z8N=g4R;Z8N+=u6h;Z8N+=e4R;return this[a1h][Z8N]&&this[a1h][s4R][H8N]!==G5h;},inError:function(){var V4R="sClas";var M8N=E4Y.p4h;M8N+=h6h;M8N+=h4R;var R8N=X3h;R8N+=H2R;R8N+=L9h;R8N+=R9h;var U8N=F4R;U8N+=V4R;U8N+=a1h;var d8N=y4R;d8N+=e9h;d8N+=E4Y.p4h;d8N+=h6h;return this[F5R][d8N][U8N](this[a1h][R8N][M8N]);},input:function(){var W4R='input, select, textarea';var c8N=y4R;c8N+=z5R;var u8N=w7h;u8N+=G7h;u8N+=L4R;u8N+=J4h;return this[a1h][I9h][o2R]?this[u8N](X4R):$(W4R,this[F5R][c8N]);},focus:function(){var B4R="area";var q4R=" select, text";var P4R="put,";var K4R="conta";var A4R='focus';var C8N=p9h;C8N+=i7h;C8N+=E4Y.p4h;if(this[a1h][C8N][m4R]){this[q5R](A4R);}else{var S8N=K4R;S8N+=O1h;S8N+=J4h;S8N+=d9h;var t8N=O4R;t8N+=l3h;var G8N=V0R;G8N+=P4R;G8N+=q4R;G8N+=B4R;$(G8N,this[t8N][S8N])[m4R]();}return this;},get:function(){var T4R="isMu";var e2N=e1h;e2N+=E4Y.p4h;e2N+=P9h;var g2N=o7h;g2N+=i4R;var J8N=T4R;J8N+=E4R;if(this[J8N]()){return undefined;}var val=this[q5R](g2N);return val!==undefined?val:this[e2N]();},hide:function(animate){var j4R="lideU";var b4R="sl";var h2N=b4R;h2N+=O1h;h2N+=P1h;h2N+=M6h;var s2N=e1h;s2N+=E4Y.k4h;s2N+=l3h;var el=this[s2N][n5R];if(animate===undefined){animate=p8R;}if(this[a1h][D4R][n4R]()&&animate&&$[N4R][h2N]){var F2N=a1h;F2N+=j4R;F2N+=i7h;el[F2N]();}else{var V2N=J4h;V2N+=E4Y.k4h;V2N+=J4h;V2N+=E4Y.p4h;el[S0R](J0R,V2N);}return this;},label:function(str){var f4R="labelInfo";var A2N=u6h;A2N+=l4R;A2N+=e1h;var m2N=N6h;m2N+=X1h;m2N+=l3h;m2N+=U1h;var X2N=e1h;X2N+=E4Y.p4h;X2N+=g0R;X2N+=a4R;var L2N=H2R;L2N+=v4R;var y2N=e1h;y2N+=E4Y.k4h;y2N+=l3h;var label=this[y2N][L2N];var labelInfo=this[F5R][f4R][X2N]();if(str===undefined){var W2N=N6h;W2N+=X1h;W2N+=l3h;W2N+=U1h;return label[W2N]();}label[m2N](str);label[A2N](labelInfo);return this;},labelInfo:function(msg){var Q4R="labelIn";var K2N=Q4R;K2N+=V3h;return this[S5R](this[F5R][K2N],msg);},message:function(msg,fn){var Y4R="fieldMessage";var x4R="sg";var O2N=w7h;O2N+=l3h;O2N+=x4R;return this[O2N](this[F5R][Y4R],msg,fn);},multiGet:function(id){var P2N=v9h;P2N+=o4R;var value;var multiValues=this[a1h][k4R];var multiIds=this[a1h][P2N];if(id===undefined){value={};for(var i=C5h;i<multiIds[o8R];i++){var q2N=E9h;q2N+=u6h;q2N+=U1h;value[multiIds[i]]=this[z4R]()?multiValues[multiIds[i]]:this[q2N]();}}else if(this[z4R]()){value=multiValues[id];}else{value=this[I4R]();}return value;},multiRestore:function(){var w4R="ultiValue";var p4R="_multiValueC";var i2N=p4R;i2N+=r4R;var B2N=l3h;B2N+=w4R;this[a1h][B2N]=p8R;this[i2N]();},multiSet:function(id,val){var H4R="Che";var Z4R="_multiValue";var b2N=Z4R;b2N+=H4R;b2N+=d4R;var E2N=l3h;E2N+=j6h;E2N+=E4R;var multiValues=this[a1h][k4R];var multiIds=this[a1h][s4R];if(val===undefined){val=id;id=undefined;}var set=function(idSrc,val){if($[U4R](multiIds)===-G5h){var T2N=R4R;T2N+=M4R;multiIds[T2N](idSrc);}multiValues[idSrc]=val;};if($[u4R](val)&&id===undefined){$[T8R](val,function(idSrc,innerVal){set(idSrc,innerVal);});}else if(id===undefined){$[T8R](multiIds,function(i,idSrc){set(idSrc,val);});}else{set(id,val);}this[a1h][E2N]=p8R;this[b2N]();return this;},name:function(){var n2N=c4R;n2N+=C4R;var D2N=E4Y.k4h;D2N+=I7h;D2N+=a1h;return this[a1h][D2N][n2N];},node:function(){var j2N=y4R;j2N+=u6h;j2N+=H5R;var N2N=e1h;N2N+=E4Y.k4h;N2N+=l3h;return this[N2N][j2N][C5h];},processing:function(set){var l2N=Q5R;l2N+=A5R;l2N+=u6h;l2N+=x6h;this[F5R][G4R][S0R](l2N,set?t4R:S4R);return this;},set:function(val,multiCheck){var N1R="ueC";var n1R="_multiVal";var D1R='set';var h1R="alue";var s1R="V";var e1R="tityDec";var J4R="peF";var I2N=O7h;I2N+=x6h;I2N+=J4R;I2N+=J4h;var k2N=g1R;k2N+=e1R;k2N+=E4Y.k4h;k2N+=P1h;var o2N=E4Y.k4h;o2N+=i7h;o2N+=L5R;var Y2N=d8R;Y2N+=p1h;Y2N+=s1R;Y2N+=h1R;var decodeFn=function(d){var i1R='\n';var B1R='\'';var q1R='"';var K1R='<';var A1R='>';var F1R="repla";var x2N=F1R;x2N+=X3h;x2N+=E4Y.p4h;var Q2N=h6h;Q2N+=E4Y.p4h;Q2N+=i7h;Q2N+=V1R;var f2N=Z1h;f2N+=i7h;f2N+=U1h;f2N+=y1R;var v2N=L1R;v2N+=V1R;var a2N=h6h;a2N+=X1R;a2N+=u6h;a2N+=W1R;return typeof d!==m1R?d:d[a2N](/&gt;/g,A1R)[v2N](/&lt;/g,K1R)[f2N](/&amp;/g,O1R)[P1R](/&quot;/g,q1R)[Q2N](/&#39;/g,B1R)[x2N](/&#10;/g,i1R);};this[a1h][Y2N]=k8R;var decode=this[a1h][o2N][k2N];if(decode===undefined||decode===p8R){var z2N=T1R;z2N+=E1R;z2N+=b1R;if($[z2N](val)){for(var i=C5h,ien=val[o8R];i<ien;i++){val[i]=decodeFn(val[i]);}}else{val=decodeFn(val);}}this[I2N](D1R,val);if(multiCheck===undefined||multiCheck===p8R){var p2N=n1R;p2N+=N1R;p2N+=r4R;this[p2N]();}return this;},show:function(animate){var l1R="slideDown";var w2N=j1R;w2N+=b1R;var r2N=e1h;r2N+=E4Y.k4h;r2N+=l3h;var el=this[r2N][n5R];if(animate===undefined){animate=p8R;}if(this[a1h][D4R][w2N]()&&animate&&$[N4R][l1R]){el[l1R]();}else{var H2N=Q5R;H2N+=i7h;H2N+=U1h;H2N+=b1R;var Z2N=X3h;Z2N+=a1h;Z2N+=a1h;el[Z2N](H2N,h8R);}return this;},val:function(val){var d2N=z9h;d2N+=X1h;return val===undefined?this[d2N]():this[T3h](val);},compare:function(value,original){var compare=this[a1h][a1R][v1R]||_deepCompare;return compare(value,original);},dataSrc:function(){var U2N=E4Y.k4h;U2N+=f1R;return this[a1h][U2N][b0R];},destroy:function(){var Y1R='destroy';var Q1R="tain";var M2N=J8R;M2N+=J4h;var R2N=M5R;R2N+=Q1R;R2N+=d9h;this[F5R][R2N][x1R]();this[M2N](Y1R);return this;},multiEditable:function(){var u2N=E4Y.k4h;u2N+=f1R;return this[a1h][u2N][o1R];},multiIds:function(){var c2N=l3h;c2N+=T5R;c2N+=o4R;return this[a1h][c2N];},multiInfoShown:function(show){var C2N=O4R;C2N+=l3h;this[C2N][k1R][S0R]({display:show?t4R:S4R});},multiReset:function(){var G2N=A0R;G2N+=z1R;G2N+=I1R;this[a1h][G2N]=[];this[a1h][k4R]={};},submittable:function(){var t2N=E4Y.k4h;t2N+=I7h;t2N+=a1h;return this[a1h][t2N][p1R];},valFromData:u0R,valToData:u0R,_errorNode:function(){var r1R="fieldError";var S2N=e1h;S2N+=E4Y.k4h;S2N+=l3h;return this[S2N][r1R];},_msg:function(el,msg,fn){var t1R="eUp";var G1R="slid";var C1R="Dow";var c1R="lide";var R1R=":visible";var U1R="Ap";var F0N=P9h;F0N+=J4h;var h0N=O1h;h0N+=a1h;var s0N=w1R;s0N+=h6h;s0N+=E4Y.p4h;s0N+=Z1R;if(msg===undefined){var J2N=y7h;J2N+=H1R;return el[J2N]();}if(typeof msg===E4Y.U4h){var e0N=X1h;e0N+=d1R;var g0N=U1R;g0N+=O1h;var editor=this[a1h][D4R];msg=msg(editor,new DataTable[g0N](editor[a1h][e0N]));}if(el[s0N]()[h0N](R1R)&&$[F0N][M1R]){var V0N=N6h;V0N+=u1R;V0N+=U1h;el[V0N](msg);if(msg){var y0N=a1h;y0N+=c1R;y0N+=C1R;y0N+=J4h;el[y0N](fn);}else{var L0N=G1R;L0N+=t1R;el[L0N](fn);}}else{var W0N=J4h;W0N+=l5R;W0N+=E4Y.p4h;var X0N=e1h;X0N+=O1h;X0N+=a1h;X0N+=S1R;el[J1R](msg||h8R)[S0R](X0N,msg?t4R:W0N);if(fn){fn();}}return this;},_multiValueCheck:function(){var q6R="_multiInfo";var P6R="noMulti";var K6R="nputCont";var m6R="ol";var W6R="inputContr";var X6R="lock";var L6R="multiI";var y6R="ditable";var V6R="tiE";var F6R="ock";var h6R="toggleClas";var e6R="oEdit";var g6R="multiN";var Y0N=g6R;Y0N+=e6R;var x0N=s6R;x0N+=W3h;x0N+=a1h;var Q0N=h6R;Q0N+=a1h;var f0N=O4R;f0N+=l3h;var v0N=O1h;v0N+=G4h;v0N+=m0R;var a0N=N6h;a0N+=E4Y.k4h;a0N+=a1h;a0N+=X1h;var l0N=S1h;l0N+=U1h;l0N+=F6R;var j0N=w9h;j0N+=s2R;j0N+=X1h;j0N+=N6h;var N0N=X3h;N0N+=a1h;N0N+=a1h;var n0N=e1h;n0N+=E4Y.k4h;n0N+=l3h;var A0N=d8R;A0N+=V6R;A0N+=y6R;var m0N=L6R;m0N+=I1R;var last;var ids=this[a1h][m0N];var values=this[a1h][k4R];var isMultiValue=this[a1h][p0R];var isMultiEditable=this[a1h][a1R][A0N];var val;var different=k8R;if(ids){for(var i=C5h;i<ids[o8R];i++){val=values[ids[i]];if(i>C5h&&!_deepCompare(val,last)){different=p8R;break;}last=val;}}if(different&&isMultiValue||!isMultiEditable&&this[z4R]()){var T0N=S1h;T0N+=X6R;var i0N=X3h;i0N+=a1h;i0N+=a1h;var B0N=d8R;B0N+=X1h;B0N+=O1h;var q0N=O4R;q0N+=l3h;var P0N=X3h;P0N+=a1h;P0N+=a1h;var O0N=W6R;O0N+=m6R;var K0N=O4R;K0N+=l3h;this[K0N][O0N][P0N]({display:S4R});this[q0N][B0N][i0N]({display:T0N});}else{var D0N=t9h;D0N+=E4Y.k4h;D0N+=X3h;D0N+=W7h;var b0N=A6R;b0N+=a1h;var E0N=O1h;E0N+=K6R;E0N+=U7h;E0N+=U1h;this[F5R][E0N][b0N]({display:D0N});this[F5R][A0R][S0R]({display:S4R});if(isMultiValue&&!different){this[T3h](last,k8R);}}this[n0N][m5R][N0N]({display:ids&&ids[j0N]>G5h&&different&&!isMultiValue?l0N:S4R});var i18n=this[a1h][a0N][v0N][A0R];this[F5R][k1R][J1R](isMultiEditable?i18n[O6R]:i18n[P6R]);this[f0N][A0R][Q0N](this[a1h][x0N][Y0N],!isMultiEditable);this[a1h][D4R][q6R]();return p8R;},_typeFn:function(name){var E6R="hos";var B6R="nshi";var k0N=j6h;k0N+=B6R;k0N+=i6R;var o0N=M4R;o0N+=O1h;o0N+=i6R;var args=Array[T6R][K5R][O5R](arguments);args[o0N]();args[k0N](this[a1h][a1R]);var fn=this[a1h][I9h][name];if(fn){var z0N=E6R;z0N+=X1h;return fn[b6R](this[a1h][z0N],args);}}};Editor[I0N][p0N]={};Editor[r0N][w0N]={"className":E4Y.R4h,"data":E4Y.R4h,"def":E4Y.R4h,"fieldInfo":E4Y.R4h,"id":E4Y.R4h,"label":E4Y.R4h,"labelInfo":E4Y.R4h,"name":u0R,"type":Z0N,"message":E4Y.R4h,"multiEditable":p8R,"submit":p8R};Editor[H0N][g5R][d0N]={type:u0R,name:u0R,classes:u0R,opts:u0R,host:u0R};Editor[U0N][R0N][F5R]={container:u0R,label:u0R,labelInfo:u0R,fieldInfo:u0R,fieldError:u0R,fieldMessage:u0R};Editor[g5R]={};Editor[g5R][D6R]={"init":function(dte){},"open":function(dte,append,fn){},"close":function(dte,fn){}};Editor[g5R][M0N]={"create":function(conf){},"get":function(conf){},"set":function(conf,val){},"enable":function(conf){},"disable":function(conf){}};Editor[u0N][c0N]={"ajaxUrl":u0R,"ajax":u0R,"dataSource":u0R,"domTable":u0R,"opts":u0R,"displayController":u0R,"fields":{},"order":[],"id":-G5h,"displayed":k8R,"processing":k8R,"modifier":u0R,"action":u0R,"idSrc":u0R,"unique":C5h};Editor[g5R][n6R]={"label":u0R,"fn":u0R,"className":u0R};Editor[g5R][C0N]={onReturn:G0N,onBlur:t0N,onBackground:S0N,onComplete:N6R,onEsc:J0N,onFieldError:g5N,submit:j6R,focus:C5h,buttons:p8R,title:p8R,message:p8R,drawType:k8R,scope:e5N};Editor[n4R]={};(function(window,document,$,DataTable){var y3R="lightbox";var V3R='<div class="DTED_Lightbox_Close"></div>';var F3R='<div class="DTED_Lightbox_Content">';var h3R='<div class="DTED_Lightbox_Container">';var s3R='<div class="DTED DTED_Lightbox_Wrapper">';var Z7R="Footer";var O7R="htbox";var t6R="_shown";var p6R="lightbo";var I6R="box_Content_Wrapper\">";var z6R="<div class=\"DTED_Light";var Q6R="\"><div/></div>";var f6R="_Background";var v6R="D_Lightbox";var a6R="<div class=\"DTE";var K4h=25;var Y4N=X3h;Y4N+=l5R;Y4N+=P9h;var x4N=p5R;x4N+=a1h;x4N+=i7h;x4N+=l6R;var Q4N=a6R;Q4N+=v6R;Q4N+=f6R;Q4N+=Q6R;var f4N=x6R;f4N+=Y6R;f4N+=y2R;var v4N=o6R;v4N+=k6R;var a4N=o6R;a4N+=k6R;var l4N=z6R;l4N+=I6R;var s5N=p6R;s5N+=p6h;var self;Editor[n4R][s5N]=$[r6R](p8R,{},Editor[g5R][D6R],{"init":function(dte){var h5N=w7h;h5N+=V0R;h5N+=s1h;self[h5N]();return self;},"open":function(dte,append,callback){var d6R="dre";var H6R="il";var L5N=w6R;L5N+=E4Y.k4h;L5N+=a1h;L5N+=E4Y.p4h;var y5N=Z6R;y5N+=i7h;y5N+=E4Y.p4h;y5N+=q6h;var V5N=a4R;V5N+=H6R;V5N+=d6R;V5N+=J4h;var F5N=w7h;F5N+=U6R;F5N+=R6R;if(self[F5N]){if(callback){callback();}return;}self[M6R]=dte;var content=self[u6R][c6R];content[V5N]()[C6R]();content[y5N](append)[G6R](self[u6R][L5N]);self[t6R]=p8R;self[S6R](callback);},"close":function(dte,callback){if(!self[t6R]){if(callback){callback();}return;}self[M6R]=dte;self[J6R](callback);self[t6R]=k8R;},node:function(dte){var X5N=C2R;X5N+=i7h;X5N+=E7h;X5N+=h6h;return self[u6R][X5N][C5h];},"_init":function(){var V7R="_re";var h7R=".DTED_Lightbox_Content";var s7R="acity";var g7R="opaci";var q5N=g7R;q5N+=p9h;var P5N=X3h;P5N+=L9h;var O5N=e7R;O5N+=s7R;var K5N=w7h;K5N+=F5R;var A5N=Y6R;A5N+=h7R;var m5N=F7R;m5N+=l3h;var W5N=V7R;W5N+=W9h;W5N+=x6h;if(self[W5N]){return;}var dom=self[m5N];dom[c6R]=$(A5N,self[K5N][y7R]);dom[y7R][S0R](O5N,C5h);dom[L7R][P5N](q5N,C5h);},"_show":function(callback){var A9R='<div class="DTED_Lightbox_Shown"/>';var m9R="not";var V9R="htbox_Sho";var F9R="div.DTED_Lig";var R7R='div.DTED_Lightbox_Content_Wrapper';var I7R='DTED_Lightbox_Mobile';var z7R="ation";var k7R="rient";var Y7R="heig";var x7R="tAni";var Q7R="fse";var l7R="_heightCa";var j7R="nimate";var b7R="gro";var T7R="htbo";var i7R="click.DTED_Lig";var q7R="ED_L";var P7R="click.DT";var K7R="size.DTED_Lig";var A7R="rollTo";var m7R="_sc";var X7R="orienta";var u5N=X7R;u5N+=W7R;var M5N=m7R;M5N+=A7R;M5N+=i7h;var U5N=Z1h;U5N+=K7R;U5N+=O7R;var d5N=S1h;d5N+=O1h;d5N+=J4h;d5N+=e1h;var p5N=P7R;p5N+=q7R;p5N+=B7R;var z5N=i7R;z5N+=T7R;z5N+=p6h;var k5N=S1h;k5N+=O1h;k5N+=J4h;k5N+=e1h;var o5N=E7R;o5N+=W7h;o5N+=b7R;o5N+=D7R;var Y5N=n7R;Y5N+=e1h;var x5N=X3h;x5N+=U1h;x5N+=N7R;var f5N=h9h;f5N+=j7R;var v5N=C2R;v5N+=i7h;v5N+=G2R;var a5N=l7R;a5N+=U1h;a5N+=X3h;var l5N=a7R;l5N+=Z6R;l5N+=E7h;l5N+=h6h;var j5N=w7h;j5N+=e1h;j5N+=E4Y.k4h;j5N+=l3h;var N5N=S1h;N5N+=v7R;N5N+=x6h;var n5N=f7R;n5N+=Q7R;n5N+=x7R;var D5N=X3h;D5N+=E4Y.k4h;D5N+=J4h;D5N+=P9h;var b5N=X3h;b5N+=a1h;b5N+=a1h;var E5N=u6h;E5N+=j6h;E5N+=X1h;E5N+=E4Y.k4h;var T5N=Y7R;T5N+=N6h;T5N+=X1h;var i5N=w5R;i5N+=o7R;i5N+=Z1R;var B5N=E4Y.k4h;B5N+=k7R;B5N+=z7R;var that=this;var dom=self[u6R];if(window[B5N]!==undefined){$(f5R)[N5R](I7R);}dom[i5N][S0R](T5N,E5N);dom[y7R][b5N]({top:-self[D5N][n5N]});$(N5N)[G6R](self[u6R][L7R])[G6R](self[j5N][l5N]);self[a5N]();self[M6R][p7R](dom[v5N],{opacity:G5h,top:C5h},callback);self[M6R][f5N](dom[L7R],{opacity:G5h});setTimeout(function(){var H7R='text-indent';var w7R="DTE_";var r7R="iv.";var Q5N=e1h;Q5N+=r7R;Q5N+=w7R;Q5N+=Z7R;$(Q5N)[S0R](H7R,-G5h);},h4h);dom[x5N][Y5N](d7R,function(e){self[M6R][U7R]();});dom[o5N][k5N](z5N,function(e){var I5N=w7h;I5N+=e1h;I5N+=X1h;I5N+=E4Y.p4h;self[I5N][L7R]();});$(R7R,dom[y7R])[M7R](p5N,function(e){var J7R="ound";var S7R="gr";var t7R="back";var C7R="rapper";var c7R="ntent_W";var u7R="DTED_Lightbox_Co";var w5N=u7R;w5N+=c7R;w5N+=C7R;var r5N=g0R;r5N+=G7R;if($(e[r5N])[X5R](w5N)){var H5N=t7R;H5N+=S7R;H5N+=J7R;var Z5N=w7h;Z5N+=e1h;Z5N+=c6h;self[Z5N][H5N]();}});$(window)[d5N](U5N,function(){var s9R="alc";var e9R="ightC";var R5N=g9R;R5N+=e9R;R5N+=s9R;self[R5N]();});self[M5N]=$(f5R)[h9R]();if(window[u5N]!==undefined){var J5N=F9R;J5N+=V9R;J5N+=F3h;J5N+=J4h;var S5N=u6h;S5N+=y9R;var t5N=L9R;t5N+=e1h;t5N+=x6h;var G5N=J4h;G5N+=E4Y.k4h;G5N+=X1h;var C5N=X3h;C5N+=X9R;C5N+=Z1h;C5N+=J4h;var c5N=W9R;c5N+=x6h;var kids=$(c5N)[C5N]()[m9R](dom[L7R])[G5N](dom[y7R]);$(t5N)[S5N](A9R);$(J5N)[G6R](kids);}},"_heightCalc":function(){var a9R="windowPadding";var D9R="eight";var b9R="H";var E9R="outer";var T9R="div.DTE_";var i9R="outerHe";var B9R="div.DTE_Body_Conten";var P9R="gh";var O9R="ei";var K9R="maxH";var W4N=K9R;W4N+=O9R;W4N+=P9R;W4N+=X1h;var X4N=X3h;X4N+=a1h;X4N+=a1h;var L4N=q9R;L4N+=E4Y.p4h;L4N+=h6h;var y4N=B9R;y4N+=X1h;var V4N=i9R;V4N+=O1h;V4N+=P9R;V4N+=X1h;var F4N=T9R;F4N+=Z7R;var h4N=E9R;h4N+=b9R;h4N+=D9R;var s4N=n9R;s4N+=i7h;s4N+=d9h;var e4N=w5R;e4N+=l2R;var g4N=N9R;g4N+=j9R;var dom=self[g4N];var maxHeight=$(window)[l9R]()-self[e4N][a9R]*t5h-$(v9R,dom[s4N])[h4N]()-$(F4N,dom[y7R])[V4N]();$(y4N,dom[L4N])[X4N](W4N,maxHeight);},"_hide":function(callback){var g3R="unbind";var G9R='div.DTED_Lightbox_Shown';var C9R="child";var R9R="orientation";var U9R="ile";var d9R="_Mob";var H9R="DTED_Lightbo";var Z9R="_scrollTo";var p9R="_an";var I9R="Ani";var k9R="backg";var Y9R="ED_Lightbox_Content_Wrappe";var x9R="div.DT";var Q9R="k.DTED_Lig";var j4N=g3h;j4N+=S1h;j4N+=V0R;j4N+=e1h;var N4N=f9R;N4N+=Q9R;N4N+=O7R;var n4N=x9R;n4N+=Y9R;n4N+=h6h;var D4N=o9R;D4N+=D7R;var b4N=w6R;b4N+=N7R;var E4N=k9R;E4N+=U7h;E4N+=D7R;var T4N=z9R;T4N+=I9R;var i4N=p9R;i4N+=r9R;i4N+=D6h;i4N+=E4Y.p4h;var B4N=w7h;B4N+=w9R;var q4N=Z9R;q4N+=i7h;var P4N=H9R;P4N+=p6h;P4N+=d9R;P4N+=U9R;var m4N=w7h;m4N+=e1h;m4N+=j9R;var dom=self[m4N];if(!callback){callback=function(){};}if(window[R9R]!==undefined){var O4N=h6h;O4N+=M9R;O4N+=u9R;var K4N=L9R;K4N+=c9R;var A4N=C9R;A4N+=Z1h;A4N+=J4h;var show=$(G9R);show[A4N]()[t9R](K4N);show[O4N]();}$(f5R)[S9R](P4N)[h9R](self[q4N]);self[B4N][i4N](dom[y7R],{opacity:C5h,top:self[J9R][T4N]},function(){$(this)[C6R]();callback();});self[M6R][p7R](dom[E4N],{opacity:C5h},function(){$(this)[C6R]();});dom[b4N][g3R](d7R);dom[D4N][g3R](d7R);$(n4N,dom[y7R])[g3R](N4N);$(window)[j4N](e3R);},"_dte":u0R,"_ready":k8R,"_shown":k8R,"_dom":{"wrapper":$(s3R+h3R+l4N+F3R+a4N+z0R+v4N+f4N),"background":$(Q4N),"close":$(V3R),"content":u0R}});self=Editor[x4N][y3R];self[Y4N]={"offsetAni":K4h,"windowPadding":K4h};}(window,document,jQuery,jQuery[o4N][y8R]));(function(window,document,$,DataTable){var l2a='<div class="DTED_Envelope_Close">&times;</div>';var j2a='<div class="DTED_Envelope_Background"><div/></div>';var l8a="offsetHeight";var i3R="envelope";var q3R="ontroller";var P3R="isplayC";var O3R="ope_Wrapper\">";var K3R="<div class=\"DTED DTED_Envel";var A3R="\"DTED_Envelope_Shadow\"></div>";var m3R="div clas";var W3R="v class=\"DTED_Envelope_Container\"></div>";var f4h=600;var b4h=50;var G6N=X3h;G6N+=E4Y.k4h;G6N+=J4h;G6N+=P9h;var C6N=p5R;C6N+=L3R;C6N+=b1R;var c6N=X3R;c6N+=W3R;var u6N=N2R;u6N+=m3R;u6N+=O2R;u6N+=A3R;var M6N=K3R;M6N+=O3R;var z4N=e1h;z4N+=P3R;z4N+=q3R;var k4N=E4Y.p4h;k4N+=p6h;k4N+=X1h;k4N+=B3R;var self;Editor[n4R][i3R]=$[k4N](p8R,{},Editor[g5R][z4N],{"init":function(dte){var T3R="_init";self[M6R]=dte;self[T3R]();return self;},"open":function(dte,append,callback){var N3R="ndC";var b3R="appendCh";var E3R="os";var U4N=w6R;U4N+=E3R;U4N+=E4Y.p4h;var d4N=b3R;d4N+=O1h;d4N+=U1h;d4N+=e1h;var H4N=X3h;H4N+=E4Y.k4h;H4N+=Z1R;H4N+=D3R;var Z4N=w7h;Z4N+=O4R;Z4N+=l3h;var w4N=u6h;w4N+=n3R;w4N+=N3R;w4N+=X9R;var r4N=P1h;r4N+=g0R;r4N+=a4R;var p4N=X3h;p4N+=E4Y.k4h;p4N+=o7R;p4N+=Z1R;var I4N=w7h;I4N+=e1h;I4N+=c6h;self[I4N]=dte;$(self[u6R][p4N])[j3R]()[r4N]();self[u6R][c6R][w4N](append);self[Z4N][H4N][d4N](self[u6R][U4N]);self[S6R](callback);},"close":function(dte,callback){var l3R="dt";var M4N=w7h;M4N+=N6h;M4N+=q0R;M4N+=E4Y.p4h;var R4N=w7h;R4N+=l3R;R4N+=E4Y.p4h;self[R4N]=dte;self[M4N](callback);},node:function(dte){return self[u6R][y7R][C5h];},"_init":function(){var d3R='visible';var H3R="_cssBackgroundOpacity";var Z3R="visbility";var w3R="appendChild";var p3R='div.DTED_Envelope_Container';var I3R="_ready";var k3R="dden";var o3R="yle";var x3R="ity";var Q3R="opac";var v3R="ility";var a3R="vi";var L1N=a3R;L1N+=a1h;L1N+=S1h;L1N+=v3R;var y1N=a1h;y1N+=X1h;y1N+=x6h;y1N+=w9h;var V1N=J4h;V1N+=f3R;var F1N=a1h;F1N+=X1h;F1N+=x6h;F1N+=w9h;var h1N=Q3R;h1N+=x3R;var s1N=Y3R;s1N+=X3h;s1N+=W7h;var e1N=a1h;e1N+=X1h;e1N+=o3R;var g1N=o9R;g1N+=D7R;var J4N=N6h;J4N+=O1h;J4N+=k3R;var S4N=z3R;S4N+=o3R;var t4N=o9R;t4N+=D7R;var G4N=w7h;G4N+=F5R;var C4N=w7h;C4N+=e1h;C4N+=E4Y.k4h;C4N+=l3h;var c4N=w7h;c4N+=e1h;c4N+=j9R;var u4N=w7h;u4N+=e1h;u4N+=E4Y.k4h;u4N+=l3h;if(self[I3R]){return;}self[u6R][c6R]=$(p3R,self[u4N][y7R])[C5h];document[r3R][w3R](self[c4N][L7R]);document[r3R][w3R](self[C4N][y7R]);self[G4N][t4N][S4N][Z3R]=J4N;self[u6R][g1N][e1N][n4R]=s1N;self[H3R]=$(self[u6R][L7R])[S0R](h1N);self[u6R][L7R][F1N][n4R]=V1N;self[u6R][L7R][y1N][L1N]=d3R;},"_show":function(callback){var p8a='resize.DTED_Envelope';var x8a='click.DTED_Envelope';var f8a="ani";var j8a='html,body';var N8a="offse";var n8a="adding";var D8a="wP";var b8a="windo";var E8a="windowScroll";var T8a="fadeIn";var B8a="marginLeft";var q8a="px";var P8a="_heightCalc";var O8a="opacity";var K8a='auto';var X8a="_findAttachR";var L8a="etWidth";var y8a="fs";var V8a="widt";var h8a="Height";var e8a="cit";var g8a="tyl";var S3R="animat";var t3R="ssBackgroundOpacity";var C3R="rmal";var c3R="onf";var u3R="_Content_Wrapper";var M3R="iv.DTED_Lightbox";var R3R="lope";var U3R="click.DTED_Enve";var g6N=U3R;g6N+=R3R;var J1N=N9R;J1N+=E4Y.k4h;J1N+=l3h;var S1N=e1h;S1N+=M3R;S1N+=u3R;var C1N=F7R;C1N+=l3h;var u1N=S1h;u1N+=O1h;u1N+=J4h;u1N+=e1h;var M1N=N9R;M1N+=E4Y.k4h;M1N+=l3h;var p1N=X3h;p1N+=c3R;var I1N=N9R;I1N+=E4Y.k4h;I1N+=l3h;var z1N=J4h;z1N+=E4Y.k4h;z1N+=C3R;var k1N=G3R;k1N+=t3R;var o1N=S3R;o1N+=E4Y.p4h;var Y1N=w7h;Y1N+=e1h;Y1N+=E4Y.k4h;Y1N+=l3h;var x1N=J3R;x1N+=x6h;var Q1N=a1h;Q1N+=g8a;Q1N+=E4Y.p4h;var f1N=e7R;f1N+=u6h;f1N+=e8a;f1N+=x6h;var v1N=i7h;v1N+=p6h;var a1N=s8a;a1N+=Z1R;var l1N=i7h;l1N+=p6h;var j1N=z9R;j1N+=h8a;var N1N=X1h;N1N+=E4Y.k4h;N1N+=i7h;var n1N=a1h;n1N+=p9h;n1N+=w9h;var D1N=n9R;D1N+=E7h;D1N+=h6h;var b1N=w7h;b1N+=e1h;b1N+=E4Y.k4h;b1N+=l3h;var E1N=a1h;E1N+=X1h;E1N+=x6h;E1N+=w9h;var T1N=F3h;T1N+=F8a;T1N+=d9h;var i1N=w7h;i1N+=F5R;var B1N=V8a;B1N+=N6h;var q1N=N9R;q1N+=j9R;var P1N=f7R;P1N+=y8a;P1N+=L8a;var O1N=X8a;O1N+=W8a;var K1N=t9h;K1N+=E4Y.k4h;K1N+=d4R;var A1N=Q5R;A1N+=i7h;A1N+=U1h;A1N+=b1R;var m1N=z3R;m1N+=x6h;m1N+=w9h;var W1N=a7R;W1N+=m8a;W1N+=h6h;var X1N=w7h;X1N+=e1h;X1N+=E4Y.k4h;X1N+=l3h;var that=this;var formHeight;if(!callback){callback=function(){};}self[X1N][c6R][A8a][l9R]=K8a;var style=self[u6R][W1N][m1N];style[O8a]=C5h;style[A1N]=K1N;var targetRow=self[O1N]();var height=self[P8a]();var width=targetRow[P1N];style[n4R]=S4R;style[O8a]=G5h;self[q1N][y7R][A8a][B1N]=width+q8a;self[i1N][T1N][E1N][B8a]=-(width/t5h)+q8a;self[b1N][D1N][n1N][i8a]=$(targetRow)[z9R]()[N1N]+targetRow[j1N]+l1N;self[u6R][a1N][A8a][i8a]=-G5h*height-W4h+v1N;self[u6R][L7R][A8a][f1N]=C5h;self[u6R][L7R][Q1N][x1N]=t4R;$(self[Y1N][L7R])[o1N]({'opacity':self[k1N]},z1N);$(self[I1N][y7R])[T8a]();if(self[p1N][E8a]){var Z1N=b8a;Z1N+=D8a;Z1N+=n8a;var w1N=X1h;w1N+=E4Y.k4h;w1N+=i7h;var r1N=N8a;r1N+=X1h;$(j8a)[M1R]({"scrollTop":$(targetRow)[r1N]()[w1N]+targetRow[l8a]-self[J9R][Z1N]},function(){var v8a="onten";var d1N=a8a;d1N+=c6h;var H1N=X3h;H1N+=v8a;H1N+=X1h;$(self[u6R][H1N])[d1N]({"top":C5h},f4h,callback);});}else{var R1N=f8a;R1N+=l3h;R1N+=H1h;var U1N=w5R;U1N+=J4h;U1N+=Q8a;$(self[u6R][U1N])[R1N]({"top":C5h},f4h,callback);}$(self[M1N][U7R])[u1N](x8a,function(e){var c1N=u9h;c1N+=E4Y.p4h;self[M6R][c1N]();});$(self[C1N][L7R])[M7R](x8a,function(e){var o8a="ckg";var Y8a="ba";var t1N=Y8a;t1N+=o8a;t1N+=k8a;var G1N=w7h;G1N+=w9R;self[G1N][t1N]();});$(S1N,self[J1N][y7R])[M7R](g6N,function(e){var I8a='DTED_Envelope_Content_Wrapper';if($(e[z8a])[X5R](I8a)){var s6N=o9R;s6N+=j6h;s6N+=q6h;var e6N=N9R;e6N+=c6h;self[e6N][s6N]();}});$(window)[M7R](p8a,function(){var w8a="lc";var r8a="ightCa";var h6N=g9R;h6N+=r8a;h6N+=w8a;self[h6N]();});},"_heightCalc":function(){var g2a='maxHeight';var J8a="outerHeight";var S8a="heightCalc";var t8a="tCalc";var C8a="ght";var c8a="hei";var u8a="heigh";var M8a="Padding";var R8a="window";var U8a=".DTE_Foot";var d8a="dy_Content";var H8a="div.DTE_Bo";var Z8a="uterHeight";var E6N=E4Y.k4h;E6N+=Z8a;var T6N=O4R;T6N+=l3h;var i6N=w7h;i6N+=e1h;i6N+=E4Y.k4h;i6N+=l3h;var B6N=H8a;B6N+=d8a;var q6N=q9R;q6N+=d9h;var P6N=w7h;P6N+=e1h;P6N+=E4Y.k4h;P6N+=l3h;var O6N=Y6R;O6N+=U8a;O6N+=d9h;var K6N=a7R;K6N+=Z6R;K6N+=G2R;var A6N=w7h;A6N+=e1h;A6N+=E4Y.k4h;A6N+=l3h;var m6N=R8a;m6N+=M8a;var W6N=u8a;W6N+=X1h;var X6N=c8a;X6N+=C8a;var L6N=a7R;L6N+=G8a;var y6N=w7h;y6N+=e1h;y6N+=E4Y.k4h;y6N+=l3h;var V6N=u8a;V6N+=t8a;var F6N=X3h;F6N+=E4Y.k4h;F6N+=J4h;F6N+=P9h;var formHeight;formHeight=self[J9R][S8a]?self[F6N][V6N](self[y6N][L6N]):$(self[u6R][c6R])[j3R]()[X6N]();var maxHeight=$(window)[W6N]()-self[J9R][m6N]*t5h-$(v9R,self[A6N][K6N])[J8a]()-$(O6N,self[P6N][q6N])[J8a]();$(B6N,self[i6N][y7R])[S0R](g2a,maxHeight);return $(self[M6R][T6N][y7R])[E6N]();},"_hide":function(callback){var W2a="nbin";var X2a="k.DTED_Lightbox";var L2a="unb";var y2a="t_Wrapper";var V2a="x_Conten";var F2a="div.DTED_Light";var h2a="unbi";var s2a="TED_L";var e2a="lick.D";var I6N=g3h;I6N+=n7R;I6N+=e1h;var z6N=X3h;z6N+=e2a;z6N+=s2a;z6N+=B7R;var k6N=h2a;k6N+=q6h;var o6N=N9R;o6N+=E4Y.k4h;o6N+=l3h;var Y6N=F2a;Y6N+=L9R;Y6N+=V2a;Y6N+=y2a;var x6N=L2a;x6N+=O1h;x6N+=J4h;x6N+=e1h;var Q6N=f9R;Q6N+=X2a;var f6N=j6h;f6N+=W2a;f6N+=e1h;var v6N=N9R;v6N+=E4Y.k4h;v6N+=l3h;var n6N=w7h;n6N+=e1h;n6N+=E4Y.k4h;n6N+=l3h;var D6N=a8a;D6N+=X1h;D6N+=E4Y.p4h;var b6N=w5R;b6N+=J4h;b6N+=L0R;b6N+=X1h;if(!callback){callback=function(){};}$(self[u6R][b6N])[D6N]({"top":-(self[n6N][c6R][l8a]+b4h)},f4h,function(){var O2a="fadeOut";var K2a="kgrou";var a6N=m2a;a6N+=A2a;a6N+=u6h;a6N+=U1h;var l6N=E7R;l6N+=K2a;l6N+=J4h;l6N+=e1h;var j6N=N9R;j6N+=E4Y.k4h;j6N+=l3h;var N6N=w7h;N6N+=e1h;N6N+=E4Y.k4h;N6N+=l3h;$([self[N6N][y7R],self[j6N][l6N]])[O2a](a6N,callback);});$(self[v6N][U7R])[f6N](Q6N);$(self[u6R][L7R])[x6N](d7R);$(Y6N,self[o6N][y7R])[k6N](z6N);$(window)[I6N](e3R);},"_findAttachRow":function(){var D2a="_dt";var H6N=u6h;H6N+=X3h;H6N+=P2a;H6N+=J4h;var w6N=q2a;w6N+=u6h;w6N+=e1h;var r6N=X3h;r6N+=E4Y.k4h;r6N+=J4h;r6N+=P9h;var p6N=F6h;p6N+=D6h;p6N+=B2a;var dt=$(self[M6R][a1h][i2a])[p6N]();if(self[r6N][T2a]===w6N){var Z6N=q2a;Z6N+=W9h;Z6N+=d9h;return dt[i2a]()[Z6N]();}else if(self[M6R][a1h][H6N]===E2a){var d6N=q2a;d6N+=u6h;d6N+=b2a;return dt[i2a]()[d6N]();}else{var R6N=D2a;R6N+=E4Y.p4h;var U6N=h6h;U6N+=E4Y.k4h;U6N+=F3h;return dt[U6N](self[R6N][a1h][n2a])[N2a]();}},"_dte":u0R,"_ready":k8R,"_cssBackgroundOpacity":G5h,"_dom":{"wrapper":$(M6N+u6N+c6N+z0R)[C5h],"background":$(j2a)[C5h],"close":$(l2a)[C5h],"content":u0R}});self=Editor[C6N][i3R];self[G6N]={"windowPadding":b4h,"heightCalc":u0R,"attach":a2a,"windowScroll":p8R};}(window,document,jQuery,jQuery[N4R][t6N]));Editor[T6R][S6N]=function(cfg,after){var c2a="orde";var u2a="rd";var d2a="multiRes";var H2a='initField';var Z2a="Error adding field '";var w2a="his n";var r2a="ady exists with t";var p2a="'. A field alre";var I2a="Error adding field. The field requires a `name` option";var z2a="Sour";var v2a="yReo";var B7N=w7h;B7N+=J3R;B7N+=v2a;B7N+=f2a;var J6N=O1h;J6N+=Q2a;J6N+=h6h;J6N+=x2a;if($[J6N](cfg)){for(var i=C5h,iLen=cfg[o8R];i<iLen;i++){var g7N=W9h;g7N+=e1h;this[g7N](cfg[i]);}}else{var X7N=l3h;X7N+=E4Y.k4h;X7N+=e1h;X7N+=E4Y.p4h;var L7N=P9h;L7N+=Y2a;L7N+=U1h;L7N+=e1h;var y7N=X3h;y7N+=o2a;y7N+=E4Y.p4h;y7N+=a1h;var V7N=b3h;V7N+=E4Y.p4h;V7N+=U1h;V7N+=e1h;var F7N=k2a;F7N+=z2a;F7N+=W1R;var s7N=P9h;s7N+=O1h;s7N+=U5R;s7N+=a1h;var e7N=J4h;e7N+=u6h;e7N+=l3h;e7N+=E4Y.p4h;var name=cfg[e7N];if(name===undefined){throw I2a;}if(this[a1h][s7N][name]){var h7N=p2a;h7N+=r2a;h7N+=w2a;h7N+=M2R;throw Z2a+name+h7N;}this[F7N](H2a,cfg);var field=new Editor[V7N](cfg,this[y7N][L7N],this);if(this[a1h][X7N]){var m7N=E4Y.p4h;m7N+=w8R;m7N+=N6h;var W7N=d2a;W7N+=i4R;var editFields=this[a1h][U2a];field[W7N]();$[m7N](editFields,function(idSrc,edit){var R2a="multiS";var K7N=R2a;K7N+=i4R;var val;if(edit[b0R]){var A7N=e1h;A7N+=u6h;A7N+=g0R;val=field[n0R](edit[A7N]);}field[K7N](idSrc,val!==undefined?val:field[E5R]());});}this[a1h][M2a][name]=field;if(after===undefined){var O7N=E4Y.k4h;O7N+=u2a;O7N+=d9h;this[a1h][O7N][E8R](name);}else if(after===u0R){var P7N=E4Y.k4h;P7N+=h6h;P7N+=b2a;this[a1h][P7N][P5R](name);}else{var q7N=c2a;q7N+=h6h;var idx=$[U4R](after,this[a1h][C2a]);this[a1h][q7N][G2a](idx+G5h,C5h,name);}}this[B7N](this[C2a]());return this;};Editor[T6R][t2a]=function(newAjax){if(newAjax){this[a1h][t2a]=newAjax;return this;}return this[a1h][t2a];};Editor[i7N][T7N]=function(){var g0a="onBackground";var D7N=S2a;D7N+=s1h;var onBackground=this[a1h][J2a][g0a];if(typeof onBackground===E4Y.U4h){onBackground(this);}else if(onBackground===e0a){var E7N=S1h;E7N+=U1h;E7N+=j6h;E7N+=h6h;this[E7N]();}else if(onBackground===N6R){var b7N=s0a;b7N+=W3h;this[b7N]();}else if(onBackground===D7N){var n7N=a1h;n7N+=h0a;this[n7N]();}return this;};Editor[N7N][j7N]=function(){var l7N=F0a;l7N+=L3h;l7N+=h6h;this[l7N]();return this;};Editor[a7N][V0a]=function(cells,fieldNames,show,opts){var E0a="Object";var T0a="Plain";var B0a="ainO";var P0a="formOptio";var O0a="bb";var m0a="Sou";var X0a="ividual";var I7N=y0a;I7N+=t9h;I7N+=E4Y.p4h;var z7N=w7h;z7N+=A1h;z7N+=s1h;var k7N=L0a;k7N+=X0a;var o7N=W0a;o7N+=u6h;o7N+=m0a;o7N+=A0a;var Y7N=K0a;Y7N+=O0a;Y7N+=w9h;var x7N=P0a;x7N+=G9h;var Q7N=q0a;Q7N+=B0a;Q7N+=i0a;var f7N=T1R;f7N+=T0a;f7N+=E0a;var v7N=O7h;v7N+=q0R;v7N+=x6h;var that=this;if(this[v7N](function(){that[V0a](cells,fieldNames,opts);})){return this;}if($[f7N](fieldNames)){opts=fieldNames;fieldNames=undefined;show=p8R;}else if(typeof fieldNames===b0a){show=fieldNames;fieldNames=undefined;opts=undefined;}if($[Q7N](show)){opts=show;show=p8R;}if(show===undefined){show=p8R;}opts=$[r6R]({},this[a1h][x7N][Y7N],opts);var editFields=this[o7N](k7N,cells,fieldNames);this[z7N](cells,editFields,I7N,opts,function(){var q5a="click";var X5a="head";var V5a="prep";var h5a="prepend";var s5a="eq";var e5a="pointer";var S0a='"><div/></div>';var t0a="bg";var G0a="concat";var R0a="bubbl";var U0a="ze";var H0a="ly";var w0a="ttach";var r0a="class";var p0a="v class=\"";var k0a="rocessing_Indicator\"><span></div>";var o0a="div class=\"DTE_P";var x0a="mError";var v0a="bubblePositio";var l0a="udeF";var n0a="_pos";var D0a="ubble";var n9N=S1h;n9N+=D0a;var D9N=n0a;D9N+=X1h;D9N+=N0a;var b9N=P9h;b9N+=E4Y.k4h;b9N+=j0a;b9N+=a1h;var E9N=V0R;E9N+=w6R;E9N+=l0a;E9N+=a0a;var T9N=w7h;T9N+=V3h;T9N+=X3h;T9N+=Z6h;var i9N=v0a;i9N+=J4h;var P9N=f9R;P9N+=W7h;var A9N=u6h;A9N+=f0a;var m9N=u6h;m9N+=e1h;m9N+=e1h;var X9N=n6R;X9N+=a1h;var h9N=V3h;h9N+=h6h;h9N+=l3h;var s9N=e1h;s9N+=E4Y.k4h;s9N+=l3h;var e9N=Q0a;e9N+=x0a;var g9N=e1h;g9N+=j9R;var J7N=u6h;J7N+=y9R;var t7N=x6R;t7N+=p5R;t7N+=E9h;t7N+=y2R;var G7N=x6R;G7N+=e1h;G7N+=Y0a;G7N+=y2R;var C7N=o6R;C7N+=k6R;var c7N=N2R;c7N+=o0a;c7N+=k0a;var u7N=u9h;u7N+=E4Y.p4h;var M7N=V2R;M7N+=y2R;var R7N=V2R;R7N+=y2R;var U7N=z0a;U7N+=I0a;U7N+=h6h;var d7N=X3R;d7N+=p0a;var H7N=r0a;H7N+=R9h;var Z7N=u6h;Z7N+=w0a;var w7N=Z0a;w7N+=H0a;var r7N=d0a;r7N+=O1h;r7N+=U0a;r7N+=C4h;var p7N=R0a;p7N+=E4Y.p4h;var namespace=that[M0a](opts);var ret=that[u0a](p7N);if(!ret){return that;}$(window)[l5R](r7N+namespace,function(){that[c0a]();});var nodes=[];that[a1h][C0a]=nodes[G0a][w7N](nodes,_pluck(editFields,Z7N));var classes=that[H7N][V0a];var background=$(d7N+classes[t0a]+S0a);var container=$(J0a+classes[y7R]+k0R+J0a+classes[U7N]+R7N+J0a+classes[i2a]+M7N+J0a+classes[u7N]+g5a+c7N+C7N+G7N+J0a+classes[e5a]+g5a+t7N);if(show){var S7N=S1h;S7N+=v7R;S7N+=x6h;container[t9R](f5R);background[t9R](S7N);}var liner=container[j3R]()[s5a](C5h);var table=liner[j3R]();var close=table[j3R]();liner[J7N](that[g9N][e9N]);table[h5a](that[s9N][h9N]);if(opts[F5a]){var F9N=V5a;F9N+=B3R;liner[F9N](that[F5R][y5a]);}if(opts[L5a]){var L9N=X5a;L9N+=d9h;var y9N=e1h;y9N+=E4Y.k4h;y9N+=l3h;var V9N=V5a;V9N+=E4Y.p4h;V9N+=q6h;liner[V9N](that[y9N][L9N]);}if(opts[X9N]){var W9N=W5a;W9N+=m5a;table[G6R](that[F5R][W9N]);}var pair=$()[m9N](container)[A9N](background);that[A5a](function(submitComplete){that[p7R](pair,{opacity:C5h},function(){var P5a='resize.';var O5a="rDynamicInfo";var O9N=G3R;O9N+=U1h;O9N+=K5a;O9N+=O5a;var K9N=E4Y.k4h;K9N+=P9h;K9N+=P9h;pair[C6R]();$(window)[K9N](P5a+namespace);that[O9N]();});});background[P9N](function(){var q9N=S1h;q9N+=U1h;q9N+=j6h;q9N+=h6h;that[q9N]();});close[q5a](function(){var B9N=G3R;B9N+=B5a;that[B9N]();});that[i9N]();that[p7R](pair,{opacity:G5h});that[T9N](that[a1h][E9N],opts[b9N]);that[D9N](n9N);});return this;};Editor[T6R][c0a]=function(){var o5a='below';var Q5a="right";var j5a='div.DTE_Bubble_Liner';var N5a="_Bubble";var n5a="div.DTE";var D5a="bot";var b5a="erWid";var T5a="idt";var i5a="fset";var X4h=15;var w9N=f7R;w9N+=i5a;var r9N=X3h;r9N+=a1h;r9N+=a1h;var p9N=F3h;p9N+=T5a;p9N+=N6h;var I9N=E5a;I9N+=X1h;I9N+=b5a;I9N+=Q8R;var z9N=w9h;z9N+=P9h;z9N+=X1h;var k9N=D5a;k9N+=C9h;k9N+=l3h;var o9N=w9h;o9N+=s2R;o9N+=X1h;o9N+=N6h;var N9N=n5a;N9N+=N5a;var wrapper=$(N9N),liner=$(j5a),nodes=this[a1h][C0a];var position={top:C5h,left:C5h,right:C5h,bottom:C5h};$[T8R](nodes,function(i,node){var x5a="offsetWidth";var f5a="lef";var v5a="tom";var a5a="ig";var l5a="offsetHe";var Y9N=l5a;Y9N+=a5a;Y9N+=N6h;Y9N+=X1h;var x9N=S1h;x9N+=E4Y.k4h;x9N+=X1h;x9N+=v5a;var Q9N=U1h;Q9N+=E4Y.p4h;Q9N+=P9h;Q9N+=X1h;var f9N=f5a;f9N+=X1h;var v9N=f5a;v9N+=X1h;var a9N=X1h;a9N+=E4Y.k4h;a9N+=i7h;var l9N=X1h;l9N+=E4Y.k4h;l9N+=i7h;var j9N=o7h;j9N+=E4Y.p4h;j9N+=X1h;var pos=$(node)[z9R]();node=$(node)[j9N](C5h);position[l9N]+=pos[a9N];position[v9N]+=pos[f9N];position[Q5a]+=pos[Q9N]+node[x5a];position[x9N]+=pos[i8a]+node[Y9N];});position[i8a]/=nodes[o8R];position[Y5a]/=nodes[o9N];position[Q5a]/=nodes[o8R];position[k9N]/=nodes[o8R];var top=position[i8a],left=(position[z9N]+position[Q5a])/t5h,width=liner[I9N](),visLeft=left-width/t5h,visRight=visLeft+width,docWidth=$(window)[p9N](),padding=X4h,classes=this[d5R][V0a];wrapper[r9N]({top:top,left:left});if(liner[o8R]&&liner[w9N]()[i8a]<C5h){var d9N=v4R;d9N+=W8a;var H9N=L9R;H9N+=X1h;H9N+=C9h;H9N+=l3h;var Z9N=X1h;Z9N+=e7R;wrapper[S0R](Z9N,position[H9N])[N5R](d9N);}else{wrapper[S9R](o5a);}if(visRight+padding>docWidth){var U9N=U1h;U9N+=k5a;U9N+=X1h;var diff=visRight-docWidth;liner[S0R](U9N,visLeft<padding?-(visLeft-padding):-(diff+padding));}else{var R9N=U1h;R9N+=E4Y.p4h;R9N+=P9h;R9N+=X1h;liner[S0R](R9N,visLeft<padding?-(visLeft-padding):C5h);}return this;};Editor[M9N][u9N]=function(buttons){var r5a="18n";var p5a="act";var I5a="asic";var J9N=E4Y.p4h;J9N+=u6h;J9N+=X3h;J9N+=N6h;var S9N=O1h;S9N+=Q2a;S9N+=z5a;var c9N=F0a;c9N+=I5a;var that=this;if(buttons===c9N){var G9N=p5a;G9N+=O1h;G9N+=l5R;var C9N=O1h;C9N+=r5a;buttons=[{text:this[C9N][this[a1h][G9N]][p1R],action:function(){var t9N=S2a;t9N+=s1h;this[t9N]();}}];}else if(!$[S9N](buttons)){buttons=[buttons];}$(this[F5R][w5a])[Z5a]();$[J9N](buttons,function(i,btn){var e4a='tabindex';var J5a="className";var S5a='<button/>';var t5a="tex";var C5a="sName";var u5a="tabI";var M5a="abIndex";var U5a="eyp";var d5a="appendT";var q3N=S1h;q3N+=H5a;q3N+=a1h;var P3N=d5a;P3N+=E4Y.k4h;var K3N=E4Y.k4h;K3N+=J4h;var m3N=W7h;m3N+=U5a;m3N+=h6h;m3N+=R5a;var W3N=E4Y.k4h;W3N+=J4h;var L3N=X1h;L3N+=M5a;var y3N=u5a;y3N+=J4h;y3N+=P1h;y3N+=p6h;var V3N=c5a;V3N+=U1h;var F3N=s6R;F3N+=C5a;var h3N=P9h;h3N+=y6h;var s3N=p5a;s3N+=G5a;var e3N=U1h;e3N+=u6h;e3N+=S1h;e3N+=h2R;var g3N=t5a;g3N+=X1h;if(typeof btn===m1R){btn={text:btn,action:function(){this[p1R]();}};}var text=btn[g3N]||btn[e3N];var action=btn[s3N]||btn[N4R];$(S5a,{'class':that[d5R][h3N][n6R]+(btn[F3N]?a0R+btn[J5a]:h8R)})[V3N](typeof text===E4Y.U4h?text(that):text||h8R)[g4a](e4a,btn[y3N]!==undefined?btn[L3N]:C5h)[l5R](s4a,function(e){var h4a="yCo";var X3N=W7h;X3N+=E4Y.p4h;X3N+=h4a;X3N+=P1h;if(e[X3N]===y4h&&action){action[O5R](that);}})[W3N](m3N,function(e){var y4a="Default";var V4a="prevent";if(e[F4a]===y4h){var A3N=V4a;A3N+=y4a;e[A3N]();}})[K3N](L4a,function(e){e[X4a]();if(action){var O3N=W4a;O3N+=U1h;O3N+=U1h;action[O3N](that);}})[P3N](that[F5R][q3N]);});return this;};Editor[T6R][m4a]=function(fieldName){var i4a="ldNa";var B4a="includeFields";var K4a="plice";var B3N=A4a;B3N+=s2R;var that=this;var fields=this[a1h][M2a];if(typeof fieldName===B3N){var E3N=a1h;E3N+=K4a;var T3N=O4a;T3N+=d9h;var i3N=V0R;i3N+=E1R;i3N+=u6h;i3N+=x6h;that[P4a](fieldName)[q4a]();delete fields[fieldName];var orderIdx=$[i3N](fieldName,this[a1h][C2a]);this[a1h][T3N][E3N](orderIdx,G5h);var includeIdx=$[U4R](fieldName,this[a1h][B4a]);if(includeIdx!==-G5h){this[a1h][B4a][G2a](includeIdx,G5h);}}else{var D3N=w7h;D3N+=Z9h;D3N+=i4a;D3N+=T4a;var b3N=E4Y.p4h;b3N+=u6h;b3N+=a4R;$[b3N](this[D3N](fieldName),function(i,name){that[m4a](name);});}return this;};Editor[n3N][N3N]=function(){this[E4a](k8R);return this;};Editor[j3N][b4a]=function(arg1,arg2,arg3,arg4){var r4a='initCreate';var Q4a="itFi";var v4a='number';var j4a="editF";var N4a="sty";var n4a="lo";var D4a="isplayReorder";var z3N=E4Y.p4h;z3N+=u6h;z3N+=X3h;z3N+=N6h;var k3N=w7h;k3N+=e1h;k3N+=D4a;var o3N=S1h;o3N+=n4a;o3N+=X3h;o3N+=W7h;var Y3N=N4a;Y3N+=w9h;var x3N=P9h;x3N+=h1h;x3N+=l3h;var Q3N=O4R;Q3N+=l3h;var f3N=w8R;f3N+=p1h;f3N+=E4Y.k4h;f3N+=J4h;var l3N=j4a;l3N+=l4a;l3N+=I1R;var that=this;var fields=this[a1h][M2a];var count=G5h;if(this[a4a](function(){that[b4a](arg1,arg2,arg3,arg4);})){return this;}if(typeof arg1===v4a){count=arg1;arg1=arg2;arg2=arg3;}this[a1h][l3N]={};for(var i=C5h;i<count;i++){var v3N=j1h;v3N+=f4a;var a3N=A1h;a3N+=Q4a;a3N+=f4a;this[a1h][a3N][i]={fields:this[a1h][v3N]};}var argOpts=this[x4a](arg1,arg2,arg3,arg4);this[a1h][Y4a]=o4a;this[a1h][f3N]=b4a;this[a1h][n2a]=u0R;this[Q3N][x3N][Y3N][n4R]=o3N;this[k4a]();this[k3N](this[M2a]());$[z3N](fields,function(name,field){var z4a="Reset";var p3N=a1h;p3N+=E4Y.p4h;p3N+=X1h;var I3N=A0R;I3N+=z4a;field[I3N]();for(var i=C5h;i<count;i++){field[I4a](i,field[E5R]());}field[p3N](field[E5R]());});this[p4a](r4a,u0R,function(){var d4a="_assembleMa";var Z4a="ybe";var w3N=w4a;w3N+=Z4a;w3N+=H4a;var r3N=d4a;r3N+=O1h;r3N+=J4h;that[r3N]();that[M0a](argOpts[a1R]);argOpts[w3N]();});return this;};Editor[T6R][U4a]=function(parent,url,opts){var t4a='POST';var G4a="dent";var C4a="dep";var s8K=R4a;s8K+=E4Y.p4h;s8K+=J4h;s8K+=X1h;var e8K=E4Y.k4h;e8K+=J4h;var R3N=a4R;R3N+=M4a;var U3N=P9h;U3N+=O1h;U3N+=h2R;U3N+=e1h;var Z3N=u4a;Z3N+=x6h;if($[Z3N](parent)){var H3N=c4a;H3N+=Q8R;for(var i=C5h,ien=parent[H3N];i<ien;i++){var d3N=C4a;d3N+=g1R;d3N+=G4a;this[d3N](parent[i],url,opts);}return this;}var that=this;var field=this[U3N](parent);var ajaxOpts={type:t4a,dataType:S4a};opts=$[r6R]({event:R3N,data:u0R,preUpdate:u0R,postUpdate:u0R},opts);var update=function(json){var O1a="postUpdate";var K1a='show';var m1a='error';var W1a='message';var X1a="eUpdate";var L1a="reU";var s1a="pdate";var J4a="process";var g8K=J4a;g8K+=O1h;g8K+=J4h;g8K+=o7h;var J3N=g1a;J3N+=a1h;J3N+=e1a;J3N+=s1a;var S3N=h1a;S3N+=e1h;S3N+=E4Y.p4h;var G3N=E9h;G3N+=u6h;G3N+=U1h;var C3N=F1a;C3N+=V1a;var c3N=y1a;c3N+=h2R;var M3N=i7h;M3N+=L1a;M3N+=s1a;if(opts[M3N]){var u3N=A7h;u3N+=X1a;opts[u3N](json);}$[T8R]({labels:c3N,options:C3N,values:G3N,messages:W1a,errors:m1a},function(jsonProp,fieldFn){if(json[jsonProp]){$[T8R](json[jsonProp],function(field,val){var t3N=P9h;t3N+=A1a;that[t3N](field)[fieldFn](val);});}});$[T8R]([S3N,K1a,I5R,j5R],function(i,key){if(json[key]){that[key](json[key]);}});if(opts[J3N]){opts[O1a](json);}field[g8K](k8R);};$(field[N2a]())[e8K](opts[s8K],function(e){var l1a="ainObjec";var j1a="sPl";var D1a="hen";var b1a="values";var i1a="ditFiel";var L8K=P1a;L8K+=q1a;var V8K=E9h;V8K+=B1a;var F8K=e1h;F8K+=u6h;F8K+=X1h;F8K+=u6h;var h8K=E4Y.p4h;h8K+=i1a;h8K+=I1R;if($(field[N2a]())[T1a](e[z8a])[o8R]===C5h){return;}field[G4R](p8R);var data={};data[E1a]=that[a1h][h8K]?_pluck(that[a1h][U2a],F8K):u0R;data[a2a]=data[E1a]?data[E1a][C5h]:u0R;data[b1a]=that[V8K]();if(opts[b0R]){var y8K=e1h;y8K+=u6h;y8K+=X1h;y8K+=u6h;var ret=opts[y8K](data);if(ret){opts[b0R]=ret;}}if(typeof url===L8K){var o=url(field[I4R](),data,update);if(o){var X8K=X1h;X8K+=D1a;if(typeof o===Y8R&&typeof o[X8K]===E4Y.U4h){o[n1a](function(resolved){if(resolved){update(resolved);}});}else{update(o);}}}else{var O8K=P6h;O8K+=B3R;var K8K=N1a;K8K+=u6h;K8K+=p6h;var W8K=O1h;W8K+=j1a;W8K+=l1a;W8K+=X1h;if($[W8K](url)){var m8K=E4Y.p4h;m8K+=p6h;m8K+=L0R;m8K+=e1h;$[m8K](ajaxOpts,url);}else{var A8K=j6h;A8K+=h6h;A8K+=U1h;ajaxOpts[A8K]=url;}$[K8K]($[O8K](ajaxOpts,{url:url,data:data,success:update}));}});return this;};Editor[P8K][q8K]=function(){var k1a='.dte';var Y1a="templat";var f1a="tem";var v1a="tro";var a1a="des";var D8K=a1a;D8K+=v1a;D8K+=x6h;var T8K=f1a;T8K+=Q1a;T8K+=X1h;T8K+=E4Y.p4h;var i8K=X3h;i8K+=x1a;var B8K=n4R;B8K+=E4Y.p4h;B8K+=e1h;if(this[a1h][B8K]){this[U7R]();}this[i8K]();if(this[a1h][T8K]){var b8K=Y1a;b8K+=E4Y.p4h;var E8K=Z6R;E8K+=i7h;E8K+=g1R;E8K+=e1h;$(f5R)[E8K](this[a1h][b8K]);}var controller=this[a1h][D6R];if(controller[D8K]){controller[q4a](this);}$(document)[o1a](k1a+this[a1h][z1a]);this[F5R]=u0R;this[a1h]=u0R;};Editor[T6R][I1a]=function(name){var r1a="Names";var n8K=w7h;n8K+=p1a;n8K+=e1h;n8K+=r1a;var that=this;$[T8R](this[n8K](name),function(i,n){var w1a="sabl";var j8K=e1h;j8K+=O1h;j8K+=w1a;j8K+=E4Y.p4h;var N8K=j1h;N8K+=U5R;that[N8K](n)[j8K]();});return this;};Editor[T6R][n4R]=function(show){var a8K=u9h;a8K+=E4Y.p4h;var l8K=E4Y.k4h;l8K+=i7h;l8K+=g1R;if(show===undefined){return this[a1h][Z1a];}return this[show?l8K:a8K]();};Editor[v8K][Z1a]=function(){var f8K=l3h;f8K+=u6h;f8K+=i7h;return $[f8K](this[a1h][M2a],function(field,name){var Q8K=p5R;Q8K+=H1a;Q8K+=e1h;return field[Q8K]()?name:u0R;});};Editor[x8K][d1a]=function(){return this[a1h][D6R][N2a](this);};Editor[Y8K][U1a]=function(items,arg1,arg2,arg3,arg4){var p8K=e7R;p8K+=X1h;p8K+=a1h;var I8K=P9h;I8K+=a0a;var z8K=R1a;z8K+=A0a;var k8K=c7h;k8K+=t6h;var that=this;if(this[a4a](function(){var o8K=E4Y.p4h;o8K+=e1h;o8K+=O1h;o8K+=X1h;that[o8K](items,arg1,arg2,arg3,arg4);})){return this;}var argOpts=this[x4a](arg1,arg2,arg3,arg4);this[k8K](items,this[z8K](I8K,items),o4a,argOpts[p8K],function(){var c1a="_assembleMai";var M1a="ayb";var w8K=l3h;w8K+=M1a;w8K+=u1a;var r8K=c1a;r8K+=J4h;that[r8K]();that[M0a](argOpts[a1R]);argOpts[w8K]();});return this;};Editor[T6R][Z8K]=function(name){var C1a="_fieldNa";var H8K=C1a;H8K+=C4R;H8K+=a1h;var that=this;$[T8R](this[H8K](name),function(i,n){var d8K=E4Y.p4h;d8K+=J4h;d8K+=d1R;that[P4a](n)[d8K]();});return this;};Editor[T6R][U8K]=function(name,msg){var t1a="obalError";var G1a="gl";if(msg===undefined){var M8K=G1a;M8K+=t1a;var R8K=Y7h;R8K+=S1a;R8K+=E4Y.p4h;this[R8K](this[F5R][J1a],name);this[a1h][M8K]=name;}else{var u8K=g6a;u8K+=h6h;this[P4a](name)[u8K](msg);}return this;};Editor[T6R][P4a]=function(name){var e6a='Unknown field name - ';var fields=this[a1h][M2a];if(!fields[name]){throw e6a+name;}return fields[name];};Editor[c8K][C8K]=function(){var G8K=j1h;G8K+=E4Y.p4h;G8K+=i3h;G8K+=a1h;return $[s6a](this[a1h][G8K],function(field,name){return name;});};Editor[t8K][S8K]=_api_file;Editor[J8K][g2K]=_api_files;Editor[e2K][h6a]=function(name){var V2K=z9h;V2K+=X1h;var F2K=p1a;F2K+=e1h;var that=this;if(!name){var s2K=j1h;s2K+=E4Y.p4h;s2K+=H9h;name=this[s2K]();}if($[F6a](name)){var h2K=E4Y.p4h;h2K+=u6h;h2K+=X3h;h2K+=N6h;var out={};$[h2K](name,function(i,n){out[n]=that[P4a](n)[h6a]();});return out;}return this[F2K](name)[V2K]();};Editor[T6R][y2K]=function(names,animate){var that=this;$[T8R](this[V6a](names),function(i,n){var L2K=P9h;L2K+=l4a;L2K+=e1h;that[L2K](n)[y6a](animate);});return this;};Editor[X2K][W2K]=function(includeHash){var m2K=E4Y.p4h;m2K+=t6h;m2K+=L6a;return $[s6a](this[a1h][m2K],function(edit,idSrc){return includeHash===p8R?X6a+idSrc:idSrc;});};Editor[A2K][W6a]=function(inNames){var A6a="globalError";var O2K=U1h;O2K+=E4Y.p4h;O2K+=J4h;O2K+=m6a;var K2K=e1h;K2K+=j9R;var formError=$(this[K2K][J1a]);if(this[a1h][A6a]){return p8R;}var names=this[V6a](inNames);for(var i=C5h,ien=names[O2K];i<ien;i++){var P2K=P9h;P2K+=Y2a;P2K+=i3h;if(this[P2K](names[i])[W6a]()){return p8R;}}return k8R;};Editor[q2K][K6a]=function(cell,fieldName,opts){var D6a="Opt";var b6a="ual";var E6a="individ";var i6a="E_Field";var B6a="div.D";var q6a="_ti";var Y2K=O6a;Y2K+=O1h;Y2K+=J4h;Y2K+=E4Y.p4h;var x2K=P6a;x2K+=s1h;var f2K=q6a;f2K+=e1h;f2K+=x6h;var v2K=U1h;v2K+=f8R;v2K+=Q8R;var a2K=B6a;a2K+=n6h;a2K+=i6a;var n2K=E4Y.p4h;n2K+=u6h;n2K+=X3h;n2K+=N6h;var D2K=D5R;D2K+=a1h;D2K+=T6a;var b2K=E6a;b2K+=b6a;var E2K=R1a;E2K+=A0a;var T2K=O6a;T2K+=O1h;T2K+=J4h;T2K+=E4Y.p4h;var i2K=P9h;i2K+=y6h;i2K+=D6a;i2K+=K3h;var B2K=E4Y.p4h;B2K+=p6h;B2K+=n6a;var that=this;if($[u4R](fieldName)){opts=fieldName;fieldName=undefined;}opts=$[B2K]({},this[a1h][i2K][T2K],opts);var editFields=this[E2K](b2K,cell,fieldName);var node,field;var countOuter=C5h,countInner;var closed=k8R;var classes=this[D2K][K6a];$[n2K](editFields,function(i,editField){var l6a="edit more than one row inline at a time";var j6a="Cannot ";var j2K=E4Y.p4h;j2K+=N6a;if(countOuter>C5h){var N2K=j6a;N2K+=l6a;throw N2K;}node=$(editField[T2a][C5h]);countInner=C5h;$[j2K](editField[a6a],function(j,f){var x6a="at a time";var Q6a="ine ";var f6a="ield inl";var v6a="Cannot edit more than one f";if(countInner>C5h){var l2K=v6a;l2K+=f6a;l2K+=Q6a;l2K+=x6a;throw l2K;}field=f;countInner++;});countOuter++;});if($(a2K,node)[v2K]){return this;}if(this[f2K](function(){var Y6a="line";var Q2K=O1h;Q2K+=J4h;Q2K+=Y6a;that[Q2K](cell,fieldName,opts);})){return this;}this[x2K](cell,editFields,Y2K,opts,function(){var g7a="liner";var J6a='px">';var t6a='" style="width:';var G6a="contents";var c6a="_formOpt";var u6a="det";var R6a=" clas";var U6a="ine";var d6a="><";var H6a="<div class=\"DTE_Processing_Indicator\"><span/";var w6a="ep";var r6a="Err";var k6a="_posto";var o6a="inli";var q0K=o6a;q0K+=I0a;var P0K=k6a;P0K+=i7h;P0K+=g1R;var O0K=z6a;O0K+=E4Y.k4h;O0K+=j0a;O0K+=a1h;var e0K=I6a;e0K+=E4Y.p4h;e0K+=o7h;var C2K=p6a;C2K+=r6a;C2K+=E4Y.k4h;C2K+=h6h;var c2K=O4R;c2K+=l3h;var u2K=J4h;u2K+=E4Y.k4h;u2K+=e1h;u2K+=E4Y.p4h;var M2K=Z6R;M2K+=i7h;M2K+=E4Y.p4h;M2K+=q6h;var R2K=h6h;R2K+=w6a;R2K+=V1R;var U2K=e1h;U2K+=O1h;U2K+=E9h;U2K+=C4h;var d2K=P9h;d2K+=L0a;var H2K=N2R;H2K+=q2R;H2K+=Y6R;H2K+=y2R;var Z2K=V2R;Z2K+=q2R;Z2K+=y2R;var w2K=Z6a;w2K+=X1h;w2K+=E4Y.k4h;w2K+=G9h;var r2K=N2R;r2K+=j2R;var p2K=H6a;p2K+=d6a;p2K+=j2R;var I2K=U1h;I2K+=U6a;I2K+=h6h;var z2K=E2R;z2K+=Y0a;z2K+=R6a;z2K+=M6a;var k2K=u6a;k2K+=u6h;k2K+=a4R;var o2K=c6a;o2K+=G5a;o2K+=a1h;var namespace=that[o2K](opts);var ret=that[u0a](C6a);if(!ret){return that;}var children=node[G6a]()[k2K]();node[G6R]($(z2K+classes[y7R]+k0R+J0a+classes[I2K]+t6a+node[S6a]()+J6a+p2K+r2K+J0a+classes[w2K]+Z2K+H2K));node[d2K](U2K+classes[g7a][R2K](/ /g,e7a))[M2K](field[u2K]())[G6R](that[c2K][C2K]);if(opts[w5a]){var g0K=S1h;g0K+=c9h;g0K+=s7a;g0K+=a1h;var J2K=m8a;J2K+=J4h;J2K+=e1h;var S2K=h7a;S2K+=u6h;S2K+=W1R;var t2K=Y6R;t2K+=C4h;var G2K=j1h;G2K+=J4h;G2K+=e1h;node[G2K](t2K+classes[w5a][S2K](/ /g,e7a))[J2K](that[F5R][g0K]);}that[e0K](function(submitComplete){var F7a="nts";closed=p8R;$(document)[o1a](L4a+namespace);if(!submitComplete){var h0K=u6h;h0K+=i7h;h0K+=i7h;h0K+=B3R;var s0K=s8a;s0K+=F7a;node[s0K]()[C6R]();node[h0K](children);}that[V7a]();});setTimeout(function(){var F0K=X3h;F0K+=U1h;F0K+=O1h;F0K+=d4R;if(closed){return;}$(document)[l5R](F0K+namespace,function(e){var W7a="dBac";var X7a="dBack";var L7a="ypeFn";var y7a="inArra";var A0K=g0R;A0K+=h6h;A0K+=z9h;A0K+=X1h;var m0K=y7a;m0K+=x6h;var W0K=g0R;W0K+=G7R;var X0K=E4Y.k4h;X0K+=F3h;X0K+=J4h;X0K+=a1h;var L0K=w7h;L0K+=X1h;L0K+=L7a;var y0K=W9h;y0K+=X7a;var V0K=W9h;V0K+=W7a;V0K+=W7h;var back=$[N4R][V0K]?y0K:m7a;if(!field[L0K](X0K,e[W0K])&&$[m0K](node[C5h],$(e[A0K])[A7a]()[back]())===-G5h){var K0K=t9h;K0K+=S9h;that[K0K]();}});},C5h);that[O0K]([field],opts[m4R]);that[P0K](q0K);});return this;};Editor[B0K][i0K]=function(name,msg){var K7a="sage";if(msg===undefined){var E0K=e1h;E0K+=E4Y.k4h;E0K+=l3h;var T0K=w7h;T0K+=l3h;T0K+=R5a;T0K+=m2R;this[T0K](this[E0K][y5a],name);}else{var D0K=C4R;D0K+=a1h;D0K+=K7a;var b0K=j1h;b0K+=E4Y.p4h;b0K+=U1h;b0K+=e1h;this[b0K](name)[D0K](msg);}return this;};Editor[n0K][Y4a]=function(mode){var B7a="an editing mode";var q7a="rently in ";var P7a="Not cur";var j0K=u6h;j0K+=I8R;j0K+=p7h;j0K+=J4h;if(!mode){return this[a1h][O7a];}if(!this[a1h][O7a]){var N0K=P7a;N0K+=q7a;N0K+=B7a;throw N0K;}this[a1h][j0K]=mode;return this;};Editor[T6R][l0K]=function(){return this[a1h][n2a];};Editor[a0K][i7a]=function(fieldNames){var Q0K=P9h;Q0K+=O1h;Q0K+=E4Y.p4h;Q0K+=i3h;var that=this;if(fieldNames===undefined){fieldNames=this[M2a]();}if($[F6a](fieldNames)){var v0K=K5a;v0K+=X3h;v0K+=N6h;var out={};$[v0K](fieldNames,function(i,name){var f0K=P9h;f0K+=A1a;out[name]=that[f0K](name)[i7a]();});return out;}return this[Q0K](fieldNames)[i7a]();};Editor[x0K][Y0K]=function(fieldNames,val){var T7a="ainObject";var o0K=q0a;o0K+=T7a;var that=this;if($[o0K](fieldNames)&&val===undefined){var k0K=E4Y.p4h;k0K+=u6h;k0K+=X3h;k0K+=N6h;$[k0K](fieldNames,function(name,value){that[P4a](name)[I4a](value);});}else{var z0K=P9h;z0K+=O1h;z0K+=U5R;this[z0K](fieldNames)[I4a](val);}return this;};Editor[I0K][p0K]=function(name){var Z0K=J4h;Z0K+=a3h;var w0K=P9h;w0K+=l4a;w0K+=e1h;var r0K=u4a;r0K+=x6h;var that=this;if(!name){name=this[C2a]();}return $[r0K](name)?$[s6a](name,function(n){return that[P4a](n)[N2a]();}):this[w0K](name)[Z0K]();};Editor[T6R][H0K]=function(name,fn){var E7a="_eventN";var d0K=E7a;d0K+=b7a;d0K+=E4Y.p4h;$(this)[o1a](this[d0K](name),fn);return this;};Editor[U0K][l5R]=function(name,fn){var R0K=E4Y.k4h;R0K+=J4h;$(this)[R0K](this[D7a](name),fn);return this;};Editor[M0K][f3R]=function(name,fn){var n7a="Name";var u0K=w7h;u0K+=R4a;u0K+=D3R;u0K+=n7a;$(this)[f3R](this[u0K](name),fn);return this;};Editor[T6R][N0a]=function(){var a7a="eg";var l7a="_preop";var j7a="yController";var g5K=e1h;g5K+=j9R;var J0K=E4Y.k4h;J0K+=E7h;J0K+=J4h;var S0K=N7a;S0K+=H2R;S0K+=j7a;var t0K=l3h;t0K+=e9h;var G0K=l7a;G0K+=g1R;var c0K=I6a;c0K+=a7a;var that=this;this[v7a]();this[c0K](function(submitComplete){var C0K=J3R;C0K+=j7a;that[a1h][C0K][U7R](that,function(){that[V7a]();});});var ret=this[G0K](t0K);if(!ret){return this;}this[a1h][S0K][J0K](this,this[g5K][y7R],function(){var F5K=P9h;F5K+=f7a;F5K+=Z6h;var s5K=l3h;s5K+=u6h;s5K+=i7h;var e5K=w7h;e5K+=V3h;e5K+=y3h;that[e5K]($[s5K](that[a1h][C2a],function(name){var h5K=P9h;h5K+=a0a;return that[a1h][h5K][name];}),that[a1h][J2a][F5K]);});this[Q7a](o4a);return this;};Editor[T6R][C2a]=function(set){var d7a="rovided for ordering.";var H7a="All fields, and no additional fields, must be p";var Z7a="sort";var p7a="Array";var I7a="oi";var o7a="eord";var Y7a="yR";var x7a="_displa";var B5K=x7a;B5K+=Y7a;B5K+=o7a;B5K+=d9h;var q5K=E4Y.k4h;q5K+=h6h;q5K+=e1h;q5K+=d9h;var P5K=k7a;P5K+=q6h;var K5K=z7a;K5K+=E4Y.k4h;K5K+=O1h;K5K+=J4h;var A5K=z7a;A5K+=I7a;A5K+=J4h;var m5K=a1h;m5K+=E4Y.k4h;m5K+=h6h;m5K+=X1h;var W5K=a1h;W5K+=U1h;W5K+=O1h;W5K+=W1R;var y5K=T1R;y5K+=p7a;if(!set){var V5K=E4Y.k4h;V5K+=h6h;V5K+=P1h;V5K+=h6h;return this[a1h][V5K];}if(arguments[o8R]&&!$[y5K](set)){var X5K=a1h;X5K+=U1h;X5K+=r7a;X5K+=E4Y.p4h;var L5K=L1h;L5K+=Q9h;set=Array[L5K][X5K][O5R](arguments);}if(this[a1h][C2a][W5K]()[m5K]()[A5K](w7a)!==set[K5R]()[Z7a]()[K5K](w7a)){var O5K=H7a;O5K+=d7a;throw O5K;}$[P5K](this[a1h][q5K],set);this[B5K]();return this;};Editor[T6R][x1R]=function(items,arg1,arg2,arg3,arg4){var c7a='initRemove';var M7a="Source";var l5K=J4h;l5K+=E4Y.k4h;l5K+=I0a;var j5K=Q5R;j5K+=S1R;var N5K=P9h;N5K+=E4Y.k4h;N5K+=h6h;N5K+=l3h;var n5K=h6h;n5K+=U7a;var D5K=u6h;D5K+=R7a;D5K+=E4Y.k4h;D5K+=J4h;var b5K=P9h;b5K+=a0a;var E5K=k2a;E5K+=M7a;var T5K=c4a;T5K+=X1h;T5K+=N6h;var that=this;if(this[a4a](function(){var i5K=Z1h;i5K+=l3h;i5K+=u7a;i5K+=E4Y.p4h;that[i5K](items,arg1,arg2,arg3,arg4);})){return this;}if(items[T5K]===undefined){items=[items];}var argOpts=this[x4a](arg1,arg2,arg3,arg4);var editFields=this[E5K](b5K,items);this[a1h][D5K]=n5K;this[a1h][n2a]=items;this[a1h][U2a]=editFields;this[F5R][N5K][A8a][j5K]=l5K;this[k4a]();this[p4a](c7a,[_pluck(editFields,C7a),_pluck(editFields,G7a),items],function(){var t7a='initMultiRemove';that[p4a](t7a,[editFields,items],function(){var s9a='button';var g9a="maybeOpen";var J7a="ssembleM";var S7a="editOpt";var v5K=S7a;v5K+=a1h;var a5K=h9h;a5K+=J7a;a5K+=e9h;that[a5K]();that[M0a](argOpts[a1R]);argOpts[g9a]();var opts=that[a1h][v5K];if(opts[m4R]!==u0R){var Q5K=P9h;Q5K+=E4Y.k4h;Q5K+=j0a;Q5K+=a1h;var f5K=E4Y.p4h;f5K+=e9a;$(s9a,that[F5R][w5a])[f5K](opts[Q5K])[m4R]();}});});return this;};Editor[x5K][T3h]=function(set,val){var Y5K=h9a;Y5K+=N6h;var that=this;if(!$[u4R](set)){var o={};o[set]=val;set=o;}$[Y5K](set,function(n,v){var k5K=a1h;k5K+=E4Y.p4h;k5K+=X1h;var o5K=P9h;o5K+=O1h;o5K+=U5R;that[o5K](n)[k5K](v);});return this;};Editor[z5K][F9a]=function(names,animate){var y9a="dN";var V9a="_fiel";var p5K=V9a;p5K+=y9a;p5K+=u7h;var I5K=E4Y.p4h;I5K+=u6h;I5K+=a4R;var that=this;$[I5K](this[p5K](names),function(i,n){var w5K=a1h;w5K+=L9a;w5K+=F3h;var r5K=P9h;r5K+=Y2a;r5K+=U1h;r5K+=e1h;that[r5K](n)[w5K](animate);});return this;};Editor[Z5K][p1R]=function(successCallback,errorCallback,formatdata,hide){var X9a="_proces";var U5K=E4Y.p4h;U5K+=u6h;U5K+=X3h;U5K+=N6h;var H5K=X9a;H5K+=W9a;var that=this,fields=this[a1h][M2a],errorFields=[],errorReady=C5h,sent=k8R;if(this[a1h][G4R]||!this[a1h][O7a]){return this;}this[H5K](p8R);var send=function(){var m9a='initSubmit';var d5K=u6h;d5K+=I8R;d5K+=O1h;d5K+=l5R;if(errorFields[o8R]!==errorReady||sent){return;}that[p4a](m9a,[that[a1h][d5K]],function(result){if(result===k8R){that[A9a](k8R);return;}sent=p8R;that[K9a](successCallback,errorCallback,formatdata,hide);});};this[G5R]();$[T8R](fields,function(name,field){if(field[W6a]()){errorFields[E8R](name);}});$[U5K](errorFields,function(i,name){var R5K=E4Y.p4h;R5K+=T2R;R5K+=E4Y.k4h;R5K+=h6h;fields[name][R5K](h8R,function(){errorReady++;send();});});send();return this;};Editor[T6R][O9a]=function(set){var q9a="late";if(set===undefined){var M5K=P9a;M5K+=q9a;return this[a1h][M5K];}this[a1h][O9a]=set===u0R?u0R:$(set);return this;};Editor[u5K][c5K]=function(title){var D9a="heade";var b9a="dr";var E9a="hil";var T9a="sses";var i9a="unction";var B9a="tml";var s4K=N6h;s4K+=B9a;var J5K=P9h;J5K+=i9a;var S5K=D5R;S5K+=T9a;var t5K=e1h;t5K+=Y0a;t5K+=C4h;var G5K=X3h;G5K+=E9a;G5K+=b9a;G5K+=g1R;var C5K=D9a;C5K+=h6h;var header=$(this[F5R][C5K])[G5K](t5K+this[S5K][n9a][c6R]);if(title===undefined){return header[J1R]();}if(typeof title===J5K){var e4K=X1h;e4K+=x5R;e4K+=U1h;e4K+=E4Y.p4h;var g4K=V1h;g4K+=T9h;title=title(this,new DataTable[g4K](this[a1h][e4K]));}header[s4K](title);return this;};Editor[T6R][h4K]=function(field,value){var N9a="PlainObj";var V4K=o7h;V4K+=E4Y.p4h;V4K+=X1h;var F4K=T1R;F4K+=N9a;F4K+=E4Y.I4h;if(value!==undefined||$[F4K](field)){return this[T3h](field,value);}return this[V4K](field);};var apiRegister=DataTable[y4K][j9a];function __getInst(api){var a9a="context";var l9a="ni";var L4K=E4Y.k4h;L4K+=z1R;L4K+=l9a;L4K+=X1h;var ctx=api[a9a][C5h];return ctx[L4K][v9a]||ctx[f9a];}function __setBasic(inst,opts,type,plural){var I9a='1';var z9a=/%d/;var x9a='_basic';var X4K=Z6a;X4K+=X1h;X4K+=m5a;if(!opts){opts={};}if(opts[X4K]===undefined){var W4K=S1h;W4K+=j6h;W4K+=Q9a;W4K+=m5a;opts[W4K]=x9a;}if(opts[L5a]===undefined){var m4K=W0R;m4K+=E4Y.r4h;m4K+=J4h;opts[L5a]=inst[m4K][type][L5a];}if(opts[F5a]===undefined){var A4K=Z1h;A4K+=Y9a;A4K+=E4Y.p4h;if(type===A4K){var K4K=T4a;K4K+=a1h;K4K+=u6h;K4K+=z9h;var confirm=inst[o9a][type][k9a];opts[K4K]=plural!==G5h?confirm[w7h][P1R](z9a,plural):confirm[I9a];}else{var O4K=l3h;O4K+=R5a;O4K+=m2R;opts[O4K]=h8R;}}return opts;}apiRegister(p9a,function(){return __getInst(this);});apiRegister(P4K,function(opts){var q4K=r9a;q4K+=E4Y.p4h;q4K+=D6h;q4K+=E4Y.p4h;var inst=__getInst(this);inst[b4a](__setBasic(inst,opts,q4K));return this;});apiRegister(w9a,function(opts){var B4K=E4Y.p4h;B4K+=e1h;B4K+=O1h;B4K+=X1h;var inst=__getInst(this);inst[B4K](this[C5h][C5h],__setBasic(inst,opts,Z9a));return this;});apiRegister(H9a,function(opts){var i4K=E4Y.p4h;i4K+=e1h;i4K+=O1h;i4K+=X1h;var inst=__getInst(this);inst[i4K](this[C5h],__setBasic(inst,opts,Z9a));return this;});apiRegister(d9a,function(opts){var E4K=Z1h;E4K+=l3h;E4K+=u9R;var T4K=h6h;T4K+=U9a;T4K+=E4Y.p4h;var inst=__getInst(this);inst[T4K](this[C5h][C5h],__setBasic(inst,opts,E4K,G5h));return this;});apiRegister(b4K,function(opts){var D4K=h6h;D4K+=U7a;var inst=__getInst(this);inst[D4K](this[C5h],__setBasic(inst,opts,R9a,this[C5h][o8R]));return this;});apiRegister(M9a,function(type,opts){if(!type){type=C6a;}else if($[u4R](type)){opts=type;type=C6a;}__getInst(this)[type](this[C5h][C5h],opts);return this;});apiRegister(u9a,function(opts){__getInst(this)[V0a](this[C5h],opts);return this;});apiRegister(n4K,_api_file);apiRegister(N4K,_api_files);$(document)[l5R](j4K,function(e,ctx,json){var C9a='dt';if(e[c9a]!==C9a){return;}if(json&&json[K9h]){$[T8R](json[K9h],function(name,files){Editor[K9h][name]=files;});}});Editor[G5R]=function(msg,tn){var S9a="datatables.net/tn/";var t9a=", please refer to https://";var G9a=" For more information";var l4K=G9a;l4K+=t9a;l4K+=S9a;throw tn?msg+l4K+tn:msg;};Editor[J9a]=function(data,props,fn){var h3a="value";var v4K=E9h;v4K+=u6h;v4K+=U1h;v4K+=a6h;var a4K=U1h;a4K+=x5R;a4K+=E4Y.p4h;a4K+=U1h;var i,ien,dataPoint;props=$[r6R]({label:a4K,value:v4K},props);if($[F6a](data)){var f4K=c4a;f4K+=X1h;f4K+=N6h;for(i=C5h,ien=data[f4K];i<ien;i++){dataPoint=data[i];if($[u4R](dataPoint)){var x4K=u6h;x4K+=X1h;x4K+=g3a;var Q4K=e3a;Q4K+=U1h;Q4K+=a6h;fn(dataPoint[props[Q4K]]===undefined?dataPoint[props[s3a]]:dataPoint[props[h3a]],dataPoint[props[s3a]],i,dataPoint[x4K]);}else{fn(dataPoint,dataPoint,i);}}}else{i=C5h;$[T8R](data,function(key,val){fn(val,key,i);i++;});}};Editor[Y4K]=function(id){var F3a="eplac";var o4K=h6h;o4K+=F3a;o4K+=E4Y.p4h;return id[o4K](/\./g,w7a);};Editor[k4K]=function(editor,conf,files,progressCallback,completeCallback){var W8z="_limitLeft";var P3a="onload";var O3a='A server error occurred while uploading the file';var K3a="adText";var A3a="eRe";var m3a="e</i>";var W3a="<i>Uploading fil";var X3a="mitL";var L3a="_li";var V3a="readAsDataUR";var x1K=V3a;x1K+=y3a;var Q1K=L3a;Q1K+=X3a;Q1K+=k5a;Q1K+=X1h;var r4K=W3a;r4K+=m3a;var p4K=r9h;p4K+=A3a;p4K+=K3a;var I4K=J4h;I4K+=u6h;I4K+=l3h;I4K+=E4Y.p4h;var z4K=d9h;z4K+=U7h;z4K+=h6h;var reader=new FileReader();var counter=C5h;var ids=[];var generalError=O3a;editor[z4K](conf[I4K],h8R);progressCallback(conf,conf[p4K]||r4K);reader[P3a]=function(e){var f3a="readAsDataURL";var v3a='preUpload';var a3a='No Ajax option specified for upload plug-in';var l3a="oa";var j3a="aja";var N3a='upload';var n3a='action';var E3a="ajaxD";var T3a="func";var i3a="TE_Upload";var q3a="preS";var S4K=g1a;S4K+=z3R;var t4K=q3a;t4K+=h0a;t4K+=B3a;t4K+=i3a;var c4K=T3a;c4K+=p1h;c4K+=E4Y.k4h;c4K+=J4h;var u4K=u6h;u4K+=F9h;u4K+=p6h;var H4K=E3a;H4K+=u6h;H4K+=g0R;var Z4K=b3a;Z4K+=b3h;Z4K+=U5R;var w4K=D3a;w4K+=e1h;var data=new FormData();var ajax;data[G6R](n3a,N3a);data[w4K](Z4K,conf[i0R]);data[G6R](N3a,files[counter]);if(conf[H4K]){var d4K=j3a;d4K+=p6h;d4K+=s0R;conf[d4K](data);}if(conf[t2a]){ajax=conf[t2a];}else if($[u4R](editor[a1h][t2a])){var M4K=N1a;M4K+=u6h;M4K+=p6h;var R4K=j6h;R4K+=A5R;R4K+=l3a;R4K+=e1h;var U4K=N1a;U4K+=u6h;U4K+=p6h;ajax=editor[a1h][U4K][R4K]?editor[a1h][M4K][b3a]:editor[a1h][t2a];}else if(typeof editor[a1h][u4K]===m1R){ajax=editor[a1h][t2a];}if(!ajax){throw a3a;}if(typeof ajax===m1R){ajax={url:ajax};}if(typeof ajax[b0R]===c4K){var C4K=e1h;C4K+=F0R;var d={};var ret=ajax[C4K](d);if(ret!==undefined&&typeof ret!==m1R){d=ret;}$[T8R](d,function(key,value){data[G6R](key,value);});}var preRet=editor[p4a](v3a,[conf[i0R],files[counter],data]);if(preRet===k8R){if(counter<files[o8R]-G5h){counter++;reader[f3a](files[counter]);}else{var G4K=X3h;G4K+=B1a;G4K+=U1h;completeCallback[G4K](editor,ids);}return;}var submit=k8R;editor[l5R](t4K,function(){submit=p8R;return k8R;});$[t2a]($[r6R]({},ajax,{type:S4K,data:data,dataType:S4a,contentType:k8R,processData:k8R,xhr:function(){var Z3a="onloadend";var x3a="onprogress";var Q3a="ajaxSettings";var xhr=$[Q3a][A9h]();if(xhr[b3a]){xhr[b3a][x3a]=function(e){var w3a=':';var r3a="%";var p3a="total";var I3a="loaded";var z3a="ixed";var o3a="putable";var Y3a="lengthCom";var J4K=Y3a;J4K+=o3a;if(e[J4K]){var s1K=w9h;s1K+=J4h;s1K+=k3a;s1K+=N6h;var e1K=w9h;e1K+=J4h;e1K+=k3a;e1K+=N6h;var g1K=X1h;g1K+=E4Y.k4h;g1K+=j3h;g1K+=z3a;var percent=(e[I3a]/e[p3a]*N4h)[g1K](C5h)+r3a;progressCallback(conf,files[e1K]===G5h?percent:counter+w3a+files[s1K]+a0R+percent);}};xhr[b3a][Z3a]=function(e){var d3a='Processing';var H3a="processingText";progressCallback(conf,conf[H3a]||d3a);};}return xhr;},success:function(json){var V8z="UR";var F8z="readAsData";var e8z="load";var J3a="tus";var t3a="ors";var G3a="ieldErr";var u3a='preSubmit.DTE_Upload';var M3a="XhrSuccess";var U3a="pload";var q1K=O1h;q1K+=e1h;var P1K=j6h;P1K+=U3a;var K1K=E4Y.p4h;K1K+=h6h;K1K+=U7h;K1K+=h6h;var y1K=U1h;y1K+=a5R;y1K+=N6h;var V1K=R3a;V1K+=e1h;V1K+=M3a;var F1K=c7h;F1K+=E9h;F1K+=D3R;var h1K=E4Y.k4h;h1K+=P9h;h1K+=P9h;editor[h1K](u3a);editor[F1K](V1K,[conf[i0R],json]);if(json[c3a]&&json[c3a][y1K]){var X1K=U1h;X1K+=E4Y.p4h;X1K+=C3a;var L1K=P9h;L1K+=G3a;L1K+=t3a;var errors=json[L1K];for(var i=C5h,ien=errors[X1K];i<ien;i++){var A1K=S3a;A1K+=J3a;var m1K=J4h;m1K+=u6h;m1K+=C4R;var W1K=E4Y.p4h;W1K+=B7h;W1K+=h6h;editor[W1K](errors[i][m1K],errors[i][A1K]);}}else if(json[K1K]){var O1K=g6a;O1K+=h6h;editor[O1K](json[G5R]);}else if(!json[b3a]||!json[P1K][q1K]){var B1K=g8z;B1K+=h1h;editor[B1K](conf[i0R],generalError);}else{var N1K=F1a;N1K+=e8z;var i1K=r9h;i1K+=R9h;if(json[i1K]){var T1K=P9h;T1K+=O1h;T1K+=U1h;T1K+=R9h;$[T8R](json[T1K],function(table,files){var h8z="file";var n1K=j1h;n1K+=U1h;n1K+=E4Y.p4h;n1K+=a1h;var D1K=s8z;D1K+=X1h;D1K+=g1R;D1K+=e1h;var E1K=r9h;E1K+=R9h;if(!Editor[E1K][table]){var b1K=h8z;b1K+=a1h;Editor[b1K][table]={};}$[D1K](Editor[n1K][table],files);});}ids[E8R](json[N1K][q0R]);if(counter<files[o8R]-G5h){var j1K=F8z;j1K+=V8z;j1K+=y3a;counter++;reader[j1K](files[counter]);}else{completeCallback[O5R](editor,ids);if(submit){var l1K=a1h;l1K+=y8z;l1K+=s1h;editor[l1K]();}}}progressCallback(conf);},error:function(xhr){var X8z='uploadXhrError';var L8z="_even";var f1K=J4h;f1K+=b7a;f1K+=E4Y.p4h;var v1K=d9h;v1K+=h4R;var a1K=L8z;a1K+=X1h;editor[a1K](X8z,[conf[i0R],xhr]);editor[v1K](conf[f1K],generalError);progressCallback(conf);}}));};files=$[s6a](files,function(val){return val;});if(conf[Q1K]!==undefined){files[G2a](conf[W8z],files[o8R]);}reader[x1K](files[C5h]);};Editor[T6R][K8R]=function(init){var z2z='initComplete';var Y2z="init";var x2z="displayControll";var a2z='foot';var E2z="BUTTONS";var T2z="eTools";var P2z='"/></div>';var O2z='<div data-dte-e="form_error" class="';var K2z='<div data-dte-e="form_content" class="';var A2z="tag";var m2z='<form data-dte-e="form" class="';var W2z="footer";var X2z='"/>';var L2z='<div data-dte-e="body" class="';var y2z="indicator";var V2z='<div data-dte-e="processing" class="';var s2z="efaul";var e2z="setti";var g2z="omTabl";var G8z="domT";var C8z="ataSource";var c8z="dataTab";var u8z="aSources";var M8z="egacyAja";var U8z="etting";var H8z="content\" cl";var Z8z="iv data-dte-e=\"body_";var w8z="te-e=\"foot\" class=\"";var r8z="ata-d";var I8z="ass=\"";var z8z="<div cl";var k8z="m>";var o8z="m_info\" cla";var Y8z="e=\"for";var x8z="<div data-dte-";var f8z="ad\" cl";var v8z="<div data-dte-e=\"he";var a8z="div class=\"";var l8z="ntent";var j8z="=\"form_buttons\" clas";var N8z="-dte-e";var n8z="<div data";var D8z="tton";var i8z="formConten";var B8z="form_";var q8z="bodyCon";var P8z="ody_content";var O8z="init.dt.d";var K8z="niq";var A8z="t.";var m8z="xhr.";var t6K=m8z;t6K+=e1h;t6K+=A8z;t6K+=w9R;var c6K=j6h;c6K+=K8z;c6K+=a6h;var u6K=O8z;u6K+=c6h;var U6K=P4a;U6K+=a1h;var d6K=A7h;d6K+=g2R;d6K+=W9a;var H6K=S1h;H6K+=P8z;var Z6K=q8z;Z6K+=Q8a;var w6K=L9R;w6K+=c9R;var r6K=W9R;r6K+=x6h;var p6K=B8z;p6K+=y4R;p6K+=D3R;var I6K=i8z;I6K+=X1h;var z6K=C2R;z6K+=T8z;z6K+=E4Y.p4h;z6K+=h6h;var k6K=e1h;k6K+=E4Y.k4h;k6K+=l3h;var x6K=E4Y.p4h;x6K+=E9h;x6K+=E8z;var Q6K=E4Y.p4h;Q6K+=N6a;var N6K=e1h;N6K+=D6h;N6K+=b8z;N6K+=h3h;var n6K=P9h;n6K+=J4h;var D6K=V2R;D6K+=q2R;D6K+=y2R;var b6K=K0a;b6K+=D8z;b6K+=a1h;var E6K=n8z;E6K+=N8z;E6K+=j8z;E6K+=M6a;var T6K=w5R;T6K+=l8z;var i6K=P2R;i6K+=a8z;var B6K=q9R;B6K+=d9h;var q6K=v8z;q6K+=f8z;q6K+=u6h;q6K+=Q8z;var P6K=V2R;P6K+=q2R;P6K+=y2R;var O6K=V3h;O6K+=h6h;O6K+=l3h;var K6K=x8z;K6K+=Y8z;K6K+=o8z;K6K+=Q8z;var A6K=E4Y.p4h;A6K+=h6h;A6K+=h4R;var m6K=x6R;m6K+=V3h;m6K+=h6h;m6K+=k8z;var W6K=V2R;W6K+=q2R;W6K+=y2R;var X6K=y4R;X6K+=D3R;var L6K=P9h;L6K+=h1h;L6K+=l3h;var y6K=V2R;y6K+=y2R;var V6K=V2R;V6K+=q2R;V6K+=y2R;var F6K=z8z;F6K+=I8z;var h6K=a7R;h6K+=G8a;var s6K=p8z;s6K+=e1h;s6K+=r8z;s6K+=w8z;var e6K=X3h;e6K+=E4Y.k4h;e6K+=l8z;var g6K=E2R;g6K+=Z8z;g6K+=H8z;g6K+=I8z;var J1K=V2R;J1K+=y2R;var S1K=C2R;S1K+=d8z;var t1K=e1h;t1K+=E4Y.k4h;t1K+=l3h;var G1K=a1h;G1K+=U8z;G1K+=a1h;var C1K=O1h;C1K+=G4h;C1K+=E4Y.r4h;C1K+=J4h;var c1K=W0R;c1K+=m0R;var u1K=w6R;u1K+=u6h;u1K+=L9h;u1K+=R9h;var M1K=X3h;M1K+=R8z;var R1K=P9a;R1K+=U1h;R1K+=H1h;var U1K=U1h;U1K+=M8z;U1K+=p6h;var d1K=e1h;d1K+=u6h;d1K+=X1h;d1K+=u8z;var H1K=c8z;H1K+=w9h;var Z1K=e1h;Z1K+=C8z;Z1K+=a1h;var w1K=g0R;w1K+=h3h;var r1K=G8z;r1K+=u6h;r1K+=S1h;r1K+=w9h;var p1K=u6h;p1K+=z7a;p1K+=u6h;p1K+=p6h;var I1K=N1a;I1K+=t8z;I1K+=S8z;var z1K=J8z;z1K+=d1R;var k1K=e1h;k1K+=g2z;k1K+=E4Y.p4h;var o1K=e2z;o1K+=s2R;o1K+=a1h;var Y1K=e1h;Y1K+=s2z;Y1K+=L5R;init=$[r6R](p8R,{},Editor[Y1K],init);this[a1h]=$[r6R](p8R,{},Editor[g5R][o1K],{table:init[k1K]||init[i2a],dbTable:init[z1K]||u0R,ajaxUrl:init[I1K],ajax:init[p1K],idSrc:init[h2z],dataSource:init[r1K]||init[w1K]?Editor[Z1K][H1K]:Editor[d1K][J1R],formOptions:init[F2z],legacyAjax:init[U1K],template:init[R1K]?$(init[O9a])[C6R]():u0R});this[M1K]=$[r6R](p8R,{},Editor[u1K]);this[c1K]=init[C1K];Editor[g5R][G1K][z1a]++;var that=this;var classes=this[d5R];this[t1K]={"wrapper":$(J0a+classes[S1K]+k0R+V2z+classes[G4R][y2z]+M0R+L2z+classes[r3R][y7R]+J1K+g6K+classes[r3R][e6K]+X2z+z0R+s6K+classes[W2z][h6K]+k0R+F6K+classes[W2z][c6R]+V6K+z0R+z0R)[C5h],"form":$(m2z+classes[p6a][A2z]+y6K+K2z+classes[L6K][X6K]+W6K+m6K)[C5h],"formError":$(O2z+classes[p6a][A6K]+X2z)[C5h],"formInfo":$(K6K+classes[O6K][O6R]+P6K)[C5h],"header":$(q6K+classes[n9a][B6K]+i6K+classes[n9a][T6K]+P2z)[C5h],"buttons":$(E6K+classes[p6a][b6K]+D6K)[C5h]};if($[n6K][N6K][q2z]){var a6K=B2z;a6K+=t4h;var l6K=E4Y.p4h;l6K+=e1h;l6K+=O1h;l6K+=X1h;var j6K=n6h;j6K+=i2z;j6K+=T2z;var ttButtons=$[N4R][y8R][j6K][E2z];var i18n=this[o9a];$[T8R]([E2a,l6K,a6K],function(i,val){var n2z="sButtonText";var D2z="itor";var f6K=S1h;f6K+=b2z;f6K+=l5R;var v6K=A1h;v6K+=D2z;v6K+=w7h;ttButtons[v6K+val][n2z]=i18n[val][f6K];});}$[Q6K](init[x6K],function(evt,fn){that[l5R](evt,function(){var j2z="lice";var N2z="cal";var o6K=N2z;o6K+=U1h;var Y6K=a1h;Y6K+=j2z;var args=Array[T6R][Y6K][o6K](arguments);args[l2z]();fn[b6R](that,args);});});var dom=this[k6K];var wrapper=dom[z6K];dom[I6K]=_editor_el(p6K,dom[p6a])[C5h];dom[W2z]=_editor_el(a2z,wrapper)[C5h];dom[r6K]=_editor_el(w6K,wrapper)[C5h];dom[Z6K]=_editor_el(H6K,wrapper)[C5h];dom[G4R]=_editor_el(d6K,wrapper)[C5h];if(init[U6K]){var M6K=j1h;M6K+=h2R;M6K+=e1h;M6K+=a1h;var R6K=u6h;R6K+=e1h;R6K+=e1h;this[R6K](init[M6K]);}$(document)[l5R](u6K+this[a1h][c6K],function(e,settings,json){var G6K=g0R;G6K+=h3h;var C6K=J4h;C6K+=v2z;C6K+=U1h;C6K+=E4Y.p4h;if(that[a1h][i2a]&&settings[C6K]===$(that[a1h][G6K])[h6a](C5h)){settings[f9a]=that;}})[l5R](t6K+this[a1h][z1a],function(e,settings,json){var Q2z="Update";var f2z="nTa";var g7K=z9h;g7K+=X1h;var J6K=g0R;J6K+=S1h;J6K+=U1h;J6K+=E4Y.p4h;var S6K=f2z;S6K+=S1h;S6K+=U1h;S6K+=E4Y.p4h;if(json&&that[a1h][i2a]&&settings[S6K]===$(that[a1h][J6K])[g7K](C5h)){var e7K=z7h;e7K+=I7h;e7K+=K3h;e7K+=Q2z;that[e7K](json);}});try{var s7K=x2z;s7K+=d9h;this[a1h][s7K]=Editor[n4R][init[n4R]][Y2z](this);}catch(e){var k2z="ind display controller ";var o2z="not f";var F7K=Q5R;F7K+=i7h;F7K+=U1h;F7K+=b1R;var h7K=S6h;h7K+=k6h;h7K+=o2z;h7K+=k2z;throw h7K+init[F7K];}this[p4a](z2z,[]);};Editor[V7K][y7K]=function(){var R2z="addCla";var w2z="eCl";var q7K=A1h;q7K+=s1h;var K7K=I2z;K7K+=E4Y.p4h;var A7K=X3h;A7K+=p2z;var m7K=r2z;m7K+=u7a;m7K+=w2z;m7K+=Z2z;var W7K=C2R;W7K+=d8z;var X7K=H2z;X7K+=G9h;var L7K=X3h;L7K+=R8z;var classesActions=this[L7K][X7K];var action=this[a1h][O7a];var wrapper=$(this[F5R][W7K]);wrapper[m7K]([classesActions[A7K],classesActions[U1a],classesActions[x1R]][d2z](a0R));if(action===K7K){var P7K=r9a;P7K+=K5a;P7K+=c6h;var O7K=W9h;O7K+=U2z;wrapper[O7K](classesActions[P7K]);}else if(action===q7K){var B7K=R2z;B7K+=L9h;wrapper[B7K](classesActions[U1a]);}else if(action===x1R){wrapper[N5R](classesActions[x1R]);}};Editor[T6R][i7K]=function(data,success,error,submitParams){var a0z='?';var j0z="param";var N0z="deleteBody";var n0z="url";var D0z="hift";var b0z="plet";var E0z="complete";var T0z="split";var i0z=/_id_/;var B0z="ndexOf";var q0z=',';var P0z='idSrc';var F0z="ST";var s0z="P";var e0z="js";var g0z="tFie";var S2z="PlainO";var C2z="LE";var c2z="DE";var u2z="teBod";var e9K=u6h;e9K+=z7a;e9K+=u6h;e9K+=p6h;var G7K=e1h;G7K+=M2z;G7K+=u2z;G7K+=x6h;var C7K=c2z;C7K+=C2z;C7K+=n6h;C7K+=g1h;var c7K=G7h;c7K+=E4Y.p4h;var u7K=e1h;u7K+=D6h;u7K+=u6h;var U7K=G2z;U7K+=u6h;var d7K=L1R;d7K+=U1h;d7K+=w8R;d7K+=E4Y.p4h;var H7K=j6h;H7K+=S8z;var Y7K=a1h;Y7K+=t2z;Y7K+=s2R;var a7K=P1a;a7K+=J4h;a7K+=X3h;a7K+=W7R;var l7K=T1R;l7K+=S2z;l7K+=i0a;var j7K=O1h;j7K+=Q2a;j7K+=z5a;var N7K=J2z;N7K+=g0z;N7K+=H9h;var b7K=e0z;b7K+=l5R;var E7K=s0z;E7K+=h0z;E7K+=F0z;var T7K=H2z;T7K+=J4h;var that=this;var action=this[a1h][T7K];var thrown;var opts={type:E7K,dataType:b7K,data:u0R,error:[function(xhr,text,err){thrown=err;}],success:[],complete:[function(xhr,text){var K0z="parseJSON";var A0z="responseJSON";var m0z='null';var W0z="responseText";var L0z="ject";var y0z="isPlainOb";var j4h=204;var n7K=T1R;n7K+=V0z;n7K+=x6h;var D7K=y0z;D7K+=L0z;var json=u0R;if(xhr[X0z]===j4h||xhr[W0z]===m0z){json={};}else{try{json=xhr[A0z]?xhr[A0z]:$[K0z](xhr[W0z]);}catch(e){}}if($[D7K](json)||$[n7K](json)){success(json,xhr[X0z]>=l4h,xhr);}else{error(xhr,text,thrown);}}]};var a;var ajaxSrc=this[a1h][t2a]||this[a1h][O0z];var id=action===Z9a||action===R9a?_pluck(this[a1h][N7K],P0z):u0R;if($[j7K](id)){id=id[d2z](q0z);}if($[l7K](ajaxSrc)&&ajaxSrc[action]){ajaxSrc=ajaxSrc[action];}if(typeof ajaxSrc===a7K){var v7K=N1a;v7K+=t8z;v7K+=S8z;var uri=u0R;var method=u0R;if(this[a1h][v7K]){var x7K=h7a;x7K+=w8R;x7K+=E4Y.p4h;var f7K=O1h;f7K+=B0z;var url=this[a1h][O0z];if(url[b4a]){uri=url[action];}if(uri[f7K](a0R)!==-G5h){var Q7K=a1h;Q7K+=A5R;Q7K+=s1h;a=uri[Q7K](a0R);method=a[C5h];uri=a[G5h];}uri=uri[x7K](i0z,id);}ajaxSrc(method,uri,data,success,error);return;}else if(typeof ajaxSrc===Y7K){var o7K=O1h;o7K+=B0z;if(ajaxSrc[o7K](a0R)!==-G5h){var z7K=j6h;z7K+=h6h;z7K+=U1h;var k7K=X1h;k7K+=m1h;a=ajaxSrc[T0z](a0R);opts[k7K]=a[C5h];opts[z7K]=a[G5h];}else{var I7K=j6h;I7K+=h6h;I7K+=U1h;opts[I7K]=ajaxSrc;}}else{var Z7K=s8z;Z7K+=X1h;Z7K+=B3R;var p7K=k7a;p7K+=q6h;var optsCopy=$[p7K]({},ajaxSrc||{});if(optsCopy[E0z]){var r7K=w5R;r7K+=l3h;r7K+=b0z;r7K+=E4Y.p4h;opts[E0z][P5R](optsCopy[r7K]);delete optsCopy[E0z];}if(optsCopy[G5R]){var w7K=j6h;w7K+=G9h;w7K+=D0z;opts[G5R][w7K](optsCopy[G5R]);delete optsCopy[G5R];}opts=$[Z7K]({},opts,optsCopy);}opts[n0z]=opts[H7K][d7K](i0z,id);if(opts[U7K]){var M7K=s8z;M7K+=X1h;M7K+=E4Y.p4h;M7K+=q6h;var R7K=e1h;R7K+=u6h;R7K+=X1h;R7K+=u6h;var isFn=typeof opts[R7K]===E4Y.U4h;var newData=isFn?opts[b0R](data):opts[b0R];data=isFn&&newData?newData:$[M7K](p8R,data,newData);}opts[u7K]=data;if(opts[c7K]===C7K&&(opts[N0z]===undefined||opts[G7K]===p8R)){var g9K=G2z;g9K+=u6h;var J7K=j6h;J7K+=h6h;J7K+=U1h;var S7K=j6h;S7K+=S8z;var t7K=G2z;t7K+=u6h;var params=$[j0z](opts[t7K]);opts[S7K]+=opts[J7K][l0z](a0z)===-G5h?a0z+params:O1R+params;delete opts[g9K];}$[e9K](opts);};Editor[s9K][p7R]=function(target,style,time,callback){var F9K=k6h;F9K+=O1h;F9K+=l3h;F9K+=H1h;var h9K=P9h;h9K+=J4h;if($[h9K][F9K]){target[v0z]()[M1R](style,time,callback);}else{target[S0R](style);if(typeof time===E4Y.U4h){time[O5R](target);}else if(callback){var V9K=W4a;V9K+=f0z;callback[V9K](target);}}};Editor[y9K][L9K]=function(){var o0z="pend";var x0z="nfo";var Q0z="mI";var q9K=V3h;q9K+=h6h;q9K+=l3h;var P9K=Q0a;P9K+=Q0z;P9K+=x0z;var O9K=u6h;O9K+=l4R;O9K+=e1h;var K9K=m8a;K9K+=q6h;var A9K=V3h;A9K+=E4Y.k4h;A9K+=X1h;A9K+=d9h;var m9K=Y0z;m9K+=o0z;var W9K=q9R;W9K+=d9h;var X9K=e1h;X9K+=j9R;var dom=this[X9K];$(dom[W9K])[m9K](dom[n9a]);$(dom[A9K])[K9K](dom[J1a])[O9K](dom[w5a]);$(dom[k0z])[G6R](dom[P9K])[G6R](dom[q9K]);};Editor[T6R][z0z]=function(){var r0z='preBlur';var p0z="onBlur";var E9K=X3h;E9K+=B5a;var i9K=P9h;i9K+=g3h;i9K+=R7a;i9K+=l5R;var B9K=A1h;B9K+=s1h;B9K+=I0z;var opts=this[a1h][B9K];var onBlur=opts[p0z];if(this[p4a](r0z)===k8R){return;}if(typeof onBlur===i9K){onBlur(this);}else if(onBlur===w0z){var T9K=Z0z;T9K+=S1h;T9K+=H0z;T9K+=X1h;this[T9K]();}else if(onBlur===E9K){var b9K=w7h;b9K+=w6R;b9K+=N7R;this[b9K]();}};Editor[T6R][D9K]=function(){var d0z="emoveClas";var a9K=C4R;a9K+=L9h;a9K+=m2R;var l9K=h6h;l9K+=d0z;l9K+=a1h;var j9K=F3h;j9K+=F8a;j9K+=d9h;var N9K=e1h;N9K+=E4Y.k4h;N9K+=l3h;var n9K=Z9h;n9K+=i3h;if(!this[a1h]){return;}var errorClass=this[d5R][n9K][G5R];var fields=this[a1h][M2a];$(U0z+errorClass,this[N9K][j9K])[l9K](errorClass);$[T8R](fields,function(name,field){field[G5R](h8R)[F5a](h8R);});this[G5R](h8R)[a9K](h8R);};Editor[T6R][E4a]=function(submitComplete){var C0z="oseI";var c0z="closeCb";var u0z='preClose';var M0z="seIc";var o9K=w6R;o9K+=E4Y.k4h;o9K+=a1h;o9K+=E4Y.p4h;var Y9K=w7h;Y9K+=R4a;Y9K+=E4Y.p4h;Y9K+=Z1R;var x9K=p5R;x9K+=R0z;x9K+=E4Y.p4h;x9K+=e1h;var Q9K=W9R;Q9K+=x6h;var v9K=w6R;v9K+=E4Y.k4h;v9K+=M0z;v9K+=S1h;if(this[p4a](u0z)===k8R){return;}if(this[a1h][c0z]){this[a1h][c0z](submitComplete);this[a1h][c0z]=u0R;}if(this[a1h][v9K]){var f9K=w6R;f9K+=C0z;f9K+=X3h;f9K+=S1h;this[a1h][G0z]();this[a1h][f9K]=u0R;}$(Q9K)[o1a](t0z);this[a1h][x9K]=k8R;this[Y9K](o9K);};Editor[T6R][A5a]=function(fn){var k9K=X3h;k9K+=B5a;k9K+=S6h;k9K+=S1h;this[a1h][k9K]=fn;};Editor[T6R][x4a]=function(arg1,arg2,arg3,arg4){var J0z="main";var S0z="mOptio";var p9K=Q0a;p9K+=S0z;p9K+=G9h;var I9K=P6h;I9K+=B3R;var that=this;var title;var buttons;var show;var opts;if($[u4R](arg1)){opts=arg1;}else if(typeof arg1===b0a){show=arg1;opts=arg2;}else{title=arg1;buttons=arg2;show=arg3;opts=arg4;}if(show===undefined){show=p8R;}if(title){var z9K=p1h;z9K+=X1h;z9K+=w9h;that[z9K](title);}if(buttons){that[w5a](buttons);}return{opts:$[I9K]({},this[a1h][p9K][J0z],opts),maybeOpen:function(){if(show){var r9K=E4Y.k4h;r9K+=i7h;r9K+=E4Y.p4h;r9K+=J4h;that[r9K]();}}};};Editor[T6R][g5z]=function(name){var s5z="urce";var e5z="So";var H9K=G2z;H9K+=u6h;H9K+=e5z;H9K+=s5z;var Z9K=X3h;Z9K+=h5z;var w9K=H7h;w9K+=x6h;w9K+=E7h;var args=Array[w9K][K5R][Z9K](arguments);args[l2z]();var fn=this[a1h][H9K][name];if(fn){return fn[b6R](this,args);}};Editor[d9K][v7a]=function(includeFields){var D5z="endTo";var m5z="include";var W5z="ludeFiel";var L5z="rmContent";var V5z="layO";var F5z="isplayed";var P3K=w8R;P3K+=X1h;P3K+=O1h;P3K+=l5R;var O3K=e1h;O3K+=F5z;var K3K=Q5R;K3K+=i7h;K3K+=V5z;K3K+=f2a;var m3K=w4a;m3K+=V0R;var S9K=K5a;S9K+=a4R;var t9K=e1h;t9K+=E4Y.p4h;t9K+=g0R;t9K+=a4R;var G9K=y5z;G9K+=g1R;var u9K=l3h;u9K+=u6h;u9K+=O1h;u9K+=J4h;var M9K=l3h;M9K+=E4Y.k4h;M9K+=e1h;M9K+=E4Y.p4h;var R9K=O4a;R9K+=d9h;var U9K=V3h;U9K+=L5z;var that=this;var formContent=$(this[F5R][U9K]);var fields=this[a1h][M2a];var order=this[a1h][R9K];var template=this[a1h][O9a];var mode=this[a1h][M9K]||u9K;if(includeFields){var c9K=O1h;c9K+=X5z;c9K+=W5z;c9K+=I1R;this[a1h][c9K]=includeFields;}else{var C9K=m5z;C9K+=L6a;includeFields=this[a1h][C9K];}formContent[G9K]()[t9K]();$[S9K](order,function(i,fieldOrName){var b5z="nod";var E5z='editor-field[name="';var B5z="-template=\"";var q5z="ata-editor";var K5z="In";var A5z="_weak";var g3K=A5z;g3K+=K5z;g3K+=V0z;g3K+=x6h;var J9K=c4R;J9K+=l3h;J9K+=E4Y.p4h;var name=fieldOrName instanceof Editor[r8R]?fieldOrName[J9K]():fieldOrName;if(that[g3K](name,includeFields)!==-G5h){var e3K=w4a;e3K+=V0R;if(template&&mode===e3K){var L3K=Z6R;L3K+=E7h;L3K+=J4h;L3K+=e1h;var y3K=V2R;y3K+=O5z;var V3K=P5z;V3K+=q5z;V3K+=B5z;var F3K=P9h;F3K+=O1h;F3K+=q6h;var h3K=i5z;h3K+=T5z;var s3K=P9h;s3K+=O1h;s3K+=J4h;s3K+=e1h;template[s3K](E5z+name+i8R)[h3K](fields[name][N2a]());template[F3K](V3K+name+y3K)[L3K](fields[name][N2a]());}else{var W3K=b5z;W3K+=E4Y.p4h;var X3K=m8a;X3K+=J4h;X3K+=e1h;formContent[X3K](fields[name][W3K]());}}});if(template&&mode===m3K){var A3K=Z0a;A3K+=D5z;template[A3K](formContent);}this[p4a](K3K,[this[a1h][O3K],this[a1h][P3K],formContent]);};Editor[q3K][B3K]=function(items,editFields,type,formOptions,setupDone){var w5z='initEdit';var l5z="ier";var j5z="ice";var N5z="_displayReor";var Z3K=c7h;Z3K+=n5z;var w3K=N5z;w3K+=b2a;var I3K=w9h;I3K+=J4h;I3K+=k3a;I3K+=N6h;var z3K=a1h;z3K+=U1h;z3K+=j5z;var D3K=Y9h;D3K+=P1h;var b3K=Y3R;b3K+=d4R;var E3K=e1h;E3K+=E4Y.k4h;E3K+=l3h;var T3K=u6h;T3K+=I8R;T3K+=p7h;T3K+=J4h;var i3K=Y9h;i3K+=p5R;i3K+=P9h;i3K+=l5z;var that=this;var fields=this[a1h][M2a];var usedFields=[];var includeInOrder;var editData={};this[a1h][U2a]=editFields;this[a1h][a5z]=editData;this[a1h][i3K]=items;this[a1h][T3K]=U1a;this[E3K][p6a][A8a][n4R]=b3K;this[a1h][D3K]=type;this[k4a]();$[T8R](fields,function(name,field){var f5z="eset";var v5z="ultiR";var o3K=c4a;o3K+=X1h;o3K+=N6h;var n3K=l3h;n3K+=v5z;n3K+=f5z;field[n3K]();includeInOrder=k8R;editData[name]={};$[T8R](editFields,function(idSrc,edit){var z5z="playFiel";var k5z="displayFiel";var o5z="omData";var Y5z="Fr";var N3K=P9h;N3K+=O1h;N3K+=f4a;if(edit[N3K][name]){var v3K=h6h;v3K+=W8a;var a3K=a1h;a3K+=X3h;a3K+=e7R;a3K+=E4Y.p4h;var l3K=Q5z;l3K+=x5z;l3K+=x6h;var j3K=e3a;j3K+=U1h;j3K+=Y5z;j3K+=o5z;var val=field[j3K](edit[b0R]);editData[name][idSrc]=val===u0R?h8R:$[l3K](val)?val[K5R]():val;if(!formOptions||formOptions[a3K]===v3K){var Q3K=k5z;Q3K+=I1R;var f3K=e1h;f3K+=k5a;field[I4a](idSrc,val!==undefined?val:field[f3K]());if(!edit[a6a]||edit[Q3K][name]){includeInOrder=p8R;}}else{var Y3K=j1R;Y3K+=b1R;Y3K+=r8R;Y3K+=a1h;var x3K=Q5R;x3K+=z5z;x3K+=I1R;if(!edit[x3K]||edit[Y3K][name]){field[I4a](idSrc,val!==undefined?val:field[E5R]());includeInOrder=p8R;}}}});if(field[s4R]()[o3K]!==C5h&&includeInOrder){var k3K=i7h;k3K+=Z6h;k3K+=N6h;usedFields[k3K](name);}});var currOrder=this[C2a]()[z3K]();for(var i=currOrder[I3K]-G5h;i>=C5h;i--){var p3K=O1h;p3K+=J4h;p3K+=I5z;p3K+=x2a;if($[p3K](currOrder[i][p5z](),usedFields)===-G5h){var r3K=r5z;r3K+=U1h;r3K+=O1h;r3K+=W1R;currOrder[r3K](i,G5h);}}this[w3K](currOrder);this[Z3K](w5z,[_pluck(editFields,C7a)[C5h],_pluck(editFields,G7a)[C5h],items,type],function(){var Z5z="MultiEdit";var d3K=O1h;d3K+=J4h;d3K+=s1h;d3K+=Z5z;var H3K=c7h;H3K+=n5z;that[H3K](d3K,[editFields,items,type],function(){setupDone();});});};Editor[T6R][p4a]=function(trigger,args,promiseComplete){var g4z="sult";var J5z="sul";var S5z="Event";var t5z="triggerHandler";var C5z='pre';var c5z="ndler";var u5z="Ha";var M5z="igger";var R5z="xOf";var d5z="resu";var H5z="sAr";var U3K=O1h;U3K+=H5z;U3K+=h6h;U3K+=b1R;if(!args){args=[];}if($[U3K](trigger)){for(var i=C5h,ien=trigger[o8R];i<ien;i++){this[p4a](trigger[i],args);}}else{var s8I=h6h;s8I+=R9h;s8I+=M8R;s8I+=X1h;var c3K=d5z;c3K+=U1h;c3K+=X1h;var u3K=U5z;u3K+=R5z;var M3K=g3a;M3K+=M5z;M3K+=u5z;M3K+=c5z;var R3K=g1h;R3K+=t4h;R3K+=J4h;R3K+=X1h;var e=$[R3K](trigger);$(this)[M3K](e,args);if(trigger[u3K](C5z)===C5h&&e[c3K]===k8R){var C3K=S6h;C3K+=k6h;C3K+=G5z;C3K+=A1h;$(this)[t5z]($[S5z](trigger+C3K),args);}if(promiseComplete){var g8I=X1h;g8I+=q2a;g8I+=J4h;var J3K=d0a;J3K+=j6h;J3K+=U1h;J3K+=X1h;var S3K=z8R;S3K+=E4Y.I4h;var t3K=Z1h;t3K+=J5z;t3K+=X1h;var G3K=Z1h;G3K+=g4z;if(e[G3K]&&typeof e[t3K]===S3K&&e[J3K][g8I]){var e8I=d0a;e8I+=T5R;e[e8I][n1a](promiseComplete);}else{promiseComplete();}}return e[s8I];}};Editor[T6R][D7a]=function(input){var V4z="toLowerCase";var F4z="ubs";var h4z=/^on([A-Z])/;var s4z="pli";var L8I=e4z;L8I+=V0R;var F8I=c4a;F8I+=Q8R;var h8I=a1h;h8I+=s4z;h8I+=X1h;var name;var names=input[h8I](a0R);for(var i=C5h,ien=names[F8I];i<ien;i++){var V8I=l3h;V8I+=D6h;V8I+=X3h;V8I+=N6h;name=names[i];var onStyle=name[V8I](h4z);if(onStyle){var y8I=a1h;y8I+=F4z;y8I+=t2z;y8I+=s2R;name=onStyle[G5h][V4z]()+name[y8I](S5h);}names[i]=name;}return names[L8I](a0R);};Editor[T6R][y4z]=function(node){var X8I=K5a;X8I+=X3h;X8I+=N6h;var foundField=u0R;$[X8I](this[a1h][M2a],function(name,field){var m8I=L4z;m8I+=o7h;m8I+=X1h;m8I+=N6h;var W8I=J4h;W8I+=E4Y.k4h;W8I+=e1h;W8I+=E4Y.p4h;if($(field[W8I]())[T1a](node)[m8I]){foundField=field;}});return foundField;};Editor[T6R][A8I]=function(fieldNames){var X4z="isArr";var O8I=X4z;O8I+=b1R;if(fieldNames===undefined){var K8I=P4a;K8I+=a1h;return this[K8I]();}else if(!$[O8I](fieldNames)){return[fieldNames];}return fieldNames;};Editor[P8I][W4z]=function(fieldsIn,focus){var P4z=/^jq:/;var O4z='div.DTE ';var K4z='jq:';var m4z="setFoc";var E8I=m4z;E8I+=Z6h;var i8I=J4h;i8I+=j6h;i8I+=l3h;i8I+=A4z;var q8I=l3h;q8I+=u6h;q8I+=i7h;var that=this;var field;var fields=$[q8I](fieldsIn,function(fieldOrName){var B8I=j1h;B8I+=E4Y.p4h;B8I+=H9h;return typeof fieldOrName===m1R?that[a1h][B8I][fieldOrName]:fieldOrName;});if(typeof focus===i8I){field=fields[focus];}else if(focus){if(focus[l0z](K4z)===C5h){field=$(O4z+focus[P1R](P4z,h8R));}else{var T8I=Z9h;T8I+=U1h;T8I+=I1R;field=this[a1h][T8I][focus];}}this[a1h][E8I]=field;if(field){field[m4R]();}};Editor[b8I][M0a]=function(opts){var I4z="key";var k4z="messag";var o4z="tit";var Y4z="editCount";var x4z="kg";var Q4z="onBac";var f4z="OnBackground";var v4z="blu";var a4z="blurOnBackground";var l4z="onReturn";var j4z="ub";var N4z="submitOnReturn";var n4z="onBl";var D4z="submitOnBlur";var b4z="nComplete";var E4z="closeOnComplete";var T4z="dteInline";var i4z="ri";var B4z="boole";var O2I=w6R;O2I+=E4Y.k4h;O2I+=W3h;O2I+=q4z;var r8I=E4Y.k4h;r8I+=J4h;var I8I=B4z;I8I+=k6h;var o8I=z3R;o8I+=i4z;o8I+=s2R;var Q8I=a1h;Q8I+=g3a;Q8I+=O1h;Q8I+=s2R;var f8I=X1h;f8I+=s1h;f8I+=U1h;f8I+=E4Y.p4h;var D8I=C4h;D8I+=T4z;var that=this;var inlineCount=__inlineCounter++;var namespace=D8I+inlineCount;if(opts[E4z]!==undefined){var n8I=E4Y.k4h;n8I+=b4z;opts[n8I]=opts[E4z]?N6R:S4R;}if(opts[D4z]!==undefined){var N8I=n4z;N8I+=S9h;opts[N8I]=opts[D4z]?w0z:N6R;}if(opts[N4z]!==undefined){var j8I=a1h;j8I+=j4z;j8I+=l3h;j8I+=s1h;opts[l4z]=opts[N4z]?j8I:S4R;}if(opts[a4z]!==undefined){var v8I=J4h;v8I+=f3R;var a8I=v4z;a8I+=h6h;a8I+=f4z;var l8I=Q4z;l8I+=x4z;l8I+=k8a;opts[l8I]=opts[a8I]?e0a:v8I;}this[a1h][J2a]=opts;this[a1h][Y4z]=inlineCount;if(typeof opts[f8I]===Q8I||typeof opts[L5a]===E4Y.U4h){var Y8I=X1h;Y8I+=O1h;Y8I+=b9h;Y8I+=E4Y.p4h;var x8I=o4z;x8I+=w9h;this[x8I](opts[Y8I]);opts[L5a]=p8R;}if(typeof opts[F5a]===o8I||typeof opts[F5a]===E4Y.U4h){var z8I=k4z;z8I+=E4Y.p4h;var k8I=k4z;k8I+=E4Y.p4h;this[k8I](opts[F5a]);opts[z8I]=p8R;}if(typeof opts[w5a]!==I8I){var p8I=W5a;p8I+=E4Y.k4h;p8I+=J4h;p8I+=a1h;this[p8I](opts[w5a]);opts[w5a]=p8R;}$(document)[r8I](z4z+namespace,function(e){var w4z="ReturnSubm";var Z8I=p5R;Z8I+=H1a;Z8I+=e1h;var w8I=I4z;w8I+=S6h;w8I+=E4Y.k4h;w8I+=P1h;if(e[w8I]===y4h&&that[a1h][Z8I]){var el=$(document[p4z]);if(el){var H8I=r4z;H8I+=w4z;H8I+=s1h;var field=that[y4z](el);if(field[H8I](el)){e[X4a]();}}}});$(document)[l5R](s4a+namespace,function(e){var y1z="ocus";var V1z="ke";var F1z="Code";var s1z="sc";var e1z="onEsc";var g1z="prev";var J4z="uncti";var S4z="onE";var t4z="nEs";var G4z="ntDefault";var C4z="preve";var c4z="Return";var u4z="canReturnSubmit";var M4z="romNode";var R4z="_fieldF";var U4z="mit";var d4z="anReturnSub";var H4z="layed";var Z4z=".DTE_Form_Butt";var E4h=39;var T4h=37;var V2I=L4z;V2I+=k3a;V2I+=N6h;var F2I=Z4z;F2I+=m5a;var U8I=N7a;U8I+=H4z;var d8I=I4z;d8I+=S6h;d8I+=a3h;var el=$(document[p4z]);if(e[d8I]===y4h&&that[a1h][U8I]){var M8I=X3h;M8I+=d4z;M8I+=U4z;var R8I=R4z;R8I+=M4z;var field=that[R8I](el);if(field&&typeof field[u4z]===E4Y.U4h&&field[M8I](el)){var c8I=P9h;c8I+=g3h;c8I+=R7a;c8I+=l5R;var u8I=l5R;u8I+=c4z;if(opts[l4z]===w0z){e[X4a]();that[p1R]();}else if(typeof opts[u8I]===c8I){var C8I=C4z;C8I+=G4z;e[C8I]();opts[l4z](that,e);}}}else if(e[F4a]===O4h){var s2I=E4Y.k4h;s2I+=t4z;s2I+=X3h;var g2I=s0a;g2I+=a1h;g2I+=E4Y.p4h;var J8I=S4z;J8I+=a1h;J8I+=X3h;var t8I=P9h;t8I+=J4z;t8I+=l5R;var G8I=g1z;G8I+=E4Y.p4h;G8I+=G4z;e[G8I]();if(typeof opts[e1z]===t8I){var S8I=S4z;S8I+=s1z;opts[S8I](that,e);}else if(opts[J8I]===e0a){that[h1z]();}else if(opts[e1z]===g2I){var e2I=X3h;e2I+=B5a;that[e2I]();}else if(opts[s2I]===w0z){var h2I=Z0z;h2I+=S1h;h2I+=H0z;h2I+=X1h;that[h2I]();}}else if(el[A7a](F2I)[V2I]){var m2I=I4z;m2I+=F1z;var y2I=V1z;y2I+=x6h;y2I+=F1z;if(e[y2I]===T4h){var W2I=P9h;W2I+=y1z;var X2I=S1h;X2I+=c9h;X2I+=s7a;var L2I=i7h;L2I+=h6h;L2I+=E4Y.p4h;L2I+=E9h;el[L2I](X2I)[W2I]();}else if(e[m2I]===E4h){var K2I=S1h;K2I+=c9h;K2I+=C9h;K2I+=J4h;var A2I=I0a;A2I+=p6h;A2I+=X1h;el[A2I](K2I)[m4R]();}}});this[a1h][O2I]=function(){var L1z="down";var q2I=I4z;q2I+=L1z;var P2I=f7R;P2I+=P9h;$(document)[P2I](q2I+namespace);$(document)[o1a](s4a+namespace);};return namespace;};Editor[T6R][B2I]=function(direction,action,data){var X1z="legacyAjax";var i2I=W3h;i2I+=J4h;i2I+=e1h;if(!this[a1h][X1z]||!data){return;}if(direction===i2I){var T2I=X3h;T2I+=h6h;T2I+=E4Y.p4h;T2I+=H1h;if(action===T2I||action===Z9a){var b2I=e1h;b2I+=u6h;b2I+=X1h;b2I+=u6h;var E2I=e1h;E2I+=D6h;E2I+=u6h;var id;$[T8R](data[E2I],function(rowId,values){var W1z='Editor: Multi-row editing is not supported by the legacy Ajax data format';if(id!==undefined){throw W1z;}id=rowId;});data[b0R]=data[b2I][id];if(action===Z9a){var D2I=O1h;D2I+=e1h;data[D2I]=id;}}else{var N2I=e1h;N2I+=u6h;N2I+=X1h;N2I+=u6h;var n2I=O1h;n2I+=e1h;data[n2I]=$[s6a](data[b0R],function(values,id){return id;});delete data[N2I];}}else{var a2I=J3h;a2I+=X1h;a2I+=u6h;var j2I=h6h;j2I+=E4Y.k4h;j2I+=F3h;if(!data[b0R]&&data[j2I]){var l2I=J3h;l2I+=g0R;data[l2I]=[data[a2a]];}else if(!data[a2I]){data[b0R]=[];}}};Editor[v2I][f2I]=function(json){var that=this;if(json[m1z]){var Q2I=E4Y.p4h;Q2I+=u6h;Q2I+=a4R;$[Q2I](this[a1h][M2a],function(name,field){var O1z="pd";var K1z="pdat";var A1z="ptions";var x2I=E4Y.k4h;x2I+=A1z;if(json[x2I][name]!==undefined){var o2I=j6h;o2I+=K1z;o2I+=E4Y.p4h;var Y2I=p1a;Y2I+=e1h;var fieldInst=that[Y2I](name);if(fieldInst&&fieldInst[o2I]){var k2I=j6h;k2I+=O1z;k2I+=D6h;k2I+=E4Y.p4h;fieldInst[k2I](json[m1z][name]);}}});}};Editor[z2I][I2I]=function(el,msg){var E1z="adeIn";var T1z="isp";var i1z="deO";var P1z="tab";var r2I=a8a;r2I+=c6h;var p2I=P9h;p2I+=J4h;var canAnimate=$[p2I][r2I]?p8R:k8R;if(typeof msg===E4Y.U4h){var w2I=P1z;w2I+=w9h;msg=msg(this,new DataTable[q1z](this[a1h][w2I]));}el=$(el);if(canAnimate){var Z2I=z3R;Z2I+=E4Y.k4h;Z2I+=i7h;el[Z2I]();}if(!msg){var H2I=j1R;H2I+=u6h;H2I+=B1z;H2I+=e1h;if(this[a1h][H2I]&&canAnimate){var d2I=n3h;d2I+=i1z;d2I+=j6h;d2I+=X1h;el[d2I](function(){var U2I=y7h;U2I+=l3h;U2I+=U1h;el[U2I](h8R);});}else{var M2I=e1h;M2I+=T1z;M2I+=l6R;var R2I=X3h;R2I+=a1h;R2I+=a1h;el[J1R](h8R)[R2I](M2I,S4R);}}else{if(this[a1h][Z1a]&&canAnimate){var c2I=P9h;c2I+=E1z;var u2I=y7h;u2I+=H1R;el[u2I](msg)[c2I]();}else{var C2I=e1h;C2I+=O1h;C2I+=L3R;C2I+=b1R;el[J1R](msg)[S0R](C2I,t4R);}}};Editor[G2I][t2I]=function(){var n1z="tiInfoShown";var D1z="ude";var b1z="inc";var J2I=w9h;J2I+=C3a;var S2I=b1z;S2I+=U1h;S2I+=D1z;S2I+=L6a;var fields=this[a1h][M2a];var include=this[a1h][S2I];var show=p8R;var state;if(!include){return;}for(var i=C5h,ien=include[J2I];i<ien;i++){var g0I=d8R;g0I+=n1z;var field=fields[include[i]];var multiEditable=field[o1R]();if(field[z4R]()&&multiEditable&&show){state=p8R;show=k8R;}else if(field[z4R]()&&!multiEditable){state=p8R;}else{state=k8R;}fields[include[i]][g0I](state);}};Editor[e0I][Q7a]=function(type){var Q1z='submit.editor-internal';var f1z="captureFocus";var v1z="ler";var a1z="displayControl";var l1z="it.editor-internal";var j1z="ltiIn";var O0I=u6h;O0I+=R7a;O0I+=l5R;var K0I=E4Y.k4h;K0I+=i7h;K0I+=E4Y.p4h;K0I+=J4h;var A0I=w7h;A0I+=E4Y.p4h;A0I+=N1z;A0I+=X1h;var m0I=f7h;m0I+=j6h;m0I+=j1z;m0I+=V3h;var F0I=S2a;F0I+=l1z;var h0I=E4Y.k4h;h0I+=J4h;var s0I=a1z;s0I+=v1z;var that=this;var focusCapture=this[a1h][s0I][f1z];if(focusCapture===undefined){focusCapture=p8R;}$(this[F5R][p6a])[o1a](Q1z)[h0I](F0I,function(e){var x1z="eventDef";var V0I=A7h;V0I+=x1z;V0I+=u6h;V0I+=T5R;e[V0I]();});if(focusCapture&&(type===o4a||type===Y1z)){var y0I=E4Y.k4h;y0I+=J4h;$(f5R)[y0I](t0z,function(){var r1z="setFocus";var p1z="ocu";var I1z="tF";var z1z='.DTE';var k1z="Element";var X0I=B3a;X0I+=n6h;X0I+=g1h;X0I+=F6h;var L0I=o1z;L0I+=k1z;if($(document[L0I])[A7a](z1z)[o8R]===C5h&&$(document[p4z])[A7a](X0I)[o8R]===C5h){var W0I=W3h;W0I+=I1z;W0I+=p1z;W0I+=a1h;if(that[a1h][W0I]){that[a1h][r1z][m4R]();}}});}this[m0I]();this[A0I](K0I,[type,this[a1h][O0I]]);return p8R;};Editor[P0I][q0I]=function(type){var U1z='cancelOpen';var d1z="cInfo";var H1z="Dyna";var Z1z="_clear";var w1z="mod";var i0I=w8R;i0I+=W7R;var B0I=Y0z;B0I+=H4a;if(this[p4a](B0I,[type,this[a1h][i0I]])===k8R){var D0I=y0a;D0I+=t9h;D0I+=E4Y.p4h;var b0I=w1z;b0I+=E4Y.p4h;var E0I=u6h;E0I+=I8R;E0I+=p7h;E0I+=J4h;var T0I=Z1z;T0I+=H1z;T0I+=H0z;T0I+=d1z;this[T0I]();this[p4a](U1z,[type,this[a1h][E0I]]);if((this[a1h][Y4a]===C6a||this[a1h][b0I]===D0I)&&this[a1h][G0z]){var n0I=s0a;n0I+=W3h;n0I+=q4z;this[a1h][n0I]();}this[a1h][G0z]=u0R;return k8R;}this[a1h][Z1a]=type;return p8R;};Editor[N0I][A9a]=function(processing){var C1z='div.DTE';var c1z="oggleClass";var u1z="ssi";var R1z="ocessing";var v0I=A7h;v0I+=R1z;var a0I=M1z;a0I+=u1z;a0I+=s2R;var l0I=X1h;l0I+=c1z;var j0I=s6R;j0I+=W3h;j0I+=a1h;var procClass=this[j0I][G4R][o1z];$([C1z,this[F5R][y7R]])[l0I](procClass,processing);this[a1h][a0I]=processing;this[p4a](v0I,[processing]);};Editor[T6R][K9a]=function(successCallback,errorCallback,formatdata,hide){var j6z="_ajax";var N6z='preSubmit';var n6z='send';var D6z="_legacyAjax";var b6z="omplete";var E6z="nC";var i6z="Comp";var B6z="lete";var P6z="submitCo";var K6z='allIfChanged';var s6z="dbTable";var g6z="aSource";var J1z="ditCount";var S1z="modi";var t1z="ubmitT";var e5I=G1z;e5I+=t1z;e5I+=x5R;e5I+=w9h;var g5I=u6h;g5I+=z7a;g5I+=u6h;g5I+=p6h;var J0I=P6h;J0I+=B3R;var I0I=E4Y.p4h;I0I+=t6h;var k0I=J8z;k0I+=u6h;k0I+=t9h;k0I+=E4Y.p4h;var o0I=w8R;o0I+=W7R;var Y0I=Z0z;Y0I+=S1h;Y0I+=l3h;Y0I+=s1h;var x0I=S1z;x0I+=Z9h;x0I+=h6h;var Q0I=E4Y.p4h;Q0I+=J1z;var f0I=J3h;f0I+=X1h;f0I+=g6z;var that=this;var i,iLen,eventRet,errorNodes;var changed=k8R,allData={},changedData={};var setBuilder=DataTable[P6h][e6z][l0R];var dataSource=this[a1h][f0I];var fields=this[a1h][M2a];var editCount=this[a1h][Q0I];var modifier=this[a1h][x0I];var editFields=this[a1h][U2a];var editData=this[a1h][a5z];var opts=this[a1h][J2a];var changedSubmit=opts[Y0I];var submitParamsLocal;var action=this[a1h][o0I];var submitParams={"action":action,"data":{}};if(this[a1h][k0I]){var z0I=g0R;z0I+=h3h;submitParams[z0I]=this[a1h][s6z];}if(action===b4a||action===I0I){$[T8R](editFields,function(idSrc,edit){var F6z="tyObject";var h6z="sEmp";var M0I=O1h;M0I+=h6z;M0I+=F6z;var p0I=E4Y.p4h;p0I+=u6h;p0I+=X3h;p0I+=N6h;var allRowData={};var changedRowData={};$[p0I](fields,function(name,field){var m6z='-many-count';var W6z=/\[.*$/;var X6z='[]';var L6z="dexO";var y6z="mpa";var V6z="submittable";var r0I=P9h;r0I+=l4a;r0I+=I1R;if(edit[r0I][name]&&field[V6z]()){var R0I=w5R;R0I+=y6z;R0I+=h6h;R0I+=E4Y.p4h;var U0I=E4Y.p4h;U0I+=p5R;U0I+=X1h;var H0I=V0R;H0I+=L6z;H0I+=P9h;var Z0I=Q5z;Z0I+=x5z;Z0I+=x6h;var multiGet=field[i7a]();var builder=setBuilder(name);if(multiGet[idSrc]===undefined){var w0I=J3h;w0I+=g0R;var originalVal=field[n0R](edit[w0I]);builder(allRowData,originalVal);return;}var value=multiGet[idSrc];var manyBuilder=$[Z0I](value)&&name[H0I](X6z)!==-G5h?setBuilder(name[P1R](W6z,h8R)+m6z):u0R;builder(allRowData,value);if(manyBuilder){var d0I=U1h;d0I+=f8R;d0I+=X1h;d0I+=N6h;manyBuilder(allRowData,value[d0I]);}if(action===U0I&&(!editData[name]||!field[R0I](value,editData[name][idSrc]))){builder(changedRowData,value);changed=p8R;if(manyBuilder){manyBuilder(changedRowData,value[o8R]);}}}});if(!$[A6z](allRowData)){allData[idSrc]=allRowData;}if(!$[M0I](changedRowData)){changedData[idSrc]=changedRowData;}});if(action===E2a||changedSubmit===j6R||changedSubmit===K6z&&changed){submitParams[b0R]=allData;}else if(changedSubmit===O6z&&changed){submitParams[b0R]=changedData;}else{var G0I=P6z;G0I+=q6z;G0I+=B6z;var C0I=c7h;C0I+=E9h;C0I+=D3R;var u0I=l5R;u0I+=i6z;u0I+=B6z;this[a1h][O7a]=u0R;if(opts[T6z]===N6R&&(hide===undefined||hide)){this[E4a](k8R);}else if(typeof opts[u0I]===E4Y.U4h){var c0I=E4Y.k4h;c0I+=E6z;c0I+=b6z;opts[c0I](this);}if(successCallback){successCallback[O5R](this);}this[A9a](k8R);this[C0I](G0I);return;}}else if(action===x1R){var t0I=E4Y.p4h;t0I+=u6h;t0I+=X3h;t0I+=N6h;$[t0I](editFields,function(idSrc,edit){var S0I=J3h;S0I+=g0R;submitParams[S0I][idSrc]=edit[b0R];});}this[D6z](n6z,action,submitParams);submitParamsLocal=$[J0I](p8R,{},submitParams);if(formatdata){formatdata(submitParams);}if(this[p4a](N6z,[submitParams,action])===k8R){this[A9a](k8R);return;}var submitWire=this[a1h][g5I]||this[a1h][O0z]?this[j6z]:this[e5I];submitWire[O5R](this,submitParams,function(json,notGood,xhr){var a6z="uc";var l6z="_submitS";var s5I=l6z;s5I+=a6z;s5I+=W1R;s5I+=L9h;that[s5I](json,notGood,submitParams,submitParamsLocal,that[a1h][O7a],editCount,hide,successCallback,errorCallback,xhr);},function(xhr,err,thrown){var v6z="_submitError";var h5I=w8R;h5I+=W7R;that[v6z](xhr,err,thrown,errorCallback,submitParams,that[a1h][h5I]);},submitParams);};Editor[F5I][f6z]=function(data,success,error,submitParams){var I6z="mai";var z6z="indivi";var k6z="odifi";var o6z="dSr";var Y6z="ectDataFn";var x6z="tObj";var Q6z="fnSe";var A5I=r2z;A5I+=u7a;A5I+=E4Y.p4h;var m5I=q0R;m5I+=b6h;m5I+=h6h;m5I+=X3h;var W5I=w7h;W5I+=Q6z;W5I+=x6z;W5I+=Y6z;var X5I=E4Y.k4h;X5I+=V1h;X5I+=i7h;X5I+=O1h;var L5I=E4Y.p4h;L5I+=p6h;L5I+=X1h;var y5I=O1h;y5I+=o6z;y5I+=X3h;var V5I=E4Y.p4h;V5I+=D3h;var that=this;var action=data[O7a];var out={data:[]};var idGet=DataTable[V5I][e6z][N0R](this[a1h][y5I]);var idSet=DataTable[L5I][X5I][W5I](this[a1h][m5I]);if(action!==A5I){var T5I=e1h;T5I+=u6h;T5I+=X1h;T5I+=u6h;var i5I=h9a;i5I+=N6h;var B5I=l3h;B5I+=k6z;B5I+=d9h;var q5I=z6z;q5I+=e1h;q5I+=j6h;q5I+=B1a;var P5I=Y9h;P5I+=p5R;P5I+=j1h;P5I+=d9h;var O5I=p1a;O5I+=e1h;O5I+=a1h;var K5I=I6z;K5I+=J4h;var originalData=this[a1h][Y4a]===K5I?this[g5z](O5I,this[P5I]()):this[g5z](q5I,this[B5I]());$[i5I](data[T5I],function(key,vals){var Z6z="_fnExtend";var w6z="bleExt";var r6z="dataT";var n5I=J3h;n5I+=X1h;n5I+=u6h;var D5I=I2z;D5I+=E4Y.p4h;var b5I=p6z;b5I+=i7h;b5I+=O1h;var E5I=r6z;E5I+=u6h;E5I+=w6z;var toSave;var extender=$[N4R][E5I][b5I][Z6z];if(action===Z9a){var rowData=originalData[key][b0R];toSave=extender({},rowData,p8R);toSave=extender(toSave,vals,p8R);}else{toSave=extender({},vals,p8R);}var overrideId=idGet(toSave);if(action===D5I&&overrideId===undefined){idSet(toSave,+new Date()+h8R+key);}else{idSet(toSave,overrideId);}out[n5I][E8R](toSave);});}success(out);};Editor[N5I][j5I]=function(json,notGood,submitParams,submitParamsLocal,action,editCount,hide,successCallback,errorCallback,xhr){var l7z='submitComplete';var j7z='submitSuccess';var N7z="onComple";var n7z="plete";var D7z="onCom";var b7z='commit';var E7z="ids";var T7z="preR";var i7z="postRem";var B7z="preE";var q7z="aSou";var P7z="eve";var O7z="ostEdit";var m7z="postC";var W7z='setData';var X7z='prep';var L7z="ataSour";var y7z="aSo";var V7z="mmi";var F7z="ount";var t6z="Errors";var C6z="nsuccessf";var c6z="submitU";var u6z='receive';var M6z="itO";var U6z="ostSubmi";var d6z="ieldErrors";var H6z="_ev";var Q4I=H6z;Q4I+=g1R;Q4I+=X1h;var k5I=L4z;k5I+=o7h;k5I+=X1h;k5I+=N6h;var o5I=P9h;o5I+=d6z;var Y5I=d9h;Y5I+=h6h;Y5I+=h1h;var x5I=E4Y.p4h;x5I+=h6h;x5I+=h6h;x5I+=h1h;var Q5I=i7h;Q5I+=U6z;Q5I+=X1h;var f5I=c7h;f5I+=E9h;f5I+=D3R;var v5I=R6z;v5I+=Z7h;var a5I=E4Y.p4h;a5I+=e1h;a5I+=M6z;a5I+=f1R;var l5I=p1a;l5I+=I1R;var that=this;var setData;var fields=this[a1h][l5I];var opts=this[a1h][a5I];var modifier=this[a1h][n2a];this[v5I](u6z,action,json);this[f5I](Q5I,[json,submitParams,action,xhr]);if(!json[x5I]){json[G5R]=E4Y.R4h;}if(!json[c3a]){json[c3a]=[];}if(notGood||json[Y5I]||json[o5I][k5I]){var J5I=c6z;J5I+=C6z;J5I+=j6h;J5I+=U1h;var S5I=G6z;S5I+=h6h;S5I+=y2R;var t5I=z7a;t5I+=E4Y.k4h;t5I+=O1h;t5I+=J4h;var p5I=P4a;p5I+=t6z;var I5I=K5a;I5I+=a4R;var globalError=[];if(json[G5R]){var z5I=E4Y.p4h;z5I+=B7h;z5I+=h6h;globalError[E8R](json[z5I]);}$[I5I](json[p5I],function(i,err){var h7z=":";var s7z="onFieldError";var e7z="_anima";var g7z="iti";var J6z="onField";var S6z="ayed";var r5I=j1R;r5I+=S6z;var field=fields[err[i0R]];if(field[r5I]()){var Z5I=g1h;Z5I+=T2R;Z5I+=h1h;var w5I=S3a;w5I+=X1h;w5I+=Z6h;field[G5R](err[w5I]||Z5I);if(i===C5h){var d5I=V3h;d5I+=X3h;d5I+=j6h;d5I+=a1h;var H5I=J6z;H5I+=R5R;if(opts[H5I]===d5I){var c5I=X1h;c5I+=E4Y.k4h;c5I+=i7h;var u5I=g1a;u5I+=a1h;u5I+=g7z;u5I+=l5R;var M5I=m2a;M5I+=P1h;var R5I=q9R;R5I+=d9h;var U5I=e7z;U5I+=c6h;that[U5I]($(that[F5R][k0z],that[a1h][R5I]),{scrollTop:$(field[M5I]())[u5I]()[c5I]},a4h);field[m4R]();}else if(typeof opts[s7z]===E4Y.U4h){opts[s7z](that,err);}}}else{var G5I=h7z;G5I+=S3h;var C5I=i7h;C5I+=j6h;C5I+=a1h;C5I+=N6h;globalError[C5I](field[i0R]()+G5I+(err[X0z]||R5R));}});this[G5R](globalError[t5I](S5I));this[p4a](J5I,[json]);if(errorCallback){errorCallback[O5R](that,json);}}else{var f4I=w7h;f4I+=E4Y.p4h;f4I+=N1z;f4I+=X1h;var n4I=U1a;n4I+=S6h;n4I+=F7z;var store={};if(json[b0R]&&(action===b4a||action===U1a)){var O4I=X3h;O4I+=E4Y.k4h;O4I+=V7z;O4I+=X1h;var K4I=W0a;K4I+=y7z;K4I+=S9h;K4I+=W1R;var g4I=N9R;g4I+=L7z;g4I+=X3h;g4I+=E4Y.p4h;this[g4I](X7z,action,modifier,submitParamsLocal,json,store);for(var i=C5h;i<json[b0R][o8R];i++){var e4I=O1h;e4I+=e1h;setData=json[b0R][i];var id=this[g5z](e4I,setData);this[p4a](W7z,[json,setData,action]);if(action===b4a){var y4I=m7z;y4I+=h6h;y4I+=A7z;y4I+=E4Y.p4h;var V4I=X3h;V4I+=h6h;V4I+=A7z;V4I+=E4Y.p4h;var F4I=K7z;F4I+=u6h;F4I+=c6h;var h4I=A7h;h4I+=E4Y.p4h;h4I+=S6h;h4I+=p2z;var s4I=w7h;s4I+=E4Y.p4h;s4I+=n5z;this[s4I](h4I,[json,setData,id]);this[g5z](F4I,fields,setData,store);this[p4a]([V4I,y4I],[json,setData,id]);}else if(action===U1a){var A4I=i7h;A4I+=O7z;var m4I=w7h;m4I+=P7z;m4I+=J4h;m4I+=X1h;var W4I=E4Y.p4h;W4I+=e1h;W4I+=s1h;var X4I=W0a;X4I+=q7z;X4I+=h6h;X4I+=W1R;var L4I=B7z;L4I+=t6h;this[p4a](L4I,[json,setData,id]);this[X4I](W4I,modifier,fields,setData,store);this[m4I]([Z9a,A4I],[json,setData,id]);}}this[K4I](O4I,action,modifier,json[b0R],store);}else if(action===x1R){var D4I=e1h;D4I+=u6h;D4I+=X1h;D4I+=u6h;var b4I=O1h;b4I+=e1h;b4I+=a1h;var E4I=i7z;E4I+=u9R;var T4I=Z1h;T4I+=l3h;T4I+=u7a;T4I+=E4Y.p4h;var i4I=H6z;i4I+=E4Y.p4h;i4I+=Z1R;var B4I=B2z;B4I+=E9h;B4I+=E4Y.p4h;var q4I=T7z;q4I+=U9a;q4I+=E4Y.p4h;var P4I=i7h;P4I+=h6h;P4I+=E4Y.p4h;P4I+=i7h;this[g5z](P4I,action,modifier,submitParamsLocal,json,store);this[p4a](q4I,[json,this[E7z]()]);this[g5z](B4I,modifier,fields,store);this[i4I]([T4I,E4I],[json,this[b4I]()]);this[g5z](b7z,action,modifier,json[D4I],store);}if(editCount===this[a1h][n4I]){var a4I=P1a;a4I+=q1a;var l4I=D7z;l4I+=n7z;var N4I=s0a;N4I+=a1h;N4I+=E4Y.p4h;this[a1h][O7a]=u0R;if(opts[T6z]===N4I&&(hide===undefined||hide)){var j4I=w7h;j4I+=w6R;j4I+=N7R;this[j4I](json[b0R]?p8R:k8R);}else if(typeof opts[l4I]===a4I){var v4I=N7z;v4I+=X1h;v4I+=E4Y.p4h;opts[v4I](this);}}if(successCallback){successCallback[O5R](that,json);}this[f4I](j7z,[json,setData,action]);}this[A9a](k8R);this[Q4I](l7z,[json,setData,action]);};Editor[x4I][Y4I]=function(xhr,err,thrown,errorCallback,submitParams,action){var x7z='submitError';var Q7z='postSubmit';var f7z="syst";var v7z="ete";var a7z="submitCompl";var z4I=a7z;z4I+=v7z;var k4I=w7h;k4I+=E4Y.p4h;k4I+=E9h;k4I+=D3R;var o4I=f7z;o4I+=M9R;this[p4a](Q7z,[u0R,submitParams,action,xhr]);this[G5R](this[o9a][G5R][o4I]);this[A9a](k8R);if(errorCallback){errorCallback[O5R](this,xhr,err,thrown);}this[k4I]([x7z,z4I],[xhr,err,thrown,submitParams]);};Editor[T6R][I4I]=function(fn){var I7z="Complete";var k7z="settings";var o7z="tures";var Y7z="oFea";var d4I=p5R;d4I+=R0z;var H4I=O6a;H4I+=O1h;H4I+=I0a;var p4I=g0R;p4I+=S1h;p4I+=w9h;var that=this;var dt=this[a1h][p4I]?new $[N4R][y8R][q1z](this[a1h][i2a]):u0R;var ssp=k8R;if(dt){var r4I=Y7z;r4I+=o7z;ssp=dt[k7z]()[C5h][r4I][z7z];}if(this[a1h][G4R]){var w4I=S2a;w4I+=O1h;w4I+=X1h;w4I+=I7z;this[f3R](w4I,function(){var p7z="ra";if(ssp){var Z4I=e1h;Z4I+=p7z;Z4I+=F3h;dt[f3R](Z4I,fn);}else{setTimeout(function(){fn();},h4h);}});return p8R;}else if(this[n4R]()===H4I||this[d4I]()===Y1z){var U4I=E4Y.k4h;U4I+=I0a;this[U4I](N6R,function(){var w7z="omp";var r7z="submitC";if(!that[a1h][G4R]){setTimeout(function(){if(that[a1h]){fn();}},h4h);}else{var R4I=r7z;R4I+=w7z;R4I+=w9h;R4I+=c6h;that[f3R](R4I,function(e,json){var Z7z='draw';if(ssp&&json){dt[f3R](Z7z,fn);}else{setTimeout(function(){if(that[a1h]){fn();}},h4h);}});}})[h1z]();return p8R;}return k8R;};Editor[M4I][u4I]=function(name,arr){for(var i=C5h,ien=arr[o8R];i<ien;i++){if(name==arr[i]){return i;}}return-G5h;};Editor[K0R]={"table":u0R,"ajaxUrl":u0R,"fields":[],"display":c4I,"ajax":u0R,"idSrc":C4I,"events":{},"i18n":{"create":{"button":G4I,"title":t4I,"submit":S4I},"edit":{"button":J4I,"title":g1I,"submit":e1I},"remove":{"button":H7z,"title":H7z,"submit":s1I,"confirm":{"_":d7z,"1":U7z}},"error":{"system":R7z},multi:{title:h1I,info:M7z,restore:u7z,noMulti:c7z},"datetime":{previous:F1I,next:V1I,months:[y1I,C7z,G7z,L1I,t7z,S7z,X1I,W1I,J7z,g9z,e9z,s9z],weekdays:[m1I,A1I,K1I,O1I,P1I,h9z,q1I],amPm:[F9z,V9z],unknown:w7a}},formOptions:{bubble:$[r6R]({},Editor[g5R][F2z],{title:k8R,message:k8R,buttons:B1I,submit:i1I}),inline:$[r6R]({},Editor[g5R][F2z],{buttons:k8R,submit:O6z}),main:$[T1I]({},Editor[g5R][F2z])},legacyAjax:k8R};(function(){var w3z="Sr";var o3z='data-editor-value';var x3z="data-e";var E3z='keyless';var L3z="rowIds";var R9z="_fn";var i9z="add";var K9z="drawType";var L9z="dataSources";var y9z="taTable";var N7I=c5a;N7I+=U1h;var g6I=J3h;g6I+=y9z;var __dataSources=Editor[L9z]={};var __dtIsSsp=function(dt,editor){var A9z="ting";var m9z="tur";var W9z="Fea";var X9z="tOpts";var D1I=J2z;D1I+=X9z;var b1I=E4Y.k4h;b1I+=W9z;b1I+=m9z;b1I+=R9h;var E1I=a1h;E1I+=i4R;E1I+=A9z;E1I+=a1h;return dt[E1I]()[C5h][b1I][z7z]&&editor[a1h][D1I][K9z]!==S4R;};var __dtApi=function(table){var O9z="DataT";var n1I=O9z;n1I+=u6h;n1I+=S1h;n1I+=w9h;return $(table)[n1I]();};var __dtHighlight=function(node){node=$(node);setTimeout(function(){var P9z="ighlig";var j1I=N6h;j1I+=P9z;j1I+=y7h;var N1I=W9h;N1I+=U2z;node[N1I](j1I);setTimeout(function(){var b9z='highlight';var B9z="ighlight";var q9z="oH";var v4h=550;var a1I=J4h;a1I+=q9z;a1I+=B9z;var l1I=i9z;l1I+=T9z;l1I+=E9z;l1I+=a1h;node[l1I](a1I)[S9R](b9z);setTimeout(function(){var n9z="hlight";var D9z="noHig";var f1I=D9z;f1I+=n9z;var v1I=N9z;v1I+=u6h;v1I+=L9h;node[v1I](f1I);},v4h);},a4h);},W4h);};var __dtRowSelector=function(out,dt,identifier,fields,idFn){var j9z="dexes";var x1I=V0R;x1I+=j9z;var Q1I=U7h;Q1I+=F3h;Q1I+=a1h;dt[Q1I](identifier)[x1I]()[T8R](function(idx){var l9z='Unable to find row identifier';var L4h=14;var k1I=h6h;k1I+=E4Y.k4h;k1I+=F3h;var o1I=e1h;o1I+=D6h;o1I+=u6h;var Y1I=U7h;Y1I+=F3h;var row=dt[Y1I](idx);var data=row[o1I]();var idSrc=idFn(data);if(idSrc===undefined){Editor[G5R](l9z,L4h);}out[idSrc]={idSrc:idSrc,data:data,node:row[N2a](),fields:fields,type:k1I};});};var __dtFieldsFromIdx=function(dt,fields,idx){var k9z="he field name.";var o9z="ify t";var Y9z=" to automatically determine field from source. Please spec";var x9z="Unable";var Q9z="mData";var f9z="editField";var v9z="aoColumns";var a9z="setting";var z1I=a9z;z1I+=a1h;var field;var col=dt[z1I]()[C5h][v9z][idx];var dataSrc=col[f9z]!==undefined?col[f9z]:col[Q9z];var resolvedFields={};var run=function(field,dataSrc){if(field[i0R]()===dataSrc){resolvedFields[field[i0R]()]=field;}};$[T8R](fields,function(name,fieldInst){var I1I=O1h;I1I+=Q2a;I1I+=z5a;if($[I1I](dataSrc)){var p1I=U1h;p1I+=E4Y.p4h;p1I+=C3a;for(var i=C5h;i<dataSrc[p1I];i++){run(fieldInst,dataSrc[i]);}}else{run(fieldInst,dataSrc);}});if($[A6z](resolvedFields)){var w1I=x9z;w1I+=Y9z;w1I+=o9z;w1I+=k9z;var r1I=g8z;r1I+=h1h;Editor[r1I](w1I,F4h);}return resolvedFields;};var __dtCellSelector=function(out,dt,identifier,allFields,idFn,forceFields){dt[z9z](identifier)[I9z]()[T8R](function(idx){var Z9z="column";var w9z="bje";var r9z="deN";var p9z="ttac";var C1I=m2a;C1I+=P1h;var c1I=z9h;c1I+=X1h;var u1I=u6h;u1I+=p9z;u1I+=N6h;var M1I=D6h;M1I+=X1h;M1I+=N6a;var R1I=h6h;R1I+=E4Y.k4h;R1I+=F3h;var U1I=J4h;U1I+=E4Y.k4h;U1I+=r9z;U1I+=M2R;var d1I=E4Y.k4h;d1I+=w9z;d1I+=I8R;var H1I=e1h;H1I+=u6h;H1I+=X1h;H1I+=u6h;var Z1I=h6h;Z1I+=E4Y.k4h;Z1I+=F3h;var cell=dt[G5z](idx);var row=dt[a2a](idx[Z1I]);var data=row[H1I]();var idSrc=idFn(data);var fields=forceFields||__dtFieldsFromIdx(dt,allFields,idx[Z9z]);var isNode=typeof identifier===d1I&&identifier[U1I]||identifier instanceof $;var prevDisplayFields,prevAttach;if(out[idSrc]){prevAttach=out[idSrc][T2a];prevDisplayFields=out[idSrc][a6a];}__dtRowSelector(out,dt,idx[R1I],allFields,idFn);out[idSrc][M1I]=prevAttach||[];out[idSrc][u1I][E8R](isNode?$(identifier)[c1I](C5h):cell[C1I]());out[idSrc][a6a]=prevDisplayFields||{};$[r6R](out[idSrc][a6a],fields);});};var __dtColumnSelector=function(out,dt,identifier,fields,idFn){var G1I=L0a;G1I+=E4Y.p4h;G1I+=p6h;G1I+=R9h;dt[z9z](u0R,identifier)[G1I]()[T8R](function(idx){__dtCellSelector(out,dt,idx,fields,idFn);});};var __dtjqId=function(id){var d9z="$";var H9z="\\";var J1I=H9z;J1I+=d9z;J1I+=G4h;var S1I=h6h;S1I+=X1R;S1I+=y1R;var t1I=A4a;t1I+=J4h;t1I+=o7h;return typeof id===t1I?X6a+id[S1I](/(:|\.|\[|\]|,)/g,J1I):X6a+id;};__dataSources[g6I]={id:function(data){var u9z="tObjectDataFn";var M9z="Ge";var U9z="dSrc";var h6I=O1h;h6I+=U9z;var s6I=R9z;s6I+=M9z;s6I+=u9z;var e6I=p6z;e6I+=i7h;e6I+=O1h;var idFn=DataTable[P6h][e6I][s6I](this[a1h][h6I]);return idFn(data);},individual:function(identifier,fieldNames){var y6I=P9h;y6I+=Y2a;y6I+=U1h;y6I+=I1R;var V6I=X1h;V6I+=d1R;var F6I=E4Y.p4h;F6I+=p6h;F6I+=X1h;var idFn=DataTable[F6I][e6z][N0R](this[a1h][h2z]);var dt=__dtApi(this[a1h][V6I]);var fields=this[a1h][y6I];var out={};var forceFields;var responsiveNode;if(fieldNames){var X6I=E4Y.p4h;X6I+=u6h;X6I+=X3h;X6I+=N6h;var L6I=Q5z;L6I+=x5z;L6I+=x6h;if(!$[L6I](fieldNames)){fieldNames=[fieldNames];}forceFields={};$[X6I](fieldNames,function(i,name){forceFields[name]=fields[name];});}__dtCellSelector(out,dt,identifier,fields,idFn,forceFields);return out;},fields:function(identifier){var e3z="mn";var g3z="colu";var t9z="tDataFn";var G9z="nGetObjec";var C9z="dS";var c9z="mns";var A6I=w5R;A6I+=U1h;A6I+=j6h;A6I+=c9z;var m6I=O1h;m6I+=C9z;m6I+=h6h;m6I+=X3h;var W6I=z6a;W6I+=G9z;W6I+=t9z;var idFn=DataTable[P6h][e6z][W6I](this[a1h][m6I]);var dt=__dtApi(this[a1h][i2a]);var fields=this[a1h][M2a];var out={};if($[u4R](identifier)&&(identifier[E1a]!==undefined||identifier[A6I]!==undefined||identifier[z9z]!==undefined)){var q6I=W1R;q6I+=U1h;q6I+=v3h;var K6I=h6h;K6I+=E4Y.k4h;K6I+=F3h;K6I+=a1h;if(identifier[K6I]!==undefined){var O6I=h6h;O6I+=E4Y.k4h;O6I+=S9z;__dtRowSelector(out,dt,identifier[O6I],fields,idFn);}if(identifier[J9z]!==undefined){var P6I=g3z;P6I+=e3z;P6I+=a1h;__dtColumnSelector(out,dt,identifier[P6I],fields,idFn);}if(identifier[q6I]!==undefined){var B6I=X3h;B6I+=E4Y.p4h;B6I+=f0z;B6I+=a1h;__dtCellSelector(out,dt,identifier[B6I],fields,idFn);}}else{__dtRowSelector(out,dt,identifier,fields,idFn);}return out;},create:function(fields,data){var i6I=X1h;i6I+=d1R;var dt=__dtApi(this[a1h][i6I]);if(!__dtIsSsp(dt,this)){var T6I=h6h;T6I+=W8a;var row=dt[T6I][i9z](data);__dtHighlight(row[N2a]());}},edit:function(identifier,fields,data,store){var y3z="bleE";var V3z="Ext";var F3z="owIds";var h3z="spli";var s3z="ataTab";var b6I=J2z;b6I+=X1h;b6I+=I0z;var E6I=X1h;E6I+=d1R;var that=this;var dt=__dtApi(this[a1h][E6I]);if(!__dtIsSsp(dt,this)||this[a1h][b6I][K9z]===S4R){var a6I=u6h;a6I+=J4h;a6I+=x6h;var N6I=u6h;N6I+=J4h;N6I+=x6h;var D6I=e1h;D6I+=s3z;D6I+=U1h;D6I+=E4Y.p4h;var rowId=__dataSources[D6I][q0R][O5R](this,data);var row;try{var n6I=U7h;n6I+=F3h;row=dt[n6I](__dtjqId(rowId));}catch(e){row=dt;}if(!row[N6I]()){row=dt[a2a](function(rowIdx,rowData,rowNode){var l6I=X3h;l6I+=h5z;var j6I=O1h;j6I+=e1h;return rowId==__dataSources[y8R][j6I][l6I](that,rowData);});}if(row[a6I]()){var Y6I=h3z;Y6I+=W1R;var x6I=h6h;x6I+=F3z;var Q6I=R9z;Q6I+=V3z;Q6I+=E4Y.p4h;Q6I+=q6h;var f6I=G2z;f6I+=b8z;f6I+=y3z;f6I+=D3h;var v6I=P9h;v6I+=J4h;var extender=$[v6I][f6I][e6z][Q6I];var toSave=extender({},row[b0R](),p8R);toSave=extender(toSave,data,p8R);row[b0R](toSave);var idx=$[U4R](rowId,store[L3z]);store[x6I][Y6I](idx,G5h);}else{var k6I=u6h;k6I+=e1h;k6I+=e1h;var o6I=U7h;o6I+=F3h;row=dt[o6I][k6I](data);}__dtHighlight(row[N2a]());}},remove:function(identifier,fields,store){var m3z="every";var W3z="emo";var X3z="ncelle";var I6I=W4a;I6I+=X3z;I6I+=e1h;var z6I=g0R;z6I+=S1h;z6I+=w9h;var that=this;var dt=__dtApi(this[a1h][z6I]);var cancelled=store[I6I];if(cancelled[o8R]===C5h){var r6I=h6h;r6I+=W3z;r6I+=t4h;var p6I=h6h;p6I+=E4Y.k4h;p6I+=S9z;dt[p6I](identifier)[r6I]();}else{var d6I=r2z;d6I+=E4Y.k4h;d6I+=E9h;d6I+=E4Y.p4h;var H6I=h6h;H6I+=E4Y.k4h;H6I+=S9z;var indexes=[];dt[E1a](identifier)[m3z](function(){var A3z="index";var Z6I=G2z;Z6I+=u6h;var w6I=O1h;w6I+=e1h;var id=__dataSources[y8R][w6I][O5R](that,this[Z6I]());if($[U4R](id,cancelled)===-G5h){indexes[E8R](this[A3z]());}});dt[H6I](indexes)[d6I]();}},prep:function(action,identifier,submit,json,store){var P3z="cancelled";var O3z="elled";var C6I=h6h;C6I+=M9R;C6I+=u7a;C6I+=E4Y.p4h;var U6I=E4Y.p4h;U6I+=e1h;U6I+=s1h;if(action===U6I){var M6I=l3h;M6I+=u6h;M6I+=i7h;var R6I=r4z;R6I+=G5z;R6I+=E4Y.p4h;R6I+=e1h;var cancelled=json[R6I]||[];store[L3z]=$[M6I](submit[b0R],function(val,key){var K3z="sEmptyObj";var c6I=V0R;c6I+=V1h;c6I+=T2R;c6I+=b1R;var u6I=O1h;u6I+=K3z;u6I+=E4Y.I4h;return!$[u6I](submit[b0R][key])&&$[c6I](key,cancelled)===-G5h?key:undefined;});}else if(action===C6I){var G6I=W4a;G6I+=X5z;G6I+=O3z;store[G6I]=json[P3z]||[];}},commit:function(action,identifier,data,store){var T3z="draw";var i3z="any";var B3z="Ids";var q3z="itOpts";var y7I=t0R;y7I+=E4Y.p4h;var V7I=A1h;V7I+=q3z;var J6I=c4a;J6I+=Q8R;var S6I=U7h;S6I+=F3h;S6I+=B3z;var t6I=E4Y.p4h;t6I+=p5R;t6I+=X1h;var that=this;var dt=__dtApi(this[a1h][i2a]);if(action===t6I&&store[S6I][J6I]){var g7I=h6h;g7I+=E4Y.k4h;g7I+=F3h;g7I+=B3z;var ids=store[g7I];var row;var compare=function(id){return function(rowIdx,rowData,rowNode){var s7I=O1h;s7I+=e1h;var e7I=J3h;e7I+=y9z;return id==__dataSources[e7I][s7I][O5R](that,rowData);};};for(var i=C5h,ien=ids[o8R];i<ien;i++){var h7I=u6h;h7I+=J4h;h7I+=x6h;try{row=dt[a2a](__dtjqId(ids[i]));}catch(e){row=dt;}if(!row[h7I]()){row=dt[a2a](compare(ids[i]));}if(row[i3z]()){var F7I=Y5R;F7I+=E4Y.p4h;row[F7I]();}}}var drawType=this[a1h][V7I][K9z];if(drawType!==y7I){dt[T3z](drawType);}}};function __html_id(identifier){var a3z="or `id` of: ";var l3z="-id` ";var j3z=" not find an element with `data-editor";var N3z="Could";var n3z="d=\"";var D3z="r-i";var b3z="ata-edito";var context=document;if(identifier!==E3z){var X7I=w9h;X7I+=C3a;var L7I=P5z;L7I+=b3z;L7I+=D3z;L7I+=n3z;context=$(L7I+identifier+i8R);if(context[o8R]===C5h){context=typeof identifier===m1R?$(__dtjqId(identifier)):$(identifier);}if(context[X7I]===C5h){var W7I=N3z;W7I+=j3z;W7I+=l3z;W7I+=a3z;throw W7I+identifier;}}return context;}function __html_el(identifier,name){var f3z="eld=\"";var v3z="[data-editor-fi";var A7I=V2R;A7I+=O5z;var m7I=v3z;m7I+=f3z;var context=__html_id(identifier);return $(m7I+name+A7I,context);}function __html_els(identifier,names){var out=$();for(var i=C5h,ien=names[o8R];i<ien;i++){var K7I=u6h;K7I+=e1h;K7I+=e1h;out=out[K7I](__html_el(identifier,names[i]));}return out;}function __html_get(identifier,dataSrc){var Y3z="ditor-value]";var Q3z="[";var B7I=c5a;B7I+=U1h;var q7I=w9h;q7I+=J4h;q7I+=o7h;q7I+=Q8R;var P7I=Q3z;P7I+=x3z;P7I+=Y3z;var O7I=r9h;O7I+=X1h;O7I+=d9h;var el=__html_el(identifier,dataSrc);return el[O7I](P7I)[q7I]?el[g4a](o3z):el[B7I]();}function __html_set(identifier,fields,data){$[T8R](fields,function(name,field){var r3z="lter";var p3z="-editor-value]";var I3z="[data";var z3z="rom";var k3z="valF";var i7I=k3z;i7I+=z3z;i7I+=s0R;var val=field[i7I](data);if(val!==undefined){var b7I=I3z;b7I+=p3z;var E7I=j1h;E7I+=r3z;var T7I=J3h;T7I+=g0R;T7I+=w3z;T7I+=X3h;var el=__html_el(identifier,field[T7I]());if(el[E7I](b7I)[o8R]){el[g4a](o3z,val);}else{var D7I=E4Y.p4h;D7I+=u6h;D7I+=X3h;D7I+=N6h;el[D7I](function(){var d3z="firstChild";var H3z="removeChild";var Z3z="childNodes";var n7I=U1h;n7I+=g1R;n7I+=m6a;while(this[Z3z][n7I]){this[H3z](this[d3z]);}})[J1R](val);}}});}__dataSources[N7I]={id:function(data){var l7I=O1h;l7I+=e1h;l7I+=w3z;l7I+=X3h;var j7I=h0R;j7I+=O1h;var idFn=DataTable[P6h][j7I][N0R](this[a1h][l7I]);return idFn(data);},initField:function(cfg){var U3z='[data-editor-label="';var a7I=U1h;a7I+=U2R;a7I+=U1h;var label=$(U3z+(cfg[b0R]||cfg[i0R])+i8R);if(!cfg[a7I]&&label[o8R]){cfg[s3a]=label[J1R]();}},individual:function(identifier,fieldNames){var J3z=" determine field name from data s";var S3z="Cannot automatically";var t3z='[data-editor-id]';var G3z="addBack";var C3z="ditor-fiel";var c3z="addBa";var M3z="or-i";var R3z="odeName";var z7I=K5a;z7I+=a4R;var o7I=u4a;o7I+=x6h;var v7I=J4h;v7I+=R3z;var attachEl;if(identifier instanceof $||identifier[v7I]){var Y7I=A1h;Y7I+=s1h;Y7I+=M3z;Y7I+=e1h;var x7I=i7h;x7I+=u3z;x7I+=E8z;var Q7I=c3z;Q7I+=d4R;attachEl=identifier;if(!fieldNames){var f7I=x3z;f7I+=C3z;f7I+=e1h;fieldNames=[$(identifier)[g4a](f7I)];}var back=$[N4R][G3z]?Q7I:m7a;identifier=$(identifier)[x7I](t3z)[back]()[b0R](Y7I);}if(!identifier){identifier=E3z;}if(fieldNames&&!$[o7I](fieldNames)){fieldNames=[fieldNames];}if(!fieldNames||fieldNames[o8R]===C5h){var k7I=S3z;k7I+=J3z;k7I+=E5a;k7I+=A0a;throw k7I;}var out=__dataSources[J1R][M2a][O5R](this,identifier);var fields=this[a1h][M2a];var forceFields={};$[T8R](fieldNames,function(i,name){forceFields[name]=fields[name];});$[z7I](out,function(id,set){var e88='cell';var g88="tach";var r7I=j1h;r7I+=h2R;r7I+=e1h;r7I+=a1h;var p7I=D6h;p7I+=g88;var I7I=p9h;I7I+=i7h;I7I+=E4Y.p4h;set[I7I]=e88;set[p7I]=attachEl?$(attachEl):__html_els(identifier,fieldNames)[s88]();set[r7I]=fields;set[a6a]=forceFields;});return out;},fields:function(identifier){var R7I=h6h;R7I+=W8a;var w7I=N6h;w7I+=X1h;w7I+=l3h;w7I+=U1h;var out={};var self=__dataSources[w7I];if($[F6a](identifier)){var Z7I=w9h;Z7I+=C3a;for(var i=C5h,ien=identifier[Z7I];i<ien;i++){var d7I=X3h;d7I+=h5z;var H7I=P9h;H7I+=Y2a;H7I+=H9h;var res=self[H7I][d7I](this,identifier[i]);out[identifier[i]]=res[identifier[i]];}return out;}var data={};var fields=this[a1h][M2a];if(!identifier){identifier=E3z;}$[T8R](fields,function(name,field){var F88="dataSrc";var h88="ToD";var U7I=I4R;U7I+=h88;U7I+=D6h;U7I+=u6h;var val=__html_get(identifier,field[F88]());field[U7I](data,val===u0R?undefined:val);});out[identifier]={idSrc:identifier,data:data,node:document,fields:fields,type:R7I};return out;},create:function(fields,data){if(data){var id=__dataSources[J1R][q0R][O5R](this,data);try{if(__html_id(id)[o8R]){__html_set(id,fields,data);}}catch(e){}}},edit:function(identifier,fields,data){var M7I=N6h;M7I+=X1h;M7I+=l3h;M7I+=U1h;var id=__dataSources[M7I][q0R][O5R](this,data)||E3z;__html_set(id,fields,data);},remove:function(identifier,fields){__html_id(identifier)[x1R]();}};}());Editor[d5R]={"wrapper":u7I,"processing":{"indicator":V88,"active":G4R},"header":{"wrapper":c7I,"content":y88},"body":{"wrapper":C7I,"content":G7I},"footer":{"wrapper":t7I,"content":L88},"form":{"wrapper":S7I,"content":X88,"tag":E4Y.R4h,"info":W88,"error":J7I,"buttons":g9I,"button":e9I},"field":{"wrapper":s9I,"typePrefix":h9I,"namePrefix":F9I,"label":m88,"input":A88,"inputControl":K88,"error":O88,"msg-label":V9I,"msg-error":P88,"msg-message":q88,"msg-info":y9I,"multiValue":B88,"multiInfo":i88,"multiRestore":T88,"multiNoEdit":E88,"disabled":L9I,"processing":V88},"actions":{"create":X9I,"edit":W9I,"remove":b88},"inline":{"wrapper":D88,"liner":m9I,"buttons":A9I},"bubble":{"wrapper":n88,"liner":K9I,"table":N88,"close":j88,"pointer":O9I,"bg":l88}};(function(){var w28='selectedSingle';var Y28='buttons-remove';var Q28='rows';var n28="B";var q28="formMessage";var K28='buttons-create';var g28="select_single";var J88="formButtons";var t88="18";var G88="bm";var c88="editor_create";var u88="NS";var M88="BUTT";var R88="r_edit";var U88="edito";var d88="xte";var H88="_remove";var Z88="tor";var r88="leToo";var p88="buttons-e";var I88="ted";var z88="ingle";var k88="gle";var o88="tSin";var Y88="ngle";var x88="eSi";var Q88="ing";var f88="oveS";var v88="ectedSi";var L8m=a88;L8m+=v88;L8m+=s2R;L8m+=w9h;var y8m=P6h;y8m+=E4Y.p4h;y8m+=q6h;var V8m=r2z;V8m+=f88;V8m+=Q88;V8m+=w9h;var F8m=h6h;F8m+=U7a;var h8m=E4Y.p4h;h8m+=D3h;h8m+=E4Y.p4h;h8m+=q6h;var s8m=Y5R;s8m+=x88;s8m+=Y88;var e8m=J2z;e8m+=o88;e8m+=k88;var g8m=U1a;g8m+=b6h;g8m+=z88;var x3I=a88;x3I+=E4Y.p4h;x3I+=X3h;x3I+=I88;var P3I=p88;P3I+=t6h;var X3I=a88;X3I+=E4Y.I4h;X3I+=E4Y.p4h;X3I+=e1h;var t9I=Z6a;t9I+=X1h;t9I+=l5R;t9I+=a1h;var G9I=s8z;G9I+=X1h;var P9I=v2z;P9I+=r88;P9I+=v3h;if(DataTable[P9I]){var z9I=a1h;z9I+=w88;var k9I=E4Y.p4h;k9I+=D3h;k9I+=g1R;k9I+=e1h;var o9I=J2z;o9I+=Z88;o9I+=H88;var l9I=E4Y.p4h;l9I+=d88;l9I+=q6h;var j9I=U88;j9I+=R88;var B9I=E4Y.p4h;B9I+=d88;B9I+=J4h;B9I+=e1h;var q9I=M88;q9I+=h0z;q9I+=u88;var ttButtons=DataTable[q2z][q9I];var ttButtonBase={sButtonText:u0R,editor:u0R,formTitle:u0R};ttButtons[c88]=$[B9I](p8R,ttButtons[C88],ttButtonBase,{formButtons:[{label:u0R,fn:function(e){var i9I=Z0z;i9I+=G88;i9I+=s1h;this[i9I]();}}],fnClick:function(button,config){var S88="ditor";var N9I=p1h;N9I+=b9h;N9I+=E4Y.p4h;var D9I=H2R;D9I+=S1h;D9I+=h2R;var b9I=r9a;b9I+=E4Y.p4h;b9I+=D6h;b9I+=E4Y.p4h;var E9I=O1h;E9I+=t88;E9I+=J4h;var T9I=E4Y.p4h;T9I+=S88;var editor=config[T9I];var i18nCreate=editor[E9I][b9I];var buttons=config[J88];if(!buttons[C5h][D9I]){var n9I=H2R;n9I+=S1h;n9I+=E4Y.p4h;n9I+=U1h;buttons[C5h][n9I]=i18nCreate[p1R];}editor[b4a]({title:i18nCreate[N9I],buttons:buttons});}});ttButtons[j9I]=$[l9I](p8R,ttButtons[g28],ttButtonBase,{formButtons:[{label:u0R,fn:function(e){var a9I=a1h;a9I+=y8z;a9I+=O1h;a9I+=X1h;this[a9I]();}}],fnClick:function(button,config){var s28="ectedIndex";var e28="nGetSel";var x9I=E4Y.p4h;x9I+=e1h;x9I+=O1h;x9I+=X1h;var Q9I=O1h;Q9I+=G4h;Q9I+=E4Y.r4h;Q9I+=J4h;var f9I=E4Y.p4h;f9I+=p5R;f9I+=X1h;f9I+=h1h;var v9I=P9h;v9I+=e28;v9I+=s28;v9I+=R9h;var selected=this[v9I]();if(selected[o8R]!==G5h){return;}var editor=config[f9I];var i18nEdit=editor[Q9I][x9I];var buttons=config[J88];if(!buttons[C5h][s3a]){var Y9I=a1h;Y9I+=y8z;Y9I+=O1h;Y9I+=X1h;buttons[C5h][s3a]=i18nEdit[Y9I];}editor[U1a](selected[C5h],{title:i18nEdit[L5a],buttons:buttons});}});ttButtons[o9I]=$[k9I](p8R,ttButtons[z9I],ttButtonBase,{question:u0R,formButtons:[{label:u0R,fn:function(e){var I9I=Z0z;I9I+=G88;I9I+=s1h;var that=this;this[I9I](function(json){var L28="fnSelectNone";var y28="DataTable";var V28="nstanc";var F28="tI";var h28="fnGe";var H9I=J4h;H9I+=a3h;var Z9I=X1h;Z9I+=x5R;Z9I+=w9h;var w9I=h28;w9I+=F28;w9I+=V28;w9I+=E4Y.p4h;var r9I=J3h;r9I+=X1h;r9I+=B2a;var p9I=P9h;p9I+=J4h;var tt=$[p9I][r9I][q2z][w9I]($(that[a1h][Z9I])[y28]()[i2a]()[H9I]());tt[L28]();});}}],fnClick:function(button,config){var m28="fnGetSelectedIndexes";var W28="confi";var X28="fir";var C9I=w5R;C9I+=J4h;C9I+=X28;C9I+=l3h;var c9I=U1h;c9I+=f8R;c9I+=X1h;c9I+=N6h;var u9I=z3R;u9I+=h6h;u9I+=Q88;var M9I=W28;M9I+=A2a;var R9I=h6h;R9I+=U7a;var U9I=W0R;U9I+=m0R;var d9I=w9h;d9I+=J4h;d9I+=k3a;d9I+=N6h;var rows=this[m28]();if(rows[d9I]===C5h){return;}var editor=config[v9a];var i18nRemove=editor[U9I][R9I];var buttons=config[J88];var question=typeof i18nRemove[M9I]===u9I?i18nRemove[k9a]:i18nRemove[k9a][rows[c9I]]?i18nRemove[C9I][rows[o8R]]:i18nRemove[k9a][w7h];if(!buttons[C5h][s3a]){buttons[C5h][s3a]=i18nRemove[p1R];}editor[x1R](rows,{message:question[P1R](/%d/g,rows[o8R]),title:i18nRemove[L5a],buttons:buttons});}});}var _buttons=DataTable[G9I][t9I];$[r6R](_buttons,{create:{text:function(dt,node,config){var A28='buttons.create';var g3I=S1h;g3I+=j6h;g3I+=X1h;g3I+=s7a;var J9I=X3h;J9I+=h6h;J9I+=A7z;J9I+=E4Y.p4h;var S9I=W0R;S9I+=m0R;return dt[S9I](A28,config[v9a][o9a][J9I][g3I]);},className:K28,editor:u0R,formButtons:{text:function(editor){return editor[o9a][b4a][p1R];},action:function(e){this[p1R]();}},formMessage:u0R,formTitle:u0R,action:function(e,dt,node,config){var B28="formTitle";var P28="mButtons";var O28="preOp";var L3I=p1h;L3I+=X1h;L3I+=U1h;L3I+=E4Y.p4h;var y3I=X3h;y3I+=h6h;y3I+=K5a;y3I+=c6h;var V3I=K7z;V3I+=H1h;var F3I=O28;F3I+=E4Y.p4h;F3I+=J4h;var h3I=A7h;h3I+=g2R;h3I+=W9a;var s3I=Q0a;s3I+=P28;var e3I=U1a;e3I+=E4Y.k4h;e3I+=h6h;var that=this;var editor=config[e3I];var buttons=config[s3I];this[h3I](p8R);editor[f3R](F3I,function(){that[G4R](k8R);})[V3I]({buttons:config[J88],message:config[q28],title:config[B28]||editor[o9a][y3I][L3I]});}},edit:{extend:X3I,text:function(dt,node,config){var E28='buttons.edit';var T28="i18";var i28="tto";var O3I=S1h;O3I+=j6h;O3I+=i28;O3I+=J4h;var K3I=E4Y.p4h;K3I+=e1h;K3I+=O1h;K3I+=X1h;var A3I=O1h;A3I+=G4h;A3I+=E4Y.r4h;A3I+=J4h;var m3I=J2z;m3I+=X1h;m3I+=E4Y.k4h;m3I+=h6h;var W3I=T28;W3I+=J4h;return dt[W3I](E28,config[m3I][A3I][K3I][O3I]);},className:P3I,editor:u0R,formButtons:{text:function(editor){var q3I=O1h;q3I+=t88;q3I+=J4h;return editor[q3I][U1a][p1R];},action:function(e){var B3I=Z0z;B3I+=G88;B3I+=s1h;this[B3I]();}},formMessage:u0R,formTitle:u0R,action:function(e,dt,node,config){var v28="dexe";var l28="essin";var j28="proc";var N28="uttons";var b28="formTi";var Q3I=E4Y.p4h;Q3I+=p5R;Q3I+=X1h;var f3I=O1h;f3I+=t88;f3I+=J4h;var v3I=b28;v3I+=D28;var a3I=P9h;a3I+=y6h;a3I+=n28;a3I+=N28;var l3I=E4Y.p4h;l3I+=e1h;l3I+=O1h;l3I+=X1h;var N3I=A7h;N3I+=u1a;var n3I=j28;n3I+=l28;n3I+=o7h;var D3I=U1h;D3I+=E4Y.p4h;D3I+=J4h;D3I+=m6a;var b3I=a28;b3I+=N6h;var E3I=V0R;E3I+=v28;E3I+=a1h;var T3I=L0a;T3I+=s8z;T3I+=R9h;var i3I=h6h;i3I+=W8a;i3I+=a1h;var that=this;var editor=config[v9a];var rows=dt[i3I]({selected:p8R})[I9z]();var columns=dt[J9z]({selected:p8R})[T3I]();var cells=dt[z9z]({selected:p8R})[E3I]();var items=columns[b3I]||cells[D3I]?{rows:rows,columns:columns,cells:cells}:rows;this[n3I](p8R);editor[f3R](N3I,function(){var f28="ssing";var j3I=M1z;j3I+=f28;that[j3I](k8R);})[l3I](items,{message:config[q28],buttons:config[a3I],title:config[v3I]||editor[f3I][Q3I][L5a]});}},remove:{extend:x3I,limitTo:[Q28],text:function(dt,node,config){var x28="buttons.r";var z3I=S1h;z3I+=b2z;z3I+=l5R;var k3I=Z1h;k3I+=Y9a;k3I+=E4Y.p4h;var o3I=x28;o3I+=M9R;o3I+=u7a;o3I+=E4Y.p4h;var Y3I=O1h;Y3I+=G4h;Y3I+=E4Y.r4h;Y3I+=J4h;return dt[Y3I](o3I,config[v9a][o9a][k3I][z3I]);},className:Y28,editor:u0R,formButtons:{text:function(editor){var I3I=h6h;I3I+=U7a;return editor[o9a][I3I][p1R];},action:function(e){var p3I=a1h;p3I+=y8z;p3I+=s1h;this[p3I]();}},formMessage:function(editor,dt){var k28="exe";var o28="irm";var U3I=a28;U3I+=N6h;var d3I=Z1h;d3I+=i7h;d3I+=H2R;d3I+=W1R;var H3I=c4a;H3I+=Q8R;var Z3I=J9R;Z3I+=o28;var w3I=L0a;w3I+=k28;w3I+=a1h;var r3I=U7h;r3I+=S9z;var rows=dt[r3I]({selected:p8R})[w3I]();var i18n=editor[o9a][x1R];var question=typeof i18n[Z3I]===m1R?i18n[k9a]:i18n[k9a][rows[H3I]]?i18n[k9a][rows[o8R]]:i18n[k9a][w7h];return question[d3I](/%d/g,rows[U3I]);},formTitle:u0R,action:function(e,dt,node,config){var r28="reOpen";var p28="ows";var I28="rmTi";var J3I=z28;J3I+=E4Y.p4h;var S3I=r2z;S3I+=u7a;S3I+=E4Y.p4h;var t3I=V3h;t3I+=I28;t3I+=X1h;t3I+=w9h;var G3I=p6a;G3I+=n28;G3I+=H5a;G3I+=a1h;var C3I=h6h;C3I+=p28;var c3I=r2z;c3I+=u9R;var M3I=i7h;M3I+=r28;var R3I=A1h;R3I+=O1h;R3I+=X1h;R3I+=h1h;var that=this;var editor=config[R3I];this[G4R](p8R);editor[f3R](M3I,function(){var u3I=A7h;u3I+=g2R;u3I+=W9a;that[u3I](k8R);})[c3I](dt[C3I]({selected:p8R})[I9z](),{buttons:config[G3I],message:config[q28],title:config[t3I]||editor[o9a][S3I][J3I]});}}});_buttons[g8m]=$[r6R]({},_buttons[U1a]);_buttons[e8m][r6R]=w28;_buttons[s8m]=$[h8m]({},_buttons[F8m]);_buttons[V8m][y8m]=L8m;}());Editor[X8m]={};Editor[W8m]=function(input,opts){var A58="calendar";var m58=/[haA]/;var W58=/[Hhm]|LT|LTS/;var X58=/[YMD]|L(?!T)|l/;var V58='-error';var F58='-calendar';var h58='-calendar"/>';var s58='-year"/>';var e58='<select class="';var g58='<span/>';var J08="next";var S08='-iconRight">';var t08='-title">';var u08="previous";var M08='<button>';var I08="mat 'YYYY-MM-DD' can be used";var z08="ly the for";var k08="ntjs on";var o08="Editor datetime: Without mome";var x08="teTi";var f08="ault";var a08="assPref";var l08="mome";var j08="YY-MM-D";var N08="Y";var n08="div ";var D08="date\">";var b08="t\"";var E08="-iconLef";var T08="iv clas";var B08="<bu";var q08="ton>";var P08="l\">";var O08="-labe";var K08="pan/>";var m08="lass=\"";var W08="<select c";var X08="\"/>";var L08="-mont";var y08="el\">";var V08="-la";var F08="me\"";var h08="-ti";var g08="seco";var J28="rror\"/>";var S28="-e";var G28="</d";var c28="-d";var M28="e-";var R28="teim";var U28="editor-da";var Z28="mat";var B2m=e1h;B2m+=E4Y.k4h;B2m+=l3h;var q2m=D3a;q2m+=e1h;var P2m=X1h;P2m+=O1h;P2m+=D28;var O2m=O4R;O2m+=l3h;var K2m=e1h;K2m+=u6h;K2m+=X1h;K2m+=E4Y.p4h;var A2m=E4Y.p4h;A2m+=h6h;A2m+=U7h;A2m+=h6h;var m2m=O4R;m2m+=l3h;var W2m=m8a;W2m+=q6h;var X2m=X1h;X2m+=O1h;X2m+=C4R;var L2m=e1h;L2m+=E4Y.k4h;L2m+=l3h;var y2m=u6h;y2m+=T8z;y2m+=E4Y.p4h;y2m+=q6h;var V2m=e1h;V2m+=E4Y.k4h;V2m+=l3h;var F2m=Z28;F2m+=a4R;var h2m=U5z;h2m+=p6h;h2m+=h0z;h2m+=P9h;var s2m=V3h;s2m+=A2a;s2m+=u6h;s2m+=X1h;var e2m=V3h;e2m+=H28;e2m+=X1h;var g2m=d28;g2m+=a1h;g2m+=X1h;g2m+=T1h;var J8m=U28;J8m+=R28;J8m+=M28;var S8m=u28;S8m+=p1h;S8m+=l3h;S8m+=E4Y.p4h;var t8m=u28;t8m+=z28;t8m+=E4Y.p4h;var G8m=c28;G8m+=H1h;var C8m=C28;C8m+=e1h;var c8m=e1h;c8m+=E4Y.k4h;c8m+=l3h;var u8m=G28;u8m+=t28;var M8m=S28;M8m+=J28;var R8m=u6h;R8m+=q6z;R8m+=l3h;var U8m=g08;U8m+=e08;var d8m=l3h;d8m+=V0R;d8m+=j6h;d8m+=s08;var H8m=N6h;H8m+=E4Y.k4h;H8m+=S9h;H8m+=a1h;var Z8m=h08;Z8m+=F08;Z8m+=y2R;var w8m=V08;w8m+=S1h;w8m+=y08;var r8m=o6R;r8m+=k6R;var p8m=L08;p8m+=N6h;p8m+=X08;var I8m=W08;I8m+=m08;var z8m=A08;z8m+=K08;var k8m=O08;k8m+=P08;var o8m=x6R;o8m+=Z6a;o8m+=q08;var Y8m=B08;Y8m+=X1h;Y8m+=C9h;Y8m+=i08;var x8m=N2R;x8m+=e1h;x8m+=T08;x8m+=M6a;var Q8m=x6R;Q8m+=e1h;Q8m+=t28;var f8m=E08;f8m+=b08;f8m+=y2R;var v8m=u28;v8m+=D08;var a8m=N2R;a8m+=n08;a8m+=D5R;a8m+=Q8z;var B8m=N08;B8m+=N08;B8m+=j08;B8m+=F6h;var q8m=l08;q8m+=J4h;q8m+=X1h;var P8m=O1h;P8m+=G4h;P8m+=m0R;var O8m=X3h;O8m+=U1h;O8m+=a08;O8m+=v08;var K8m=E5R;K8m+=f08;K8m+=a1h;var A8m=Q08;A8m+=x08;A8m+=l3h;A8m+=E4Y.p4h;var m8m=s8z;m8m+=X1h;m8m+=E4Y.p4h;m8m+=q6h;this[X3h]=$[m8m](p8R,{},Editor[A8m][K8m],opts);var classPrefix=this[X3h][O8m];var i18n=this[X3h][P8m];if(!window[q8m]&&this[X3h][Y08]!==B8m){var i8m=o08;i8m+=k08;i8m+=z08;i8m+=I08;throw i8m;}var timeBlock=function(type){var C08='-iconDown">';var R08='-timeblock">';var d08="div cla";var H08="-iconUp";var Z08="n/>";var w08="<spa";var r08="ct ";var p08="<sel";var l8m=J4h;l8m+=P6h;var j8m=Y2R;j8m+=y2R;var N8m=p08;N8m+=E4Y.p4h;N8m+=r08;N8m+=n2R;var n8m=w08;n8m+=Z08;var D8m=u28;D8m+=y1a;D8m+=y08;var b8m=x6R;b8m+=Y6R;b8m+=y2R;var E8m=H08;E8m+=V2R;E8m+=y2R;var T8m=N2R;T8m+=d08;T8m+=U08;T8m+=V2R;return T8m+classPrefix+R08+J0a+classPrefix+E8m+M08+i18n[u08]+c08+b8m+J0a+classPrefix+D8m+n8m+N8m+classPrefix+w7a+type+j8m+z0R+J0a+classPrefix+C08+M08+i18n[l8m]+c08+z0R+z0R;};var gap=function(){var G08='<span>:</span>';return G08;};var structure=$(J0a+classPrefix+k0R+a8m+classPrefix+v8m+J0a+classPrefix+t08+J0a+classPrefix+f8m+M08+i18n[u08]+c08+Q8m+x8m+classPrefix+S08+Y8m+i18n[J08]+o8m+z0R+J0a+classPrefix+k8m+z8m+I8m+classPrefix+p8m+r8m+J0a+classPrefix+w8m+g58+e58+classPrefix+s58+z0R+z0R+J0a+classPrefix+h58+z0R+J0a+classPrefix+Z8m+timeBlock(H8m)+gap()+timeBlock(d8m)+gap()+timeBlock(U8m)+timeBlock(R8m)+z0R+J0a+classPrefix+M8m+u8m);this[c8m]={container:structure,date:structure[C8m](e7a+classPrefix+G8m),title:structure[T1a](e7a+classPrefix+t8m),calendar:structure[T1a](e7a+classPrefix+F58),time:structure[T1a](e7a+classPrefix+S8m),error:structure[T1a](e7a+classPrefix+V58),input:$(input)};this[a1h]={d:u0R,display:u0R,namespace:J8m+Editor[y58][g2m]++,parts:{date:this[X3h][e2m][L58](X58)!==u0R,time:this[X3h][Y08][L58](W58)!==u0R,seconds:this[X3h][s2m][h2m](F8R)!==-G5h,hours12:this[X3h][Y08][F2m](m58)!==u0R}};this[V2m][n5R][G6R](this[F5R][V1a])[y2m](this[L2m][X2m])[W2m](this[m2m][A2m]);this[F5R][K2m][G6R](this[O2m][P2m])[q2m](this[B2m][A58]);this[K8R]();};$[i2m](Editor[y58][T2m],{destroy:function(){var K58=".editor-date";var D2m=K58;D2m+=O58;var b2m=O1h;b2m+=J4h;b2m+=R4R;b2m+=X1h;var E2m=P58;E2m+=X1h;E2m+=x6h;this[J6R]();this[F5R][n5R][o1a]()[E2m]();this[F5R][b2m][o1a](D2m);},errorMsg:function(msg){var q58="mpty";var N2m=E4Y.p4h;N2m+=B7h;N2m+=h6h;var n2m=e1h;n2m+=j9R;var error=this[n2m][N2m];if(msg){var j2m=N6h;j2m+=X1h;j2m+=l3h;j2m+=U1h;error[j2m](msg);}else{var l2m=E4Y.p4h;l2m+=q58;error[l2m]();}},hide:function(){this[J6R]();},max:function(date){var b58="_optionsTitle";var T58="max";var i58="lander";var B58="_setC";var v2m=B58;v2m+=u6h;v2m+=i58;var a2m=T58;a2m+=E58;this[X3h][a2m]=date;this[b58]();this[v2m]();},min:function(date){var l58="sTitle";var n58="ala";var Q2m=G1z;Q2m+=D58;Q2m+=n58;Q2m+=N58;var f2m=j58;f2m+=J4h;f2m+=l58;this[X3h][a58]=date;this[f2m]();this[Q2m]();},owns:function(node){var v58="contai";var Y2m=v58;Y2m+=J4h;Y2m+=d9h;var x2m=j1h;x2m+=U1h;x2m+=X1h;x2m+=d9h;return $(node)[A7a]()[x2m](this[F5R][Y2m])[o8R]>C5h;},val:function(set,write){var M58="oUtc";var R58="_dateT";var Z58=/(\d{4})\-(\d{2})\-(\d{2})/;var p58="utc";var I58="mom";var z58="isVali";var k58="ment";var Y58="isplay";var x58="tTitl";var Q58="tT";var M2m=f58;M2m+=Q58;M2m+=r9R;M2m+=E4Y.p4h;var R2m=w7h;R2m+=W3h;R2m+=x58;R2m+=E4Y.p4h;var U2m=e1h;U2m+=Y58;var d2m=p5R;d2m+=R0z;var o2m=z3R;o2m+=h6h;o2m+=V0R;o2m+=o7h;if(set===undefined){return this[a1h][e1h];}if(set instanceof Date){this[a1h][e1h]=this[o58](set);}else if(set===u0R||set===h8R){this[a1h][e1h]=u0R;}else if(typeof set===o2m){var k2m=Y9h;k2m+=k58;if(window[k2m]){var p2m=C9h;p2m+=E58;var I2m=z58;I2m+=e1h;var z2m=I58;z2m+=E4Y.p4h;z2m+=Z1R;var m=window[z2m][p58](set,this[X3h][Y08],this[X3h][r58],this[X3h][w58]);this[a1h][e1h]=m[I2m]()?m[p2m]():u0R;}else{var match=set[L58](Z58);this[a1h][e1h]=match?new Date(Date[H58](match[G5h],match[t5h]-G5h,match[S5h])):u0R;}}if(write||write===undefined){if(this[a1h][e1h]){this[d58]();}else{var Z2m=E9h;Z2m+=u6h;Z2m+=U1h;var w2m=V0R;w2m+=U58;var r2m=e1h;r2m+=E4Y.k4h;r2m+=l3h;this[r2m][w2m][Z2m](set);}}if(!this[a1h][e1h]){var H2m=R58;H2m+=M58;this[a1h][e1h]=this[H2m](new Date());}this[a1h][d2m]=new Date(this[a1h][e1h][p5z]());this[a1h][U2m][u58](G5h);this[R2m]();this[c58]();this[M2m]();},_constructor:function(){var R48="_setTitle";var Z48="_correctMonth";var o48="hasCla";var Q48='keyup.editor-datetime';var v48="ner";var j48=":vi";var N48='focus.editor-datetime click.editor-datetime';var n48="amPm";var b48="secondsIncrement";var T48="minutesIncrement";var i48="_optionsTime";var q48="hours12";var P48='div.editor-datetime-timeblock';var O48="move";var K48="seconds";var m48="parts";var W48="onChange";var X48="refix";var L48="classP";var y48="part";var V48="onsTitle";var F48="_opti";var s48="arts";var e48="ours12";var g48="minute";var J58="option";var S58="pm";var t58="utocompl";var G58="nge";var P5m=E4Y.k4h;P5m+=J4h;var R0m=C58;R0m+=X1h;var U0m=X3h;U0m+=F4R;U0m+=G58;var d0m=E4Y.k4h;d0m+=J4h;var H0m=M5R;H0m+=X1h;H0m+=z5R;var l0m=E4Y.k4h;l0m+=J4h;var j0m=E4Y.k4h;j0m+=P9h;j0m+=P9h;var N0m=u6h;N0m+=t58;N0m+=E4Y.p4h;N0m+=c6h;var n0m=D6h;n0m+=X1h;n0m+=h6h;var D0m=O1h;D0m+=J4h;D0m+=i7h;D0m+=c9h;var b0m=i7h;b0m+=l3h;var E0m=u6h;E0m+=l3h;var T0m=u6h;T0m+=l3h;T0m+=S58;var i0m=w7h;i0m+=J58;i0m+=a1h;i0m+=k3h;var B0m=g48;B0m+=a1h;var q0m=N6h;q0m+=e48;var P0m=i7h;P0m+=s48;var O0m=h48;O0m+=P2a;O0m+=G9h;O0m+=k3h;var K0m=F48;K0m+=V48;var S2m=y48;S2m+=a1h;var c2m=e1h;c2m+=u6h;c2m+=X1h;c2m+=E4Y.p4h;var u2m=L48;u2m+=X48;var that=this;var classPrefix=this[X3h][u2m];var container=this[F5R][n5R];var i18n=this[X3h][o9a];var onChange=this[X3h][W48];if(!this[a1h][m48][c2m]){var t2m=J4h;t2m+=l5R;t2m+=E4Y.p4h;var G2m=e1h;G2m+=u6h;G2m+=X1h;G2m+=E4Y.p4h;var C2m=e1h;C2m+=E4Y.k4h;C2m+=l3h;this[C2m][G2m][S0R](J0R,t2m);}if(!this[a1h][S2m][O58]){var s0m=J4h;s0m+=E4Y.k4h;s0m+=J4h;s0m+=E4Y.p4h;var e0m=e1h;e0m+=A48;e0m+=u6h;e0m+=x6h;var g0m=X3h;g0m+=a1h;g0m+=a1h;var J2m=e1h;J2m+=E4Y.k4h;J2m+=l3h;this[J2m][O58][g0m](e0m,s0m);}if(!this[a1h][m48][K48]){var X0m=h6h;X0m+=M9R;X0m+=u9R;var L0m=E4Y.p4h;L0m+=e9a;var y0m=a1h;y0m+=i7h;y0m+=u6h;y0m+=J4h;var V0m=Z1h;V0m+=O48;var F0m=E4Y.p4h;F0m+=e9a;var h0m=e1h;h0m+=E4Y.k4h;h0m+=l3h;this[h0m][O58][j3R](P48)[F0m](t5h)[V0m]();this[F5R][O58][j3R](y0m)[L0m](G5h)[X0m]();}if(!this[a1h][m48][q48]){var A0m=r2z;A0m+=u7a;A0m+=E4Y.p4h;var m0m=K2R;m0m+=X1h;var W0m=e1h;W0m+=E4Y.k4h;W0m+=l3h;this[W0m][O58][j3R](P48)[m0m]()[A0m]();}this[K0m]();this[O0m](B48,this[a1h][P0m][q0m]?V4h:A4h,G5h);this[i48](B0m,n4h,this[X3h][T48]);this[i0m](E48,n4h,this[X3h][b48]);this[D48](T0m,[E0m,b0m],i18n[n48]);this[F5R][D0m][n0m](N0m,j0m)[l0m](N48,function(){var f48=':disabled';var l48="sible";var I0m=w7h;I0m+=U6R;I0m+=F3h;var z0m=V0R;z0m+=U58;var k0m=e1h;k0m+=E4Y.k4h;k0m+=l3h;var o0m=e3a;o0m+=U1h;var Y0m=O1h;Y0m+=a1h;var x0m=O1h;x0m+=J4h;x0m+=i7h;x0m+=c9h;var Q0m=O4R;Q0m+=l3h;var f0m=j48;f0m+=l48;var v0m=M5R;v0m+=X1h;v0m+=a48;v0m+=v48;var a0m=e1h;a0m+=j9R;if(that[a0m][v0m][T1R](f0m)||that[Q0m][x0m][Y0m](f48)){return;}that[o0m](that[k0m][z0m][I4R](),k8R);that[I0m]();})[l5R](Q48,function(){var w0m=j48;w0m+=a1h;w0m+=O1h;w0m+=h3h;var r0m=w5R;r0m+=Z1R;r0m+=a48;r0m+=v48;var p0m=O4R;p0m+=l3h;if(that[p0m][r0m][T1R](w0m)){var Z0m=e1h;Z0m+=E4Y.k4h;Z0m+=l3h;that[I4R](that[Z0m][o2R][I4R](),k8R);}});this[F5R][H0m][d0m](U0m,R0m,function(){var h18="setSeconds";var s18='-seconds';var e18="setUTCMinutes";var g18='-minutes';var J48="_setTime";var t48="urs";var G48="Hours";var c48="ours1";var u48='-ampm';var M48='-hours';var U48="setUTCFullYear";var d48="tCalander";var H48='-year';var w48="spla";var r48="tTit";var p48="_setCal";var I48='-month';var z48="sCl";var k48="hasCl";var Y48="sitio";var x48="_po";var O5m=x48;O5m+=Y48;O5m+=J4h;var K5m=e1h;K5m+=E4Y.k4h;K5m+=l3h;var A5m=o48;A5m+=L9h;var W5m=k48;W5m+=E9z;W5m+=a1h;var S0m=F4R;S0m+=z48;S0m+=Z2z;var t0m=N6h;t0m+=E9z;t0m+=T9z;t0m+=Z2z;var select=$(this);var val=select[I4R]();if(select[X5R](classPrefix+I48)){var c0m=p48;c0m+=u6h;c0m+=N58;var u0m=f58;u0m+=r48;u0m+=w9h;var M0m=p5R;M0m+=w48;M0m+=x6h;that[Z48](that[a1h][M0m],val);that[u0m]();that[c0m]();}else if(select[X5R](classPrefix+H48)){var G0m=f58;G0m+=d48;var C0m=p5R;C0m+=a1h;C0m+=i7h;C0m+=l6R;that[a1h][C0m][U48](val);that[R48]();that[G0m]();}else if(select[t0m](classPrefix+M48)||select[S0m](classPrefix+u48)){var g5m=N6h;g5m+=c48;g5m+=Y3h;var J0m=y48;J0m+=a1h;if(that[a1h][J0m][g5m]){var X5m=W3h;X5m+=e1a;X5m+=C48;X5m+=G48;var L5m=E9h;L5m+=u6h;L5m+=U1h;var y5m=X3h;y5m+=C5R;y5m+=d9h;var V5m=e1h;V5m+=E4Y.k4h;V5m+=l3h;var F5m=E9h;F5m+=u6h;F5m+=U1h;var h5m=u28;h5m+=N6h;h5m+=E4Y.k4h;h5m+=t48;var s5m=P9h;s5m+=V0R;s5m+=e1h;var e5m=e1h;e5m+=E4Y.k4h;e5m+=l3h;var hours=$(that[e5m][n5R])[s5m](e7a+classPrefix+h5m)[F5m]()*G5h;var pm=$(that[V5m][y5m])[T1a](e7a+classPrefix+u48)[L5m]()===V9z;that[a1h][e1h][X5m](hours===V4h&&!pm?C5h:pm&&hours!==V4h?hours+V4h:hours);}else{that[a1h][e1h][S48](val);}that[J48]();that[d58](p8R);onChange();}else if(select[W5m](classPrefix+g18)){var m5m=G1z;m5m+=E4Y.p4h;m5m+=X1h;m5m+=k3h;that[a1h][e1h][e18](val);that[m5m]();that[d58](p8R);onChange();}else if(select[A5m](classPrefix+s18)){that[a1h][e1h][h18](val);that[J48]();that[d58](p8R);onChange();}that[K5m][o2R][m4R]();that[O5m]();})[P5m](L4a,function(e){var z18='day';var k18='year';var Y18="llY";var x18="setUTCFu";var v18="UTCDate";var a18="dex";var l18="selectedIn";var j18="han";var N18='-iconDown';var n18="selectedIndex";var D18='select';var i18="alan";var B18="focu";var K18="tar";var A18="abled";var m18="-iconLe";var W18="nU";var X18="-ico";var L18="has";var y18="stopPropagation";var V18="nodeName";var F18="oLowerCase";var i5m=S1h;i5m+=c9h;i5m+=C9h;i5m+=J4h;var B5m=a88;B5m+=E4Y.p4h;B5m+=I8R;var q5m=X1h;q5m+=F18;var nodeName=e[z8a][V18][q5m]();if(nodeName===B5m){return;}e[y18]();if(nodeName===i5m){var z5m=L18;z5m+=S6h;z5m+=K2R;z5m+=a1h;var Q5m=X18;Q5m+=W18;Q5m+=i7h;var f5m=o48;f5m+=L9h;var D5m=m18;D5m+=i6R;var b5m=Q5R;b5m+=A18;var E5m=i7h;E5m+=u3z;E5m+=E4Y.p4h;E5m+=Z1R;var T5m=K18;T5m+=h6a;var button=$(e[T5m]);var parent=button[E5m]();var select;if(parent[X5R](b5m)){return;}if(parent[X5R](classPrefix+D5m)){var N5m=O1h;N5m+=J4h;N5m+=R4R;N5m+=X1h;var n5m=e1h;n5m+=T1R;n5m+=i7h;n5m+=l6R;that[a1h][n4R][O18](that[a1h][n5m][P18]()-G5h);that[R48]();that[c58]();that[F5R][N5m][m4R]();}else if(parent[X5R](classPrefix+q18)){var v5m=B18;v5m+=a1h;var a5m=G1z;a5m+=D58;a5m+=i18;a5m+=b2a;var l5m=Q5R;l5m+=S1R;var j5m=N7a;j5m+=U1h;j5m+=b1R;that[Z48](that[a1h][j5m],that[a1h][l5m][P18]()+G5h);that[R48]();that[a5m]();that[F5R][o2R][v5m]();}else if(parent[f5m](classPrefix+Q5m)){var k5m=X3h;k5m+=F4R;k5m+=G58;var o5m=U1h;o5m+=T18;var Y5m=e7R;Y5m+=E18;var x5m=j1h;x5m+=J4h;x5m+=e1h;select=parent[b18]()[x5m](D18)[C5h];select[n18]=select[n18]!==select[Y5m][o5m]-G5h?select[n18]+G5h:C5h;$(select)[k5m]();}else if(parent[z5m](classPrefix+N18)){var w5m=X3h;w5m+=j18;w5m+=z9h;var r5m=J58;r5m+=a1h;var p5m=l18;p5m+=a18;var I5m=l18;I5m+=P1h;I5m+=p6h;select=parent[b18]()[T1a](D18)[C5h];select[I5m]=select[p5m]===C5h?select[r5m][o8R]-G5h:select[n18]-G5h;$(select)[w5m]();}else{var M5m=a1h;M5m+=i4R;M5m+=v18;var R5m=l3h;R5m+=E4Y.k4h;R5m+=Z1R;R5m+=N6h;var U5m=e1h;U5m+=u6h;U5m+=X1h;U5m+=u6h;var d5m=f18;d5m+=v6h;d5m+=Q18;var H5m=e1h;H5m+=D6h;H5m+=u6h;var Z5m=x18;Z5m+=Y18;Z5m+=o18;if(!that[a1h][e1h]){that[a1h][e1h]=that[o58](new Date());}that[a1h][e1h][u58](G5h);that[a1h][e1h][Z5m](button[H5m](k18));that[a1h][e1h][d5m](button[U5m](R5m));that[a1h][e1h][M5m](button[b0R](z18));that[d58](p8R);if(!that[a1h][m48][O58]){setTimeout(function(){that[J6R]();},h4h);}else{that[c58]();}onChange();}}else{that[F5R][o2R][m4R]();}});},_compareDates:function(a,b){var w18="_dateToUtcString";var r18="cString";var p18="Ut";var I18="_dateTo";var u5m=I18;u5m+=p18;u5m+=r18;return this[w18](a)===this[u5m](b);},_correctMonth:function(date,month){var U18="getUTCDate";var H18="FullYear";var C5m=f18;C5m+=v6h;C5m+=Q18;var c5m=Z18;c5m+=H18;var days=this[d18](date[c5m](),month);var correctDays=date[U18]()>days;date[C5m](month);if(correctDays){date[u58](days);date[O18](month);}},_daysInMonth:function(year,month){var i4h=31;var B4h=30;var q4h=29;var P4h=28;var isLeap=year%J5h===C5h&&(year%N4h!==C5h||year%l4h===C5h);var months=[i4h,isLeap?q4h:P4h,i4h,B4h,i4h,B4h,i4h,i4h,B4h,i4h,B4h,i4h];return months[month];},_dateToUtc:function(s){var t18="getSeconds";var G18="getHours";var M18="inu";var R18="getM";var S5m=R18;S5m+=M18;S5m+=s08;var t5m=h6a;t5m+=v6h;t5m+=Z1R;t5m+=N6h;var G5m=u18;G5m+=n6h;G5m+=S6h;return new Date(Date[G5m](s[c18](),s[t5m](),s[C18](),s[G18](),s[S5m](),s[t18]()));},_dateToUtcString:function(d){var g68="_pad";var J18="llYear";var S18="getUTCFu";var e4m=Z18;e4m+=F6h;e4m+=H1h;var g4m=w7h;g4m+=w1R;g4m+=e1h;var J5m=S18;J5m+=J18;return d[J5m]()+w7a+this[g4m](d[P18]()+G5h)+w7a+this[g68](d[e4m]());},_hide:function(){var h68="n.";var s68="eydow";var L4m=f9R;L4m+=e68;var y4m=E4Y.k4h;y4m+=P9h;y4m+=P9h;var V4m=S1h;V4m+=E4Y.k4h;V4m+=e1h;V4m+=x6h;var F4m=W7h;F4m+=s68;F4m+=h68;var h4m=P1h;h4m+=g0R;h4m+=X3h;h4m+=N6h;var s4m=e1h;s4m+=E4Y.k4h;s4m+=l3h;var namespace=this[a1h][c9a];this[s4m][n5R][h4m]();$(window)[o1a](e7a+namespace);$(document)[o1a](F4m+namespace);$(F68)[o1a](V68+namespace);$(V4m)[y4m](L4m+namespace);},_hours24To12:function(val){return val===C5h?V4h:val>V4h?val-V4h:val;},_htmlDay:function(day){var j68="day";var N68='" data-day="';var n68="month";var D68='" data-month="';var b68='-day" type="button" ';var T68='<td data-day="';var i68="selected";var B68="today";var q68="></td>";var P68=" class=\"empty\"";var O68="<td";var A68="lassPr";var m68="\" cl";var W68="button ";var X68="ear=\"";var L68="-y";var n4m=y68;n4m+=e1h;n4m+=y2R;var D4m=e1h;D4m+=u6h;D4m+=x6h;var b4m=x6h;b4m+=K5a;b4m+=h6h;var E4m=e1h;E4m+=F0R;E4m+=L68;E4m+=X68;var T4m=u28;T4m+=W68;var i4m=m68;i4m+=u6h;i4m+=U08;i4m+=V2R;var B4m=e1h;B4m+=u6h;B4m+=x6h;var m4m=X3h;m4m+=A68;m4m+=K68;var W4m=e1h;W4m+=u6h;W4m+=x6h;if(day[Z5a]){var X4m=O68;X4m+=P68;X4m+=q68;return X4m;}var classes=[W4m];var classPrefix=this[X3h][m4m];if(day[W5R]){var K4m=e1h;K4m+=b5R;var A4m=R4R;A4m+=a1h;A4m+=N6h;classes[A4m](K4m);}if(day[B68]){var O4m=X1h;O4m+=E4Y.k4h;O4m+=J3h;O4m+=x6h;classes[E8R](O4m);}if(day[i68]){var q4m=a1h;q4m+=w88;q4m+=E4Y.p4h;q4m+=e1h;var P4m=i7h;P4m+=j6h;P4m+=M4R;classes[P4m](q4m);}return T68+day[B4m]+i4m+classes[d2z](a0R)+k0R+E68+classPrefix+T4m+classPrefix+b68+E4m+day[b4m]+D68+day[n68]+N68+day[j68]+k0R+day[D4m]+c08+n4m;},_htmlMonth:function(year,month){var A78='</table>';var m78='</tbody>';var W78="_htmlMonthHead";var X78='<thead>';var L78='<table class="';var y78="-icon";var V78="um";var F78="ekN";var h78=" we";var s78='-table';var g78='</tr>';var J68="_htmlWeekOfYear";var t68="<tr";var G68="getUTCDay";var C68="_compareDates";var c68="leDays";var u68="lDa";var M68="_htm";var U68="UTCHou";var d68="Mi";var H68="conds";var Z68="setS";var w68="nutes";var r68="UTCMi";var p68="etSe";var z68="getUTCDa";var k68="stDa";var x68="kNumbe";var Q68="howWee";var v68="thea";var a68="y>";var l68="<tbo";var D4h=59;var m4h=23;var s1m=e4z;s1m+=O1h;s1m+=J4h;var e1m=l68;e1m+=e1h;e1m+=a68;var g1m=x6R;g1m+=v68;g1m+=f68;var H4m=a1h;H4m+=Q68;H4m+=x68;H4m+=h6h;var v4m=Y68;v4m+=H1h;var a4m=l3h;a4m+=V0R;a4m+=n1h;a4m+=E4Y.p4h;var l4m=P9h;l4m+=o68;l4m+=k68;l4m+=x6h;var j4m=z68;j4m+=x6h;var N4m=u18;N4m+=C48;var now=this[o58](new Date()),days=this[d18](year,month),before=new Date(Date[N4m](year,month,G5h))[j4m](),data=[],row=[];if(this[X3h][l4m]>C5h){before-=this[X3h][I68];if(before<C5h){before+=g4h;}}var cells=days+before,after=cells;while(after>g4h){after-=g4h;}cells+=g4h-after;var minDate=this[X3h][a4m];var maxDate=this[X3h][v4m];if(minDate){var Q4m=a1h;Q4m+=p68;Q4m+=w5R;Q4m+=e08;var f4m=T3h;f4m+=r68;f4m+=w68;minDate[S48](C5h);minDate[f4m](C5h);minDate[Q4m](C5h);}if(maxDate){var o4m=Z68;o4m+=E4Y.p4h;o4m+=H68;var Y4m=f18;Y4m+=d68;Y4m+=w68;var x4m=W3h;x4m+=X1h;x4m+=U68;x4m+=R68;maxDate[x4m](m4h);maxDate[Y4m](D4h);maxDate[o4m](D4h);}for(var i=C5h,r=C5h;i<cells;i++){var r4m=M68;r4m+=u68;r4m+=x6h;var p4m=i7h;p4m+=j6h;p4m+=M4R;var I4m=Q5z;I4m+=T2R;I4m+=b1R;var z4m=d1h;z4m+=c68;var k4m=w7h;k4m+=v1R;k4m+=Q08;k4m+=s08;var day=new Date(Date[H58](year,month,G5h+(i-before))),selected=this[a1h][e1h]?this[k4m](day,this[a1h][e1h]):k8R,today=this[C68](day,now),empty=i<before||i>=days+before,disabled=minDate&&day<minDate||maxDate&&day>maxDate;var disableDays=this[X3h][z4m];if($[I4m](disableDays)&&$[U4R](day[G68](),disableDays)!==-G5h){disabled=p8R;}else if(typeof disableDays===E4Y.U4h&&disableDays(day)===p8R){disabled=p8R;}var dayConfig={day:G5h+(i-before),month:month,year:year,selected:selected,today:today,disabled:disabled,empty:empty};row[p4m](this[r4m](dayConfig));if(++r===g4h){var Z4m=t68;Z4m+=y2R;var w4m=i7h;w4m+=j6h;w4m+=a1h;w4m+=N6h;if(this[X3h][S68]){row[P5R](this[J68](i-before,month,year));}data[w4m](Z4m+row[d2z](h8R)+g78);row=[];r=C5h;}}var classPrefix=this[X3h][e78];var className=classPrefix+s78;if(this[X3h][H4m]){var d4m=h78;d4m+=F78;d4m+=V78;d4m+=A4z;className+=d4m;}if(minDate){var c4m=Y3R;c4m+=X3h;c4m+=W7h;var u4m=J4h;u4m+=E4Y.k4h;u4m+=I0a;var M4m=J3R;M4m+=x6h;var R4m=y78;R4m+=y3a;R4m+=k5a;R4m+=X1h;var U4m=e1h;U4m+=O1h;U4m+=E9h;U4m+=C4h;var underMin=minDate>new Date(Date[H58](year,month,G5h,C5h,C5h,C5h));this[F5R][L5a][T1a](U4m+classPrefix+R4m)[S0R](M4m,underMin?u4m:c4m);}if(maxDate){var J4m=S1h;J4m+=U1h;J4m+=f7a;J4m+=W7h;var S4m=Q5R;S4m+=S1R;var t4m=P9h;t4m+=O1h;t4m+=J4h;t4m+=e1h;var G4m=e1h;G4m+=E4Y.k4h;G4m+=l3h;var C4m=u18;C4m+=n6h;C4m+=S6h;var overMax=maxDate<new Date(Date[C4m](year,month+G5h,G5h,C5h,C5h,C5h));this[G4m][L5a][t4m](U0z+classPrefix+q18)[S0R](S4m,overMax?S4R:J4m);}return L78+className+k0R+X78+this[W78]()+g1m+e1m+data[s1m](h8R)+m78+A78;},_htmlMonthHead:function(){var i78='<th>';var B78="th>";var q78="></th>";var P78="<th";var y1m=z7a;y1m+=E4Y.k4h;y1m+=O1h;y1m+=J4h;var a=[];var firstDay=this[X3h][I68];var i18n=this[X3h][o9a];var dayName=function(day){var O78="ays";var K78="weekd";var h1m=K78;h1m+=O78;day+=firstDay;while(day>=g4h){day-=g4h;}return i18n[h1m][day];};if(this[X3h][S68]){var F1m=P78;F1m+=q78;a[E8R](F1m);}for(var i=C5h;i<g4h;i++){var V1m=N2R;V1m+=q2R;V1m+=B78;a[E8R](i78+dayName(i)+V1m);}return a[y1m](h8R);},_htmlWeekOfYear:function(d,m,y){var j78='<td class="';var N78="ceil";var n78="getDay";var D78="etDat";var b78="assP";var E78="k\">";var T78="-wee";var Y4h=86400000;var m1m=y68;m1m+=f68;var W1m=T78;W1m+=E78;var X1m=w6R;X1m+=b78;X1m+=h6h;X1m+=K68;var L1m=a1h;L1m+=D78;L1m+=E4Y.p4h;var date=new Date(y,m,d,C5h,C5h,C5h,C5h);date[L1m](date[C18]()+J5h-(date[n78]()||g4h));var oneJan=new Date(y,C5h,G5h);var weekNum=Math[N78](((date-oneJan)/Y4h+G5h)/g4h);return j78+this[X3h][X1m]+W1m+weekNum+m1m;},_options:function(selector,values,labels){var f78='</option>';var a78="<option v";var l78="ect.";var P1m=U1h;P1m+=T18;var O1m=P58;O1m+=p9h;var K1m=a1h;K1m+=h2R;K1m+=l78;var A1m=e1h;A1m+=E4Y.k4h;A1m+=l3h;if(!labels){labels=values;}var select=this[A1m][n5R][T1a](K1m+this[X3h][e78]+w7a+selector);select[O1m]();for(var i=C5h,ien=values[P1m];i<ien;i++){var q1m=a78;q1m+=v78;select[G6R](q1m+values[i]+k0R+labels[i]+f78);}},_optionSet:function(selector,val){var k78="unknown";var Y78="classPr";var x78="n:selec";var j1m=W0R;j1m+=m0R;var N1m=X1h;N1m+=E4Y.p4h;N1m+=D3h;var n1m=Q78;n1m+=x78;n1m+=X1h;n1m+=A1h;var D1m=P9h;D1m+=O1h;D1m+=J4h;D1m+=e1h;var b1m=e3a;b1m+=U1h;var E1m=r5z;E1m+=u6h;E1m+=J4h;var T1m=y5z;T1m+=E4Y.p4h;T1m+=J4h;var i1m=Y78;i1m+=E4Y.p4h;i1m+=c2R;var B1m=e1h;B1m+=E4Y.k4h;B1m+=l3h;var select=this[B1m][n5R][T1a](o78+this[X3h][i1m]+w7a+selector);var span=select[b18]()[T1m](E1m);select[b1m](val);var selected=select[D1m](n1m);span[J1R](selected[o8R]!==C5h?selected[N1m]():this[X3h][j1m][k78]);},_optionsTime:function(select,count,inc){var H78="n v";var Z78="<op";var r78="Available";var p78="hours";var I78="Pref";var z78="aine";var v1m=w7h;v1m+=w1R;v1m+=e1h;var a1m=y4R;a1m+=z78;a1m+=h6h;var l1m=D5R;l1m+=L9h;l1m+=I78;l1m+=v08;var classPrefix=this[X3h][l1m];var sel=this[F5R][a1m][T1a](o78+classPrefix+w7a+select);var start=C5h,end=count;var allowed;var render=count===V4h?function(i){return i;}:this[v1m];if(count===V4h){start=G5h;end=y4h;}if(count===V4h||count===A4h){var f1m=p78;f1m+=r78;allowed=this[X3h][f1m];}for(var i=start;i<end;i+=inc){if(!allowed||$[U4R](i,allowed)!==-G5h){var o1m=x6R;o1m+=E4Y.k4h;o1m+=w78;o1m+=i08;var Y1m=V2R;Y1m+=y2R;var x1m=Z78;x1m+=P2a;x1m+=H78;x1m+=v78;var Q1m=Z0a;Q1m+=B3R;sel[Q1m](x1m+i+Y1m+render(i)+o1m);}}},_optionsTitle:function(year,month){var t78="_range";var G78="months";var c78="sPref";var u78="getFullY";var M78="rRang";var R78="tFullYear";var U78="arRang";var d78="yea";var U1m=d78;U1m+=h6h;var d1m=w7h;d1m+=h6h;d1m+=k6h;d1m+=z9h;var H1m=h48;H1m+=E18;var Z1m=B1z;Z1m+=U78;Z1m+=E4Y.p4h;var w1m=z9h;w1m+=R78;var r1m=d78;r1m+=M78;r1m+=E4Y.p4h;var p1m=u78;p1m+=K5a;p1m+=h6h;var I1m=Y68;I1m+=D6h;I1m+=E4Y.p4h;var z1m=O1h;z1m+=G4h;z1m+=E4Y.r4h;z1m+=J4h;var k1m=s6R;k1m+=c78;k1m+=v08;var classPrefix=this[X3h][k1m];var i18n=this[X3h][z1m];var min=this[X3h][a58];var max=this[X3h][I1m];var minYear=min?min[c18]():u0R;var maxYear=max?max[c18]():u0R;var i=minYear!==u0R?minYear:new Date()[p1m]()-this[X3h][r1m];var j=maxYear!==u0R?maxYear:new Date()[w1m]()+this[X3h][Z1m];this[H1m](C78,this[d1m](C5h,F4h),i18n[G78]);this[D48](U1m,this[t78](i,j));},_pad:function(i){var S78='0';return i<h4h?S78+i:i;},_position:function(){var V98='left';var F98='top';var h98="outerHei";var s98="ody";var e98="outerHeigh";var g98="rWidth";var J78="oute";var g6m=F3h;g6m+=O1h;g6m+=e1h;g6m+=Q8R;var S1m=X1h;S1m+=E4Y.k4h;S1m+=i7h;var t1m=J78;t1m+=g98;var G1m=e98;G1m+=X1h;var C1m=S1h;C1m+=s98;var c1m=h98;c1m+=o7h;c1m+=N6h;c1m+=X1h;var u1m=O1h;u1m+=J4h;u1m+=i7h;u1m+=c9h;var M1m=O4R;M1m+=l3h;var R1m=e1h;R1m+=E4Y.k4h;R1m+=l3h;var offset=this[R1m][o2R][z9R]();var container=this[M1m][n5R];var inputHeight=this[F5R][u1m][c1m]();container[S0R]({top:offset[i8a]+inputHeight,left:offset[Y5a]})[t9R](C1m);var calHeight=container[G1m]();var calWidth=container[t1m]();var scrollTop=$(window)[h9R]();if(offset[S1m]+inputHeight+calHeight-scrollTop>$(window)[l9R]()){var J1m=A6R;J1m+=a1h;var newTop=offset[i8a]-calHeight;container[J1m](F98,newTop<C5h?C5h:newTop);}if(calWidth+offset[Y5a]>$(window)[g6m]()){var e6m=X3h;e6m+=a1h;e6m+=a1h;var newLeft=$(window)[S6a]()-calWidth;container[e6m](V98,newLeft<C5h?C5h:newLeft);}},_range:function(start,end){var a=[];for(var i=start;i<=end;i++){a[E8R](i);}return a;},_setCalander:function(){var m98="cale";var W98="lMonth";var X98="_h";var L98="Year";var y98="Full";var s6m=N7a;s6m+=U1h;s6m+=u6h;s6m+=x6h;if(this[a1h][s6m]){var L6m=h6a;L6m+=H58;L6m+=y98;L6m+=L98;var y6m=e1h;y6m+=A48;y6m+=b1R;var V6m=X98;V6m+=u1R;V6m+=W98;var F6m=u6h;F6m+=y9R;var h6m=m98;h6m+=q6h;h6m+=u6h;h6m+=h6h;this[F5R][h6m][Z5a]()[F6m](this[V6m](this[a1h][y6m][L6m](),this[a1h][n4R][P18]()));}},_setTitle:function(){var P98="etUTCMon";var K98="CFullY";var K6m=A98;K6m+=K98;K6m+=o18;var A6m=e1h;A6m+=T1R;A6m+=Q1a;A6m+=x6h;var m6m=x6h;m6m+=K5a;m6m+=h6h;var W6m=j58;W6m+=J4h;W6m+=O98;var X6m=o7h;X6m+=P98;X6m+=Q8R;this[q98](C78,this[a1h][n4R][X6m]());this[W6m](m6m,this[a1h][A6m][K6m]());},_setTime:function(){var a98="getUTCMinutes";var l98='minutes';var j98="_hours24To12";var N98="onS";var n98="_opt";var D98="tionSet";var b98="UTCHours";var E98="urs12";var T98="onSet";var B98="Seco";var N6m=o7h;N6m+=i4R;N6m+=B98;N6m+=e08;var n6m=z7h;n6m+=i98;n6m+=T98;var q6m=L9a;q6m+=E98;var P6m=i7h;P6m+=u6h;P6m+=h6h;P6m+=L5R;var O6m=h6a;O6m+=b98;var d=this[a1h][e1h];var hours=d?d[O6m]():C5h;if(this[a1h][P6m][q6m]){var E6m=i7h;E6m+=l3h;var T6m=u6h;T6m+=l3h;T6m+=i7h;T6m+=l3h;var i6m=w7h;i6m+=e7R;i6m+=D98;var B6m=n98;B6m+=O1h;B6m+=N98;B6m+=i4R;this[B6m](B48,this[j98](hours));this[i6m](T6m,hours<V4h?F9z:E6m);}else{var D6m=N6h;D6m+=E4Y.k4h;D6m+=S9h;D6m+=a1h;var b6m=n98;b6m+=O1h;b6m+=l5R;b6m+=O98;this[b6m](D6m,hours);}this[n6m](l98,d?d[a98]():C5h);this[q98](E48,d?d[N6m]():C5h);},_show:function(){var k98='keydown.';var o98="_posi";var Y98="osit";var x98="ll.";var Q98="scro";var f98="size.";var v98=" re";var x6m=E4Y.k4h;x6m+=J4h;var v6m=v98;v6m+=f98;var a6m=Q98;a6m+=x98;var l6m=E4Y.k4h;l6m+=J4h;var j6m=w7h;j6m+=i7h;j6m+=Y98;j6m+=G5a;var that=this;var namespace=this[a1h][c9a];this[j6m]();$(window)[l6m](a6m+namespace+v6m+namespace,function(){var f6m=o98;f6m+=P2a;f6m+=J4h;that[f6m]();});$(F68)[l5R](V68+namespace,function(){var Q6m=o98;Q6m+=X1h;Q6m+=O1h;Q6m+=l5R;that[Q6m]();});$(document)[x6m](k98+namespace,function(e){var s4h=9;if(e[F4a]===s4h||e[F4a]===O4h||e[F4a]===y4h){var Y6m=w7h;Y6m+=h1a;Y6m+=e1h;Y6m+=E4Y.p4h;that[Y6m]();}});setTimeout(function(){var k6m=X3h;k6m+=H8R;k6m+=e68;var o6m=E4Y.k4h;o6m+=J4h;$(f5R)[o6m](k6m+namespace,function(e){var z98="arget";var w6m=e1h;w6m+=j9R;var r6m=X1h;r6m+=z98;var p6m=U1h;p6m+=E4Y.p4h;p6m+=C3a;var I6m=P9h;I6m+=O1h;I6m+=U1h;I6m+=T5z;var z6m=X1h;z6m+=z98;var parents=$(e[z6m])[A7a]();if(!parents[I6m](that[F5R][n5R])[p6m]&&e[r6m]!==that[w6m][o2R][C5h]){that[J6R]();}});},h4h);},_writeOutput:function(focus){var Z98="moment";var w98="rmat";var r98="ullY";var p98="getUTCMon";var I98="CDat";var G6m=E9h;G6m+=u6h;G6m+=U1h;var C6m=V0R;C6m+=i7h;C6m+=j6h;C6m+=X1h;var c6m=A98;c6m+=I98;c6m+=E4Y.p4h;var u6m=w7h;u6m+=i7h;u6m+=u6h;u6m+=e1h;var M6m=p98;M6m+=Q8R;var R6m=w7h;R6m+=i7h;R6m+=u6h;R6m+=e1h;var U6m=Z18;U6m+=j3h;U6m+=r98;U6m+=o18;var d6m=V3h;d6m+=w98;var H6m=P9h;H6m+=E4Y.k4h;H6m+=H28;H6m+=X1h;var Z6m=j6h;Z6m+=X1h;Z6m+=X3h;var date=this[a1h][e1h];var out=window[Z98]?window[Z98][Z6m](date,undefined,this[X3h][r58],this[X3h][w58])[H6m](this[X3h][d6m]):date[U6m]()+w7a+this[R6m](date[M6m]()+G5h)+w7a+this[u6m](date[c6m]());this[F5R][C6m][G6m](out);if(focus){var S6m=V3h;S6m+=X3h;S6m+=j6h;S6m+=a1h;var t6m=O1h;t6m+=H98;this[F5R][t6m][S6m]();}}});Editor[y58][J6m]=C5h;Editor[y58][g7m]={classPrefix:d98,disableDays:u0R,firstDay:G5h,format:U98,hoursAvailable:u0R,i18n:Editor[K0R][e7m][R98],maxDate:u0R,minDate:u0R,minutesIncrement:G5h,momentStrict:p8R,momentLocale:s7m,onChange:function(){},secondsIncrement:G5h,showWeekNumber:k8R,yearRange:h4h};(function(){var I5Y="uploadMany";var z5Y="disa";var k5Y='upload.editor';var l5Y="noFileText";var B5Y="_pic";var L5Y="_picker";var F5Y="ker";var h5Y="_p";var t0Y="datepick";var u0Y="epicker";var d0Y="datepicker";var b0Y="checked";var T0Y="_addOptions";var i0Y="radio";var e0Y="_editor_val";var H2Y='value';var Z2Y='</label>';var r2Y='_';var p2Y='<input id="';var Y2Y="put:last";var a2Y="checkbox";var D2Y="ast";var T2Y="separator";var e2Y="_add";var H8Y="placeholder";var Z8Y="inp";var w8Y="select";var r8Y="np";var k8Y="eI";var o8Y="textarea";var Y8Y="inpu";var f8Y="password";var v8Y='<input/>';var a8Y="_inp";var j8Y='text';var n8Y="<i";var D8Y="_val";var E8Y="_v";var i8Y='disabled';var B8Y="prop";var q8Y="_input";var P8Y="_inpu";var s8Y='open';var e8Y="led";var J38="_enabled";var Z38="rop";var a38="iple";var l38="lt";var F38="upl";var g38="_i";var S98="eldType";var t98="den";var G98="hid";var C98="donly";var c98="exten";var u98="adio";var M98="xten";var E0h=R3a;E0h+=e1h;var G2h=E4Y.p4h;G2h+=p6h;G2h+=L0R;G2h+=e1h;var W2h=E4Y.p4h;W2h+=M98;W2h+=e1h;var E8h=E4Y.p4h;E8h+=p6h;E8h+=c6h;E8h+=q6h;var T8h=h6h;T8h+=u98;var k3m=E4Y.p4h;k3m+=p6h;k3m+=X1h;k3m+=B3R;var z9m=c98;z9m+=e1h;var f9m=P6h;f9m+=g1R;f9m+=e1h;var D9m=E4Y.p4h;D9m+=p6h;D9m+=X1h;D9m+=B3R;var b9m=X1h;b9m+=P6h;var T9m=h6h;T9m+=K5a;T9m+=C98;var P9m=G98;P9m+=t98;var X9m=P9h;X9m+=O1h;X9m+=S98;var fieldTypes=Editor[P0R];function _buttonText(conf,text){var V38="oadT";var h38="file...";var s38="se ";var e38="Choo";var J98="div.upload b";var y7m=J98;y7m+=H5a;var V7m=g38;V7m+=H98;if(text===u0R||text===undefined){var F7m=e38;F7m+=s38;F7m+=h38;var h7m=F38;h7m+=V38;h7m+=s8z;h7m+=X1h;text=conf[h7m]||F7m;}conf[V7m][T1a](y7m)[J1R](text);}function _commonUpload(editor,conf,dropCallback,multiple){var W8Y="ddCl";var X8Y="oD";var L8Y="v.rendere";var g8Y='dragover';var S38='dragleave dragexit';var t38='over';var M38='div.drop';var R38="dragDropText";var U38='div.drop span';var d38="nd drop a file here to upload";var H38="Drag a";var w38="FileReader";var r38='<div class="drop"><span/></div>';var p38='<div class="row second">';var I38='<input type="file" ';var z38='<div class="eu_table">';var k38="ss=\"editor_upload\">";var o38="w\">";var Y38="=\"ro";var x38="iv class";var Q38="imitHide\">";var f38=" upload l";var v38="class=\"cell";var j38="learValue\">";var N38="<div class=\"cell ";var n38="=\"";var D38="utton cl";var b38="de\">";var E38=" class=\"cell limitHi";var T38="div class=\"cell\">";var i38="dered\"/";var B38="\"ren";var q38="<div class=";var P38="/d";var O38="bled";var K38="_ena";var A38="Drop";var m38="earValue button";var W38="div.cl";var X38="e=file]";var L38="[t";var y38="chang";var F9m=y38;F9m+=E4Y.p4h;var h9m=E4Y.k4h;h9m+=J4h;var s9m=o2R;s9m+=L38;s9m+=d7h;s9m+=X38;var e9m=j1h;e9m+=J4h;e9m+=e1h;var t7m=X3h;t7m+=z0a;t7m+=X3h;t7m+=W7h;var G7m=W38;G7m+=m38;var a7m=e1h;a7m+=h6h;a7m+=S1a;a7m+=A38;var l7m=K38;l7m+=O38;var j7m=d28;j7m+=U58;var N7m=x6R;N7m+=Y6R;N7m+=y2R;var n7m=o6R;n7m+=k6R;var D7m=N2R;D7m+=P38;D7m+=t28;var b7m=q38;b7m+=B38;b7m+=i38;b7m+=y2R;var E7m=N2R;E7m+=T38;var T7m=t2R;T7m+=E38;T7m+=b38;var i7m=G6z;i7m+=D38;i7m+=Z2z;i7m+=n38;var B7m=N38;B7m+=X3h;B7m+=j38;var q7m=N2R;q7m+=j2R;var P7m=q2R;P7m+=y2R;var O7m=l3h;O7m+=j6h;O7m+=l38;O7m+=a38;var K7m=p8z;K7m+=v38;K7m+=f38;K7m+=Q38;var A7m=E2R;A7m+=x38;A7m+=Y38;A7m+=o38;var m7m=p8z;m7m+=D5R;m7m+=k38;var W7m=Z6a;W7m+=s7a;var X7m=P9h;X7m+=E4Y.k4h;X7m+=h6h;X7m+=l3h;var L7m=s6R;L7m+=T6a;var btnClass=editor[L7m][X7m][W7m];var container=$(m7m+z38+A7m+K7m+E68+btnClass+g5a+I38+(multiple?O7m:h8R)+P7m+q7m+B7m+i7m+btnClass+g5a+z0R+z0R+p38+T7m+r38+z0R+E7m+b7m+z0R+D7m+n7m+N7m);conf[j7m]=container;conf[l7m]=p8R;_buttonText(conf);if(window[w38]&&conf[a7m]!==k8R){var d7m=X3h;d7m+=U1h;d7m+=E4Y.k4h;d7m+=W3h;var w7m=E4Y.k4h;w7m+=J4h;var I7m=E4Y.k4h;I7m+=J4h;var x7m=e1h;x7m+=Z38;var Q7m=P9h;Q7m+=O1h;Q7m+=J4h;Q7m+=e1h;var f7m=H38;f7m+=d38;var v7m=P9h;v7m+=O1h;v7m+=q6h;container[v7m](U38)[C88](conf[R38]||f7m);var dragDrop=container[Q7m](M38);dragDrop[l5R](x7m,function(e){var G38="lEve";var C38="rigina";var c38="dataTrans";var u38="_enab";var Y7m=u38;Y7m+=U1h;Y7m+=A1h;if(conf[Y7m]){var z7m=N9z;z7m+=Z2z;var k7m=c38;k7m+=P9h;k7m+=d9h;var o7m=E4Y.k4h;o7m+=C38;o7m+=G38;o7m+=Z1R;Editor[b3a](editor,conf,e[o7m][k7m][K9h],_buttonText,dropCallback);dragDrop[z7m](t38);}return k8R;})[I7m](S38,function(e){if(conf[J38]){dragDrop[S9R](t38);}return k8R;})[l5R](g8Y,function(e){var p7m=c7h;p7m+=c4R;p7m+=S1h;p7m+=e8Y;if(conf[p7m]){var r7m=E4Y.k4h;r7m+=E9h;r7m+=d9h;dragDrop[N5R](r7m);}return k8R;});editor[w7m](s8Y,function(){var V8Y="drop.DTE_Uploa";var F8Y="load ";var h8Y="dragover.DTE_Up";var H7m=h8Y;H7m+=F8Y;H7m+=V8Y;H7m+=e1h;var Z7m=E4Y.k4h;Z7m+=J4h;$(f5R)[Z7m](H7m,function(e){return k8R;});})[l5R](d7m,function(){var y8Y='dragover.DTE_Upload drop.DTE_Upload';var U7m=f7R;U7m+=P9h;$(f5R)[U7m](y8Y);});}else{var C7m=p5R;C7m+=L8Y;C7m+=e1h;var c7m=C28;c7m+=e1h;var u7m=Z0a;u7m+=E4Y.p4h;u7m+=J4h;u7m+=e1h;var M7m=J4h;M7m+=X8Y;M7m+=Z38;var R7m=u6h;R7m+=W8Y;R7m+=u6h;R7m+=L9h;container[R7m](M7m);container[u7m](container[c7m](C7m));}container[T1a](G7m)[l5R](t7m,function(){var m8Y="loa";var g9m=W4a;g9m+=f0z;var J7m=a1h;J7m+=i4R;var S7m=j6h;S7m+=i7h;S7m+=m8Y;S7m+=e1h;Editor[P0R][S7m][J7m][g9m](editor,conf,h8R);});container[e9m](s9m)[h9m](F9m,function(){var V9m=P9h;V9m+=O1h;V9m+=w9h;V9m+=a1h;Editor[b3a](editor,conf,this[V9m],_buttonText,function(ids){var A8Y='input[type=file]';var L9m=C28;L9m+=e1h;var y9m=X3h;y9m+=B1a;y9m+=U1h;dropCallback[y9m](editor,ids);container[L9m](A8Y)[I4R](h8R);});});return container;}function _triggerChange(input){setTimeout(function(){var O8Y='change';var K8Y="trigger";input[K8Y](O8Y,{editor:p8R,editorSet:p8R});},C5h);}var baseFieldType=$[r6R](p8R,{},Editor[g5R][X9m],{get:function(conf){var m9m=E9h;m9m+=u6h;m9m+=U1h;var W9m=P8Y;W9m+=X1h;return conf[W9m][m9m]();},set:function(conf,val){conf[q8Y][I4R](val);_triggerChange(conf[q8Y]);},enable:function(conf){var A9m=P8Y;A9m+=X1h;conf[A9m][B8Y](i8Y,k8R);},disable:function(conf){var T8Y="isa";var O9m=e1h;O9m+=T8Y;O9m+=S1h;O9m+=e8Y;var K9m=i7h;K9m+=h6h;K9m+=e7R;conf[q8Y][K9m](O9m,p8R);},canReturnSubmit:function(conf,node){return p8R;}});fieldTypes[P9m]={create:function(conf){var B9m=e3a;B9m+=e4R;var q9m=E8Y;q9m+=B1a;conf[q9m]=conf[B9m];return u0R;},get:function(conf){var b8Y="_va";var i9m=b8Y;i9m+=U1h;return conf[i9m];},set:function(conf,val){conf[D8Y]=val;}};fieldTypes[T9m]=$[r6R](p8R,{},baseFieldType,{create:function(conf){var l8Y='readonly';var N8Y="/>";var E9m=n8Y;E9m+=J4h;E9m+=U58;E9m+=N8Y;conf[q8Y]=$(E9m)[g4a]($[r6R]({id:Editor[x0R](conf[q0R]),type:j8Y,readonly:l8Y},conf[g4a]||{}));return conf[q8Y][C5h];}});fieldTypes[b9m]=$[D9m](p8R,{},baseFieldType,{create:function(conf){var v9m=a8Y;v9m+=c9h;var a9m=u6h;a9m+=X1h;a9m+=X1h;a9m+=h6h;var l9m=X1h;l9m+=E4Y.p4h;l9m+=p6h;l9m+=X1h;var j9m=O1h;j9m+=e1h;var N9m=k7a;N9m+=q6h;var n9m=w7h;n9m+=O1h;n9m+=C0R;n9m+=X1h;conf[n9m]=$(v8Y)[g4a]($[N9m]({id:Editor[x0R](conf[j9m]),type:l9m},conf[a9m]||{}));return conf[v9m][C5h];}});fieldTypes[f8Y]=$[f9m](p8R,{},baseFieldType,{create:function(conf){var x8Y="eId";var Q8Y="wor";var k9m=w1R;k9m+=L9h;k9m+=Q8Y;k9m+=e1h;var o9m=a1h;o9m+=u6h;o9m+=P9h;o9m+=x8Y;var Y9m=c98;Y9m+=e1h;var x9m=u6h;x9m+=X1h;x9m+=X1h;x9m+=h6h;var Q9m=w7h;Q9m+=Y8Y;Q9m+=X1h;conf[Q9m]=$(v8Y)[x9m]($[Y9m]({id:Editor[o9m](conf[q0R]),type:k9m},conf[g4a]||{}));return conf[q8Y][C5h];}});fieldTypes[o8Y]=$[z9m](p8R,{},baseFieldType,{create:function(conf){var p8Y="a/>";var I8Y="xtar";var z8Y="<te";var w9m=a1h;w9m+=i5z;w9m+=k8Y;w9m+=e1h;var r9m=s8z;r9m+=n6a;var p9m=z8Y;p9m+=I8Y;p9m+=E4Y.p4h;p9m+=p8Y;var I9m=w7h;I9m+=O1h;I9m+=r8Y;I9m+=c9h;conf[I9m]=$(p9m)[g4a]($[r9m]({id:Editor[w9m](conf[q0R])},conf[g4a]||{}));return conf[q8Y][C5h];},canReturnSubmit:function(conf,node){return k8R;}});fieldTypes[w8Y]=$[r6R](p8R,{},baseFieldType,{_addOptions:function(conf,opts,append){var t8Y="optionsPair";var G8Y="hidden";var C8Y="placeholderDisabled";var c8Y="placeholderValue";var u8Y="erValue";var M8Y="lacehold";var R8Y="placehold";var U8Y="ceholderDisabled";var d8Y="itor_v";var Z9m=w7h;Z9m+=Z8Y;Z9m+=c9h;var elOpts=conf[Z9m][C5h][m1z];var countOffset=C5h;if(!append){elOpts[o8R]=C5h;if(conf[H8Y]!==undefined){var R9m=P6a;R9m+=d8Y;R9m+=B1a;var U9m=Q1a;U9m+=U8Y;var d9m=R8Y;d9m+=d9h;var H9m=i7h;H9m+=M8Y;H9m+=u8Y;var placeholderValue=conf[c8Y]!==undefined?conf[H9m]:h8R;countOffset+=G5h;elOpts[C5h]=new Option(conf[d9m],placeholderValue);var disabled=conf[U9m]!==undefined?conf[C8Y]:p8R;elOpts[C5h][G8Y]=disabled;elOpts[C5h][W5R]=disabled;elOpts[C5h][R9m]=placeholderValue;}}else{countOffset=elOpts[o8R];}if(opts){var M9m=i7h;M9m+=u6h;M9m+=o68;M9m+=a1h;Editor[M9m](opts,conf[t8Y],function(val,label,i,attr){var J8Y="or_val";var S8Y="_edit";var u9m=S8Y;u9m+=J8Y;var option=new Option(label,val);option[u9m]=val;if(attr){$(option)[g4a](attr);}elOpts[i+countOffset]=option;});}},create:function(conf){var X2Y='<select/>';var L2Y="ip";var y2Y="mu";var V2Y="ttr";var F2Y=".d";var h2Y="hange";var s2Y="Option";var g2Y="ipO";var X3m=d28;X3m+=i7h;X3m+=c9h;var L3m=g2Y;L3m+=I7h;L3m+=a1h;var y3m=e2Y;y3m+=s2Y;y3m+=a1h;var s3m=X3h;s3m+=h2Y;s3m+=F2Y;s3m+=c6h;var e3m=E4Y.k4h;e3m+=J4h;var g3m=u6h;g3m+=V2Y;var J9m=y2Y;J9m+=l38;J9m+=L2Y;J9m+=w9h;var S9m=O1h;S9m+=e1h;var t9m=a1h;t9m+=i5z;t9m+=k8Y;t9m+=e1h;var G9m=s8z;G9m+=c6h;G9m+=q6h;var C9m=D6h;C9m+=g3a;var c9m=a8Y;c9m+=j6h;c9m+=X1h;conf[c9m]=$(X2Y)[C9m]($[G9m]({id:Editor[t9m](conf[S9m]),multiple:conf[J9m]===p8R},conf[g3m]||{}))[e3m](s3m,function(e,d){var m2Y="lastSet";var W2Y="lect";var h3m=J2z;h3m+=X1h;h3m+=E4Y.k4h;h3m+=h6h;if(!d||!d[h3m]){var V3m=W3h;V3m+=W2Y;var F3m=w7h;F3m+=m2Y;conf[F3m]=fieldTypes[V3m][h6a](conf);}});fieldTypes[w8Y][y3m](conf,conf[m1z]||conf[L3m]);return conf[X3m][C5h];},update:function(conf,options,append){var O2Y="elec";var K2Y="_lastSet";var A2Y="addO";var K3m=w7h;K3m+=V0R;K3m+=R4R;K3m+=X1h;var m3m=w7h;m3m+=A2Y;m3m+=w78;m3m+=G9h;var W3m=a1h;W3m+=M2z;W3m+=X3h;W3m+=X1h;fieldTypes[W3m][m3m](conf,options,append);var lastSet=conf[K2Y];if(lastSet!==undefined){var A3m=a1h;A3m+=O2Y;A3m+=X1h;fieldTypes[A3m][T3h](conf,lastSet,p8R);}_triggerChange(conf[K3m]);},get:function(conf){var i2Y="rator";var B2Y="sepa";var P2Y='option:selected';var E3m=w9h;E3m+=s2R;E3m+=Q8R;var i3m=v9h;i3m+=a38;var q3m=l3h;q3m+=u6h;q3m+=i7h;var P3m=j1h;P3m+=q6h;var O3m=g38;O3m+=r8Y;O3m+=c9h;var val=conf[O3m][P3m](P2Y)[q3m](function(){var q2Y="_editor_va";var B3m=q2Y;B3m+=U1h;return this[B3m];})[s88]();if(conf[i3m]){var T3m=B2Y;T3m+=i2Y;return conf[T3m]?val[d2z](conf[T2Y]):val;}return val[E3m]?val[C5h]:u0R;},set:function(conf,val,localUpdate){var N2Y='option';var n2Y="multiple";var b2Y="para";var E2Y="sArra";var Q3m=U1h;Q3m+=f8R;Q3m+=Q8R;var a3m=a8Y;a3m+=c9h;var l3m=j1h;l3m+=q6h;var j3m=g38;j3m+=J4h;j3m+=R4R;j3m+=X1h;var n3m=O1h;n3m+=E2Y;n3m+=x6h;var D3m=W3h;D3m+=b2Y;D3m+=X1h;D3m+=h1h;if(!localUpdate){var b3m=R6z;b3m+=D2Y;b3m+=O98;conf[b3m]=val;}if(conf[n2Y]&&conf[D3m]&&!$[n3m](val)){var N3m=a1h;N3m+=i7h;N3m+=U1h;N3m+=s1h;val=typeof val===m1R?val[N3m](conf[T2Y]):[];}else if(!$[F6a](val)){val=[val];}var i,len=val[o8R],found,allFound=k8R;var options=conf[j3m][l3m](N2Y);conf[a3m][T1a](N2Y)[T8R](function(){var j2Y="itor_val";var f3m=w8Y;f3m+=E4Y.p4h;f3m+=e1h;found=k8R;for(i=C5h;i<len;i++){var v3m=P6a;v3m+=j2Y;if(this[v3m]==val[i]){found=p8R;allFound=p8R;break;}}this[f3m]=found;});if(conf[H8Y]&&!allFound&&!conf[n2Y]&&options[Q3m]){var x3m=C58;x3m+=X1h;x3m+=A1h;options[C5h][x3m]=p8R;}if(!localUpdate){var Y3m=d28;Y3m+=i7h;Y3m+=c9h;_triggerChange(conf[Y3m]);}return allFound;},destroy:function(conf){var l2Y='change.dte';var o3m=E4Y.k4h;o3m+=P9h;o3m+=P9h;conf[q8Y][o3m](l2Y);}});fieldTypes[a2Y]=$[k3m](p8R,{},baseFieldType,{_addOptions:function(conf,opts,append){var f2Y="onsPa";var v2Y="opt";var z3m=a8Y;z3m+=c9h;var val,label;var jqInput=conf[z3m];var offset=C5h;if(!append){jqInput[Z5a]();}else{var I3m=a28;I3m+=N6h;offset=$(X4R,jqInput)[I3m];}if(opts){var r3m=v2Y;r3m+=O1h;r3m+=f2Y;r3m+=o68;var p3m=i7h;p3m+=a48;p3m+=h6h;p3m+=a1h;Editor[p3m](opts,conf[r3m],function(val,label,i,attr){var d2Y='input:last';var w2Y='" type="checkbox" />';var I2Y="for=\"";var z2Y="abel ";var k2Y="<l";var o2Y="safeI";var x2Y="tor_va";var Q2Y="_edi";var C3m=Q2Y;C3m+=x2Y;C3m+=U1h;var c3m=u6h;c3m+=X1h;c3m+=X1h;c3m+=h6h;var u3m=V0R;u3m+=Y2Y;var M3m=o6R;M3m+=E9h;M3m+=y2R;var R3m=V2R;R3m+=y2R;var U3m=o2Y;U3m+=e1h;var d3m=k2Y;d3m+=z2Y;d3m+=I2Y;var H3m=a1h;H3m+=i5z;H3m+=k8Y;H3m+=e1h;var Z3m=N2R;Z3m+=p5R;Z3m+=k6R;var w3m=u6h;w3m+=n3R;w3m+=q6h;jqInput[w3m](Z3m+p2Y+Editor[H3m](conf[q0R])+r2Y+(i+offset)+w2Y+d3m+Editor[U3m](conf[q0R])+r2Y+(i+offset)+R3m+label+Z2Y+M3m);$(u3m,jqInput)[c3m](H2Y,val)[C5h][C3m]=val;if(attr){var G3m=D6h;G3m+=X1h;G3m+=h6h;$(d2Y,jqInput)[G3m](attr);}});}},create:function(conf){var u2Y='<div />';var M2Y="eckbox";var R2Y="ddO";var U2Y="pOpts";var J3m=O1h;J3m+=U2Y;var S3m=h9h;S3m+=R2Y;S3m+=i98;S3m+=m5a;var t3m=a4R;t3m+=M2Y;conf[q8Y]=$(u2Y);fieldTypes[t3m][S3m](conf,conf[m1z]||conf[J3m]);return conf[q8Y][C5h];},get:function(conf){var t2Y="unselectedValue";var c2Y='input:checked';var s8h=w9h;s8h+=s2R;s8h+=X1h;s8h+=N6h;var e8h=P9h;e8h+=O1h;e8h+=J4h;e8h+=e1h;var g8h=w7h;g8h+=Y8Y;g8h+=X1h;var out=[];var selected=conf[g8h][e8h](c2Y);if(selected[s8h]){var h8h=E4Y.p4h;h8h+=w8R;h8h+=N6h;selected[h8h](function(){var G2Y="pus";var C2Y="tor_val";var V8h=c7h;V8h+=e1h;V8h+=O1h;V8h+=C2Y;var F8h=G2Y;F8h+=N6h;out[F8h](this[V8h]);});}else if(conf[t2Y]!==undefined){out[E8R](conf[t2Y]);}return conf[T2Y]===undefined||conf[T2Y]===u0R?out:out[d2z](conf[T2Y]);},set:function(conf,val){var S2Y='|';var L8h=T1R;L8h+=V0z;L8h+=x6h;var y8h=O1h;y8h+=r8Y;y8h+=c9h;var jqInputs=conf[q8Y][T1a](y8h);if(!$[L8h](val)&&typeof val===m1R){var X8h=a1h;X8h+=i7h;X8h+=U1h;X8h+=s1h;val=val[X8h](conf[T2Y]||S2Y);}else if(!$[F6a](val)){val=[val];}var i,len=val[o8R],found;jqInputs[T8R](function(){var g0Y="ked";var J2Y="chec";var W8h=J2Y;W8h+=g0Y;found=k8R;for(i=C5h;i<len;i++){if(this[e0Y]==val[i]){found=p8R;break;}}this[W8h]=found;});_triggerChange(jqInputs);},enable:function(conf){var K8h=L1h;K8h+=i7h;var A8h=P9h;A8h+=O1h;A8h+=J4h;A8h+=e1h;var m8h=w7h;m8h+=O1h;m8h+=J4h;m8h+=U58;conf[m8h][A8h](X4R)[K8h](i8Y,k8R);},disable:function(conf){var O8h=g38;O8h+=H98;conf[O8h][T1a](X4R)[B8Y](i8Y,p8R);},update:function(conf,options,append){var h0Y="eck";var s0Y="Op";var i8h=a1h;i8h+=E4Y.p4h;i8h+=X1h;var B8h=e2Y;B8h+=s0Y;B8h+=p1h;B8h+=m5a;var q8h=o7h;q8h+=E4Y.p4h;q8h+=X1h;var P8h=a4R;P8h+=h0Y;P8h+=L7h;var checkbox=fieldTypes[P8h];var currVal=checkbox[q8h](conf);checkbox[B8h](conf,options,append);checkbox[i8h](conf,currVal);}});fieldTypes[T8h]=$[E8h](p8R,{},baseFieldType,{_addOptions:function(conf,opts,append){var V0Y="pai";var F0Y="nsPa";var val,label;var jqInput=conf[q8Y];var offset=C5h;if(!append){var b8h=E4Y.p4h;b8h+=q6z;b8h+=X1h;b8h+=x6h;jqInput[b8h]();}else{var D8h=U1h;D8h+=f8R;D8h+=Q8R;offset=$(X4R,jqInput)[D8h];}if(opts){var N8h=Q78;N8h+=F0Y;N8h+=o68;var n8h=V0Y;n8h+=R68;Editor[n8h](opts,conf[N8h],function(val,label,i,attr){var P0Y="att";var O0Y='<label for="';var K0Y='" type="radio" name="';var A0Y="saf";var m0Y="\" /";var W0Y="Id";var X0Y="sa";var L0Y="input:l";var y0Y="valu";var o8h=y0Y;o8h+=E4Y.p4h;var Y8h=u6h;Y8h+=Q9a;Y8h+=h6h;var x8h=L0Y;x8h+=D2Y;var Q8h=O1h;Q8h+=e1h;var f8h=X0Y;f8h+=P9h;f8h+=E4Y.p4h;f8h+=W0Y;var v8h=m0Y;v8h+=y2R;var a8h=O1h;a8h+=e1h;var l8h=A0Y;l8h+=E4Y.p4h;l8h+=W0Y;var j8h=E2R;j8h+=Y0a;j8h+=y2R;jqInput[G6R](j8h+p2Y+Editor[l8h](conf[a8h])+r2Y+(i+offset)+K0Y+conf[i0R]+v8h+O0Y+Editor[f8h](conf[Q8h])+r2Y+(i+offset)+k0R+label+Z2Y+z0R);$(x8h,jqInput)[Y8h](o8h,val)[C5h][e0Y]=val;if(attr){var z8h=P0Y;z8h+=h6h;var k8h=V0R;k8h+=Y2Y;$(k8h,jqInput)[z8h](attr);}});}},create:function(conf){var B0Y="div />";var q0Y="pOpt";var R8h=d28;R8h+=i7h;R8h+=j6h;R8h+=X1h;var w8h=E4Y.k4h;w8h+=J4h;var r8h=O1h;r8h+=q0Y;r8h+=a1h;var p8h=N2R;p8h+=B0Y;var I8h=d28;I8h+=i7h;I8h+=j6h;I8h+=X1h;conf[I8h]=$(p8h);fieldTypes[i0Y][T0Y](conf,conf[m1z]||conf[r8h]);this[w8h](s8Y,function(){var d8h=K5a;d8h+=a4R;var H8h=P9h;H8h+=O1h;H8h+=J4h;H8h+=e1h;var Z8h=w7h;Z8h+=O1h;Z8h+=r8Y;Z8h+=c9h;conf[Z8h][H8h](X4R)[d8h](function(){var E0Y="preCheck";var U8h=w7h;U8h+=E0Y;U8h+=A1h;if(this[U8h]){this[b0Y]=p8R;}});});return conf[R8h][C5h];},get:function(conf){var D0Y="t:checked";var u8h=w9h;u8h+=s2R;u8h+=X1h;u8h+=N6h;var M8h=Y8Y;M8h+=D0Y;var el=conf[q8Y][T1a](M8h);return el[u8h]?el[C5h][e0Y]:undefined;},set:function(conf,val){var N0Y="ecke";var n0Y="input:";var e2h=n0Y;e2h+=a4R;e2h+=N0Y;e2h+=e1h;var g2h=w7h;g2h+=V0R;g2h+=R4R;g2h+=X1h;var G8h=E4Y.p4h;G8h+=w8R;G8h+=N6h;var C8h=Y8Y;C8h+=X1h;var c8h=a8Y;c8h+=c9h;var that=this;conf[c8h][T1a](C8h)[G8h](function(){var a0Y="preCh";var l0Y="_preChecked";var j0Y="or_v";var t8h=P6a;t8h+=s1h;t8h+=j0Y;t8h+=B1a;this[l0Y]=k8R;if(this[t8h]==val){var S8h=a4R;S8h+=N0Y;S8h+=e1h;this[S8h]=p8R;this[l0Y]=p8R;}else{var J8h=w7h;J8h+=a0Y;J8h+=N0Y;J8h+=e1h;this[b0Y]=k8R;this[J8h]=k8R;}});_triggerChange(conf[g2h][T1a](e2h));},enable:function(conf){var h2h=i7h;h2h+=U7h;h2h+=i7h;var s2h=Z8Y;s2h+=c9h;conf[q8Y][T1a](s2h)[h2h](i8Y,k8R);},disable:function(conf){var F2h=w7h;F2h+=Z8Y;F2h+=j6h;F2h+=X1h;conf[F2h][T1a](X4R)[B8Y](i8Y,p8R);},update:function(conf,options,append){var f0Y='[value="';var v0Y="filter";var X2h=E4Y.p4h;X2h+=e9a;var L2h=V0R;L2h+=R4R;L2h+=X1h;var y2h=g38;y2h+=C0R;y2h+=X1h;var V2h=o7h;V2h+=E4Y.p4h;V2h+=X1h;var radio=fieldTypes[i0Y];var currVal=radio[V2h](conf);radio[T0Y](conf,options,append);var inputs=conf[y2h][T1a](L2h);radio[T3h](conf,inputs[v0Y](f0Y+currVal+i8R)[o8R]?currVal:inputs[X2h](C5h)[g4a](H2Y));}});fieldTypes[V1a]=$[W2h](p8R,{},baseFieldType,{create:function(conf){var Z0Y="eForm";var w0Y="cker";var r0Y="epi";var p0Y="82";var I0Y="FC_2";var z0Y="R";var k0Y="yui";var o0Y="jquer";var Y0Y="ateFor";var x0Y='<input />';var Q0Y="tepicke";var x2h=g38;x2h+=C0R;x2h+=X1h;var O2h=J3h;O2h+=Q0Y;O2h+=h6h;var K2h=u6h;K2h+=X1h;K2h+=X1h;K2h+=h6h;var A2h=E4Y.p4h;A2h+=p6h;A2h+=c6h;A2h+=q6h;var m2h=P8Y;m2h+=X1h;conf[m2h]=$(x0Y)[g4a]($[A2h]({id:Editor[x0R](conf[q0R]),type:j8Y},conf[K2h]));if($[O2h]){var i2h=e1h;i2h+=Y0Y;i2h+=l3h;i2h+=D6h;var B2h=o0Y;B2h+=k0Y;var q2h=u6h;q2h+=f0a;q2h+=T9z;q2h+=Z2z;var P2h=d28;P2h+=i7h;P2h+=j6h;P2h+=X1h;conf[P2h][q2h](B2h);if(!conf[i2h]){var b2h=z0Y;b2h+=I0Y;b2h+=p0Y;b2h+=Y3h;var E2h=G2z;E2h+=r0Y;E2h+=w0Y;var T2h=G2z;T2h+=Z0Y;T2h+=u6h;T2h+=X1h;conf[T2h]=$[E2h][b2h];}setTimeout(function(){var R0Y='#ui-datepicker-div';var U0Y="dateFormat";var H0Y="Ima";var v2h=X3h;v2h+=a1h;v2h+=a1h;var N2h=V1a;N2h+=H0Y;N2h+=o7h;N2h+=E4Y.p4h;var n2h=S1h;n2h+=E4Y.k4h;n2h+=X1h;n2h+=N6h;var D2h=s8z;D2h+=n6a;$(conf[q8Y])[d0Y]($[D2h]({showOn:n2h,dateFormat:conf[U0Y],buttonImage:conf[N2h],buttonImageOnly:p8R,onSelect:function(){var a2h=f9R;a2h+=W7h;var l2h=P9h;l2h+=f7a;l2h+=j6h;l2h+=a1h;var j2h=a8Y;j2h+=j6h;j2h+=X1h;conf[j2h][l2h]()[a2h]();}},conf[a1R]));$(R0Y)[v2h](J0R,S4R);},h4h);}else{var Q2h=e1h;Q2h+=u6h;Q2h+=X1h;Q2h+=E4Y.p4h;var f2h=X1h;f2h+=x6h;f2h+=i7h;f2h+=E4Y.p4h;conf[q8Y][g4a](f2h,Q2h);}return conf[x2h][C5h];},set:function(conf,val){var C0Y="setDate";var c0Y='hasDatepicker';var M0Y="asC";var k2h=N6h;k2h+=M0Y;k2h+=H2R;k2h+=L9h;var o2h=g38;o2h+=r8Y;o2h+=j6h;o2h+=X1h;var Y2h=G2z;Y2h+=u0Y;if($[Y2h]&&conf[o2h][k2h](c0Y)){var z2h=a4R;z2h+=M4a;conf[q8Y][d0Y](C0Y,val)[z2h]();}else{var I2h=w7h;I2h+=Z8Y;I2h+=j6h;I2h+=X1h;$(conf[I2h])[I4R](val);}},enable:function(conf){var J0Y="sable";var S0Y="enable";var G0Y="datep";var p2h=G0Y;p2h+=O1h;p2h+=d4R;p2h+=d9h;if($[p2h]){var w2h=t0Y;w2h+=d9h;var r2h=w7h;r2h+=V0R;r2h+=R4R;r2h+=X1h;conf[r2h][w2h](S0Y);}else{var d2h=p5R;d2h+=J0Y;d2h+=e1h;var H2h=i7h;H2h+=h6h;H2h+=e7R;var Z2h=d28;Z2h+=U58;$(conf[Z2h])[H2h](d2h,k8R);}},disable:function(conf){var U2h=t0Y;U2h+=d9h;if($[U2h]){var M2h=G2z;M2h+=u0Y;var R2h=g38;R2h+=r8Y;R2h+=c9h;conf[R2h][M2h](I1a);}else{var c2h=e1h;c2h+=b5R;var u2h=P8Y;u2h+=X1h;$(conf[u2h])[B8Y](c2h,p8R);}},owns:function(conf,node){var e5Y='div.ui-datepicker-header';var g5Y='div.ui-datepicker';var C2h=b18;C2h+=a1h;return $(node)[C2h](g5Y)[o8R]||$(node)[A7a](e5Y)[o8R]?p8R:k8R;}});fieldTypes[R98]=$[G2h](p8R,{},baseFieldType,{create:function(conf){var X5Y="keyInput";var y5Y="_closeFn";var V5Y="nput />";var s5Y="eTim";var L0h=s0a;L0h+=a1h;L0h+=E4Y.p4h;var y0h=E4Y.k4h;y0h+=J4h;var h0h=E4Y.k4h;h0h+=I7h;h0h+=a1h;var s0h=P6h;s0h+=g1R;s0h+=e1h;var e0h=n1h;e0h+=s5Y;e0h+=E4Y.p4h;var g0h=h5Y;g0h+=r7a;g0h+=F5Y;var J2h=O1h;J2h+=e1h;var S2h=D6h;S2h+=X1h;S2h+=h6h;var t2h=n8Y;t2h+=V5Y;conf[q8Y]=$(t2h)[S2h]($[r6R](p8R,{id:Editor[x0R](conf[J2h]),type:j8Y},conf[g4a]));conf[g0h]=new Editor[e0h](conf[q8Y],$[s0h]({format:conf[Y08],i18n:this[o9a][R98],onChange:function(){_triggerChange(conf[q8Y]);}},conf[h0h]));conf[y5Y]=function(){conf[L5Y][y6a]();};if(conf[X5Y]===k8R){var F0h=E4Y.k4h;F0h+=J4h;conf[q8Y][F0h](z4z,function(e){var W5Y="eventDefa";var V0h=A7h;V0h+=W5Y;V0h+=T5R;e[V0h]();});}this[y0h](L0h,conf[y5Y]);return conf[q8Y][C5h];},set:function(conf,val){var m5Y="icke";var W0h=d28;W0h+=R4R;W0h+=X1h;var X0h=h5Y;X0h+=m5Y;X0h+=h6h;conf[X0h][I4R](val);_triggerChange(conf[W0h]);},owns:function(conf,node){var A5Y="owns";return conf[L5Y][A5Y](node);},errorMessage:function(conf,msg){var O5Y="errorMsg";var K5Y="pick";var m0h=w7h;m0h+=K5Y;m0h+=E4Y.p4h;m0h+=h6h;conf[m0h][O5Y](msg);},destroy:function(conf){var T5Y="los";var i5Y="eyd";var q5Y="oy";var P5Y="destr";var q0h=P5Y;q0h+=q5Y;var P0h=B5Y;P0h+=F5Y;var O0h=W7h;O0h+=i5Y;O0h+=E4Y.k4h;O0h+=R6R;var K0h=f7R;K0h+=P9h;var A0h=G3R;A0h+=T5Y;A0h+=L4R;A0h+=J4h;this[o1a](N6R,conf[A0h]);conf[q8Y][K0h](O0h);conf[P0h][q0h]();},minDate:function(conf,min){var B0h=l3h;B0h+=O1h;B0h+=J4h;conf[L5Y][B0h](min);},maxDate:function(conf,max){var E5Y="ax";var T0h=l3h;T0h+=E5Y;var i0h=B5Y;i0h+=W7h;i0h+=d9h;conf[i0h][T0h](max);}});fieldTypes[E0h]=$[r6R](p8R,{},baseFieldType,{create:function(conf){var editor=this;var container=_commonUpload(editor,conf,function(val){var D5Y="oad";var b5Y="stUpl";var b0h=g1a;b0h+=b5Y;b0h+=D5Y;Editor[P0R][b3a][T3h][O5R](editor,conf,val[C5h]);editor[p4a](b0h,[conf[i0R],val[C5h]]);});return container;},get:function(conf){var D0h=w7h;D0h+=E9h;D0h+=u6h;D0h+=U1h;return conf[D0h];},set:function(conf,val){var o5Y="dC";var Y5Y="noC";var x5Y='noClear';var Q5Y="earText";var f5Y="clearText";var v5Y='div.clearValue button';var a5Y='No file';var j5Y="</spa";var N5Y='div.rendered';var n5Y="triggerHandle";var I0h=E8Y;I0h+=B1a;var z0h=n5Y;z0h+=h6h;var k0h=V0R;k0h+=R4R;k0h+=X1h;var o0h=a8Y;o0h+=c9h;var v0h=P9h;v0h+=O1h;v0h+=J4h;v0h+=e1h;var N0h=Q5R;N0h+=Q1a;N0h+=x6h;var n0h=g38;n0h+=H98;conf[D8Y]=val;var container=conf[n0h];if(conf[N0h]){var rendered=container[T1a](N5Y);if(conf[D8Y]){var j0h=c5a;j0h+=U1h;rendered[j0h](conf[n4R](conf[D8Y]));}else{var a0h=j5Y;a0h+=i08;var l0h=A08;l0h+=w1R;l0h+=i08;rendered[Z5a]()[G6R](l0h+(conf[l5Y]||a5Y)+a0h);}}var button=container[v0h](v5Y);if(val&&conf[f5Y]){var Q0h=w6R;Q0h+=Q5Y;var f0h=N6h;f0h+=u1R;f0h+=U1h;button[f0h](conf[Q0h]);container[S9R](x5Y);}else{var Y0h=Y5Y;Y0h+=x1a;var x0h=W9h;x0h+=o5Y;x0h+=o2a;container[x0h](Y0h);}conf[o0h][T1a](k0h)[z0h](k5Y,[conf[I0h]]);},enable:function(conf){var p0h=z5Y;p0h+=S1h;p0h+=e8Y;conf[q8Y][T1a](X4R)[B8Y](p0h,k8R);conf[J38]=p8R;},disable:function(conf){var d0h=z5Y;d0h+=S1h;d0h+=w9h;d0h+=e1h;var H0h=i7h;H0h+=Z38;var Z0h=V0R;Z0h+=i7h;Z0h+=j6h;Z0h+=X1h;var w0h=C28;w0h+=e1h;var r0h=g38;r0h+=J4h;r0h+=U58;conf[r0h][w0h](Z0h)[H0h](d0h,p8R);conf[J38]=k8R;},canReturnSubmit:function(conf,node){return k8R;}});fieldTypes[I5Y]=$[r6R](p8R,{},baseFieldType,{_showHide:function(conf){var Z5Y='div.limitHide';var w5Y="_container";var r5Y="limit";var p5Y="_limitLe";var t0h=U1h;t0h+=T18;var G0h=w7h;G0h+=I4R;var C0h=z0a;C0h+=l3h;C0h+=s1h;var c0h=p5Y;c0h+=i6R;var u0h=U1h;u0h+=O1h;u0h+=l3h;u0h+=s1h;var M0h=U1h;M0h+=T18;var R0h=w7h;R0h+=E9h;R0h+=u6h;R0h+=U1h;var U0h=X3h;U0h+=L9h;if(!conf[r5Y]){return;}conf[w5Y][T1a](Z5Y)[U0h](J0R,conf[R0h][M0h]>=conf[u0h]?S4R:t4R);conf[c0h]=conf[C0h]-conf[G0h][t0h];},create:function(conf){var H5Y="on.remove";var A5h=w7h;A5h+=y4R;A5h+=e9h;A5h+=d9h;var L5h=W5a;L5h+=H5Y;var y5h=E4Y.k4h;y5h+=J4h;var V5h=l3h;V5h+=j6h;V5h+=U1h;V5h+=p1h;var editor=this;var container=_commonUpload(editor,conf,function(val){var M5Y="onca";var R5Y="dMany";var U5Y="tUpload";var d5Y="pos";var F5h=w7h;F5h+=I4R;var h5h=d5Y;h5h+=U5Y;var s5h=w7h;s5h+=E9h;s5h+=u6h;s5h+=U1h;var e5h=R3a;e5h+=R5Y;var g5h=X3h;g5h+=M5Y;g5h+=X1h;var J0h=w7h;J0h+=E9h;J0h+=u6h;J0h+=U1h;var S0h=E8Y;S0h+=B1a;conf[S0h]=conf[J0h][g5h](val);Editor[P0R][e5h][T3h][O5R](editor,conf,conf[s5h]);editor[p4a](h5h,[conf[i0R],conf[F5h]]);},p8R);container[N5R](V5h)[y5h](L4a,L5h,function(e){var c5Y='idx';var u5Y="Propag";var m5h=W4a;m5h+=U1h;m5h+=U1h;var W5h=e1h;W5h+=F0R;var X5h=v0z;X5h+=u5Y;X5h+=D6h;X5h+=G5a;e[X5h]();var idx=$(this)[W5h](c5Y);conf[D8Y][G2a](idx,G5h);Editor[P0R][I5Y][T3h][m5h](editor,conf,conf[D8Y]);});conf[A5h]=container;return container;},get:function(conf){var K5h=w7h;K5h+=E9h;K5h+=B1a;return conf[K5h];},set:function(conf,val){var O4Y="_showHide";var K4Y='No files';var A4Y="pan>";var m4Y="</span";var h4Y="ul/>";var s4Y="dTo";var e4Y="dered";var g4Y="iv.re";var J5Y='Upload collections must have an array as a value';var S5Y="dTypes";var t5Y="oadMany";var G5Y="dler";var C5Y="triggerHan";var k5h=E8Y;k5h+=B1a;var o5h=C5Y;o5h+=G5Y;var Y5h=F38;Y5h+=t5Y;var x5h=j1h;x5h+=h2R;x5h+=S5Y;var q5h=Q5R;q5h+=i7h;q5h+=l6R;var P5h=w7h;P5h+=O1h;P5h+=C0R;P5h+=X1h;var O5h=T1R;O5h+=I5z;O5h+=x2a;if(!val){val=[];}if(!$[O5h](val)){throw J5Y;}conf[D8Y]=val;var that=this;var container=conf[P5h];if(conf[q5h]){var i5h=c4a;i5h+=X1h;i5h+=N6h;var B5h=e1h;B5h+=g4Y;B5h+=J4h;B5h+=e4Y;var rendered=container[T1a](B5h)[Z5a]();if(val[i5h]){var b5h=E4Y.p4h;b5h+=N6a;var E5h=u6h;E5h+=n3R;E5h+=J4h;E5h+=s4Y;var T5h=N2R;T5h+=h4Y;var list=$(T5h)[E5h](rendered);$[b5h](val,function(i,file){var W4Y='">&times;</button>';var X4Y=' <button class="';var L4Y="li>";var y4Y=" data-idx=";var V4Y=" remove\"";var F4Y="</li";var v5h=F4Y;v5h+=y2R;var a5h=V4Y;a5h+=y4Y;a5h+=V2R;var l5h=P9h;l5h+=E4Y.k4h;l5h+=h6h;l5h+=l3h;var j5h=D5R;j5h+=L9h;j5h+=E4Y.p4h;j5h+=a1h;var N5h=j1R;N5h+=u6h;N5h+=x6h;var n5h=N2R;n5h+=L4Y;var D5h=u6h;D5h+=y9R;list[D5h](n5h+conf[N5h](file,i)+X4Y+that[j5h][l5h][n6R]+a5h+i+W4Y+v5h);});}else{var Q5h=m4Y;Q5h+=y2R;var f5h=N2R;f5h+=a1h;f5h+=A4Y;rendered[G6R](f5h+(conf[l5Y]||K4Y)+Q5h);}}Editor[x5h][Y5h][O4Y](conf);conf[q8Y][T1a](X4R)[o5h](k5Y,[conf[k5h]]);},enable:function(conf){var p5h=Q5R;p5h+=i2z;p5h+=A1h;var I5h=i7h;I5h+=h6h;I5h+=e7R;var z5h=V0R;z5h+=U58;conf[q8Y][T1a](z5h)[I5h](p5h,k8R);conf[J38]=p8R;},disable:function(conf){var w5h=O1h;w5h+=H98;var r5h=C28;r5h+=e1h;conf[q8Y][r5h](w5h)[B8Y](i8Y,p8R);conf[J38]=k8R;},canReturnSubmit:function(conf,node){return k8R;}});}());if(DataTable[P6h][P4Y]){var H5h=E4Y.p4h;H5h+=q4Y;H5h+=f4a;var Z5h=p1a;Z5h+=B4Y;Z5h+=E4Y.p4h;Z5h+=a1h;$[r6R](Editor[Z5h],DataTable[P6h][H5h]);}DataTable[P6h][d5h]=Editor[P0R];Editor[K9h]={};Editor[U5h][R5h]=M5h;Editor[u5h]=c5h;return Editor;}));

/*! Buttons for DataTables 1.5.4
 * ©2016-2018 SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


// Used for namespacing events added to the document by each instance, so they
// can be removed on destroy
var _instCounter = 0;

// Button namespacing counter for namespacing events on individual buttons
var _buttonCounter = 0;

var _dtButtons = DataTable.ext.buttons;

/**
 * [Buttons description]
 * @param {[type]}
 * @param {[type]}
 */
var Buttons = function( dt, config )
{
	// If there is no config set it to an empty object
	if ( typeof( config ) === 'undefined' ) {
		config = {};	
	}
	
	// Allow a boolean true for defaults
	if ( config === true ) {
		config = {};
	}

	// For easy configuration of buttons an array can be given
	if ( $.isArray( config ) ) {
		config = { buttons: config };
	}

	this.c = $.extend( true, {}, Buttons.defaults, config );

	// Don't want a deep copy for the buttons
	if ( config.buttons ) {
		this.c.buttons = config.buttons;
	}

	this.s = {
		dt: new DataTable.Api( dt ),
		buttons: [],
		listenKeys: '',
		namespace: 'dtb'+(_instCounter++)
	};

	this.dom = {
		container: $('<'+this.c.dom.container.tag+'/>')
			.addClass( this.c.dom.container.className )
	};

	this._constructor();
};


$.extend( Buttons.prototype, {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public methods
	 */

	/**
	 * Get the action of a button
	 * @param  {int|string} Button index
	 * @return {function}
	 *//**
	 * Set the action of a button
	 * @param  {node} node Button element
	 * @param  {function} action Function to set
	 * @return {Buttons} Self for chaining
	 */
	action: function ( node, action )
	{
		var button = this._nodeToButton( node );

		if ( action === undefined ) {
			return button.conf.action;
		}

		button.conf.action = action;

		return this;
	},

	/**
	 * Add an active class to the button to make to look active or get current
	 * active state.
	 * @param  {node} node Button element
	 * @param  {boolean} [flag] Enable / disable flag
	 * @return {Buttons} Self for chaining or boolean for getter
	 */
	active: function ( node, flag ) {
		var button = this._nodeToButton( node );
		var klass = this.c.dom.button.active;
		var jqNode = $(button.node);

		if ( flag === undefined ) {
			return jqNode.hasClass( klass );
		}

		jqNode.toggleClass( klass, flag === undefined ? true : flag );

		return this;
	},

	/**
	 * Add a new button
	 * @param {object} config Button configuration object, base string name or function
	 * @param {int|string} [idx] Button index for where to insert the button
	 * @return {Buttons} Self for chaining
	 */
	add: function ( config, idx )
	{
		var buttons = this.s.buttons;

		if ( typeof idx === 'string' ) {
			var split = idx.split('-');
			var base = this.s;

			for ( var i=0, ien=split.length-1 ; i<ien ; i++ ) {
				base = base.buttons[ split[i]*1 ];
			}

			buttons = base.buttons;
			idx = split[ split.length-1 ]*1;
		}

		this._expandButton( buttons, config, false, idx );
		this._draw();

		return this;
	},

	/**
	 * Get the container node for the buttons
	 * @return {jQuery} Buttons node
	 */
	container: function ()
	{
		return this.dom.container;
	},

	/**
	 * Disable a button
	 * @param  {node} node Button node
	 * @return {Buttons} Self for chaining
	 */
	disable: function ( node ) {
		var button = this._nodeToButton( node );

		$(button.node).addClass( this.c.dom.button.disabled );

		return this;
	},

	/**
	 * Destroy the instance, cleaning up event handlers and removing DOM
	 * elements
	 * @return {Buttons} Self for chaining
	 */
	destroy: function ()
	{
		// Key event listener
		$('body').off( 'keyup.'+this.s.namespace );

		// Individual button destroy (so they can remove their own events if
		// needed). Take a copy as the array is modified by `remove`
		var buttons = this.s.buttons.slice();
		var i, ien;
		
		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			this.remove( buttons[i].node );
		}

		// Container
		this.dom.container.remove();

		// Remove from the settings object collection
		var buttonInsts = this.s.dt.settings()[0];

		for ( i=0, ien=buttonInsts.length ; i<ien ; i++ ) {
			if ( buttonInsts.inst === this ) {
				buttonInsts.splice( i, 1 );
				break;
			}
		}

		return this;
	},

	/**
	 * Enable / disable a button
	 * @param  {node} node Button node
	 * @param  {boolean} [flag=true] Enable / disable flag
	 * @return {Buttons} Self for chaining
	 */
	enable: function ( node, flag )
	{
		if ( flag === false ) {
			return this.disable( node );
		}

		var button = this._nodeToButton( node );
		$(button.node).removeClass( this.c.dom.button.disabled );

		return this;
	},

	/**
	 * Get the instance name for the button set selector
	 * @return {string} Instance name
	 */
	name: function ()
	{
		return this.c.name;
	},

	/**
	 * Get a button's node
	 * @param  {node} node Button node
	 * @return {jQuery} Button element
	 */
	node: function ( node )
	{
		var button = this._nodeToButton( node );
		return $(button.node);
	},

	/**
	 * Set / get a processing class on the selected button
	 * @param  {boolean} flag true to add, false to remove, undefined to get
	 * @return {boolean|Buttons} Getter value or this if a setter.
	 */
	processing: function ( node, flag )
	{
		var button = this._nodeToButton( node );

		if ( flag === undefined ) {
			return $(button.node).hasClass( 'processing' );
		}

		$(button.node).toggleClass( 'processing', flag );

		return this;
	},

	/**
	 * Remove a button.
	 * @param  {node} node Button node
	 * @return {Buttons} Self for chaining
	 */
	remove: function ( node )
	{
		var button = this._nodeToButton( node );
		var host = this._nodeToHost( node );
		var dt = this.s.dt;

		// Remove any child buttons first
		if ( button.buttons.length ) {
			for ( var i=button.buttons.length-1 ; i>=0 ; i-- ) {
				this.remove( button.buttons[i].node );
			}
		}

		// Allow the button to remove event handlers, etc
		if ( button.conf.destroy ) {
			button.conf.destroy.call( dt.button(node), dt, $(node), button.conf );
		}

		this._removeKey( button.conf );

		$(button.node).remove();

		var idx = $.inArray( button, host );
		host.splice( idx, 1 );

		return this;
	},

	/**
	 * Get the text for a button
	 * @param  {int|string} node Button index
	 * @return {string} Button text
	 *//**
	 * Set the text for a button
	 * @param  {int|string|function} node Button index
	 * @param  {string} label Text
	 * @return {Buttons} Self for chaining
	 */
	text: function ( node, label )
	{
		var button = this._nodeToButton( node );
		var buttonLiner = this.c.dom.collection.buttonLiner;
		var linerTag = button.inCollection && buttonLiner && buttonLiner.tag ?
			buttonLiner.tag :
			this.c.dom.buttonLiner.tag;
		var dt = this.s.dt;
		var jqNode = $(button.node);
		var text = function ( opt ) {
			return typeof opt === 'function' ?
				opt( dt, jqNode, button.conf ) :
				opt;
		};

		if ( label === undefined ) {
			return text( button.conf.text );
		}

		button.conf.text = label;

		if ( linerTag ) {
			jqNode.children( linerTag ).html( text(label) );
		}
		else {
			jqNode.html( text(label) );
		}

		return this;
	},


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Constructor
	 */

	/**
	 * Buttons constructor
	 * @private
	 */
	_constructor: function ()
	{
		var that = this;
		var dt = this.s.dt;
		var dtSettings = dt.settings()[0];
		var buttons =  this.c.buttons;

		if ( ! dtSettings._buttons ) {
			dtSettings._buttons = [];
		}

		dtSettings._buttons.push( {
			inst: this,
			name: this.c.name
		} );

		for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
			this.add( buttons[i] );
		}

		dt.on( 'destroy', function ( e, settings ) {
			if ( settings === dtSettings ) {
				that.destroy();
			}
		} );

		// Global key event binding to listen for button keys
		$('body').on( 'keyup.'+this.s.namespace, function ( e ) {
			if ( ! document.activeElement || document.activeElement === document.body ) {
				// SUse a string of characters for fast lookup of if we need to
				// handle this
				var character = String.fromCharCode(e.keyCode).toLowerCase();

				if ( that.s.listenKeys.toLowerCase().indexOf( character ) !== -1 ) {
					that._keypress( character, e );
				}
			}
		} );
	},


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods
	 */

	/**
	 * Add a new button to the key press listener
	 * @param {object} conf Resolved button configuration object
	 * @private
	 */
	_addKey: function ( conf )
	{
		if ( conf.key ) {
			this.s.listenKeys += $.isPlainObject( conf.key ) ?
				conf.key.key :
				conf.key;
		}
	},

	/**
	 * Insert the buttons into the container. Call without parameters!
	 * @param  {node} [container] Recursive only - Insert point
	 * @param  {array} [buttons] Recursive only - Buttons array
	 * @private
	 */
	_draw: function ( container, buttons )
	{
		if ( ! container ) {
			container = this.dom.container;
			buttons = this.s.buttons;
		}

		container.children().detach();

		for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
			container.append( buttons[i].inserter );
			container.append( ' ' );

			if ( buttons[i].buttons && buttons[i].buttons.length ) {
				this._draw( buttons[i].collection, buttons[i].buttons );
			}
		}
	},

	/**
	 * Create buttons from an array of buttons
	 * @param  {array} attachTo Buttons array to attach to
	 * @param  {object} button Button definition
	 * @param  {boolean} inCollection true if the button is in a collection
	 * @private
	 */
	_expandButton: function ( attachTo, button, inCollection, attachPoint )
	{
		var dt = this.s.dt;
		var buttonCounter = 0;
		var buttons = ! $.isArray( button ) ?
			[ button ] :
			button;

		for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
			var conf = this._resolveExtends( buttons[i] );

			if ( ! conf ) {
				continue;
			}

			// If the configuration is an array, then expand the buttons at this
			// point
			if ( $.isArray( conf ) ) {
				this._expandButton( attachTo, conf, inCollection, attachPoint );
				continue;
			}

			var built = this._buildButton( conf, inCollection );
			if ( ! built ) {
				continue;
			}

			if ( attachPoint !== undefined ) {
				attachTo.splice( attachPoint, 0, built );
				attachPoint++;
			}
			else {
				attachTo.push( built );
			}

			if ( built.conf.buttons ) {
				var collectionDom = this.c.dom.collection;
				built.collection = $('<'+collectionDom.tag+'/>')
					.addClass( collectionDom.className )
					.attr( 'role', 'menu' ) ;
				built.conf._collection = built.collection;

				this._expandButton( built.buttons, built.conf.buttons, true, attachPoint );
			}

			// init call is made here, rather than buildButton as it needs to
			// be selectable, and for that it needs to be in the buttons array
			if ( conf.init ) {
				conf.init.call( dt.button( built.node ), dt, $(built.node), conf );
			}

			buttonCounter++;
		}
	},

	/**
	 * Create an individual button
	 * @param  {object} config            Resolved button configuration
	 * @param  {boolean} inCollection `true` if a collection button
	 * @return {jQuery} Created button node (jQuery)
	 * @private
	 */
	_buildButton: function ( config, inCollection )
	{
		var buttonDom = this.c.dom.button;
		var linerDom = this.c.dom.buttonLiner;
		var collectionDom = this.c.dom.collection;
		var dt = this.s.dt;
		var text = function ( opt ) {
			return typeof opt === 'function' ?
				opt( dt, button, config ) :
				opt;
		};

		if ( inCollection && collectionDom.button ) {
			buttonDom = collectionDom.button;
		}

		if ( inCollection && collectionDom.buttonLiner ) {
			linerDom = collectionDom.buttonLiner;
		}

		// Make sure that the button is available based on whatever requirements
		// it has. For example, Flash buttons require Flash
		if ( config.available && ! config.available( dt, config ) ) {
			return false;
		}

		var action = function ( e, dt, button, config ) {
			config.action.call( dt.button( button ), e, dt, button, config );

			$(dt.table().node()).triggerHandler( 'buttons-action.dt', [
				dt.button( button ), dt, button, config 
			] );
		};

		var tag = config.tag || buttonDom.tag;
		var button = $('<'+tag+'/>')
			.addClass( buttonDom.className )
			.attr( 'tabindex', this.s.dt.settings()[0].iTabIndex )
			.attr( 'aria-controls', this.s.dt.table().node().id )
			.on( 'click.dtb', function (e) {
				e.preventDefault();

				if ( ! button.hasClass( buttonDom.disabled ) && config.action ) {
					action( e, dt, button, config );
				}

				button.blur();
			} )
			.on( 'keyup.dtb', function (e) {
				if ( e.keyCode === 13 ) {
					if ( ! button.hasClass( buttonDom.disabled ) && config.action ) {
						action( e, dt, button, config );
					}
				}
			} );

		// Make `a` tags act like a link
		if ( tag.toLowerCase() === 'a' ) {
			button.attr( 'href', '#' );
		}

		// Button tags should have `type=button` so they don't have any default behaviour
		if ( tag.toLowerCase() === 'button' ) {
			button.attr( 'type', 'button' );
		}

		if ( linerDom.tag ) {
			var liner = $('<'+linerDom.tag+'/>')
				.html( text( config.text ) )
				.addClass( linerDom.className );

			if ( linerDom.tag.toLowerCase() === 'a' ) {
				liner.attr( 'href', '#' );
			}

			button.append( liner );
		}
		else {
			button.html( text( config.text ) );
		}

		if ( config.enabled === false ) {
			button.addClass( buttonDom.disabled );
		}

		if ( config.className ) {
			button.addClass( config.className );
		}

		if ( config.titleAttr ) {
			button.attr( 'title', text( config.titleAttr ) );
		}

		if ( config.attr ) {
			button.attr( config.attr );
		}

		if ( ! config.namespace ) {
			config.namespace = '.dt-button-'+(_buttonCounter++);
		}

		var buttonContainer = this.c.dom.buttonContainer;
		var inserter;
		if ( buttonContainer && buttonContainer.tag ) {
			inserter = $('<'+buttonContainer.tag+'/>')
				.addClass( buttonContainer.className )
				.append( button );
		}
		else {
			inserter = button;
		}

		this._addKey( config );

		return {
			conf:         config,
			node:         button.get(0),
			inserter:     inserter,
			buttons:      [],
			inCollection: inCollection,
			collection:   null
		};
	},

	/**
	 * Get the button object from a node (recursive)
	 * @param  {node} node Button node
	 * @param  {array} [buttons] Button array, uses base if not defined
	 * @return {object} Button object
	 * @private
	 */
	_nodeToButton: function ( node, buttons )
	{
		if ( ! buttons ) {
			buttons = this.s.buttons;
		}

		for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
			if ( buttons[i].node === node ) {
				return buttons[i];
			}

			if ( buttons[i].buttons.length ) {
				var ret = this._nodeToButton( node, buttons[i].buttons );

				if ( ret ) {
					return ret;
				}
			}
		}
	},

	/**
	 * Get container array for a button from a button node (recursive)
	 * @param  {node} node Button node
	 * @param  {array} [buttons] Button array, uses base if not defined
	 * @return {array} Button's host array
	 * @private
	 */
	_nodeToHost: function ( node, buttons )
	{
		if ( ! buttons ) {
			buttons = this.s.buttons;
		}

		for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
			if ( buttons[i].node === node ) {
				return buttons;
			}

			if ( buttons[i].buttons.length ) {
				var ret = this._nodeToHost( node, buttons[i].buttons );

				if ( ret ) {
					return ret;
				}
			}
		}
	},

	/**
	 * Handle a key press - determine if any button's key configured matches
	 * what was typed and trigger the action if so.
	 * @param  {string} character The character pressed
	 * @param  {object} e Key event that triggered this call
	 * @private
	 */
	_keypress: function ( character, e )
	{
		// Check if this button press already activated on another instance of Buttons
		if ( e._buttonsHandled ) {
			return;
		}

		var run = function ( conf, node ) {
			if ( ! conf.key ) {
				return;
			}

			if ( conf.key === character ) {
				e._buttonsHandled = true;
				$(node).click();
			}
			else if ( $.isPlainObject( conf.key ) ) {
				if ( conf.key.key !== character ) {
					return;
				}

				if ( conf.key.shiftKey && ! e.shiftKey ) {
					return;
				}

				if ( conf.key.altKey && ! e.altKey ) {
					return;
				}

				if ( conf.key.ctrlKey && ! e.ctrlKey ) {
					return;
				}

				if ( conf.key.metaKey && ! e.metaKey ) {
					return;
				}

				// Made it this far - it is good
				e._buttonsHandled = true;
				$(node).click();
			}
		};

		var recurse = function ( a ) {
			for ( var i=0, ien=a.length ; i<ien ; i++ ) {
				run( a[i].conf, a[i].node );

				if ( a[i].buttons.length ) {
					recurse( a[i].buttons );
				}
			}
		};

		recurse( this.s.buttons );
	},

	/**
	 * Remove a key from the key listener for this instance (to be used when a
	 * button is removed)
	 * @param  {object} conf Button configuration
	 * @private
	 */
	_removeKey: function ( conf )
	{
		if ( conf.key ) {
			var character = $.isPlainObject( conf.key ) ?
				conf.key.key :
				conf.key;

			// Remove only one character, as multiple buttons could have the
			// same listening key
			var a = this.s.listenKeys.split('');
			var idx = $.inArray( character, a );
			a.splice( idx, 1 );
			this.s.listenKeys = a.join('');
		}
	},

	/**
	 * Resolve a button configuration
	 * @param  {string|function|object} conf Button config to resolve
	 * @return {object} Button configuration
	 * @private
	 */
	_resolveExtends: function ( conf )
	{
		var dt = this.s.dt;
		var i, ien;
		var toConfObject = function ( base ) {
			var loop = 0;

			// Loop until we have resolved to a button configuration, or an
			// array of button configurations (which will be iterated
			// separately)
			while ( ! $.isPlainObject(base) && ! $.isArray(base) ) {
				if ( base === undefined ) {
					return;
				}

				if ( typeof base === 'function' ) {
					base = base( dt, conf );

					if ( ! base ) {
						return false;
					}
				}
				else if ( typeof base === 'string' ) {
					if ( ! _dtButtons[ base ] ) {
						throw 'Unknown button type: '+base;
					}

					base = _dtButtons[ base ];
				}

				loop++;
				if ( loop > 30 ) {
					// Protect against misconfiguration killing the browser
					throw 'Buttons: Too many iterations';
				}
			}

			return $.isArray( base ) ?
				base :
				$.extend( {}, base );
		};

		conf = toConfObject( conf );

		while ( conf && conf.extend ) {
			// Use `toConfObject` in case the button definition being extended
			// is itself a string or a function
			if ( ! _dtButtons[ conf.extend ] ) {
				throw 'Cannot extend unknown button type: '+conf.extend;
			}

			var objArray = toConfObject( _dtButtons[ conf.extend ] );
			if ( $.isArray( objArray ) ) {
				return objArray;
			}
			else if ( ! objArray ) {
				// This is a little brutal as it might be possible to have a
				// valid button without the extend, but if there is no extend
				// then the host button would be acting in an undefined state
				return false;
			}

			// Stash the current class name
			var originalClassName = objArray.className;

			conf = $.extend( {}, objArray, conf );

			// The extend will have overwritten the original class name if the
			// `conf` object also assigned a class, but we want to concatenate
			// them so they are list that is combined from all extended buttons
			if ( originalClassName && conf.className !== originalClassName ) {
				conf.className = originalClassName+' '+conf.className;
			}

			// Buttons to be added to a collection  -gives the ability to define
			// if buttons should be added to the start or end of a collection
			var postfixButtons = conf.postfixButtons;
			if ( postfixButtons ) {
				if ( ! conf.buttons ) {
					conf.buttons = [];
				}

				for ( i=0, ien=postfixButtons.length ; i<ien ; i++ ) {
					conf.buttons.push( postfixButtons[i] );
				}

				conf.postfixButtons = null;
			}

			var prefixButtons = conf.prefixButtons;
			if ( prefixButtons ) {
				if ( ! conf.buttons ) {
					conf.buttons = [];
				}

				for ( i=0, ien=prefixButtons.length ; i<ien ; i++ ) {
					conf.buttons.splice( i, 0, prefixButtons[i] );
				}

				conf.prefixButtons = null;
			}

			// Although we want the `conf` object to overwrite almost all of
			// the properties of the object being extended, the `extend`
			// property should come from the object being extended
			conf.extend = objArray.extend;
		}

		return conf;
	}
} );



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Statics
 */

/**
 * Show / hide a background layer behind a collection
 * @param  {boolean} Flag to indicate if the background should be shown or
 *   hidden 
 * @param  {string} Class to assign to the background
 * @static
 */
Buttons.background = function ( show, className, fade, insertPoint ) {
	if ( fade === undefined ) {
		fade = 400;
	}
	if ( ! insertPoint ) {
		insertPoint = document.body;
	}

	if ( show ) {
		$('<div/>')
			.addClass( className )
			.css( 'display', 'none' )
			.insertAfter( insertPoint )
			.fadeIn( fade );
	}
	else {
		$('div.'+className)
			.fadeOut( fade, function () {
				$(this)
					.removeClass( className )
					.remove();
			} );
	}
};

/**
 * Instance selector - select Buttons instances based on an instance selector
 * value from the buttons assigned to a DataTable. This is only useful if
 * multiple instances are attached to a DataTable.
 * @param  {string|int|array} Instance selector - see `instance-selector`
 *   documentation on the DataTables site
 * @param  {array} Button instance array that was attached to the DataTables
 *   settings object
 * @return {array} Buttons instances
 * @static
 */
Buttons.instanceSelector = function ( group, buttons )
{
	if ( ! group ) {
		return $.map( buttons, function ( v ) {
			return v.inst;
		} );
	}

	var ret = [];
	var names = $.map( buttons, function ( v ) {
		return v.name;
	} );

	// Flatten the group selector into an array of single options
	var process = function ( input ) {
		if ( $.isArray( input ) ) {
			for ( var i=0, ien=input.length ; i<ien ; i++ ) {
				process( input[i] );
			}
			return;
		}

		if ( typeof input === 'string' ) {
			if ( input.indexOf( ',' ) !== -1 ) {
				// String selector, list of names
				process( input.split(',') );
			}
			else {
				// String selector individual name
				var idx = $.inArray( $.trim(input), names );

				if ( idx !== -1 ) {
					ret.push( buttons[ idx ].inst );
				}
			}
		}
		else if ( typeof input === 'number' ) {
			// Index selector
			ret.push( buttons[ input ].inst );
		}
	};
	
	process( group );

	return ret;
};

/**
 * Button selector - select one or more buttons from a selector input so some
 * operation can be performed on them.
 * @param  {array} Button instances array that the selector should operate on
 * @param  {string|int|node|jQuery|array} Button selector - see
 *   `button-selector` documentation on the DataTables site
 * @return {array} Array of objects containing `inst` and `idx` properties of
 *   the selected buttons so you know which instance each button belongs to.
 * @static
 */
Buttons.buttonSelector = function ( insts, selector )
{
	var ret = [];
	var nodeBuilder = function ( a, buttons, baseIdx ) {
		var button;
		var idx;

		for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( button ) {
				idx = baseIdx !== undefined ?
					baseIdx+i :
					i+'';

				a.push( {
					node: button.node,
					name: button.conf.name,
					idx:  idx
				} );

				if ( button.buttons ) {
					nodeBuilder( a, button.buttons, idx+'-' );
				}
			}
		}
	};

	var run = function ( selector, inst ) {
		var i, ien;
		var buttons = [];
		nodeBuilder( buttons, inst.s.buttons );

		var nodes = $.map( buttons, function (v) {
			return v.node;
		} );

		if ( $.isArray( selector ) || selector instanceof $ ) {
			for ( i=0, ien=selector.length ; i<ien ; i++ ) {
				run( selector[i], inst );
			}
			return;
		}

		if ( selector === null || selector === undefined || selector === '*' ) {
			// Select all
			for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
				ret.push( {
					inst: inst,
					node: buttons[i].node
				} );
			}
		}
		else if ( typeof selector === 'number' ) {
			// Main button index selector
			ret.push( {
				inst: inst,
				node: inst.s.buttons[ selector ].node
			} );
		}
		else if ( typeof selector === 'string' ) {
			if ( selector.indexOf( ',' ) !== -1 ) {
				// Split
				var a = selector.split(',');

				for ( i=0, ien=a.length ; i<ien ; i++ ) {
					run( $.trim(a[i]), inst );
				}
			}
			else if ( selector.match( /^\d+(\-\d+)*$/ ) ) {
				// Sub-button index selector
				var indexes = $.map( buttons, function (v) {
					return v.idx;
				} );

				ret.push( {
					inst: inst,
					node: buttons[ $.inArray( selector, indexes ) ].node
				} );
			}
			else if ( selector.indexOf( ':name' ) !== -1 ) {
				// Button name selector
				var name = selector.replace( ':name', '' );

				for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
					if ( buttons[i].name === name ) {
						ret.push( {
							inst: inst,
							node: buttons[i].node
						} );
					}
				}
			}
			else {
				// jQuery selector on the nodes
				$( nodes ).filter( selector ).each( function () {
					ret.push( {
						inst: inst,
						node: this
					} );
				} );
			}
		}
		else if ( typeof selector === 'object' && selector.nodeName ) {
			// Node selector
			var idx = $.inArray( selector, nodes );

			if ( idx !== -1 ) {
				ret.push( {
					inst: inst,
					node: nodes[ idx ]
				} );
			}
		}
	};


	for ( var i=0, ien=insts.length ; i<ien ; i++ ) {
		var inst = insts[i];

		run( selector, inst );
	}

	return ret;
};


/**
 * Buttons defaults. For full documentation, please refer to the docs/option
 * directory or the DataTables site.
 * @type {Object}
 * @static
 */
Buttons.defaults = {
	buttons: [ 'copy', 'excel', 'csv', 'pdf', 'print' ],
	name: 'main',
	tabIndex: 0,
	dom: {
		container: {
			tag: 'div',
			className: 'dt-buttons'
		},
		collection: {
			tag: 'div',
			className: 'dt-button-collection'
		},
		button: {
			// Flash buttons will not work with `<button>` in IE - it has to be `<a>`
			tag: 'ActiveXObject' in window ?
				'a' :
				'button',
			className: 'dt-button',
			active: 'active',
			disabled: 'disabled'
		},
		buttonLiner: {
			tag: 'span',
			className: ''
		}
	}
};

/**
 * Version information
 * @type {string}
 * @static
 */
Buttons.version = '1.5.4';


$.extend( _dtButtons, {
	collection: {
		text: function ( dt ) {
			return dt.i18n( 'buttons.collection', 'Collection' );
		},
		className: 'buttons-collection',
		action: function ( e, dt, button, config ) {
			var host = button;
			var collectionParent = $(button).parents('div.dt-button-collection');
			var hostPosition = host.position();
			var tableContainer = $( dt.table().container() );
			var multiLevel = false;
			var insertPoint = host;

			// Remove any old collection
			if ( collectionParent.length ) {
				multiLevel = $('.dt-button-collection').position();
				insertPoint = collectionParent;
				$('body').trigger( 'click.dtb-collection' );
			}

			if ( insertPoint.parents('body')[0] !== document.body ) {
				insertPoint = document.body.lastChild;
			}

			config._collection.find('.dt-button-collection-title').remove();
			config._collection.prepend('<div class="dt-button-collection-title">'+config.collectionTitle+'</div>');

			config._collection
				.addClass( config.collectionLayout )
				.css( 'display', 'none' )
				.insertAfter( insertPoint )
				.fadeIn( config.fade );

			var position = config._collection.css( 'position' );

			if ( multiLevel && position === 'absolute' ) {
				config._collection.css( {
					top: multiLevel.top,
					left: multiLevel.left
				} );
			}
			else if ( position === 'absolute' ) {
				config._collection.css( {
					top: hostPosition.top + host.outerHeight(),
					left: hostPosition.left
				} );

				// calculate overflow when positioned beneath
				var tableBottom = tableContainer.offset().top + tableContainer.height();
				var listBottom = hostPosition.top + host.outerHeight() + config._collection.outerHeight();
				var bottomOverflow = listBottom - tableBottom;
				
				// calculate overflow when positioned above
				var listTop = hostPosition.top - config._collection.outerHeight();
				var tableTop = tableContainer.offset().top;
				var topOverflow = tableTop - listTop;
				
				// if bottom overflow is larger, move to the top because it fits better, or if dropup is requested
				if (bottomOverflow > topOverflow || config.dropup) {
					config._collection.css( 'top', hostPosition.top - config._collection.outerHeight() - 5);
				}

				// Right alignment is enabled on a class, e.g. bootstrap:
				// $.fn.dataTable.Buttons.defaults.dom.collection.className += " dropdown-menu-right"; 
				if ( config._collection.hasClass( config.rightAlignClassName ) ) {
					config._collection.css( 'left', hostPosition.left + host.outerWidth() - config._collection.outerWidth() );
				}

				// Right alignment in table container
				var listRight = hostPosition.left + config._collection.outerWidth();
				var tableRight = tableContainer.offset().left + tableContainer.width();
				if ( listRight > tableRight ) {
					config._collection.css( 'left', hostPosition.left - ( listRight - tableRight ) );
				}

				// Right alignment to window
				var listOffsetRight = host.offset().left + config._collection.outerWidth();
				if ( listOffsetRight > $(window).width() ) {
					config._collection.css( 'left', hostPosition.left - (listOffsetRight-$(window).width()) );
				}
			}
			else {
				// Fix position - centre on screen
				var top = config._collection.height() / 2;
				if ( top > $(window).height() / 2 ) {
					top = $(window).height() / 2;
				}

				config._collection.css( 'marginTop', top*-1 );
			}

			if ( config.background ) {
				Buttons.background( true, config.backgroundClassName, config.fade, insertPoint );
			}

			var close = function () {
				config._collection
				.fadeOut( config.fade, function () {
					config._collection.detach();
				} );

				$('div.dt-button-background').off( 'click.dtb-collection' );
				Buttons.background( false, config.backgroundClassName, config.fade, insertPoint );

				$('body').off( '.dtb-collection' );
				dt.off( 'buttons-action.b-internal' );
			};

			// Need to break the 'thread' for the collection button being
			// activated by a click - it would also trigger this event
			setTimeout( function () {
				// This is bonkers, but if we don't have a click listener on the
				// background element, iOS Safari will ignore the body click
				// listener below. An empty function here is all that is
				// required to make it work...
				$('div.dt-button-background').on( 'click.dtb-collection', function () {} );

				$('body')
					.on( 'click.dtb-collection', function (e) {
						// andSelf is deprecated in jQ1.8, but we want 1.7 compat
						var back = $.fn.addBack ? 'addBack' : 'andSelf';

						if ( ! $(e.target).parents()[back]().filter( config._collection ).length ) {
							close();
						}
					} )
					.on( 'keyup.dtb-collection', function (e) {
						if ( e.keyCode === 27 ) {
							close();
						}
					} );

				if ( config.autoClose ) {
					dt.on( 'buttons-action.b-internal', function () {
						close();
					} );
				}
			}, 10 );
		},
		background: true,
		collectionLayout: '',
		collectionTitle: '',
		backgroundClassName: 'dt-button-background',
		rightAlignClassName: 'dt-button-right',
		autoClose: false,
		fade: 400,
		attr: {
			'aria-haspopup': true
		}
	},
	copy: function ( dt, conf ) {
		if ( _dtButtons.copyHtml5 ) {
			return 'copyHtml5';
		}
		if ( _dtButtons.copyFlash && _dtButtons.copyFlash.available( dt, conf ) ) {
			return 'copyFlash';
		}
	},
	csv: function ( dt, conf ) {
		// Common option that will use the HTML5 or Flash export buttons
		if ( _dtButtons.csvHtml5 && _dtButtons.csvHtml5.available( dt, conf ) ) {
			return 'csvHtml5';
		}
		if ( _dtButtons.csvFlash && _dtButtons.csvFlash.available( dt, conf ) ) {
			return 'csvFlash';
		}
	},
	excel: function ( dt, conf ) {
		// Common option that will use the HTML5 or Flash export buttons
		if ( _dtButtons.excelHtml5 && _dtButtons.excelHtml5.available( dt, conf ) ) {
			return 'excelHtml5';
		}
		if ( _dtButtons.excelFlash && _dtButtons.excelFlash.available( dt, conf ) ) {
			return 'excelFlash';
		}
	},
	pdf: function ( dt, conf ) {
		// Common option that will use the HTML5 or Flash export buttons
		if ( _dtButtons.pdfHtml5 && _dtButtons.pdfHtml5.available( dt, conf ) ) {
			return 'pdfHtml5';
		}
		if ( _dtButtons.pdfFlash && _dtButtons.pdfFlash.available( dt, conf ) ) {
			return 'pdfFlash';
		}
	},
	pageLength: function ( dt ) {
		var lengthMenu = dt.settings()[0].aLengthMenu;
		var vals = $.isArray( lengthMenu[0] ) ? lengthMenu[0] : lengthMenu;
		var lang = $.isArray( lengthMenu[0] ) ? lengthMenu[1] : lengthMenu;
		var text = function ( dt ) {
			return dt.i18n( 'buttons.pageLength', {
				"-1": 'Show all rows',
				_:    'Show %d rows'
			}, dt.page.len() );
		};

		return {
			extend: 'collection',
			text: text,
			className: 'buttons-page-length',
			autoClose: true,
			buttons: $.map( vals, function ( val, i ) {
				return {
					text: lang[i],
					className: 'button-page-length',
					action: function ( e, dt ) {
						dt.page.len( val ).draw();
					},
					init: function ( dt, node, conf ) {
						var that = this;
						var fn = function () {
							that.active( dt.page.len() === val );
						};

						dt.on( 'length.dt'+conf.namespace, fn );
						fn();
					},
					destroy: function ( dt, node, conf ) {
						dt.off( 'length.dt'+conf.namespace );
					}
				};
			} ),
			init: function ( dt, node, conf ) {
				var that = this;
				dt.on( 'length.dt'+conf.namespace, function () {
					that.text( text( dt ) );
				} );
			},
			destroy: function ( dt, node, conf ) {
				dt.off( 'length.dt'+conf.namespace );
			}
		};
	}
} );


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables API
 *
 * For complete documentation, please refer to the docs/api directory or the
 * DataTables site
 */

// Buttons group and individual button selector
DataTable.Api.register( 'buttons()', function ( group, selector ) {
	// Argument shifting
	if ( selector === undefined ) {
		selector = group;
		group = undefined;
	}

	this.selector.buttonGroup = group;

	var res = this.iterator( true, 'table', function ( ctx ) {
		if ( ctx._buttons ) {
			return Buttons.buttonSelector(
				Buttons.instanceSelector( group, ctx._buttons ),
				selector
			);
		}
	}, true );

	res._groupSelector = group;
	return res;
} );

// Individual button selector
DataTable.Api.register( 'button()', function ( group, selector ) {
	// just run buttons() and truncate
	var buttons = this.buttons( group, selector );

	if ( buttons.length > 1 ) {
		buttons.splice( 1, buttons.length );
	}

	return buttons;
} );

// Active buttons
DataTable.Api.registerPlural( 'buttons().active()', 'button().active()', function ( flag ) {
	if ( flag === undefined ) {
		return this.map( function ( set ) {
			return set.inst.active( set.node );
		} );
	}

	return this.each( function ( set ) {
		set.inst.active( set.node, flag );
	} );
} );

// Get / set button action
DataTable.Api.registerPlural( 'buttons().action()', 'button().action()', function ( action ) {
	if ( action === undefined ) {
		return this.map( function ( set ) {
			return set.inst.action( set.node );
		} );
	}

	return this.each( function ( set ) {
		set.inst.action( set.node, action );
	} );
} );

// Enable / disable buttons
DataTable.Api.register( ['buttons().enable()', 'button().enable()'], function ( flag ) {
	return this.each( function ( set ) {
		set.inst.enable( set.node, flag );
	} );
} );

// Disable buttons
DataTable.Api.register( ['buttons().disable()', 'button().disable()'], function () {
	return this.each( function ( set ) {
		set.inst.disable( set.node );
	} );
} );

// Get button nodes
DataTable.Api.registerPlural( 'buttons().nodes()', 'button().node()', function () {
	var jq = $();

	// jQuery will automatically reduce duplicates to a single entry
	$( this.each( function ( set ) {
		jq = jq.add( set.inst.node( set.node ) );
	} ) );

	return jq;
} );

// Get / set button processing state
DataTable.Api.registerPlural( 'buttons().processing()', 'button().processing()', function ( flag ) {
	if ( flag === undefined ) {
		return this.map( function ( set ) {
			return set.inst.processing( set.node );
		} );
	}

	return this.each( function ( set ) {
		set.inst.processing( set.node, flag );
	} );
} );

// Get / set button text (i.e. the button labels)
DataTable.Api.registerPlural( 'buttons().text()', 'button().text()', function ( label ) {
	if ( label === undefined ) {
		return this.map( function ( set ) {
			return set.inst.text( set.node );
		} );
	}

	return this.each( function ( set ) {
		set.inst.text( set.node, label );
	} );
} );

// Trigger a button's action
DataTable.Api.registerPlural( 'buttons().trigger()', 'button().trigger()', function () {
	return this.each( function ( set ) {
		set.inst.node( set.node ).trigger( 'click' );
	} );
} );

// Get the container elements
DataTable.Api.registerPlural( 'buttons().containers()', 'buttons().container()', function () {
	var jq = $();
	var groupSelector = this._groupSelector;

	// We need to use the group selector directly, since if there are no buttons
	// the result set will be empty
	this.iterator( true, 'table', function ( ctx ) {
		if ( ctx._buttons ) {
			var insts = Buttons.instanceSelector( groupSelector, ctx._buttons );

			for ( var i=0, ien=insts.length ; i<ien ; i++ ) {
				jq = jq.add( insts[i].container() );
			}
		}
	} );

	return jq;
} );

// Add a new button
DataTable.Api.register( 'button().add()', function ( idx, conf ) {
	var ctx = this.context;

	// Don't use `this` as it could be empty - select the instances directly
	if ( ctx.length ) {
		var inst = Buttons.instanceSelector( this._groupSelector, ctx[0]._buttons );

		if ( inst.length ) {
			inst[0].add( conf, idx );
		}
	}

	return this.button( this._groupSelector, idx );
} );

// Destroy the button sets selected
DataTable.Api.register( 'buttons().destroy()', function () {
	this.pluck( 'inst' ).unique().each( function ( inst ) {
		inst.destroy();
	} );

	return this;
} );

// Remove a button
DataTable.Api.registerPlural( 'buttons().remove()', 'buttons().remove()', function () {
	this.each( function ( set ) {
		set.inst.remove( set.node );
	} );

	return this;
} );

// Information box that can be used by buttons
var _infoTimer;
DataTable.Api.register( 'buttons.info()', function ( title, message, time ) {
	var that = this;

	if ( title === false ) {
		$('#datatables_buttons_info').fadeOut( function () {
			$(this).remove();
		} );
		clearTimeout( _infoTimer );
		_infoTimer = null;

		return this;
	}

	if ( _infoTimer ) {
		clearTimeout( _infoTimer );
	}

	if ( $('#datatables_buttons_info').length ) {
		$('#datatables_buttons_info').remove();
	}

	title = title ? '<h2>'+title+'</h2>' : '';

	$('<div id="datatables_buttons_info" class="dt-button-info"/>')
		.html( title )
		.append( $('<div/>')[ typeof message === 'string' ? 'html' : 'append' ]( message ) )
		.css( 'display', 'none' )
		.appendTo( 'body' )
		.fadeIn();

	if ( time !== undefined && time !== 0 ) {
		_infoTimer = setTimeout( function () {
			that.buttons.info( false );
		}, time );
	}

	return this;
} );

// Get data from the table for export - this is common to a number of plug-in
// buttons so it is included in the Buttons core library
DataTable.Api.register( 'buttons.exportData()', function ( options ) {
	if ( this.context.length ) {
		return _exportData( new DataTable.Api( this.context[0] ), options );
	}
} );

// Get information about the export that is common to many of the export data
// types (DRY)
DataTable.Api.register( 'buttons.exportInfo()', function ( conf ) {
	if ( ! conf ) {
		conf = {};
	}

	return {
		filename: _filename( conf ),
		title: _title( conf ),
		messageTop: _message(this, conf.message || conf.messageTop, 'top'),
		messageBottom: _message(this, conf.messageBottom, 'bottom')
	};
} );



/**
 * Get the file name for an exported file.
 *
 * @param {object}	config Button configuration
 * @param {boolean} incExtension Include the file name extension
 */
var _filename = function ( config )
{
	// Backwards compatibility
	var filename = config.filename === '*' && config.title !== '*' && config.title !== undefined && config.title !== null && config.title !== '' ?
		config.title :
		config.filename;

	if ( typeof filename === 'function' ) {
		filename = filename();
	}

	if ( filename === undefined || filename === null ) {
		return null;
	}

	if ( filename.indexOf( '*' ) !== -1 ) {
		filename = $.trim( filename.replace( '*', $('head > title').text() ) );
	}

	// Strip characters which the OS will object to
	filename = filename.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");

	var extension = _stringOrFunction( config.extension );
	if ( ! extension ) {
		extension = '';
	}

	return filename + extension;
};

/**
 * Simply utility method to allow parameters to be given as a function
 *
 * @param {undefined|string|function} option Option
 * @return {null|string} Resolved value
 */
var _stringOrFunction = function ( option )
{
	if ( option === null || option === undefined ) {
		return null;
	}
	else if ( typeof option === 'function' ) {
		return option();
	}
	return option;
};

/**
 * Get the title for an exported file.
 *
 * @param {object} config	Button configuration
 */
var _title = function ( config )
{
	var title = _stringOrFunction( config.title );

	return title === null ?
		null : title.indexOf( '*' ) !== -1 ?
			title.replace( '*', $('head > title').text() || 'Exported data' ) :
			title;
};

var _message = function ( dt, option, position )
{
	var message = _stringOrFunction( option );
	if ( message === null ) {
		return null;
	}

	var caption = $('caption', dt.table().container()).eq(0);
	if ( message === '*' ) {
		var side = caption.css( 'caption-side' );
		if ( side !== position ) {
			return null;
		}

		return caption.length ?
			caption.text() :
			'';
	}

	return message;
};







var _exportTextarea = $('<textarea/>')[0];
var _exportData = function ( dt, inOpts )
{
	var config = $.extend( true, {}, {
		rows:           null,
		columns:        '',
		modifier:       {
			search: 'applied',
			order:  'applied'
		},
		orthogonal:     'display',
		stripHtml:      true,
		stripNewlines:  true,
		decodeEntities: true,
		trim:           true,
		format:         {
			header: function ( d ) {
				return strip( d );
			},
			footer: function ( d ) {
				return strip( d );
			},
			body: function ( d ) {
				return strip( d );
			}
		},
		customizeData: null
	}, inOpts );

	var strip = function ( str ) {
		if ( typeof str !== 'string' ) {
			return str;
		}

		// Always remove script tags
		str = str.replace( /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '' );

		// Always remove comments
		str = str.replace( /<!\-\-.*?\-\->/g, '' );

		if ( config.stripHtml ) {
			str = str.replace( /<[^>]*>/g, '' );
		}

		if ( config.trim ) {
			str = str.replace( /^\s+|\s+$/g, '' );
		}

		if ( config.stripNewlines ) {
			str = str.replace( /\n/g, ' ' );
		}

		if ( config.decodeEntities ) {
			_exportTextarea.innerHTML = str;
			str = _exportTextarea.value;
		}

		return str;
	};


	var header = dt.columns( config.columns ).indexes().map( function (idx) {
		var el = dt.column( idx ).header();
		return config.format.header( el.innerHTML, idx, el );
	} ).toArray();

	var footer = dt.table().footer() ?
		dt.columns( config.columns ).indexes().map( function (idx) {
			var el = dt.column( idx ).footer();
			return config.format.footer( el ? el.innerHTML : '', idx, el );
		} ).toArray() :
		null;
	
	// If Select is available on this table, and any rows are selected, limit the export
	// to the selected rows. If no rows are selected, all rows will be exported. Specify
	// a `selected` modifier to control directly.
	var modifier = $.extend( {}, config.modifier );
	if ( dt.select && typeof dt.select.info === 'function' && modifier.selected === undefined ) {
		if ( dt.rows( config.rows, $.extend( { selected: true }, modifier ) ).any() ) {
			$.extend( modifier, { selected: true } )
		}
	}

	var rowIndexes = dt.rows( config.rows, modifier ).indexes().toArray();
	var selectedCells = dt.cells( rowIndexes, config.columns );
	var cells = selectedCells
		.render( config.orthogonal )
		.toArray();
	var cellNodes = selectedCells
		.nodes()
		.toArray();

	var columns = header.length;
	var rows = columns > 0 ? cells.length / columns : 0;
	var body = [];
	var cellCounter = 0;

	for ( var i=0, ien=rows ; i<ien ; i++ ) {
		var row = [ columns ];

		for ( var j=0 ; j<columns ; j++ ) {
			row[j] = config.format.body( cells[ cellCounter ], i, j, cellNodes[ cellCounter ] );
			cellCounter++;
		}

		body[i] = row;
	}

	var data = {
		header: header,
		footer: footer,
		body:   body
	};

	if ( config.customizeData ) {
		config.customizeData( data );
	}

	return data;
};


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables interface
 */

// Attach to DataTables objects for global access
$.fn.dataTable.Buttons = Buttons;
$.fn.DataTable.Buttons = Buttons;



// DataTables creation - check if the buttons have been defined for this table,
// they will have been if the `B` option was used in `dom`, otherwise we should
// create the buttons instance here so they can be inserted into the document
// using the API. Listen for `init` for compatibility with pre 1.10.10, but to
// be removed in future.
$(document).on( 'init.dt plugin-init.dt', function (e, settings) {
	if ( e.namespace !== 'dt' ) {
		return;
	}

	var opts = settings.oInit.buttons || DataTable.defaults.buttons;

	if ( opts && ! settings._buttons ) {
		new Buttons( settings, opts ).container();
	}
} );

// DataTables `dom` feature option
DataTable.ext.feature.push( {
	fnInit: function( settings ) {
		var api = new DataTable.Api( settings );
		var opts = api.init().buttons || DataTable.defaults.buttons;

		return new Buttons( api, opts ).container();
	},
	cFeature: "B"
} );


return Buttons;
}));


