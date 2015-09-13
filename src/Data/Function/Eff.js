/* global exports */
"use strict";

// module Data.Function.Eff

exports.mkExportEffFn0 = function (fn) {
  return function () {
    return fn({})();
  };
};

exports.mkExportEffFn1 = function (fn) {
  return function (a) {
    return fn(a)();
  };
};

exports.mkExportEffFn2 = function (fn) {
  /* jshint maxparams: 2 */
  return function (a, b) {
    return fn(a)(b)();
  };
};

exports.mkExportEffFn3 = function (fn) {
  /* jshint maxparams: 3 */
  return function (a, b, c) {
    return fn(a)(b)(c)();
  };
};

exports.mkExportEffFn4 = function (fn) {
  /* jshint maxparams: 4 */
  return function (a, b, c, d) {
    return fn(a)(b)(c)(d)();
  };
};

exports.mkExportEffFn5 = function (fn) {
  /* jshint maxparams: 5 */
  return function (a, b, c, d, e) {
    return fn(a)(b)(c)(d)(e)();
  };
};

exports.mkExportEffFn6 = function (fn) {
  /* jshint maxparams: 6 */
  return function (a, b, c, d, e, f) {
    return fn(a)(b)(c)(d)(e)(f)();
  };
};

exports.mkExportEffFn7 = function (fn) {
  /* jshint maxparams: 7 */
  return function (a, b, c, d, e, f, g) {
    return fn(a)(b)(c)(d)(e)(f)(g)();
  };
};

exports.mkExportEffFn8 = function (fn) {
  /* jshint maxparams: 8 */
  return function (a, b, c, d, e, f, g, h) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)();
  };
};

exports.mkExportEffFn9 = function (fn) {
  /* jshint maxparams: 9 */
  return function (a, b, c, d, e, f, g, h, i) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)();
  };
};

exports.mkExportEffFn10 = function (fn) {
  /* jshint maxparams: 10 */
  return function (a, b, c, d, e, f, g, h, i, j) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)();
  };
};

exports.runImportEffFn0 = function (fn) {
  return function () {
    return fn();
  };
};

exports.runImportEffFn1 = function (fn) {
  return function (a) {
    return function () {
      return fn(a);
    };
  };
};

exports.runImportEffFn2 = function (fn) {
  return function (a) {
    return function (b) {
      return function () {
	return fn(a, b);
      };
    };
  };
};

exports.runImportEffFn3 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
	return function () {
          return fn(a, b, c);
	};
      };
    };
  };
};

exports.runImportEffFn4 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
	  return function () {
            return fn(a, b, c, d);
	  };
        };
      };
    };
  };
};

exports.runImportEffFn5 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
	    return function () {
              return fn(a, b, c, d, e);
	    };
          };
        };
      };
    };
  };
};

exports.runImportEffFn6 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
	      return function () {
		return fn(a, b, c, d, e, f);
	      };
            };
          };
        };
      };
    };
  };
};

exports.runImportEffFn7 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
		return function () {
                  return fn(a, b, c, d, e, f, g);
		};
              };
            };
          };
        };
      };
    };
  };
};

exports.runImportEffFn8 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return function (h) {
		  return function () {
                    return fn(a, b, c, d, e, f, g, h);
		  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runImportEffFn9 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return function (h) {
                  return function (i) {
		    return function () {
                      return fn(a, b, c, d, e, f, g, h, i);
		    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runImportEffFn10 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return function (h) {
                  return function (i) {
                    return function (j) {
		      return function () {
			return fn(a, b, c, d, e, f, g, h, i, j);
		      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runMethodEffFn0 = function (fn) {
  return function (t) {
    return function () {
      return fn.call(t);
    };
  };
};

exports.runMethodEffFn1 = function (fn) {
  return function (t) {
    return function (a) {
      return function () {
	return fn.call(t, a);
      };
    };
  };
};

exports.runMethodEffFn2 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function () {
	  return fn.call(t, a, b);
	};
      };
    };
  };
};

exports.runMethodEffFn3 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
	  return function () {
            return fn.call(t, a, b, c);
	  };
	};
      };
    };
  };
};

exports.runMethodEffFn4 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
          return function (d) {
	    return function () {
              return fn.call(t, a, b, c, d);
	    };
          };
	};
      };
    };
  };
};

exports.runMethodEffFn5 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
          return function (d) {
            return function (e) {
	      return function () {
		return fn.call(t, a, b, c, d, e);
	      };
            };
          };
	};
      };
    };
  };
};

exports.runMethodEffFn6 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
		return function () {
		  return fn.call(t, a, b, c, d, e, f);
		};
              };
            };
          };
	};
      };
    };
  };
};

exports.runMethodEffFn7 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
		return function (g) {
		  return function () {
                    return fn.call(t, a, b, c, d, e, f, g);
		  };
		};
              };
            };
          };
	};
      };
    };
  };
};

exports.runMethodEffFn8 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
		return function (g) {
                  return function (h) {
		    return function () {
                      return fn.call(t, a, b, c, d, e, f, g, h);
		    };
                  };
		};
              };
            };
          };
	};
      };
    };
  };
};

exports.runMethodEffFn9 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
		return function (g) {
                  return function (h) {
                    return function (i) {
		      return function () {
			return fn.call(t, a, b, c, d, e, f, g, h, i);
		      };
                    };
                  };
		};
              };
            };
          };
	};
      };
    };
  };
};

exports.runMethodEffFn10 = function (fn) {
  return function (t) {
    return function (a) {
      return function (b) {
	return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
		return function (g) {
                  return function (h) {
                    return function (i) {
                      return function (j) {
			return function () {
			  return fn.call(t, a, b, c, d, e, f, g, h, i, j);
			};
                      };
                    };
                  };
		};
              };
            };
          };
	};
      };
    };
  };
};
