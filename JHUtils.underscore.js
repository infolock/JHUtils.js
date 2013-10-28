/*!
 * JHUtils - A Simple Helper Object
 * @requires underscorejs (http://underscorejs.org)
 */
(function() {
  var $scope = this,
  JHUtils = function(obj) {
    if(obj instanceof JHUtils) return obj;
    if (!(this instanceof JHUtils)) return new JHUtils(obj);

    this.JHObj = obj;
  },

  // Get Bevis and Butthead identified...
  BEVIS_DETECTED = IE_9_DETECTED = (function() {
    return (Function.prototype.bind && (typeof console === 'object' || typeof console === 'function') && typeof console.log === 'object');
  })(),

  BUTTHEAD_DETECTED = IE_8_DETECTED = (function() {
    return (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object');
  })();

  $scope.JHUtils = JHUtils;

  JHUtils.ascSort = function(targetArr) {

    if(!_.isArray(targetArr) || targetArr.length == 0) return targetArr;
    var i, j, subject, n = targetArr.length;

    if(n < 25) return _.sortBy(targetArr, function(key) { return key; })

    for(i = 0; i < n; i++) {
      subject = targetArr[i];
      j = i;

      for(j = i; j > 0 && subject < targetArr[j-1]; j--) targetArr[j] = targetArr[j - 1];

      targetArr[j] = subject;
    }
    return targetArr;
  };

  JHUtils.dataStore = function() {
    var items = [],
    addItem = function(itemValue) {
      if(!itemValue) return;

      var newItem = items[itemValue];
      if(!newItem) {
        newItem = itemValue;
        items.push(newItem);
      }
      return newItem;
    };

    return addItem;
  }();

  JHUtils.isInteger = function(value) {
    return (value && !isNaN(value) && _.isNumber(value) && value != +value);
  };

  // @concept author http://www.coderholic.com/javascript-the-good-parts/
  // Get all parts of a URL and return parts as an object.
  JHUtils.urlToArray = function(urlString) {
    if(!urlString || urlString.length < 1) return false;

    var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
    url = urlString,
    result = parse_url.exec(url),
    domainTLD = false;

    // If we don't have a valid array or at least the URL portion of our array, return false.
    if(!jQuery.isArray(result) || !result[0] || result[0].length < 1) {
      return false;
    }

    if(result[3].length > 0) {
      domainTLD = result[3].substring(result[3].length - 4);
      if(domainTLD) {
        switch(domainTLD.toLowerCase()) {
          case '.com': case '.net': case '.org':
            domainTLD = true;
          break;
          default:
            domainTLD = false;
          break;
        }
      } else {
        domainTLD = false;
      }
    }
    return {
      url:   result[0],
      schema:(result[1] && result[1].length > 0 ? result[1] : false),
      slash: (result[2] && result[2].length > 0 ? result[2] : false),
      host:  (result[3] && result[3].length > 0 ? result[3] : false),
      port:  (result[4] && result[4].length > 0 ? result[4] : false),
      path:  (result[5] && result[5].length > 0 ? result[5] : false),
      query: (result[6] && result[6].length > 0 ? result[6] : false),
      hash:  (result[7] && result[7].length > 0 ? result[7] : false),
      hasTLD: domainTLD
    };
  };

  JHUtils.arrayWithDistinctValuesFromArray = function(arr) {
    if(!(_.isArray(arr) && values.length > 0)) return arr;
    var HashMap = Object.create(null), distinctValues = [], n = arr.length - 1;
    do {
      if (!HashMap[arr[n]]) {
        HashMap[arr[n]] = true;
        distinctValues.push(arr[n]);
      }
    } while(n--);
    return distinctValues;
  };

  JHUtils.log = (function() {

    // This helps prepare IE 9 to display logs via JHUtils.log() below
    if(BEVIS_DETECTED) {
      // Source: http://patik.com/code/console-log-polyfill/consolelog.js
      ['log','info','warn','error','assert','dir','clear','profile','profileEnd'].forEach(function (method) {
        console[method] = this.call(console[method], console);
      }, Function.prototype.bind);
    }

    return function(msg, obj) {
      if(BUTTHEAD_DETECTED) return false;

      if(!msg || msg.length == 0) msg = "JHUtils.log triggered...";

      if(!_.isObject(obj)) obj = {};

      if(console && console.log) {
        if(_.isEmpty(obj)) {
          console.log("%s", msg);
        } else {
          console.log("%s: %o", msg, obj);
        }
      }
    };
  })();
}).call(this);