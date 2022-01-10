if (self.CavalryLogger) {
  CavalryLogger.start_js(["RGycWr6"]);
}

__d(
  "relay-runtime/handlers/connection/ConnectionInterface",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
        after: !0,
        before: !0,
        find: !0,
        first: !0,
        last: !0,
        surrounds: !0,
      },
      h = {
        CLIENT_MUTATION_ID: "clientMutationId",
        CURSOR: "cursor",
        EDGES: "edges",
        END_CURSOR: "endCursor",
        HAS_NEXT_PAGE: "hasNextPage",
        HAS_PREV_PAGE: "hasPreviousPage",
        NODE: "node",
        PAGE_INFO_TYPE: "PageInfo",
        PAGE_INFO: "pageInfo",
        START_CURSOR: "startCursor",
      };
    a = {
      inject: function (a) {
        h = a;
      },
      get: function () {
        return h;
      },
      isConnectionCall: function (a) {
        return Object.prototype.hasOwnProperty.call(g, a.name);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/ClientID",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "client:";
    function a(a, b, c) {
      a = a + ":" + b;
      c != null && (a += ":" + c);
      a.indexOf(g) !== 0 && (a = g + a);
      return a;
    }
    function b(a) {
      return a.indexOf(g) === 0;
    }
    var h = 0;
    function c() {
      return g + "local:" + h++;
    }
    e.exports = {
      generateClientID: a,
      generateUniqueClientID: c,
      isClientID: b,
    };
  },
  null
);
__d(
  "relay-runtime/util/RelayConcreteNode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      ACTOR_CHANGE: "ActorChange",
      CONDITION: "Condition",
      CLIENT_COMPONENT: "ClientComponent",
      CLIENT_EXTENSION: "ClientExtension",
      DEFER: "Defer",
      CONNECTION: "Connection",
      FLIGHT_FIELD: "FlightField",
      FRAGMENT: "Fragment",
      FRAGMENT_SPREAD: "FragmentSpread",
      INLINE_DATA_FRAGMENT_SPREAD: "InlineDataFragmentSpread",
      INLINE_DATA_FRAGMENT: "InlineDataFragment",
      INLINE_FRAGMENT: "InlineFragment",
      LINKED_FIELD: "LinkedField",
      LINKED_HANDLE: "LinkedHandle",
      LITERAL: "Literal",
      LIST_VALUE: "ListValue",
      LOCAL_ARGUMENT: "LocalArgument",
      MODULE_IMPORT: "ModuleImport",
      RELAY_RESOLVER: "RelayResolver",
      REQUIRED_FIELD: "RequiredField",
      OBJECT_VALUE: "ObjectValue",
      OPERATION: "Operation",
      REQUEST: "Request",
      ROOT_ARGUMENT: "RootArgument",
      SCALAR_FIELD: "ScalarField",
      SCALAR_HANDLE: "ScalarHandle",
      SPLIT_OPERATION: "SplitOperation",
      STREAM: "Stream",
      TYPE_DISCRIMINATOR: "TypeDiscriminator",
      VARIABLE: "Variable",
    };
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/RelayDefaultHandleKey",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = { DEFAULT_HANDLE_KEY: "" };
  },
  null
);
__d(
  "relay-runtime/util/getRelayHandleKey",
  ["invariant", "relay-runtime/util/RelayDefaultHandleKey"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/util/RelayDefaultHandleKey").DEFAULT_HANDLE_KEY;
    function a(a, b, c) {
      if (b && b !== h) return "__" + b + "_" + a;
      c != null || g(0, 3311);
      return "__" + c + "_" + a;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/stableCopy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      if (!a || typeof a !== "object") return a;
      if (Array.isArray(a)) return a.map(g);
      var b = Object.keys(a).sort(),
        c = {};
      for (var d = 0; d < b.length; d++) c[b[d]] = g(a[b[d]]);
      return c;
    }
    e.exports = g;
  },
  null
);
__d(
  "relay-runtime/store/RelayStoreUtils",
  [
    "invariant",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/getRelayHandleKey",
    "relay-runtime/util/stableCopy",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = (i = b("relay-runtime/util/RelayConcreteNode")).VARIABLE,
      k = i.LITERAL,
      l = i.OBJECT_VALUE,
      m = i.LIST_VALUE,
      n = "__module_component_",
      o = "__module_operation_";
    function p(a, b) {
      if (a.kind === j) return s(a.variableName, b);
      else if (a.kind === k) return a.value;
      else if (a.kind === l) {
        var c = {};
        a.fields.forEach(function (a) {
          c[a.name] = p(a, b);
        });
        return c;
      } else if (a.kind === m) {
        var d = [];
        a.items.forEach(function (a) {
          a != null ? d.push(p(a, b)) : null;
        });
        return d;
      }
    }
    function q(a, b) {
      var c = {};
      a.forEach(function (a) {
        c[a.name] = p(a, b);
      });
      return c;
    }
    function a(a, c) {
      var d = a.dynamicKey,
        e = a.handle,
        f = a.key,
        g = a.name,
        h = a.args,
        i = a.filters;
      a = b("relay-runtime/util/getRelayHandleKey")(e, f, g);
      e = null;
      h &&
        i &&
        h.length !== 0 &&
        i.length !== 0 &&
        (e = h.filter(function (a) {
          return i.indexOf(a.name) > -1;
        }));
      d && (e = e != null ? [d].concat(e) : [d]);
      if (e === null) return a;
      else return r(a, q(e, c));
    }
    function c(a, b) {
      if (a.storageKey) return a.storageKey;
      var c = typeof a.args === "undefined" ? void 0 : a.args;
      a = a.name;
      return c && c.length !== 0 ? r(a, q(c, b)) : a;
    }
    function d(a, c) {
      return r(a, (h || (h = b("relay-runtime/util/stableCopy")))(c));
    }
    function r(a, b) {
      if (!b) return a;
      var c = [];
      for (var d in b)
        if (Object.prototype.hasOwnProperty.call(b, d)) {
          var e = b[d];
          if (e != null) {
            c.push(
              d + ":" + ((e = JSON.stringify(e)) != null ? e : "undefined")
            );
          }
        }
      return c.length === 0 ? a : a + ("(" + c.join(",") + ")");
    }
    function s(a, c) {
      Object.prototype.hasOwnProperty.call(c, a) || g(0, 5557, a);
      return (h || (h = b("relay-runtime/util/stableCopy")))(c[a]);
    }
    function f(a) {
      return "" + n + a;
    }
    function t(a) {
      return "" + o + a;
    }
    i = {
      ACTOR_IDENTIFIER_KEY: "__actorIdentifier",
      FRAGMENTS_KEY: "__fragments",
      FRAGMENT_OWNER_KEY: "__fragmentOwner",
      FRAGMENT_PROP_NAME_KEY: "__fragmentPropName",
      MODULE_COMPONENT_KEY: "__module_component",
      ID_KEY: "__id",
      REF_KEY: "__ref",
      REFS_KEY: "__refs",
      ROOT_ID: "client:root",
      ROOT_TYPE: "__Root",
      TYPENAME_KEY: "__typename",
      INVALIDATED_AT_KEY: "__invalidated_at",
      IS_WITHIN_UNMATCHED_TYPE_REFINEMENT: "__isWithinUnmatchedTypeRefinement",
      RELAY_RESOLVER_VALUE_KEY: "__resolverValue",
      RELAY_RESOLVER_INVALIDATION_KEY: "__resolverValueMayBeInvalid",
      RELAY_RESOLVER_INPUTS_KEY: "__resolverInputValues",
      RELAY_RESOLVER_READER_SELECTOR_KEY: "__resolverReaderSelector",
      formatStorageKey: r,
      getArgumentValue: p,
      getArgumentValues: q,
      getHandleStorageKey: a,
      getStorageKey: c,
      getStableStorageKey: d,
      getModuleComponentKey: f,
      getModuleOperationKey: t,
    };
    e.exports = i;
  },
  null
);
__d(
  "relay-runtime/handlers/connection/ConnectionHandler",
  [
    "invariant",
    "relay-runtime/handlers/connection/ConnectionInterface",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/getRelayHandleKey",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/store/ClientID").generateClientID,
      i = b("relay-runtime/store/RelayStoreUtils").getStableStorageKey,
      j = "connection",
      k = "__connection_next_edge_index";
    function a(a, c) {
      var d,
        e = a.get(c.dataID);
      if (!e) return;
      var f = b("relay-runtime/handlers/connection/ConnectionInterface").get(),
        g = f.EDGES,
        i = f.END_CURSOR,
        j = f.HAS_NEXT_PAGE,
        l = f.HAS_PREV_PAGE,
        m = f.PAGE_INFO,
        n = f.PAGE_INFO_TYPE;
      f = f.START_CURSOR;
      var q = e.getLinkedRecord(c.fieldKey),
        r = q && q.getLinkedRecord(m);
      if (!q) {
        e.setValue(null, c.handleKey);
        return;
      }
      var s = h(e.getDataID(), c.handleKey),
        t = e.getLinkedRecord(c.handleKey);
      d = (d = t) != null ? d : a.get(s);
      var u = d && d.getLinkedRecord(m);
      if (!d) {
        var v = a.create(s, q.getType());
        v.setValue(0, k);
        v.copyFieldsFrom(q);
        s = q.getLinkedRecords(g);
        s &&
          ((s = s.map(function (b) {
            return o(a, v, b);
          })),
          v.setLinkedRecords(s, g));
        e.setLinkedRecord(v, c.handleKey);
        u = a.create(h(v.getDataID(), m), n);
        u.setValue(!1, j);
        u.setValue(!1, l);
        u.setValue(null, i);
        u.setValue(null, f);
        r && u.copyFieldsFrom(r);
        v.setLinkedRecord(u, m);
      } else {
        t == null && e.setLinkedRecord(d, c.handleKey);
        var w = d;
        s = q.getLinkedRecords(g);
        s &&
          (s = s.map(function (b) {
            return o(a, w, b);
          }));
        n = w.getLinkedRecords(g);
        t = w.getLinkedRecord(m);
        w.copyFieldsFrom(q);
        n && w.setLinkedRecords(n, g);
        t && w.setLinkedRecord(t, m);
        e = [];
        d = c.args;
        if (n && s)
          if (d.after != null)
            if (u && d.after === u.getValue(i)) {
              q = new Set();
              p(n, e, q);
              p(s, e, q);
            } else {
              b("warning")(
                !1,
                "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                d.after,
                u && u.getValue(i)
              );
              return;
            }
          else if (d.before != null)
            if (u && d.before === u.getValue(f)) {
              t = new Set();
              p(s, e, t);
              p(n, e, t);
            } else {
              b("warning")(
                !1,
                "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                d.before,
                u && u.getValue(f)
              );
              return;
            }
          else e = s;
        else s ? (e = s) : (e = n);
        e != null && e !== n && w.setLinkedRecords(e, g);
        if (u && r)
          if (d.after == null && d.before == null) u.copyFieldsFrom(r);
          else if (d.before != null || (d.after == null && d.last)) {
            u.setValue(!!r.getValue(l), l);
            m = r.getValue(f);
            typeof m === "string" && u.setValue(m, f);
          } else if (d.after != null || (d.before == null && d.first)) {
            u.setValue(!!r.getValue(j), j);
            c = r.getValue(i);
            typeof c === "string" && u.setValue(c, i);
          }
      }
    }
    function c(a, c, d) {
      c = b("relay-runtime/util/getRelayHandleKey")(j, c, null);
      return a.getLinkedRecord(c, d);
    }
    function d(a, c, d) {
      c = b("relay-runtime/util/getRelayHandleKey")(j, c, null);
      c = i(c, d);
      return h(a, c);
    }
    function f(a, c, d) {
      var e = b("relay-runtime/handlers/connection/ConnectionInterface").get(),
        f = e.CURSOR;
      e = e.EDGES;
      var g = a.getLinkedRecords(e);
      if (!g) {
        a.setLinkedRecords([c], e);
        return;
      }
      var h;
      if (d == null) h = g.concat(c);
      else {
        h = [];
        var i = !1;
        for (var j = 0; j < g.length; j++) {
          var k = g[j];
          h.push(k);
          if (k == null) continue;
          k = k.getValue(f);
          d === k && (h.push(c), (i = !0));
        }
        i || h.push(c);
      }
      a.setLinkedRecords(h, e);
    }
    function l(a, c, d, e) {
      var f = b("relay-runtime/handlers/connection/ConnectionInterface").get();
      f = f.NODE;
      c = h(c.getDataID(), d.getDataID());
      var g = a.get(c);
      g || (g = a.create(c, e));
      g.setLinkedRecord(d, f);
      g.getValue("cursor") == null && g.setValue(null, "cursor");
      return g;
    }
    function m(a, c, d) {
      var e = b("relay-runtime/handlers/connection/ConnectionInterface").get(),
        f = e.CURSOR;
      e = e.EDGES;
      var g = a.getLinkedRecords(e);
      if (!g) {
        a.setLinkedRecords([c], e);
        return;
      }
      var h;
      if (d == null) h = [c].concat(g);
      else {
        h = [];
        var i = !1;
        for (var j = 0; j < g.length; j++) {
          var k = g[j];
          if (k != null) {
            var l = k.getValue(f);
            d === l && (h.push(c), (i = !0));
          }
          h.push(k);
        }
        i || h.unshift(c);
      }
      a.setLinkedRecords(h, e);
    }
    function n(a, c) {
      var d = b("relay-runtime/handlers/connection/ConnectionInterface").get(),
        e = d.EDGES;
      d = d.NODE;
      var f = a.getLinkedRecords(e);
      if (!f) return;
      var g;
      for (var h = 0; h < f.length; h++) {
        var i = f[h],
          j = i && i.getLinkedRecord(d);
        j != null && j.getDataID() === c
          ? g === void 0 && (g = f.slice(0, h))
          : g !== void 0 && g.push(i);
      }
      g !== void 0 && a.setLinkedRecords(g, e);
    }
    function o(a, c, d) {
      if (d == null) return d;
      var e = b("relay-runtime/handlers/connection/ConnectionInterface").get();
      e = e.EDGES;
      var f = c.getValue(k);
      typeof f === "number" || g(0, 20561, k, f);
      e = h(c.getDataID(), e, f);
      a = a.create(e, d.getType());
      a.copyFieldsFrom(d);
      a.getValue("cursor") == null && a.setValue(null, "cursor");
      c.setValue(f + 1, k);
      return a;
    }
    function p(a, c, d) {
      var e = b("relay-runtime/handlers/connection/ConnectionInterface").get();
      e = e.NODE;
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (!g) continue;
        var h = g.getLinkedRecord(e);
        h = h && h.getDataID();
        if (h) {
          if (d.has(h)) continue;
          d.add(h);
        }
        c.push(g);
      }
    }
    e.exports = {
      buildConnectionEdge: o,
      createEdge: l,
      deleteNode: n,
      getConnection: c,
      getConnectionID: d,
      insertEdgeAfter: f,
      insertEdgeBefore: m,
      update: a,
    };
  },
  null
);
__d(
  "relay-runtime/handlers/connection/MutationHandlers",
  [
    "invariant",
    "relay-runtime/handlers/connection/ConnectionHandler",
    "relay-runtime/handlers/connection/ConnectionInterface",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d = {
      update: function (a, b) {
        var c = a.get(b.dataID);
        if (c != null) {
          c = c.getValue(b.fieldKey);
          typeof c === "string"
            ? a["delete"](c)
            : Array.isArray(c) &&
              c.forEach(function (b) {
                typeof b === "string" && a["delete"](b);
              });
        }
      },
    };
    f = {
      update: function (a, c) {
        var d = a.get(c.dataID);
        if (d == null) return;
        var e = c.handleArgs.connections;
        e != null || g(0, 23070);
        d = d.getValue(c.fieldKey);
        c = Array.isArray(d) ? d : [d];
        c.forEach(function (c) {
          if (typeof c === "string")
            for (
              var d = e,
                f = Array.isArray(d),
                g = 0,
                d = f
                  ? d
                  : d[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var h;
              if (f) {
                if (g >= d.length) break;
                h = d[g++];
              } else {
                g = d.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              var i = a.get(h);
              if (i == null) {
                b("warning")(
                  !1,
                  "[Relay][Mutation] The connection with id '" +
                    h +
                    "' doesn't exist."
                );
                continue;
              }
              b(
                "relay-runtime/handlers/connection/ConnectionHandler"
              ).deleteNode(i, c);
            }
        });
      },
    };
    var i = {
      update: a(
        (h = b("relay-runtime/handlers/connection/ConnectionHandler"))
          .insertEdgeAfter
      ),
    };
    a = { update: a(h.insertEdgeBefore) };
    var j = { update: c(h.insertEdgeAfter) };
    c = { update: c(h.insertEdgeBefore) };
    function a(a) {
      return function (c, d) {
        var e = c.get(d.dataID);
        if (e == null) return;
        var f = d.handleArgs.connections;
        f != null || g(0, 23070);
        var h, i;
        try {
          h = e.getLinkedRecord(d.fieldKey, d.args);
        } catch (a) {}
        if (!h)
          try {
            i = e.getLinkedRecords(d.fieldKey, d.args);
          } catch (a) {}
        if (h == null && i == null) {
          b("warning")(
            !1,
            "MutationHandlers: Expected the server edge to be non-null."
          );
          return;
        }
        e = b("relay-runtime/handlers/connection/ConnectionInterface").get();
        var j = e.NODE,
          k = e.EDGES;
        e = (d = i) != null ? d : [h];
        h = function () {
          if (m) {
            if (n >= l.length) return "break";
            d = l[n++];
          } else {
            n = l.next();
            if (n.done) return "break";
            d = n.value;
          }
          var e = d;
          if (e == null) return "continue";
          var h = e.getLinkedRecord("node");
          if (!h) return "continue";
          var i = h.getDataID();
          for (
            var h = f,
              o = Array.isArray(h),
              p = 0,
              h = o
                ? h
                : h[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var q;
            if (o) {
              if (p >= h.length) break;
              q = h[p++];
            } else {
              p = h.next();
              if (p.done) break;
              q = p.value;
            }
            q = q;
            var r = c.get(q);
            if (r == null) {
              b("warning")(
                !1,
                "[Relay][Mutation] The connection with id '" +
                  q +
                  "' doesn't exist."
              );
              continue;
            }
            q =
              (q = r.getLinkedRecords(k)) == null
                ? void 0
                : q.some(function (a) {
                    return (
                      (a == null
                        ? void 0
                        : (a = a.getLinkedRecord(j)) == null
                        ? void 0
                        : a.getDataID()) === i
                    );
                  });
            if (q) continue;
            q = b(
              "relay-runtime/handlers/connection/ConnectionHandler"
            ).buildConnectionEdge(c, r, e);
            q != null || g(0, 23071);
            a(r, q);
          }
        };
        _loop: for (
          var l = e,
            m = Array.isArray(l),
            n = 0,
            l = m
              ? l
              : l[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          e = h();
          switch (e) {
            case "break":
              break _loop;
            case "continue":
              continue;
          }
        }
      };
    }
    function c(a) {
      return function (c, d) {
        var e = c.get(d.dataID);
        if (e == null) return;
        var f = d.handleArgs,
          h = f.connections,
          i = f.edgeTypeName;
        h != null || g(0, 23070);
        i != null || g(0, 26584);
        var j;
        try {
          f = e.getLinkedRecord(d.fieldKey, d.args);
        } catch (a) {}
        if (!f)
          try {
            j = e.getLinkedRecords(d.fieldKey, d.args);
          } catch (a) {}
        if (f == null && j == null) {
          b("warning")(!1, "MutationHandlers: Expected target node to exist.");
          return;
        }
        e = b("relay-runtime/handlers/connection/ConnectionInterface").get();
        var k = e.NODE,
          l = e.EDGES;
        e = (d = j) != null ? d : [f];
        f = function () {
          if (n) {
            if (o >= m.length) return "break";
            d = m[o++];
          } else {
            o = m.next();
            if (o.done) return "break";
            d = o.value;
          }
          var e = d;
          if (e == null) return "continue";
          var f = e.getDataID();
          for (
            var j = h,
              p = Array.isArray(j),
              q = 0,
              j = p
                ? j
                : j[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var r;
            if (p) {
              if (q >= j.length) break;
              r = j[q++];
            } else {
              q = j.next();
              if (q.done) break;
              r = q.value;
            }
            r = r;
            var s = c.get(r);
            if (s == null) {
              b("warning")(
                !1,
                "[Relay][Mutation] The connection with id '" +
                  r +
                  "' doesn't exist."
              );
              continue;
            }
            r =
              (r = s.getLinkedRecords(l)) == null
                ? void 0
                : r.some(function (a) {
                    return (
                      (a == null
                        ? void 0
                        : (a = a.getLinkedRecord(k)) == null
                        ? void 0
                        : a.getDataID()) === f
                    );
                  });
            if (r) continue;
            r = b(
              "relay-runtime/handlers/connection/ConnectionHandler"
            ).createEdge(c, s, e, i);
            r != null || g(0, 23071);
            a(s, r);
          }
        };
        _loop3: for (
          var m = e,
            n = Array.isArray(m),
            o = 0,
            m = n
              ? m
              : m[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          e = f();
          switch (e) {
            case "break":
              break _loop3;
            case "continue":
              continue;
          }
        }
      };
    }
    e.exports = {
      AppendEdgeHandler: i,
      DeleteRecordHandler: d,
      PrependEdgeHandler: a,
      AppendNodeHandler: j,
      PrependNodeHandler: c,
      DeleteEdgeHandler: f,
    };
  },
  null
);
__d(
  "relay-runtime/handlers/RelayDefaultHandlerProvider",
  [
    "invariant",
    "relay-runtime/handlers/connection/ConnectionHandler",
    "relay-runtime/handlers/connection/MutationHandlers",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      switch (a) {
        case "connection":
          return b("relay-runtime/handlers/connection/ConnectionHandler");
        case "deleteRecord":
          return b("relay-runtime/handlers/connection/MutationHandlers")
            .DeleteRecordHandler;
        case "deleteEdge":
          return b("relay-runtime/handlers/connection/MutationHandlers")
            .DeleteEdgeHandler;
        case "appendEdge":
          return b("relay-runtime/handlers/connection/MutationHandlers")
            .AppendEdgeHandler;
        case "prependEdge":
          return b("relay-runtime/handlers/connection/MutationHandlers")
            .PrependEdgeHandler;
        case "appendNode":
          return b("relay-runtime/handlers/connection/MutationHandlers")
            .AppendNodeHandler;
        case "prependNode":
          return b("relay-runtime/handlers/connection/MutationHandlers")
            .PrependNodeHandler;
      }
      g(0, 4515, a);
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/RelayDeclarativeMutationConfig",
  ["relay-runtime/handlers/connection/ConnectionHandler", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    c = Object.freeze({
      RANGE_ADD: "RANGE_ADD",
      RANGE_DELETE: "RANGE_DELETE",
      NODE_DELETE: "NODE_DELETE",
    });
    d = Object.freeze({ APPEND: "append", PREPEND: "prepend" });
    function a(a, b, c, d) {
      var e = c ? [c] : [],
        f = d ? [d] : [];
      a.forEach(function (a) {
        switch (a.type) {
          case "NODE_DELETE":
            var c = g(a, b);
            c && (e.push(c), f.push(c));
            break;
          case "RANGE_ADD":
            c = h(a, b);
            c && (e.push(c), f.push(c));
            break;
          case "RANGE_DELETE":
            c = i(a, b);
            c && (e.push(c), f.push(c));
            break;
        }
      });
      return {
        optimisticUpdater: function (a, b) {
          e.forEach(function (c) {
            c(a, b);
          });
        },
        updater: function (a, b) {
          f.forEach(function (c) {
            c(a, b);
          });
        },
      };
    }
    function g(a, b) {
      var c = a.deletedIDFieldName,
        d = k(b);
      return !d
        ? null
        : function (a, b) {
            b = a.getRootField(d);
            if (!b) return;
            b = b.getValue(c);
            b = Array.isArray(b) ? b : [b];
            b.forEach(function (b) {
              b && typeof b === "string" && a["delete"](b);
            });
          };
    }
    function h(a, c) {
      var d = a.parentID,
        e = a.connectionInfo,
        f = a.edgeName;
      if (!d) {
        b("warning")(
          !1,
          "RelayDeclarativeMutationConfig: For mutation config RANGE_ADD to work you must include a parentID"
        );
        return null;
      }
      var g = k(c);
      return !e || !g
        ? null
        : function (a, c) {
            c = a.get(d);
            if (!c) return;
            var h = a.getRootField(g);
            if (!h) return;
            h = h.getLinkedRecord(f);
            for (
              var i = e,
                j = Array.isArray(i),
                k = 0,
                i = j
                  ? i
                  : i[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var l;
              if (j) {
                if (k >= i.length) break;
                l = i[k++];
              } else {
                k = i.next();
                if (k.done) break;
                l = k.value;
              }
              l = l;
              if (!h) continue;
              var m = b(
                "relay-runtime/handlers/connection/ConnectionHandler"
              ).getConnection(c, l.key, l.filters);
              if (!m) continue;
              var n = b(
                "relay-runtime/handlers/connection/ConnectionHandler"
              ).buildConnectionEdge(a, m, h);
              if (!n) continue;
              switch (l.rangeBehavior) {
                case "append":
                  b(
                    "relay-runtime/handlers/connection/ConnectionHandler"
                  ).insertEdgeAfter(m, n);
                  break;
                case "prepend":
                  b(
                    "relay-runtime/handlers/connection/ConnectionHandler"
                  ).insertEdgeBefore(m, n);
                  break;
                default:
                  b("warning")(
                    !1,
                    "RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` will not work as expected in RelayModern, supported range behaviors are 'append', 'prepend'.",
                    l.rangeBehavior
                  );
                  break;
              }
            }
          };
    }
    function i(a, c) {
      var d = a.parentID,
        e = a.connectionKeys,
        f = a.pathToConnection,
        g = a.deletedIDFieldName;
      if (!d) {
        b("warning")(
          !1,
          "RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE to work you must include a parentID"
        );
        return null;
      }
      var h = k(c);
      return !h
        ? null
        : function (a, b) {
            if (!b) return;
            var c = [];
            b = b[h];
            if (b && Array.isArray(g)) {
              for (
                var i = g,
                  k = Array.isArray(i),
                  l = 0,
                  i = k
                    ? i
                    : i[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var m;
                if (k) {
                  if (l >= i.length) break;
                  m = i[l++];
                } else {
                  l = i.next();
                  if (l.done) break;
                  m = l.value;
                }
                m = m;
                b && typeof b === "object" && (b = b[m]);
              }
              Array.isArray(b)
                ? b.forEach(function (a) {
                    a &&
                      a.id &&
                      typeof a === "object" &&
                      typeof a.id === "string" &&
                      c.push(a.id);
                  })
                : b && b.id && typeof b.id === "string" && c.push(b.id);
            } else
              b &&
                typeof g === "string" &&
                typeof b === "object" &&
                ((b = b[g]),
                typeof b === "string"
                  ? c.push(b)
                  : Array.isArray(b) &&
                    b.forEach(function (a) {
                      typeof a === "string" && c.push(a);
                    }));
            j(d, e, f, a, c);
          };
    }
    function j(a, c, d, e, f) {
      b("warning")(
        c != null,
        "RelayDeclarativeMutationConfig: RANGE_DELETE must provide a connectionKeys"
      );
      e = e.get(a);
      if (!e) return;
      if (d.length < 2) {
        b("warning")(
          !1,
          "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection must include at least parent and connection"
        );
        return;
      }
      var g = e;
      for (var e = 1; e < d.length - 1; e++) g && (g = g.getLinkedRecord(d[e]));
      if (!c || !g) {
        b("warning")(
          !1,
          "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection is incorrect. Unable to find connection with parentID: %s and path: %s",
          a,
          d.toString()
        );
        return;
      }
      a = function () {
        if (i) {
          if (j >= h.length) return "break";
          e = h[j++];
        } else {
          j = h.next();
          if (j.done) return "break";
          e = j.value;
        }
        var a = e,
          c = b(
            "relay-runtime/handlers/connection/ConnectionHandler"
          ).getConnection(g, a.key, a.filters);
        c &&
          f.forEach(function (a) {
            b("relay-runtime/handlers/connection/ConnectionHandler").deleteNode(
              c,
              a
            );
          });
      };
      for (
        var h = c,
          i = Array.isArray(h),
          j = 0,
          h = i
            ? h
            : h[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        d = a();
        if (d === "break") break;
      }
    }
    function k(a) {
      return a.fragment.selections &&
        a.fragment.selections.length > 0 &&
        a.fragment.selections[0].kind === "LinkedField"
        ? a.fragment.selections[0].name
        : null;
    }
    e.exports = { MutationTypes: c, RangeOperations: d, convert: a };
  },
  null
);
__d(
  "relay-runtime/query/GraphQLTag",
  ["invariant", "relay-runtime/util/RelayConcreteNode", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      g(0, 28205);
    }
    function h(a) {
      a = a;
      typeof a === "function"
        ? ((a = a()),
          b("warning")(
            !1,
            "RelayGraphQLTag: node `%s` unexpectedly wrapped in a function.",
            a.kind === "Fragment" ? a.name : a.operation.name
          ))
        : a["default"] && (a = a["default"]);
      return a;
    }
    function i(a) {
      a = h(a);
      return (
        typeof a === "object" &&
        a !== null &&
        a.kind === b("relay-runtime/util/RelayConcreteNode").FRAGMENT
      );
    }
    function j(a) {
      a = h(a);
      return (
        typeof a === "object" &&
        a !== null &&
        a.kind === b("relay-runtime/util/RelayConcreteNode").REQUEST
      );
    }
    function k(a) {
      a = h(a);
      return (
        typeof a === "object" &&
        a !== null &&
        a.kind ===
          b("relay-runtime/util/RelayConcreteNode").INLINE_DATA_FRAGMENT
      );
    }
    function l(a) {
      a = h(a);
      i(a) || g(0, 20130, JSON.stringify(a));
      return a;
    }
    function c(a) {
      var b;
      a = l(a);
      b = (b = a.metadata) == null ? void 0 : b.refetch;
      var c = b == null ? void 0 : b.connection;
      return b === null ||
        typeof b !== "object" ||
        c === null ||
        typeof c !== "object"
        ? null
        : a;
    }
    function d(a) {
      var b;
      a = l(a);
      b = (b = a.metadata) == null ? void 0 : b.refetch;
      return b === null || typeof b !== "object" ? null : a;
    }
    function f(a) {
      a = h(a);
      j(a) || g(0, 20129, JSON.stringify(a));
      return a;
    }
    function m(a) {
      a = h(a);
      k(a) || g(0, 20131, JSON.stringify(a));
      return a;
    }
    e.exports = {
      getFragment: l,
      getNode: h,
      getPaginationFragment: c,
      getRefetchableFragment: d,
      getRequest: f,
      getInlineDataFragment: m,
      graphql: a,
      isFragment: i,
      isRequest: j,
      isInlineDataFragment: k,
    };
  },
  null
);
__d(
  "relay-runtime/store/RelayConcreteVariables",
  ["invariant", "relay-runtime/store/RelayStoreUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/store/RelayStoreUtils").getArgumentValues;
    function a(a, b, c) {
      var d;
      a.argumentDefinitions.forEach(function (e) {
        if (Object.prototype.hasOwnProperty.call(c, e.name)) return;
        d = d || babelHelpers["extends"]({}, c);
        switch (e.kind) {
          case "LocalArgument":
            d[e.name] = e.defaultValue;
            break;
          case "RootArgument":
            if (!Object.prototype.hasOwnProperty.call(b, e.name)) {
              d[e.name] = void 0;
              break;
            }
            d[e.name] = b[e.name];
            break;
          default:
            e, g(0, 3322, e.kind, a.name);
        }
      });
      return d || c;
    }
    function c(a, b) {
      var c = {};
      a.argumentDefinitions.forEach(function (a) {
        var d = a.defaultValue;
        b[a.name] != null && (d = b[a.name]);
        c[a.name] = d;
      });
      return c;
    }
    function d(a, b, c) {
      if (b == null) return a;
      var d = babelHelpers["extends"]({}, a),
        e = c ? h(c, a) : {};
      b.forEach(function (a) {
        var b;
        b = (b = e[a.name]) != null ? b : a.defaultValue;
        d[a.name] = b;
      });
      return d;
    }
    e.exports = {
      getLocalVariables: d,
      getFragmentVariables: a,
      getOperationVariables: c,
    };
  },
  null
);
__d(
  "relay-runtime/store/RelayModernSelector",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayStoreUtils",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = b("relay-runtime/store/RelayConcreteVariables").getFragmentVariables,
      k = (i = b("relay-runtime/store/RelayStoreUtils")).FRAGMENT_OWNER_KEY,
      l = i.FRAGMENTS_KEY,
      m = i.ID_KEY,
      n = i.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT;
    function o(a, b) {
      (typeof b === "object" && b !== null && !Array.isArray(b)) ||
        g(0, 4618, a.name, JSON.stringify(b));
      var c = b[m],
        d = b[l],
        e = b[k];
      b = b[n] === !0;
      if (
        typeof c === "string" &&
        typeof d === "object" &&
        d !== null &&
        typeof d[a.name] === "object" &&
        d[a.name] !== null &&
        typeof e === "object" &&
        e !== null
      ) {
        e = e;
        d = d[a.name];
        d = j(a, e.variables, d);
        return x(a, c, d, e, b);
      }
      return null;
    }
    function p(a, b) {
      var c = null;
      b.forEach(function (b, d) {
        d = b != null ? o(a, b) : null;
        d != null && ((c = c || []), c.push(d));
      });
      if (c == null) return null;
      else return { kind: "PluralReaderSelector", selectors: c };
    }
    function q(a, b) {
      if (b == null) return b;
      else if (a.metadata && a.metadata.plural === !0) {
        Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
        return p(a, b);
      } else {
        Array.isArray(b) && g(0, 13879, a.name, JSON.stringify(b), a.name);
        return o(a, b);
      }
    }
    function a(a, b) {
      var c = {};
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = a[d],
            f = b[d];
          c[d] = q(e, f);
        }
      return c;
    }
    function c(a, b) {
      var c = {};
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = a[d],
            f = b[d];
          c[d] = r(e, f);
        }
      return c;
    }
    function r(a, b) {
      if (b == null) return b;
      else if (a.metadata && a.metadata.plural === !0) {
        Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
        return s(a, b);
      } else {
        Array.isArray(b) && g(0, 13881, a.name, JSON.stringify(b), a.name);
        return t(a, b);
      }
    }
    function s(a, b) {
      var c = null;
      b.forEach(function (b) {
        b = b != null ? t(a, b) : null;
        b != null && ((c = c || []), c.push(b));
      });
      return c;
    }
    function t(a, c) {
      (typeof c === "object" && c !== null && !Array.isArray(c)) ||
        g(0, 4618, a.name, JSON.stringify(c));
      var d = c[m];
      if (typeof d === "string") return d;
      b("warning")(
        !1,
        "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`, or `null` is passed as the fragment reference for `%s` if it's conditonally included and the condition isn't met.",
        a.name,
        JSON.stringify(c),
        a.name,
        a.name
      );
      return null;
    }
    function d(a, b) {
      var c = {};
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = a[d],
            f = b[d];
          e = u(e, f);
          Object.assign(c, e);
        }
      return c;
    }
    function u(a, b) {
      var c;
      if (b == null) return {};
      else if (((c = a.metadata) == null ? void 0 : c.plural) === !0) {
        Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
        return w(a, b);
      } else {
        Array.isArray(b) && g(0, 13881, a.name, JSON.stringify(b), a.name);
        return v(a, b) || {};
      }
    }
    function v(a, b) {
      a = o(a, b);
      return !a ? null : a.variables;
    }
    function w(a, b) {
      var c = {};
      b.forEach(function (b, d) {
        if (b != null) {
          d = v(a, b);
          d != null && Object.assign(c, d);
        }
      });
      return c;
    }
    function f(a, c) {
      return (
        a.owner === c.owner &&
        a.dataID === c.dataID &&
        a.node === c.node &&
        (h || (h = b("areEqual")))(a.variables, c.variables)
      );
    }
    function x(a, b, c, d, e) {
      e === void 0 && (e = !1);
      return {
        kind: "SingularReaderSelector",
        dataID: b,
        isWithinUnmatchedTypeRefinement: e,
        node: a,
        variables: c,
        owner: d,
      };
    }
    function y(a, b, c) {
      return { dataID: b, node: a, variables: c };
    }
    e.exports = {
      areEqualSelectors: f,
      createReaderSelector: x,
      createNormalizationSelector: y,
      getDataIDsFromFragment: r,
      getDataIDsFromObject: c,
      getSingularSelector: o,
      getPluralSelector: p,
      getSelector: q,
      getSelectorsFromObject: a,
      getVariablesFromSingularFragment: v,
      getVariablesFromPluralFragment: w,
      getVariablesFromFragment: u,
      getVariablesFromObject: d,
    };
  },
  null
);
__d(
  "relay-runtime/util/deepFreeze",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      Object.freeze(a);
      Object.getOwnPropertyNames(a).forEach(function (b) {
        b = a[b];
        b && typeof b === "object" && !Object.isFrozen(b) && g(b);
      });
      return a;
    }
    e.exports = g;
  },
  null
);
__d(
  "relay-runtime/util/getRequestIdentifier",
  ["invariant", "relay-runtime/util/stableCopy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, c) {
      var d = a.cacheID != null ? a.cacheID : a.id;
      d != null || g(0, 22755, a.name);
      return (
        d + JSON.stringify((h || (h = b("relay-runtime/util/stableCopy")))(c))
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/RelayModernOperationDescriptor",
  [
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/getRequestIdentifier",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("relay-runtime/store/RelayConcreteVariables").getOperationVariables,
      i = b(
        "relay-runtime/store/RelayModernSelector"
      ).createNormalizationSelector,
      j = b("relay-runtime/store/RelayModernSelector").createReaderSelector,
      k = b("relay-runtime/store/RelayStoreUtils").ROOT_ID;
    function a(a, b, c, d) {
      d === void 0 && (d = k);
      var e = a.operation;
      b = h(e, b);
      c = l(a, b, c);
      a = { fragment: j(a.fragment, d, b, c), request: c, root: i(e, d, b) };
      return a;
    }
    function l(a, c, d) {
      a = {
        identifier: b("relay-runtime/util/getRequestIdentifier")(a.params, c),
        node: a,
        variables: c,
        cacheConfig: d,
      };
      return a;
    }
    e.exports = { createOperationDescriptor: a, createRequestDescriptor: l };
  },
  null
);
__d(
  "relay-runtime/store/isRelayModernEnvironment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return Boolean(a && a["@@RelayModernEnvironment"]);
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/applyOptimisticMutation",
  [
    "invariant",
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/isRelayModernEnvironment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/query/GraphQLTag").getRequest,
      i = b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createOperationDescriptor;
    function a(a, c) {
      b("relay-runtime/store/isRelayModernEnvironment")(a) || g(0, 18234);
      var d = h(c.mutation);
      if (d.params.operationKind !== "mutation")
        throw new Error("commitMutation: Expected mutation operation");
      var e = c.optimisticUpdater,
        f = c.configs,
        j = c.optimisticResponse;
      c = c.variables;
      c = i(d, c);
      if (f) {
        f = b("relay-runtime/mutations/RelayDeclarativeMutationConfig").convert(
          f,
          d,
          e
        );
        e = f.optimisticUpdater;
      }
      return a.applyMutation({ operation: c, response: j, updater: e });
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/commitLocalUpdate",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a.commitUpdate(b);
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/validateMutation",
  ["relay-runtime/util/RelayConcreteNode", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.prototype.hasOwnProperty;
    d = (c = b("relay-runtime/util/RelayConcreteNode")).ACTOR_CHANGE;
    f = c.CONDITION;
    a = c.CLIENT_COMPONENT;
    b = c.CLIENT_EXTENSION;
    d = c.DEFER;
    f = c.FLIGHT_FIELD;
    a = c.FRAGMENT_SPREAD;
    b = c.INLINE_FRAGMENT;
    d = c.LINKED_FIELD;
    f = c.LINKED_HANDLE;
    a = c.MODULE_IMPORT;
    b = c.SCALAR_FIELD;
    d = c.SCALAR_HANDLE;
    f = c.STREAM;
    a = c.TYPE_DISCRIMINATOR;
    b = function () {};
    e.exports = b;
  },
  null
);
__d(
  "relay-runtime/mutations/commitMutation",
  [
    "invariant",
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/mutations/validateMutation",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/isRelayModernEnvironment",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/query/GraphQLTag").getRequest,
      i = b("relay-runtime/store/ClientID").generateUniqueClientID,
      j = b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createOperationDescriptor;
    function a(a, c) {
      b("relay-runtime/store/isRelayModernEnvironment")(a) || g(0, 18234);
      var d = h(c.mutation);
      if (d.params.operationKind !== "mutation")
        throw new Error("commitMutation: Expected mutation operation");
      if (d.kind !== "Request")
        throw new Error(
          "commitMutation: Expected mutation to be of type request"
        );
      var e = c.optimisticResponse,
        f = c.optimisticUpdater,
        k = c.updater,
        l = c.configs,
        m = c.cacheConfig,
        n = c.onError,
        o = c.onUnsubscribe,
        p = c.variables,
        q = c.uploadables,
        r = j(d, p, m, i());
      typeof e === "function" &&
        ((e = e()),
        b("warning")(
          !1,
          "commitMutation: Expected `optimisticResponse` to be an object, received a function."
        ));
      if (l) {
        p = b("relay-runtime/mutations/RelayDeclarativeMutationConfig").convert(
          l,
          d,
          f,
          k
        );
        f = p.optimisticUpdater;
        k = p.updater;
      }
      var s = [];
      m = a
        .executeMutation({
          operation: r,
          optimisticResponse: e,
          optimisticUpdater: f,
          updater: k,
          uploadables: q,
        })
        .subscribe({
          next: function (a) {
            Array.isArray(a)
              ? a.forEach(function (a) {
                  a.errors && s.push.apply(s, a.errors);
                })
              : a.errors && s.push.apply(s, a.errors);
          },
          complete: function () {
            var b = c.onCompleted;
            if (b) {
              var d = a.lookup(r.fragment);
              b(d.data, s.length !== 0 ? s : null);
            }
          },
          error: n,
          unsubscribe: o,
        });
      return { dispose: m.unsubscribe };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/isPromise",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return !!a && typeof a.then === "function";
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/network/RelayObservable",
  ["Promise", "relay-runtime/util/isPromise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = a,
      h = (function () {
        a.create = function (b) {
          return new a(b);
        };
        function a(a) {
          this.$1 = a;
        }
        a.onUnhandledError = function (a) {
          g = a;
        };
        a.from = function (a) {
          return i(a)
            ? j(a)
            : b("relay-runtime/util/isPromise")(a)
            ? k(a)
            : l(a);
        };
        var c = a.prototype;
        c["catch"] = function (b) {
          var c = this;
          return a.create(function (a) {
            var d;
            c.subscribe({
              start: function (a) {
                d = a;
              },
              next: a.next,
              complete: a.complete,
              error: function (c) {
                try {
                  b(c).subscribe({
                    start: function (a) {
                      d = a;
                    },
                    next: a.next,
                    complete: a.complete,
                    error: a.error,
                  });
                } catch (b) {
                  a.error(b, !0);
                }
              },
            });
            return function () {
              return d.unsubscribe();
            };
          });
        };
        c.concat = function (b) {
          var c = this;
          return a.create(function (a) {
            var d;
            c.subscribe({
              start: function (a) {
                d = a;
              },
              next: a.next,
              error: a.error,
              complete: function () {
                d = b.subscribe(a);
              },
            });
            return function () {
              d && d.unsubscribe();
            };
          });
        };
        c["do"] = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = function (c) {
              return function () {
                try {
                  b[c] && b[c].apply(b, arguments);
                } catch (a) {
                  g(a, !0);
                }
                a[c] && a[c].apply(a, arguments);
              };
            };
            return c.subscribe({
              start: d("start"),
              next: d("next"),
              error: d("error"),
              complete: d("complete"),
              unsubscribe: d("unsubscribe"),
            });
          });
        };
        c["finally"] = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = c.subscribe(a);
            return function () {
              d.unsubscribe(), b();
            };
          });
        };
        c.ifEmpty = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = !1,
              e = c.subscribe({
                next: function (b) {
                  (d = !0), a.next(b);
                },
                error: a.error,
                complete: function () {
                  d ? a.complete() : (e = b.subscribe(a));
                },
              });
            return function () {
              e.unsubscribe();
            };
          });
        };
        c.subscribe = function (a) {
          return m(this.$1, a);
        };
        c.map = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = c.subscribe({
              complete: a.complete,
              error: a.error,
              next: function (c) {
                try {
                  c = b(c);
                  a.next(c);
                } catch (b) {
                  a.error(b, !0);
                }
              },
            });
            return function () {
              d.unsubscribe();
            };
          });
        };
        c.mergeMap = function (b) {
          var c = this;
          return a.create(function (d) {
            var e = [];
            function f(a) {
              (this.$2 = a), e.push(a);
            }
            function g() {
              e.splice(e.indexOf(this.$2), 1), e.length === 0 && d.complete();
            }
            c.subscribe({
              start: f,
              next: function (c) {
                try {
                  d.closed ||
                    a.from(b(c)).subscribe({
                      start: f,
                      next: d.next,
                      error: d.error,
                      complete: g,
                    });
                } catch (a) {
                  d.error(a, !0);
                }
              },
              error: d.error,
              complete: g,
            });
            return function () {
              e.forEach(function (a) {
                return a.unsubscribe();
              }),
                (e.length = 0);
            };
          });
        };
        c.poll = function (b) {
          var c = this;
          return a.create(function (a) {
            var d,
              e,
              f = function f() {
                d = c.subscribe({
                  next: a.next,
                  error: a.error,
                  complete: function () {
                    e = setTimeout(f, b);
                  },
                });
              };
            f();
            return function () {
              clearTimeout(e), d.unsubscribe();
            };
          });
        };
        c.toPromise = function () {
          var a = this;
          return new (b("Promise"))(function (b, c) {
            var d = !1;
            a.subscribe({
              next: function (a) {
                d || ((d = !0), b(a));
              },
              error: c,
              complete: b,
            });
          });
        };
        return a;
      })();
    function i(a) {
      return (
        typeof a === "object" && a !== null && typeof a.subscribe === "function"
      );
    }
    function j(a) {
      return a instanceof h
        ? a
        : h.create(function (b) {
            return a.subscribe(b);
          });
    }
    function k(a) {
      return h.create(function (b) {
        a.then(function (a) {
          b.next(a), b.complete();
        }, b.error);
      });
    }
    function l(a) {
      return h.create(function (b) {
        b.next(a), b.complete();
      });
    }
    function m(a, b) {
      var c = !1,
        d,
        e = function (a) {
          return Object.defineProperty(a, "closed", {
            get: function () {
              return c;
            },
          });
        };
      function f() {
        if (d) {
          if (d.unsubscribe) d.unsubscribe();
          else
            try {
              d();
            } catch (a) {
              g(a, !0);
            }
          d = void 0;
        }
      }
      var h = e({
        unsubscribe: function () {
          if (!c) {
            c = !0;
            try {
              b.unsubscribe && b.unsubscribe(h);
            } catch (a) {
              g(a, !0);
            } finally {
              f();
            }
          }
        },
      });
      try {
        b.start && b.start(h);
      } catch (a) {
        g(a, !0);
      }
      if (c) return h;
      e = e({
        next: function (a) {
          if (!c && b.next)
            try {
              b.next(a);
            } catch (a) {
              g(a, !0);
            }
        },
        error: function (a, d) {
          if (c || !b.error) (c = !0), g(a, d || !1), f();
          else {
            c = !0;
            try {
              b.error(a);
            } catch (a) {
              g(a, !0);
            } finally {
              f();
            }
          }
        },
        complete: function () {
          if (!c) {
            c = !0;
            try {
              b.complete && b.complete();
            } catch (a) {
              g(a, !0);
            } finally {
              f();
            }
          }
        },
      });
      try {
        d = a(e);
      } catch (a) {
        e.error(a, !0);
      }
      c && f();
      return h;
    }
    function a(a, b) {}
    e.exports = h;
  },
  null
);
__d(
  "relay-runtime/network/ConvertToExecuteFunction",
  ["relay-runtime/network/RelayObservable"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (c, d, e, f, g) {
        var h = a(c, d, e, f, g);
        return h instanceof Error
          ? b("relay-runtime/network/RelayObservable").create(function (a) {
              return a.error(h);
            })
          : b("relay-runtime/network/RelayObservable").from(h);
      };
    }
    e.exports = { convertFetch: a };
  },
  null
);
__d(
  "relay-runtime/network/RelayNetwork",
  ["invariant", "relay-runtime/network/ConvertToExecuteFunction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/network/ConvertToExecuteFunction").convertFetch;
    function a(a, b) {
      var c = h(a);
      function d(a, d, e, f, h) {
        if (a.operationKind === "subscription") {
          b || g(0, 5158);
          f && g(0, 5159);
          return b(a, d, e);
        }
        var i = e.poll;
        if (i != null) {
          f && g(0, 5160);
          return c(a, d, { force: !0 }).poll(i);
        }
        return c(a, d, e, f, h);
      }
      return { execute: d };
    }
    e.exports = { create: a };
  },
  null
);
__d(
  "relay-runtime/network/RelayQueryResponseCache",
  ["invariant", "relay-runtime/util/stableCopy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = (function () {
      function a(a) {
        var b = a.size;
        a = a.ttl;
        b > 0 || g(0, 1167, b);
        a > 0 || g(0, 1168, a);
        this.$1 = new Map();
        this.$2 = b;
        this.$3 = a;
      }
      var b = a.prototype;
      b.clear = function () {
        this.$1.clear();
      };
      b.get = function (a, b) {
        var c = this;
        a = i(a, b);
        this.$1.forEach(function (a, b) {
          j(a.fetchTime, c.$3) || c.$1["delete"](b);
        });
        var d = this.$1.get(a);
        if (d == null) return null;
        return Array.isArray(d.payload)
          ? d.payload.map(function (a) {
              return babelHelpers["extends"]({}, a, {
                extensions: babelHelpers["extends"]({}, a.extensions, {
                  cacheTimestamp: d.fetchTime,
                }),
              });
            })
          : babelHelpers["extends"]({}, d.payload, {
              extensions: babelHelpers["extends"]({}, d.payload.extensions, {
                cacheTimestamp: d.fetchTime,
              }),
            });
      };
      b.set = function (a, b, c) {
        var d = Date.now();
        a = i(a, b);
        this.$1["delete"](a);
        this.$1.set(a, { fetchTime: d, payload: c });
        if (this.$1.size > this.$2) {
          b = this.$1.keys().next();
          b.done || this.$1["delete"](b.value);
        }
      };
      return a;
    })();
    function i(a, c) {
      return JSON.stringify(
        (h || (h = b("relay-runtime/util/stableCopy")))({
          queryID: a,
          variables: c,
        })
      );
    }
    function j(a, b) {
      return a + b >= Date.now();
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/query/PreloadableQueryRegistry",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = new Map()), (this.$2 = new Map());
      }
      var b = a.prototype;
      b.set = function (a, b) {
        this.$1.set(a, b);
        a = this.$2.get(a);
        a != null &&
          a.forEach(function (a) {
            try {
              a(b);
            } catch (a) {
              setTimeout(function () {
                throw a;
              }, 0);
            }
          });
      };
      b.get = function (a) {
        return this.$1.get(a);
      };
      b.onLoad = function (a, b) {
        var c,
          d = (c = this.$2.get(a)) != null ? c : new Set();
        d.add(b);
        c = function () {
          d["delete"](b);
        };
        this.$2.set(a, d);
        return { dispose: c };
      };
      b.clear = function () {
        this.$1.clear();
      };
      return a;
    })();
    b = new a();
    e.exports = b;
  },
  null
);
__d(
  "relay-runtime/util/RelayReplaySubject",
  ["invariant", "relay-runtime/network/RelayObservable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        var a = this;
        this.$1 = !1;
        this.$2 = [];
        this.$3 = new Set();
        this.$5 = [];
        this.$4 = b("relay-runtime/network/RelayObservable").create(function (
          b
        ) {
          a.$3.add(b);
          var c = a.$2;
          for (var d = 0; d < c.length; d++) {
            if (b.closed) break;
            var e = c[d];
            switch (e.kind) {
              case "complete":
                b.complete();
                break;
              case "error":
                b.error(e.error);
                break;
              case "next":
                b.next(e.data);
                break;
              default:
                e.kind, g(0, 14990, e.kind);
            }
          }
          return function () {
            a.$3["delete"](b);
          };
        });
      }
      var c = a.prototype;
      c.complete = function () {
        if (this.$1 === !0) return;
        this.$1 = !0;
        this.$2.push({ kind: "complete" });
        this.$3.forEach(function (a) {
          return a.complete();
        });
      };
      c.error = function (a) {
        if (this.$1 === !0) return;
        this.$1 = !0;
        this.$2.push({ kind: "error", error: a });
        this.$3.forEach(function (b) {
          return b.error(a);
        });
      };
      c.next = function (a) {
        if (this.$1 === !0) return;
        this.$2.push({ kind: "next", data: a });
        this.$3.forEach(function (b) {
          return b.next(a);
        });
      };
      c.subscribe = function (a) {
        a = this.$4.subscribe(a);
        this.$5.push(a);
        return a;
      };
      c.unsubscribe = function () {
        for (
          var a = this.$5,
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d.unsubscribe();
        }
        this.$5 = [];
      };
      c.getObserverCount = function () {
        return this.$3.size;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/query/fetchQueryInternal",
  [
    "invariant",
    "Promise",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/util/RelayReplaySubject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = typeof WeakMap === "function";
    var h = f ? new WeakMap() : new Map();
    function a(a, b) {
      return i(a, b.request.identifier, function () {
        return a.execute({ operation: b });
      });
    }
    function i(a, c, d) {
      return b("relay-runtime/network/RelayObservable").create(function (e) {
        var f = l(a),
          h = f.get(c);
        h ||
          d()
            ["finally"](function () {
              return f["delete"](c);
            })
            .subscribe({
              start: function (a) {
                (h = {
                  identifier: c,
                  subject: new (b("relay-runtime/util/RelayReplaySubject"))(),
                  subjectForInFlightStatus: new (b(
                    "relay-runtime/util/RelayReplaySubject"
                  ))(),
                  subscription: a,
                }),
                  f.set(c, h);
              },
              next: function (a) {
                var b = m(f, c);
                b.subject.next(a);
                b.subjectForInFlightStatus.next(a);
              },
              error: function (a) {
                var b = m(f, c);
                b.subject.error(a);
                b.subjectForInFlightStatus.error(a);
              },
              complete: function () {
                var a = m(f, c);
                a.subject.complete();
                a.subjectForInFlightStatus.complete();
              },
              unsubscribe: function (a) {
                a = m(f, c);
                a.subject.unsubscribe();
                a.subjectForInFlightStatus.unsubscribe();
              },
            });
        h != null || g(0, 15078);
        return j(f, h).subscribe(e);
      });
    }
    function j(a, c) {
      return b("relay-runtime/network/RelayObservable").create(function (b) {
        var d = c.subject.subscribe(b);
        return function () {
          d.unsubscribe();
          var b = a.get(c.identifier);
          if (b) {
            var e = b.subscription;
            e != null &&
              b.subject.getObserverCount() === 0 &&
              (e.unsubscribe(), a["delete"](c.identifier));
          }
        };
      });
    }
    function k(a, c, d) {
      return b("relay-runtime/network/RelayObservable").create(function (b) {
        var c = d.subjectForInFlightStatus.subscribe({
          error: b.error,
          next: function (c) {
            if (!a.isRequestActive(d.identifier)) {
              b.complete();
              return;
            }
            b.next();
          },
          complete: b.complete,
          unsubscribe: b.complete,
        });
        return function () {
          c.unsubscribe();
        };
      });
    }
    function c(a, c) {
      var d = l(a),
        e = d.get(c.identifier);
      if (!e) return null;
      return !a.isRequestActive(e.identifier)
        ? null
        : new (b("Promise"))(function (b, c) {
            var f = !1;
            k(a, d, e).subscribe({
              complete: b,
              error: c,
              next: function (a) {
                f && b(a);
              },
            });
            f = !0;
          });
    }
    function d(a, b) {
      var c = l(a);
      b = c.get(b.identifier);
      if (!b) return null;
      return !a.isRequestActive(b.identifier) ? null : k(a, c, b);
    }
    function l(a) {
      var b = h.get(a);
      if (b != null) return b;
      b = new Map();
      h.set(a, b);
      return b;
    }
    function m(a, b) {
      a = a.get(b);
      a != null || g(0, 15079);
      return a;
    }
    e.exports = {
      fetchQuery: a,
      fetchQueryDeduped: i,
      getPromiseForActiveRequest: c,
      getObservableForActiveRequest: d,
    };
  },
  null
);
__d(
  "relay-runtime/util/reportMissingRequiredFields",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      switch (b.action) {
        case "THROW":
          var c = b.field,
            d = c.path;
          c = c.owner;
          a.requiredFieldLogger({
            kind: "missing_field.throw",
            owner: c,
            fieldPath: d,
          });
          throw new Error(
            "Relay: Missing @required value at path '" + d + "' in '" + c + "'."
          );
        case "LOG":
          b.fields.forEach(function (c) {
            var b = c.path;
            c = c.owner;
            a.requiredFieldLogger({
              kind: "missing_field.log",
              owner: c,
              fieldPath: b,
            });
          });
          break;
        default:
          b.action;
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/query/fetchQuery",
  [
    "invariant",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/query/fetchQueryInternal",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/util/reportMissingRequiredFields",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createOperationDescriptor,
      i = b("relay-runtime/query/GraphQLTag").getRequest;
    function a(a, c, d, e) {
      c = i(c);
      c.params.operationKind === "query" || g(0, 13332);
      var f = babelHelpers["extends"](
        { force: !0 },
        e == null ? void 0 : e.networkCacheConfig
      );
      c = h(c, d, f);
      f = (d = e == null ? void 0 : e.fetchPolicy) != null ? d : "network-only";
      function k(c) {
        c.missingRequiredFields != null &&
          b("relay-runtime/util/reportMissingRequiredFields")(
            a,
            c.missingRequiredFields
          );
        return c.data;
      }
      switch (f) {
        case "network-only":
          return j(a, c).map(k);
        case "store-or-network":
          return a.check(c).status === "available"
            ? b("relay-runtime/network/RelayObservable")
                .from(a.lookup(c.fragment))
                .map(k)
            : j(a, c).map(k);
        default:
          f;
          throw new Error("fetchQuery: Invalid fetchPolicy " + f);
      }
    }
    function j(a, c) {
      return b("relay-runtime/query/fetchQueryInternal")
        .fetchQuery(a, c)
        .map(function () {
          return a.lookup(c.fragment);
        });
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/query/fetchQuery_DEPRECATED",
  [
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernOperationDescriptor",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createOperationDescriptor,
      h = b("relay-runtime/query/GraphQLTag").getRequest;
    function a(a, b, c, d) {
      b = h(b);
      if (b.params.operationKind !== "query")
        throw new Error("fetchQuery: Expected query operation");
      var e = g(b, c, d);
      return a
        .execute({ operation: e })
        .map(function () {
          return a.lookup(e.fragment).data;
        })
        .toPromise();
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/multi-actor-environment/ActorIdentifier",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE";
    function a(a) {
      a === h || g(0, 48286, a);
    }
    e.exports = {
      assertInternalActorIndentifier: a,
      getActorIdentifier: function (a) {
        return a;
      },
      getDefaultActorIdentifier: function () {
        throw new Error("Not Implemented");
      },
      INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE: h,
    };
  },
  null
);
__d(
  "relay-runtime/util/generateID",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1e5;
    function a() {
      return g++;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/network/wrapNetworkWithLogObserver",
  ["relay-runtime/util/generateID"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
      return {
        execute: function (d, e, f, g) {
          var h = b("relay-runtime/util/generateID")(),
            i = {
              start: function (b) {
                a.__log({
                  name: "network.start",
                  networkRequestId: h,
                  params: d,
                  variables: e,
                  cacheConfig: f,
                });
              },
              next: function (b) {
                a.__log({
                  name: "network.next",
                  networkRequestId: h,
                  response: b,
                });
              },
              error: function (b) {
                a.__log({
                  name: "network.error",
                  networkRequestId: h,
                  error: b,
                });
              },
              complete: function () {
                a.__log({ name: "network.complete", networkRequestId: h });
              },
              unsubscribe: function () {
                a.__log({ name: "network.unsubscribe", networkRequestId: h });
              },
            },
            j = function (b) {
              a.__log({ name: "network.info", networkRequestId: h, info: b });
            };
          return c.execute(d, e, f, g, j)["do"](i);
        },
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/RelayModernRecord",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/deepFreeze",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = b("relay-runtime/store/ClientID").isClientID,
      k = (j = b("relay-runtime/store/RelayStoreUtils")).ACTOR_IDENTIFIER_KEY,
      l = j.ID_KEY,
      m = j.REF_KEY,
      n = j.REFS_KEY,
      o = j.TYPENAME_KEY,
      p = j.INVALIDATED_AT_KEY;
    j = j.ROOT_ID;
    function a(a) {
      return babelHelpers["extends"]({}, a);
    }
    function c(a, b) {
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) &&
          c !== l &&
          c !== o &&
          (b[c] = a[c]);
    }
    function d(a, b) {
      var c = {};
      c[l] = a;
      c[o] = b;
      return c;
    }
    function f(a) {
      return a[l];
    }
    function q(a) {
      return a[o];
    }
    function r(a, b) {
      var c = a[b];
      c &&
        typeof c === "object" &&
        ((!Object.prototype.hasOwnProperty.call(c, m) &&
          !Object.prototype.hasOwnProperty.call(c, n)) ||
          g(
            0,
            696,
            a[l],
            b,
            Object.prototype.hasOwnProperty.call(c, m)
              ? "a linked record"
              : "plural linked records"
          ));
      return c;
    }
    function s(a, b) {
      var c = a[b];
      if (c == null) return c;
      (typeof c === "object" && c && typeof c[m] === "string") ||
        g(0, 697, a[l], b, JSON.stringify(c));
      return c[m];
    }
    function t(a, b) {
      var c = a[b];
      if (c == null) return c;
      (typeof c === "object" && Array.isArray(c[n])) ||
        g(0, 698, a[l], b, JSON.stringify(c));
      return c[n];
    }
    function u(a) {
      if (a == null) return null;
      a = a[p];
      return typeof a !== "number" ? null : a;
    }
    function v(a, c) {
      var d = null,
        e = Object.keys(c);
      for (var f = 0; f < e.length; f++) {
        var g = e[f];
        (d || !(h || (h = b("areEqual")))(a[g], c[g])) &&
          ((d = d !== null ? d : babelHelpers["extends"]({}, a)),
          (d[g] = c[g]));
      }
      return d !== null ? d : a;
    }
    function w(a, b) {
      return Object.assign({}, a, b);
    }
    function x(a) {
      (i || (i = b("relay-runtime/util/deepFreeze")))(a);
    }
    function y(a, b, c) {
      a[b] = c;
    }
    function z(a, b, c) {
      var d = {};
      d[m] = c;
      a[b] = d;
    }
    function A(a, b, c) {
      var d = {};
      d[n] = c;
      a[b] = d;
    }
    function B(a, b, c, d) {
      var e = {};
      e[m] = d;
      e[k] = c;
      a[b] = e;
    }
    function C(a, b) {
      var c = a[b];
      if (c == null) return c;
      (typeof c === "object" && typeof c[m] === "string" && c[k] != null) ||
        g(0, 45087, a[l], b, JSON.stringify(c));
      return [c[k], c[m]];
    }
    e.exports = {
      clone: a,
      copyFields: c,
      create: d,
      freeze: x,
      getDataID: f,
      getInvalidationEpoch: u,
      getLinkedRecordID: s,
      getLinkedRecordIDs: t,
      getType: q,
      getValue: r,
      merge: w,
      setValue: y,
      setLinkedRecordID: z,
      setLinkedRecordIDs: A,
      update: v,
      getActorLinkedRecordID: C,
      setActorLinkedRecordID: B,
    };
  },
  null
);
__d(
  "relay-runtime/store/RelayRecordState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      EXISTENT: "EXISTENT",
      NONEXISTENT: "NONEXISTENT",
      UNKNOWN: "UNKNOWN",
    };
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/RelayRecordSource",
  ["relay-runtime/store/RelayRecordState"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/store/RelayRecordState").EXISTENT,
      h = b("relay-runtime/store/RelayRecordState").NONEXISTENT,
      i = b("relay-runtime/store/RelayRecordState").UNKNOWN;
    a = (function () {
      function a(a) {
        var b = this;
        this.$1 = new Map();
        a != null &&
          Object.keys(a).forEach(function (c) {
            b.$1.set(c, a[c]);
          });
      }
      a.create = function (b) {
        return new a(b);
      };
      var b = a.prototype;
      b.clear = function () {
        this.$1 = new Map();
      };
      b["delete"] = function (a) {
        this.$1.set(a, null);
      };
      b.get = function (a) {
        return this.$1.get(a);
      };
      b.getRecordIDs = function () {
        return Array.from(this.$1.keys());
      };
      b.getStatus = function (a) {
        return !this.$1.has(a) ? i : this.$1.get(a) == null ? h : g;
      };
      b.has = function (a) {
        return this.$1.has(a);
      };
      b.remove = function (a) {
        this.$1["delete"](a);
      };
      b.set = function (a, b) {
        this.$1.set(a, b);
      };
      b.size = function () {
        return this.$1.size;
      };
      b.toJSON = function () {
        var a = {};
        for (
          var b = this.$1,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          a[f] = e;
        }
        return a;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/multi-actor-environment/ActorUtils",
  ["relay-runtime/multi-actor-environment/ActorIdentifier"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "actor_key",
      h = b(
        "relay-runtime/multi-actor-environment/ActorIdentifier"
      ).getActorIdentifier;
    function a(a) {
      if (a != null && typeof a === "object" && typeof a[g] === "string")
        return h(a[g]);
    }
    e.exports = {
      ACTOR_IDENTIFIER_FIELD_NAME: g,
      getActorIdentifierFromPayload: a,
    };
  },
  null
);
__d(
  "relay-runtime/store/RelayStoreReactFlightUtils",
  ["invariant", "relay-runtime/store/RelayModernRecord"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || b("relay-runtime/store/RelayModernRecord")).getType;
    d = "executableDefinitions";
    var j = "tree",
      k = "ReactFlightComponent";
    function a(a) {
      return a == null ||
        typeof a !== "object" ||
        typeof a.status !== "string" ||
        (!Array.isArray(a.tree) && a.tree !== null) ||
        !Array.isArray(a.queries) ||
        !Array.isArray(a.fragments) ||
        !Array.isArray(a.errors)
        ? null
        : a;
    }
    function c(a) {
      i(a) === k || g(0, 23728, a);
      return a[j];
    }
    e.exports = {
      REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY: d,
      REACT_FLIGHT_TREE_STORAGE_KEY: j,
      REACT_FLIGHT_TYPE_NAME: k,
      getReactFlightClientResponse: c,
      refineToReactFlightPayloadData: a,
    };
  },
  null
);
__d(
  "relay-runtime/store/TypeID",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "client:__type:";
    c = "__TypeSchema";
    function a(a) {
      return g + a;
    }
    function b(a) {
      return a.indexOf(g) === 0;
    }
    e.exports = { generateTypeID: a, isTypeID: b, TYPE_SCHEMA_TYPE: c };
  },
  null
);
__d(
  "relay-runtime/util/RelayFeatureFlags",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      ENABLE_VARIABLE_CONNECTION_KEY: !1,
      ENABLE_PARTIAL_RENDERING_DEFAULT: !0,
      ENABLE_RELAY_CONTAINERS_SUSPENSE: !0,
      ENABLE_REACT_FLIGHT_COMPONENT_FIELD: !1,
      ENABLE_REQUIRED_DIRECTIVES: !1,
      ENABLE_RELAY_RESOLVERS: !1,
      ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: !1,
      ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: !1,
      ENABLE_LOAD_QUERY_REQUEST_DEDUPING: !0,
      ENABLE_DO_NOT_WRAP_LIVE_QUERY: !1,
      ENABLE_NOTIFY_SUBSCRIPTION: !1,
      BATCH_ASYNC_MODULE_UPDATES_FN: null,
      ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT: !1,
      ENABLE_QUERY_RENDERER_OFFSCREEN_SUPPORT: !1,
    };
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/RelayResponseNormalizer",
  [
    "invariant",
    "areEqual",
    "relay-runtime/multi-actor-environment/ActorUtils",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayStoreReactFlightUtils",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/TypeID",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayFeatureFlags",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    c = b(
      "relay-runtime/multi-actor-environment/ActorUtils"
    ).ACTOR_IDENTIFIER_FIELD_NAME;
    var j = b(
        "relay-runtime/multi-actor-environment/ActorUtils"
      ).getActorIdentifierFromPayload,
      k = (d = b("relay-runtime/util/RelayConcreteNode")).ACTOR_CHANGE,
      l = d.CONDITION,
      m = d.CLIENT_COMPONENT,
      n = d.CLIENT_EXTENSION,
      o = d.DEFER,
      p = d.FLIGHT_FIELD,
      q = d.FRAGMENT_SPREAD,
      r = d.INLINE_FRAGMENT,
      s = d.LINKED_FIELD,
      t = d.LINKED_HANDLE,
      u = d.MODULE_IMPORT,
      v = d.SCALAR_FIELD,
      w = d.SCALAR_HANDLE,
      x = d.STREAM,
      y = d.TYPE_DISCRIMINATOR,
      z = b("relay-runtime/store/ClientID").generateClientID,
      A = b("relay-runtime/store/ClientID").isClientID,
      B = b("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      C = b(
        "relay-runtime/store/RelayModernSelector"
      ).createNormalizationSelector,
      D = (f = b("relay-runtime/store/RelayStoreReactFlightUtils"))
        .refineToReactFlightPayloadData,
      E = f.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
      F = f.REACT_FLIGHT_TREE_STORAGE_KEY,
      G = f.REACT_FLIGHT_TYPE_NAME,
      H = (c = b("relay-runtime/store/RelayStoreUtils")).getArgumentValues,
      I = c.getHandleStorageKey,
      J = c.getModuleComponentKey,
      K = c.getModuleOperationKey,
      L = c.getStorageKey,
      M = c.TYPENAME_KEY,
      N = c.ROOT_ID,
      O = c.ROOT_TYPE,
      P = b("relay-runtime/store/TypeID").generateTypeID,
      Q = b("relay-runtime/store/TypeID").TYPE_SCHEMA_TYPE;
    function a(a, b, c, d) {
      var e = b.dataID,
        f = b.node;
      b = b.variables;
      a = new R(a, b, d);
      return a.normalizeResponse(f, e, c);
    }
    var R = (function () {
      function a(a, b, c) {
        (this.$1 = c.actorIdentifier),
          (this.$2 = c.getDataID),
          (this.$3 = []),
          (this.$4 = c.treatMissingFieldsAsNull),
          (this.$5 = []),
          (this.$6 = !1),
          (this.$7 = !1),
          (this.$8 = []),
          (this.$9 = c.path ? [].concat(c.path) : []),
          (this.$10 = a),
          (this.$11 = b),
          (this.$12 = c.reactFlightPayloadDeserializer),
          (this.$13 = c.reactFlightServerErrorHandler),
          (this.$14 = c.shouldProcessClientComponents);
      }
      var c = a.prototype;
      c.normalizeResponse = function (a, b, c) {
        var d = this.$10.get(b);
        d || g(0, 3565, b);
        this.$15(a, d, c);
        return {
          errors: null,
          fieldPayloads: this.$3,
          incrementalPlaceholders: this.$5,
          followupPayloads: this.$8,
          source: this.$10,
          isFinal: !1,
        };
      };
      c.$16 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$11, a) || g(0, 3566, a);
        return this.$11[a];
      };
      c.$17 = function (a) {
        var b = a[M];
        b != null || g(0, 3567, JSON.stringify(a, null, 2));
        return b;
      };
      c.$15 = function (a, c, d) {
        for (var e = 0; e < a.selections.length; e++) {
          var f = a.selections[e];
          switch (f.kind) {
            case v:
            case s:
              this.$18(a, f, c, d);
              break;
            case l:
              var i = Boolean(this.$16(f.condition));
              i === f.passingValue && this.$15(f, c, d);
              break;
            case q:
              i = this.$11;
              this.$11 = B(this.$11, f.fragment.argumentDefinitions, f.args);
              this.$15(f.fragment, c, d);
              this.$11 = i;
              break;
            case r:
              i = f.abstractKey;
              if (i == null) {
                var j = (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getType(c);
                j === f.type && this.$15(f, c, d);
              } else {
                j = Object.prototype.hasOwnProperty.call(d, i);
                var z = (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getType(c);
                z = P(z);
                var A = this.$10.get(z);
                A == null &&
                  ((A = (
                    h || (h = b("relay-runtime/store/RelayModernRecord"))
                  ).create(z, Q)),
                  this.$10.set(z, A));
                h.setValue(A, i, j);
                j && this.$15(f, c, d);
              }
              break;
            case y:
              z = f.abstractKey;
              A = Object.prototype.hasOwnProperty.call(d, z);
              i = (
                h || (h = b("relay-runtime/store/RelayModernRecord"))
              ).getType(c);
              j = P(i);
              i = this.$10.get(j);
              i == null &&
                ((i = (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).create(j, Q)),
                this.$10.set(j, i));
              h.setValue(i, z, A);
              break;
            case t:
            case w:
              j = f.args ? H(f.args, this.$11) : {};
              i = L(f, this.$11);
              z = I(f, this.$11);
              this.$3.push({
                args: j,
                dataID: (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getDataID(c),
                fieldKey: i,
                handle: f.handle,
                handleKey: z,
                handleArgs: f.handleArgs ? H(f.handleArgs, this.$11) : {},
              });
              break;
            case u:
              this.$19(a, f, c, d);
              break;
            case o:
              this.$20(f, c, d);
              break;
            case x:
              this.$21(f, c, d);
              break;
            case n:
              A = this.$6;
              this.$6 = !0;
              this.$15(f, c, d);
              this.$6 = A;
              break;
            case m:
              if (this.$14 === !1) break;
              this.$15(f.fragment, c, d);
              break;
            case p:
              if (
                b("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                this.$22(a, f, c, d);
              else throw new Error("Flight fields are not yet supported.");
              break;
            case k:
              this.$23(a, f, c, d);
              break;
            default:
              f, g(0, 3569, f.kind);
          }
        }
      };
      c.$20 = function (a, c, d) {
        var e = a["if"] === null || this.$16(a["if"]);
        e === !1
          ? this.$15(a, c, d)
          : this.$5.push({
              kind: "defer",
              data: d,
              label: a.label,
              path: [].concat(this.$9),
              selector: C(
                a,
                (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getDataID(c),
                this.$11
              ),
              typeName: h.getType(c),
              actorIdentifier: this.$1,
            });
      };
      c.$21 = function (a, c, d) {
        this.$15(a, c, d);
        d = a["if"] === null || this.$16(a["if"]);
        d === !0 &&
          this.$5.push({
            kind: "stream",
            label: a.label,
            path: [].concat(this.$9),
            parentID: (
              h || (h = b("relay-runtime/store/RelayModernRecord"))
            ).getDataID(c),
            node: a,
            variables: this.$11,
            actorIdentifier: this.$1,
          });
      };
      c.$19 = function (a, c, d, e) {
        (typeof e === "object" && e) || g(0, 13641);
        a = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(d);
        var f = J(c.documentName),
          i = e[f];
        h.setValue(d, f, (f = i) != null ? f : null);
        i = K(c.documentName);
        f = e[i];
        h.setValue(d, i, (i = f) != null ? i : null);
        f != null &&
          this.$8.push({
            kind: "ModuleImportPayload",
            args: c.args,
            data: e,
            dataID: (
              h || (h = b("relay-runtime/store/RelayModernRecord"))
            ).getDataID(d),
            operationReference: f,
            path: [].concat(this.$9),
            typeName: a,
            variables: this.$11,
            actorIdentifier: this.$1,
          });
      };
      c.$18 = function (a, c, d, e) {
        (typeof e === "object" && e) || g(0, 3570, c.name);
        a = c.alias || c.name;
        var f = L(c, this.$11);
        e = e[a];
        if (e == null) {
          if (e === void 0) {
            var i = this.$6 || this.$7;
            if (i) return;
            else if (!this.$4) return;
          }
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
            d,
            f,
            null
          );
          return;
        }
        c.kind === v
          ? (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
              d,
              f,
              e
            )
          : c.kind === s
          ? (this.$9.push(a),
            c.plural ? this.$25(c, d, f, e) : this.$26(c, d, f, e),
            this.$9.pop())
          : (c, g(0, 11863, c.kind));
      };
      c.$23 = function (a, c, d, e) {
        var f;
        a = c.linkedField;
        (typeof e === "object" && e) || g(0, 45628, a.name);
        c = a.alias || a.name;
        var i = L(a, this.$11);
        e = e[c];
        if (e == null) {
          if (e === void 0) {
            var k = this.$6 || this.$7;
            if (k) return;
            else if (!this.$4) return;
          }
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
            d,
            i,
            null
          );
          return;
        }
        k = j(e);
        if (k == null) {
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
            d,
            i,
            null
          );
          return;
        }
        f = (f = a.concreteType) != null ? f : this.$17(e);
        var l =
          this.$2(e, f) ||
          (
            h || (h = b("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordID(d, i) ||
          z(
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
              d
            ),
            i
          );
        typeof l === "string" || g(0, 3572, i);
        (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).setActorLinkedRecordID(d, i, k, l);
        this.$8.push({
          kind: "ActorPayload",
          data: e,
          dataID: l,
          path: [].concat(this.$9, [c]),
          typeName: f,
          variables: this.$11,
          node: a,
          actorIdentifier: k,
        });
      };
      c.$22 = function (a, c, d, e) {
        a = c.alias || c.name;
        var f = L(c, this.$11);
        e = e[a];
        if (e == null) {
          if (e === void 0)
            if (this.$7) return;
            else this.$4 || g(0, 45690, a, f);
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
            d,
            f,
            null
          );
          return;
        }
        var i = D(e),
          j = this.$12;
        i != null || g(0, 34129, e);
        typeof j === "function" || g(0, 23734, j);
        i.errors.length > 0 &&
          (typeof this.$13 === "function"
            ? this.$13(i.status, i.errors)
            : b("warning")(
                !1,
                "RelayResponseNormalizer: Received server errors for field `%s`.\n\n%s\n%s",
                a,
                i.errors[0].message,
                i.errors[0].stack
              ));
        e = z(
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(d),
          L(c, this.$11)
        );
        a = this.$10.get(e);
        a == null &&
          ((a = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(
            e,
            G
          )),
          this.$10.set(e, a));
        if (i.tree == null) {
          b("warning")(
            !1,
            "RelayResponseNormalizer: Expected `tree` not to be null. This typically indicates that a fatal server error prevented any Server Component rows from being written."
          );
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
            a,
            F,
            null
          );
          h.setValue(a, E, []);
          h.setLinkedRecordID(d, f, e);
          return;
        }
        c = j(i.tree);
        h.setValue(a, F, c);
        j = [];
        for (
          var c = i.queries,
            k = Array.isArray(c),
            l = 0,
            c = k
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var m;
          if (k) {
            if (l >= c.length) break;
            m = c[l++];
          } else {
            l = c.next();
            if (l.done) break;
            m = l.value;
          }
          m = m;
          m.response.data != null &&
            this.$8.push({
              kind: "ModuleImportPayload",
              args: null,
              data: m.response.data,
              dataID: N,
              operationReference: m.module,
              path: [],
              typeName: O,
              variables: m.variables,
              actorIdentifier: this.$1,
            });
          j.push({ module: m.module, variables: m.variables });
        }
        for (
          var m = i.fragments,
            l = Array.isArray(m),
            k = 0,
            m = l
              ? m
              : m[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (l) {
            if (k >= m.length) break;
            c = m[k++];
          } else {
            k = m.next();
            if (k.done) break;
            c = k.value;
          }
          i = c;
          i.response.data != null &&
            this.$8.push({
              kind: "ModuleImportPayload",
              args: null,
              data: i.response.data,
              dataID: i.__id,
              operationReference: i.module,
              path: [],
              typeName: i.__typename,
              variables: i.variables,
              actorIdentifier: this.$1,
            });
          j.push({ module: i.module, variables: i.variables });
        }
        h.setValue(a, E, j);
        h.setLinkedRecordID(d, f, e);
      };
      c.$26 = function (a, c, d, e) {
        var f;
        (typeof e === "object" && e) || g(0, 3571, d);
        f =
          this.$2(e, (f = a.concreteType) != null ? f : this.$17(e)) ||
          (
            h || (h = b("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordID(c, d) ||
          z(
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
              c
            ),
            d
          );
        typeof f === "string" || g(0, 3572, d);
        (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).setLinkedRecordID(c, d, f);
        c = this.$10.get(f);
        if (!c) {
          d = a.concreteType || this.$17(e);
          c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(
            f,
            d
          );
          this.$10.set(f, c);
        }
        this.$15(a, c, e);
      };
      c.$25 = function (a, c, d, e) {
        var f = this;
        Array.isArray(e) || g(0, 3573, d);
        var i = (
            h || (h = b("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordIDs(c, d),
          j = [];
        e.forEach(function (e, k) {
          var l;
          if (e == null) {
            j.push(e);
            return;
          }
          f.$9.push(String(k));
          typeof e === "object" || g(0, 3574, d);
          l =
            f.$2(e, (l = a.concreteType) != null ? l : f.$17(e)) ||
            (i && i[k]) ||
            z(
              (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
                c
              ),
              d,
              k
            );
          typeof l === "string" || g(0, 3575, d);
          j.push(l);
          k = f.$10.get(l);
          if (!k) {
            var m = a.concreteType || f.$17(e);
            k = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(
              l,
              m
            );
            f.$10.set(l, k);
          }
          f.$15(a, k, e);
          f.$9.pop();
        });
        h.setLinkedRecordIDs(c, d, j);
      };
      c.$28 = function (a, c, d) {
        c = (c = c.concreteType) != null ? c : this.$17(d);
        d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
          a
        );
        b("warning")(
          (A(d) && d !== N) ||
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(
              a
            ) === c,
          "RelayResponseNormalizer: Invalid record `%s`. Expected %s to be consistent, but the record was assigned conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.",
          d,
          M,
          h.getType(a),
          c
        );
      };
      c.$24 = function (a, b, c) {};
      c.$27 = function (a, b, c, d) {};
      return a;
    })();
    e.exports = { normalize: a };
  },
  null
);
__d(
  "relay-runtime/util/RelayError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b, c) {
      for (
        var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3;
        f < d;
        f++
      )
        e[f - 3] = arguments[f];
      var g = 0,
        h = c.replace(/%s/g, function () {
          return String(e[g++]);
        }),
        i = new Error(h),
        j = Object.assign(i, {
          name: b,
          messageFormat: c,
          messageParams: e,
          type: a,
          taalOpcodes: [2, 2],
        });
      if (j.stack === void 0)
        try {
          throw j;
        } catch (a) {}
      return j;
    }
    e.exports = {
      create: function (a, b) {
        for (
          var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
          e < c;
          e++
        )
          d[e - 2] = arguments[e];
        return g.apply(void 0, ["error", a, b].concat(d));
      },
      createWarning: function (a, b) {
        for (
          var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
          e < c;
          e++
        )
          d[e - 2] = arguments[e];
        return g.apply(void 0, ["warn", a, b].concat(d));
      },
    };
  },
  null
);
__d(
  "relay-runtime/util/getOperation",
  ["relay-runtime/util/RelayConcreteNode"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/util/RelayConcreteNode").REQUEST,
      h = b("relay-runtime/util/RelayConcreteNode").SPLIT_OPERATION;
    function a(a) {
      switch (a.kind) {
        case g:
          return a.operation;
        case h:
        default:
          return a;
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/withDuration",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      typeof window !== "undefined" &&
      typeof ((b = window) == null
        ? void 0
        : (c = b.performance) == null
        ? void 0
        : c.now) === "function";
    function h() {
      return g ? window.performance.now() : Date.now();
    }
    function a(a) {
      var b = h();
      a = a();
      return [h() - b, a];
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/OperationExecutor",
  [
    "invariant",
    "Promise",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/RelayResponseNormalizer",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayError",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/generateID",
    "relay-runtime/util/getOperation",
    "relay-runtime/util/stableCopy",
    "relay-runtime/util/withDuration",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = b("relay-runtime/store/ClientID").generateClientID,
      k = b("relay-runtime/store/ClientID").generateUniqueClientID,
      l = b("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      m = b(
        "relay-runtime/store/RelayModernSelector"
      ).createNormalizationSelector,
      n = b("relay-runtime/store/RelayModernSelector").createReaderSelector,
      o = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      p = b("relay-runtime/store/RelayStoreUtils").TYPENAME_KEY,
      q = b("relay-runtime/store/RelayStoreUtils").getStorageKey;
    function a(a) {
      return new r(a);
    }
    var r = (function () {
      function a(a) {
        var c = this,
          d = a.actorIdentifier,
          e = a.getDataID,
          f = a.getPublishQueue,
          h = a.getStore,
          i = a.isClientPayload,
          j = a.operation,
          k = a.operationExecutions,
          l = a.operationLoader,
          m = a.operationTracker,
          n = a.optimisticConfig,
          o = a.reactFlightPayloadDeserializer,
          p = a.reactFlightServerErrorHandler,
          q = a.scheduler,
          r = a.shouldProcessClientComponents,
          s = a.sink,
          t = a.source,
          u = a.treatMissingFieldsAsNull,
          v = a.updater;
        a = a.log;
        this.$42 = function (a) {
          var d = c.$17;
          typeof d === "function" || g(0, 45571);
          var e = b("relay-runtime/util/withDuration")(function () {
              return d(a);
            }),
            f = e[0];
          e = e[1];
          c.$6({
            name: "execute.flight.payload_deserialize",
            executeId: c.$7,
            operationName: c.$9.request.node.params.name,
            duration: f,
          });
          return e;
        };
        this.$1 = d;
        this.$2 = e;
        this.$3 = u;
        this.$4 = !1;
        this.$5 = new Map();
        this.$6 = a;
        this.$7 = b("relay-runtime/util/generateID")();
        this.$8 = 0;
        this.$9 = j;
        this.$10 = k;
        this.$11 = l;
        this.$12 = m;
        this.$13 = new Map();
        this.$14 = null;
        this.$15 = 0;
        this.$16 = f;
        this.$20 = q;
        this.$21 = s;
        this.$22 = new Map();
        this.$23 = "started";
        this.$24 = h;
        this.$25 = new Map();
        this.$26 = v;
        this.$30 = i === !0;
        this.$17 = o;
        this.$18 = p;
        this.$31 = this.$9.request.node.params.operationKind === "subscription";
        this.$19 = r;
        this.$29 = new Map();
        this.$32 = new Set();
        this.$28 = [];
        var w = this.$8++;
        t.subscribe({
          complete: function () {
            return c.$33(w);
          },
          error: function (a) {
            return c.$34(a);
          },
          next: function (a) {
            try {
              c.$35(w, a);
            } catch (a) {
              s.error(a);
            }
          },
          start: function (a) {
            c.$36(w, a);
            c.$6({
              name: "execute.start",
              executeId: c.$7,
              params: c.$9.request.node.params,
              variables: c.$9.request.variables,
              cacheConfig: (a = c.$9.request.cacheConfig) != null ? a : {},
            });
          },
        });
        n != null &&
          this.$37(
            n.response != null ? { data: n.response } : null,
            n.updater,
            !1
          );
      }
      var c = a.prototype;
      c.cancel = function () {
        var a = this;
        if (this.$23 === "completed") return;
        this.$23 = "completed";
        this.$10["delete"](this.$9.request.identifier);
        this.$25.size !== 0 &&
          (this.$25.forEach(function (a) {
            return a.unsubscribe();
          }),
          this.$25.clear());
        var b = this.$14;
        b !== null &&
          ((this.$14 = null),
          b.forEach(function (b) {
            return a.$38().revertUpdate(b);
          }),
          this.$39());
        this.$5.clear();
        this.$27 != null && (this.$27.dispose(), (this.$27 = null));
        this.$28 = [];
        this.$40();
        this.$41();
      };
      c.$43 = function () {
        var a;
        switch (this.$23) {
          case "started":
            a = "active";
            break;
          case "loading_incremental":
            a = "active";
            break;
          case "completed":
            a = "inactive";
            break;
          case "loading_final":
            a = this.$15 > 0 ? "active" : "inactive";
            break;
          default:
            this.$23, g(0, 42915);
        }
        this.$10.set(this.$9.request.identifier, a);
      };
      c.$44 = function (a) {
        var c = this,
          d = this.$20;
        if (d != null) {
          var e = this.$8++;
          b("relay-runtime/network/RelayObservable")
            .create(function (b) {
              var c = d.schedule(function () {
                try {
                  a(), b.complete();
                } catch (a) {
                  b.error(a);
                }
              });
              return function () {
                return d.cancel(c);
              };
            })
            .subscribe({
              complete: function () {
                return c.$33(e);
              },
              error: function (a) {
                return c.$34(a);
              },
              start: function (a) {
                return c.$36(e, a);
              },
            });
        } else a();
      };
      c.$33 = function (a) {
        this.$25["delete"](a),
          this.$25.size === 0 &&
            (this.cancel(),
            this.$21.complete(),
            this.$6({ name: "execute.complete", executeId: this.$7 }));
      };
      c.$34 = function (a) {
        this.cancel(),
          this.$21.error(a),
          this.$6({ name: "execute.error", executeId: this.$7, error: a });
      };
      c.$36 = function (a, b) {
        this.$25.set(a, b), this.$43();
      };
      c.$35 = function (a, c) {
        var d = this;
        this.$44(function () {
          var a = b("relay-runtime/util/withDuration")(function () {
            d.$45(c), d.$46();
          });
          a = a[0];
          d.$6({
            name: "execute.next",
            executeId: d.$7,
            response: c,
            duration: a,
          });
        });
      };
      c.$47 = function (a) {
        var c = this,
          d = [];
        a.forEach(function (a) {
          if (
            a.data === null &&
            a.extensions != null &&
            !Object.prototype.hasOwnProperty.call(a, "errors")
          )
            return;
          else if (a.data == null) {
            var e =
                Object.prototype.hasOwnProperty.call(a, "errors") &&
                a.errors != null
                  ? a.errors
                  : null,
              f = e
                ? e
                    .map(function (a) {
                      a = a.message;
                      return a;
                    })
                    .join("\n")
                : "(No errors)";
            f = b("relay-runtime/util/RelayError").create(
              "RelayNetwork",
              "No data returned for operation `" +
                c.$9.request.node.params.name +
                "`, got error(s):\n" +
                f +
                "\n\nSee the error `source` property for more information."
            );
            f.source = {
              errors: e,
              operation: c.$9.request.node,
              variables: c.$9.request.variables,
            };
            f.stack;
            throw f;
          } else {
            e = a;
            d.push(e);
          }
        });
        return d;
      };
      c.$48 = function (a) {
        var b;
        if (a.length > 1) {
          a.some(function (a) {
            return (
              ((a = a.extensions) == null ? void 0 : a.isOptimistic) === !0
            );
          }) && g(0, 49718);
          return !1;
        }
        a = a[0];
        b = ((b = a.extensions) == null ? void 0 : b.isOptimistic) === !0;
        b && this.$23 !== "started" && g(0, 42916);
        if (b) {
          this.$37(a, null, this.$3);
          this.$21.next(a);
          return !0;
        }
        return !1;
      };
      c.$45 = function (a) {
        if (this.$23 === "completed") return;
        this.$32.clear();
        var b = Array.isArray(a) ? a : [a],
          c = this.$47(b);
        if (c.length === 0) {
          b = b.some(function (a) {
            return ((a = a.extensions) == null ? void 0 : a.is_final) === !0;
          });
          b && ((this.$23 = "loading_final"), this.$43(), (this.$4 = !1));
          this.$21.next(a);
          return;
        }
        b = this.$48(c);
        if (b) return;
        b = s(c);
        var d = b[0];
        b = b[1];
        var e = d.length > 0;
        if (e) {
          if (this.$31) {
            var f = k();
            this.$9 = {
              request: this.$9.request,
              fragment: n(
                this.$9.fragment.node,
                f,
                this.$9.fragment.variables,
                this.$9.fragment.owner
              ),
              root: m(this.$9.root.node, f, this.$9.root.variables),
            };
          }
          f = this.$49(d);
          this.$50(f);
        }
        if (b.length > 0) {
          d = this.$51(b);
          this.$50(d);
        }
        this.$31 &&
          (c[0].extensions == null
            ? (c[0].extensions = {
                __relay_subscription_root_id: this.$9.fragment.dataID,
              })
            : (c[0].extensions.__relay_subscription_root_id =
                this.$9.fragment.dataID));
        f = this.$39(e ? this.$9 : void 0);
        e && this.$4 && this.$52();
        this.$53(f);
        this.$21.next(a);
      };
      c.$37 = function (a, c, d) {
        var e = this;
        this.$14 === null || g(0, 49719);
        if (a == null && c == null) return;
        var f = [];
        if (a) {
          a = t(a, this.$9.root, o, {
            actorIdentifier: this.$1,
            getDataID: this.$2,
            path: [],
            reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
            reactFlightServerErrorHandler: this.$18,
            shouldProcessClientComponents: this.$19,
            treatMissingFieldsAsNull: d,
          });
          v(a);
          f.push({ operation: this.$9, payload: a, updater: c });
          this.$54(a, f);
        } else
          c &&
            f.push({
              operation: this.$9,
              payload: {
                errors: null,
                fieldPayloads: null,
                incrementalPlaceholders: null,
                followupPayloads: null,
                source: b("relay-runtime/store/RelayRecordSource").create(),
                isFinal: !1,
              },
              updater: c,
            });
        this.$14 = f;
        f.forEach(function (a) {
          return e.$38().applyUpdate(a);
        });
        this.$39();
      };
      c.$54 = function (a, c) {
        if (a.followupPayloads && a.followupPayloads.length) {
          a = a.followupPayloads;
          for (
            var a = a,
              d = Array.isArray(a),
              e = 0,
              a = d
                ? a
                : a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= a.length) break;
              f = a[e++];
            } else {
              e = a.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            switch (f.kind) {
              case "ModuleImportPayload":
                var h = this.$55();
                h = h.get(f.operationReference);
                if (h == null) this.$56(f);
                else {
                  h = this.$57(h, f);
                  c.push.apply(c, h);
                }
                break;
              case "ActorPayload":
                b("warning")(
                  !1,
                  "OperationExecutor: Unexpected optimistic ActorPayload. These updates are not supported."
                );
                break;
              default:
                f, g(0, 49799, f.kind);
            }
          }
        }
      };
      c.$58 = function (a, b) {
        var c;
        b.kind === "SplitOperation" && a.kind === "ModuleImportPayload"
          ? (c = l(a.variables, b.argumentDefinitions, a.args))
          : (c = a.variables);
        b = m(b, a.dataID, c);
        return t({ data: a.data }, b, a.typeName, {
          actorIdentifier: this.$1,
          getDataID: this.$2,
          path: a.path,
          reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
          reactFlightServerErrorHandler: this.$18,
          treatMissingFieldsAsNull: this.$3,
          shouldProcessClientComponents: this.$19,
        });
      };
      c.$57 = function (a, c) {
        a = b("relay-runtime/util/getOperation")(a);
        var d = [];
        c = this.$58(c, a);
        v(c);
        d.push({ operation: this.$9, payload: c, updater: null });
        this.$54(c, d);
        return d;
      };
      c.$56 = function (a) {
        var c = this;
        this.$55()
          .load(a.operationReference)
          .then(function (d) {
            if (d == null || c.$23 !== "started") return;
            d = c.$57(d, a);
            d.forEach(function (a) {
              return c.$38().applyUpdate(a);
            });
            if (c.$14 == null)
              b("warning")(
                !1,
                "OperationExecutor: Unexpected ModuleImport optimistic update in operation %s." +
                  c.$9.request.node.params.name
              );
            else {
              var e;
              (e = c.$14).push.apply(e, d);
              c.$39();
            }
          });
      };
      c.$49 = function (a) {
        var b = this;
        this.$14 !== null &&
          (this.$14.forEach(function (a) {
            b.$38().revertUpdate(a);
          }),
          (this.$14 = null));
        this.$4 = !1;
        this.$5.clear();
        this.$22.clear();
        return a.map(function (a) {
          a = t(a, b.$9.root, o, {
            actorIdentifier: b.$1,
            getDataID: b.$2,
            path: [],
            reactFlightPayloadDeserializer: b.$17 != null ? b.$42 : null,
            reactFlightServerErrorHandler: b.$18,
            treatMissingFieldsAsNull: b.$3,
            shouldProcessClientComponents: b.$19,
          });
          b.$38().commitPayload(b.$9, a, b.$26);
          return a;
        });
      };
      c.$50 = function (a) {
        var c = this;
        if (this.$23 === "completed") return;
        a.forEach(function (a) {
          var d = a.incrementalPlaceholders,
            e = a.followupPayloads,
            f = a.isFinal;
          c.$23 = f ? "loading_final" : "loading_incremental";
          c.$43();
          f && (c.$4 = !1);
          e &&
            e.length !== 0 &&
            e.forEach(function (a) {
              var b,
                d = c.$1;
              c.$1 = (b = a.actorIdentifier) != null ? b : c.$1;
              c.$59(a);
              c.$1 = d;
            });
          if (d && d.length !== 0) {
            c.$4 = c.$23 !== "loading_final";
            d.forEach(function (b) {
              var d,
                e = c.$1;
              c.$1 = (d = b.actorIdentifier) != null ? d : c.$1;
              c.$60(a, b);
              c.$1 = e;
            });
            if (c.$30 || c.$23 === "loading_final") {
              b("warning")(
                c.$30,
                "RelayModernEnvironment: Operation `%s` contains @defer/@stream directives but was executed in non-streaming mode. See https://fburl.com/relay-incremental-delivery-non-streaming-warning.",
                c.$9.request.node.params.name
              );
              var g = [];
              d.forEach(function (a) {
                a.kind === "defer" &&
                  g.push(c.$61(a.label, a.path, a, { data: a.data }));
              });
              g.length > 0 && c.$50(g);
            }
          }
        });
      };
      c.$46 = function () {
        if (!this.$31) return;
        this.$15 === 0 && this.$4 === !1 && this.$40();
      };
      c.$59 = function (a) {
        var c = this;
        switch (a.kind) {
          case "ModuleImportPayload":
            var d = this.$55(),
              e = d.get(a.operationReference);
            if (e != null) this.$62(a, b("relay-runtime/util/getOperation")(e));
            else {
              var f = this.$8++;
              this.$15++;
              var h = function () {
                  c.$15--, c.$46();
                },
                i = b("relay-runtime/network/RelayObservable").from(
                  new (b("Promise"))(function (b, c) {
                    d.load(a.operationReference).then(b, c);
                  })
                );
              b("relay-runtime/network/RelayObservable")
                .create(function (d) {
                  var e,
                    f = i.subscribe({
                      next: function (f) {
                        if (f != null) {
                          var g = function () {
                              try {
                                var e = b("relay-runtime/util/getOperation")(f),
                                  g = b(
                                    "relay-runtime/util/RelayFeatureFlags"
                                  ).BATCH_ASYNC_MODULE_UPDATES_FN,
                                  h = g != null && c.$15 > 1,
                                  i = b("relay-runtime/util/withDuration")(
                                    function () {
                                      c.$63(a, e);
                                      if (h) c.$64(g, d.complete);
                                      else {
                                        var b = c.$39();
                                        c.$53(b);
                                      }
                                    }
                                  );
                                i = i[0];
                                c.$6({
                                  name: "execute.async.module",
                                  executeId: c.$7,
                                  operationName: e.name,
                                  duration: i,
                                });
                                h || d.complete();
                              } catch (a) {
                                d.error(a);
                              }
                            },
                            h = c.$20;
                          h == null ? g() : (e = h.schedule(g));
                        } else d.complete();
                      },
                      error: d.error,
                    });
                  return function () {
                    f.unsubscribe(),
                      c.$20 != null && e != null && c.$20.cancel(e);
                  };
                })
                .subscribe({
                  complete: function () {
                    c.$33(f), h();
                  },
                  error: function (a) {
                    c.$34(a), h();
                  },
                  start: function (a) {
                    return c.$36(f, a);
                  },
                });
            }
            break;
          case "ActorPayload":
            this.$62(a, a.node);
            break;
          default:
            a, g(0, 49721, a.kind);
        }
      };
      c.$62 = function (a, b) {
        this.$63(a, b), this.$46();
      };
      c.$63 = function (a, b) {
        a = this.$58(a, b);
        this.$38().commitPayload(this.$9, a);
        this.$50([a]);
      };
      c.$60 = function (a, c) {
        var d = c.label,
          e = c.path;
        e = e.map(String).join(".");
        var f = this.$5.get(d);
        f == null && ((f = new Map()), this.$5.set(d, f));
        d = f.get(e);
        d = d != null && d.kind === "response" ? d.responses : null;
        f.set(e, { kind: "placeholder", placeholder: c });
        var i;
        c.kind === "stream"
          ? (i = c.parentID)
          : c.kind === "defer"
          ? (i = c.selector.dataID)
          : (c, g(0, 49722, c.kind));
        f = a.source.get(i);
        c = ((e = a.fieldPayloads) != null ? e : []).filter(function (a) {
          var b = j(a.dataID, a.fieldKey);
          return a.dataID === i || b === i;
        });
        f != null || g(0, 49723, i);
        a = this.$22.get(i);
        if (a != null) {
          e = (h || (h = b("relay-runtime/store/RelayModernRecord"))).update(
            a.record,
            f
          );
          var k = new Map(),
            l = function (a) {
              var b = u(a);
              k.set(b, a);
            };
          a.fieldPayloads.forEach(l);
          c.forEach(l);
          a = Array.from(k.values());
        } else (e = f), (a = c);
        this.$22.set(i, { record: e, fieldPayloads: a });
        if (d != null) {
          l = this.$51(d);
          this.$50(l);
        }
      };
      c.$51 = function (a) {
        var b = this,
          c = [];
        a.forEach(function (a) {
          var d = a.label,
            e = a.path,
            f = a.response,
            h = b.$5.get(d);
          h == null && ((h = new Map()), b.$5.set(d, h));
          if (d.indexOf("$defer$") !== -1) {
            var i = e.map(String).join("."),
              j = h.get(i);
            if (j == null) {
              j = { kind: "response", responses: [a] };
              h.set(i, j);
              return;
            } else if (j.kind === "response") {
              j.responses.push(a);
              return;
            }
            j = j.placeholder;
            j.kind === "defer" || g(0, 49724, i, d, j.kind);
            c.push(b.$61(d, e, j, f));
          } else {
            i = e.slice(0, -2).map(String).join(".");
            j = h.get(i);
            if (j == null) {
              j = { kind: "response", responses: [a] };
              h.set(i, j);
              return;
            } else if (j.kind === "response") {
              j.responses.push(a);
              return;
            }
            h = j.placeholder;
            h.kind === "stream" || g(0, 49725, i, d, h.kind);
            c.push(b.$65(d, e, h, f));
          }
        });
        return c;
      };
      c.$61 = function (a, c, d, e) {
        var f;
        a = d.selector.dataID;
        c = this.$1;
        this.$1 = (f = d.actorIdentifier) != null ? f : this.$1;
        f = t(e, d.selector, d.typeName, {
          actorIdentifier: this.$1,
          getDataID: this.$2,
          path: d.path,
          reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
          reactFlightServerErrorHandler: this.$18,
          treatMissingFieldsAsNull: this.$3,
          shouldProcessClientComponents: this.$19,
        });
        this.$38().commitPayload(this.$9, f);
        d = this.$22.get(a);
        d != null || g(0, 49726, a);
        a = d.fieldPayloads;
        if (a.length !== 0) {
          a = {
            errors: null,
            fieldPayloads: a,
            incrementalPlaceholders: null,
            followupPayloads: null,
            source: b("relay-runtime/store/RelayRecordSource").create(),
            isFinal: ((d = e.extensions) == null ? void 0 : d.is_final) === !0,
          };
          this.$38().commitPayload(this.$9, a);
        }
        this.$1 = c;
        return f;
      };
      c.$65 = function (a, c, d, e) {
        var f = d.parentID;
        a = d.node;
        var h = d.variables,
          i = d.actorIdentifier,
          j = this.$1;
        this.$1 = (i = i) != null ? i : this.$1;
        i = a.selections[0];
        (i != null && i.kind === "LinkedField" && i.plural === !0) ||
          g(0, 49727);
        a = this.$66(e, f, i, h, c, d.path);
        e = a.fieldPayloads;
        var k = a.itemID,
          l = a.itemIndex,
          m = a.prevIDs;
        i = a.relayPayload;
        var n = a.storageKey;
        this.$38().commitPayload(this.$9, i, function (a) {
          var b = a.get(f);
          if (b == null) return;
          var c = b.getLinkedRecords(n);
          if (c == null) return;
          if (
            c.length !== m.length ||
            c.some(function (a, b) {
              return m[b] !== (a && a.getDataID());
            })
          )
            return;
          c = [].concat(c);
          c[l] = a.get(k);
          b.setLinkedRecords(c, n);
        });
        if (e.length !== 0) {
          h = {
            errors: null,
            fieldPayloads: e,
            incrementalPlaceholders: null,
            followupPayloads: null,
            source: b("relay-runtime/store/RelayRecordSource").create(),
            isFinal: !1,
          };
          this.$38().commitPayload(this.$9, h);
        }
        this.$1 = j;
        return i;
      };
      c.$66 = function (a, c, d, e, f, i) {
        var k,
          l = a.data;
        typeof l === "object" || g(0, 49728);
        k = (k = d.alias) != null ? k : d.name;
        var n = q(d, e),
          o = this.$22.get(c);
        o != null || g(0, 49729, c);
        var r = o.record;
        o = o.fieldPayloads;
        var s = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordIDs(r, n);
        s != null || g(0, 49730, c, d.name);
        f = f[f.length - 1];
        var u = parseInt(f, 10);
        (u === f && u >= 0) || g(0, 49731, f);
        f = (f = d.concreteType) != null ? f : l[p];
        typeof f === "string" || g(0, 49720, d.name);
        l = ((l = this.$2(l, f)) != null ? l : s && s[u]) || j(c, n, u);
        typeof l === "string" || g(0, 49716, n);
        d = m(d, l, e);
        e = h.clone(r);
        r = [].concat(s);
        r[u] = l;
        h.setLinkedRecordIDs(e, n, r);
        this.$22.set(c, { record: e, fieldPayloads: o });
        r = t(a, d, f, {
          actorIdentifier: this.$1,
          getDataID: this.$2,
          path: [].concat(i, [k, String(u)]),
          reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
          reactFlightServerErrorHandler: this.$18,
          treatMissingFieldsAsNull: this.$3,
          shouldProcessClientComponents: this.$19,
        });
        return {
          fieldPayloads: o,
          itemID: l,
          itemIndex: u,
          prevIDs: s,
          relayPayload: r,
          storageKey: n,
        };
      };
      c.$64 = function (a, b) {
        var c = this;
        this.$28.push(b);
        if (this.$27 != null) return;
        this.$27 = a(function () {
          c.$27 = null;
          var a = c.$39();
          c.$53(a);
          for (
            var a = c.$28,
              b = Array.isArray(a),
              d = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var e;
            if (b) {
              if (d >= a.length) break;
              e = a[d++];
            } else {
              d = a.next();
              if (d.done) break;
              e = d.value;
            }
            e = e;
            e();
          }
          c.$28 = [];
        });
      };
      c.$53 = function (a) {
        a != null &&
          a.length > 0 &&
          this.$12.update(this.$9.request, new Set(a));
      };
      c.$40 = function () {
        this.$12.complete(this.$9.request);
      };
      c.$38 = function () {
        this.$32.add(this.$1);
        return this.$16(this.$1);
      };
      c.$67 = function () {
        if (this.$32.size === 0) return new Set([this.$1]);
        else return this.$32;
      };
      c.$39 = function (a) {
        var b = new Set();
        for (
          var c = this.$67(),
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          f = this.$16(f).run(a);
          f.forEach(function (a) {
            return b.add(a);
          });
        }
        return Array.from(b);
      };
      c.$52 = function () {
        for (
          var a = this.$67(),
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          this.$29.has(d) || this.$29.set(d, this.$24(d).retain(this.$9));
        }
      };
      c.$41 = function () {
        for (
          var a = this.$29.values(),
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d.dispose();
        }
        this.$29.clear();
      };
      c.$55 = function () {
        var a = this.$11;
        a || g(0, 49717);
        return a;
      };
      return a;
    })();
    function s(a) {
      var b = [],
        c = [];
      a.forEach(function (a) {
        if (a.path != null || a.label != null) {
          var d = a.label,
            e = a.path;
          (d == null || e == null) && g(0, 42913);
          c.push({ label: d, path: e, response: a });
        } else b.push(a);
      });
      return [b, c];
    }
    function t(a, c, d, e) {
      var f = a.data,
        g = a.errors,
        i = b("relay-runtime/store/RelayRecordSource").create();
      d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(
        c.dataID,
        d
      );
      i.set(c.dataID, d);
      d = b("relay-runtime/store/RelayResponseNormalizer").normalize(
        i,
        c,
        f,
        e
      );
      return babelHelpers["extends"]({}, d, {
        errors: g,
        isFinal: ((i = a.extensions) == null ? void 0 : i.is_final) === !0,
      });
    }
    function u(a) {
      return (a = JSON.stringify(
        (i || (i = b("relay-runtime/util/stableCopy")))(a)
      )) != null
        ? a
        : "";
    }
    function v(a) {
      a = a.incrementalPlaceholders;
      a != null && a.length !== 0 && g(0, 42914);
    }
    e.exports = { execute: a };
  },
  null
);
__d(
  "relay-runtime/store/RelayOperationTracker",
  ["invariant", "Promise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = new Map());
      }
      var c = a.prototype;
      c.update = function (a, b) {
        if (b.size === 0) return;
        var c = a.identifier,
          d = new Set();
        for (
          var b = b,
            e = Array.isArray(b),
            f = 0,
            b = e
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= b.length) break;
            g = b[f++];
          } else {
            f = b.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          g = g.identifier;
          var h = this.$1.get(g);
          h != null
            ? h.has(c) || (h.set(c, a), d.add(g))
            : (this.$1.set(g, new Map([[c, a]])), d.add(g));
        }
        if (d.size === 0) return;
        h = this.$2.get(c) || new Set();
        for (
          var g = d,
            f = Array.isArray(g),
            e = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (f) {
            if (e >= g.length) break;
            b = g[e++];
          } else {
            e = g.next();
            if (e.done) break;
            b = e.value;
          }
          a = b;
          this.$4(a);
          h.add(a);
        }
        this.$2.set(c, h);
      };
      c.complete = function (a) {
        a = a.identifier;
        var b = this.$2.get(a);
        if (b == null) return;
        var c = new Set(),
          d = new Set();
        for (
          var b = b,
            e = Array.isArray(b),
            f = 0,
            b = e
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= b.length) break;
            g = b[f++];
          } else {
            f = b.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          var h = this.$1.get(g);
          if (!h) continue;
          h["delete"](a);
          h.size > 0 ? d.add(g) : c.add(g);
        }
        for (
          var h = c,
            g = Array.isArray(h),
            f = 0,
            h = g
              ? h
              : h[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (g) {
            if (f >= h.length) break;
            e = h[f++];
          } else {
            f = h.next();
            if (f.done) break;
            e = f.value;
          }
          b = e;
          this.$4(b);
          this.$1["delete"](b);
        }
        for (
          var c = d,
            e = Array.isArray(c),
            b = 0,
            c = e
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (e) {
            if (b >= c.length) break;
            f = c[b++];
          } else {
            b = c.next();
            if (b.done) break;
            f = b.value;
          }
          g = f;
          this.$4(g);
        }
        this.$2["delete"](a);
      };
      c.$4 = function (a) {
        var b = this.$3.get(a);
        b != null && b.resolve();
        this.$3["delete"](a);
      };
      c.getPendingOperationsAffectingOwner = function (a) {
        a = a.identifier;
        var c = this.$1.get(a);
        if (c == null || c.size === 0) return null;
        var d = this.$3.get(a);
        if (d != null)
          return { promise: d.promise, pendingOperations: d.pendingOperations };
        var e;
        d = new (b("Promise"))(function (a) {
          e = a;
        });
        e != null || g(0, 16524);
        c = Array.from(c.values());
        this.$3.set(a, { promise: d, resolve: e, pendingOperations: c });
        return { promise: d, pendingOperations: c };
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/RelayRecordSourceMutator",
  [
    "invariant",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("relay-runtime/store/RelayRecordState").EXISTENT;
    a = (function () {
      function a(a, b) {
        (this.__sources = [b, a]), (this.$1 = a), (this.$2 = b);
      }
      var c = a.prototype;
      c.unstable_getRawRecordWithChanges = function (a) {
        var c = this.$1.get(a);
        a = this.$2.get(a);
        if (a === void 0) {
          if (c == null) return c;
          var d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).clone(
            c
          );
          return d;
        } else if (a === null) return null;
        else if (c != null) {
          d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).update(
            c,
            a
          );
          return d;
        } else {
          c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).clone(a);
          return c;
        }
      };
      c.$3 = function (a) {
        var c = this.$2.get(a);
        if (!c) {
          var d = this.$1.get(a);
          d || g(0, 977, a);
          c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(
            a,
            h.getType(d)
          );
          this.$2.set(a, c);
        }
        return c;
      };
      c.copyFields = function (a, c) {
        var d = this.$2.get(a),
          e = this.$1.get(a);
        d || e || g(0, 978, a);
        a = this.$3(c);
        e &&
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).copyFields(
            e,
            a
          );
        d &&
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).copyFields(
            d,
            a
          );
      };
      c.copyFieldsFromRecord = function (a, c) {
        c = this.$3(c);
        (h || (h = b("relay-runtime/store/RelayModernRecord"))).copyFields(
          a,
          c
        );
      };
      c.create = function (a, c) {
        (this.$1.getStatus(a) !== i && this.$2.getStatus(a) !== i) ||
          g(0, 979, a);
        c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(
          a,
          c
        );
        this.$2.set(a, c);
      };
      c["delete"] = function (a) {
        this.$2["delete"](a);
      };
      c.getStatus = function (a) {
        return this.$2.has(a) ? this.$2.getStatus(a) : this.$1.getStatus(a);
      };
      c.getType = function (a) {
        for (var c = 0; c < this.__sources.length; c++) {
          var d = this.__sources[c].get(a);
          if (d)
            return (
              h || (h = b("relay-runtime/store/RelayModernRecord"))
            ).getType(d);
          else if (d === null) return null;
        }
      };
      c.getValue = function (a, c) {
        for (var d = 0; d < this.__sources.length; d++) {
          var e = this.__sources[d].get(a);
          if (e) {
            var f = (
              h || (h = b("relay-runtime/store/RelayModernRecord"))
            ).getValue(e, c);
            if (f !== void 0) return f;
          } else if (e === null) return null;
        }
      };
      c.setValue = function (a, c, d) {
        a = this.$3(a);
        (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
          a,
          c,
          d
        );
      };
      c.getLinkedRecordID = function (a, c) {
        for (var d = 0; d < this.__sources.length; d++) {
          var e = this.__sources[d].get(a);
          if (e) {
            var f = (
              h || (h = b("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordID(e, c);
            if (f !== void 0) return f;
          } else if (e === null) return null;
        }
      };
      c.setLinkedRecordID = function (a, c, d) {
        a = this.$3(a);
        (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).setLinkedRecordID(a, c, d);
      };
      c.getLinkedRecordIDs = function (a, c) {
        for (var d = 0; d < this.__sources.length; d++) {
          var e = this.__sources[d].get(a);
          if (e) {
            var f = (
              h || (h = b("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordIDs(e, c);
            if (f !== void 0) return f;
          } else if (e === null) return null;
        }
      };
      c.setLinkedRecordIDs = function (a, c, d) {
        a = this.$3(a);
        (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).setLinkedRecordIDs(a, c, d);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/RelayRecordProxy",
  [
    "invariant",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/store/ClientID").generateClientID,
      i = b("relay-runtime/store/RelayStoreUtils").getStableStorageKey;
    a = (function () {
      function a(a, b, c) {
        (this.$1 = c), (this.$2 = b), (this.$3 = a);
      }
      var b = a.prototype;
      b.copyFieldsFrom = function (a) {
        this.$2.copyFields(a.getDataID(), this.$1);
      };
      b.getDataID = function () {
        return this.$1;
      };
      b.getType = function () {
        var a = this.$2.getType(this.$1);
        a != null || g(0, 4314, this.$1);
        return a;
      };
      b.getValue = function (a, b) {
        a = i(a, b);
        return this.$2.getValue(this.$1, a);
      };
      b.setValue = function (a, b, c) {
        j(a) || g(0, 4315, JSON.stringify(a));
        b = i(b, c);
        this.$2.setValue(this.$1, b, a);
        return this;
      };
      b.getLinkedRecord = function (a, b) {
        a = i(a, b);
        b = this.$2.getLinkedRecordID(this.$1, a);
        return b != null ? this.$3.get(b) : b;
      };
      b.setLinkedRecord = function (b, c, d) {
        b instanceof a || g(0, 4316, b);
        c = i(c, d);
        d = b.getDataID();
        this.$2.setLinkedRecordID(this.$1, c, d);
        return this;
      };
      b.getOrCreateLinkedRecord = function (a, b, c) {
        var d = this.getLinkedRecord(a, c);
        if (!d) {
          var e,
            f = i(a, c);
          f = h(this.getDataID(), f);
          d = (e = this.$3.get(f)) != null ? e : this.$3.create(f, b);
          this.setLinkedRecord(d, a, c);
        }
        return d;
      };
      b.getLinkedRecords = function (a, b) {
        var c = this;
        a = i(a, b);
        b = this.$2.getLinkedRecordIDs(this.$1, a);
        return b == null
          ? b
          : b.map(function (a) {
              return a != null ? c.$3.get(a) : a;
            });
      };
      b.setLinkedRecords = function (a, b, c) {
        Array.isArray(a) || g(0, 4317, a);
        b = i(b, c);
        c = a.map(function (a) {
          return a && a.getDataID();
        });
        this.$2.setLinkedRecordIDs(this.$1, b, c);
        return this;
      };
      b.invalidateRecord = function () {
        this.$3.markIDForInvalidation(this.$1);
      };
      return a;
    })();
    function j(a) {
      return (
        a == null || typeof a !== "object" || (Array.isArray(a) && a.every(j))
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/RelayRecordSourceProxy",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordProxy",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("relay-runtime/store/RelayRecordState").EXISTENT,
      j = b("relay-runtime/store/RelayRecordState").NONEXISTENT,
      k = b("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      l = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE;
    a = (function () {
      function a(a, b, c) {
        (this.__mutator = a),
          (this.$1 = c || null),
          (this.$2 = {}),
          (this.$3 = b),
          (this.$4 = !1),
          (this.$5 = new Set());
      }
      var c = a.prototype;
      c.publishSource = function (a, c) {
        var d = this,
          e = a.getRecordIDs();
        e.forEach(function (c) {
          var e = a.getStatus(c);
          if (e === i) {
            var f = a.get(c);
            f &&
              (d.__mutator.getStatus(c) !== i &&
                d.create(
                  c,
                  (
                    h || (h = b("relay-runtime/store/RelayModernRecord"))
                  ).getType(f)
                ),
              d.__mutator.copyFieldsFromRecord(f, c));
          } else e === j && d["delete"](c);
        });
        c &&
          c.length &&
          c.forEach(function (a) {
            var b = d.$1 && d.$1(a.handle);
            b || g(0, 681, a.handle);
            b.update(d, a);
          });
      };
      c.create = function (a, b) {
        this.__mutator.create(a, b);
        delete this.$2[a];
        b = this.get(a);
        b || g(0, 2120);
        return b;
      };
      c["delete"] = function (a) {
        a !== k || g(0, 2121), delete this.$2[a], this.__mutator["delete"](a);
      };
      c.get = function (a) {
        if (!Object.prototype.hasOwnProperty.call(this.$2, a)) {
          var c = this.__mutator.getStatus(a);
          c === i
            ? (this.$2[a] = new (b("relay-runtime/mutations/RelayRecordProxy"))(
                this,
                this.__mutator,
                a
              ))
            : (this.$2[a] = c === j ? null : void 0);
        }
        return this.$2[a];
      };
      c.getRoot = function () {
        var a = this.get(k);
        a || (a = this.create(k, l));
        (a && a.getType() === l) ||
          g(
            0,
            21125,
            a == null
              ? "no root record found"
              : "found a root record of type `" + a.getType() + "`"
          );
        return a;
      };
      c.invalidateStore = function () {
        this.$4 = !0;
      };
      c.isStoreMarkedForInvalidation = function () {
        return this.$4;
      };
      c.markIDForInvalidation = function (a) {
        this.$5.add(a);
      };
      c.getIDsMarkedForInvalidation = function () {
        return this.$5;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
  ["invariant", "relay-runtime/store/RelayStoreUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/store/RelayStoreUtils").getStorageKey,
      i = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE;
    a = (function () {
      function a(a, b, c) {
        (this.__mutator = a), (this.__recordSource = b), (this.$1 = c);
      }
      var b = a.prototype;
      b.create = function (a, b) {
        return this.__recordSource.create(a, b);
      };
      b["delete"] = function (a) {
        this.__recordSource["delete"](a);
      };
      b.get = function (a) {
        return this.__recordSource.get(a);
      };
      b.getRoot = function () {
        return this.__recordSource.getRoot();
      };
      b.getOperationRoot = function () {
        var a = this.__recordSource.get(this.$1.dataID);
        a || (a = this.__recordSource.create(this.$1.dataID, i));
        return a;
      };
      b.$2 = function (a, b, c) {
        var d = a.node.selections.find(function (a) {
          return a.kind === "LinkedField" && a.name === b;
        });
        (d && d.kind === "LinkedField") || g(0, 1951, b, a.node.name);
        d.plural === c || g(0, 1952, b, c ? "plural" : "singular");
        return d;
      };
      b.getRootField = function (a) {
        a = this.$2(this.$1, a, !1);
        a = h(a, this.$1.variables);
        return this.getOperationRoot().getLinkedRecord(a);
      };
      b.getPluralRootField = function (a) {
        a = this.$2(this.$1, a, !0);
        a = h(a, this.$1.variables);
        return this.getOperationRoot().getLinkedRecords(a);
      };
      b.invalidateStore = function () {
        this.__recordSource.invalidateStore();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/recycleNodesInto",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = typeof WeakSet !== "undefined",
      h = typeof WeakMap !== "undefined";
    function i(a, b) {
      if (
        a === b ||
        typeof a !== "object" ||
        a instanceof Set ||
        a instanceof Map ||
        (g && a instanceof WeakSet) ||
        (h && a instanceof WeakMap) ||
        !a ||
        typeof b !== "object" ||
        b instanceof Set ||
        b instanceof Map ||
        (g && b instanceof WeakSet) ||
        (h && b instanceof WeakMap) ||
        !b
      )
        return b;
      var c = !1,
        d = Array.isArray(a) ? a : null,
        e = Array.isArray(b) ? b : null;
      if (d && e)
        c =
          e.reduce(function (a, b, c) {
            var f = d[c];
            f = i(f, b);
            f !== e[c] && (e[c] = f);
            return a && f === d[c];
          }, !0) && d.length === e.length;
      else if (!d && !e) {
        var f = a,
          j = b,
          k = Object.keys(f),
          l = Object.keys(j);
        c =
          l.reduce(function (a, b) {
            var c = f[b];
            c = i(c, j[b]);
            c !== j[b] && (j[b] = c);
            return a && c === f[b];
          }, !0) && k.length === l.length;
      }
      return c ? a : b;
    }
    e.exports = i;
  },
  null
);
__d(
  "relay-runtime/store/ResolverCache",
  [
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/recycleNodesInto",
    "warning",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("relay-runtime/store/ClientID").generateClientID,
      i = (a = b("relay-runtime/store/RelayStoreUtils"))
        .RELAY_RESOLVER_VALUE_KEY,
      j = a.RELAY_RESOLVER_INVALIDATION_KEY,
      k = a.RELAY_RESOLVER_INPUTS_KEY,
      l = a.RELAY_RESOLVER_READER_SELECTOR_KEY,
      m = a.getStorageKey,
      n = new Set();
    c = (function () {
      function a() {}
      var b = a.prototype;
      b.readFromCacheOrEvaluate = function (a, b, c, d, e) {
        return [d().resolverResult, void 0];
      };
      b.invalidateDataIDs = function (a) {};
      return a;
    })();
    function o(a, b, c) {
      var d = a.get(b);
      d || ((d = new Set()), a.set(b, d));
      d.add(c);
    }
    d = (function () {
      function a(a) {
        (this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = a);
      }
      var c = a.prototype;
      c.readFromCacheOrEvaluate = function (a, c, d, e, f) {
        var j = this.$3(),
          n = (g || (g = b("relay-runtime/store/RelayModernRecord"))).getDataID(
            a
          );
        c = m(c, d);
        d = g.getLinkedRecordID(a, c);
        var p = d == null ? null : j.get(d);
        if (p == null || this.$4(p, f)) {
          d = (f = d) != null ? f : h(n, c);
          p = (g || (g = b("relay-runtime/store/RelayModernRecord"))).create(
            d,
            "__RELAY_RESOLVER__"
          );
          f = e();
          g.setValue(p, i, f.resolverResult);
          g.setValue(p, k, f.fragmentValue);
          g.setValue(p, l, f.readerSelector);
          j.set(d, p);
          e = g.clone(a);
          g.setLinkedRecordID(e, c, d);
          j.set(g.getDataID(e), e);
          a = f.resolverID;
          o(this.$1, a, d);
          o(this.$2, n, a);
          for (
            var c = f.seenRecordIDs,
              j = Array.isArray(c),
              e = 0,
              c = j
                ? c
                : c[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (j) {
              if (e >= c.length) break;
              n = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              n = e.value;
            }
            f = n;
            o(this.$2, f, a);
          }
        }
        n = p[i];
        return [n, d];
      };
      c.invalidateDataIDs = function (a) {
        var b = this.$3(),
          c = new Set(),
          d = Array.from(a);
        while (d.length) {
          var e = d.pop();
          a.add(e);
          for (
            var e = (e = this.$2.get(e)) != null ? e : n,
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var h;
            if (f) {
              if (g >= e.length) break;
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            if (!c.has(h))
              for (
                var h = (h = this.$1.get(h)) != null ? h : n,
                  i = Array.isArray(h),
                  j = 0,
                  h = i
                    ? h
                    : h[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var k;
                if (i) {
                  if (j >= h.length) break;
                  k = h[j++];
                } else {
                  j = h.next();
                  if (j.done) break;
                  k = j.value;
                }
                k = k;
                this.$5(k, b, a);
                c.has(k) || d.push(k);
              }
          }
        }
      };
      c.$5 = function (a, c, d) {
        d = c.get(a);
        if (!d) {
          b("warning")(
            !1,
            "Expected a resolver record with ID %s, but it was missing.",
            a
          );
          return;
        }
        d = (g || (g = b("relay-runtime/store/RelayModernRecord"))).clone(d);
        g.setValue(d, j, !0);
        c.set(a, d);
      };
      c.$4 = function (a, c) {
        if (
          !(g || (g = b("relay-runtime/store/RelayModernRecord"))).getValue(
            a,
            j
          )
        )
          return !1;
        var d = (
            g || (g = b("relay-runtime/store/RelayModernRecord"))
          ).getValue(a, k),
          e = g.getValue(a, l);
        if (d == null || e == null) {
          b("warning")(
            !1,
            "Expected previous inputs and reader selector on resolver record with ID %s, but they were missing.",
            (g || (g = b("relay-runtime/store/RelayModernRecord"))).getDataID(a)
          );
          return !0;
        }
        a = c(e);
        c = b("relay-runtime/util/recycleNodesInto")(d, a);
        return c !== d ? !0 : !1;
      };
      return a;
    })();
    e.exports = { NoopResolverCache: c, RecordResolverCache: d };
  },
  null
);
__d(
  "relay-runtime/store/ResolverFragments",
  [
    "invariant",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernSelector",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/query/GraphQLTag").getFragment,
      i = b("relay-runtime/store/RelayModernSelector").getSelector,
      j = [];
    function a(a, b) {
      j.push(a);
      try {
        return b();
      } finally {
        j.pop();
      }
    }
    function c(a, b) {
      if (!j.length)
        throw new Error(
          "readFragment should be called only from within a Relay Resolver function."
        );
      var c = j[j.length - 1];
      a = h(a);
      a = i(a, b);
      a != null || g(0, void 0);
      a.kind === "SingularReaderSelector" || g(0, void 0);
      return c.getDataForResolverFragment(a, b);
    }
    e.exports = { readFragment: c, withResolverContext: a };
  },
  null
);
__d(
  "relay-runtime/store/RelayReader",
  [
    "invariant",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreReactFlightUtils",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/ResolverCache",
    "relay-runtime/store/ResolverFragments",
    "relay-runtime/store/TypeID",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayFeatureFlags",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (c = b("relay-runtime/util/RelayConcreteNode")).ACTOR_CHANGE,
      j = c.CLIENT_EXTENSION,
      k = c.CONDITION,
      l = c.DEFER,
      m = c.FLIGHT_FIELD,
      n = c.FRAGMENT_SPREAD,
      o = c.INLINE_DATA_FRAGMENT_SPREAD,
      p = c.INLINE_FRAGMENT,
      q = c.LINKED_FIELD,
      r = c.MODULE_IMPORT,
      s = c.REQUIRED_FIELD,
      t = c.RELAY_RESOLVER,
      u = c.SCALAR_FIELD,
      v = c.STREAM,
      w = b(
        "relay-runtime/store/RelayStoreReactFlightUtils"
      ).getReactFlightClientResponse,
      x = (d = b("relay-runtime/store/RelayStoreUtils")).FRAGMENTS_KEY,
      y = d.FRAGMENT_OWNER_KEY,
      z = d.FRAGMENT_PROP_NAME_KEY,
      A = d.ID_KEY,
      B = d.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT,
      C = d.MODULE_COMPONENT_KEY,
      D = d.ROOT_ID,
      E = d.getArgumentValues,
      F = d.getStorageKey,
      G = d.getModuleComponentKey,
      H = b("relay-runtime/store/ResolverCache").NoopResolverCache,
      I = b("relay-runtime/store/ResolverFragments").withResolverContext,
      J = b("relay-runtime/store/TypeID").generateTypeID;
    function a(a, b, c) {
      b = new K(a, b, (a = c) != null ? a : new H());
      return b.read();
    }
    var K = (function () {
      function a(a, b, c) {
        (this.$1 = !1),
          (this.$2 = !1),
          (this.$3 = null),
          (this.$4 = b.owner),
          (this.$5 = a),
          (this.$6 = new Set()),
          (this.$7 = b),
          (this.$8 = b.variables),
          (this.$9 = c);
      }
      var c = a.prototype;
      c.read = function () {
        var a = this.$7,
          c = a.node,
          d = a.dataID;
        a = a.isWithinUnmatchedTypeRefinement;
        var e = c.abstractKey,
          f = this.$5.get(d);
        a = !a;
        if (a && e == null && f != null) {
          var g = (
            h || (h = b("relay-runtime/store/RelayModernRecord"))
          ).getType(f);
          g !== c.type && d !== D && (a = !1);
        }
        if (a && e != null && f != null) {
          g = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(
            f
          );
          f = J(g);
          g = this.$5.get(f);
          f =
            g != null
              ? (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getValue(g, e)
              : null;
          f === !1 ? (a = !1) : f == null && (this.$1 = !0);
        }
        this.$2 = !a;
        g = this.$10(c, d, null);
        return {
          data: g,
          isMissingData: this.$1 && a,
          seenRecords: this.$6,
          selector: this.$7,
          missingRequiredFields: this.$3,
        };
      };
      c.$10 = function (a, b, c) {
        var d = this.$5.get(b);
        this.$6.add(b);
        if (d == null) {
          d === void 0 && (this.$1 = !0);
          return d;
        }
        b = c || {};
        c = this.$11(a.selections, d, b);
        return c ? b : null;
      };
      c.$12 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$8, a) || g(0, 1306, a);
        return this.$8[a];
      };
      c.$13 = function (a, b, c) {
        if (((c = this.$3) == null ? void 0 : c.action) === "THROW") return;
        c = this.$7.node.name;
        switch (b) {
          case "THROW":
            this.$3 = { action: b, field: { path: a, owner: c } };
            return;
          case "LOG":
            this.$3 == null && (this.$3 = { action: b, fields: [] });
            this.$3.fields.push({ path: a, owner: c });
            return;
          default:
            b;
        }
      };
      c.$11 = function (a, c, d) {
        for (var e = 0; e < a.length; e++) {
          var f = a[e];
          switch (f.kind) {
            case s:
              b("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_REQUIRED_DIRECTIVES ||
                g(0, 37452, f.path, this.$7.node.name);
              var w = this.$14(f, c, d);
              if (w == null) {
                w = f.action;
                w !== "NONE" && this.$13(f.path, w, c);
                return !1;
              }
              break;
            case u:
              this.$15(f, c, d);
              break;
            case q:
              f.plural ? this.$16(f, c, d) : this.$17(f, c, d);
              break;
            case k:
              w = Boolean(this.$12(f.condition));
              if (w === f.passingValue) {
                w = this.$11(f.selections, c, d);
                if (!w) return !1;
              }
              break;
            case p:
              w = f.abstractKey;
              if (w == null) {
                var x = (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getType(c);
                if (x != null && x === f.type) {
                  x = this.$11(f.selections, c, d);
                  if (!x) return !1;
                }
              } else {
                x = this.$1;
                var y = this.$2,
                  z = (
                    h || (h = b("relay-runtime/store/RelayModernRecord"))
                  ).getType(c);
                z = J(z);
                z = this.$5.get(z);
                z =
                  z != null
                    ? (
                        h || (h = b("relay-runtime/store/RelayModernRecord"))
                      ).getValue(z, w)
                    : null;
                this.$2 = y || z === !1;
                this.$11(f.selections, c, d);
                this.$2 = y;
                z === !1 ? (this.$1 = x) : z == null && (this.$1 = !0);
              }
              break;
            case t:
              if (
                !b("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_RELAY_RESOLVERS
              )
                throw new Error("Relay Resolver fields are not yet supported.");
              this.$18(f, c, d);
              break;
            case n:
              this.$19(f, c, d);
              break;
            case r:
              this.$20(f, c, d);
              break;
            case o:
              this.$21(f, c, d);
              break;
            case l:
            case j:
              w = this.$1;
              y = this.$11(f.selections, c, d);
              this.$1 = w;
              if (!y) return !1;
              break;
            case v:
              x = this.$11(f.selections, c, d);
              if (!x) return !1;
              break;
            case m:
              if (
                b("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                this.$22(f, c, d);
              else throw new Error("Flight fields are not yet supported.");
              break;
            case i:
              this.$23(f, c, d);
              break;
            default:
              f, g(0, 1307, f.kind);
          }
        }
        return !0;
      };
      c.$14 = function (a, c, d) {
        switch (a.field.kind) {
          case u:
            return this.$15(a.field, c, d);
          case q:
            if (a.field.plural) return this.$16(a.field, c, d);
            else return this.$17(a.field, c, d);
          case t:
            if (
              !b("relay-runtime/util/RelayFeatureFlags").ENABLE_RELAY_RESOLVERS
            )
              throw new Error("Relay Resolver fields are not yet supported.");
            this.$18(a.field, c, d);
            break;
          default:
            a.field.kind, g(0, 1307, a.kind);
        }
      };
      c.$18 = function (a, c, d) {
        var e = this,
          f = a.resolverModule,
          i = a.fragment,
          j = F(a, this.$8),
          k = b("relay-runtime/store/ClientID").generateClientID(
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
              c
            ),
            j
          ),
          l,
          m,
          n = new Set(),
          o = function (a) {
            if (l != null) return l;
            m = a;
            var b = e.$6;
            try {
              e.$6 = n;
              var d = {};
              e.$21(a.node, c, d);
              l = (a = d[x]) == null ? void 0 : a[i.name];
              (typeof l === "object" && l !== null) || g(0, void 0);
              return l;
            } finally {
              e.$6 = b;
            }
          },
          p = { getDataForResolverFragment: o };
        a = this.$9.readFromCacheOrEvaluate(
          c,
          a,
          this.$8,
          function () {
            var a,
              d = {
                __id: (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getDataID(c),
                __fragmentOwner: e.$4,
                __fragments: ((a = {}), (a[i.name] = {}), a),
              };
            return I(p, function () {
              var a = f(d);
              return {
                resolverResult: a,
                fragmentValue: l,
                resolverID: k,
                seenRecordIDs: n,
                readerSelector: m,
              };
            });
          },
          o
        );
        o = a[0];
        a = a[1];
        a != null && this.$6.add(a);
        d[j] = o;
        return o;
      };
      c.$22 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        a = F(a, this.$8);
        c = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordID(c, a);
        if (c == null) {
          d[e] = c;
          c === void 0 && (this.$1 = !0);
          return c;
        }
        a = this.$5.get(c);
        this.$6.add(c);
        if (a == null) {
          d[e] = a;
          a === void 0 && (this.$1 = !0);
          return a;
        }
        c = w(a);
        d[e] = c;
        return c;
      };
      c.$15 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        a = F(a, this.$8);
        c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(
          c,
          a
        );
        c === void 0 && (this.$1 = !0);
        d[e] = c;
        return c;
      };
      c.$17 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        var f = F(a, this.$8);
        f = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordID(c, f);
        if (f == null) {
          d[e] = f;
          f === void 0 && (this.$1 = !0);
          return f;
        }
        var i = d[e];
        i == null ||
          typeof i === "object" ||
          g(
            0,
            1308,
            e,
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
              c
            ),
            i
          );
        c = this.$10(a, f, i);
        d[e] = c;
        return c;
      };
      c.$23 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        var f = F(a, this.$8);
        c = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getActorLinkedRecordID(c, f);
        if (c == null) {
          d[e] = c;
          c === void 0 && (this.$1 = !0);
          return d[e];
        }
        f = c[0];
        c = c[1];
        var g = {};
        this.$19(a.fragmentSpread, { __id: c }, g);
        d[e] = { __fragmentRef: g, __viewer: f };
        return d[e];
      };
      c.$16 = function (a, c, d) {
        var e,
          f = this,
          i = (e = a.alias) != null ? e : a.name;
        e = F(a, this.$8);
        e = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordIDs(c, e);
        if (e == null) {
          d[i] = e;
          e === void 0 && (this.$1 = !0);
          return e;
        }
        var j = d[i];
        j == null ||
          Array.isArray(j) ||
          g(
            0,
            1309,
            i,
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
              c
            ),
            j
          );
        var k = j || [];
        e.forEach(function (d, e) {
          if (d == null) {
            d === void 0 && (f.$1 = !0);
            k[e] = d;
            return;
          }
          var j = k[e];
          j == null ||
            typeof j === "object" ||
            g(
              0,
              1308,
              i,
              (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(
                c
              ),
              j
            );
          k[e] = f.$10(a, d, j);
        });
        d[i] = k;
        return k;
      };
      c.$20 = function (a, c, d) {
        var e = G(a.documentName);
        e = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(
          c,
          e
        );
        if (e == null) {
          e === void 0 && (this.$1 = !0);
          return;
        }
        this.$19(
          { kind: "FragmentSpread", name: a.fragmentName, args: a.args },
          c,
          d
        );
        d[z] = a.fragmentPropName;
        d[C] = e;
      };
      c.$19 = function (a, c, d) {
        var e = d[x];
        e == null && (e = d[x] = {});
        (typeof e === "object" && e != null) || g(0, 1310, e);
        d[A] == null &&
          (d[A] = (
            h || (h = b("relay-runtime/store/RelayModernRecord"))
          ).getDataID(c));
        e[a.name] = a.args ? E(a.args, this.$8) : {};
        d[y] = this.$4;
        d[B] = this.$2;
      };
      c.$21 = function (a, c, d) {
        var e = d[x];
        e == null && (e = d[x] = {});
        (typeof e === "object" && e != null) || g(0, 1310, e);
        d[A] == null &&
          (d[A] = (
            h || (h = b("relay-runtime/store/RelayModernRecord"))
          ).getDataID(c));
        d = {};
        this.$11(a.selections, c, d);
        e[a.name] = d;
      };
      return a;
    })();
    e.exports = { read: a };
  },
  null
);
__d(
  "relay-runtime/store/RelayPublishQueue",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordSourceMutator",
    "relay-runtime/mutations/RelayRecordSourceProxy",
    "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/util/deepFreeze",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        (f =
          (c = a) == null
            ? void 0
            : (d = c.ErrorUtils) == null
            ? void 0
            : d.applyWithGuard) != null
          ? f
          : function (a, b, c, d, e) {
              return a.apply(b, c);
            };
    a = (function () {
      function a(a, b, c) {
        (this.$4 = !1),
          (this.$2 = b || null),
          (this.$5 = !1),
          (this.$6 = new Set()),
          (this.$7 = new Set()),
          (this.$1 = a),
          (this.$8 = new Set()),
          (this.$9 = null),
          (this.$3 = c);
      }
      var c = a.prototype;
      c.applyUpdate = function (a) {
        (!this.$8.has(a) && !this.$7.has(a)) || g(0, 680), this.$7.add(a);
      };
      c.revertUpdate = function (a) {
        this.$7.has(a)
          ? this.$7["delete"](a)
          : this.$8.has(a) && ((this.$5 = !0), this.$8["delete"](a));
      };
      c.revertAll = function () {
        (this.$5 = !0), this.$7.clear(), this.$8.clear();
      };
      c.commitPayload = function (a, b, c) {
        (this.$5 = !0),
          this.$6.add({
            kind: "payload",
            operation: a,
            payload: b,
            updater: c,
          });
      };
      c.commitUpdate = function (a) {
        (this.$5 = !0), this.$6.add({ kind: "updater", updater: a });
      };
      c.commitSource = function (a) {
        (this.$5 = !0), this.$6.add({ kind: "source", source: a });
      };
      c.run = function (a) {
        var b = this.$8 === 0 && !!this.$9;
        b = !this.$5 && this.$7.size === 0 && !b;
        if (b) return [];
        this.$5 && this.$4 && (this.$1.restore(), (this.$4 = !1));
        b = this.$11();
        (this.$7.size || (this.$5 && this.$8.size)) &&
          (this.$4 || (this.$1.snapshot(), (this.$4 = !0)), this.$12());
        this.$5 = !1;
        this.$8.size > 0
          ? this.$9 || (this.$9 = this.$1.holdGC())
          : this.$9 && (this.$9.dispose(), (this.$9 = null));
        return this.$1.notify(a, b);
      };
      c.$13 = function (a) {
        var c = this,
          d = a.payload,
          e = a.operation;
        a = a.updater;
        var f = d.source;
        d = d.fieldPayloads;
        var h = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(
            this.$1.getSource(),
            f
          ),
          i = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(
            h,
            this.$3
          );
        d &&
          d.length &&
          d.forEach(function (a) {
            var b = c.$2 && c.$2(a.handle);
            b || g(0, 681, a.handle);
            b.update(i, a);
          });
        if (a) {
          d = e.fragment;
          d != null || g(0, 12580);
          e = new (b("relay-runtime/mutations/RelayRecordSourceSelectorProxy"))(
            h,
            i,
            d
          );
          h = j(f, d);
          a(e, h);
        }
        d = i.getIDsMarkedForInvalidation();
        this.$1.publish(f, d);
        return i.isStoreMarkedForInvalidation();
      };
      c.$11 = function () {
        var a = this;
        if (!this.$6.size) return !1;
        var c = !1;
        this.$6.forEach(function (d) {
          if (d.kind === "payload") {
            var e = a.$13(d);
            c = c || e;
          } else if (d.kind === "source") {
            e = d.source;
            a.$1.publish(e);
          } else {
            e = d.updater;
            d = b("relay-runtime/store/RelayRecordSource").create();
            var f = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(
              a.$1.getSource(),
              d
            );
            f = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(
              f,
              a.$3
            );
            i(e, null, [f], null, "RelayPublishQueue:commitData");
            c = c || f.isStoreMarkedForInvalidation();
            e = f.getIDsMarkedForInvalidation();
            a.$1.publish(d, e);
          }
        });
        this.$6.clear();
        return c;
      };
      c.$12 = function () {
        var a = this,
          c = b("relay-runtime/store/RelayRecordSource").create(),
          d = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(
            this.$1.getSource(),
            c
          ),
          e = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(
            d,
            this.$3,
            this.$2
          ),
          f = function (a) {
            if (a.storeUpdater) {
              var c = a.storeUpdater;
              i(c, null, [e], null, "RelayPublishQueue:applyUpdates");
            } else {
              c = a.operation;
              var f = a.payload;
              a = a.updater;
              var g = f.source;
              f = f.fieldPayloads;
              g && e.publishSource(g, f);
              if (a) {
                var h;
                g && (h = j(g, c.fragment));
                f = new (b(
                  "relay-runtime/mutations/RelayRecordSourceSelectorProxy"
                ))(d, e, c.fragment);
                i(a, null, [f, h], null, "RelayPublishQueue:applyUpdates");
              }
            }
          };
        this.$5 && this.$8.size && this.$8.forEach(f);
        this.$7.size &&
          (this.$7.forEach(function (b) {
            f(b), a.$8.add(b);
          }),
          this.$7.clear());
        this.$1.publish(c);
      };
      return a;
    })();
    function j(a, c) {
      a = b("relay-runtime/store/RelayReader").read(a, c).data;
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/StoreInspector",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function () {};
    e.exports = { inspect: a };
  },
  null
);
__d(
  "relay-runtime/store/ViewerPattern",
  ["relay-runtime/store/ClientID", "relay-runtime/store/RelayStoreUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("relay-runtime/store/ClientID").generateClientID;
    c = b("relay-runtime/store/RelayStoreUtils").ROOT_ID;
    d = a(c, "viewer");
    f = "Viewer";
    e.exports = { VIEWER_ID: d, VIEWER_TYPE: f };
  },
  null
);
__d(
  "relay-runtime/store/defaultGetDataID",
  ["relay-runtime/store/ViewerPattern"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/store/ViewerPattern").VIEWER_ID,
      h = b("relay-runtime/store/ViewerPattern").VIEWER_TYPE;
    function a(a, b) {
      return b === h ? (a.id == null ? g : a.id) : a.id;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/defaultRequiredFieldLogger",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {};
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/registerEnvironmentWithDevTools",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function b(b) {
      var c =
        typeof a !== "undefined"
          ? a
          : typeof window !== "undefined"
          ? window
          : void 0;
      c = c && c.__RELAY_DEVTOOLS_HOOK__;
      c && c.registerEnvironment(b);
    }
    e.exports = b;
  },
  null
);
__d(
  "relay-runtime/store/RelayModernEnvironment",
  [
    "invariant",
    "relay-runtime/handlers/RelayDefaultHandlerProvider",
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/network/wrapNetworkWithLogObserver",
    "relay-runtime/store/OperationExecutor",
    "relay-runtime/store/RelayOperationTracker",
    "relay-runtime/store/RelayPublishQueue",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/StoreInspector",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/store/defaultRequiredFieldLogger",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/registerEnvironmentWithDevTools",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b(
        "relay-runtime/multi-actor-environment/ActorIdentifier"
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      i = b(
        "relay-runtime/multi-actor-environment/ActorIdentifier"
      ).assertInternalActorIndentifier;
    a = (function () {
      function a(a) {
        var c,
          d = this;
        this.configName = a.configName;
        this.$13 = a.treatMissingFieldsAsNull === !0;
        var e = a.operationLoader,
          f = a.reactFlightPayloadDeserializer,
          g = a.reactFlightServerErrorHandler;
        this.__log = (c = a.log) != null ? c : j;
        this.requiredFieldLogger =
          (c = a.requiredFieldLogger) != null
            ? c
            : b("relay-runtime/store/defaultRequiredFieldLogger");
        this.$1 = (
          (c = a.UNSTABLE_defaultRenderPolicy) != null
            ? c
            : b("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_PARTIAL_RENDERING_DEFAULT === !0
        )
          ? "partial"
          : "full";
        this.$2 = e;
        this.$14 = new Map();
        this.$6 = b("relay-runtime/network/wrapNetworkWithLogObserver")(
          this,
          a.network
        );
        this.$12 =
          (c = a.getDataID) != null
            ? c
            : b("relay-runtime/store/defaultGetDataID");
        this.$7 = new (b("relay-runtime/store/RelayPublishQueue"))(
          a.store,
          (e = a.handlerProvider) != null
            ? e
            : b("relay-runtime/handlers/RelayDefaultHandlerProvider"),
          this.$12
        );
        this.$8 = (c = a.scheduler) != null ? c : null;
        this.$9 = a.store;
        this.options = a.options;
        this.$15 = (e = a.isServer) != null ? e : !1;
        this.__setNet = function (a) {
          return (d.$6 = b("relay-runtime/network/wrapNetworkWithLogObserver")(
            d,
            a
          ));
        };
        this.$10 = a.missingFieldHandlers;
        this.$11 =
          (c = a.operationTracker) != null
            ? c
            : new (b("relay-runtime/store/RelayOperationTracker"))();
        this.$3 = f;
        this.$4 = g;
        this.$5 = a.shouldProcessClientComponents;
        b("relay-runtime/util/registerEnvironmentWithDevTools")(this);
      }
      var c = a.prototype;
      c.getStore = function () {
        return this.$9;
      };
      c.getNetwork = function () {
        return this.$6;
      };
      c.getOperationTracker = function () {
        return this.$11;
      };
      c.isRequestActive = function (a) {
        a = this.$14.get(a);
        return a === "active";
      };
      c.UNSTABLE_getDefaultRenderPolicy = function () {
        return this.$1;
      };
      c.applyUpdate = function (a) {
        var b = this,
          c = function () {
            b.$16(function () {
              b.$7.revertUpdate(a), b.$7.run();
            });
          };
        this.$16(function () {
          b.$7.applyUpdate(a), b.$7.run();
        });
        return { dispose: c };
      };
      c.revertUpdate = function (a) {
        var b = this;
        this.$16(function () {
          b.$7.revertUpdate(a), b.$7.run();
        });
      };
      c.replaceUpdate = function (a, b) {
        var c = this;
        this.$16(function () {
          c.$7.revertUpdate(a), c.$7.applyUpdate(b), c.$7.run();
        });
      };
      c.applyMutation = function (a) {
        var c = this.$17({
          createSource: function () {
            return b("relay-runtime/network/RelayObservable").create(function (
              a
            ) {});
          },
          isClientPayload: !1,
          operation: a.operation,
          optimisticConfig: a,
          updater: null,
        }).subscribe({});
        return {
          dispose: function () {
            return c.unsubscribe();
          },
        };
      };
      c.check = function (a) {
        return this.$10 == null || this.$10.length === 0
          ? this.$9.check(a)
          : this.$18(a, this.$10);
      };
      c.commitPayload = function (a, c) {
        this.$17({
          createSource: function () {
            return b("relay-runtime/network/RelayObservable").from({ data: c });
          },
          isClientPayload: !0,
          operation: a,
          optimisticConfig: null,
          updater: null,
        }).subscribe({});
      };
      c.commitUpdate = function (a) {
        var b = this;
        this.$16(function () {
          b.$7.commitUpdate(a), b.$7.run();
        });
      };
      c.lookup = function (a) {
        return this.$9.lookup(a);
      };
      c.subscribe = function (a, b) {
        return this.$9.subscribe(a, b);
      };
      c.retain = function (a) {
        return this.$9.retain(a);
      };
      c.isServer = function () {
        return this.$15;
      };
      c.$18 = function (a, c) {
        var d = this,
          e = b("relay-runtime/store/RelayRecordSource").create(),
          f = this.$9.getSource();
        a = this.$9.check(a, {
          handlers: c,
          defaultActorIdentifier: h,
          getSourceForActor: function (a) {
            i(a);
            return f;
          },
          getTargetForActor: function (a) {
            i(a);
            return e;
          },
        });
        e.size() > 0 &&
          this.$16(function () {
            d.$7.commitSource(e), d.$7.run();
          });
        return a;
      };
      c.$16 = function (a) {
        var b = this.$8;
        b != null ? b.schedule(a) : a();
      };
      c.execute = function (a) {
        var b = this,
          c = a.operation;
        a = a.updater;
        return this.$17({
          createSource: function () {
            return b.$6.execute(
              c.request.node.params,
              c.request.variables,
              c.request.cacheConfig || {},
              null
            );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: null,
          updater: a,
        });
      };
      c.executeMutation = function (a) {
        var b = this,
          c = a.operation,
          d = a.optimisticResponse,
          e = a.optimisticUpdater,
          f = a.updater,
          g = a.uploadables,
          h;
        (d || e) && (h = { operation: c, response: d, updater: e });
        return this.$17({
          createSource: function () {
            return b.$6.execute(
              c.request.node.params,
              c.request.variables,
              babelHelpers["extends"]({}, c.request.cacheConfig, { force: !0 }),
              g
            );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: h,
          updater: f,
        });
      };
      c.executeWithSource = function (a) {
        var b = a.operation,
          c = a.source;
        return this.$17({
          createSource: function () {
            return c;
          },
          isClientPayload: !1,
          operation: b,
          optimisticConfig: null,
          updater: null,
        });
      };
      c.toJSON = function () {
        var a;
        return (
          "RelayModernEnvironment(" +
          ((a = this.configName) != null ? a : "") +
          ")"
        );
      };
      c.$17 = function (a) {
        var c = this,
          d = a.createSource,
          e = a.isClientPayload,
          f = a.operation,
          g = a.optimisticConfig,
          j = a.updater,
          k = this.$7,
          l = this.$9;
        return b("relay-runtime/network/RelayObservable").create(function (a) {
          var m = b("relay-runtime/store/OperationExecutor").execute({
            actorIdentifier: h,
            getDataID: c.$12,
            isClientPayload: e,
            log: c.__log,
            operation: f,
            operationExecutions: c.$14,
            operationLoader: c.$2,
            operationTracker: c.$11,
            optimisticConfig: g,
            getPublishQueue: function (a) {
              i(a);
              return k;
            },
            reactFlightPayloadDeserializer: c.$3,
            reactFlightServerErrorHandler: c.$4,
            scheduler: c.$8,
            shouldProcessClientComponents: c.$5,
            sink: a,
            source: d(),
            getStore: function (a) {
              i(a);
              return l;
            },
            treatMissingFieldsAsNull: c.$13,
            updater: j,
          });
          return function () {
            return m.cancel();
          };
        });
      };
      return a;
    })();
    a.prototype["@@RelayModernEnvironment"] = !0;
    function j() {}
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/cloneRelayHandleSourceField",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayConcreteNode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("relay-runtime/util/RelayConcreteNode").LINKED_FIELD,
      j = b("relay-runtime/store/RelayStoreUtils").getHandleStorageKey;
    function a(a, c, d) {
      c = c.find(function (c) {
        return (
          c.kind === i &&
          c.name === a.name &&
          c.alias === a.alias &&
          (h || (h = b("areEqual")))(c.args, a.args)
        );
      });
      (c && c.kind === i) || g(0, 2847, a.handle);
      d = j(a, d);
      return {
        kind: "LinkedField",
        alias: c.alias,
        name: d,
        storageKey: d,
        args: null,
        concreteType: c.concreteType,
        plural: c.plural,
        selections: c.selections,
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/cloneRelayScalarHandleSourceField",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayConcreteNode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("relay-runtime/util/RelayConcreteNode").SCALAR_FIELD,
      j = b("relay-runtime/store/RelayStoreUtils").getHandleStorageKey;
    function a(a, c, d) {
      c = c.find(function (c) {
        return (
          c.kind === i &&
          c.name === a.name &&
          c.alias === a.alias &&
          (h || (h = b("areEqual")))(c.args, a.args)
        );
      });
      (c && c.kind === i) || g(0, 23146, a.handle);
      d = j(a, d);
      return {
        kind: "ScalarField",
        alias: c.alias,
        name: d,
        storageKey: d,
        args: null,
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/DataChecker",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordSourceMutator",
    "relay-runtime/mutations/RelayRecordSourceProxy",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
    "relay-runtime/store/RelayStoreReactFlightUtils",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/TypeID",
    "relay-runtime/store/cloneRelayHandleSourceField",
    "relay-runtime/store/cloneRelayScalarHandleSourceField",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/getOperation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("relay-runtime/store/ClientID").isClientID,
      j = b("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      k = b("relay-runtime/store/RelayRecordState").EXISTENT,
      l = b("relay-runtime/store/RelayRecordState").UNKNOWN,
      m = b("relay-runtime/store/TypeID").generateTypeID,
      n = (c = b("relay-runtime/util/RelayConcreteNode")).ACTOR_CHANGE,
      o = c.CONDITION,
      p = c.CLIENT_COMPONENT,
      q = c.CLIENT_EXTENSION,
      r = c.DEFER,
      s = c.FLIGHT_FIELD,
      t = c.FRAGMENT_SPREAD,
      u = c.INLINE_FRAGMENT,
      v = c.LINKED_FIELD,
      w = c.LINKED_HANDLE,
      x = c.MODULE_IMPORT,
      y = c.SCALAR_FIELD,
      z = c.SCALAR_HANDLE,
      A = c.STREAM,
      B = c.TYPE_DISCRIMINATOR,
      C = (d = b("relay-runtime/store/RelayStoreUtils")).ROOT_ID,
      D = d.getModuleOperationKey,
      E = d.getStorageKey,
      F = d.getArgumentValues;
    function a(a, b, c, d, e, f, g, h) {
      var i = d.dataID,
        j = d.node;
      d = d.variables;
      a = new G(a, b, c, d, e, f, g, h);
      return a.check(j, i);
    }
    var G = (function () {
      function a(a, b, c, d, e, f, g, h) {
        this.$11 = a;
        this.$12 = b;
        this.$13 = g;
        this.$8 = a(c);
        this.$14 = new Map();
        b = this.$15(c);
        g = b[0];
        a = b[1];
        this.$2 = null;
        this.$1 = e;
        this.$3 = g;
        this.$4 = (c = f) != null ? c : null;
        this.$6 = a;
        this.$7 = !1;
        this.$9 = d;
        this.$10 = h;
      }
      var c = a.prototype;
      c.$15 = function (a) {
        var c = this.$14.get(a);
        if (c == null) {
          var d = this.$12(a);
          d = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(
            this.$11(a),
            d
          );
          var e = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(
            d,
            this.$13
          );
          c = [d, e];
          this.$14.set(a, c);
        }
        return c;
      };
      c.check = function (a, b) {
        this.$16(a, b);
        return this.$7 === !0
          ? { status: "missing", mostRecentlyInvalidatedAt: this.$2 }
          : { status: "available", mostRecentlyInvalidatedAt: this.$2 };
      };
      c.$17 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$9, a) || g(0, 2044, a);
        return this.$9[a];
      };
      c.$18 = function () {
        this.$7 = !0;
      };
      c.$19 = function (a, b) {
        return {
          args: a.args ? F(a.args, this.$9) : {},
          record: this.$8.get(b),
        };
      };
      c.$20 = function (a, b) {
        if (a.name === "id" && a.alias == null && i(b)) return void 0;
        b = this.$19(a, b);
        var c = b.args;
        b = b.record;
        for (
          var d = this.$1,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          if (g.kind === "scalar") {
            g = g.handle(a, b, c, this.$6);
            if (g !== void 0) return g;
          }
        }
        this.$18();
      };
      c.$21 = function (a, b) {
        b = this.$19(a, b);
        var c = b.args;
        b = b.record;
        for (
          var d = this.$1,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          if (g.kind === "linked") {
            g = g.handle(a, b, c, this.$6);
            if (g !== void 0 && (g === null || this.$3.getStatus(g) === k))
              return g;
          }
        }
        this.$18();
      };
      c.$22 = function (a, b) {
        var c = this;
        b = this.$19(a, b);
        var d = b.args;
        b = b.record;
        for (
          var e = this.$1,
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          if (h.kind === "pluralLinked") {
            h = h.handle(a, b, d, this.$6);
            if (h != null) {
              var i = h.every(function (a) {
                return a != null && c.$3.getStatus(a) === k;
              });
              if (i) return h;
            } else if (h === null) return null;
          }
        }
        this.$18();
      };
      c.$16 = function (a, c) {
        var d = this.$3.getStatus(c);
        d === l && this.$18();
        if (d === k) {
          d = this.$8.get(c);
          d = (
            h || (h = b("relay-runtime/store/RelayModernRecord"))
          ).getInvalidationEpoch(d);
          d != null && (this.$2 = this.$2 != null ? Math.max(this.$2, d) : d);
          this.$23(a.selections, c);
        }
      };
      c.$23 = function (a, c) {
        var d = this;
        a.forEach(function (e) {
          switch (e.kind) {
            case y:
              d.$24(e, c);
              break;
            case v:
              e.plural ? d.$25(e, c) : d.$26(e, c);
              break;
            case n:
              d.$27(e.linkedField, c);
              break;
            case o:
              var f = Boolean(d.$17(e.condition));
              f === e.passingValue && d.$23(e.selections, c);
              break;
            case u:
              f = e.abstractKey;
              if (f == null) {
                var h = d.$3.getType(c);
                h === e.type && d.$23(e.selections, c);
              } else {
                h = d.$3.getType(c);
                h != null || g(0, 22686, c);
                h = m(h);
                h = d.$3.getValue(h, f);
                h === !0 ? d.$23(e.selections, c) : h == null && d.$18();
              }
              break;
            case w:
              f = b("relay-runtime/store/cloneRelayHandleSourceField")(
                e,
                a,
                d.$9
              );
              f.plural ? d.$25(f, c) : d.$26(f, c);
              break;
            case z:
              h = b("relay-runtime/store/cloneRelayScalarHandleSourceField")(
                e,
                a,
                d.$9
              );
              d.$24(h, c);
              break;
            case x:
              d.$28(e, c);
              break;
            case r:
            case A:
              d.$23(e.selections, c);
              break;
            case t:
              f = d.$9;
              d.$9 = j(d.$9, e.fragment.argumentDefinitions, e.args);
              d.$23(e.fragment.selections, c);
              d.$9 = f;
              break;
            case q:
              h = d.$7;
              d.$23(e.selections, c);
              d.$7 = h;
              break;
            case B:
              f = e.abstractKey;
              h = d.$3.getType(c);
              h != null || g(0, 22686, c);
              h = m(h);
              h = d.$3.getValue(h, f);
              h == null && d.$18();
              break;
            case s:
              if (
                b("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                d.$29(e, c);
              else throw new Error("Flight fields are not yet supported.");
              break;
            case p:
              if (d.$10 === !1) break;
              d.$23(e.fragment.selections, c);
              break;
            default:
              e, g(0, 2045, e.kind);
          }
        });
      };
      c.$28 = function (a, c) {
        var d = this.$4;
        d !== null || g(0, 13642);
        var e = D(a.documentName);
        e = this.$3.getValue(c, e);
        if (e == null) {
          e === void 0 && this.$18();
          return;
        }
        d = d.get(e);
        if (d != null) {
          e = b("relay-runtime/util/getOperation")(d);
          d = this.$9;
          this.$9 = j(this.$9, e.argumentDefinitions, a.args);
          this.$16(e, c);
          this.$9 = d;
        } else this.$18();
      };
      c.$24 = function (a, b) {
        var c = E(a, this.$9),
          d = this.$3.getValue(b, c);
        d === void 0 &&
          ((d = this.$20(a, b)), d !== void 0 && this.$3.setValue(b, c, d));
      };
      c.$26 = function (a, b) {
        var c = E(a, this.$9),
          d = this.$3.getLinkedRecordID(b, c);
        d === void 0 &&
          ((d = this.$21(a, b)),
          d != null
            ? this.$3.setLinkedRecordID(b, c, d)
            : d === null && this.$3.setValue(b, c, null));
        d != null && this.$16(a, d);
      };
      c.$25 = function (a, b) {
        var c = this,
          d = E(a, this.$9),
          e = this.$3.getLinkedRecordIDs(b, d);
        e === void 0 &&
          ((e = this.$22(a, b)),
          e != null
            ? this.$3.setLinkedRecordIDs(b, d, e)
            : e === null && this.$3.setValue(b, d, null));
        e &&
          e.forEach(function (b) {
            b != null && c.$16(a, b);
          });
      };
      c.$27 = function (a, c) {
        var d = E(a, this.$9);
        c = this.$8.get(c);
        d =
          c != null
            ? (
                h || (h = b("relay-runtime/store/RelayModernRecord"))
              ).getActorLinkedRecordID(c, d)
            : c;
        if (d == null) d === void 0 && this.$18();
        else {
          c = d[0];
          d = d[1];
          var e = this.$8,
            f = this.$3,
            g = this.$6,
            i = this.$15(c),
            j = i[0];
          i = i[1];
          this.$8 = this.$11(c);
          this.$3 = j;
          this.$6 = i;
          this.$16(a, d);
          this.$8 = e;
          this.$3 = f;
          this.$6 = g;
        }
      };
      c.$29 = function (a, c) {
        a = E(a, this.$9);
        c = this.$3.getLinkedRecordID(c, a);
        if (c == null) {
          if (c === void 0) {
            this.$18();
            return;
          }
          return;
        }
        a = this.$3.getValue(
          c,
          b("relay-runtime/store/RelayStoreReactFlightUtils")
            .REACT_FLIGHT_TREE_STORAGE_KEY
        );
        c = this.$3.getValue(
          c,
          b("relay-runtime/store/RelayStoreReactFlightUtils")
            .REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY
        );
        if (a == null || !Array.isArray(c)) {
          this.$18();
          return;
        }
        a = this.$4;
        a !== null || g(0, 23899);
        var d = this.$9;
        for (
          var c = c,
            e = Array.isArray(c),
            f = 0,
            c = e
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var h;
          if (e) {
            if (f >= c.length) break;
            h = c[f++];
          } else {
            f = c.next();
            if (f.done) break;
            h = f.value;
          }
          h = h;
          this.$9 = h.variables;
          h = a.get(h.module);
          if (h != null) {
            h = b("relay-runtime/util/getOperation")(h);
            this.$23(h.selections, C);
          } else this.$18();
        }
        this.$9 = d;
      };
      return a;
    })();
    e.exports = { check: a };
  },
  null
);
__d(
  "relay-runtime/store/RelayOptimisticRecordSource",
  ["relay-runtime/store/RelayRecordSource"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.freeze({ __UNPUBLISH_RECORD_SENTINEL: !0 }),
      h = (function () {
        function a(a) {
          (this.$1 = a),
            (this.$2 = b("relay-runtime/store/RelayRecordSource").create());
        }
        var c = a.prototype;
        c.has = function (a) {
          if (this.$2.has(a)) {
            var b = this.$2.get(a);
            return b !== g;
          } else return this.$1.has(a);
        };
        c.get = function (a) {
          if (this.$2.has(a)) {
            var b = this.$2.get(a);
            if (b === g) return void 0;
            else return b;
          } else return this.$1.get(a);
        };
        c.getStatus = function (a) {
          a = this.get(a);
          if (a === void 0) return "UNKNOWN";
          else if (a === null) return "NONEXISTENT";
          else return "EXISTENT";
        };
        c.clear = function () {
          (this.$1 = b("relay-runtime/store/RelayRecordSource").create()),
            this.$2.clear();
        };
        c["delete"] = function (a) {
          this.$2["delete"](a);
        };
        c.remove = function (a) {
          this.$2.set(a, g);
        };
        c.set = function (a, b) {
          this.$2.set(a, b);
        };
        c.getRecordIDs = function () {
          return Object.keys(this.toJSON());
        };
        c.size = function () {
          return Object.keys(this.toJSON()).length;
        };
        c.toJSON = function () {
          var a = this,
            b = babelHelpers["extends"]({}, this.$1.toJSON());
          this.$2.getRecordIDs().forEach(function (c) {
            var d = a.get(c);
            d === void 0 ? delete b[c] : (b[c] = d);
          });
          return b;
        };
        return a;
      })();
    function a(a) {
      return new h(a);
    }
    e.exports = { create: a };
  },
  null
);
__d(
  "relay-runtime/store/RelayReferenceMarker",
  [
    "invariant",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreReactFlightUtils",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/TypeID",
    "relay-runtime/store/cloneRelayHandleSourceField",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/getOperation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      j = b("relay-runtime/store/TypeID").generateTypeID,
      k = (c = b("relay-runtime/util/RelayConcreteNode")).ACTOR_CHANGE,
      l = c.CONDITION,
      m = c.CLIENT_COMPONENT,
      n = c.CLIENT_EXTENSION,
      o = c.DEFER,
      p = c.FLIGHT_FIELD,
      q = c.FRAGMENT_SPREAD,
      r = c.INLINE_FRAGMENT,
      s = c.LINKED_FIELD,
      t = c.MODULE_IMPORT,
      u = c.LINKED_HANDLE,
      v = c.SCALAR_FIELD,
      w = c.SCALAR_HANDLE,
      x = c.STREAM,
      y = c.TYPE_DISCRIMINATOR,
      z = b("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      A = b("relay-runtime/store/RelayStoreUtils").getStorageKey,
      B = b("relay-runtime/store/RelayStoreUtils").getModuleOperationKey;
    function a(a, b, c, d, e) {
      var f = b.dataID,
        g = b.node;
      b = b.variables;
      a = new C(a, b, c, d, e);
      a.mark(g, f);
    }
    var C = (function () {
      function a(a, b, c, d, e) {
        this.$1 = (d = d) != null ? d : null;
        this.$2 = null;
        this.$3 = a;
        this.$4 = c;
        this.$5 = b;
        this.$6 = e;
      }
      var c = a.prototype;
      c.mark = function (a, b) {
        (a.kind === "Operation" || a.kind === "SplitOperation") &&
          (this.$2 = a.name),
          this.$7(a, b);
      };
      c.$7 = function (a, b) {
        this.$4.add(b);
        b = this.$3.get(b);
        if (b == null) return;
        this.$8(a.selections, b);
      };
      c.$9 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$5, a) || g(0, 5170, a);
        return this.$5[a];
      };
      c.$8 = function (a, c) {
        var d = this;
        a.forEach(function (e) {
          switch (e.kind) {
            case k:
              d.$10(e.linkedField, c);
              break;
            case s:
              e.plural ? d.$11(e, c) : d.$10(e, c);
              break;
            case l:
              var f = Boolean(d.$9(e.condition));
              f === e.passingValue && d.$8(e.selections, c);
              break;
            case r:
              if (e.abstractKey == null) {
                f = (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getType(c);
                f != null && f === e.type && d.$8(e.selections, c);
              } else {
                f = (
                  h || (h = b("relay-runtime/store/RelayModernRecord"))
                ).getType(c);
                f = j(f);
                d.$4.add(f);
                d.$8(e.selections, c);
              }
              break;
            case q:
              f = d.$5;
              d.$5 = i(d.$5, e.fragment.argumentDefinitions, e.args);
              d.$8(e.fragment.selections, c);
              d.$5 = f;
              break;
            case u:
              f = b("relay-runtime/store/cloneRelayHandleSourceField")(
                e,
                a,
                d.$5
              );
              f.plural ? d.$11(f, c) : d.$10(f, c);
              break;
            case o:
            case x:
              d.$8(e.selections, c);
              break;
            case v:
            case w:
              break;
            case y:
              f = (
                h || (h = b("relay-runtime/store/RelayModernRecord"))
              ).getType(c);
              f = j(f);
              d.$4.add(f);
              break;
            case t:
              d.$12(e, c);
              break;
            case n:
              d.$8(e.selections, c);
              break;
            case p:
              if (
                b("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                d.$13(e, c);
              else throw new Error("Flight fields are not yet supported.");
              break;
            case m:
              if (d.$6 === !1) break;
              d.$8(e.fragment.selections, c);
              break;
            default:
              e, g(0, 5172, e);
          }
        });
      };
      c.$12 = function (a, c) {
        var d,
          e = this.$1;
        e !== null ||
          g(0, 23904, a.fragmentName, (d = this.$2) != null ? d : "(unknown)");
        d = B(a.documentName);
        d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(
          c,
          d
        );
        if (d == null) return;
        e = e.get(d);
        if (e != null) {
          d = b("relay-runtime/util/getOperation")(e);
          e = this.$5;
          this.$5 = i(this.$5, d.argumentDefinitions, a.args);
          this.$8(d.selections, c);
          this.$5 = e;
        }
      };
      c.$10 = function (a, c) {
        var d = A(a, this.$5);
        c = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordID(c, d);
        if (c == null) return;
        this.$7(a, c);
      };
      c.$11 = function (a, c) {
        var d = this,
          e = A(a, this.$5);
        c = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordIDs(c, e);
        if (c == null) return;
        c.forEach(function (b) {
          b != null && d.$7(a, b);
        });
      };
      c.$13 = function (a, c) {
        a = A(a, this.$5);
        c = (
          h || (h = b("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordID(c, a);
        if (c == null) return;
        this.$4.add(c);
        a = this.$3.get(c);
        if (a == null) return;
        c = h.getValue(
          a,
          b("relay-runtime/store/RelayStoreReactFlightUtils")
            .REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY
        );
        if (!Array.isArray(c)) return;
        a = this.$1;
        a !== null || g(0, 23917);
        var d = this.$5;
        for (
          var c = c,
            e = Array.isArray(c),
            f = 0,
            c = e
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var i;
          if (e) {
            if (f >= c.length) break;
            i = c[f++];
          } else {
            f = c.next();
            if (f.done) break;
            i = f.value;
          }
          i = i;
          this.$5 = i.variables;
          i = i.module;
          i = a.get(i);
          if (i != null) {
            i = b("relay-runtime/util/getOperation")(i);
            this.$7(i, z);
          }
        }
        this.$5 = d;
      };
      return a;
    })();
    e.exports = { mark: a };
  },
  null
);
__d(
  "relay-runtime/store/hasOverlappingIDs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
    function a(a, b) {
      a = a[g]();
      var c = a.next();
      while (!c.done) {
        var d = c.value;
        if (b.has(d)) return !0;
        c = a.next();
      }
      return !1;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/RelayStoreSubscriptions",
  [
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/hasOverlappingIDs",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/recycleNodesInto",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g, h;
    a = (function () {
      function a(a, b) {
        (this.$1 = new Set()), (this.__log = a), (this.$2 = b);
      }
      var c = a.prototype;
      c.subscribe = function (a, b) {
        var c = this,
          d = { backup: null, callback: b, snapshot: a, stale: !1 };
        b = function () {
          c.$1["delete"](d);
        };
        this.$1.add(d);
        return { dispose: b };
      };
      c.snapshotSubscriptions = function (a) {
        var c = this;
        this.$1.forEach(function (d) {
          if (!d.stale) {
            d.backup = d.snapshot;
            return;
          }
          var e = d.snapshot,
            f = b("relay-runtime/store/RelayReader").read(a, e.selector, c.$2);
          e = b("relay-runtime/util/recycleNodesInto")(e.data, f.data);
          f.data = e;
          d.backup = f;
        });
      };
      c.restoreSubscriptions = function () {
        this.$1.forEach(function (a) {
          var b = a.backup;
          a.backup = null;
          b
            ? (b.data !== a.snapshot.data && (a.stale = !0),
              (a.snapshot = {
                data: a.snapshot.data,
                isMissingData: b.isMissingData,
                seenRecords: b.seenRecords,
                selector: b.selector,
                missingRequiredFields: b.missingRequiredFields,
              }))
            : (a.stale = !0);
        });
      };
      c.updateSubscriptions = function (a, b, c, d) {
        var e = this,
          f = b.size !== 0;
        this.$1.forEach(function (g) {
          g = e.$3(a, g, b, f, d);
          g != null && c.push(g);
        });
      };
      c.$3 = function (a, c, d, e, f) {
        var h = c.backup,
          i = c.callback,
          j = c.snapshot,
          k = c.stale;
        e =
          e &&
          (g || (g = b("relay-runtime/store/hasOverlappingIDs")))(
            j.seenRecords,
            d
          );
        if (!k && !e) return;
        d =
          e || !h
            ? b("relay-runtime/store/RelayReader").read(a, j.selector, this.$2)
            : h;
        k = b("relay-runtime/util/recycleNodesInto")(j.data, d.data);
        d = {
          data: k,
          isMissingData: d.isMissingData,
          seenRecords: d.seenRecords,
          selector: d.selector,
          missingRequiredFields: d.missingRequiredFields,
        };
        c.snapshot = d;
        c.stale = !1;
        if (d.data !== j.data) {
          this.__log &&
            b("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_NOTIFY_SUBSCRIPTION &&
            this.__log({
              name: "store.notify.subscription",
              sourceOperation: f,
              snapshot: j,
              nextSnapshot: d,
            });
          i(d);
          return j.selector.owner;
        }
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/resolveImmediate",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("Promise").resolve();
    function a(a) {
      g.then(a)["catch"](h);
    }
    function h(a) {
      setTimeout(function () {
        throw a;
      }, 0);
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/RelayModernStore",
  [
    "invariant",
    "regeneratorRuntime",
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/store/DataChecker",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayOptimisticRecordSource",
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/RelayReferenceMarker",
    "relay-runtime/store/RelayStoreReactFlightUtils",
    "relay-runtime/store/RelayStoreSubscriptions",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/ResolverCache",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/resolveImmediate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = b(
        "relay-runtime/multi-actor-environment/ActorIdentifier"
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      k = b(
        "relay-runtime/multi-actor-environment/ActorIdentifier"
      ).assertInternalActorIndentifier,
      l = b("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      m = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      n = b("relay-runtime/store/ResolverCache").RecordResolverCache,
      o = 10;
    a = (function () {
      function a(a, c) {
        var d = this,
          e;
        this.$24 = function () {
          d.$4 && (d.$4.next().done ? (d.$4 = null) : d.$5(d.$24));
        };
        this.$1 = 0;
        this.$2 = 0;
        this.$3 =
          (e = c == null ? void 0 : c.gcReleaseBufferSize) != null ? e : o;
        this.$4 = null;
        this.$5 =
          (e = c == null ? void 0 : c.gcScheduler) != null
            ? e
            : b("relay-runtime/util/resolveImmediate");
        this.$6 =
          (e = c == null ? void 0 : c.getDataID) != null
            ? e
            : b("relay-runtime/store/defaultGetDataID");
        this.$7 = null;
        this.$8 = new Set();
        this.$9 = new Set();
        this.__log = (e = c == null ? void 0 : c.log) != null ? e : null;
        this.$10 = c == null ? void 0 : c.queryCacheExpirationTime;
        this.$11 =
          (e = c == null ? void 0 : c.operationLoader) != null ? e : null;
        this.$12 = null;
        this.$13 = a;
        this.$15 = [];
        this.$16 = new Map();
        this.$17 = !1;
        this.$14 = new n(function () {
          return d.$21();
        });
        this.$18 = new (b("relay-runtime/store/RelayStoreSubscriptions"))(
          c == null ? void 0 : c.log,
          this.$14
        );
        this.$19 = new Set();
        this.$20 = c == null ? void 0 : c.shouldProcessClientComponents;
        p(this.$13);
      }
      var c = a.prototype;
      c.getSource = function () {
        var a;
        return (a = this.$12) != null ? a : this.$13;
      };
      c.$21 = function () {
        var a;
        return (a = this.$12) != null ? a : this.$13;
      };
      c.check = function (a, c) {
        var d,
          e,
          f = a.root,
          g = this.$21(),
          h = this.$7;
        a = this.$16.get(a.request.identifier);
        var i = a != null ? a.epoch : null;
        if (h != null && (i == null || i <= h)) return { status: "stale" };
        h = (h = c == null ? void 0 : c.handlers) != null ? h : [];
        d =
          (d = c == null ? void 0 : c.getSourceForActor) != null
            ? d
            : function (a) {
                k(a);
                return g;
              };
        e =
          (e = c == null ? void 0 : c.getTargetForActor) != null
            ? e
            : function (a) {
                k(a);
                return g;
              };
        e = b("relay-runtime/store/DataChecker").check(
          d,
          e,
          (d = c == null ? void 0 : c.defaultActorIdentifier) != null ? d : j,
          f,
          h,
          this.$11,
          this.$6,
          this.$20
        );
        return r(e, i, a == null ? void 0 : a.fetchTime, this.$10);
      };
      c.retain = function (a) {
        var b = this,
          c = a.request.identifier,
          d = !1,
          e = function () {
            if (d) return;
            d = !0;
            var a = b.$16.get(c);
            if (a == null) return;
            a.refCount--;
            if (a.refCount === 0) {
              var e = b.$10;
              a =
                a.fetchTime != null &&
                e != null &&
                a.fetchTime <= Date.now() - e;
              if (a) b.$16["delete"](c), b.scheduleGC();
              else {
                b.$15.push(c);
                if (b.$15.length > b.$3) {
                  e = b.$15.shift();
                  b.$16["delete"](e);
                  b.scheduleGC();
                }
              }
            }
          },
          f = this.$16.get(c);
        f != null
          ? (f.refCount === 0 &&
              (this.$15 = this.$15.filter(function (a) {
                return a !== c;
              })),
            (f.refCount += 1))
          : this.$16.set(c, {
              operation: a,
              refCount: 1,
              epoch: null,
              fetchTime: null,
            });
        return { dispose: e };
      };
      c.lookup = function (a) {
        var c = this.getSource();
        c = b("relay-runtime/store/RelayReader").read(c, a, this.$14);
        return c;
      };
      c.notify = function (a, c) {
        var d = this,
          e = this.__log;
        e != null && e({ name: "store.notify.start", sourceOperation: a });
        this.$1++;
        c === !0 && (this.$7 = this.$1);
        b("relay-runtime/util/RelayFeatureFlags").ENABLE_RELAY_RESOLVERS &&
          this.$14.invalidateDataIDs(this.$19);
        var f = this.getSource(),
          g = [];
        this.$18.updateSubscriptions(f, this.$19, g, a);
        this.$8.forEach(function (a) {
          d.$22(a, c === !0);
        });
        e != null &&
          e({
            name: "store.notify.complete",
            sourceOperation: a,
            updatedRecordIDs: this.$19,
            invalidatedRecordIDs: this.$9,
          });
        this.$19.clear();
        this.$9.clear();
        if (a != null) {
          f = a.request.identifier;
          e = this.$16.get(f);
          if (e != null) (e.epoch = this.$1), (e.fetchTime = Date.now());
          else if (
            a.request.node.params.operationKind === "query" &&
            this.$3 > 0 &&
            this.$15.length < this.$3
          ) {
            e = {
              operation: a,
              refCount: 0,
              epoch: this.$1,
              fetchTime: Date.now(),
            };
            this.$15.push(f);
            this.$16.set(f, e);
          }
        }
        return g;
      };
      c.publish = function (a, b) {
        var c = this.$21();
        q(c, a, this.$1 + 1, b, this.$19, this.$9);
        b = this.__log;
        b != null &&
          b({ name: "store.publish", source: a, optimistic: c === this.$12 });
      };
      c.subscribe = function (a, b) {
        return this.$18.subscribe(a, b);
      };
      c.holdGC = function () {
        var a = this;
        this.$4 && ((this.$4 = null), (this.$17 = !0));
        this.$2++;
        var b = function () {
          a.$2 > 0 &&
            (a.$2--, a.$2 === 0 && a.$17 && (a.scheduleGC(), (a.$17 = !1)));
        };
        return { dispose: b };
      };
      c.toJSON = function () {
        return "RelayModernStore()";
      };
      c.getEpoch = function () {
        return this.$1;
      };
      c.__getUpdatedRecordIDs = function () {
        return this.$19;
      };
      c.lookupInvalidationState = function (a) {
        var c = this,
          d = new Map();
        a.forEach(function (a) {
          var e = c.getSource().get(a);
          d.set(
            a,
            (a = (
              h || (h = b("relay-runtime/store/RelayModernRecord"))
            ).getInvalidationEpoch(e)) != null
              ? a
              : null
          );
        });
        d.set("global", this.$7);
        return { dataIDs: a, invalidations: d };
      };
      c.checkInvalidationState = function (a) {
        var b = this.lookupInvalidationState(a.dataIDs);
        b = b.invalidations;
        var c = a.invalidations;
        if (b.get("global") !== c.get("global")) return !0;
        for (
          var a = a.dataIDs,
            d = Array.isArray(a),
            e = 0,
            a = d
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (b.get(f) !== c.get(f)) return !0;
        }
        return !1;
      };
      c.subscribeToInvalidationState = function (a, b) {
        var c = this,
          d = { callback: b, invalidationState: a };
        b = function () {
          c.$8["delete"](d);
        };
        this.$8.add(d);
        return { dispose: b };
      };
      c.$22 = function (a, b) {
        var c = this,
          d = a.callback;
        a = a.invalidationState;
        a = a.dataIDs;
        b =
          b ||
          a.some(function (a) {
            return c.$9.has(a);
          });
        if (!b) return;
        d();
      };
      c.snapshot = function () {
        this.$12 == null || g(0, 19004);
        var a = this.__log;
        a != null && a({ name: "store.snapshot" });
        this.$18.snapshotSubscriptions(this.getSource());
        this.$4 && ((this.$4 = null), (this.$17 = !0));
        this.$12 = b("relay-runtime/store/RelayOptimisticRecordSource").create(
          this.getSource()
        );
      };
      c.restore = function () {
        this.$12 != null || g(0, 19005);
        var a = this.__log;
        a != null && a({ name: "store.restore" });
        this.$12 = null;
        this.$17 && this.scheduleGC();
        this.$18.restoreSubscriptions();
      };
      c.scheduleGC = function () {
        if (this.$2 > 0) {
          this.$17 = !0;
          return;
        }
        if (this.$4) return;
        this.$4 = this.$23();
        this.$5(this.$24);
      };
      c.__gc = function () {
        if (this.$12 != null) return;
        var a = this.$23();
        while (!a.next().done);
      };
      c.$23 = b("regeneratorRuntime").mark(function a() {
        var c, d, e, f, g, h, i, j, k, l, m, n, o;
        return b("regeneratorRuntime").wrap(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  (c = this.$1),
                    (d = new Set()),
                    ((e = this.$16.values()),
                    (f = Array.isArray(e)),
                    (g = 0),
                    (e = f
                      ? e
                      : e[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]()));
                case 4:
                  if (!f) {
                    a.next = 10;
                    break;
                  }
                  if (!(g >= e.length)) {
                    a.next = 7;
                    break;
                  }
                  return a.abrupt("break", 24);
                case 7:
                  h = e[g++];
                  a.next = 14;
                  break;
                case 10:
                  g = e.next();
                  if (!g.done) {
                    a.next = 13;
                    break;
                  }
                  return a.abrupt("break", 24);
                case 13:
                  h = g.value;
                case 14:
                  i = h;
                  j = i.operation;
                  k = j.root;
                  b("relay-runtime/store/RelayReferenceMarker").mark(
                    this.$13,
                    k,
                    d,
                    this.$11,
                    this.$20
                  );
                  a.next = 20;
                  return;
                case 20:
                  if (!(c !== this.$1)) {
                    a.next = 22;
                    break;
                  }
                  return a.abrupt("continue", 0);
                case 22:
                  a.next = 4;
                  break;
                case 24:
                  l = this.__log;
                  l != null && l({ name: "store.gc", references: d });
                  if (d.size === 0) this.$13.clear();
                  else {
                    m = this.$13.getRecordIDs();
                    for (n = 0; n < m.length; n++)
                      (o = m[n]), d.has(o) || this.$13.remove(o);
                  }
                  return a.abrupt("return");
                case 30:
                case "end":
                  return a.stop();
              }
          },
          a,
          this
        );
      });
      return a;
    })();
    function p(a) {
      if (!a.has(l)) {
        var c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(
          l,
          m
        );
        a.set(l, c);
      }
    }
    function q(a, c, d, e, f, g) {
      e &&
        e.forEach(function (e) {
          var i = a.get(e),
            f = c.get(e);
          if (f === null) return;
          i != null
            ? (i = (
                h || (h = b("relay-runtime/store/RelayModernRecord"))
              ).clone(i))
            : (i =
                f != null
                  ? (
                      h || (h = b("relay-runtime/store/RelayModernRecord"))
                    ).clone(f)
                  : null);
          if (!i) return;
          (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(
            i,
            b("relay-runtime/store/RelayStoreUtils").INVALIDATED_AT_KEY,
            d
          );
          g.add(e);
          a.set(e, i);
        });
      e = c.getRecordIDs();
      for (var i = 0; i < e.length; i++) {
        var j = e[i],
          k = c.get(j),
          l = a.get(j);
        if (k && l) {
          var m =
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(
              l
            ) ===
            b("relay-runtime/store/RelayStoreReactFlightUtils")
              .REACT_FLIGHT_TYPE_NAME
              ? k
              : (h || (h = b("relay-runtime/store/RelayModernRecord"))).update(
                  l,
                  k
                );
          m !== l && (f.add(j), a.set(j, m));
        } else
          k === null
            ? (a["delete"](j), l !== null && f.add(j))
            : k && (a.set(j, k), f.add(j));
      }
    }
    function r(a, b, c, d) {
      var e = a.mostRecentlyInvalidatedAt;
      a = a.status;
      if (typeof e === "number" && (b == null || e > b))
        return { status: "stale" };
      if (a === "missing") return { status: "missing" };
      if (c != null && d != null) {
        e = c <= Date.now() - d;
        if (e) return { status: "stale" };
      }
      return { status: "available", fetchTime: (b = c) != null ? b : null };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/getPendingOperationsForFragment",
  ["relay-runtime/query/fetchQueryInternal"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
      "relay-runtime/query/fetchQueryInternal"
    ).getPromiseForActiveRequest;
    function a(a, b, c) {
      var d = [],
        e = g(a, c);
      if (e != null) d = [c];
      else {
        a = a.getOperationTracker().getPendingOperationsAffectingOwner(c);
        d = (c = a == null ? void 0 : a.pendingOperations) != null ? c : [];
        e = (c = a == null ? void 0 : a.promise) != null ? c : null;
      }
      if (!e) return null;
      a =
        (c =
          (a = d) == null
            ? void 0
            : a
                .map(function (a) {
                  return a.node.params.name;
                })
                .join(",")) != null
          ? c
          : null;
      (a == null || a.length === 0) && (a = "Unknown pending operation");
      c = b.name;
      b = a === c ? "Relay(" + a + ")" : "Relay(" + a + ":" + c + ")";
      e.displayName = b;
      return { promise: e, pendingOperations: d };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/isScalarAndEqual",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a === b && (a === null || typeof a !== "object");
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/RelayModernFragmentSpecResolver",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/getPendingOperationsForFragment",
    "relay-runtime/util/isScalarAndEqual",
    "relay-runtime/util/recycleNodesInto",
    "relay-runtime/util/reportMissingRequiredFields",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createRequestDescriptor,
      j = b("relay-runtime/store/RelayModernSelector").areEqualSelectors,
      k = b("relay-runtime/store/RelayModernSelector").createReaderSelector,
      l = b("relay-runtime/store/RelayModernSelector").getSelectorsFromObject;
    a = (function () {
      function a(a, b, c, d, e) {
        var f = this;
        this.$9 = function () {
          (f.$8 = !0), typeof f.$1 === "function" && f.$1();
        };
        this.$1 = d;
        this.$2 = a;
        this.$4 = {};
        this.$5 = b;
        this.$6 = {};
        this.$7 = {};
        this.$8 = !1;
        this.$3 = e;
        this.setProps(c);
      }
      var c = a.prototype;
      c.dispose = function () {
        for (var a in this.$7)
          Object.prototype.hasOwnProperty.call(this.$7, a) && o(this.$7[a]);
      };
      c.resolve = function () {
        if (this.$8) {
          var a = this.$4,
            c;
          for (var d in this.$7)
            if (Object.prototype.hasOwnProperty.call(this.$7, d)) {
              var e = this.$7[d],
                f = a[d];
              if (e) {
                e = e.resolve();
                (c || e !== f) &&
                  ((c = c || babelHelpers["extends"]({}, a)), (c[d] = e));
              } else {
                e = this.$6[d];
                e = e !== void 0 ? e : null;
                (c || !b("relay-runtime/util/isScalarAndEqual")(e, f)) &&
                  ((c = c || babelHelpers["extends"]({}, a)), (c[d] = e));
              }
            }
          this.$4 = c || a;
          this.$8 = !1;
        }
        return this.$4;
      };
      c.setCallback = function (a, c) {
        (this.$1 = c),
          b("relay-runtime/util/RelayFeatureFlags")
            .ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0 && this.setProps(a);
      };
      c.setProps = function (a) {
        this.$6 = {};
        var b = l(this.$5, a);
        for (var c in b)
          if (Object.prototype.hasOwnProperty.call(b, c)) {
            var d = b[c],
              e = this.$7[c];
            d == null
              ? (e != null && e.dispose(), (e = null))
              : d.kind === "PluralReaderSelector"
              ? e == null
                ? (e = new n(
                    this.$2.environment,
                    this.$3,
                    d,
                    this.$1 != null,
                    this.$9
                  ))
                : (e instanceof n || g(0, 4761, c), e.setSelector(d))
              : e == null
              ? (e = new m(
                  this.$2.environment,
                  this.$3,
                  d,
                  this.$1 != null,
                  this.$9
                ))
              : (e instanceof m || g(0, 4762, c), e.setSelector(d));
            this.$6[c] = a[c];
            this.$7[c] = e;
          }
        this.$8 = !0;
      };
      c.setVariables = function (a, b) {
        for (var c in this.$7)
          if (Object.prototype.hasOwnProperty.call(this.$7, c)) {
            var d = this.$7[c];
            d && d.setVariables(a, b);
          }
        this.$8 = !0;
      };
      return a;
    })();
    var m = (function () {
        function a(a, c, d, e, f) {
          var g = this;
          this.$9 = function (a) {
            (g.$2 = a.data),
              (g.$4 = a.isMissingData),
              (g.$5 = a.missingRequiredFields),
              g.$1();
          };
          var h = a.lookup(d);
          this.$1 = f;
          this.$2 = h.data;
          this.$4 = h.isMissingData;
          this.$5 = h.missingRequiredFields;
          this.$3 = a;
          this.$6 = c;
          this.$7 = d;
          b("relay-runtime/util/RelayFeatureFlags")
            .ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0
            ? e && (this.$8 = a.subscribe(h, this.$9))
            : (this.$8 = a.subscribe(h, this.$9));
        }
        var c = a.prototype;
        c.dispose = function () {
          this.$8 && (this.$8.dispose(), (this.$8 = null));
        };
        c.resolve = function () {
          if (
            b("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_RELAY_CONTAINERS_SUSPENSE === !0 &&
            this.$4 === !0
          ) {
            var a = b("relay-runtime/util/getPendingOperationsForFragment")(
                this.$3,
                this.$7.node,
                this.$7.owner
              ),
              c = a == null ? void 0 : a.promise;
            if (c != null)
              if (this.$6)
                b("warning")(
                  !1,
                  "Relay: Relay Container for fragment `%s` has missing data and would suspend. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.",
                  this.$7.node.name
                );
              else {
                a =
                  (a = a == null ? void 0 : a.pendingOperations) != null
                    ? a
                    : [];
                b("warning")(
                  !1,
                  "Relay: Relay Container for fragment `%s` suspended. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.",
                  this.$7.node.name
                );
                this.$3.__log({
                  name: "suspense.fragment",
                  data: this.$2,
                  fragment: this.$7.node,
                  isRelayHooks: !1,
                  isMissingData: this.$4,
                  isPromiseCached: !1,
                  pendingOperations: a,
                });
                throw c;
              }
          }
          this.$5 != null &&
            b("relay-runtime/util/reportMissingRequiredFields")(
              this.$3,
              this.$5
            );
          return this.$2;
        };
        c.setSelector = function (a) {
          if (this.$8 != null && j(a, this.$7)) return;
          this.dispose();
          var c = this.$3.lookup(a);
          this.$2 = b("relay-runtime/util/recycleNodesInto")(this.$2, c.data);
          this.$4 = c.isMissingData;
          this.$5 = c.missingRequiredFields;
          this.$7 = a;
          this.$8 = this.$3.subscribe(c, this.$9);
        };
        c.setVariables = function (a, c) {
          if ((h || (h = b("areEqual")))(a, this.$7.variables)) return;
          c = i(c, a);
          a = k(this.$7.node, this.$7.dataID, a, c);
          this.setSelector(a);
        };
        return a;
      })(),
      n = (function () {
        function a(a, b, c, d, e) {
          var f = this;
          this.$8 = function (a) {
            (f.$6 = !0), f.$1();
          };
          this.$1 = e;
          this.$2 = [];
          this.$3 = a;
          this.$4 = [];
          this.$6 = !0;
          this.$5 = b;
          this.$7 = d;
          this.setSelector(c);
        }
        var b = a.prototype;
        b.dispose = function () {
          this.$4.forEach(o);
        };
        b.resolve = function () {
          if (this.$6) {
            var a = this.$2,
              b;
            for (var c = 0; c < this.$4.length; c++) {
              var d = a[c],
                e = this.$4[c].resolve();
              (b || e !== d) && ((b = b || a.slice(0, c)), b.push(e));
            }
            !b &&
              this.$4.length !== a.length &&
              (b = a.slice(0, this.$4.length));
            this.$2 = b || a;
            this.$6 = !1;
          }
          return this.$2;
        };
        b.setSelector = function (a) {
          a = a.selectors;
          while (this.$4.length > a.length) {
            var b = this.$4.pop();
            b.dispose();
          }
          for (var b = 0; b < a.length; b++)
            b < this.$4.length
              ? this.$4[b].setSelector(a[b])
              : (this.$4[b] = new m(this.$3, this.$5, a[b], this.$7, this.$8));
          this.$6 = !0;
        };
        b.setVariables = function (a, b) {
          this.$4.forEach(function (c) {
            return c.setVariables(a, b);
          }),
            (this.$6 = !0);
        };
        return a;
      })();
    function o(a) {
      a && a.dispose();
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/createFragmentSpecResolver",
  ["relay-runtime/store/RelayModernFragmentSpecResolver", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g) {
      return new (b("relay-runtime/store/RelayModernFragmentSpecResolver"))(
        a,
        d,
        e,
        g,
        f
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/createRelayContext",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      h || ((h = a.createContext(null)), (i = a));
      a === i || g(0, 14299, a.version);
      return h;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/store/readInlineData",
  [
    "invariant",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/query/GraphQLTag").getInlineDataFragment,
      i = b("relay-runtime/store/RelayStoreUtils").FRAGMENTS_KEY;
    function a(a, b) {
      a = h(a);
      if (b == null) return b;
      typeof b === "object" || g(0, 17729, typeof b);
      b = (b = b[i]) == null ? void 0 : b[a.name];
      b != null || g(0, 17728, a.name);
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/subscription/requestSubscription",
  [
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/RelayModernSelector",
    "warning",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/query/GraphQLTag").getRequest,
      h = b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createOperationDescriptor,
      i = b("relay-runtime/store/RelayModernSelector").createReaderSelector;
    function a(a, c) {
      var d = g(c.subscription);
      if (d.params.operationKind !== "subscription")
        throw new Error("requestSubscription: Must use Subscription operation");
      var e = c.configs,
        f = c.onCompleted,
        j = c.onError,
        k = c.onNext,
        l = c.variables,
        m = c.cacheConfig,
        n = h(d, l, m);
      b("warning")(
        !(c.updater && e),
        "requestSubscription: Expected only one of `updater` and `configs` to be provided"
      );
      l = e
        ? b("relay-runtime/mutations/RelayDeclarativeMutationConfig").convert(
            e,
            d,
            null,
            c.updater
          )
        : c;
      m = l.updater;
      e = a.execute({ operation: n, updater: m }).subscribe({
        next: function (b) {
          if (k != null) {
            var c = n.fragment;
            if (Array.isArray(b)) {
              var d;
              d =
                (d = b[0]) == null
                  ? void 0
                  : (d = d.extensions) == null
                  ? void 0
                  : d.__relay_subscription_root_id;
            } else {
              d =
                (b = b.extensions) == null
                  ? void 0
                  : b.__relay_subscription_root_id;
            }
            typeof d === "string" && (c = i(c.node, d, c.variables, c.owner));
            b = a.lookup(c).data;
            k(b);
          }
        },
        error: j,
        complete: f,
      });
      return { dispose: e.unsubscribe };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/RelayProfiler",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {},
      h = { stop: function () {} };
    a = {
      profile: function (a, b) {
        var c = g[a];
        if (c && c.length > 0) {
          var d = [];
          for (var e = c.length - 1; e >= 0; e--) {
            var f = c[e](a, b);
            d.unshift(f);
          }
          return {
            stop: function (a) {
              d.forEach(function (b) {
                return b(a);
              });
            },
          };
        }
        return h;
      },
      attachProfileHandler: function (a, b) {
        Object.prototype.hasOwnProperty.call(g, a) || (g[a] = []), g[a].push(b);
      },
      detachProfileHandler: function (a, b) {
        Object.prototype.hasOwnProperty.call(g, a) && i(g[a], b);
      },
    };
    function i(a, b) {
      b = a.indexOf(b);
      b !== -1 && a.splice(b, 1);
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/createPayloadFor3DField",
  ["relay-runtime/store/RelayStoreUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/store/RelayStoreUtils").getModuleComponentKey,
      h = b("relay-runtime/store/RelayStoreUtils").getModuleOperationKey;
    function a(a, b, c, d) {
      d = babelHelpers["extends"]({}, d);
      d[g(a)] = c;
      d[h(a)] = b;
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/isEmptyObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;
    function a(a) {
      for (var b in a) if (g.call(a, b)) return !1;
      return !0;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/getFragmentIdentifier",
  [
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/isEmptyObject",
    "relay-runtime/util/stableCopy",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("relay-runtime/store/RelayModernSelector").getDataIDsFromFragment,
      i = b("relay-runtime/store/RelayModernSelector").getVariablesFromFragment,
      j = b("relay-runtime/store/RelayModernSelector").getSelector;
    function a(a, c) {
      var d = j(a, c);
      d =
        d == null
          ? "null"
          : d.kind === "SingularReaderSelector"
          ? d.owner.identifier
          : "[" +
            d.selectors
              .map(function (a) {
                return a.owner.identifier;
              })
              .join(",") +
            "]";
      var e = i(a, c);
      c = h(a, c);
      if (
        b("relay-runtime/util/RelayFeatureFlags")
          .ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION
      )
        return (
          d +
          "/" +
          a.name +
          "/" +
          (e == null || b("relay-runtime/util/isEmptyObject")(e)
            ? "{}"
            : JSON.stringify(
                (g || (g = b("relay-runtime/util/stableCopy")))(e)
              )) +
          "/" +
          (typeof c === "undefined"
            ? "missing"
            : c == null
            ? "null"
            : Array.isArray(c)
            ? "[" + c.join(",") + "]"
            : c)
        );
      else {
        return (
          d +
          "/" +
          a.name +
          "/" +
          JSON.stringify((g || (g = b("relay-runtime/util/stableCopy")))(e)) +
          "/" +
          ((d = JSON.stringify(c)) != null ? d : "missing")
        );
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/getRefetchMetadata",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c;
      ((c = a.metadata) == null ? void 0 : c.plural) !== !0 ||
        g(0, 14163, a.name, b, a.name, b);
      c = (c = a.metadata) == null ? void 0 : c.refetch;
      c != null || g(0, 14164, b, a.name);
      a = c.operation["default"] ? c.operation["default"] : c.operation;
      var d = c.fragmentPathInResult;
      typeof a !== "string" || g(0, 14165, b);
      b = c.identifierField;
      b == null || typeof b === "string" || g(0, 21796);
      return {
        fragmentRefPathInResponse: d,
        identifierField: b,
        refetchableRequest: a,
        refetchMetadata: c,
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/getPaginationMetadata",
  ["invariant", "relay-runtime/util/getRefetchMetadata"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, c) {
      var d,
        e = b("relay-runtime/util/getRefetchMetadata")(a, c),
        f = e.refetchableRequest;
      e = e.refetchMetadata;
      var h = e.connection;
      h != null || g(0, 14162, c, a.name);
      var i = h.path;
      d = (
        (d = (d = a.metadata) == null ? void 0 : d.connection) != null ? d : []
      )[0];
      d != null || g(0, 14162, c, a.name);
      c = e.identifierField;
      c == null || typeof c === "string" || g(0, 21796);
      return {
        connectionPathInFragmentData: i,
        identifierField: c,
        paginationRequest: f,
        paginationMetadata: h,
        stream: d.stream === !0,
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/getPaginationVariables",
  ["invariant", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, c, d, e, f, h) {
      var i = h.backward;
      h = h.forward;
      if (a === "backward") {
        (i != null && i.count != null && i.cursor != null) || g(0, 19801);
        b("warning")(
          !Object.prototype.hasOwnProperty.call(f, i.cursor),
          "Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.",
          i.cursor
        );
        b("warning")(
          !Object.prototype.hasOwnProperty.call(f, i.count),
          "Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.",
          i.count
        );
        a = babelHelpers["extends"](
          {},
          e,
          f,
          ((a = {}), (a[i.cursor] = d), (a[i.count] = c), a)
        );
        h && h.cursor && (a[h.cursor] = null);
        h && h.count && (a[h.count] = null);
        return a;
      }
      (h != null && h.count != null && h.cursor != null) || g(0, 19802);
      b("warning")(
        !Object.prototype.hasOwnProperty.call(f, h.cursor),
        "Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.",
        h.cursor
      );
      b("warning")(
        !Object.prototype.hasOwnProperty.call(f, h.count),
        "Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.",
        h.count
      );
      e = babelHelpers["extends"](
        {},
        e,
        f,
        ((a = {}), (a[h.cursor] = d), (a[h.count] = c), a)
      );
      i && i.cursor && (e[i.cursor] = null);
      i && i.count && (e[i.count] = null);
      return e;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/util/getValueAtPath",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = a;
      for (
        var b = b,
          c = Array.isArray(b),
          d = 0,
          b = c
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= b.length) break;
          e = b[d++];
        } else {
          d = b.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        if (a == null) return null;
        typeof e === "number"
          ? (Array.isArray(a) || g(0, 14107), (a = a[e]))
          : ((typeof a === "object" && !Array.isArray(a)) || g(0, 14106),
            (a = a[e]));
      }
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime",
  [
    "Promise",
    "relay-runtime/handlers/RelayDefaultHandlerProvider",
    "relay-runtime/handlers/connection/ConnectionHandler",
    "relay-runtime/handlers/connection/ConnectionInterface",
    "relay-runtime/handlers/connection/MutationHandlers",
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/mutations/applyOptimisticMutation",
    "relay-runtime/mutations/commitLocalUpdate",
    "relay-runtime/mutations/commitMutation",
    "relay-runtime/network/RelayNetwork",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/network/RelayQueryResponseCache",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/query/PreloadableQueryRegistry",
    "relay-runtime/query/fetchQuery",
    "relay-runtime/query/fetchQueryInternal",
    "relay-runtime/query/fetchQuery_DEPRECATED",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernEnvironment",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayModernStore",
    "relay-runtime/store/RelayOperationTracker",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/ViewerPattern",
    "relay-runtime/store/createFragmentSpecResolver",
    "relay-runtime/store/createRelayContext",
    "relay-runtime/store/isRelayModernEnvironment",
    "relay-runtime/store/readInlineData",
    "relay-runtime/subscription/requestSubscription",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayDefaultHandleKey",
    "relay-runtime/util/RelayError",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/RelayProfiler",
    "relay-runtime/util/RelayReplaySubject",
    "relay-runtime/util/createPayloadFor3DField",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/getFragmentIdentifier",
    "relay-runtime/util/getPaginationMetadata",
    "relay-runtime/util/getPaginationVariables",
    "relay-runtime/util/getPendingOperationsForFragment",
    "relay-runtime/util/getRefetchMetadata",
    "relay-runtime/util/getRelayHandleKey",
    "relay-runtime/util/getRequestIdentifier",
    "relay-runtime/util/getValueAtPath",
    "relay-runtime/util/isPromise",
    "relay-runtime/util/isScalarAndEqual",
    "relay-runtime/util/recycleNodesInto",
    "relay-runtime/util/reportMissingRequiredFields",
    "relay-runtime/util/stableCopy",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    a = b("relay-runtime/store/ClientID").generateClientID;
    c = b("relay-runtime/store/ClientID").generateUniqueClientID;
    d = b("relay-runtime/store/ClientID").isClientID;
    e.exports = {
      Environment: b("relay-runtime/store/RelayModernEnvironment"),
      Network: b("relay-runtime/network/RelayNetwork"),
      Observable: b("relay-runtime/network/RelayObservable"),
      QueryResponseCache: b("relay-runtime/network/RelayQueryResponseCache"),
      RecordSource: b("relay-runtime/store/RelayRecordSource"),
      Record: g || (g = b("relay-runtime/store/RelayModernRecord")),
      ReplaySubject: b("relay-runtime/util/RelayReplaySubject"),
      Store: b("relay-runtime/store/RelayModernStore"),
      areEqualSelectors: b("relay-runtime/store/RelayModernSelector")
        .areEqualSelectors,
      createFragmentSpecResolver: b(
        "relay-runtime/store/createFragmentSpecResolver"
      ),
      createNormalizationSelector: b("relay-runtime/store/RelayModernSelector")
        .createNormalizationSelector,
      createOperationDescriptor: b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createOperationDescriptor,
      createReaderSelector: b("relay-runtime/store/RelayModernSelector")
        .createReaderSelector,
      createRequestDescriptor: b(
        "relay-runtime/store/RelayModernOperationDescriptor"
      ).createRequestDescriptor,
      getDataIDsFromFragment: b("relay-runtime/store/RelayModernSelector")
        .getDataIDsFromFragment,
      getDataIDsFromObject: b("relay-runtime/store/RelayModernSelector")
        .getDataIDsFromObject,
      getNode: b("relay-runtime/query/GraphQLTag").getNode,
      getFragment: b("relay-runtime/query/GraphQLTag").getFragment,
      getInlineDataFragment: b("relay-runtime/query/GraphQLTag")
        .getInlineDataFragment,
      getModuleComponentKey: b("relay-runtime/store/RelayStoreUtils")
        .getModuleComponentKey,
      getModuleOperationKey: b("relay-runtime/store/RelayStoreUtils")
        .getModuleOperationKey,
      getPaginationFragment: b("relay-runtime/query/GraphQLTag")
        .getPaginationFragment,
      getPluralSelector: b("relay-runtime/store/RelayModernSelector")
        .getPluralSelector,
      getRefetchableFragment: b("relay-runtime/query/GraphQLTag")
        .getRefetchableFragment,
      getRequest: b("relay-runtime/query/GraphQLTag").getRequest,
      getRequestIdentifier: b("relay-runtime/util/getRequestIdentifier"),
      getSelector: b("relay-runtime/store/RelayModernSelector").getSelector,
      getSelectorsFromObject: b("relay-runtime/store/RelayModernSelector")
        .getSelectorsFromObject,
      getSingularSelector: b("relay-runtime/store/RelayModernSelector")
        .getSingularSelector,
      getStorageKey: b("relay-runtime/store/RelayStoreUtils").getStorageKey,
      getVariablesFromFragment: b("relay-runtime/store/RelayModernSelector")
        .getVariablesFromFragment,
      getVariablesFromObject: b("relay-runtime/store/RelayModernSelector")
        .getVariablesFromObject,
      getVariablesFromPluralFragment: b(
        "relay-runtime/store/RelayModernSelector"
      ).getVariablesFromPluralFragment,
      getVariablesFromSingularFragment: b(
        "relay-runtime/store/RelayModernSelector"
      ).getVariablesFromSingularFragment,
      reportMissingRequiredFields: b(
        "relay-runtime/util/reportMissingRequiredFields"
      ),
      graphql: b("relay-runtime/query/GraphQLTag").graphql,
      isFragment: b("relay-runtime/query/GraphQLTag").isFragment,
      isInlineDataFragment: b("relay-runtime/query/GraphQLTag")
        .isInlineDataFragment,
      isRequest: b("relay-runtime/query/GraphQLTag").isRequest,
      readInlineData: b("relay-runtime/store/readInlineData"),
      MutationTypes: b("relay-runtime/mutations/RelayDeclarativeMutationConfig")
        .MutationTypes,
      RangeOperations: b(
        "relay-runtime/mutations/RelayDeclarativeMutationConfig"
      ).RangeOperations,
      DefaultHandlerProvider: b(
        "relay-runtime/handlers/RelayDefaultHandlerProvider"
      ),
      ConnectionHandler: b(
        "relay-runtime/handlers/connection/ConnectionHandler"
      ),
      MutationHandlers: b("relay-runtime/handlers/connection/MutationHandlers"),
      VIEWER_ID: b("relay-runtime/store/ViewerPattern").VIEWER_ID,
      VIEWER_TYPE: b("relay-runtime/store/ViewerPattern").VIEWER_TYPE,
      applyOptimisticMutation: b(
        "relay-runtime/mutations/applyOptimisticMutation"
      ),
      commitLocalUpdate: b("relay-runtime/mutations/commitLocalUpdate"),
      commitMutation: b("relay-runtime/mutations/commitMutation"),
      fetchQuery: b("relay-runtime/query/fetchQuery"),
      fetchQuery_DEPRECATED: b("relay-runtime/query/fetchQuery_DEPRECATED"),
      isRelayModernEnvironment: b(
        "relay-runtime/store/isRelayModernEnvironment"
      ),
      requestSubscription: b("relay-runtime/subscription/requestSubscription"),
      ConnectionInterface: b(
        "relay-runtime/handlers/connection/ConnectionInterface"
      ),
      PreloadableQueryRegistry: b(
        "relay-runtime/query/PreloadableQueryRegistry"
      ),
      RelayProfiler: b("relay-runtime/util/RelayProfiler"),
      createPayloadFor3DField: b("relay-runtime/util/createPayloadFor3DField"),
      RelayConcreteNode: b("relay-runtime/util/RelayConcreteNode"),
      RelayError: b("relay-runtime/util/RelayError"),
      RelayFeatureFlags: b("relay-runtime/util/RelayFeatureFlags"),
      DEFAULT_HANDLE_KEY: b("relay-runtime/util/RelayDefaultHandleKey")
        .DEFAULT_HANDLE_KEY,
      FRAGMENTS_KEY: b("relay-runtime/store/RelayStoreUtils").FRAGMENTS_KEY,
      FRAGMENT_OWNER_KEY: b("relay-runtime/store/RelayStoreUtils")
        .FRAGMENT_OWNER_KEY,
      ID_KEY: b("relay-runtime/store/RelayStoreUtils").ID_KEY,
      REF_KEY: b("relay-runtime/store/RelayStoreUtils").REF_KEY,
      REFS_KEY: b("relay-runtime/store/RelayStoreUtils").REFS_KEY,
      ROOT_ID: b("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      ROOT_TYPE: b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      TYPENAME_KEY: b("relay-runtime/store/RelayStoreUtils").TYPENAME_KEY,
      deepFreeze: h || (h = b("relay-runtime/util/deepFreeze")),
      generateClientID: a,
      generateUniqueClientID: c,
      getRelayHandleKey: b("relay-runtime/util/getRelayHandleKey"),
      isClientID: d,
      isPromise: b("relay-runtime/util/isPromise"),
      isScalarAndEqual: b("relay-runtime/util/isScalarAndEqual"),
      recycleNodesInto: b("relay-runtime/util/recycleNodesInto"),
      stableCopy: i || (i = b("relay-runtime/util/stableCopy")),
      getFragmentIdentifier: b("relay-runtime/util/getFragmentIdentifier"),
      getRefetchMetadata: b("relay-runtime/util/getRefetchMetadata"),
      getPaginationMetadata: b("relay-runtime/util/getPaginationMetadata"),
      getPaginationVariables: b("relay-runtime/util/getPaginationVariables"),
      getPendingOperationsForFragment: b(
        "relay-runtime/util/getPendingOperationsForFragment"
      ),
      getValueAtPath: b("relay-runtime/util/getValueAtPath"),
      __internal: {
        OperationTracker: b("relay-runtime/store/RelayOperationTracker"),
        createRelayContext: b("relay-runtime/store/createRelayContext"),
        getOperationVariables: b("relay-runtime/store/RelayConcreteVariables")
          .getOperationVariables,
        fetchQuery: b("relay-runtime/query/fetchQueryInternal").fetchQuery,
        fetchQueryDeduped: b("relay-runtime/query/fetchQueryInternal")
          .fetchQueryDeduped,
        getPromiseForActiveRequest: b("relay-runtime/query/fetchQueryInternal")
          .getPromiseForActiveRequest,
        getObservableForActiveRequest: b(
          "relay-runtime/query/fetchQueryInternal"
        ).getObservableForActiveRequest,
      },
    };
  },
  null
);
__d(
  "CometDisableDarkModeMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "DisableDarkModeResponsePayload",
            kind: "LinkedField",
            name: "disable_dark_mode",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "product", value: "COMET" },
                    ],
                    kind: "ScalarField",
                    name: "dark_mode_setting",
                    storageKey: 'dark_mode_setting(product:"COMET")',
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometDisableDarkModeMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometDisableDarkModeMutation",
          selections: b,
        },
        params: {
          id: "3802756036440473",
          metadata: {},
          name: "CometDisableDarkModeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometEnableDarkModeMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "EnableDarkModeResponsePayload",
            kind: "LinkedField",
            name: "enable_dark_mode",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "product", value: "COMET" },
                    ],
                    kind: "ScalarField",
                    name: "dark_mode_setting",
                    storageKey: 'dark_mode_setting(product:"COMET")',
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometEnableDarkModeMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometEnableDarkModeMutation",
          selections: b,
        },
        params: {
          id: "5507017796035425",
          metadata: {},
          name: "CometEnableDarkModeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "interaction-tracing-metrics",
  ["performanceNavigationStart", "performanceNow"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = new Map(),
      i = new Map(),
      j = new Map(),
      k = {},
      l = b("performanceNavigationStart")();
    a = function () {
      var a = new Map(j),
        c = function (b) {
          a.forEach(function (a) {
            b(a);
          });
        },
        d = {
          addBootload: function (a, b, d, e) {
            c(function (c) {
              var f = a.join(";");
              c.bootloads[f] = {
                allResourcesDownloaded: e,
                components: a,
                duration: d,
                end: b + d - l,
                start: b - l,
              };
            });
          },
          addGlobalMetadata: function (a, b) {
            (k[a] = b), d.addMetadata(a, b);
          },
          addMarkerPoint: function (a, d, e, f) {
            var h =
              e !== null && e !== void 0
                ? e
                : (g || (g = b("performanceNow")))();
            c(function (b) {
              h >= b.start &&
                ((b.markerPoints[a] = { timestamp: h, type: d }),
                f && (b.markerPoints[a].data = f));
            });
          },
          addMetadata: function (a, b) {
            c(function (c) {
              c.metadata[a] = b;
            });
          },
          addRequireDeferred: function (a, b) {
            var d = [];
            c(function (c) {
              if (c.requireDeferreds[a] != null) return;
              c = c.requireDeferreds[a] = { start: b };
              d.push(c);
            });
            return function (a, c) {
              d.forEach(function (d) {
                (d.end = a),
                  (d.duration = a - b),
                  c && (d.alreadyRequired = !0);
              });
            };
          },
          addSubspan: function (a, b, d, e, f) {
            var g = { data: f, end: e, start: d, type: b };
            c(function (b) {
              b.subSpans[a] ? b.subSpans[a].push(g) : (b.subSpans[a] = [g]);
            });
          },
          addTag: function (a, b) {
            c(function (c) {
              c.tagSet[a] || (c.tagSet[a] = new Set()), c.tagSet[a].add(b);
            });
          },
          forEach: function (a) {
            c(function (b) {
              a(b);
            });
          },
        };
      return d;
    };
    var m = {
      addFactoryTiming: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.factoryTimings.push(b);
      },
      addGlobalMetadata: function (a, b, c) {
        (k[b] = c), m.addMetadata(a, b, c);
      },
      addHeroBootload: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.heroBootloads.push(b);
      },
      addHeroRelay: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.heroRelay.push(b);
      },
      addHiddenTiming: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.hiddenTimings = b;
      },
      addImagePreloader: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.imagePreloaderTimings[b] = c;
      },
      addMarkerPoint: function (a, c, d, e, f) {
        e === void 0 && (e = (g || (g = b("performanceNow")))());
        a = i.get(a);
        if (!a) return;
        e >= a.start &&
          ((a.markerPoints[c] = { timestamp: e, type: d }),
          f && (a.markerPoints[c].data = f));
      },
      addMetadata: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.metadata[b] = c;
      },
      addOfflineTiming: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.offlineTimings = b;
      },
      addPayloadResource: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.payloadResources[b] = c;
      },
      addPayloadTiming: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.payloadTimings[b] = c;
      },
      addReactRender: function (a, b, c, d, e, f, g) {
        a = i.get(a);
        if (!a) return;
        e = {
          actualDuration: e,
          baseDuration: f,
          duration: d - c,
          end: d,
          phase: g,
          start: c,
        };
        a.reactRender[b] ? a.reactRender[b].push(e) : (a.reactRender[b] = [e]);
        a.commitSet.add(d);
      },
      addSubspan: function (a, b, c, d, e, f) {
        a = i.get(a);
        if (!a) return;
        f = { data: f, end: e, start: d, type: c };
        a.subSpans[b] ? a.subSpans[b].push(f) : (a.subSpans[b] = [f]);
      },
      addTag: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.tagSet[b] || (a.tagSet[b] = new Set());
        a.tagSet[b].add(c);
      },
      addTracedInteraction: function (a, b, c) {
        b = {
          bootloads: {},
          commitSet: new Set(),
          factoryTimings: [],
          hasVcReport: !1,
          heroBootloads: [],
          heroRelay: [],
          hiddenTimings: [],
          imagePreloaderTimings: {},
          markerPoints: {},
          metadata: {},
          navigationTiming: {},
          offlineTimings: [],
          payloadResources: {},
          payloadTimings: {},
          reactRender: {},
          requireDeferreds: {},
          start: b,
          subSpans: {},
          tagSet: {},
          traceId: a,
          vcStateLog: null,
          wasCanceled: !1,
          wasOffline: !1,
        };
        for (var d in k) b.metadata[d] = k[d];
        i.set(a, b);
        j.set(a, b);
        h.set(a, c);
        return b;
      },
      complete: function (a) {
        var c = i.get(a);
        if (c && c.completed == null) {
          c.metadata.endedByHeroComplete = 1;
          c.completed = (g || (g = b("performanceNow")))();
          var d = h.get(a);
          d && d(c);
          h["delete"](a);
          j["delete"](a);
        }
      },
      currentInteractionLogger: a,
      dump: function () {
        var a = {};
        i.forEach(function (b, c) {
          a[c] = babelHelpers["extends"]({}, b, {
            e2e:
              b.completed != null
                ? ((b.completed - b.start) / 1e3).toFixed(2)
                : "?",
          });
        });
        return a;
      },
      get: function (a) {
        return i.get(a);
      },
      removeMarkerPoint: function (a, b) {
        a = i.get(a);
        a && delete a.markerPoints[b];
      },
      setInteractionClass: function (a, b) {
        a = i.get(a);
        a && (a.interactionClass = b);
      },
      setInteractionType: function (a, b, c, d) {
        a = i.get(a);
        a && ((a.interactionClass = b), (a.type = c), (a.qplEvent = d));
      },
    };
    f.InteractionTracingMetricsCore = m;
  },
  null
);
__d(
  "InteractionTracingMetrics",
  ["interaction-tracing-metrics"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d(
      "interaction-tracing-metrics"
    ).InteractionTracingMetricsCore;
  },
  98
);
__d(
  "CometRelayQueryProfiler",
  [
    "InteractionTracingMetrics",
    "emptyFunction",
    "performanceNow",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      if (!b) return c("emptyFunction");
      var d = c("InteractionTracingMetrics").currentInteractionLogger(),
        e = c("performanceNow")();
      d.addMarkerPoint("Relay_" + b.queryName + "_start", "RelayQuery", e);
      return function (a) {
        var f = { usedCache: b.usedCache, usedPrefetcher: b.usedPrefetcher };
        a && (f.error = a.message);
        d.forEach(function (a) {
          c("InteractionTracingMetrics").removeMarkerPoint(
            a.traceId,
            "Relay_" + b.queryName + "_start"
          );
        });
        d.addSubspan(
          "Relay_" + b.queryName,
          "RelayQuery",
          e,
          c("performanceNow")(),
          f
        );
      };
    }
    function a() {
      d("relay-runtime").RelayProfiler.attachProfileHandler(
        "fetchRelayQuery",
        h
      );
    }
    g.install = a;
  },
  98
);
__d(
  "RelayFBCometMutations",
  ["recoverableViolation", "relay-runtime", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1;
    function a(a) {
      return function (b, e, f) {
        var g = e.variables.input || {},
          i = g.actor_id,
          j = g.client_mutation_id;
        g = babelHelpers.objectWithoutPropertiesLoose(g, [
          "actor_id",
          "client_mutation_id",
        ]);
        c("warning")(
          j == null,
          "RelayFBCometMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically."
        );
        var k;
        b.options != null &&
        b.options.actorID != null &&
        typeof b.options.actorID === "string"
          ? (k = b.options.actorID)
          : c("recoverableViolation")(
              "RelayFBCometMutations: Expected a non-nullable string actorID to be set on the Relay environment. https://fburl.com/wiki/m19zmtlh",
              "relay"
            );
        if (i != null && i !== k) {
          var l = d("relay-runtime").getRequest(e.mutation);
          l = l.params.name;
          c("recoverableViolation")(
            'You passed an actor_id parameter "' +
              i +
              '" to mutation "' +
              l +
              '", but the parameter was overridden by the actor_id "' +
              ((l = k) != null ? l : "") +
              '" defined in the ActorContext that wraps your React tree. Update your code to avoid passing the actor_id parameter to your mutation.',
            "relay"
          );
          k = i;
        }
        i = babelHelpers["extends"]({}, e.variables, {
          input: babelHelpers["extends"]({}, g, {
            actor_id: k,
            client_mutation_id: (l = j) != null ? l : "" + h++,
          }),
        });
        return a(
          b,
          {
            configs: e.configs,
            mutation: e.mutation,
            onCompleted: e.onCompleted,
            onError: e.onError,
            optimisticResponse: e.optimisticResponse,
            optimisticUpdater: e.optimisticUpdater,
            updater: e.updater,
            uploadables: e.uploadables,
            variables: i,
          },
          f
        );
      };
    }
    g.addFBisms = a;
  },
  98
);
__d(
  "react-relay/ReactRelayContext",
  ["react", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    a = g || b("react");
    c = b("relay-runtime").__internal.createRelayContext;
    e.exports = c(a);
  },
  null
);
__d(
  "react-relay/relay-hooks/useRelayEnvironment",
  ["invariant", "react", "react-relay/ReactRelayContext"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = c.useContext;
    function a() {
      var a = i(b("react-relay/ReactRelayContext"));
      a != null || g(0, 21945);
      return a.environment;
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayFBEnvironmentActorID",
  ["invariant", "react-relay/relay-hooks/useRelayEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.options;
      (b != null && b.actorID != null) ||
        g(
          0,
          47961,
          b == null ? "missing options" : "missing options.actorID",
          typeof a.configName === "string" ? a.configName : "<missing>"
        );
      typeof b.actorID === "string" || g(0, void 0);
      return b.actorID;
    }
    function a() {
      var a = b("react-relay/relay-hooks/useRelayEnvironment")();
      return h(a);
    }
    e.exports = { getActorID: h, useActorID: a };
  },
  null
);
__d(
  "RelayFBModuleLoader",
  ["invariant", "replaceTransportMarkers"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = new Map();
    function a(a) {
      a = k(a);
      return a.getModuleIfRequired();
    }
    function b(a) {
      a = k(a);
      return j(a);
    }
    function d(b) {
      b = k(b);
      var a = b.getModuleIfRequired();
      if (a == null) throw j(b);
      return a;
    }
    function j(a) {
      var b = a.getModuleId(),
        c = i.get(b);
      c == null &&
        ((c = a.load()["finally"](function () {
          i["delete"](b);
        })),
        i.set(b, c));
      c.displayName = "3DModule(" + b + ")";
      return c;
    }
    function k(a) {
      (a == null || typeof a !== "object") && h(0, 17188, a);
      if (
        typeof a.getModuleId === "function" &&
        typeof a.getModuleIfRequired === "function" &&
        typeof a.load === "function"
      )
        return a;
      var b = { module: babelHelpers["extends"]({}, a) };
      c("replaceTransportMarkers")({ relativeTo: null }, b, "module");
      b = b.module;
      (b != null &&
        typeof b === "object" &&
        typeof b.getModuleId === "function" &&
        typeof b.getModuleIfRequired === "function" &&
        typeof b.preload === "function" &&
        typeof b.load === "function") ||
        h(0, 17189, JSON.stringify(a));
      return b;
    }
    g.get = a;
    g.load = b;
    g.read = d;
    g.getModuleReference = k;
  },
  98
);
__d(
  "react-relay/relay-hooks/MatchContainer",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.useMemo;
    function a(a) {
      var b = a.fallback,
        c = a.loader,
        d = a.match;
      a = a.props;
      if (d != null && typeof d !== "object")
        throw new Error(
          "MatchContainer: Expected `match` value to be an object or null/undefined."
        );
      d = (d = d) != null ? d : {};
      var e = d.__id,
        f = d.__fragments,
        g = d.__fragmentOwner,
        j = d.__fragmentPropName;
      d = d.__module_component;
      if (
        (g != null && typeof g !== "object") ||
        (j != null && typeof j !== "string") ||
        (f != null && typeof f !== "object") ||
        (e != null && typeof e !== "string")
      )
        throw new Error(
          "MatchContainer: Invalid 'match' value, expected an object that has a '...SomeFragment' spread."
        );
      c = d != null ? c(d) : null;
      d = i(
        function () {
          if (j != null && e != null && f != null) {
            var a = {};
            a[j] = { __id: e, __fragments: f, __fragmentOwner: g };
            return a;
          }
          return null;
        },
        [e, f, g, j]
      );
      if (c != null && d != null)
        return h.jsx(c, babelHelpers["extends"]({}, a, d));
      else {
        return (c = b) != null ? c : null;
      }
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a;
  },
  null
);
__d(
  "RelayFBMatchContainer",
  ["RelayFBModuleLoader", "react", "react-relay/relay-hooks/MatchContainer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.fallback,
        e = a.match;
      a = a.props;
      return h.jsx(c("react-relay/relay-hooks/MatchContainer"), {
        fallback: b,
        loader: d("RelayFBModuleLoader").read,
        match: e,
        props: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RelayFBModuleResource",
  ["RelayFBModuleLoader", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (a === null || typeof a !== "object")
        throw c("unrecoverableViolation")(
          "ModuleResource.read(): Expected `match` value to be an object.",
          "relay"
        );
      a = a.__module_component;
      return a == null ? null : d("RelayFBModuleLoader").read(a);
    }
    function b(a) {
      if (a === null || typeof a !== "object")
        throw c("unrecoverableViolation")(
          "ModuleResource.getModuleId(): Expected `match` value to be an object.",
          "relay"
        );
      a = a.__module_component;
      if (a == null) return null;
      a = d("RelayFBModuleLoader").getModuleReference(a);
      return a.getModuleId();
    }
    g.read = a;
    g.getModuleId = b;
  },
  98
);
__d(
  "randomInt",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function a(a, b) {
      a = b === void 0 ? [0, a] : [a, b];
      b = a[0];
      a = a[1];
      a > b || h(0, 1180, a, b);
      var c = this.random;
      c = c && typeof c === "function" ? c : Math.random;
      return Math.floor(b + c() * (a - b));
    }
    g["default"] = a;
  },
  98
);
__d(
  "ClientIDs",
  ["randomInt"],
  function (a, b, c, d, e, f, g) {
    var h = new Set();
    function a() {
      var a = Date.now();
      a = a + ":" + (c("randomInt")(0, 4294967295) + 1);
      h.add(a);
      return a;
    }
    function b(a) {
      return h.has(a);
    }
    g.getNewClientID = a;
    g.isExistingClientID = b;
  },
  98
);
__d(
  "RelayFBSubscription",
  ["ClientIDs", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (c, d) {
        var e = d.variables.input,
          f = "client_subscription_id" in e;
        b("warning")(
          !f,
          "RelayFBSubscription: found `client_subscription_id` in `input`. In the Facebook context, `client_subscription_id` are added automatically."
        );
        f = babelHelpers["extends"]({}, d.variables, {
          input: babelHelpers["extends"]({}, e, {
            client_subscription_id: b("ClientIDs").getNewClientID(),
          }),
        });
        return a(c, {
          variables: f,
          subscription: d.subscription,
          onCompleted: d.onCompleted,
          onError: d.onError,
          onNext: d.onNext,
          updater: d.updater,
          configs: d.configs,
          cacheConfig: d.cacheConfig,
        });
      };
    }
    e.exports = { addFBisms: a };
  },
  null
);
__d(
  "react-relay/relay-hooks/loadQuery",
  ["invariant", "react", "relay-runtime", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || b("react"),
      j = b("relay-runtime").PreloadableQueryRegistry,
      k = b("relay-runtime").ReplaySubject,
      l = b("relay-runtime").createOperationDescriptor,
      m = b("relay-runtime").getRequest,
      n = b("relay-runtime").getRequestIdentifier,
      o = b("relay-runtime").Observable,
      p = b("relay-runtime").RelayFeatureFlags,
      q = b("relay-runtime").__internal.fetchQueryDeduped,
      r = null,
      s = 100001;
    function a() {
      if (r === null) {
        var a;
        r =
          (a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null
            ? void 0
            : (a = a.ReactCurrentDispatcher) == null
            ? void 0
            : a.current;
      }
    }
    function c(a, c, d, e, f) {
      var h;
      h =
        (h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null
          ? void 0
          : (h = h.ReactCurrentDispatcher) == null
          ? void 0
          : h.current;
      b("warning")(
        r == null || h !== r,
        "Relay: `%s` should not be called inside a React render function.",
        (h = e == null ? void 0 : e.__nameForWarning) != null ? h : "loadQuery"
      );
      s++;
      var t =
          (h = e == null ? void 0 : e.fetchPolicy) != null
            ? h
            : "store-or-network",
        u = babelHelpers["extends"](
          {},
          e == null ? void 0 : e.networkCacheConfig,
          { force: !0 }
        ),
        v,
        w = !1,
        x = function (c, b) {
          w = !0;
          return a.executeWithSource({ operation: c, source: b });
        },
        y = new k();
      h = o.create(function (a) {
        return y.subscribe(a);
      });
      var z,
        A = null;
      e = !1;
      var B = function (b) {
          e = !0;
          var c = new k();
          if (p.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === !0) {
            var f = "raw-network-request-" + n(b, d);
            f = q(a, f, function () {
              var c = a.getNetwork();
              return c.execute(b, d, u);
            });
          } else {
            var g = a.getNetwork();
            f = g.execute(b, d, u);
          }
          g = f.subscribe({
            error: function (a) {
              (A = a), c.error(a);
            },
            next: function (a) {
              c.next(a);
            },
            complete: function () {
              c.complete();
            },
          });
          f = g.unsubscribe;
          z = f;
          return o.create(function (a) {
            var b = c.subscribe(a);
            return function () {
              b.unsubscribe(), z();
            };
          });
        },
        C,
        D = function (b, c) {
          p.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === !0 && (e = !0);
          b = q(a, b.request.identifier, c).subscribe({
            error: function (a) {
              y.error(a);
            },
            next: function (a) {
              y.next(a);
            },
            complete: function () {
              y.complete();
            },
          });
          C = b.unsubscribe;
        },
        E = function (b) {
          var c = l(b, d, u);
          v = a.retain(c);
          if (t === "store-only") return;
          var e = t !== "store-or-network" || a.check(c).status !== "available";
          e &&
            D(c, function () {
              var a = B(b.params);
              a = x(c, a);
              return a;
            });
        },
        F;
      if (c.kind === "PreloadableConcreteRequest") {
        var G = c;
        G = G.params;
        var H = G;
        H = H.id;
        H !== null || g(0, 22441, G.name);
        var I = j.get(H);
        if (I != null) E(I);
        else {
          var J = t === "store-only" ? null : B(G);
          I = j.onLoad(H, function (b) {
            F();
            var c = l(b, d, u);
            v = a.retain(c);
            J != null &&
              D(c, function () {
                return x(c, J);
              });
          });
          F = I.dispose;
        }
      } else {
        I = c;
        c = m(I);
        G = c.params;
        H = G.cacheID != null ? G.cacheID : G.id;
        E(c);
      }
      var K = !1,
        L = !1,
        M = !1,
        N = function () {
          if (L) return;
          v && v.dispose();
          L = !0;
        },
        O = function () {
          if (M) return;
          w ? C && C() : z && z();
          F && F();
          M = !0;
        };
      return {
        kind: "PreloadedQuery",
        environment: a,
        environmentProviderOptions: f,
        dispose: function () {
          if (K) return;
          N();
          O();
          K = !0;
        },
        releaseQuery: N,
        cancelNetworkRequest: O,
        fetchKey: s,
        id: H,
        get isDisposed() {
          return K || L;
        },
        get networkError() {
          return A;
        },
        name: G.name,
        networkCacheConfig: u,
        fetchPolicy: t,
        source: e ? h : void 0,
        variables: d,
      };
    }
    e.exports = { loadQuery: c, useTrackLoadQueryInRender: a };
  },
  null
);
__d(
  "react-relay/relay-hooks/LRUCache",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a) {
        (this.$1 = a), this.$1 > 0 || g(0, 11399), (this.$2 = new Map());
      }
      var b = a.prototype;
      b.set = function (a, b) {
        this.$2["delete"](a);
        this.$2.set(a, b);
        if (this.$2.size > this.$1) {
          a = this.$2.keys().next();
          a.done || this.$2["delete"](a.value);
        }
      };
      b.get = function (a) {
        var b = this.$2.get(a);
        b != null && (this.$2["delete"](a), this.$2.set(a, b));
        return b;
      };
      b.has = function (a) {
        return this.$2.has(a);
      };
      b["delete"] = function (a) {
        this.$2["delete"](a);
      };
      b.size = function () {
        return this.$2.size;
      };
      b.capacity = function () {
        return this.$1 - this.$2.size;
      };
      b.clear = function () {
        this.$2.clear();
      };
      return a;
    })();
    function a(a) {
      return new h(a);
    }
    e.exports = { create: a };
  },
  null
);
__d(
  "react-relay/relay-hooks/FragmentResource",
  ["invariant", "react-relay/relay-hooks/LRUCache", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (c = b("relay-runtime")).getFragmentIdentifier,
      i = c.getPendingOperationsForFragment,
      j = c.getSelector,
      k = c.isPromise,
      l = c.recycleNodesInto,
      m = c.reportMissingRequiredFields;
    d = typeof WeakMap === "function";
    var n = 1e6,
      o = Object.freeze([]);
    function p(a) {
      return Array.isArray(a)
        ? a.some(function (a) {
            return a.isMissingData;
          })
        : a.isMissingData;
    }
    function q(a, b, c) {
      return Array.isArray(b)
        ? {
            cacheKey: a,
            snapshot: b,
            data: b.map(function (a) {
              return a.data;
            }),
            isMissingData: p(b),
            storeEpoch: c,
          }
        : {
            cacheKey: a,
            snapshot: b,
            data: b.data,
            isMissingData: p(b),
            storeEpoch: c,
          };
    }
    var r = (function () {
      function a(a) {
        (this.$1 = a),
          (this.$2 = b("react-relay/relay-hooks/LRUCache").create(n));
      }
      var c = a.prototype;
      c.read = function (a, b, c, d) {
        return this.readWithIdentifier(a, b, h(a, b), c, d);
      };
      c.readWithIdentifier = function (a, b, c, d, e) {
        var f,
          h = this.$1;
        if (b == null)
          return {
            cacheKey: c,
            data: null,
            isMissingData: !1,
            snapshot: null,
            storeEpoch: 0,
          };
        var i = h.getStore().getEpoch();
        if (
          (a == null
            ? void 0
            : (f = a.metadata) == null
            ? void 0
            : f.plural) === !0
        ) {
          Array.isArray(b) ||
            g(
              0,
              13793,
              e != null ? " for key `" + e + "`" : "",
              a.name,
              typeof b,
              a.name
            );
          if (b.length === 0)
            return {
              cacheKey: c,
              data: o,
              isMissingData: !1,
              snapshot: o,
              storeEpoch: i,
            };
        }
        f = this.$2.get(c);
        if (f != null) {
          if (f.kind === "pending" && k(f.promise)) {
            h.__log({
              name: "suspense.fragment",
              data: f.result.data,
              fragment: a,
              isRelayHooks: !0,
              isMissingData: f.result.isMissingData,
              isPromiseCached: !0,
              pendingOperations: f.pendingOperations,
            });
            throw f.promise;
          }
          if (f.kind === "done" && f.result.snapshot) {
            this.$3(f.result.snapshot);
            return f.result;
          }
        }
        f = j(a, b);
        f != null ||
          g(
            0,
            37286,
            a.name,
            a.name,
            d,
            a.name,
            e == null ? "a fragment reference" : "the `" + e + "`",
            d
          );
        b =
          f.kind === "PluralReaderSelector"
            ? f.selectors.map(function (a) {
                return h.lookup(a);
              })
            : h.lookup(f);
        e = q(c, b, i);
        if (!e.isMissingData) {
          this.$3(b);
          this.$2.set(c, { kind: "done", result: e });
          return e;
        }
        d = f.kind === "PluralReaderSelector" ? f.selectors[0].owner : f.owner;
        f = this.$4(c, a, d, e);
        if (f != null && k(f.promise)) {
          h.__log({
            name: "suspense.fragment",
            data: e.data,
            fragment: a,
            isRelayHooks: !0,
            isPromiseCached: !1,
            isMissingData: e.isMissingData,
            pendingOperations: f.pendingOperations,
          });
          throw f.promise;
        }
        this.$3(b);
        return q(c, b, i);
      };
      c.$3 = function (a) {
        var b = this;
        Array.isArray(a)
          ? a.forEach(function (a) {
              a.missingRequiredFields != null &&
                m(b.$1, a.missingRequiredFields);
            })
          : a.missingRequiredFields != null &&
            m(this.$1, a.missingRequiredFields);
      };
      c.readSpec = function (a, b, c) {
        var d = {};
        for (var e in a) d[e] = this.read(a[e], b[e], c, e);
        return d;
      };
      c.subscribe = function (a, b) {
        var c = this,
          d = this.$1,
          e = a.cacheKey,
          f = a.snapshot;
        if (!f) return { dispose: function () {} };
        a = this.checkMissedUpdates(a);
        var h = a[0],
          i = a[1];
        h && b();
        var j = [];
        Array.isArray(f)
          ? (Array.isArray(i) || g(0, 18208),
            i.forEach(function (a, f) {
              j.push(
                d.subscribe(a, function (a) {
                  var g = d.getStore().getEpoch();
                  c.$5(e, i, a, f, g);
                  b();
                })
              );
            }))
          : ((i != null && !Array.isArray(i)) || g(0, 18209),
            j.push(
              d.subscribe(i, function (a) {
                var f = d.getStore().getEpoch();
                c.$2.set(e, { kind: "done", result: q(e, a, f) });
                b();
              })
            ));
        return {
          dispose: function () {
            j.map(function (a) {
              return a.dispose();
            }),
              c.$2["delete"](e);
          },
        };
      };
      c.subscribeSpec = function (a, b) {
        var c = this,
          d = Object.keys(a).map(function (d) {
            return c.subscribe(a[d], b);
          });
        return {
          dispose: function () {
            d.forEach(function (a) {
              a.dispose();
            });
          },
        };
      };
      c.checkMissedUpdates = function (a) {
        var b = this.$1,
          c = a.snapshot;
        if (!c) return [!1, null];
        var d = null;
        d = b.getStore().getEpoch();
        if (a.storeEpoch === d) return [!1, a.snapshot];
        a = a.cacheKey;
        if (Array.isArray(c)) {
          var e = !1,
            f = [];
          c.forEach(function (d, g) {
            var a = b.lookup(d.selector);
            d = d.data;
            var c = a.data;
            c = l(d, c);
            c !== d &&
              ((a = babelHelpers["extends"]({}, a, { data: c })), (e = !0));
            f[g] = a;
          });
          e && this.$2.set(a, { kind: "done", result: q(a, f, d) });
          return [e, f];
        }
        var g = b.lookup(c.selector);
        c = c.data;
        var h = g.data;
        h = l(c, h);
        g = {
          data: h,
          isMissingData: g.isMissingData,
          seenRecords: g.seenRecords,
          selector: g.selector,
          missingRequiredFields: g.missingRequiredFields,
        };
        h !== c && this.$2.set(a, { kind: "done", result: q(a, g, d) });
        return [h !== c, g];
      };
      c.checkMissedUpdatesSpec = function (a) {
        var b = this;
        return Object.keys(a).some(function (c) {
          return b.checkMissedUpdates(a[c])[0];
        });
      };
      c.$4 = function (a, b, c, d) {
        var e = this;
        b = i(this.$1, b, c);
        if (b == null) return null;
        c = b.promise;
        b = b.pendingOperations;
        var f = c
          .then(function () {
            e.$2["delete"](a);
          })
          ["catch"](function (b) {
            e.$2["delete"](a);
          });
        f.displayName = c.displayName;
        this.$2.set(a, {
          kind: "pending",
          pendingOperations: b,
          promise: f,
          result: d,
        });
        return { promise: f, pendingOperations: b };
      };
      c.$5 = function (a, b, c, d, e) {
        var f = this.$2.get(a);
        if (k(f)) {
          s(c.selector.node.name);
          return;
        }
        f = f == null ? void 0 : (f = f.result) == null ? void 0 : f.snapshot;
        if (f && !Array.isArray(f)) {
          s(c.selector.node.name);
          return;
        }
        f = f ? [].concat(f) : [].concat(b);
        f[d] = c;
        this.$2.set(a, { kind: "done", result: q(a, f, e) });
      };
      return a;
    })();
    function s(a) {
      g(0, 20347, a);
    }
    function t(a) {
      return new r(a);
    }
    var u = d ? new WeakMap() : new Map();
    function a(a) {
      var b = u.get(a);
      if (b) return b;
      b = t(a);
      u.set(a, b);
      return b;
    }
    e.exports = {
      createFragmentResource: t,
      getFragmentResourceForEnvironment: a,
    };
  },
  null
);
__d(
  "react-relay/relay-hooks/useFragmentNode",
  [
    "react",
    "react-relay/relay-hooks/FragmentResource",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b(
        "react-relay/relay-hooks/FragmentResource"
      ).getFragmentResourceForEnvironment;
    c = g || (g = b("react"));
    var i = c.useEffect,
      j = c.useRef,
      k = c.useState,
      l = b("relay-runtime").getFragmentIdentifier;
    function a(a, c, d) {
      var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
        f = h(e),
        g = j(!1),
        m = k(0),
        n = m[1];
      m = l(a, c);
      var o = f.readWithIdentifier(a, c, m, d),
        p = j(!0);
      function q() {
        p.current = !0;
        var a = f.checkMissedUpdates(o)[0];
        a && s();
      }
      function r() {
        p.current = !1;
      }
      function s() {
        if (g.current === !1 || p.current === !1) return;
        n(function (a) {
          return a + 1;
        });
      }
      i(
        function () {
          g.current = !0;
          var a = f.subscribe(o, s);
          return function () {
            (g.current = !1), a.dispose();
          };
        },
        [e, m]
      );
      return { data: o.data, disableStoreUpdates: r, enableStoreUpdates: q };
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useStaticFragmentNodeWarning",
  ["react", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    d = c.useRef;
    function a(a, b) {}
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useFragment",
  [
    "react",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    d = c.useDebugValue;
    var i = b("relay-runtime").getFragment;
    function a(a, c) {
      h();
      a = i(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of useFragment()"
      );
      a = b("react-relay/relay-hooks/useFragmentNode")(a, c, "useFragment()");
      c = a.data;
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/ProfilerContext",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    a = g || b("react");
    c = a.createContext({
      wrapPrepareQueryResource: function (a) {
        return a();
      },
    });
    e.exports = c;
  },
  null
);
__d(
  "react-relay/relay-hooks/QueryResource",
  [
    "invariant",
    "Promise",
    "react-relay/relay-hooks/LRUCache",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime").isPromise,
      i = 1e3,
      j = "store-or-network",
      k = 5 * 60 * 1e3;
    c = typeof WeakMap === "function";
    function l(a) {
      return a.request.node.params.metadata.live !== void 0;
    }
    function m(a, b, c, d, e) {
      c = (c = c) != null ? c : j;
      d = (d = d) != null ? d : a.UNSTABLE_getDefaultRenderPolicy();
      a = c + "-" + d + "-" + b.request.identifier;
      return e != null ? a + "-" + e : a;
    }
    function n(a, b) {
      var c;
      c = {
        __id: a.fragment.dataID,
        __fragments:
          ((c = {}), (c[a.fragment.node.name] = a.request.variables), c),
        __fragmentOwner: a.request,
      };
      return {
        cacheIdentifier: b,
        fragmentNode: a.request.node.fragment,
        fragmentRef: c,
        operation: a,
      };
    }
    var o = 2e5;
    function p(a, b, c, d, e, f) {
      var h = l(b),
        i = d,
        j = 0,
        m = null,
        n = null,
        p = e,
        q = function (a) {
          j++;
          j === 1 && (m = a.retain(b));
          return {
            dispose: function () {
              (j = Math.max(0, j - 1)),
                j === 0 && (m != null || g(0, 14187), m.dispose(), (m = null)),
                f(r);
            },
          };
        },
        r = {
          cacheIdentifier: a,
          id: o++,
          processedPayloadsCount: 0,
          operationAvailability: c,
          getValue: function () {
            return i;
          },
          setValue: function (a) {
            i = a;
          },
          getRetainCount: function () {
            return j;
          },
          getNetworkSubscription: function () {
            return p;
          },
          setNetworkSubscription: function (a) {
            h && p != null && p.unsubscribe(), (p = a);
          },
          temporaryRetain: function (a) {
            if (a.isServer()) return { dispose: function () {} };
            var b = q(a),
              c = null;
            a = function () {
              clearTimeout(c),
                (c = null),
                (n = null),
                b.dispose(),
                h && j <= 0 && p != null && p.unsubscribe();
            };
            c = setTimeout(a, k);
            n != null && n();
            n = a;
            return {
              dispose: function () {
                n && n();
              },
            };
          },
          permanentRetain: function (a) {
            var b = q(a);
            n != null && (n(), (n = null));
            return {
              dispose: function () {
                b.dispose(), h && j <= 0 && p != null && p.unsubscribe();
              },
            };
          },
          releaseTemporaryRetain: function () {
            n != null && (n(), (n = null));
          },
        };
      return r;
    }
    var q = (function () {
      function a(a) {
        var c = this;
        this.$5 = function (a) {
          a.getRetainCount() <= 0 && c.$2["delete"](a.cacheIdentifier);
        };
        this.$1 = a;
        this.$2 = b("react-relay/relay-hooks/LRUCache").create(i);
      }
      var c = a.prototype;
      c.prepare = function (a, b, c, d, e, f, g) {
        f = m(this.$1, a, c, d, f);
        return this.prepareWithIdentifier(f, a, b, c, d, e, g);
      };
      c.prepareWithIdentifier = function (a, b, c, d, e, f, g) {
        var i = this.$1;
        d = (d = d) != null ? d : j;
        e = (e = e) != null ? e : i.UNSTABLE_getDefaultRenderPolicy();
        var k = this.$2.get(a),
          l = null,
          m = k != null;
        k == null &&
          (k = this.$3(
            a,
            b,
            c,
            d,
            e,
            g,
            babelHelpers["extends"]({}, f, {
              unsubscribe: function (a) {
                l != null && l.dispose();
                var b = f == null ? void 0 : f.unsubscribe;
                b && b(a);
              },
            })
          ));
        l = k.temporaryRetain(i);
        a = k.getValue();
        if (h(a)) {
          i.__log({
            name: "suspense.query",
            fetchPolicy: d,
            isPromiseCached: m,
            operation: b,
            queryAvailability: k.operationAvailability,
            renderPolicy: e,
          });
          throw a;
        }
        if (a instanceof Error) throw a;
        return a;
      };
      c.retain = function (a, b) {
        var c = this.$1,
          d = a.cacheIdentifier,
          e = a.operation;
        d = this.$4(d, e, null, a, null);
        var f = d.permanentRetain(c);
        c.__log({
          name: "queryresource.retain",
          profilerContext: b,
          resourceID: d.id,
        });
        return {
          dispose: function () {
            f.dispose();
          },
        };
      };
      c.releaseTemporaryRetain = function (a) {
        a = this.$2.get(a.cacheIdentifier);
        a != null && a.releaseTemporaryRetain();
      };
      c.TESTS_ONLY__getCacheEntry = function (a, b, c, d) {
        var e = this.$1;
        e = m(e, a, b, c, d);
        return this.$2.get(e);
      };
      c.$4 = function (a, b, c, d, e) {
        var f = this.$2.get(a);
        f == null && ((f = p(a, b, c, d, e, this.$5)), this.$2.set(a, f));
        return f;
      };
      c.$3 = function (a, c, d, e, f, h, i) {
        var j = this,
          k = this.$1,
          m = k.check(c),
          o = m.status,
          q = o === "available";
        o = q || (f === "partial" && o !== "stale");
        var r,
          s,
          t = function () {};
        switch (e) {
          case "store-only":
            r = !1;
            s = !0;
            break;
          case "store-or-network":
            r = !q;
            s = o;
            break;
          case "store-and-network":
            r = !0;
            s = o;
            break;
          case "network-only":
          default:
            r = !0;
            s = !1;
            break;
        }
        if (s) {
          q = n(c, a);
          o = p(a, c, m, q, null, this.$5);
          this.$2.set(a, o);
        }
        if (r) {
          var u = n(c, a),
            v;
          d.subscribe({
            start: function (b) {
              v = b;
              var d = j.$2.get(a);
              d && d.setNetworkSubscription(v);
              d = i == null ? void 0 : i.start;
              if (d) {
                var e = babelHelpers["extends"]({}, b, {
                  unsubscribe: function () {
                    l(c) && b.unsubscribe();
                  },
                });
                d(e);
              }
            },
            next: function () {
              var b = j.$4(a, c, m, u, v);
              b.processedPayloadsCount += 1;
              b.setValue(u);
              t();
              b = i == null ? void 0 : i.next;
              if (b != null) {
                var d = k.lookup(c.fragment);
                b(d);
              }
            },
            error: function (d) {
              var e = j.$4(a, c, m, d, v);
              e.processedPayloadsCount === 0
                ? e.setValue(d)
                : b("warning")(
                    !1,
                    "QueryResource: An incremental payload for query `%` returned an error: `%`:`%`.",
                    c.fragment.node.name,
                    d.message,
                    d.stack
                  );
              t();
              v = null;
              e.setNetworkSubscription(null);
              e = i == null ? void 0 : i.error;
              e && e(d);
            },
            complete: function () {
              t();
              v = null;
              var b = j.$2.get(a);
              b && b.setNetworkSubscription(null);
              b = i == null ? void 0 : i.complete;
              b && b();
            },
            unsubscribe: i == null ? void 0 : i.unsubscribe,
          });
          q = this.$2.get(a);
          if (!q) {
            o = new (b("Promise"))(function (a) {
              t = a;
            });
            o.displayName = "Relay(" + c.fragment.node.name + ")";
            q = p(a, c, m, o, v, this.$5);
            this.$2.set(a, q);
          }
        } else {
          d = i == null ? void 0 : i.complete;
          d && d();
        }
        o = this.$2.get(a);
        o != null || g(0, 13816);
        k.__log({
          name: "queryresource.fetch",
          resourceID: o.id,
          operation: c,
          profilerContext: h,
          fetchPolicy: e,
          renderPolicy: f,
          queryAvailability: m,
          shouldFetch: r,
        });
        return o;
      };
      return a;
    })();
    function r(a) {
      return new q(a);
    }
    var s = c ? new WeakMap() : new Map();
    function a(a) {
      var b = s.get(a);
      if (b) return b;
      b = r(a);
      s.set(a, b);
      return b;
    }
    e.exports = {
      createQueryResource: r,
      getQueryResourceForEnvironment: a,
      getQueryCacheIdentifier: m,
    };
  },
  null
);
__d(
  "react-relay/relay-hooks/useFetchTrackingRef",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useCallback,
      i = c.useEffect,
      j = c.useRef;
    function a() {
      var a = j(null),
        b = j(!1),
        c = h(function () {
          a.current != null && (a.current.unsubscribe(), (a.current = null)),
            (b.current = !1);
        }, []),
        d = h(function (c) {
          (a.current = c), (b.current = !0);
        }, []),
        e = h(function () {
          (a.current = null), (b.current = !1);
        }, []);
      i(
        function () {
          return c;
        },
        [c]
      );
      return {
        isFetchingRef: b,
        startFetch: d,
        disposeFetch: c,
        completeFetch: e,
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useLazyLoadQueryNode",
  [
    "react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/useFetchTrackingRef",
    "react-relay/relay-hooks/useFragmentNode",
    "react-relay/relay-hooks/useRelayEnvironment",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = b(
        "react-relay/relay-hooks/QueryResource"
      ).getQueryResourceForEnvironment,
      i = b("react-relay/relay-hooks/QueryResource").getQueryCacheIdentifier,
      j = c.useContext,
      k = c.useEffect,
      l = c.useState,
      m = c.useRef;
    function a(a) {
      var c = a.query,
        d = a.componentDisplayName,
        e = a.fetchObservable,
        f = a.fetchPolicy,
        g = a.fetchKey,
        n = a.renderPolicy;
      a = b("react-relay/relay-hooks/useRelayEnvironment")();
      var o = j(b("react-relay/relay-hooks/ProfilerContext")),
        p = h(a),
        q = l(0),
        r = q[0],
        s = q[1];
      q = b("react-relay/relay-hooks/useFetchTrackingRef")();
      var t = q.startFetch,
        u = q.completeFetch;
      r = r + "-" + ((q = g) != null ? q : "");
      var v = i(a, c, f, n, r),
        w = o.wrapPrepareQueryResource(function () {
          return p.prepareWithIdentifier(
            v,
            c,
            e,
            f,
            n,
            { start: t, complete: u, error: u },
            o
          );
        }),
        x = m(!1);
      k(function () {
        return function () {
          x.current = !0;
        };
      }, []);
      k(
        function () {
          if (x.current === !0) {
            x.current = !1;
            s(function (a) {
              return a + 1;
            });
            return;
          }
          var a = p.retain(w, o);
          return function () {
            a.dispose();
          };
        },
        [a, v]
      );
      k(function () {
        p.releaseTemporaryRetain(w);
      });
      g = w.fragmentNode;
      q = w.fragmentRef;
      r = b("react-relay/relay-hooks/useFragmentNode")(g, q, d);
      a = r.data;
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useMemoVariables",
  ["areEqual", "react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g, h;
    c = g || b("react");
    var i = c.useMemo,
      j = c.useRef,
      k = c.useState;
    function a(a) {
      var c = j(0),
        d = k(a),
        e = d[0];
      d = d[1];
      e = !(h || (h = b("areEqual")))(a, e);
      if (e) {
        c.current = ((e = c.current) != null ? e : 0) + 1;
        d(a);
      }
      e = i(
        function () {
          return a;
        },
        [c.current]
      );
      return [e, (d = c.current) != null ? d : 0];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useMemoOperationDescriptor",
  ["react", "react-relay/relay-hooks/useMemoVariables", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = b("relay-runtime").createOperationDescriptor,
      i = b("relay-runtime").getRequest,
      j = c.useMemo;
    function a(a, c, d) {
      c = b("react-relay/relay-hooks/useMemoVariables")(c);
      var e = c[0];
      c = b("react-relay/relay-hooks/useMemoVariables")(d || {});
      var f = c[0];
      return j(
        function () {
          return h(i(a), e, f);
        },
        [a, e, f]
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useLazyLoadQuery",
  [
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender,
      h = b("relay-runtime").__internal.fetchQuery;
    function a(a, c, d) {
      g();
      var e = b("react-relay/relay-hooks/useRelayEnvironment")();
      a = b("react-relay/relay-hooks/useMemoOperationDescriptor")(
        a,
        c,
        d && d.networkCacheConfig ? d.networkCacheConfig : { force: !0 }
      );
      c = b("react-relay/relay-hooks/useLazyLoadQueryNode")({
        componentDisplayName: "useLazyLoadQuery()",
        fetchKey: d == null ? void 0 : d.fetchKey,
        fetchObservable: h(e, a),
        fetchPolicy: d == null ? void 0 : d.fetchPolicy,
        query: a,
        renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
      });
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayFlightClientImpl.client",
  [
    "invariant",
    "react-relay/relay-hooks/useFragment",
    "react-relay/relay-hooks/useLazyLoadQuery",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b, d) {
      return c("react-relay/relay-hooks/useLazyLoadQuery")(a, b, {
        fetchPolicy: "store-only",
        UNSTABLE_renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
      });
    }
    function b(a) {
      return a;
    }
    function e(a, b) {
      a = a.params.id;
      a != null || h(0, 23333);
      return { id: a, variables: b };
    }
    f = {
      loadFragmentForClient: b,
      loadQueryForClient: e,
      useFragment: c("react-relay/relay-hooks/useFragment"),
      useReadQuery: a,
      readInlineData: d("relay-runtime").readInlineData,
    };
    g["default"] = f;
  },
  98
);
__d(
  "RelayFlight.hybrid",
  [
    "RelayFlightClientImpl.client",
    "err",
    "relay-runtime/query/GraphQLTag",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    function i() {
      return a.__flight_execution_mode_DO_NOT_USE === "flight";
    }
    function j() {
      if (!i() && h == null) {
        var a = b("RelayFlightClientImpl.client");
        h = a;
      }
      if (h == null)
        throw c("err")(
          "Expected RelayFlight::initialize_INTERNAL_DO_NOT_USE() to be called before using other APIs."
        );
      return h;
    }
    function e(a) {
      if (h != null) {
        c("warning")(
          h === a,
          "RelayFlight::initialize_INTERNAL_DO_NOT_USE(): Already initialized, this module may not be initialized again."
        );
        return;
      }
      h = a;
    }
    var k = function () {
        var a = j();
        return a.readInlineData.apply(a, arguments);
      },
      l = function () {
        var a = j();
        return a.useFragment.apply(a, arguments);
      };
    function f(a, b, c) {
      var d = j();
      return d.useReadQuery(a, b, c);
    }
    function m(a) {
      var b = j();
      return b.loadFragmentForClient(a);
    }
    function n(a, b) {
      var c = j();
      return c.loadQueryForClient(a, b);
    }
    g.isServer_INTERNAL_DO_NOT_USE = i;
    g.initialize_INTERNAL_DO_NOT_USE = e;
    g.readInlineData = k;
    g.useFragment = l;
    g.useReadQuery = f;
    g.loadFragmentForClient = m;
    g.loadQueryForClient = n;
    g.graphql = d("relay-runtime/query/GraphQLTag").graphql;
  },
  98
);
__d(
  "configureRelayFeatureFlagsForWWW",
  ["ReactFlightGating.hybrid", "cr:10503", "gkx", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      (d("relay-runtime").RelayFeatureFlags.ENABLE_RELAY_CONTAINERS_SUSPENSE =
        c("gkx")("1220172")),
        (d("relay-runtime").RelayFeatureFlags.ENABLE_PARTIAL_RENDERING_DEFAULT =
          c("gkx")("1969466")),
        (d("relay-runtime").RelayFeatureFlags.ENABLE_REQUIRED_DIRECTIVES = !0),
        (d("relay-runtime").RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = !0),
        (d(
          "relay-runtime"
        ).RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD = c(
          "ReactFlightGating.hybrid"
        ).isReactFlightEnabled()),
        (d(
          "relay-runtime"
        ).RelayFeatureFlags.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL =
          c("gkx")("1723588")),
        (d(
          "relay-runtime"
        ).RelayFeatureFlags.ENABLE_LOAD_QUERY_REQUEST_DEDUPING =
          c("gkx")("1872325")),
        (d("relay-runtime").RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY =
          !0),
        (d("relay-runtime").RelayFeatureFlags.BATCH_ASYNC_MODULE_UPDATES_FN =
          b("cr:10503")),
        (d(
          "relay-runtime"
        ).RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT =
          c("gkx")("1654")),
        (d(
          "relay-runtime"
        ).RelayFeatureFlags.ENABLE_QUERY_RENDERER_OFFSCREEN_SUPPORT =
          c("gkx")("1665"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "configureRelayForFB",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").ConnectionInterface;
    function a() {
      g.inject({
        CLIENT_MUTATION_ID: "client_mutation_id",
        CURSOR: "cursor",
        EDGES: "edges",
        END_CURSOR: "end_cursor",
        HAS_NEXT_PAGE: "has_next_page",
        HAS_PREV_PAGE: "has_previous_page",
        NODE: "node",
        PAGE_INFO_TYPE: "PageInfo",
        PAGE_INFO: "page_info",
        START_CURSOR: "start_cursor",
      });
    }
    e.exports = a;
  },
  null
);
__d(
  "configureRelayForWWW",
  [
    "FBLogger",
    "configureRelayFeatureFlagsForWWW",
    "configureRelayForFB",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !1;
    function a() {
      if (h) return;
      h = !0;
      c("configureRelayForFB")();
      c("configureRelayFeatureFlagsForWWW")();
      d("relay-runtime").Observable.onUnhandledError(function (a, b) {
        var d = c("FBLogger")("relay");
        a instanceof Error
          ? (d.catching(a),
            b
              ? d.mustfix(
                  "An uncaught error was thrown inside `RelayObservable`."
                )
              : d.warn("An error was caught inside `RelayObservable`."))
          : b
          ? d.mustfix(
              "An uncaught error was thrown inside `RelayObservable` but it was not an instance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.",
              a
            )
          : d.warn(
              "An error was caught inside `RelayObservable` but it was not aninstance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.",
              a
            );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "react-relay/assertFragmentMap",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      (b && typeof b === "object") || g(0, 5879, a, b);
      for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c)) {
          var d = b[c];
          (d && (typeof d === "object" || typeof d === "function")) ||
            g(0, 5880, a, c, d);
        }
    }
    e.exports = a;
  },
  null
);
__d(
  "useFragmentNodes_DEPRECATED",
  [
    "mapObject",
    "react",
    "react-relay/relay-hooks/FragmentResource",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a(a, b, e) {
      var f = c("react-relay/relay-hooks/useRelayEnvironment")(),
        g = d(
          "react-relay/relay-hooks/FragmentResource"
        ).getFragmentResourceForEnvironment(f),
        m = i(!1),
        n = j(0),
        o = n[1];
      n = l(a, b);
      var p = i(0),
        q = i(0);
      f = k(f);
      n = k(n);
      f = f || n;
      n = j(b);
      var r = n[0];
      n = n[1];
      var s = Object.keys(b).filter(function (b) {
          return !Object.prototype.hasOwnProperty.call(a, b);
        }),
        t = s.some(function (a) {
          return r[a] !== b[a];
        });
      s = s.some(function (a) {
        return !d("relay-runtime").isScalarAndEqual(r[a], b[a]);
      });
      s = f || s;
      s && q.current++;
      f && p.current++;
      t && n(b);
      var u = g.readSpec(a, b, e),
        v = i(!0);
      function w() {
        v.current = !0;
        var a = g.checkMissedUpdatesSpec(u);
        a && y();
      }
      function x() {
        v.current = !1;
      }
      function y() {
        var a;
        if (m.current === !1 || v.current === !1) return;
        q.current = ((a = q.current) != null ? a : 0) + 1;
        o(function (a) {
          return a + 1;
        });
      }
      h(
        function () {
          m.current = !0;
          var a = g.subscribeSpec(u, y);
          return function () {
            (m.current = !1), a.dispose();
          };
        },
        [p.current]
      );
      s = c("mapObject")(u, function (a, b) {
        return a.data;
      });
      return {
        data: s,
        disableStoreUpdates: x,
        enableStoreUpdates: w,
        shouldUpdateGeneration: q.current,
      };
    }
    function k(a) {
      var b = j(a),
        c = b[0];
      b = b[1];
      c = c !== a;
      c && b(a);
      return c;
    }
    function l(a, b) {
      return JSON.stringify(
        d("relay-runtime").stableCopy(
          c("mapObject")(a, function (a, c) {
            c = b[c];
            return d("relay-runtime").getFragmentIdentifier(a, c);
          })
        )
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "createSuspenseFragmentContainer_DEPRECATED",
  [
    "mapObject",
    "react",
    "react-relay/assertFragmentMap",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "useFragmentNodes_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a, b) {
      var e = a.displayName || a.name || "Unknown",
        f = "RelaySuspenseFragmentContainer(" + e + ")";
      c("react-relay/assertFragmentMap")(e, b);
      e = b;
      var g = c("mapObject")(e, d("relay-runtime").getFragment);
      function j(b, d) {
        var e = c("react-relay/relay-hooks/useRelayEnvironment")(),
          j = i(
            function () {
              return { environment: e };
            },
            [e]
          ),
          k = c("useFragmentNodes_DEPRECATED")(g, b, f),
          l = k.data;
        k = k.shouldUpdateGeneration;
        return i(
          function () {
            var c;
            return h.jsx(
              a,
              babelHelpers["extends"]({}, b, l, {
                ref: (c = b.componentRef) != null ? c : d,
                relay: j,
              })
            );
          },
          [k, d]
        );
      }
      j.displayName = f;
      b = h.forwardRef(j);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "forEachObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
      for (var d in a) {
        var e = d;
        g.call(a, e) && b.call(c, a[e], e, a);
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "createSuspensePaginationContainer_DEPRECATED",
  [
    "areEqual",
    "createSuspenseFragmentContainer_DEPRECATED",
    "forEachObject",
    "mapObject",
    "react",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "unrecoverableViolation",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useReducer,
      m = b.useRef,
      n = "forward";
    function a(a, b, e) {
      var f = a.displayName || a.name || "Unknown",
        g = c("mapObject")(b, d("relay-runtime").getFragment),
        h = r(g),
        i = d("relay-runtime").getRequest(e.query);
      h = p(a, f, h.direction, s(h), e.getVariables);
      h = c("createSuspenseFragmentContainer_DEPRECATED")(h, b);
      b = o(a, f, g, e.getFragmentRefsFromResponse, i, h);
      return b;
    }
    function o(a, b, e, f, g, k) {
      var n = "RelaySuspensePaginationContainer(" + b + ")";
      a = function (a, b) {
        var o = c("react-relay/relay-hooks/useRelayEnvironment")(),
          p = {};
        c("forEachObject")(e, function (b, c) {
          b = d("relay-runtime").getSelector(b, a[c]);
          b =
            b != null && b.kind === "PluralReaderSelector"
              ? (c =
                  (c = b.selectors[0]) == null ? void 0 : c.owner.variables) !=
                null
                ? c
                : {}
              : (c = b == null ? void 0 : b.owner.variables) != null
              ? c
              : {};
          p = babelHelpers["extends"]({}, p, b);
        });
        var r = d("relay-runtime").getDataIDsFromObject(e, a),
          s = l(q, {
            dataIDs: r,
            mirroredEnvironment: o,
            mirroredParentVariables: p,
            refetchFragmentRefs: {},
            refetchVariables: null,
          }),
          t = s[0],
          u = s[1],
          v = m(!1),
          w = m(null),
          x = function () {
            w.current && (w.current.dispose(), (w.current = null));
          };
        j(function () {
          return function () {
            (v.current = !0), x();
          };
        }, []);
        (o !== t.mirroredEnvironment ||
          !c("areEqual")(p, t.mirroredParentVariables) ||
          !c("areEqual")(t.dataIDs, r)) &&
          (x(),
          u({ dataIDs: r, environment: o, parentVariables: p, type: "reset" }));
        s = i(
          function (a, b) {
            if (v.current === !0) {
              c("warning")(
                !1,
                "Relay: Unexpected fetch on unmounted component `%s`. It looks like some instances of your container still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
                n
              );
              return null;
            }
            a = d("relay-runtime").__internal.getOperationVariables(
              g.operation,
              a
            );
            var e = b && b.force ? { force: !0 } : {},
              h = d("relay-runtime").createOperationDescriptor(g, a, e),
              i = null,
              j = o.retain(h),
              k = {
                dispose: function () {
                  var a = i;
                  i = null;
                  a && a.unsubscribe();
                  j.dispose();
                },
              };
            e = function () {
              var a = {
                complete: function () {
                  x(),
                    u({ type: "complete" }),
                    b && b.onComplete && b.onComplete(null);
                },
                error: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  x(),
                    u({ type: "abort" }),
                    b && b.onComplete && b.onComplete(a);
                }),
                next: function () {
                  var a = o.lookup(h.fragment);
                  u({ fragmentRefs: f(a.data), type: "next" });
                },
                unsubscribe: function () {
                  if (v.current === !0) return;
                  x();
                  u({ type: "abort" });
                },
              };
              i = d("relay-runtime").__internal.fetchQuery(o, h).subscribe(a);
              return k;
            };
            x();
            w.current = e();
            u({ refetchVariables: a, type: "fetch" });
            return k;
          },
          [o]
        );
        return h.jsx(
          k,
          babelHelpers["extends"]({}, a, t.refetchFragmentRefs, {
            forwardedRef: b,
            isLoading: w.current != null,
            parentVariables: (r = t.refetchVariables) != null ? r : p,
            refetch: s,
          })
        );
      };
      a.displayName = n;
      b = h.forwardRef(a);
      return b;
    }
    function p(a, b, e, f, g) {
      return function (j) {
        var l,
          m = j.forwardedRef,
          o = j.isLoading,
          p = j.parentVariables,
          q = j.refetch;
        j.relay;
        var r = babelHelpers.objectWithoutPropertiesLoose(j, [
            "forwardedRef",
            "isLoading",
            "parentVariables",
            "refetch",
            "relay",
          ]),
          s = c("react-relay/relay-hooks/useRelayEnvironment")();
        j = f(r);
        var u = t(b, e, j),
          v = i(
            function (a, b) {
              if (u == null || !u.hasMore) {
                b && b.onComplete && b.onComplete(null);
                return null;
              }
              var f = d("relay-runtime").ConnectionInterface.get(),
                h = f.END_CURSOR;
              f = f.START_CURSOR;
              var i = u.cursor;
              c("warning")(
                i,
                "Relay: Cannot `loadMore` without valid `%s` (got `%s`)",
                e === n ? h : f,
                i
              );
              return q(g(r, { count: a, cursor: i }, p), b);
            },
            [u, q, r, p]
          ),
          w = i(
            function (a, b, c) {
              return q(
                g(
                  r,
                  { count: a, cursor: null },
                  babelHelpers["extends"]({}, p, b || {})
                ),
                babelHelpers["extends"]({}, c, { force: !0 })
              );
            },
            [q, r, p]
          ),
          x = !!(u && u.hasMore && u.cursor);
        j = k(
          function () {
            return {
              environment: s,
              hasMore: x,
              isLoading: o,
              loadMore: v,
              refetchConnection: w,
            };
          },
          [s, x, o, v, w]
        );
        return h.jsx(
          a,
          babelHelpers["extends"]({}, r, {
            ref: (l = r.componentRef) != null ? l : m,
            relay: j,
          })
        );
      };
    }
    function q(a, b) {
      var c;
      switch (b.type) {
        case "reset":
          c = {
            dataIDs: b.dataIDs,
            mirroredEnvironment: b.environment,
            mirroredParentVariables: b.parentVariables,
            refetchFragmentRefs: {},
            refetchVariables: null,
          };
          break;
        case "fetch":
          c = babelHelpers["extends"]({}, a, {
            refetchVariables: b.refetchVariables,
          });
          break;
        case "abort":
          c = babelHelpers["extends"]({}, a);
          break;
        case "next":
          c = babelHelpers["extends"]({}, a, {
            refetchFragmentRefs: b.fragmentRefs,
          });
          break;
        case "complete":
        default:
          c = babelHelpers["extends"]({}, a);
          break;
      }
      return c;
    }
    function r(a) {
      var b = null;
      for (var d in a) {
        var e = a[d];
        e = e && e.metadata && e.metadata.connection;
        if (e != null) {
          if (!Array.isArray(e))
            throw c("unrecoverableViolation")(
              "SuspensePaginationContainer: Expected metadata to be array, got " +
                ("`" + typeof e + "` instead."),
              "relay"
            );
          if (e.length !== 1)
            throw c("unrecoverableViolation")(
              "SuspensePaginationContainer: Only a single @connection is " +
                ("supported, `" + d + "` has " + e.length + "."),
              "relay"
            );
          if (b)
            throw c("unrecoverableViolation")(
              "SuspensePaginationContainer: Only a single fragment with @connection is supported.",
              "relay"
            );
          b = babelHelpers["extends"]({}, e[0], { fragmentName: d });
        }
      }
      if (b === null)
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: A @connection directive must be present.",
          "relay"
        );
      return b;
    }
    function s(a) {
      var b = a.path;
      if (!b)
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Unable to synthesize a getConnectionFromProps function.",
          "relay"
        );
      return function (c) {
        c = c[a.fragmentName];
        for (var d = 0; d < b.length; d++) {
          if (!c || typeof c !== "object") return null;
          c = c[b[d]];
        }
        return c;
      };
    }
    function t(a, b, e) {
      if (e == null) return null;
      var f = d("relay-runtime").ConnectionInterface.get(),
        g = f.EDGES,
        h = f.END_CURSOR,
        i = f.HAS_NEXT_PAGE,
        j = f.HAS_PREV_PAGE,
        k = f.PAGE_INFO;
      f = f.START_CURSOR;
      if (typeof e !== "object")
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Expected `getConnectionFromProps()` in " +
            ("`" + a + "` to return `null` or a plain object with ") +
            (g + " and " + k + " properties, got `" + e + "`."),
          "relay"
        );
      var l = e[g];
      e = e[k];
      if (l == null || e == null) return null;
      if (!Array.isArray(l))
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Expected `getConnectionFromProps()` in " +
            ("`" + a + "` to return an object with " + g + ": Array, got ") +
            ("`" + l + "`."),
          "relay"
        );
      if (typeof e !== "object")
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Expected `getConnectionFromProps()` in " +
            ("`" + a + "` to return an object with " + k + ": Object, ") +
            ("got `" + e + "`."),
          "relay"
        );
      g = b === n ? e[i] : e[j];
      e = b === n ? e[h] : e[f];
      if (typeof g !== "boolean" || (l.length !== 0 && e === void 0)) {
        c("warning")(
          !1,
          "Relay: Cannot paginate without %s fields in `%s`. Be sure to fetch %s (got `%s`) and %s (got `%s`).",
          k,
          a,
          b === n ? i : j,
          g,
          b === n ? h : f,
          e
        );
        return null;
      }
      return { cursor: e, edgeCount: l.length, hasMore: g };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createSuspenseQueryRenderer_DEPRECATED",
  [
    "react",
    "react-relay/ReactRelayContext",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = d("relay-runtime").getRequest(a),
        e = "RelaySuspenseQueryRenderer(" + b.params.name + ")";
      function g(b) {
        var f = b.UNSTABLE_renderPolicy,
          g = b.children,
          k = b.fetchKey,
          l = b.fetchPolicy;
        b = b.variables;
        var m = c("react-relay/relay-hooks/useRelayEnvironment")();
        b = c("react-relay/relay-hooks/useMemoOperationDescriptor")(a, b, {
          force: !0,
        });
        var n = i(
            function () {
              return j(m);
            },
            [m]
          ),
          o = c("react-relay/relay-hooks/useLazyLoadQueryNode")({
            componentDisplayName: e,
            fetchKey: k,
            fetchObservable: d("relay-runtime").__internal.fetchQuery(m, b),
            fetchPolicy: l,
            query: b,
            renderPolicy: f,
          });
        return h.jsx(c("react-relay/ReactRelayContext").Provider, {
          value: n,
          children: i(
            function () {
              return g(o);
            },
            [g, o]
          ),
        });
      }
      g.displayName = g.name + " [from " + f.id + "]";
      g.displayName = e;
      return g;
    }
    function j(a) {
      return { environment: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "RelayMutationQueue",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").commitMutation,
      h = b("relay-runtime").createOperationDescriptor,
      i = b("relay-runtime").getRequest;
    a = (function () {
      function a(a) {
        (this.$2 = null), (this.$3 = new Set()), (this.$1 = a);
      }
      var b = a.prototype;
      b.getQueuedMutations = function () {
        return this.$3;
      };
      b.push = function (a) {
        var b = this,
          c;
        (a.optimisticResponse || a.optimisticUpdater) &&
          (c = this.$1.applyMutation(this.$4(a)));
        var d = function (a) {
            a === void 0 && (a = function () {}),
              (b.$2 = null),
              c && c.dispose(),
              a(),
              b.$5();
          },
          e = {
            configs: a.configs,
            mutation: a.mutation,
            uploadables: a.uploadables,
            updater: a.updater,
            variables: a.variables,
            onCompleted: function (b) {
              d(function () {
                a.onCompleted && a.onCompleted(b);
              });
            },
            onError: function (b) {
              d(function () {
                a.onError && a.onError(b);
              });
            },
          };
        this.$3.add(e);
        this.$5();
        return {
          dispose: function () {
            if (b.$2 && b.$2.config === e) {
              b.$2.disposable.dispose();
              d();
              return;
            }
            var a = b.$3.has(e);
            a && (b.$3["delete"](e), c && c.dispose());
          },
        };
      };
      b.$5 = function () {
        if (this.$2) return;
        var a = j(this.$3);
        if (a === void 0) return;
        this.$2 = { config: a, disposable: this.$6(a) };
      };
      b.$6 = function (a) {
        return g(this.$1, a);
      };
      b.$7 = function (a) {
        var b = i(a.mutation);
        if (b.params.operationKind !== "mutation")
          throw TypeError("enqueueMutation: Expected a mutation");
        if (b.kind !== "Request")
          throw TypeError(
            "enqueueMutation: Expected mutation to be of type request"
          );
        return h(b, a.variables);
      };
      b.$4 = function (a) {
        return {
          operation: this.$7(a),
          response: a.optimisticResponse,
          updater: a.optimisticUpdater,
        };
      };
      return a;
    })();
    function j(a) {
      var b = a.values();
      b = b.next();
      if (b.done) return;
      a["delete"](b.value);
      return b.value;
    }
    e.exports = a;
  },
  null
);
__d(
  "enqueueMutation",
  ["RelayMutationQueue"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = a();
    function a() {
      if (typeof WeakMap === "function") return new WeakMap();
      if (typeof Map === "function") return new Map();
      throw ReferenceError(
        "Cannot use enqueueMutation in this environment. Either WeakMap or Map must be defined to use enqueueMutation."
      );
    }
    function c(a, c) {
      var d = g.get(a);
      d || ((d = new (b("RelayMutationQueue"))(a)), g.set(a, d));
      return d.push(c);
    }
    function d(a) {
      return g.get(a);
    }
    e.exports = { enqueueMutation: c, __internal: { getMutationQueue: d } };
  },
  null
);
__d(
  "isRelayFBLocalEnvironment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.options != null && a.options.isLocal === !0 ? !0 : !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "react-relay/relay-hooks/EntryPointContainer.react",
  [
    "react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/useRelayEnvironment",
    "warning",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || (g = b("react"));
    c = g;
    var i = c.useContext,
      j = c.useEffect;
    function a(a) {
      var c = a.entryPointReference;
      a = a.props;
      b("warning")(
        c.isDisposed === !1,
        "<EntryPointContainer>: Expected entryPointReference to not be disposed yet. This is because disposing the entrypoint marks it for future garbage collection, and as such may no longer be present in the Relay store. In the future, this will become a hard error."
      );
      var d = c.getComponent,
        e = c.queries,
        f = c.entryPoints,
        g = c.extraProps,
        k = c.rootModuleID;
      c = d();
      var l = i(b("react-relay/relay-hooks/ProfilerContext")),
        m = b("react-relay/relay-hooks/useRelayEnvironment")();
      j(
        function () {
          m.__log({
            name: "entrypoint.root.consume",
            profilerContext: l,
            rootModuleID: k,
          });
        },
        [m, l, k]
      );
      return h.jsx(c, { entryPoints: f, extraProps: g, props: a, queries: e });
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/RelayEnvironmentProvider",
  ["react", "react-relay/ReactRelayContext"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.useMemo;
    function a(a) {
      var c = a.children,
        d = a.environment,
        e = a.getEnvironmentForActor;
      a = i(
        function () {
          return { environment: d, getEnvironmentForActor: e };
        },
        [d, e]
      );
      return h.jsx(b("react-relay/ReactRelayContext").Provider, {
        value: a,
        children: c,
      });
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/loadEntryPoint",
  ["react-relay/relay-hooks/loadQuery"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("react-relay/relay-hooks/loadQuery").loadQuery;
    function h(a, b, c) {
      var d = null;
      b.root.getModuleIfRequired() == null && (d = b.root.load());
      c = b.getPreloadProps(c);
      var e = c.queries,
        f = c.entryPoints;
      c = c.extraProps;
      var i = {},
        j = {};
      if (e != null) {
        var k = Object.keys(e);
        k.forEach(function (b) {
          var c = e[b],
            d = c.environmentProviderOptions,
            f = c.options,
            h = c.parameters;
          c = c.variables;
          var j = a.getEnvironment(d);
          i[b] = g(
            j,
            h,
            c,
            {
              fetchPolicy: f == null ? void 0 : f.fetchPolicy,
              networkCacheConfig: f == null ? void 0 : f.networkCacheConfig,
              __nameForWarning: "loadEntryPoint",
            },
            d
          );
        });
      }
      if (f != null) {
        k = Object.keys(f);
        k.forEach(function (b) {
          var c = f[b];
          if (c == null) return;
          var d = c.entryPoint;
          c = c.entryPointParams;
          j[b] = h(a, d, c);
        });
      }
      var l = !1;
      return {
        dispose: function () {
          if (l) return;
          i != null &&
            Object.values(i).forEach(function (a) {
              a = a.dispose;
              a();
            });
          j != null &&
            Object.values(j).forEach(function (a) {
              a = a.dispose;
              a();
            });
          l = !0;
        },
        entryPoints: j,
        extraProps: (k = c) != null ? k : null,
        getComponent: function () {
          var a = b.root.getModuleIfRequired();
          if (a == null) {
            var c;
            d = (c = d) != null ? c : b.root.load();
            throw d;
          }
          return a;
        },
        get isDisposed() {
          return l;
        },
        queries: i,
        rootModuleID: b.root.getModuleId(),
      };
    }
    e.exports = h;
  },
  null
);
__d(
  "react-relay/relay-hooks/useIsMountedRef",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
      i = c.useRef;
    function a() {
      var a = i(!0);
      h(function () {
        a.current = !0;
        return function () {
          a.current = !1;
        };
      }, []);
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useIsOperationNodeActive",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = b("relay-runtime").__internal.getObservableForActiveRequest,
      j = b("relay-runtime").getSelector,
      k = c.useEffect,
      l = c.useState,
      m = c.useMemo;
    function a(a, c) {
      var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
        e = m(
          function () {
            var b = j(a, c);
            if (b == null) return null;
            b.kind === "SingularReaderSelector" || g(0, 21191);
            return i(d, b.owner);
          },
          [d, a, c]
        ),
        f = l(e != null),
        h = f[0],
        n = f[1];
      k(
        function () {
          var a;
          n(e != null);
          if (e != null) {
            var b = function () {
              n(!1);
            };
            a = e.subscribe({ complete: b, error: b });
          }
          return function () {
            a && a.unsubscribe();
          };
        },
        [e]
      );
      return h;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useLoadMoreFunction",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/useFetchTrackingRef",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useIsOperationNodeActive",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useState,
      l = b("relay-runtime").ConnectionInterface,
      m = b("relay-runtime").__internal.fetchQuery,
      n = b("relay-runtime").createOperationDescriptor,
      o = b("relay-runtime").getPaginationVariables,
      p = b("relay-runtime").getValueAtPath,
      q = b("relay-runtime").getSelector;
    function a(a) {
      var c = a.direction,
        d = a.fragmentNode,
        e = a.fragmentRef,
        f = a.fragmentIdentifier,
        h = a.fragmentData,
        l = a.connectionPathInFragmentData,
        p = a.paginationRequest,
        s = a.paginationMetadata,
        t = a.componentDisplayName,
        u = a.observer,
        v = a.onReset,
        w = a.identifierField,
        x = b("react-relay/relay-hooks/useRelayEnvironment")();
      a = b("react-relay/relay-hooks/useFetchTrackingRef")();
      var y = a.isFetchingRef,
        z = a.startFetch,
        A = a.disposeFetch,
        B = a.completeFetch,
        C = w != null && h != null && typeof h === "object" ? h[w] : null,
        D = b("react-relay/relay-hooks/useIsMountedRef")();
      a = k(x);
      var E = a[0];
      a = a[1];
      var F = k(f),
        G = F[0];
      F = F[1];
      var H = b("react-relay/relay-hooks/useIsOperationNodeActive")(d, e);
      E = x !== E || f !== G;
      E && (A(), v(), a(x), F(f));
      G = r(c, d, h, l);
      var I = G.cursor;
      E = G.hasMore;
      j(
        function () {
          return function () {
            A();
          };
        },
        [A]
      );
      v = i(
        function (a, f) {
          var i = f == null ? void 0 : f.onComplete;
          if (D.current !== !0) {
            b("warning")(
              !1,
              "Relay: Unexpected fetch on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
              d.name,
              t
            );
            return { dispose: function () {} };
          }
          var j = q(d, e);
          if (y.current === !0 || h == null || H) {
            j == null &&
              b("warning")(
                !1,
                "Relay: Unexpected fetch while using a null fragment ref for fragment `%s` in `%s`. When fetching more items, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before paginating.",
                d.name,
                t,
                t
              );
            i && i(null);
            return { dispose: function () {} };
          }
          (j != null && j.kind !== "PluralReaderSelector") ||
            g(0, 14120, d.name, t);
          var k = j.owner.variables;
          j = j.variables;
          f = f == null ? void 0 : f.UNSTABLE_extraVariables;
          k = babelHelpers["extends"]({}, k, j);
          j = o(c, a, I, k, babelHelpers["extends"]({}, f), s);
          w != null &&
            (typeof C !== "string" &&
              b("warning")(
                !1,
                "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.",
                w,
                C
              ),
            (j.id = C));
          a = n(p, j, { force: !0 });
          m(x, a).subscribe(
            babelHelpers["extends"]({}, u, {
              start: function (a) {
                z(a), u.start && u.start(a);
              },
              complete: function () {
                B(), u.complete && u.complete(), i && i(null);
              },
              error: function (a) {
                B(), u.error && u.error(a), i && i(a);
              },
            })
          );
          return { dispose: A };
        },
        [x, C, c, I, z, A, B, y, H, h, d.name, e, t]
      );
      return [v, E, A];
    }
    function r(a, b, c, d) {
      var e = l.get(),
        f = e.EDGES,
        h = e.PAGE_INFO,
        i = e.HAS_NEXT_PAGE,
        j = e.HAS_PREV_PAGE,
        k = e.END_CURSOR;
      e = e.START_CURSOR;
      c = p(c, d);
      if (c == null) return { cursor: null, hasMore: !1 };
      typeof c === "object" || g(0, 14137, b.name, f, h, c);
      d = c[f];
      c = c[h];
      if (d == null || c == null) return { cursor: null, hasMore: !1 };
      Array.isArray(d) || g(0, 14138, b.name, f, d);
      typeof c === "object" || g(0, 14139, b.name, h, c);
      h =
        a === "forward"
          ? (f = c[k]) != null
            ? f
            : null
          : (d = c[e]) != null
          ? d
          : null;
      h === null || typeof h === "string" || g(0, 14140, b.name, e, h);
      a === "forward"
        ? (k = h != null && c[i] === !0)
        : (k = h != null && c[j] === !0);
      return { cursor: h, hasMore: k };
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useQueryLoader",
  [
    "react",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("react-relay/relay-hooks/loadQuery").loadQuery,
      i = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    var j = c.useCallback,
      k = c.useEffect,
      l = c.useRef,
      m = c.useState,
      n = b("relay-runtime").getRequest,
      o = { kind: "NullQueryReference" };
    function p(a) {
      if (a.kind === "PreloadableConcreteRequest")
        return a.params.metadata.live !== void 0;
      a = n(a);
      return a.params.metadata.live !== void 0;
    }
    function a(a, c) {
      var d = (c = c) != null ? c : o,
        e = b("react-relay/relay-hooks/useRelayEnvironment")();
      i();
      var f = b("react-relay/relay-hooks/useIsMountedRef")(),
        g = l(new Set([d]));
      c = m(function () {
        return d;
      });
      var n = c[0],
        q = c[1];
      c = m(function () {
        return d;
      });
      var r = c[0];
      c = c[1];
      d !== r && (g.current.add(d), c(d), q(d));
      r = j(
        function () {
          f.current && (g.current.add(o), q(o));
        },
        [f]
      );
      var s = j(
          function (b, c) {
            var d =
              c != null &&
              Object.prototype.hasOwnProperty.call(c, "__environment")
                ? {
                    fetchPolicy: c.fetchPolicy,
                    networkCacheConfig: c.networkCacheConfig,
                    __nameForWarning: c.__nameForWarning,
                  }
                : c;
            if (f.current) {
              c = h(
                (c = c == null ? void 0 : c.__environment) != null ? c : e,
                a,
                b,
                d
              );
              g.current.add(c);
              q(c);
            }
          },
          [e, a, q, f]
        ),
        t = l(!1);
      k(function () {
        return function () {
          t.current = !0;
        };
      }, []);
      k(
        function () {
          if (t.current === !0) {
            t.current = !1;
            n.kind !== "NullQueryReference" &&
              s(n.variables, {
                fetchPolicy: n.fetchPolicy,
                networkCacheConfig: n.networkCacheConfig,
              });
            return;
          }
          var b = g.current;
          if (f.current)
            for (
              var c = b,
                d = Array.isArray(c),
                e = 0,
                c = d
                  ? c
                  : c[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var h;
              if (d) {
                if (e >= c.length) break;
                h = c[e++];
              } else {
                e = c.next();
                if (e.done) break;
                h = e.value;
              }
              h = h;
              if (h === n) break;
              b["delete"](h);
              h.kind !== "NullQueryReference" &&
                (p(a)
                  ? h.dispose && h.dispose()
                  : h.releaseQuery && h.releaseQuery());
            }
        },
        [n, f, s, a]
      );
      k(
        function () {
          return function () {
            for (
              var b = g.current,
                c = Array.isArray(b),
                d = 0,
                b = c
                  ? b
                  : b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var e;
              if (c) {
                if (d >= b.length) break;
                e = b[d++];
              } else {
                d = b.next();
                if (d.done) break;
                e = d.value;
              }
              e = e;
              e.kind !== "NullQueryReference" &&
                (p(a)
                  ? e.dispose && e.dispose()
                  : e.releaseQuery && e.releaseQuery());
            }
          };
        },
        [a]
      );
      return [n.kind === "NullQueryReference" ? null : n, s, r];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useRefetchableFragmentNode",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/FragmentResource",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/useFragmentNode",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b(
        "react-relay/relay-hooks/FragmentResource"
      ).getFragmentResourceForEnvironment,
      j = b(
        "react-relay/relay-hooks/QueryResource"
      ).getQueryResourceForEnvironment;
    c = h || (h = b("react"));
    var k = c.useCallback,
      l = c.useContext,
      m = c.useReducer,
      n = b("relay-runtime").__internal.fetchQuery,
      o = b("relay-runtime").createOperationDescriptor,
      p = b("relay-runtime").getFragmentIdentifier,
      q = b("relay-runtime").getRefetchMetadata,
      r = b("relay-runtime").getSelector,
      s = b("relay-runtime").getValueAtPath;
    function t(a, b) {
      switch (b.type) {
        case "refetch":
          var c;
          return babelHelpers["extends"]({}, a, {
            fetchPolicy: b.fetchPolicy,
            mirroredEnvironment:
              (c = b.refetchEnvironment) != null ? c : a.mirroredEnvironment,
            onComplete: b.onComplete,
            refetchEnvironment: b.refetchEnvironment,
            refetchQuery: b.refetchQuery,
            renderPolicy: b.renderPolicy,
          });
        case "reset":
          return {
            fetchPolicy: void 0,
            mirroredEnvironment: b.environment,
            mirroredFragmentIdentifier: b.fragmentIdentifier,
            onComplete: void 0,
            refetchQuery: null,
            renderPolicy: void 0,
          };
        default:
          b.type;
          throw new Error("useRefetchableFragmentNode: Unexpected action type");
      }
    }
    function a(a, c, d) {
      var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
        f = q(a, d),
        h = f.refetchableRequest,
        k = f.fragmentRefPathInResponse;
      f = f.identifierField;
      var o = p(a, c),
        r = m(t, {
          fetchPolicy: void 0,
          mirroredEnvironment: e,
          mirroredFragmentIdentifier: o,
          onComplete: void 0,
          refetchEnvironment: null,
          refetchQuery: null,
          renderPolicy: void 0,
        }),
        v = r[0];
      r = r[1];
      var w = v.fetchPolicy,
        x = v.mirroredEnvironment,
        y = v.mirroredFragmentIdentifier,
        z = v.onComplete,
        A = v.refetchEnvironment,
        B = v.refetchQuery,
        C = v.renderPolicy;
      A = (v = A) != null ? v : e;
      var D = j(A);
      v = i(A);
      var E = l(b("react-relay/relay-hooks/ProfilerContext"));
      e = A !== x || o !== y;
      x = b("react-relay/relay-hooks/useQueryLoader")(h);
      var F = x[0];
      y = x[1];
      x = x[2];
      var G = c;
      if (e) r({ type: "reset", environment: A, fragmentIdentifier: o }), x();
      else if (B != null && F != null) {
        var H,
          I = function (a) {
            z && z((a = a) != null ? a : null);
          },
          J = F.source != null ? F.source : n(A, B);
        e = E.wrapPrepareQueryResource(function () {
          return D.prepare(
            B,
            J,
            w,
            C,
            {
              error: I,
              complete: function () {
                I();
              },
            },
            F.fetchKey,
            E
          );
        });
        A = v.read(e.fragmentNode, e.fragmentRef, d).data;
        A != null || g(0, 13942);
        v = s(A, k);
        G = v;
      }
      e = b("react-relay/relay-hooks/useFragmentNode")(a, G, d);
      A = e.data;
      v = e.disableStoreUpdates;
      e = e.enableStoreUpdates;
      d = u(d, r, x, A, o, a, k, f, y, c, h);
      return {
        fragmentData: A,
        fragmentRef: G,
        refetch: d,
        disableStoreUpdates: v,
        enableStoreUpdates: e,
      };
    }
    function u(a, c, d, e, f, g, h, i, j, l, m) {
      var n = b("react-relay/relay-hooks/useIsMountedRef")(),
        p = i != null && e != null && typeof e === "object" ? e[i] : null;
      return k(
        function (e, f) {
          if (n.current !== !0) {
            b("warning")(
              !1,
              "Relay: Unexpected call to `refetch` on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
              g.name,
              a
            );
            return { dispose: function () {} };
          }
          l == null &&
            b("warning")(
              !1,
              "Relay: Unexpected call to `refetch` while using a null fragment ref for fragment `%s` in `%s`. When calling `refetch`, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before calling `refetch`, or make sure you pass all required variables to `refetch`.",
              g.name,
              a,
              a
            );
          var h = f == null ? void 0 : f.__environment,
            k = f == null ? void 0 : f.fetchPolicy,
            q = f == null ? void 0 : f.UNSTABLE_renderPolicy;
          f = f == null ? void 0 : f.onComplete;
          var s = r(g, l),
            t,
            u;
          if (s == null) (t = {}), (u = {});
          else if (s.kind === "PluralReaderSelector") {
            var v;
            t =
              (v = (v = s.selectors[0]) == null ? void 0 : v.owner.variables) !=
              null
                ? v
                : {};
            u =
              (v = (v = s.selectors[0]) == null ? void 0 : v.variables) != null
                ? v
                : {};
          } else (t = s.owner.variables), (u = s.variables);
          v = babelHelpers["extends"]({}, t, u, e);
          i != null &&
            !Object.prototype.hasOwnProperty.call(e, "id") &&
            (typeof p !== "string" &&
              b("warning")(
                !1,
                "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.",
                i,
                p
              ),
            (v.id = p));
          s = o(m, v, { force: !0 });
          j(s.request.variables, {
            fetchPolicy: k,
            __environment: h,
            __nameForWarning: "refetch",
          });
          c({
            type: "refetch",
            fetchPolicy: k,
            onComplete: f,
            refetchEnvironment: h,
            refetchQuery: s,
            renderPolicy: q,
          });
          return { dispose: d };
        },
        [f, c, d, p]
      );
    }
    var v;
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useBlockingPaginationFragment",
  [
    "invariant",
    "Promise",
    "react",
    "react-relay/relay-hooks/useLoadMoreFunction",
    "react-relay/relay-hooks/useRefetchableFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useRef,
      l = c.useState,
      m = b("relay-runtime").getFragment,
      n = b("relay-runtime").getFragmentIdentifier,
      o = b("relay-runtime").getPaginationMetadata;
    function a(a, c, d) {
      d === void 0 && (d = "useBlockingPaginationFragment()");
      a = m(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of " + d
      );
      var e = o(a, d),
        f = e.connectionPathInFragmentData,
        h = e.identifierField,
        j = e.paginationRequest,
        k = e.paginationMetadata;
      e = e.stream;
      e === !1 || g(0, 18372);
      e = b("react-relay/relay-hooks/useRefetchableFragmentNode")(a, c, d);
      c = e.fragmentData;
      var l = e.fragmentRef,
        q = e.refetch,
        r = e.disableStoreUpdates;
      e = e.enableStoreUpdates;
      var s = n(a, l),
        t = p({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: "backward",
          disableStoreUpdates: r,
          enableStoreUpdates: e,
          fragmentData: c,
          fragmentIdentifier: s,
          fragmentNode: a,
          fragmentRef: l,
          identifierField: h,
          paginationMetadata: k,
          paginationRequest: j,
        }),
        u = t[0],
        v = t[1],
        w = t[2];
      t = p({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: "forward",
        disableStoreUpdates: r,
        enableStoreUpdates: e,
        fragmentData: c,
        fragmentIdentifier: s,
        fragmentNode: a,
        fragmentRef: l,
        identifierField: h,
        paginationMetadata: k,
        paginationRequest: j,
      });
      d = t[0];
      f = t[1];
      var x = t[2];
      r = i(
        function (a, b) {
          x();
          w();
          return q(
            a,
            babelHelpers["extends"]({}, b, { __environment: void 0 })
          );
        },
        [x, w, q]
      );
      return {
        data: c,
        loadNext: d,
        loadPrevious: u,
        hasNext: f,
        hasPrevious: v,
        refetch: r,
      };
    }
    function p(a) {
      var c = a.disableStoreUpdates,
        d = a.enableStoreUpdates;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "disableStoreUpdates",
        "enableStoreUpdates",
      ]);
      var e = l(null),
        f = e[0],
        g = e[1],
        h = k(null),
        i = k(null),
        m = function () {
          i.current != null && (i.current(), (i.current = null));
        };
      e = function () {
        m();
      };
      var n = {
        complete: m,
        start: function () {
          c();
          var a = new (b("Promise"))(function (a) {
            i.current = function () {
              (h.current = null), a();
            };
          });
          h.current = a;
          g(a);
        },
        next: m,
        error: m,
      };
      a = b("react-relay/relay-hooks/useLoadMoreFunction")(
        babelHelpers["extends"]({}, a, { observer: n, onReset: e })
      );
      n = a[0];
      e = a[1];
      a = a[2];
      if (f != null && f === h.current) throw f;
      j(
        function () {
          f !== h.current && d();
        },
        [f]
      );
      return [n, e, a];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useEntryPointLoader",
  [
    "react",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useIsMountedRef",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useRef,
      l = c.useState,
      m = { kind: "NullEntryPointReference" };
    function a(a, c, d) {
      var e;
      h();
      e =
        (e =
          d == null
            ? void 0
            : (e = d.TEST_ONLY__initialEntryPointData) == null
            ? void 0
            : e.entryPointReference) != null
          ? e
          : m;
      d =
        (d =
          d == null
            ? void 0
            : (d = d.TEST_ONLY__initialEntryPointData) == null
            ? void 0
            : d.entryPointParams) != null
          ? d
          : null;
      var f = b("react-relay/relay-hooks/useIsMountedRef")(),
        g = k(new Set([e]));
      e = l(e);
      var n = e[0],
        o = e[1];
      e = l(d);
      var p = e[0],
        q = e[1];
      d = i(
        function () {
          if (f.current) {
            var a = { kind: "NullEntryPointReference" };
            g.current.add(a);
            o(a);
          }
        },
        [o, f]
      );
      var r = i(
          function (d) {
            if (f.current) {
              var e = b("react-relay/relay-hooks/loadEntryPoint")(a, c, d);
              g.current.add(e);
              o(e);
              q(d);
            }
          },
          [a, c, o, f]
        ),
        s = k(!1);
      j(function () {
        return function () {
          s.current = !0;
        };
      }, []);
      j(
        function () {
          if (s.current === !0) {
            s.current = !1;
            n.kind !== "NullEntryPointReference" && p != null && r(p);
            return;
          }
          var a = g.current;
          if (f.current)
            for (
              var b = a,
                c = Array.isArray(b),
                d = 0,
                b = c
                  ? b
                  : b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var e;
              if (c) {
                if (d >= b.length) break;
                e = b[d++];
              } else {
                d = b.next();
                if (d.done) break;
                e = d.value;
              }
              e = e;
              if (e === n) break;
              a["delete"](e);
              e.kind !== "NullEntryPointReference" && e.dispose();
            }
        },
        [n, p, r, f]
      );
      j(function () {
        return function () {
          for (
            var a = g.current,
              b = Array.isArray(a),
              c = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var d;
            if (b) {
              if (c >= a.length) break;
              d = a[c++];
            } else {
              c = a.next();
              if (c.done) break;
              d = c.value;
            }
            d = d;
            d.kind !== "NullEntryPointReference" && d.dispose();
          }
        };
      }, []);
      return [n.kind === "NullEntryPointReference" ? null : n, r, d];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useIsParentQueryActive",
  [
    "react-relay/relay-hooks/useIsOperationNodeActive",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").getFragment;
    function a(a, c) {
      a = g(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of useIsParentQueryActive()"
      );
      return b("react-relay/relay-hooks/useIsOperationNodeActive")(a, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/usePaginationFragment",
  [
    "react",
    "react-relay/relay-hooks/useLoadMoreFunction",
    "react-relay/relay-hooks/useRefetchableFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useCallback;
    d = c.useDebugValue;
    var i = c.useState,
      j = b("relay-runtime").getFragment,
      k = b("relay-runtime").getFragmentIdentifier,
      l = b("relay-runtime").getPaginationMetadata;
    function a(a, c) {
      a = j(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of usePaginationFragment()"
      );
      var d = "usePaginationFragment()",
        e = l(a, d),
        f = e.connectionPathInFragmentData,
        g = e.paginationRequest,
        i = e.paginationMetadata;
      e = e.identifierField;
      c = b("react-relay/relay-hooks/useRefetchableFragmentNode")(a, c, d);
      var n = c.fragmentData,
        o = c.fragmentRef,
        p = c.refetch;
      c = k(a, o);
      var q = m({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: "backward",
          fragmentData: n,
          fragmentIdentifier: c,
          fragmentNode: a,
          fragmentRef: o,
          identifierField: e,
          paginationMetadata: i,
          paginationRequest: g,
        }),
        r = q[0],
        s = q[1],
        t = q[2],
        u = q[3];
      q = m({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: "forward",
        fragmentData: n,
        fragmentIdentifier: c,
        fragmentNode: a,
        fragmentRef: o,
        identifierField: e,
        paginationMetadata: i,
        paginationRequest: g,
      });
      d = q[0];
      f = q[1];
      c = q[2];
      var v = q[3];
      a = h(
        function (a, b) {
          v();
          u();
          return p(
            a,
            babelHelpers["extends"]({}, b, { __environment: void 0 })
          );
        },
        [v, u, p]
      );
      return {
        data: n,
        loadNext: d,
        loadPrevious: r,
        hasNext: f,
        hasPrevious: s,
        isLoadingNext: c,
        isLoadingPrevious: t,
        refetch: a,
      };
    }
    function m(a) {
      var c = i(!1),
        d = c[0],
        e = c[1];
      c = {
        start: function () {
          return e(!0);
        },
        complete: function () {
          return e(!1);
        },
        error: function () {
          return e(!1);
        },
      };
      var f = function () {
        return e(!1);
      };
      a = b("react-relay/relay-hooks/useLoadMoreFunction")(
        babelHelpers["extends"]({}, a, { observer: c, onReset: f })
      );
      c = a[0];
      f = a[1];
      a = a[2];
      return [c, f, d, a];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/usePreloadedQuery",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = h || (h = b("react"));
    d = c.useDebugValue;
    f = b("relay-runtime").__internal;
    var j = f.fetchQueryDeduped,
      k = f.fetchQuery;
    function a(a, c, d) {
      i();
      var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
        f = c.fetchKey,
        h = c.fetchPolicy,
        l = c.source,
        m = c.variables,
        n = c.networkCacheConfig,
        o = b("react-relay/relay-hooks/useMemoOperationDescriptor")(a, m, n);
      if (c.kind === "PreloadedQuery_DEPRECATED")
        o.request.node.params.name === c.name ||
          g(0, 15566, o.request.node.params.name, c.name),
          (a = {
            componentDisplayName: "usePreloadedQuery()",
            fetchKey: f,
            fetchObservable: j(e, o.request.identifier, function () {
              if (e === c.environment && l != null)
                return e.executeWithSource({ operation: o, source: l });
              else return e.execute({ operation: o });
            }),
            fetchPolicy: h,
            query: o,
            renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
          });
      else {
        b("warning")(
          c.isDisposed === !1,
          "usePreloadedQuery(): Expected preloadedQuery to not be disposed yet. This is because disposing the query marks it for future garbage collection, and as such query results may no longer be present in the Relay store. In the future, this will become a hard error."
        );
        m = k(e, o);
        l != null && e === c.environment
          ? (n = l.ifEmpty(m))
          : e !== c.environment
          ? (b("warning")(
              !1,
              "usePreloadedQuery(): usePreloadedQuery was passed a preloaded query that was created with a different environment than the one that is currently in context. In the future, this will become a hard error."
            ),
            (n = m))
          : (n = m);
        a = {
          componentDisplayName: "usePreloadedQuery()",
          fetchObservable: n,
          fetchKey: f,
          fetchPolicy: h,
          query: o,
          renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
        };
      }
      m = b("react-relay/relay-hooks/useLazyLoadQueryNode")(a);
      return m;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useRefetchableFragment",
  [
    "react",
    "react-relay/relay-hooks/useRefetchableFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    d = c.useDebugValue;
    var h = b("relay-runtime").getFragment;
    function a(a, c) {
      a = h(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of useRefetchableFragment()"
      );
      a = b("react-relay/relay-hooks/useRefetchableFragmentNode")(
        a,
        c,
        "useRefetchableFragment()"
      );
      c = a.fragmentData;
      a = a.refetch;
      return [c, a];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useSubscribeToInvalidationState",
  ["react", "react-relay/relay-hooks/useRelayEnvironment"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
      i = c.useRef;
    function a(a, c) {
      var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
        e = i(null),
        f = Array.from(a).sort().join("");
      h(
        function () {
          var b = d.getStore(),
            f = b.lookupInvalidationState(a),
            g = b.subscribeToInvalidationState(f, c);
          e.current = g;
          return function () {
            return g.dispose();
          };
        },
        [f, c, d]
      );
      return {
        dispose: function () {
          e.current != null && e.current.dispose();
        },
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayAPIConfig",
  ["RelayAPIConfigDefaults", "URI"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = babelHelpers["extends"]({}, b("RelayAPIConfigDefaults"), {
        graphURI: new (g || (g = b("URI")))(
          b("RelayAPIConfigDefaults").graphURI
        ),
        graphBatchURI: new g(b("RelayAPIConfigDefaults").graphBatchURI),
        subscriptionTopicURI:
          b("RelayAPIConfigDefaults").subscriptionTopicURI == null
            ? null
            : new (g || (g = b("URI")))(
                b("RelayAPIConfigDefaults").subscriptionTopicURI
              ),
        DO_NOT_USE_setActorID: function (a) {
          h.actorID = a;
        },
        setCSRFToken: function (a) {
          h.graphBatchURI.setQueryData({ fb_dtsg: a }),
            h.graphURI.setQueryData({ fb_dtsg: a });
        },
        setAPIVersion: function (a) {
          h.graphBatchURI.setPath("/" + a + "/graphqlbatch"),
            h.graphURI.setPath("/" + a + "/graphql");
        },
        setSandbox: function (a) {
          a = a === "prod" ? "graph" : "graph." + a;
          h.graphBatchURI.setSubdomain(a);
          h.graphURI.setSubdomain(a);
        },
        setWithCredentials: function (a) {
          h.withCredentials = a;
        },
      });
    e.exports = h;
  },
  null
);
__d(
  "RelayFBMutations",
  ["RelayAPIConfig", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1;
    function a(a) {
      return function (c, d, e) {
        var f = d.variables.input || {};
        b("warning")(
          !("client_mutation_id" in f),
          "RelayFBMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically."
        );
        var h;
        c.options != null && c.options.actorID != null
          ? (h = c.options.actorID)
          : ((h = b("RelayAPIConfig").actorID),
            b("warning")(
              !1,
              "RelayFBMutations: Expected ActorID to be set on the Relay environment. Please use `createEnvironment` from `RelayModern` to create an environment with actorID."
            ));
        h = babelHelpers["extends"]({}, d.variables, {
          input: babelHelpers["extends"](
            { client_mutation_id: "" + g++, actor_id: h },
            f
          ),
        });
        return a(
          c,
          {
            configs: d.configs,
            mutation: d.mutation,
            variables: h,
            onCompleted: d.onCompleted,
            onError: d.onError,
            optimisticUpdater: d.optimisticUpdater,
            optimisticResponse: d.optimisticResponse,
            updater: d.updater,
            uploadables: d.uploadables,
          },
          e
        );
      };
    }
    e.exports = { addFBisms: a };
  },
  null
);
__d(
  "react-relay/relay-hooks/useMutation",
  [
    "react",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = b("relay-runtime").commitMutation,
      i = c.useState,
      j = c.useEffect,
      k = c.useRef,
      l = c.useCallback;
    function a(a, c) {
      c === void 0 && (c = h);
      var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
        e = b("react-relay/relay-hooks/useIsMountedRef")(),
        f = k(d),
        g = k(a),
        m = k(new Set()),
        n = i(!1),
        o = n[0],
        p = n[1],
        q = l(
          function (b) {
            f.current === d &&
              g.current === a &&
              (m.current["delete"](b), e.current && p(m.current.size > 0));
          },
          [d, e, a]
        );
      j(
        function () {
          (f.current !== d || g.current !== a) &&
            ((m.current = new Set()),
            e.current && p(!1),
            (f.current = d),
            (g.current = a));
        },
        [d, e, a]
      );
      n = l(
        function (b) {
          var f = c(
            d,
            babelHelpers["extends"]({}, b, {
              mutation: a,
              onCompleted: function (a, c) {
                q(f), b.onCompleted && b.onCompleted(a, c);
              },
              onError: function (a) {
                q(f), b.onError && b.onError(a);
              },
              onUnsubscribe: function () {
                q(f), b.onUnsubscribe && b.onUnsubscribe();
              },
            })
          );
          m.current.add(f);
          e.current && p(!0);
          return f;
        },
        [q, c, d, e, a]
      );
      return [n, o];
    }
    e.exports = a;
  },
  null
);
__d(
  "useFBMutation",
  [
    "RelayFBMutations",
    "enqueueMutation",
    "react-relay/relay-hooks/useMutation",
    "relay-runtime/mutations/commitMutation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    c = b("enqueueMutation").enqueueMutation;
    var g = b("RelayFBMutations").addFBisms(
        b("relay-runtime/mutations/commitMutation")
      ),
      h = b("RelayFBMutations").addFBisms(c);
    function a(a, c) {
      return b("react-relay/relay-hooks/useMutation")(
        a,
        c === "enqueue" ? h : g
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useSubscription",
  ["react", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
      i = b("relay-runtime").requestSubscription;
    function a(a, c) {
      var d = (c = c) != null ? c : i,
        e = b("react-relay/relay-hooks/useRelayEnvironment")();
      h(
        function () {
          var b = d(e, a);
          b = b.dispose;
          return b;
        },
        [e, a, d]
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "useFBSubscription",
  [
    "RelayFBSubscription",
    "react-relay/relay-hooks/useSubscription",
    "relay-runtime/subscription/requestSubscription",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayFBSubscription").addFBisms(
      b("relay-runtime/subscription/requestSubscription")
    );
    function a(a) {
      return b("react-relay/relay-hooks/useSubscription")(a, g);
    }
    e.exports = a;
  },
  null
);
__d(
  "CometRelay",
  [
    "CometRelayQueryProfiler",
    "RelayFBCometMutations",
    "RelayFBEnvironmentActorID",
    "RelayFBMatchContainer",
    "RelayFBModuleResource",
    "RelayFBSubscription",
    "RelayFlight.hybrid",
    "configureRelayForWWW",
    "createSuspenseFragmentContainer_DEPRECATED",
    "createSuspensePaginationContainer_DEPRECATED",
    "createSuspenseQueryRenderer_DEPRECATED",
    "enqueueMutation",
    "isRelayFBLocalEnvironment",
    "react",
    "react-relay/relay-hooks/EntryPointContainer.react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/RelayEnvironmentProvider",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useBlockingPaginationFragment",
    "react-relay/relay-hooks/useEntryPointLoader",
    "react-relay/relay-hooks/useFragment",
    "react-relay/relay-hooks/useIsParentQueryActive",
    "react-relay/relay-hooks/useLazyLoadQuery",
    "react-relay/relay-hooks/usePaginationFragment",
    "react-relay/relay-hooks/usePreloadedQuery",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRefetchableFragment",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useSubscribeToInvalidationState",
    "relay-runtime",
    "useFBMutation",
    "useFBSubscription",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    a = b("RelayFBEnvironmentActorID").getActorID;
    c = b("enqueueMutation").enqueueMutation;
    g || (g = b("react"));
    d = b("react-relay/relay-hooks/loadQuery").loadQuery;
    f = b("relay-runtime").ConnectionHandler;
    var h = b("relay-runtime").MutationTypes,
      i = b("relay-runtime").RangeOperations,
      j = b("relay-runtime").RelayFeatureFlags,
      k = b("relay-runtime").VIEWER_ID,
      l = b("relay-runtime").applyOptimisticMutation,
      m = b("relay-runtime").commitLocalUpdate,
      n = b("relay-runtime").commitMutation,
      o = b("relay-runtime").createPayloadFor3DField,
      p = b("relay-runtime").fetchQuery,
      q = b("relay-runtime").generateUniqueClientID,
      r = b("relay-runtime").graphql,
      s = b("relay-runtime").readInlineData,
      t = b("relay-runtime").requestSubscription;
    b("configureRelayForWWW")();
    b("RelayFlight.hybrid").isServer_INTERNAL_DO_NOT_USE() ||
      b("CometRelayQueryProfiler").install();
    e.exports = {
      ConnectionHandler: f,
      EntryPointContainer: b(
        "react-relay/relay-hooks/EntryPointContainer.react"
      ),
      MatchContainer: b("RelayFBMatchContainer"),
      ModuleResource: b("RelayFBModuleResource"),
      MutationTypes: h,
      ProfilerContext: b("react-relay/relay-hooks/ProfilerContext"),
      RangeOperations: i,
      RelayEnvironmentProvider: b(
        "react-relay/relay-hooks/RelayEnvironmentProvider"
      ),
      RelayFeatureFlags: j,
      VIEWER_ID: k,
      applyOptimisticMutation: l,
      commitLocalUpdate: m,
      createPayloadFor3DField: o,
      commitMutation: b("RelayFBCometMutations").addFBisms(n),
      enqueueMutation: b("RelayFBCometMutations").addFBisms(c),
      createSuspenseFragmentContainer_DEPRECATED: b(
        "createSuspenseFragmentContainer_DEPRECATED"
      ),
      createSuspensePaginationContainer_DEPRECATED: b(
        "createSuspensePaginationContainer_DEPRECATED"
      ),
      createSuspenseQueryRenderer_DEPRECATED: b(
        "createSuspenseQueryRenderer_DEPRECATED"
      ),
      fetchQuery: p,
      generateUniqueClientID: q,
      graphql: r,
      loadEntryPoint: b("react-relay/relay-hooks/loadEntryPoint"),
      loadQuery: d,
      readInlineData: s,
      requestSubscription: b("RelayFBSubscription").addFBisms(t),
      useBlockingPaginationFragment: b(
        "react-relay/relay-hooks/useBlockingPaginationFragment"
      ),
      useEntryPointLoader: b("react-relay/relay-hooks/useEntryPointLoader"),
      useFragment: b("react-relay/relay-hooks/useFragment"),
      useIsParentQueryActive: b(
        "react-relay/relay-hooks/useIsParentQueryActive"
      ),
      usePaginationFragment: b("react-relay/relay-hooks/usePaginationFragment"),
      usePreloadedQuery: b("react-relay/relay-hooks/usePreloadedQuery"),
      useQueryLoader: b("react-relay/relay-hooks/useQueryLoader"),
      useRefetchableFragment: b(
        "react-relay/relay-hooks/useRefetchableFragment"
      ),
      useSubscribeToInvalidationState: b(
        "react-relay/relay-hooks/useSubscribeToInvalidationState"
      ),
      useRelayEnvironment: function () {
        return b("react-relay/relay-hooks/useRelayEnvironment")();
      },
      useMutation: b("useFBMutation"),
      useSubscription: b("useFBSubscription"),
      getActorID: a,
      isLocalEnvironment: b("isRelayFBLocalEnvironment"),
      useLazyLoadQuery: b("react-relay/relay-hooks/useLazyLoadQuery"),
    };
  },
  null
);
__d(
  "RelayFBConnectionHandler_UNSTABLE",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordProxy",
    "relay-runtime/mutations/RelayRecordSourceProxy",
    "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
    "relay-runtime/util/getRelayHandleKey",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "connection";
    function a(a, c, d, e) {
      e === void 0 && (e = h);
      var f = [],
        i = b("relay-runtime/util/getRelayHandleKey")(e, d, null);
      a instanceof
        b("relay-runtime/mutations/RelayRecordSourceSelectorProxy") &&
        (a = a.__recordSource);
      (c instanceof b("relay-runtime/mutations/RelayRecordProxy") &&
        a instanceof b("relay-runtime/mutations/RelayRecordSourceProxy")) ||
        g(0, 14424);
      e = a.__mutator.unstable_getRawRecordWithChanges(c.getDataID());
      if (e == null) return e;
      Object.keys(e).forEach(function (a) {
        if (a !== i && a.indexOf(i + "(") !== 0) return;
        a = c.getLinkedRecord(a);
        a != null && f.push(a);
      });
      return f;
    }
    e.exports = { unstable_getAllConnectionsWithKey: a };
  },
  null
);
__d(
  "UFI2CommentsConnectionHandler",
  [
    "ODS",
    "RelayFBConnectionHandler_UNSTABLE",
    "gkx",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "ufi2_comments",
      i = "__connection_next_edge_index",
      j = "ufi2_connection_generation";
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d("relay-runtime").ConnectionInterface.get(),
        h = g.EDGES,
        l = g.END_CURSOR,
        m = g.HAS_NEXT_PAGE,
        n = g.HAS_PREV_PAGE,
        o = g.PAGE_INFO,
        p = g.PAGE_INFO_TYPE;
      g = g.START_CURSOR;
      var q = f.getLinkedRecord(b.fieldKey),
        r = q && q.getLinkedRecord(o);
      if (!q) {
        f.setValue(null, b.handleKey);
        return;
      }
      var s = d("relay-runtime").generateClientID(f.getDataID(), b.handleKey),
        t = f.getLinkedRecord(b.handleKey);
      e = (e = t) != null ? e : a.get(s);
      var u = e && e.getLinkedRecord(o);
      if (!e) {
        var v = a.create(s, q.getType());
        v.setValue(0, j);
        v.setValue(0, i);
        v.copyFieldsFrom(q);
        s = q.getLinkedRecords(h);
        s &&
          ((s = s.map(function (b) {
            return d("relay-runtime").ConnectionHandler.buildConnectionEdge(
              a,
              v,
              b
            );
          })),
          v.setLinkedRecords(s, h));
        f.setLinkedRecord(v, b.handleKey);
        u = a.create(d("relay-runtime").generateClientID(v.getDataID(), o), p);
        u.setValue(!1, m);
        u.setValue(!1, n);
        u.setValue(null, l);
        u.setValue(null, g);
        r && u.copyFieldsFrom(r);
        v.setLinkedRecord(u, o);
      } else {
        t == null && f.setLinkedRecord(e, b.handleKey);
        var w = e;
        s = q.getLinkedRecords(h);
        s &&
          (s = s.map(function (b) {
            return d("relay-runtime").ConnectionHandler.buildConnectionEdge(
              a,
              w,
              b
            );
          }));
        p = w.getLinkedRecords(h);
        t = w.getLinkedRecord(o);
        w.copyFieldsFrom(q);
        p && w.setLinkedRecords(p, h);
        t && w.setLinkedRecord(t, o);
        f = [];
        e = b.args;
        if (u != null && e.after == null && e.before == null) {
          q = u.getValue(g);
          t = u.getValue(l);
          o = u.getValue(m);
          b = u.getValue(n);
          d("ODS").bumpFraction(
            2507,
            "ufi_connection_generation_incremented",
            c("gkx")("708253") ? "comet" : "blue",
            0,
            1
          );
          if (q != null || t != null || (o !== !0 && b !== !0)) {
            d("ODS").bumpFraction(
              2507,
              "ufi_connection_generation_incremented",
              c("gkx")("708253") ? "comet" : "blue",
              1,
              0
            );
            t = (q = Number(w.getValue(j))) != null ? q : 0;
            w.setValue(t + 1, j);
          }
        }
        if (p && s)
          if (e.after != null)
            if (u && e.after === u.getValue(l)) {
              o = new Set();
              k(p, f, o);
              k(s, f, o);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                e.after,
                u && u.getValue(l)
              );
              return;
            }
          else if (e.before != null)
            if (u && e.before === u.getValue(g)) {
              b = new Set();
              k(s, f, b);
              k(p, f, b);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                e.before,
                u && u.getValue(g)
              );
              return;
            }
          else f = s;
        else s ? (f = s) : (f = p);
        f != null && f !== p && w.setLinkedRecords(f, h);
        if (u && r)
          if (e.after == null && e.before == null) u.copyFieldsFrom(r);
          else if (e.before != null || (e.after == null && e.last)) {
            u.setValue(!!r.getValue(n), n);
            q = r.getValue(g);
            typeof q === "string" && u.setValue(q, g);
          } else if (e.after != null || (e.before == null && e.first)) {
            u.setValue(!!r.getValue(m), m);
            t = r.getValue(l);
            typeof t === "string" && u.setValue(t, l);
          }
      }
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function e(a, b, c) {
      return d(
        "RelayFBConnectionHandler_UNSTABLE"
      ).unstable_getAllConnectionsWithKey(a, b, c, h);
    }
    function k(a, b, c) {
      var e = d("relay-runtime").ConnectionInterface.get();
      e = e.NODE;
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (!g) continue;
        var h = g.getLinkedRecord(e);
        h = h && h.getDataID();
        if (h != null) {
          if (c.has(h)) continue;
          c.add(h);
        }
        b.push(g);
      }
    }
    g.update = a;
    g.getConnection = b;
    g.unstable_getAllConnectionsWithKey = e;
  },
  98
);
__d(
  "getRelayFBMissingFieldHandlers",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").ROOT_TYPE;
    function a() {
      return [
        {
          kind: "linked",
          handle: function (a, b, c) {
            if (
              b != null &&
              b.__typename === g &&
              a.name === "node" &&
              Object.prototype.hasOwnProperty.call(c, "id")
            )
              return c.id;
          },
        },
        {
          kind: "linked",
          handle: function (a, b, c, d) {
            if (
              b != null &&
              b.__typename === g &&
              a.name.startsWith("fetch__") &&
              Object.prototype.hasOwnProperty.call(c, "id")
            ) {
              b = c.id;
              c = d.get(b);
              if (c != null && c.getType() === a.name.substr(7)) return b;
            }
          },
        },
        {
          kind: "pluralLinked",
          handle: function (a, b, c) {
            if (
              b != null &&
              b.__typename === g &&
              a.name === "nodes" &&
              Object.prototype.hasOwnProperty.call(c, "ids")
            )
              return c.ids;
          },
        },
      ];
    }
    e.exports = a;
  },
  null
);
__d(
  "CometMissingFieldHandlers",
  [
    "UFI2CommentsConnectionHandler",
    "getRelayFBMissingFieldHandlers",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = [].concat(c("getRelayFBMissingFieldHandlers")(), [
      {
        handle: function (a, b, c, e) {
          if (
            b != null &&
            b.__typename === d("relay-runtime").ROOT_TYPE &&
            a.name === "user" &&
            Object.prototype.hasOwnProperty.call(c, "id")
          )
            return c.id;
          if (
            b != null &&
            b.__typename === d("relay-runtime").ROOT_TYPE &&
            a.name === "story" &&
            Object.prototype.hasOwnProperty.call(c, "story_id")
          )
            return c.story_id;
          if (
            b != null &&
            b.__typename === "Story" &&
            a.name === "comet_sections" &&
            b[
              d("relay-runtime").getStorageKey(a, {
                renderLocation: "homepage_stream",
              })
            ] != null
          ) {
            var f =
              b[
                d("relay-runtime").getStorageKey(a, {
                  renderLocation: "homepage_stream",
                })
              ];
            if (
              f != null &&
              typeof f === "object" &&
              Object.prototype.hasOwnProperty.call(f, "__ref") &&
              typeof f.__ref === "string"
            )
              return f.__ref;
          }
          if (
            b != null &&
            typeof b.id === "string" &&
            b.__typename === "Feedback" &&
            a.name.startsWith(
              "__UFI2CommentsProvider_feedback_display_comments_ufi2_comments"
            )
          ) {
            f = e.get(b.id);
            if (!f) return void 0;
            f = d("UFI2CommentsConnectionHandler").getConnection(
              f,
              "UFI2CommentsProvider_feedback_display_comments",
              { feedback_source: 1 }
            );
            return !f ? void 0 : f.getDataID();
          }
          if (
            b != null &&
            typeof b.id === "string" &&
            b.__typename === "Feedback" &&
            a.name === "display_comments"
          ) {
            f = e.get(b.id);
            if (!f) return void 0;
            e = f.getLinkedRecord("display_comments", c);
            if (e) return e.getDataID();
            e = f.getLinkedRecord("display_comments");
            if (e) return e.getDataID();
            Object.prototype.hasOwnProperty.call(c, "is_initial_fetch") &&
              (e = f.getLinkedRecord(
                "display_comments",
                babelHelpers["extends"]({}, c, {
                  is_initial_fetch: !c.is_initial_fetch,
                })
              ));
            return e ? e.getDataID() : void 0;
          }
          return b != null &&
            a.name === "video" &&
            Object.prototype.hasOwnProperty.call(c, "id")
            ? c.id
            : void 0;
        },
        kind: "linked",
      },
    ]);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometRootInitServerFlag",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = !1;
    function a() {
      g = !0;
    }
    function b() {
      return g;
    }
    f.enableServerEnvironment = a;
    f.isServerEnvironment = b;
  },
  66
);
__d(
  "RelayFBFlightPayloadDeserializerGated",
  ["cr:1661072", "cr:245"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c = (a = b("cr:1661072")) != null ? a : b("cr:245");
    g["default"] = c;
  },
  98
);
__d(
  "RelayFBFlightServerErrorHandlerGated",
  ["cr:1919431", "cr:246"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c = (a = b("cr:1919431")) != null ? a : b("cr:246");
    g["default"] = c;
  },
  98
);
__d(
  "RelayFBOperationLoader",
  ["Promise", "RelayFBModuleLoader"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      get: function (a) {
        return a == null || typeof a !== "object"
          ? null
          : d("RelayFBModuleLoader").get(a);
      },
      load: function (a) {
        return a == null || typeof a !== "object"
          ? b("Promise").resolve(null)
          : d("RelayFBModuleLoader").load(a);
      },
    };
    c = a;
    g["default"] = c;
  },
  98
);
__d(
  "RelayRequiredFieldLogger",
  ["FBLogger", "err", "fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "relay-required";
    function i(a) {
      return a.kind + "-" + a.fieldPath + "-" + a.owner;
    }
    function a() {
      var a = new Set();
      return function (b) {
        var d = i(b),
          e = a.has(d);
        e || a.add(d);
        switch (b.kind) {
          case "missing_field.log":
            e ||
              c("FBLogger")(h)
                .blameToPreviousFrame()
                .mustfix(
                  'Encountered a missing `@required` field with action "LOG" at "%s" in "%s"',
                  b.fieldPath,
                  b.owner
                );
            break;
          case "missing_field.throw":
            d = [
              'Encountered a missing `@required` field with action "THROW" at "%s" in "%s"',
              b.fieldPath,
              b.owner,
            ];
            var f = c("err").apply(void 0, d);
            f.taalOpcodes = f.taalOpcodes || [];
            f.taalOpcodes.push(c("fb-error").TAALOpcode.PREVIOUS_FRAME);
            if (!e) {
              (e = c("FBLogger")(h).blameToPreviousFrame()).mustfix.apply(e, d);
            }
            throw f;
          default:
            b.kind;
        }
      };
    }
    g.create = a;
  },
  98
);
__d(
  "CometNewsFeedConnectionHandler",
  [
    "FBLogger",
    "RelayFBConnectionHandler_UNSTABLE",
    "gkx",
    "orEmptyArray",
    "relay-runtime",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "comet_news_feed",
      i = "__connection_next_edge_index",
      j = "received_edges_count";
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d("relay-runtime").ConnectionInterface.get();
      g = g.EDGES;
      if (b.args.before != null)
        throw c("unrecoverableViolation")(
          "The newsfeed connection does not support backward pagination by design",
          "comet_feed"
        );
      var h = f.getLinkedRecord(b.fieldKey);
      if (!h) {
        c("FBLogger")("comet_feed").mustfix(
          "Newsfeed connection is null in the store, this means no feed stories will be shown"
        );
        return;
      }
      var m = d("relay-runtime").generateClientID(f.getDataID(), b.handleKey),
        n = f.getLinkedRecord(b.handleKey);
      e = (e = n) != null ? e : a.get(m);
      if (!e) {
        var o = a.create(m, h.getType());
        o.setValue(0, i);
        o.copyFieldsFrom(h);
        m = h.getLinkedRecords(g);
        m &&
          ((m = m.map(function (b) {
            return d("relay-runtime").ConnectionHandler.buildConnectionEdge(
              a,
              o,
              b
            );
          })),
          o.setLinkedRecords(m, g),
          o.setValue(m.length, j));
        f.setLinkedRecord(o, b.handleKey);
        k(a, m, m, o, h);
        return;
      }
      n == null && f.setLinkedRecord(e, b.handleKey);
      var p = e;
      m = h.getLinkedRecords(g);
      m &&
        ((m = m.map(function (b) {
          return d("relay-runtime").ConnectionHandler.buildConnectionEdge(
            a,
            p,
            b
          );
        })),
        p.setValue(m.length, j));
      n = p.getLinkedRecords(g);
      p.copyFieldsFrom(h);
      f = [];
      e = new Set();
      (b.args.after != null ||
        ((b = (b = m) == null ? void 0 : b.length) != null ? b : 0) === 0) &&
        l(c("orEmptyArray")(n), f, e);
      l(c("orEmptyArray")(m), f, e);
      p.setLinkedRecords(f, g);
      k(a, m, f, p, h);
    }
    function k(a, b, e, f, g) {
      var h = d("relay-runtime").ConnectionInterface.get(),
        i = h.END_CURSOR,
        j = h.HAS_NEXT_PAGE,
        k = h.HAS_PREV_PAGE,
        l = h.PAGE_INFO;
      h = h.PAGE_INFO_TYPE;
      g = g.getLinkedRecord(l);
      var m = f.getLinkedRecord(l);
      m == null &&
        ((m = a.create(
          d("relay-runtime").generateClientID(f.getDataID(), l),
          h
        )),
        f.setLinkedRecord(m, l));
      a = g == null ? void 0 : g.getValue(i);
      m.setValue(!1, k);
      if (c("gkx")("1631636")) {
        m.setValue(
          ((h = b == null ? void 0 : b.length) != null ? h : 0) > 0 ||
            (g == null ? void 0 : g.getValue(j)) === !0,
          j
        );
      } else {
        m.setValue(
          ((f = b == null ? void 0 : b.length) != null ? f : 0) > 0,
          j
        );
      }
      l = e != null ? e[e.length - 1] : null;
      k = null;
      l != null && (k = l.getValue("cursor"));
      if (k == null && a == null) {
        c("FBLogger")("comet_feed").info(
          "Unable to set end_cursor as neither the server end cursor, or last edge cursor is defined, this can happen on initial load when there are no stories but shouldn't happen otherwise",
          "comet_feed"
        );
        return;
      }
      m.setValue((h = a) != null ? h : k, i);
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function e(a, b, c) {
      return d(
        "RelayFBConnectionHandler_UNSTABLE"
      ).unstable_getAllConnectionsWithKey(a, b, c, h);
    }
    function l(a, b, e) {
      var f = d("relay-runtime").ConnectionInterface.get();
      f = f.NODE;
      for (var g = 0; g < a.length; g++) {
        var h = a[g];
        if (!h) continue;
        var i = h.getLinkedRecord(f);
        if (!i) continue;
        i = i && i.getDataID();
        if (i == null) {
          c("FBLogger")("comet_feed").mustfix(
            "Found edge without deduplication nodeID in comet_news_feed, this can lead to duplicate feed stories being rendered"
          );
          b.push(h);
          continue;
        }
        if (e.has(i)) continue;
        e.add(i);
        b.push(h);
      }
    }
    function f(a, b, e, f) {
      if (e == null) return e;
      var g = d("relay-runtime").ConnectionInterface.get();
      g = g.EDGES;
      var h = b.getValue(i);
      if (!(typeof h === "number"))
        throw c("unrecoverableViolation")(
          "CometNewsFeedConnectionHandler: Expected edgeIndex to be a number",
          "comet_feed"
        );
      f =
        (f = f) != null
          ? f
          : d("relay-runtime").generateClientID(b.getDataID(), g, h);
      g = a.create(f, e.getType());
      g.copyFieldsFrom(e);
      b.setValue(h + 1, i);
      return g;
    }
    g.update = a;
    g.getConnection = b;
    g.unstable_getAllConnectionsWithKey = e;
    g.buildConnectionEdge = f;
    g.insertEdgeBefore = d("relay-runtime").ConnectionHandler.insertEdgeBefore;
  },
  98
);
__d(
  "CometNotificationsThinClientConnectionHandler",
  ["relay-runtime", "unrecoverableViolation", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "comet_notifications_thin_client",
      i = "__connection_next_edge_index";
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d("relay-runtime").ConnectionInterface.get(),
        h = g.EDGES,
        n = g.END_CURSOR,
        o = g.HAS_NEXT_PAGE,
        p = g.HAS_PREV_PAGE,
        q = g.PAGE_INFO,
        r = g.PAGE_INFO_TYPE;
      g = g.START_CURSOR;
      var s = f.getLinkedRecord(b.fieldKey),
        t = s && s.getLinkedRecord(q);
      if (!s) {
        f.setValue(null, b.handleKey);
        return;
      }
      var u = d("relay-runtime").generateClientID(f.getDataID(), b.handleKey),
        v = f.getLinkedRecord(b.handleKey);
      e = (e = v) != null ? e : a.get(u);
      var w = e && e.getLinkedRecord(q);
      if (!e) {
        var x = a.create(u, s.getType());
        x.setValue(0, i);
        x.copyFieldsFrom(s);
        u = s.getLinkedRecords(h);
        if (u) {
          var y = d("relay-runtime").ConnectionInterface.get(),
            z = y.NODE;
          u = u.reduce(function (b, c) {
            if (!c) return b;
            var d = c.getLinkedRecord(z);
            d = d == null ? void 0 : d.getType();
            return d === "NotifPageCachedNotificationRow"
              ? b
              : b.concat(j(a, x, c));
          }, []);
          x.setLinkedRecords(u, h);
        }
        f.setLinkedRecord(x, b.handleKey);
        w = a.create(d("relay-runtime").generateClientID(x.getDataID(), q), r);
        w.setValue(!1, o);
        w.setValue(!1, p);
        w.setValue(null, n);
        w.setValue(null, g);
        t && w.copyFieldsFrom(t);
        x.setLinkedRecord(w, q);
      } else {
        v == null && f.setLinkedRecord(e, b.handleKey);
        var A = e;
        y = s.getLinkedRecords(h);
        y &&
          (y = y.map(function (b) {
            return j(a, A, b);
          }));
        u = A.getLinkedRecords(h);
        r = A.getLinkedRecord(q);
        A.copyFieldsFrom(s);
        u && A.setLinkedRecords(u, h);
        r && A.setLinkedRecord(r, q);
        v = [];
        f = b.args;
        if (u && y)
          if (f.after != null)
            if (w && f.after === w.getValue(n)) {
              e = new Set();
              k(u, v, e);
              k(y, v, e);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                f.after,
                w && w.getValue(n)
              );
              return;
            }
          else if (f.before != null)
            if (w && f.before === w.getValue(g)) {
              s = new Set();
              k(y, v, s);
              k(u, v, s);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                f.before,
                w && w.getValue(g)
              );
              return;
            }
          else {
            r = l(u);
            q = new Set();
            m(y, v, r, q);
          }
        else y ? (v = y) : (v = u);
        v != null && v !== u && A.setLinkedRecords(v, h);
        if (w && t)
          if (f.after == null && f.before == null) w.copyFieldsFrom(t);
          else if (f.before != null || (f.after == null && f.last)) {
            w.setValue(!!t.getValue(p), p);
            b = t.getValue(g);
            typeof b === "string" && w.setValue(b, g);
          } else if (f.after != null || (f.before == null && f.first)) {
            w.setValue(!!t.getValue(o), o);
            e = t.getValue(n);
            typeof e === "string" && w.setValue(e, n);
          }
      }
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function j(a, b, e) {
      if (e == null) return e;
      var f = d("relay-runtime").ConnectionInterface.get(),
        g = f.EDGES;
      f = f.NODE;
      var h = b.getValue(i);
      if (!(typeof h === "number"))
        throw c("unrecoverableViolation")(
          "CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number",
          "Notifications"
        );
      g = d("relay-runtime").generateClientID(b.getDataID(), g, h);
      var j = e.getLinkedRecord(f);
      if (j) {
        var k = d("relay-runtime").generateClientID(e.getDataID(), f, h);
        k = a.create(k, j.getType());
        k.copyFieldsFrom(j);
        e.setLinkedRecord(k, f);
      }
      j = a.create(g, e.getType());
      j.copyFieldsFrom(e);
      b.setValue(h + 1, i);
      return j;
    }
    function k(a, b, c) {
      var e = d("relay-runtime").ConnectionInterface.get();
      e = e.NODE;
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (!g) continue;
        var h = g.getLinkedRecord(e);
        h = h && h.getDataID();
        if (h != null) {
          if (c.has(h)) continue;
          c.add(h);
        }
        b.push(g);
      }
    }
    function l(a) {
      var b = {},
        c = d("relay-runtime").ConnectionInterface.get();
      c = c.NODE;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        if (!f) continue;
        f = f.getLinkedRecord(c);
        var g = f && f.getType();
        if (g === "NotifPageNotificationRow") {
          g =
            f == null
              ? void 0
              : (g = f.getLinkedRecord("notif")) == null
              ? void 0
              : g.getValue("id");
          typeof g === "string" && (b[g] = f);
        }
      }
      return b;
    }
    function m(a, b, c, e) {
      var f = d("relay-runtime").ConnectionInterface.get();
      f = f.NODE;
      for (var g = 0; g < a.length; g++) {
        var h,
          i = a[g];
        if (!i) continue;
        var j = i.getLinkedRecord(f),
          k = j && j.getDataID();
        if (k != null) {
          if (e.has(k)) continue;
          e.add(k);
        }
        k = j == null ? void 0 : j.getType();
        h =
          j == null
            ? void 0
            : (h = j.getLinkedRecord("notif")) == null
            ? void 0
            : h.getValue("id");
        if (j && k === "NotifPageCachedNotificationRow") {
          if (typeof h === "string") {
            k = c[h];
            k && (k.copyFieldsFrom(j), i.setLinkedRecord(k, f), b.push(i));
          }
        } else b.push(i);
      }
    }
    g.update = a;
    g.getConnection = b;
    g.buildConnectionEdge = j;
  },
  98
);
__d(
  "expectationViolation",
  ["ErrorNormalizeUtils", "FBLogger", "cr:840411", "emptyFunction", "sprintf"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d = c("emptyFunction");
    function a(a) {
      var b;
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      (b = c("FBLogger")(
        "expectation_violation"
      ).blameToPreviousFrame()).warn.apply(b, [a].concat(e));
    }
    a.setHandler = b;
    function b(a) {
      d = a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PinnedCommentEventsConnectionHandler",
  ["expectationViolation", "orEmptyArray", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = a.get(b.dataID);
      if (!a) return;
      var d = a.getLinkedRecords(b.fieldKey);
      if (!d) {
        a.setValue(null, b.handleKey);
        return;
      }
      var e = a.getLinkedRecords(b.handleKey);
      if (!e) {
        a.setLinkedRecords(d, b.handleKey);
        return;
      }
      var f;
      e == null ? (f = d) : d == null ? (f = e) : (f = h(e, d));
      a.setLinkedRecords(c("orEmptyArray")(f), b.handleKey);
    }
    function h(a, b) {
      var d = 0,
        e = 0,
        f = new Set(),
        g = [],
        h = function (a) {
          var b = a == null ? void 0 : a.getValue("id");
          if (b == null) {
            c("expectationViolation")("Pinned Comment Event should have id");
            return;
          }
          if (f.has(b)) return;
          f.add(b);
          g.push(a);
        };
      while (d < a.length && e < b.length) {
        var i, j;
        i = (i = a[d]) == null ? void 0 : i.getValue("vod_time_offset");
        j = (j = b[e]) == null ? void 0 : j.getValue("vod_time_offset");
        if (typeof i != "number") {
          d++;
          continue;
        }
        if (typeof j != "number") {
          e++;
          continue;
        }
        if (i > j) {
          h(a[d]);
          d++;
          continue;
        }
        if (i < j) {
          h(b[e]);
          e++;
          continue;
        }
        h(a[d]);
        h(b[e]);
        d++;
        e++;
      }
      for (var i = d; i < a.length; i++) h(a[i]);
      for (var j = e; j < b.length; j++) h(b[j]);
      return g;
    }
    function i(a) {
      return d("relay-runtime").getRelayHandleKey(
        "pinned_comment_events",
        a,
        null
      );
    }
    function j(a, b, d) {
      return c("orEmptyArray")(a.getLinkedRecords(i(b), d));
    }
    function b(a, b, c, d) {
      a.setLinkedRecords(
        j(a, b, d).filter(function (a) {
          return (a == null ? void 0 : a.getValue("id")) !== c;
        }),
        i(b)
      );
      return;
    }
    g.update = a;
    g.getEvents = j;
    g.deleteEvent = b;
  },
  98
);
__d(
  "mergeCommentEdgesSortedByTimestampInVideo",
  ["expectationViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
      a =
        a == null
          ? void 0
          : (a = a.getLinkedRecord("node")) == null
          ? void 0
          : a.getValue("timestamp_in_video");
      return typeof a !== "number" ? null : a;
    };
    function a(a, b) {
      var d = 0,
        e = 0,
        f = new Set(),
        g = [],
        i = function (a) {
          var b;
          b =
            a == null
              ? void 0
              : (b = a.getLinkedRecord("node")) == null
              ? void 0
              : b.getValue("id");
          if (b == null) {
            c("expectationViolation")("Node should have id");
            return;
          }
          if (f.has(b)) return;
          f.add(b);
          g.push(a);
        };
      while (d < a.length && e < b.length) {
        var j = h(a[d]),
          k = h(b[e]);
        if (j == null) {
          d++;
          continue;
        }
        if (k == null) {
          e++;
          continue;
        }
        if (j < k) {
          i(a[d]);
          d++;
          continue;
        }
        if (j > k) {
          i(b[e]);
          e++;
          continue;
        }
        i(a[d]);
        i(b[e]);
        d++;
        e++;
      }
      for (var j = d; j < a.length; j++) i(a[j]);
      for (var k = e; k < b.length; k++) i(b[k]);
      return g;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoTimestampedCommentsConnectionHandler",
  [
    "mergeCommentEdgesSortedByTimestampInVideo",
    "orEmptyArray",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = a.get(b.dataID);
      if (!e) return;
      var f = e.getLinkedRecord(b.fieldKey);
      if (!f) {
        e.setValue(null, b.handleKey);
        return;
      }
      var g = e.getLinkedRecord(b.handleKey);
      if (!g) {
        a = a.create(
          d("relay-runtime").generateClientID(e.getDataID(), b.handleKey),
          f.getType()
        );
        a.copyFieldsFrom(f);
        e.setLinkedRecord(a, b.handleKey);
        return;
      }
      e = f.getLinkedRecords("edges");
      a = g.getLinkedRecords("edges");
      a == null
        ? (b = e)
        : e == null
        ? (b = a)
        : (b = c("mergeCommentEdgesSortedByTimestampInVideo")(a, e));
      g.setLinkedRecords(c("orEmptyArray")(b), "edges");
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(
        "video_timestamped_comments",
        b,
        null
      );
      return a.getLinkedRecord(b, c);
    }
    function e(a, b) {
      var d = a.getLinkedRecords("edges");
      if (!d) {
        a.setLinkedRecords([b], "edges");
        return;
      }
      d = c("mergeCommentEdgesSortedByTimestampInVideo")(d, [b]);
      a.setLinkedRecords(c("orEmptyArray")(d), "edges");
      return;
    }
    g.update = a;
    g.getConnection = b;
    g.insertEdge = e;
  },
  98
);
__d(
  "cometHandlerProvider",
  [
    "CometNewsFeedConnectionHandler",
    "CometNotificationsThinClientConnectionHandler",
    "PinnedCommentEventsConnectionHandler",
    "UFI2CommentsConnectionHandler",
    "VideoTimestampedCommentsConnectionHandler",
    "relay-runtime",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      switch (a) {
        case "connection":
          return d("relay-runtime").ConnectionHandler;
        case "video_timestamped_comments":
          return d("VideoTimestampedCommentsConnectionHandler");
        case "pinned_comment_events":
          return d("PinnedCommentEventsConnectionHandler");
        case "ufi2_comments":
          return d("UFI2CommentsConnectionHandler");
        case "comet_news_feed":
          return d("CometNewsFeedConnectionHandler");
        case "comet_notifications_thin_client":
          return d("CometNotificationsThinClientConnectionHandler");
        case "deleteRecord":
          return d("relay-runtime").MutationHandlers.DeleteRecordHandler;
        case "appendEdge":
          return d("relay-runtime").MutationHandlers.AppendEdgeHandler;
        case "prependEdge":
          return d("relay-runtime").MutationHandlers.PrependEdgeHandler;
        case "deleteEdge":
          return d("relay-runtime").MutationHandlers.DeleteEdgeHandler;
        case "appendNode":
          return d("relay-runtime").MutationHandlers.AppendNodeHandler;
        case "prependNode":
          return d("relay-runtime").MutationHandlers.PrependNodeHandler;
      }
      throw c("unrecoverableViolation")(
        "RelayCometEnvironment: No handler defined for `" + a + "`.",
        "comet_ui"
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ActorURIConfig",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      PARAMETER_ACTOR: "av",
      ENCRYPTED_PARAMETER_ACTOR: "eav",
    });
  },
  null
);
__d(
  "CometRelayFlightEventLogger",
  ["InteractionTracingMetrics"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function a(a) {
      a.name === "execute.start" &&
        a.params.name === "MarketplacePDPContainerQuery" &&
        h.set(a.executeId, {
          totalDuration: 0,
          totalFlightPayloadDeserializeDuration: 0,
          totalModuleDuration: 0,
          totalPayloadDuration: 0,
        });
      if (a.executeId != null && !h.has(a.executeId)) return;
      if (a.name === "execute.next") {
        var b = h.get(a.executeId);
        b &&
          ((b.totalDuration += a.duration),
          (b.totalPayloadDuration += a.duration));
      }
      if (a.name === "execute.async.module") {
        b = h.get(a.executeId);
        b &&
          ((b.totalDuration += a.duration),
          (b.totalModuleDuration += a.duration));
      }
      if (a.name === "execute.flight.payload_deserialize") {
        b = h.get(a.executeId);
        b && (b.totalFlightPayloadDeserializeDuration += a.duration);
      }
      if (a.name === "execute.complete") {
        b = h.get(a.executeId);
        if (b) {
          var d = b.totalDuration,
            e = b.totalFlightPayloadDeserializeDuration,
            f = b.totalModuleDuration;
          b = b.totalPayloadDuration;
          c("InteractionTracingMetrics")
            .currentInteractionLogger()
            .addMetadata(
              "MarketplacePDPContainerQueryModuleProcessingSuccessDuration",
              f
            );
          c("InteractionTracingMetrics")
            .currentInteractionLogger()
            .addMetadata(
              "MarketplacePDPContainerQueryPayloadProcessingSuccessDuration",
              b
            );
          c("InteractionTracingMetrics")
            .currentInteractionLogger()
            .addMetadata(
              "MarketplacePDPContainerQueryFlightDeserializationSuccessDuration",
              e
            );
          c("InteractionTracingMetrics")
            .currentInteractionLogger()
            .addMetadata(
              "MarketplacePDPContainerQueryRelayProcessingSuccessDuration",
              d
            );
        }
        h["delete"](a.executeId);
      }
      a.name === "execute.error" && h["delete"](a.executeId);
    }
    g.log = a;
  },
  98
);
__d(
  "CometRelayPerfStore",
  ["ExecutionEnvironment", "performanceNow", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5 * 6e4,
      i = {},
      j = {},
      k = {};
    function a(a) {
      if (!d("ExecutionEnvironment").canUseDOM) return;
      if (a.name === "network.start") {
        var b = {
          flushes: [],
          hasteResponseLogEvents: [],
          name: a.params.name,
          start: c("performanceNow")(),
        };
        j[a.networkRequestId] = b;
        i[a.params.name] = b;
        c("setTimeout")(function () {
          delete j[a.networkRequestId], b && delete i[b.name];
        }, h);
      } else if (a.name === "network.next") {
        var e = j[a.networkRequestId];
        if (e) {
          var f = a.response,
            g = function (a) {
              e.flushes.push({
                label: (a = a.label) != null ? a : "root",
                time: c("performanceNow")(),
              });
            };
          f instanceof Array ? f.forEach(g) : g(f);
        }
      } else if (a.name === "network.complete") {
        g = j[a.networkRequestId];
        g && (g.end = c("performanceNow")());
      } else if (a.name === "queryresource.fetch") {
        if (a.operation.root.node.name != null) {
          f = a.operation.root.node.name;
          g = i[f];
          g != null &&
            ((k[a.resourceID] = g),
            c("setTimeout")(function () {
              delete k[a.resourceID];
            }, h));
        }
      } else if (a.name === "queryresource.retain") {
        f = k[a.resourceID];
        if (f != null) {
          g = a.profilerContext;
          g.retainQuery && g.retainQuery(f);
        }
      } else if (a.name === "network.info") {
        g = a.info;
        if (
          g != null &&
          typeof g === "object" &&
          Object.prototype.hasOwnProperty.call(g, "prefetched")
        ) {
          f = j[a.networkRequestId];
          f && (f.start = 0);
        }
        if (
          g != null &&
          typeof g === "object" &&
          "srPayloadStats" in g &&
          g.srPayloadStats != null &&
          typeof g.srPayloadStats === "object"
        ) {
          f = j[a.networkRequestId];
          f && f.hasteResponseLogEvents.push(g.srPayloadStats);
        }
      } else if (a.name === "entrypoint.root.consume") {
        f = a.profilerContext;
        typeof f.consumeBootload === "function" &&
          f.consumeBootload(a.rootModuleID);
      }
    }
    g.log = a;
  },
  98
);
__d(
  "Deferred",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    b("Promise").resolve();
    a = (function () {
      function a(a) {
        var c = this;
        a = a || b("Promise");
        this.$1 = !1;
        this.$2 = new a(function (a, b) {
          (c.$3 = a), (c.$4 = b);
        });
      }
      var c = a.prototype;
      c.getPromise = function () {
        return this.$2;
      };
      c.resolve = function (a) {
        (this.$1 = !0), this.$3(a);
      };
      c.reject = function (a) {
        (this.$1 = !0), this.$4(a);
      };
      c.isSettled = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MaybeNativePromise",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    c = a.Promise || b("Promise");
    b("Promise").resolve();
    d = c;
    f["default"] = d;
  },
  66
);
__d(
  "VideoAkamaiRequestHelper",
  ["URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a.toLowerCase().indexOf("akamai") !== -1;
    }
    function h(a) {
      var b = a.startByte;
      a = a.endByte;
      if (b != void 0 && !(b === 0 && a == void 0)) {
        b = "bytes=" + b + "-" + (a == void 0 ? "" : a);
        return { Range: b };
      }
      return null;
    }
    function b(a) {
      var b = new (c("URI"))(a);
      b = b.getQueryData();
      var d = b.startByte;
      b = b.endByte;
      return h({ baseUrl: a, startByte: d, endByte: b });
    }
    g.isAkamai = a;
    g.getRequestHeaders = h;
    g.getRequestHeadersFromUrl = b;
  },
  98
);
__d(
  "VideoDashPrefetchCacheUtils",
  ["ConstUriUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = d("ConstUriUtils").getUri(a);
      a = a == null ? void 0 : a.getDomain();
      return (
        a != null &&
        a.endsWith("fbcdn.net") &&
        !a.startsWith("interncache") &&
        !a.endsWith("ak.fbcdn.net")
      );
    }
    function b(a) {
      var b = d("ConstUriUtils").getUri(a);
      if (b == null ? void 0 : b.getDomain()) {
        var c = ["oh", "__gda__"],
          e = b == null ? void 0 : b.getQueryParams().keys();
        if (e != null)
          for (
            var e = e,
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var h;
            if (f) {
              if (g >= e.length) break;
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            h.startsWith("_nc") && c.push(h);
          }
        return (g =
          b == null
            ? void 0
            : (h = b.removeQueryParams(c)) == null
            ? void 0
            : h.toString()) != null
          ? g
          : a;
      }
      return a;
    }
    g.isFBCDN = a;
    g.stripNonCachingParams = b;
  },
  98
);
__d(
  "parseHeaders",
  [],
  function (a, b, c, d, e, f) {
    var g = /\r?\n[\t]+/g,
      h = /\r?\n/;
    function a(a) {
      a = a.replace(g, " ");
      var b = {};
      a.split(h).forEach(function (a) {
        a = a.split(":");
        var c = a.shift().trim();
        if (c) {
          a = a.join(":").trim();
          b[c.toLowerCase()] = a;
        }
      });
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerShakaError",
  ["parseHeaders"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e = a.errorRawTransportStatus,
        f = null;
      a.errorRawResponseHeaders != null &&
        (f = c("parseHeaders")(a.errorRawResponseHeaders));
      a = {
        name: a.errorType,
        message: a.errorMsg,
        type: d,
        url: b,
        status: e,
        responseHeaders: f,
      };
      return a;
    }
    function b(a) {
      a = {
        name: "timeout",
        message: "timeout",
        type: "net",
        url: a,
        status: 0,
        responseHeaders: null,
      };
      return a;
    }
    g.translateError = a;
    g.createTimeoutError = b;
  },
  98
);
__d(
  "Log",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = -1;
    b = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
    c = function (a, b, c) {
      for (
        var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3;
        f < d;
        f++
      )
        e[f - 3] = arguments[f];
      var h = 0,
        i = c.replace(/%s/g, function () {
          return String(e[h++]);
        }),
        j = window.console;
      j && g >= b && j[a in j ? a : "log"](i);
    };
    function a(a) {
      g = a;
    }
    d = c.bind(null, "debug", b.DEBUG);
    e = c.bind(null, "info", b.INFO);
    var h = c.bind(null, "warn", b.WARNING),
      i = c.bind(null, "error", b.ERROR);
    f.Level = b;
    f.log = c;
    f.setLevel = a;
    f.debug = d;
    f.info = e;
    f.warn = h;
    f.error = i;
  },
  66
);
__d(
  "XHRHttpError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "HTTP_CLIENT_ERROR",
      h = "HTTP_PROXY_ERROR",
      i = "HTTP_SERVER_ERROR",
      j = "HTTP_TRANSPORT_ERROR",
      k = "HTTP_UNKNOWN_ERROR";
    function a(a, b) {
      if (b === 0) {
        a = a.getProtocol();
        return a === "file" || a === "ftp" ? null : j;
      } else if (b >= 100 && b < 200) return h;
      else if (b >= 200 && b < 300) return null;
      else if (b >= 400 && b < 500) return g;
      else if (b >= 500 && b < 600) return i;
      else if (b >= 12001 && b < 12156) return j;
      else return k;
    }
    f.HTTP_CLIENT_ERROR = g;
    f.HTTP_PROXY_ERROR = h;
    f.HTTP_SERVER_ERROR = i;
    f.HTTP_TRANSPORT_ERROR = j;
    f.HTTP_UNKNOWN_ERROR = k;
    f.getErrorCode = a;
  },
  66
);
__d(
  "getAsyncHeaders",
  ["LSD", "ZeroCategoryHeader", "isFacebookURI", "killswitch"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = {},
        d = c("isFacebookURI")(a);
      d &&
        c("ZeroCategoryHeader").value &&
        (b[c("ZeroCategoryHeader").header] = c("ZeroCategoryHeader").value);
      d = h(a);
      d && (b["X-FB-LSD"] = d);
      return b;
    }
    function h(a) {
      if (c("killswitch")("SAF_JS_FB_X_LSD_HEADER")) return null;
      return !a.toString().startsWith("/") &&
        a.getOrigin() !== document.location.origin
        ? null
        : c("LSD").token;
    }
    g["default"] = a;
  },
  98
);
__d(
  "xhrSimpleDataSerializer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (var c in a)
        b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
      return b.join("&");
    }
    f["default"] = a;
  },
  66
);
__d(
  "XHRRequest",
  [
    "invariant",
    "DTSG",
    "DTSGUtils",
    "DTSG_ASYNC",
    "Env",
    "ErrorGuard",
    "FBLogger",
    "LSD",
    "Log",
    "NetworkStatus",
    "ResourceTimingsStore",
    "ResourceTypes",
    "SprinkleConfig",
    "TimeSlice",
    "URI",
    "XHRHttpError",
    "ZeroRewrites",
    "fb-error",
    "getAsyncHeaders",
    "xhrSimpleDataSerializer",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j,
      k = b("fb-error").ErrorXFBDebug,
      l = !1,
      m = { loadedBytes: 0, totalBytes: 0 };
    function n(a) {
      return b("ZeroRewrites").rewriteURI(new (h || (h = b("URI")))(a));
    }
    a = (function () {
      "use strict";
      function a(a) {
        (this.$3 = function () {
          return null;
        }),
          (this.$19 = n(a)),
          (this.$7 = "POST"),
          (this.$6 = {}),
          this.setResponseType(null),
          this.setTransportBuilder(
            b("ZeroRewrites").getTransportBuilderForURI(this.getURI())
          ),
          this.setDataSerializer(b("xhrSimpleDataSerializer")),
          (this.$11 = b("ResourceTimingsStore").getUID(
            b("ResourceTypes").XHR,
            a != null ? a.toString() : ""
          ));
      }
      var c = a.prototype;
      c.setURI = function (a) {
        this.$19 = n(a);
        return this;
      };
      c.getURI = function () {
        return this.$19;
      };
      c.setResponseType = function (a) {
        this.$13 = a;
        return this;
      };
      c.setMethod = function (a) {
        this.$7 = a;
        return this;
      };
      c.getMethod = function () {
        return this.$7;
      };
      c.setData = function (a) {
        this.$2 = a;
        return this;
      };
      c.getData = function () {
        return this.$2;
      };
      c.setRawData = function (a) {
        this.$10 = a;
        return this;
      };
      c.setRequestHeader = function (a, b) {
        this.$6[a] = b;
        return this;
      };
      c.setTimeout = function (a) {
        this.$14 = a;
        return this;
      };
      c.getTimeout = function () {
        return this.$14;
      };
      c.setResponseHandler = function (a) {
        this.$12 = a;
        return this;
      };
      c.getResponseHandler = function () {
        return this.$12;
      };
      c.setErrorHandler = function (a) {
        this.$5 = a;
        return this;
      };
      c.getErrorHandler = function () {
        return this.$5;
      };
      c.setNetworkFailureHandler = function (a) {
        this.$8 = a;
        return this;
      };
      c.getNetworkFailureHandler = function () {
        return this.$8;
      };
      c.getResponseHeader = function (a) {
        var b = this.$9;
        return b ? b.getResponseHeader(a) : null;
      };
      c.setAbortHandler = function (a) {
        this.$1 = a;
        return this;
      };
      c.getAbortHandler = function () {
        return this.$1;
      };
      c.setTimeoutHandler = function (a) {
        this.$15 = a;
        return this;
      };
      c.getTimeoutHandler = function () {
        return this.$15;
      };
      c.setUploadProgressHandler = function (a) {
        this.$18 = a;
        return this;
      };
      c.setDownloadProgressHandler = function (a) {
        this.$4 = a;
        return this;
      };
      c.setTransportBuilder = function (a) {
        !this.$17 || !b("ZeroRewrites").isRewritten(this.$19)
          ? (this.$17 = a)
          : b("FBLogger")("iorg-FOS")
              .blameToPreviousFile()
              .mustfix(
                "can not set new TransportBuilder for the request %s",
                String(this.getURI())
              );
        return this;
      };
      c.setDataSerializer = function (a) {
        this.$3 = a;
        return this;
      };
      c.setWithCredentials = function (a) {
        this.$20 = a;
        return this;
      };
      c.send = function () {
        var a = this.$14,
          c = this.$17;
        if (!c) return;
        var d = c();
        c = this.getURI();
        if (
          c.toString().includes("/../") ||
          c.toString().includes("/..\\") ||
          c.toString().includes("\\../") ||
          c.toString().includes("\\..\\")
        ) {
          b("Log").error("XHRRequest.send(): path traversal is not allowed.");
          return !1;
        }
        if (l === !0) return;
        var e = new (h || (h = b("URI")))(c).getQualifiedURI().toString(),
          f = this.$11;
        b("ResourceTimingsStore").updateURI(b("ResourceTypes").XHR, f, e);
        b("ResourceTimingsStore").measureRequestSent(b("ResourceTypes").XHR, f);
        this.$9 = d;
        this.$7 === "POST" || !this.$10 || g(0, 2346, this.$10, c);
        e = (i || (i = b("Env"))).force_param;
        e && (this.$2 = babelHelpers["extends"]({}, this.getData() || {}, e));
        if (this.$7 === "GET" && b("DTSGUtils").shouldAppendToken(c)) {
          e = b("DTSG_ASYNC").getCachedToken
            ? b("DTSG_ASYNC").getCachedToken()
            : b("DTSG_ASYNC").getToken();
          e &&
            (this.$2 ? (this.$2.fb_dtsg_ag = e) : (this.$2 = { fb_dtsg_ag: e }),
            b("SprinkleConfig").param_name &&
              (this.$2[b("SprinkleConfig").param_name] =
                b("DTSGUtils").getNumericValue(e)));
        }
        if (this.$7 === "POST" && b("DTSGUtils").shouldAppendToken(c)) {
          e = b("DTSG").getCachedToken
            ? b("DTSG").getCachedToken()
            : b("DTSG").getToken();
          e &&
            (this.$2 ? (this.$2.fb_dtsg = e) : (this.$2 = { fb_dtsg: e }),
            b("SprinkleConfig").param_name &&
              (this.$2[b("SprinkleConfig").param_name] =
                b("DTSGUtils").getNumericValue(e)));
          b("LSD").token &&
            (this.$2
              ? (this.$2.lsd = b("LSD").token)
              : (this.$2 = { lsd: b("LSD").token }),
            b("SprinkleConfig").param_name &&
              !e &&
              (this.$2[b("SprinkleConfig").param_name] = b(
                "DTSGUtils"
              ).getNumericValue(b("LSD").token)));
        }
        this.$7 === "GET" || this.$10
          ? (c.addQueryData(this.$2), (e = this.$10))
          : (e = this.$3(this.$2));
        function j(a) {
          b("ResourceTimingsStore").measureResponseReceived(
            b("ResourceTypes").XHR,
            f
          );
          for (
            var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
            e < c;
            e++
          )
            d[e - 1] = arguments[e];
          a.apply(this, d);
        }
        j = b("TimeSlice").guard(j, "XHRRequest response received", {
          propagationType: b("TimeSlice").PropagationType.CONTINUATION,
        });
        d.onreadystatechange = this.$21(j);
        d.onerror = this.$22(j);
        d.upload && this.$18 && (d.upload.onprogress = this.$23.bind(this));
        this.$4 && (d.onprogress = this.$24.bind(this));
        a && (this.$16 = setTimeout(this.$25.bind(this), a));
        this.$20 != null && (d.withCredentials = this.$20);
        d.open(this.$7, c.toString(), !0);
        j = !1;
        if (this.$6)
          for (var k in this.$6)
            k.toLowerCase() === "content-type" && (j = !0),
              d.setRequestHeader(k, this.$6[k]);
        this.$7 == "POST" &&
          !this.$10 &&
          !j &&
          d.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
        var m = b("getAsyncHeaders")(c);
        Object.keys(m).forEach(function (a) {
          d.setRequestHeader(a, m[a]);
        });
        this.$13 === "arraybuffer" &&
          ("responseType" in d
            ? (d.responseType = "arraybuffer")
            : "overrideMimeType" in d
            ? d.overrideMimeType("text/plain; charset=x-user-defined")
            : "setRequestHeader" in d &&
              d.setRequestHeader("Accept-Charset", "x-user-defined"));
        this.$13 === "blob" && (d.responseType = this.$13);
        d.send(e);
      };
      c.abort = function (a) {
        this.$26(),
          this.$1 &&
            (j || (j = b("ErrorGuard"))).applyWithGuard(this.$1, null, [a], {
              name: "XHRRequest:_abortHandler",
            });
      };
      c.$26 = function () {
        var a = this.$9;
        a && ((a.onreadystatechange = null), a.abort());
        this.$27();
      };
      c.$25 = function () {
        this.$26(),
          this.$15 &&
            (j || (j = b("ErrorGuard"))).applyWithGuard(this.$15, null, [], {
              name: "XHRRequest:_abortHandler",
            });
      };
      c.$28 = function (a) {
        if (this.$13)
          if ("response" in a) return a.response;
          else if (this.$13 === "arraybuffer" && window.VBArray)
            return window.VBArray(a.responseBody).toArray();
        return a.responseText;
      };
      c.$22 = function (a) {
        var c = this,
          d = this.$9;
        return function () {
          var e;
          e = {
            errorCode: b("XHRHttpError").HTTP_TRANSPORT_ERROR,
            errorMsg: "Network Failure.",
            errorType: "Network",
            errorRawResponseHeaders: null,
            errorRawTransport:
              d == null
                ? void 0
                : (e = d.constructor) == null
                ? void 0
                : e.name,
            errorRawTransportStatus: 0,
          };
          c.$8
            ? (j || (j = b("ErrorGuard"))).applyWithGuard(
                a.bind(void 0, c.$8),
                null,
                [e],
                { name: "XHRRequest:_networkFailureHandler" }
              )
            : a(function () {});
          b("NetworkStatus").reportError();
        };
      };
      c.$21 = function (a) {
        var c = this,
          d = b("TimeSlice").guard(
            function (a) {
              for (
                var b = arguments.length,
                  c = new Array(b > 1 ? b - 1 : 0),
                  d = 1;
                d < b;
                d++
              )
                c[d - 1] = arguments[d];
              return a.apply(this, c);
            },
            "XHRRequest onreadystatechange",
            { propagationType: b("TimeSlice").PropagationType.EXECUTION }
          );
        return function () {
          var e = c.$9;
          if (e == null) return;
          var f = e.readyState;
          if (f >= 2) {
            var g = f === 4;
            g && k.addFromXHR(e);
            var h = c.getURI();
            h = b("XHRHttpError").getErrorCode(h, e.status);
            var i = c.$12;
            if (h != null) {
              if (g) {
                var l = {
                  errorCode: h,
                  errorMsg: c.$28(e),
                  errorRawTransport: e.constructor.name,
                  errorRawTransportStatus: e.status,
                  errorRawResponseHeaders:
                    i && i.includeHeaders ? e.getAllResponseHeaders() : null,
                  errorType: e.status ? "HTTP " + e.status : "HTTP",
                };
                c.$5
                  ? (j || (j = b("ErrorGuard"))).applyWithGuard(
                      a.bind(void 0, c.$5),
                      null,
                      [l],
                      { name: "XHRRequest:_errorHandler" }
                    )
                  : a(function () {});
              }
            } else if (i) {
              if (g || (i.parseStreaming && f === 3)) {
                l = g ? a : d;
                f = (i == null ? void 0 : i.includeHeaders)
                  ? e.getAllResponseHeaders()
                  : null;
                (j || (j = b("ErrorGuard"))).applyWithGuard(
                  l.bind(void 0, i),
                  null,
                  [c.$28(e), f, g],
                  { name: "XHRRequest:handler" }
                );
              }
            } else g && a(function () {});
            g &&
              (h != "HTTP_TRANSPORT_ERROR" &&
                b("NetworkStatus").reportSuccess(),
              c.$27());
          }
        };
      };
      c.$23 = function (a) {
        (m.loadedBytes = a.loaded),
          (m.totalBytes = a.total),
          this.$18 &&
            (j || (j = b("ErrorGuard"))).applyWithGuard(this.$18, null, [m], {
              name: "XHRRequest:_uploadProgressHandler",
            });
      };
      c.$24 = function (a) {
        a = { loadedBytes: a.loaded, totalBytes: a.total };
        this.$4 &&
          (j || (j = b("ErrorGuard"))).applyWithGuard(this.$4, null, [a], {
            name: "XHRRequest:_downloadProgressHandler",
          });
      };
      c.$27 = function () {
        clearTimeout(this.$16), delete this.$9;
      };
      a.disable = function () {
        l = !0;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoDashPrefetchCache",
  [
    "ConstUriUtils",
    "Deferred",
    "MaybeNativePromise",
    "ODS",
    "Promise",
    "VideoAkamaiRequestHelper",
    "VideoDashPrefetchCacheUtils",
    "VideoPlayerPrefetchExperiments",
    "VideoPlayerShakaError",
    "XHRRequest",
    "clearTimeout",
    "cr:1209197",
    "cr:1209198",
    "getCrossOriginTransport",
    "recoverableViolation",
    "regeneratorRuntime",
    "requireWeak",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 5e3,
      i = function (a) {
        b("cr:1209197") != null
          ? b("cr:1209197").onLeave(a)
          : b("cr:1209198") != null
          ? b("cr:1209198").onUnload(a)
          : c("recoverableViolation")(
              "Dash prefetch cache onNavigatingAway handler was not properly set",
              "video"
            );
      },
      j = null;
    c("requireWeak")("VideoPlayerShakaBandwidthEstimator", function (a) {
      return (j = a);
    });
    var k = null;
    c("requireWeak")("VideoStreamingTaskQueueProvider", function (a) {
      return (k = a);
    });
    function l(a) {
      return a.audio.length + a.video.length + a.manifest.length;
    }
    function m(a, b) {
      d("ODS").bumpEntityKey(2966, "www_video_playback", "prefetch." + a, b);
    }
    function n(a) {
      var b = "aborted",
        c = { status: 0 },
        d = new Error("Prefetch request aborted.");
      return Object.assign(d, { type: b, url: a, xhr: c });
    }
    function o(a) {
      var b = a.getURI(),
        c = b.toString();
      if (d("VideoAkamaiRequestHelper").isAkamai(c)) {
        var e = d("VideoAkamaiRequestHelper").getRequestHeadersFromUrl(c);
        c = b.removeQueryData(["bytestart", "byteend"]);
        a.setURI(c);
        e &&
          Object.keys(e).forEach(function (b) {
            a.setRequestHeader(b, e[b]);
          });
      }
      return a;
    }
    var p = null,
      q = new Map();
    function r(a, b) {
      b === void 0 && (b = !1);
      return b && d("VideoDashPrefetchCacheUtils").isFBCDN(a)
        ? c("getCrossOriginTransport").withCredentials
        : c("getCrossOriginTransport");
    }
    function s(a) {
      return d("VideoDashPrefetchCacheUtils").isFBCDN(a.url);
    }
    function t(a, b, c) {
      return {
        response: a.slice(b.start + 0, b.end + 1),
        responseTime: c,
        initiator: "XHR_REQUEST",
      };
    }
    a = (function () {
      function a() {
        (this.$2 = new Map()),
          (this.$9 = new Map()),
          (this.$10 = new Map()),
          (this.$1 = new Map()),
          (this.$3 = []),
          (this.$4 = []),
          (this.$5 = 0),
          (this.$6 = c("VideoPlayerPrefetchExperiments").maxPrefetchVideosNum),
          (this.$7 = c(
            "VideoPlayerPrefetchExperiments"
          ).consolidateFragmentedPrefetchRequest);
      }
      var e = a.prototype;
      e.$11 = function (a, b) {
        var e = this;
        b === void 0 && (b = !1);
        var f = a,
          g = window.fetch,
          h = c("VideoPlayerPrefetchExperiments").useFetch;
        if (h && g && "AbortController" in window) {
          var i = new AbortController();
          h = i.signal;
          var j = g(f, {
            signal: h,
            credentials: b ? "include" : "same-origin",
          }).then(function (a) {
            e.$12(j);
            return { initiator: "FETCH", response: a };
          });
          this.$13(a, j);
          this.$3.push(
            babelHelpers["extends"]({}, j, {
              abort: function () {
                i.abort();
              },
            })
          );
          return j;
        }
        var k = new (c("XHRRequest"))(f)
          .setMethod("GET")
          .setResponseType("arraybuffer")
          .setTransportBuilder(r(f, b));
        o(k);
        g = new (c("MaybeNativePromise"))(function (b, c) {
          k.setErrorHandler(function (a) {
            e.$12(k),
              c(d("VideoPlayerShakaError").translateError(a, f, "preload"));
          }),
            k.setResponseHandler(function (a) {
              a = a;
              var c = k;
              e.$12(k);
              b(
                babelHelpers["extends"]({}, c, {
                  response: a,
                  initiator: "XHR_REQUEST",
                })
              );
            }),
            k.setAbortHandler(function () {
              e.$12(k);
              var b = n(a);
              c(b);
            });
        });
        this.$13(a, g);
        this.$3.push(k);
        this.$8 ? this.$8.push(k) : k.send();
        return g;
      };
      e.genPrefetchMpdNow = function (a) {
        return b("regeneratorRuntime").async(
          function (b) {
            while (1)
              switch ((b.prev = b.next)) {
                case 0:
                  if (!this.has(a)) {
                    b.next = 2;
                    break;
                  }
                  return b.abrupt("return", null);
                case 2:
                  return b.abrupt("return", this.$11(a));
                case 3:
                case "end":
                  return b.stop();
              }
          },
          null,
          this
        );
      };
      e.$14 = function (b, c, d) {
        c === void 0 && (c = !1);
        d === void 0 && (d = null);
        var e = [];
        for (var f = 0; f < b.length; f++) {
          var g = a.createQueryStringURL(b[f]);
          this.has(g) ||
            (e.push(
              this.$11(g, c).then(function (a) {
                m("received", 1);
                return a;
              })
            ),
            d != null && this.$2.set(g, d));
        }
        m("sent", e.length);
        return e;
      };
      e.$15 = function (e) {
        var f = this,
          g = a.getConsolidatedURL(e);
        if (g == null) return this.$14(e);
        var h = new (c("XHRRequest"))(g)
          .setMethod("GET")
          .setResponseType("arraybuffer")
          .setTransportBuilder(r(g));
        o(h);
        var i = Date.now(),
          j = [];
        for (var k = 0; k < e.length; k++) {
          var l = a.createQueryStringURL(e[k]),
            n = new (c("Deferred"))();
          this.has(l) || this.$13(l, n.getPromise());
          j.push(n);
        }
        h.setErrorHandler(function (b) {
          f.$12(h);
          for (var a = 0; a < j.length; a++)
            j[a].reject(
              d("VideoPlayerShakaError").translateError(b, g, "preload")
            );
        });
        h.setResponseHandler(function (b) {
          b = b;
          var c = Date.now() - i;
          for (var a = 0; a < e.length; a++) {
            var d = j[a],
              g = e[a];
            d.resolve(t(b, g, c));
          }
          f.$12(h);
        });
        h.setAbortHandler(function () {
          for (var a = 0; a < e.length; a++) {
            var b = j[a];
            b.reject(new Error("Request aborted."));
          }
        });
        this.$3.push(h);
        h.send();
        m("consolidated.sent", 1);
        m("sent", j.length);
        l = j.map(function (a) {
          return a.getPromise().then(function (a) {
            m("received", 1);
            return a;
          });
        });
        b("Promise")
          .all(l)
          .then(function () {
            return m("consolidated.received", 1);
          });
        return l;
      };
      e.$16 = function (a) {
        var b = this,
          d = a.useCredentials,
          e = a.connectionQualityLevel;
        this.$5++;
        var f = this.$7 && !d;
        c("VideoPlayerPrefetchExperiments").enableGlobalSchedulerForPrefetch &&
          (this.$8 = []);
        var g = f ? this.$15(a.video) : this.$14(a.video, d, e);
        f = f ? this.$15(a.audio) : this.$14(a.audio, d, e);
        e = this.$14(a.manifest, d);
        var h = g.concat(f, e);
        if (this.$8) {
          var i = this.$8 || [];
          this.$8 = null;
          var j = "" + a.videoID;
          d = {
            name: "prefetch task, " + j,
            run: function () {
              j && q["delete"](j);
              i.forEach(function (a) {
                return a.send();
              });
              return c("MaybeNativePromise")
                .all(h)
                .then(function () {})
                ["catch"](function () {});
            },
            cancel: function () {},
          };
          k
            ? (c("VideoPlayerPrefetchExperiments")
                .switchPrefetchTaskToHighPriWhenPlayed &&
                j &&
                q.set(j, d),
              k
                .getQueue("video")
                .enqueue(
                  d,
                  c("VideoPlayerPrefetchExperiments").prefetchPriority
                ),
              this.$17())
            : (d.run(),
              c("MaybeNativePromise")
                .all(h)
                .then(function () {
                  return b.$17();
                })
                ["catch"](function () {
                  return b.$17();
                }));
        } else
          c("MaybeNativePromise")
            .all(h)
            .then(function () {
              return b.$17();
            })
            ["catch"](function () {
              return b.$17();
            });
      };
      e.$13 = function (a, b) {
        var e = this;
        a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
        this.$1.values().next().done &&
          i(function () {
            for (var a = 0; a < e.$3.length; a++) e.$3[a].abort();
            e.$3 = [];
            e.$4 = [];
            e.$5 = 0;
            e.$1.clear();
            e.$10.forEach(function (a) {
              c("clearTimeout")(a);
            });
            e.$10.clear();
          });
        this.$1.set(a, b);
        b = c("setTimeout")(function () {
          e.$1.has(a) && e.$1["delete"](a), e.$10["delete"](a);
        }, h);
        this.$10.set(a, b);
      };
      e.$12 = function (a) {
        a = this.$3.indexOf(a);
        a > -1 && this.$3.splice(a, 1);
      };
      e.$17 = function () {
        this.$5--;
        var a = this.$4.shift();
        a && this.$16(a);
      };
      e.has = function (a) {
        a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
        return this.$1.has(a);
      };
      e.getConnectionQualityLevel = function (a) {
        return this.$2.get(a);
      };
      e.getAndDelete = function (a) {
        a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
        var b = this.$1.get(a);
        if (b) {
          m("cache.hit", 1);
          var e = this.$10.get(a);
          e != null && (c("clearTimeout")(e), this.$10["delete"](a));
        } else m("cache.miss", 1);
        this.$1["delete"](a);
        m("retrieve", 1);
        return b;
      };
      e.queueRequestBatch = function (a) {
        this.$6 === 0 || this.$5 < this.$6
          ? this.$16(a)
          : (m("queued", l(a)), this.$4.push(a));
      };
      e.setCachedRepresentations = function (a, b) {
        this.$9.set(a, b);
      };
      e.getCachedRepresentations = function (a) {
        return this.$9.get(a);
      };
      a.getCachedRepresentations = function (b) {
        return a.getInstance().getCachedRepresentations(b);
      };
      a.getInstance = function () {
        p === null && (p = new a());
        return p;
      };
      a.createQueryStringURL = function (a) {
        var b = a.start,
          c = a.end,
          e;
        if (b !== null && b !== void 0 && c !== null && c !== void 0) {
          var f;
          e =
            (f = d("ConstUriUtils").getUri(a.url)) == null
              ? void 0
              : (f = f.addQueryParam("bytestart", b)) == null
              ? void 0
              : (b = f.addQueryParam("byteend", c)) == null
              ? void 0
              : b.toString();
        }
        return (f = e) != null ? f : a.url;
      };
      a.getConsolidatedURL = function (b) {
        var c = "",
          d = Infinity,
          e = 0;
        for (var f = 0; f < b.length; f++) {
          var g = b[f],
            h = g.url,
            i = g.start;
          g = g.end;
          if (h == null || i == null || g == null) return null;
          if (c === "") c = h;
          else if (c !== h) return null;
          d = Math.min(d, i);
          e = Math.max(e, g);
        }
        return a.createQueryStringURL({ url: c, start: d, end: e });
      };
      a.getPrefetchInfoFromRepresentation = function (a) {
        return a.segments.map(function (b) {
          return { url: a.url, start: b.start, end: b.end };
        });
      };
      a.getVideoRepresentationFromRepresentations = function (a, b) {
        var c = a.find(function (a) {
          return a.representation_id.endsWith("d");
        });
        !b && j && (b = j.getBandwidth());
        if (!b) return c;
        for (var d = 0; d < a.length; d++) {
          var e = a[d],
            f = (c && c.bandwidth) || 0;
          if (f > e.bandwidth) continue;
          else b > e.bandwidth && (c = e);
        }
        return c;
      };
      a.loadVideoGivenAllRepresentations = function (b, c, d) {
        if (a.isAutoplayBandwidthRestrained()) return;
        var e = [],
          f = [];
        c.audio.length > 0 &&
          ((e = a.getPrefetchInfoFromRepresentation(c.audio[0])),
          e.length > 0 && f.push(c.audio[0].representation_id));
        var g = [];
        c = a.getVideoRepresentationFromRepresentations(c.video, d);
        c &&
          ((g = a.getPrefetchInfoFromRepresentation(c)),
          g.length > 0 && f.push(c.representation_id));
        d = a.getInstance();
        d.queueRequestBatch({
          audio: e,
          video: g,
          manifest: [],
          videoID: b,
          useCredentials: !1,
        });
        d.setCachedRepresentations(b, f);
      };
      a.isAutoplayBandwidthRestrained = function () {
        return !!j && j.isAutoplayBandwidthRestrained();
      };
      a.loadVideo = function (b, d, e) {
        d = !!d;
        if (
          !c("VideoPlayerPrefetchExperiments").disableShakaBandwidthEstimator &&
          j &&
          j.isAutoplayBandwidthRestrained()
        )
          return;
        if (c("VideoPlayerPrefetchExperiments").disablePrefetchCache) return;
        var f = a.getInstance();
        Array.isArray(b.manifest) || (b.manifest = []);
        b.video || (b.video = []);
        b.audio || (b.audio = []);
        f.queueRequestBatch({
          manifest: b.manifest.filter(s),
          video: b.video.filter(s),
          audio: b.audio.filter(s),
          videoID: b.videoID,
          useCredentials: d,
          connectionQualityLevel: e,
        });
      };
      a.getCacheValue = function (b) {
        return a.getInstance().getAndDelete(b);
      };
      a.getConnectionQualityLevel = function (b) {
        return a.getInstance().getConnectionQualityLevel(b);
      };
      a.hasCacheValue = function (b) {
        return a.getInstance().has(b);
      };
      a.getPrefetchTaskByID = function (a) {
        a = q.get(a) || null;
        return a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "cometPrefetchVideoDash",
  ["VideoDashPrefetchCache"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (window.__comet_ssr_is_server_env_DO_NOT_USE === !0) return;
      a.forEach(function (a) {
        c("VideoDashPrefetchCache").loadVideo(a);
      });
    }
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SilenceableErrorMessageUtils",
  ["killswitch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("killswitch")("COMET_HIDE_SILENT_ERROR_MESSAGE")
        ? !1
        : a.is_silent === !0;
    }
    function b(a) {
      if (typeof a === "object" && a instanceof Error) {
        var b = a.description,
          c = a.source;
        return {
          code: c == null ? void 0 : c.code,
          is_silent: c == null ? void 0 : c.is_silent,
          message: b,
          timestamp: Date.now(),
        };
      }
      return {
        is_silent: (c = a.source) == null ? void 0 : c.is_silent,
        message: a.description,
      };
    }
    g.shouldHideErrorMessage = a;
    g.getMetadataFromError = b;
  },
  98
);
__d(
  "errorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      throw new Error(
        'errorCode("' + a + '"): This should not happen. Oh noes!'
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometRelayErrorHandling",
  ["errorCode", "SilenceableErrorMessageUtils"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    try {
      i = new WeakMap();
    } catch (a) {
      i = null;
    }
    function a(a) {
      var b;
      (b = i) == null ? void 0 : b.set(a, !0);
    }
    function b(a) {
      var b,
        c = a == null ? void 0 : a.source;
      b =
        (b = c == null ? void 0 : c.errorCode) != null
          ? b
          : c == null
          ? void 0
          : c.code;
      return b === 1357001
        ? !1
        : ((c = i) == null ? void 0 : c.get(a)) === !0 ||
            d("SilenceableErrorMessageUtils").shouldHideErrorMessage(
              d("SilenceableErrorMessageUtils").getMetadataFromError(a)
            );
    }
    g.markErrorAsHandled = a;
    g.shouldSkipErrorSideEffects = b;
  },
  98
);
__d(
  "cometWrapNetworkObservable",
  ["CometRelayErrorHandling", "cr:1345926", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      if (!b("cr:1345926"))
        return function (a) {
          return a;
        };
      else
        return function (a) {
          var c = d("relay-runtime").Observable.create(function (c) {
            return a.subscribe({
              complete: c.complete,
              error: function (a) {
                var e,
                  f,
                  g,
                  h = c.error(a);
                if (d("CometRelayErrorHandling").shouldSkipErrorSideEffects(a))
                  return h;
                a = a == null ? void 0 : a.source;
                e =
                  (e =
                    (e = a == null ? void 0 : a.errorCode) != null
                      ? e
                      : a == null
                      ? void 0
                      : a.code) != null
                    ? e
                    : a == null
                    ? void 0
                    : a.error;
                f =
                  (f = a == null ? void 0 : a.errorDescription) != null
                    ? f
                    : a == null
                    ? void 0
                    : a.description;
                g =
                  (g = a == null ? void 0 : a.errorSummary) != null
                    ? g
                    : a == null
                    ? void 0
                    : a.summary;
                e &&
                  g &&
                  f &&
                  b("cr:1345926")(e, g, f, a == null ? void 0 : a.redirectTo);
                return h;
              },
              next: function (a) {
                if (Array.isArray(a))
                  for (
                    var b = a,
                      d = Array.isArray(b),
                      e = 0,
                      b = d
                        ? b
                        : b[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var f;
                    if (d) {
                      if (e >= b.length) break;
                      f = b[e++];
                    } else {
                      e = b.next();
                      if (e.done) break;
                      f = e.value;
                    }
                    f = f;
                    f = h(f);
                    if (f != null) {
                      c.error(f);
                      return;
                    }
                  }
                else {
                  f = h(a);
                  if (f != null) {
                    c.error(f);
                    return;
                  }
                }
                c.next(a);
              },
            });
          });
          return c;
        };
    }
    function h(a) {
      var b = a.data;
      a = Object.prototype.hasOwnProperty.call(a, "errors") ? a.errors : void 0;
      if (Array.isArray(a))
        for (
          var a = a,
            c = Array.isArray(a),
            e = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (c) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (
            f != null &&
            typeof f === "object" &&
            (f.severity === "CRITICAL" || f.severity === "ERROR") &&
            Array.isArray(f.path) &&
            f.path.length === 3 &&
            f.path[0] === "viewer" &&
            f.path[1] === "news_feed" &&
            f.path[2] === "edges"
          ) {
            f =
              b == null
                ? void 0
                : (f = b.viewer) == null
                ? void 0
                : f.news_feed;
            var g = f == null ? void 0 : f.edges;
            if (
              f != null &&
              (g == null || (Array.isArray(g) && g.length === 0))
            )
              return d("relay-runtime").RelayError.create(
                "CometNewsFeed",
                "Error evaluating Comet News Feed, edges cannot be resolved."
              );
          }
        }
    }
    g["default"] = a;
  },
  98
);
__d(
  "RelayFBGCScheduler",
  ["JSScheduler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      d("JSScheduler").scheduleLoggingPriCallback(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "relayFBGetDataID",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").VIEWER_ID,
      h = b("relay-runtime").VIEWER_TYPE;
    function a(a, b) {
      if (b === h) return g;
      return b === "MessagingParticipant" ||
        b === "BlockedUser" ||
        b === "SRTUser"
        ? a.id == null
          ? null
          : b + ":" + a.id
        : a.id;
    }
    e.exports = a;
  },
  null
);
__d(
  "createCometStore",
  [
    "CometRelayConfig",
    "RelayFBGCScheduler",
    "RelayFBOperationLoader",
    "gkx",
    "qex",
    "relay-runtime",
    "relayFBGetDataID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("1151941");
    b = 1e3 * 60 * 15;
    var i = c("qex")._("1393199") ? 3e4 : void 0;
    i != null && (i = Math.max(Math.min(i, b), 0));
    function a(a) {
      var b = new (d("relay-runtime").RecordSource)();
      b = new (d("relay-runtime").Store)(b, {
        gcReleaseBufferSize: d("CometRelayConfig").gc_release_buffer_size,
        gcScheduler: c("RelayFBGCScheduler"),
        getDataID: c("relayFBGetDataID"),
        log: a,
        operationLoader: c("RelayFBOperationLoader"),
        queryCacheExpirationTime: i,
      });
      h || b.holdGC();
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "processRelayPrefetchURIsPayload",
  ["ExecutionEnvironment", "gkx", "promiseDone"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (!d("ExecutionEnvironment").canUseDOM) return;
      a.forEach(function (a) {
        if (typeof a === "string") {
          var b = new Image();
          b.src = a;
          c("gkx")("1601") &&
            typeof ((a = b) == null ? void 0 : a.decode) === "function" &&
            c("promiseDone")(
              b.decode().then(function () {
                b = null;
              })
            );
        }
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "processRelaySRPayload",
  ["HasteResponse", "ifRequireable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f) {
      var g = a.ddd;
      if (!g) {
        e && e();
        return;
      }
      var h = function () {
        return d("HasteResponse").handle(g, {
          source: "relay_3d",
          sourceDetail: b,
          onBlocking: e,
          onLog: f,
        });
      };
      c("ifRequireable")(
        "ReactDOMComet",
        function (a) {
          return a.flushSync(h);
        },
        h
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "withLive",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c = a.metadata;
      c = c.live;
      if (c != null && typeof c === "object") {
        c = h(a);
        a = i(a);
        c == null || a == null || g(0, 45, c, a);
        c != null || a != null || g(0, 46);
        if (c != null) {
          var d = b.poll;
          d == null || d === c || g(0, 47, d, c);
          return babelHelpers["extends"]({}, b, { poll: c });
        }
        if (a != null) {
          d = b.liveConfigId;
          d == null || d === a || g(0, 48, d, a);
          return babelHelpers["extends"]({}, b, { liveConfigId: a });
        }
      }
      return b;
    }
    function h(a) {
      a = a.metadata;
      a = a.live;
      if (a != null && typeof a === "object") {
        a.polling_interval == null ||
          typeof a.polling_interval === "number" ||
          g(0, 49);
        return a.polling_interval;
      }
      return null;
    }
    function i(a) {
      a = a.metadata;
      a = a.live;
      if (a != null && typeof a === "object") {
        a.config_id == null || typeof a.config_id === "string" || g(0, 50);
        return a.config_id;
      }
      return null;
    }
    e.exports = a;
  },
  null
);
__d(
  "withLiveClientPolling",
  ["invariant", "LiveQueryWebClientPollingSwitchList"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "switch_all_use_cases_careful_to_use";
    function a(a, b) {
      var c = a.metadata;
      c = c.live;
      if (c != null && typeof c === "object") {
        c = j(a);
        if (c != null) {
          a = b.liveConfigId;
          a == null || a === c || h(0, 48, a, c);
          a = d(
            "LiveQueryWebClientPollingSwitchList"
          ).liveQueryWebClientPollingSwitchList;
          if (a != null) {
            if (typeof a[c] === "number")
              return babelHelpers["extends"]({}, b, { poll: a[c] });
            if (typeof a[i] === "number" && a[i] > 5e3)
              return babelHelpers["extends"]({}, b, { poll: a[i] });
          }
        }
      }
      return b;
    }
    function j(a) {
      a = a.metadata;
      a = a.live;
      if (a != null && typeof a === "object") {
        a.config_id == null || typeof a.config_id === "string" || h(0, 50);
        return a.config_id;
      }
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createRelayFBNetwork",
  [
    "DTSG",
    "Promise",
    "cr:1110430",
    "gkx",
    "isPromise",
    "killswitch",
    "processRelayPrefetchURIsPayload",
    "processRelaySRPayload",
    "relay-runtime",
    "withLive",
    "withLiveClientPolling",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("cr:1110430");
    var h =
      c("killswitch")("RELAY_BLOCK_NETWORK_ON_3D_STATIC_RESOURCES") === !1 &&
      !c("gkx")("708253");
    function i(a, b, e, f, g, h) {
      a = a.extensions;
      if (!a || a.__resources_processed) {
        e && e();
        return;
      }
      a.__resources_processed = !0;
      if (a.__sr_unprocessed)
        throw d("relay-runtime").RelayError.create(
          "GraphQLError",
          "Fatal Error: Found unprocessed static resource payload"
        );
      var i = a.prefetch_uris;
      c("gkx")("1906451") && (a.prefetch_uris = null);
      i != null && Array.isArray(i) && c("processRelayPrefetchURIsPayload")(i);
      i = a.prefetch_dash_segments;
      c("gkx")("1906451") && (a.prefetch_dash_segments = null);
      i != null && Array.isArray(i) && f && f(i);
      f = a.sr_payload;
      c("gkx")("1906451") && (a.sr_payload = null);
      f != null && typeof f === "object"
        ? c("processRelaySRPayload")(f, b, e, function (a) {
            h && h({ srPayloadStats: a });
          })
        : e && e();
      i = a.dtsgToken;
      i && typeof i === "string" && d("DTSG").setToken(i);
      f = a.prefetch_comet_routing;
      c("gkx")("1906451") && (a.prefetch_comet_routing = null);
      if (g != null && f != null && typeof f === "object") {
        b = f.data;
        e = f.uris;
        (b != null || e != null) && g(e, b);
      }
    }
    function j(a, c, d, e, f) {
      var g;
      g = (g = a.extensions) == null ? void 0 : g.sr_payload;
      if (g != null && typeof g === "object")
        return new (b("Promise"))(function (b) {
          i(
            a,
            c,
            function () {
              b(a);
            },
            d,
            e,
            f
          );
        });
      i(a, c, null, d, e, f);
      return a;
    }
    function k(a, b) {
      return d("relay-runtime").Observable.create(function (c) {
        var e = !1,
          f,
          g,
          h = [];
        function i(a) {
          if (g) h.push(a);
          else
            try {
              d("relay-runtime")
                .Observable.from(b(a))
                .subscribe({
                  start: function (a) {
                    g = a;
                  },
                  next: c.next,
                  error: c.error,
                  complete: function () {
                    (g = void 0),
                      h.length !== 0 ? i(h.shift()) : e && c.complete();
                  },
                });
            } catch (a) {
              c.error(a);
            }
        }
        a.subscribe({
          start: function (a) {
            f = a;
          },
          next: i,
          error: c.error,
          complete: function () {
            (e = !0), g || c.complete();
          },
        });
        return function () {
          g && (g.unsubscribe(), (g = void 0)), f.unsubscribe(), (h.length = 0);
        };
      });
    }
    function a(a, e, f, g) {
      var l = d("relay-runtime").Network.create(a, e);
      return {
        execute: function (a, d, e, m, n) {
          e = c("withLiveClientPolling")(a, c("withLive")(a, e));
          return h
            ? k(l.execute(a, d, e, m, n), function (d) {
                if (Array.isArray(d)) {
                  var e = [],
                    h = !1;
                  d.forEach(function (b) {
                    b = j(b, a.name, f, g, n);
                    h = h || c("isPromise")(b);
                    e.push(b);
                  });
                  return h ? b("Promise").all(e) : e;
                }
                return j(d, a.name, f, g, n);
              })
            : l.execute(a, d, e, m, n)["do"]({
                next: function (b) {
                  Array.isArray(b)
                    ? b.forEach(function (b) {
                        i(b, a.name, null, f, g, n);
                      })
                    : i(b, a.name, null, f, g, n);
                },
              });
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createChunkedResponseParser",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "\r\n",
      j = 2;
    function a(a, b) {
      var c = 0,
        d = function (d, e, f) {
          b && ((d = b(d)), d == null || typeof d === "string" || h(0, 4071));
          if (d) {
            var g = d.length;
            while (c < g) {
              var k = d.indexOf(i, c);
              if (k < 0)
                if (f) k = g;
                else break;
              k = d.slice(c, k);
              c += k.length + j;
              a(k, e, f && c >= g);
            }
          } else f && a("", e, !0);
        };
      d.parseStreaming = !0;
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createRelayChunkedResponseParser",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "\r\n",
      i = 2;
    function a(a, b) {
      var c = 0,
        d = function (d, e, f) {
          d = d;
          b && ((d = b(d)), d == null || typeof d === "string" || g(0, 42548));
          if (d != null) {
            var j = d.length,
              k = [];
            while (c < j) {
              var l = d.indexOf(h, c);
              if (l < 0)
                if (f) l = j;
                else break;
              l = d.slice(c, l);
              c += l.length + i;
              k.push({
                responseText: l,
                responseHeaders: e,
                isComplete: f && c >= j,
              });
            }
            k.length > 0 && a(k);
          } else
            f && a([{ responseText: "", responseHeaders: e, isComplete: !0 }]);
        };
      d.parseStreaming = !0;
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  "getRelayAPIRequestHandler",
  ["cr:696703"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var c = a;
      if (b("cr:696703")) {
        var d =
          b(
            "cr:696703"
          ).getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE();
        c = function () {
          for (var b = arguments.length, c = new Array(b), e = 0; e < b; e++)
            c[e] = arguments[e];
          d(function () {
            return a.apply(void 0, c);
          });
        };
        c.parseStreaming = a.parseStreaming;
      }
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "RelayAPIRequest",
  [
    "invariant",
    "NetworkStatus",
    "URI",
    "XHRHttpError",
    "XHRRequest",
    "createChunkedResponseParser",
    "createRelayChunkedResponseParser",
    "forEachObject",
    "getRelayAPIRequestHandler",
    "getSameOriginTransport",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
      return (
        a === b("XHRHttpError").HTTP_TRANSPORT_ERROR ||
        a === b("XHRHttpError").HTTP_SERVER_ERROR
      );
    }
    a = (function () {
      function a(a, c, d) {
        (this.$1 = !1),
          this.setURI(a),
          this.setMethod("POST"),
          this.setTransportBuilder(b("getSameOriginTransport")),
          (this.$15 = c),
          (this.$16 = d);
      }
      var c = a.prototype;
      c.setURI = function (a) {
        this.$1 && g(0, 2124);
        this.$2 = new (h || (h = b("URI")))(a);
        return this;
      };
      c.setMethod = function (a) {
        this.$1 && g(0, 2125);
        this.$3 = a;
        return this;
      };
      c.setData = function (a) {
        this.$1 && g(0, 2126);
        this.$4 = a;
        return this;
      };
      c.setRawData = function (a) {
        this.$1 && g(0, 2127);
        this.$5 = a;
        return this;
      };
      c.setTrackingName = function (a) {
        this.$8 = a;
        return this;
      };
      c.setPerformanceLogger = function (a) {
        this.$17 = a;
        return this;
      };
      c.setRequestHeaders = function (a) {
        this.$1 && g(0, 2128);
        this.$6 = a;
        return this;
      };
      c.setTransportBuilder = function (a) {
        var b = this;
        this.$1 && g(0, 2129);
        var c = a;
        this.$9 = function () {
          var a = c();
          a.setTrackingName && a.setTrackingName(b.$8);
          a.setPerformanceLogger && b.$17 && a.setPerformanceLogger(b.$17);
          return a;
        };
        return this;
      };
      c.setResponseFilter = function (a) {
        this.$1 && g(0, 2130);
        this.$10 = a;
        return this;
      };
      c.setResponseChunkHandler = function (a) {
        this.$1 && g(0, 2131);
        this.$11 == null || g(0, 42544);
        this.$12 = a;
        return this;
      };
      c.setResponseBatchChunkHandler = function (a) {
        this.$1 && g(0, 2131);
        this.$12 == null || g(0, 42545);
        this.$11 = a;
        return this;
      };
      c.setErrorHandler = function (a) {
        this.$1 && g(0, 2132);
        this.$13 = a;
        return this;
      };
      c.setTimeoutHandler = function (a) {
        this.$1 && g(0, 2133);
        this.$14 = a;
        return this;
      };
      c.setSkipRetry = function (a) {
        this.$7 = a;
        return this;
      };
      c.send = function () {
        var a = this;
        this.$1 && g(0, 2134);
        this.$1 = !0;
        if (!this.$2 || !this.$2.toString()) {
          this.$13 &&
            this.$13({
              errorCode: "HTTP_CLIENT_ERROR",
              errorType: "HTTP",
              errorMsg:
                "No uri provided - make sure RelayAPIConfig is properly setup.",
            });
          return { abort: function () {} };
        }
        var c,
          d = 0,
          e = 0,
          f,
          h = function () {
            return !a.$7 && d <= a.$15.length;
          },
          j = function () {
            var b = a.$15[d - 1];
            b = e + b;
            var f = setTimeout(function () {
              c = k();
            }, b - Date.now());
            c = {
              abort: function () {
                clearTimeout(f);
              },
            };
          },
          k = function () {
            d++;
            e = Date.now();
            var g;
            a.$11
              ? ((g = b("createRelayChunkedResponseParser")(a.$11, a.$10)),
                (g = b("getRelayAPIRequestHandler")(g)))
              : a.$12 &&
                ((g = b("createChunkedResponseParser")(a.$12, a.$10)),
                (g = b("getRelayAPIRequestHandler")(g)));
            var k = a.$13,
              l = function (a) {
                h() && i(a.errorCode)
                  ? (b("warning")(
                      !1,
                      "RelayAPIRequest: Transient HTTP error, retrying. %s %s %s",
                      a.errorType || "",
                      a.errorCode || "",
                      a.errorMsg || ""
                    ),
                    !b("NetworkStatus").isOnline()
                      ? ((f = b("NetworkStatus").onChange(function (a) {
                          a = a.online;
                          a && (j(), f.remove());
                        })),
                        (c = {
                          abort: function () {
                            f.remove();
                          },
                        }))
                      : j())
                  : k && k(a);
              },
              m = a.$14,
              n = function () {
                h()
                  ? (b("warning")(
                      !1,
                      "RelayAPIRequest: HTTP timeout, retrying."
                    ),
                    j())
                  : m && m();
              },
              o = new (b("XHRRequest"))(a.$2)
                .setMethod(a.$3)
                .setData(a.$4)
                .setTransportBuilder(a.$9)
                .setErrorHandler(l)
                .setResponseHandler(g)
                .setTimeout(a.$16)
                .setTimeoutHandler(n);
            a.$5 != null && o.setRawData(a.$5);
            a.$6 &&
              b("forEachObject")(a.$6, function (a, b) {
                o.setRequestHeader(b, a);
              });
            o.send();
            return o;
          };
        c = k();
        return {
          abort: function () {
            c && c.abort();
          },
        };
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "RelayRuntime",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("relay-runtime");
  },
  null
);
__d(
  "RelayGraphQLRequestUtils",
  ["CSRFGuard", "RelayRuntime", "XHRHttpError"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").RelayError;
    a = {
      createErrorFromPayload: function (a) {
        if (typeof a === "object")
          if (a.code || a.description) {
            var b, c;
            b = (b = a.debug_info) != null ? b : "";
            c = (c = a.exception) == null ? void 0 : c.message;
            c != null && (b = c + "\n\n" + b);
            c = g.create(
              "GraphQLError",
              "GraphQL server responded with error %s: %s\n%s",
              a.code,
              a.description,
              b
            );
          } else
            c = g.create(
              "GraphQLError",
              "GraphQL server responded with error: %s",
              JSON.stringify(a)
            );
        else
          c = g.create(
            "GraphQLError",
            "GraphQL server responded with an error: %s",
            a
          );
        b = c;
        b.source = a;
        typeof a === "object" &&
          ((b.code = a.code),
          (b.description = a.description),
          (b.summary = a.summary),
          (b.debug_info = a.debug_info));
        return b;
      },
      createErrorFromXHR: function (a, c) {
        var d;
        a.errorCode === b("XHRHttpError").HTTP_TRANSPORT_ERROR
          ? (d = g.createWarning("NetworkTransportError", c))
          : a.errorCode === b("XHRHttpError").HTTP_CLIENT_ERROR &&
            a.errorMsg &&
            a.errorMsg.match(/OAuthException/)
          ? (d = g.create("NetworkOAuthError", c))
          : (d = g.create("NetworkRequestError", c));
        d.source = a;
        return d;
      },
      getRelayAPIConfigHeaders: function (a, b, c) {
        a = babelHelpers["extends"]({}, a);
        b && (a["Content-Encoding"] = b);
        c && (a["User-Agent"] = c);
        return a;
      },
      parsePayload: function (a) {
        if (b("CSRFGuard").exists(a)) {
          var c = h(b("CSRFGuard").clean(a));
          if (
            Object.prototype.hasOwnProperty.call(c, "data") ||
            !Object.prototype.hasOwnProperty.call(c, "error")
          )
            return c;
          var d = g.createWarning(
            "GraphQLXControllerError",
            "GraphQL server responded with error %s: %s\n%s",
            c.error,
            c.errorSummary,
            c.errorDescription
          );
          d = d;
          d.source = c;
          d.code = c.error;
          d.description = c.errorDescription;
          d.summary = c.errorSummary;
          throw d;
        }
        return h(a);
      },
    };
    function h(a) {
      try {
        return JSON.parse(a);
      } catch (b) {
        throw g.create(
          "JSONParseError",
          "Response contained invalid JSON.\nReason: %s\n%s",
          b.message,
          a
        );
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayAsyncStreamPool",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 0,
      j = 1,
      k = 2;
    a = (function () {
      function a() {
        (this.$1 = 0), (this.$2 = new Map());
      }
      var b = a.prototype;
      b.forceComplete = function (a) {
        a = this.$3(a);
        if (a.status !== i) return;
        var b = a.observers;
        a.status = k;
        a.events.push({ kind: "complete", sequenceNumber: a.events.length });
        a.observers = new Map();
        b.forEach(function (a) {
          return a.complete();
        });
      };
      b.forceError = function (a, b) {
        a = this.$3(a);
        if (a.status !== i) return;
        var c = a.observers;
        a.status = k;
        a.events.push({
          kind: "error",
          error: b,
          sequenceNumber: a.events.length,
        });
        a.observers = new Map();
        c.forEach(function (a) {
          return a.error(b);
        });
      };
      b.complete = function (a, b) {
        (Number.isInteger(b) && b >= 0) || h(0, 14878, b);
        var c = this.$3(a);
        if (c.status !== i) return;
        var d = c.events.length;
        if (b === d) {
          var e = c.observers;
          c.status = k;
          c.events.push({ kind: "complete", sequenceNumber: b });
          c.observers = new Map();
          e.forEach(function (a) {
            return a.complete();
          });
        } else
          (b > d &&
            !Object.prototype.hasOwnProperty.call(c.pendingEvents, b)) ||
            h(0, 14879, b, a),
            (c.status = j),
            (c.pendingEvents[b] = { kind: "complete", sequenceNumber: b });
      };
      b.error = function (a, b, c) {
        (Number.isInteger(c) && c >= 0) || h(0, 14878, c);
        var d = this.$3(a);
        if (d.status !== i) return;
        var e = d.events.length;
        if (c === e) {
          var f = d.observers;
          d.status = k;
          d.events.push({ kind: "error", error: b, sequenceNumber: c });
          d.observers = new Map();
          f.forEach(function (a) {
            return a.error(b);
          });
        } else
          (c > e &&
            !Object.prototype.hasOwnProperty.call(d.pendingEvents, c)) ||
            h(0, 14879, c, a),
            (d.status = j),
            (d.pendingEvents[c] = {
              kind: "error",
              error: b,
              sequenceNumber: c,
            });
      };
      b.next = function (a, b, c) {
        (Number.isInteger(c) && c >= 0) || h(0, 14878, c);
        var d = this.$3(a);
        if (d.status === k) return;
        var e = d.events.length;
        if (c === e) {
          var f = d.observers;
          d.events.push({ kind: "next", data: b, sequenceNumber: c });
          f.forEach(function (a) {
            return a.next(b);
          });
          var g = d.pendingEvents,
            i = function (b) {
              var c = g[b];
              if (c == null) return "break";
              d.events.push(c);
              switch (c.kind) {
                case "complete":
                  d.status = k;
                  d.observers = new Map();
                  f.forEach(function (a) {
                    return a.complete();
                  });
                  return { v: void 0 };
                case "error":
                  d.status = k;
                  d.observers = new Map();
                  f.forEach(function (a) {
                    return a.error(c.error);
                  });
                  return { v: void 0 };
                case "next":
                  f.forEach(function (a) {
                    return a.next(c.data);
                  });
                  break;
                default:
                  c.kind, h(0, 14593, c.kind, a);
              }
            };
          _loop: for (var j = e + 1; j < g.length; j++) {
            var l = i(j);
            switch (l) {
              case "break":
                break _loop;
              default:
                if (typeof l === "object") return l.v;
            }
          }
        } else
          (c > e &&
            !Object.prototype.hasOwnProperty.call(d.pendingEvents, c)) ||
            h(0, 14879, c, a),
            (d.pendingEvents[c] = { kind: "next", data: b, sequenceNumber: c });
      };
      b.clear = function (a) {
        this.$2["delete"](a);
      };
      b.has = function (a) {
        return this.$2.has(a);
      };
      b.subscribe = function (a, b) {
        var c = this.$3(a),
          d = this.$1++,
          e = c.events;
        e.length !== 0 &&
          e.forEach(function (c) {
            switch (c.kind) {
              case "complete":
                b.complete();
                break;
              case "error":
                b.error(c.error);
                break;
              case "next":
                b.next(c.data);
                break;
              default:
                c.kind, h(0, 14593, c.kind, a);
            }
          });
        var f = c.observers;
        f.set(d, b);
        e = {
          unsubscribe: function () {
            f["delete"](d);
          },
        };
        b.start(e);
        return e;
      };
      b.$3 = function (a) {
        var b = this.$2.get(a);
        b == null &&
          ((b = {
            status: i,
            events: [],
            observers: new Map(),
            pendingEvents: [],
          }),
          this.$2.set(a, b));
        return b;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "stableStringify",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return (
        a !== null && Object.prototype.toString.call(a) === "[object Object]"
      );
    }
    function h(a) {
      var b = Array.isArray(a),
        c = g(a);
      if (b || c) {
        c = Object.keys(a);
        if (c.length) {
          c = c.sort().map(function (b) {
            var c = a[b],
              d;
            g(c) || Array.isArray(c) ? (d = h(c)) : (d = JSON.stringify(c));
            return b + ":" + d;
          });
          if (b) return "[" + c.join(",") + "]";
          else return "{" + c.join(",") + "}";
        }
      }
      return JSON.stringify(a);
    }
    f["default"] = h;
  },
  66
);
__d(
  "stableStringifyPrefetchedRelayVariablesWithActor",
  ["stableStringify"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = ["$actorID:" + a];
      var d = Object.keys(b).sort();
      for (var e = 0; e < d.length; e++) {
        var f = d[e],
          g = b[f];
        g != null && a.push(f + ": " + c("stableStringify")(g));
      }
      return "{" + a.join(",") + "}";
    }
    g["default"] = a;
  },
  98
);
__d(
  "RelayPrefetchedStreamCache",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "RelayAsyncStreamPool",
    "clearImmediate",
    "setImmediateAcrossTransitions",
    "stableStringifyPrefetchedRelayVariablesWithActor",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (c("RelayAsyncStreamPool"))(),
      i = {},
      j = {},
      k = {};
    function l(a, b) {
      return Object.prototype.hasOwnProperty.call(k, a) ? k[a][b] : null;
    }
    function m(a, b, c) {
      Object.prototype.hasOwnProperty.call(k, a)
        ? (k[a][b] = c)
        : ((k[a] = {}), (k[a][b] = c));
    }
    function n(a, b) {
      if (Object.prototype.hasOwnProperty.call(i, a)) {
        var c = i[a][b];
        c != null && h.clear(c);
        delete i[a][b];
        Object.keys(i[a]).length === 0 && delete i[a];
      }
      Object.prototype.hasOwnProperty.call(j, a) &&
        (delete j[a][b], Object.keys(j[a]).length === 0 && delete j[a]);
      Object.prototype.hasOwnProperty.call(k, a) &&
        (delete k[a][b], Object.keys(k[a]).length === 0 && delete k[a]);
    }
    function o(a, b) {
      var d = l(a, b);
      d && (c("clearImmediate")(d), n(a, b));
    }
    function p(a, b) {
      l(a, b) ||
        m(
          a,
          b,
          c("setImmediateAcrossTransitions")(function () {
            n(a, b);
          })
        );
    }
    function q(a, b) {
      return Object.prototype.hasOwnProperty.call(i, a) ? i[a][b] : null;
    }
    function r(a, b, c) {
      Object.prototype.hasOwnProperty.call(i, a) || (i[a] = {}),
        Object.prototype.hasOwnProperty.call(j, a) || (j[a] = {}),
        (j[a][b] = !1),
        (i[a][b] = c);
    }
    function a(a, b, d) {
      a = c("stableStringifyPrefetchedRelayVariablesWithActor")(a, d);
      p(b, a);
    }
    function b(a, b, e, f, g, k) {
      k === void 0 && (k = !1);
      a = c("stableStringifyPrefetchedRelayVariablesWithActor")(a, e);
      e = q(b, a);
      if (e != null) {
        k || (j[b][a] = !0);
        return h.subscribe(e, f);
      }
      if (
        i[b] &&
        Object.values(j[b]).filter(function (a) {
          return !a;
        }).length > 0
      ) {
        k = Object.keys(i[b]);
        c("FBLogger")("RelayQueryPreloader")
          .addMetadata("RELAY_PRELOADER", "QUERY_ID", b)
          .addMetadata(
            "RELAY_PRELOADER",
            "QUERY_NAME",
            (e = g) != null ? e : "unknown"
          )
          .addToCategoryKey((e = g) != null ? e : b)
          .warn(
            "RelayPrefetchedStreamCache.subscribe(): Could not find preloader for query with actor ID and variables: `%s`\n\nbut had data for that query with actorID/variables:\n `%s`\n",
            a,
            k.join("||")
          );
      }
      if (!d("ExecutionEnvironment").canUseDOM) {
        c("FBLogger")("RelayQueryPreloader")
          .addMetadata("RELAY_PRELOADER", "QUERY_ID", b)
          .addMetadata(
            "RELAY_PRELOADER",
            "QUERY_NAME",
            (e = g) != null ? e : "unknown"
          )
          .addToCategoryKey((k = g) != null ? k : b)
          .mustfix(
            "RelayPrefetchedStreamCache:.get: Missing relay query preloader for query: %s with actorID and variables %s. Make sure your relay preloaders are configured. https://fburl.com/comet_preloading",
            g != null ? g : b,
            a
          );
      }
      e = !1;
      k = {
        unsubscribe: function () {
          e = !0;
        },
      };
      f.start(k);
      e || f.complete();
      return k;
    }
    function e(a, b) {
      var d = null,
        e = 0,
        f = null;
      if (b != null) {
        var g;
        d = b.result;
        e = (g = b.sequence_number) != null ? g : 0;
        f = b.complete;
        typeof f !== "boolean" &&
          c("FBLogger")("RelayQueryPreloader").mustfix(
            "RelayPrefetchedStreamCache:.next: Expected GraphQL preloader `complete` field to be a boolean, got `%s` for preloader `%s`.",
            String(f),
            a
          );
      }
      d != null && h.next(a, d, e);
      g = d == null || f !== !1;
      g && h.complete(a, e + 1);
    }
    function f(a, b, c) {
      c === void 0 && (c = 0), c === 0 ? h.forceError(a, b) : h.error(a, b, c);
    }
    function s(a, b, d, e) {
      var f = c("stableStringifyPrefetchedRelayVariablesWithActor")(e, d);
      o(b, f);
      var g = q(b, f);
      g != null &&
        (c("FBLogger")("RelayQueryPreloader")
          .addMetadata("RELAY_PRELOADER", "QUERY_ID", b)
          .warn(
            "RelayPrefetchedStreamCache::registerPreloader(): You must not register more than one preloader for the query with ID `%s` and actorID/variables `%s`. This could result in stale data.",
            b,
            c("stableStringifyPrefetchedRelayVariablesWithActor")(e, d)
          ),
        h.forceComplete(g),
        n(b, f));
      r(b, f, a);
    }
    g.clear = a;
    g.subscribe = b;
    g.next = e;
    g.error = f;
    g.registerPreloader = s;
  },
  98
);
__d(
  "RelayPrefetchedResponseProvider",
  ["RelayGraphQLRequestUtils", "RelayPrefetchedStreamCache", "RelayRuntime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").Observable;
    a = {
      get: function (a, c, d, e, f) {
        return g.create(function (f) {
          var g = function (a) {
              if (!a) {
                f.complete();
                return;
              }
              if (a.errors)
                for (
                  var c = a.errors,
                    d = Array.isArray(c),
                    e = 0,
                    c = d
                      ? c
                      : c[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]();
                  ;

                ) {
                  var g;
                  if (d) {
                    if (e >= c.length) break;
                    g = c[e++];
                  } else {
                    e = c.next();
                    if (e.done) break;
                    g = e.value;
                  }
                  g = g;
                  if (g.severity === "CRITICAL") {
                    f.error(
                      b("RelayGraphQLRequestUtils").createErrorFromPayload(g)
                    );
                    return;
                  }
                }
              f.next(a);
            },
            h = b("RelayPrefetchedStreamCache").subscribe(
              a,
              c,
              d,
              {
                complete: f.complete,
                error: function (a) {
                  return f.complete();
                },
                next: g,
                start: function () {},
              },
              e
            );
          return function () {
            h != null && (h.unsubscribe(), (h = null)),
              b("RelayPrefetchedStreamCache").clear(a, c, d);
          };
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "RelayWWWInitialRolloutResolver",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [
        {
          gk: function () {
            return !0;
          },
          config_ids: new Set(["relay_live_query_demo_intern_task"]),
        },
        {
          gk: function () {
            return c("gkx")("1369861");
          },
          config_ids: new Set([
            "relay_queue_manager",
            "relay_queue_manager_root_calls",
            "relay_queue_manager_sidebar_searches_sets",
          ]),
        },
        {
          gk: function () {
            return c("gkx")("1414060");
          },
          config_ids: new Set([
            "relay_work_galahad_meeting_calendar",
            "relay_work_galahad_admin_bookmarks",
          ]),
        },
        {
          gk: function () {
            return c("gkx")("1443173");
          },
          config_ids: new Set([
            "streamer_dashboard_comments",
            "streamer_dashboard_moderation",
          ]),
        },
        {
          gk: function () {
            return c("gkx")("1414691");
          },
          config_ids: new Set(["www_wp_cc_preview_uri"]),
        },
        {
          gk: function () {
            return c("gkx")("1477298");
          },
          config_ids: new Set([
            "relay_sevmanager_comment_panel",
            "relay_sevmanager_incident_report_panel",
            "relay_sevmanager_summary_panel",
            "relay_sevmanager_escalation_panel",
          ]),
        },
        {
          gk: function () {
            return c("gkx")("1443174");
          },
          config_ids: new Set([
            "rtc_web_vcl_update_query",
            "sandcastle_job_root",
            "www_lwi_banner",
            "m_relay_dtp_activity",
            "GHOSTBUSTER_CONFIG",
          ]),
        },
        {
          gk: function () {
            return c("gkx")("1443175");
          },
          config_ids: new Set([
            "sev_recovery_metric_panel",
            "relay_ops_center_blockers",
            "relay_daiquery_query_version",
            "lead_gen_goldilocks_stage_count",
            "relay_launch_manager_attachments",
            "relay_opscenter_issue_details",
            "relay_dtp_activity",
            "relay_global_support_activity_code_selector_query",
            "smart_office_stargates_page",
            "relay_opscenter_powersearch_issues",
            "relay_recruiting_requisitions",
            "canvas_document_root_container",
            "relay_consent_order",
            "db_portal_aosc_running_jobs_notification",
            "relay_dataops_configerator",
            "db_portal_olm_notification",
            "relay_opscenter_issue_groups",
            "svc_deployment_jobs_chart_sidebar_task_states",
            "relay_graphql_record_server_poll",
          ]),
        },
        {
          gk: function () {
            return c("gkx")("1865464");
          },
          config_ids: new Set([
            "comet_lwi_payment_method_section",
            "comet_video_viewer_tagged_products",
            "comet_live_together",
            "comet_billing_blue_on_comet_util",
            "comet_billing_account_info_collection_util",
            "gemini_calendar_connection_loading",
            "comet_billing_required_wizard_name",
            "comet_coplay_discovery_rooms_query",
            "gemini_garden_badge_unread_count",
            "comet_live_event_manager_list",
            "comet_live_event_root_query",
            "gemini_garden_chats_badge_unread_count",
            "comet_live_event_video_indicator",
          ]),
        },
      ],
      i = new Set(["relay_snoop_case_details_live_container"]);
    function a(a) {
      if (i.has(a)) return !1;
      for (var b = 0; b < h.length; b++) {
        var d = h[b];
        if (d.config_ids != null && d.config_ids.has(a)) return d.gk();
      }
      return c("gkx")("1443176");
    }
    g.enableWWWInitial = a;
  },
  98
);
__d(
  "getAnalyticsTags",
  ["relay-runtime", "requireWeak"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = [];
      c("requireWeak")("QPLUserFlow", function (b) {
        b = b.getActiveFlowIDs();
        b.length > 0 && a.push("qpl_active_flow_ids=" + b.sort().join(","));
      });
      return d("relay-runtime").Observable.from(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "createRelayFBNetworkFetch",
  [
    "invariant",
    "RelayAPIConfig",
    "RelayAPIRequest",
    "RelayGraphQLRequestUtils",
    "RelayPrefetchedResponseProvider",
    "RelayRuntime",
    "RelayWWWInitialRolloutResolver",
    "getAnalyticsTags",
    "getAsyncParams",
    "getCrossOriginTransport",
    "getSameOriginTransport",
    "nullthrows",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (d = b("RelayRuntime")).Observable,
      i = d.RelayError,
      j = d.RelayProfiler,
      k = d.RelayFeatureFlags;
    function l(a) {
      return a.operationKind === "mutation";
    }
    function m(a) {
      return a.operationKind === "query";
    }
    function n(b, c) {
      a.FormData != null || g(0, 19002);
      var d = new FormData();
      for (var e in b)
        Object.prototype.hasOwnProperty.call(b, e) && d.append(e, b[e]);
      for (var f in c)
        Object.prototype.hasOwnProperty.call(c, f) && d.append(f, c[f]);
      return d;
    }
    function o(a) {
      a = a.cacheID ? a.cacheID : a.id;
      a != null || g(0, 22754);
      return a;
    }
    function p(a) {
      a = a == null ? void 0 : a.performanceLogger;
      if (
        a != null &&
        typeof a === "object" &&
        typeof a.startTimespan === "function"
      ) {
        a = a;
        return a;
      }
    }
    function c(a) {
      var c = a.graphURI,
        d = a.transportBuilder,
        e = a.getAdditionalData,
        f = a.getAdditionalHeaders,
        h = a.queryResponseCache,
        i = a.liveQueryFetchWithWWWInitialFn,
        j = a.liveQueryFetchFn,
        l = a.wrapObservableFn,
        m = a.accessToken,
        n = a.actorID,
        o = a.customHeaders,
        w = a.fetchTimeout,
        x = a.getAnalyticsTags,
        y = x === void 0 ? b("getAnalyticsTags") : x,
        z = a.retryDelays,
        A = a.userAgent,
        B = a.xhrEncoding,
        C = a.useXController,
        D = a.tokenProxy,
        E = a.batchResponseChunks;
      return function (a, x, F, G, H) {
        var I, J, K, L, M, N;
        I = (I = c) != null ? I : b("RelayAPIConfig").graphURI;
        var O = h;
        J = (J = n) != null ? J : b("RelayAPIConfig").actorID;
        K = (K = m) != null ? K : b("RelayAPIConfig").accessToken;
        L = (L = C) != null ? L : b("RelayAPIConfig").useXController;
        k.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL &&
          I.addQueryData({ __query: a.name });
        M =
          (M = d) != null
            ? M
            : L
            ? b("getSameOriginTransport")
            : b("RelayAPIConfig").withCredentials
            ? b("getCrossOriginTransport").withCredentials
            : b("getCrossOriginTransport");
        L = e ? e() : L ? { av: J } : { access_token: K };
        N = f
          ? f()
          : b("RelayGraphQLRequestUtils").getRelayAPIConfigHeaders(
              (N = o) != null ? N : b("RelayAPIConfig").customHeaders,
              (N = B) != null ? N : b("RelayAPIConfig").xhrEncoding,
              (N = A) != null ? N : b("RelayAPIConfig").userAgent
            );
        var P = {
            queryName: a.name,
            usedCache: !1,
            usedPrefetcher: !1,
            serverTimestamp: null,
            transactionId: F.transactionId,
          },
          Q = p(F == null ? void 0 : F.metadata);
        N = v(
          I,
          M,
          N,
          a,
          x,
          G,
          L,
          y,
          (I = z) != null ? I : b("RelayAPIConfig").retryDelays,
          (M = w) != null ? M : b("RelayAPIConfig").fetchTimeout,
          D,
          Q,
          E
        );
        O && (N = u(N, a, x, O));
        G = r(F);
        G != null && (N = G.withDiskCacheSave(a, J, x, N));
        L = s(a, x, P, O, F, J, H, Q);
        I = null;
        F.liveConfigId != null &&
          (!b("RelayWWWInitialRolloutResolver").enableWWWInitial(
            F.liveConfigId
          ) ||
            i == null) &&
          (j != null || g(0, 37288, F.liveConfigId),
          (I = j(a, x, {
            actor_id: J,
            access_token: K,
            config_id: F.liveConfigId,
          })));
        M = I ? L.concat(I) : L;
        if (G != null) {
          Q = G.getResponse(a, J, x);
          M = M.ifEmpty(Q);
        }
        if (O) {
          I = t(a, x, P, F, O, H);
          M = M.ifEmpty(I);
        }
        M = M.ifEmpty(N);
        k.ENABLE_DO_NOT_WRAP_LIVE_QUERY && (M = l != null ? l(M) : M);
        F.liveConfigId != null &&
          b("RelayWWWInitialRolloutResolver").enableWWWInitial(
            F.liveConfigId
          ) &&
          i != null &&
          (M = i(
            a,
            x,
            { actor_id: J, access_token: K, config_id: F.liveConfigId },
            M
          ));
        k.ENABLE_DO_NOT_WRAP_LIVE_QUERY || (M = l != null ? l(M) : M);
        return q(P, M);
      };
    }
    function q(a, b) {
      var c;
      return b["do"]({
        start: function () {
          c = j.profile("fetchRelayQuery", a);
        },
        next: function (b) {
          var d;
          if (
            !Array.isArray(b) &&
            ((d = b.extensions) == null ? void 0 : d.server_metadata) != null &&
            ((d = b.extensions.server_metadata) == null
              ? void 0
              : d.request_start_time_ms) != null &&
            ((d = b.extensions.server_metadata) == null
              ? void 0
              : d.time_at_flush_ms) != null
          ) {
            d = b.extensions.server_metadata;
            b = d.request_start_time_ms;
            d = d.time_at_flush_ms;
            a.serverTimestamp = { startTime: Number(b), endTime: Number(d) };
          }
          c.stop();
        },
        error: function (a) {
          c.stop(a);
        },
      });
    }
    function r(a) {
      return a == null
        ? void 0
        : (a = a.metadata) == null
        ? void 0
        : a.queryResponseDiskCache;
    }
    function s(a, c, d, e, f, i, j, k) {
      if (!m(a))
        return h.create(function (a) {
          return a.complete();
        });
      var l = o(a);
      f =
        (f != null &&
          f.metadata != null &&
          f.metadata.prefetchedResponseProvider) ||
        void 0;
      f != null && (typeof f.get === "function" || g(0, 2666), (f = f));
      f = (f = f) != null ? f : b("RelayPrefetchedResponseProvider");
      f = f.get(i, l, c, a.name, k);
      return f.map(function (a) {
        j != null && j({ prefetched: !0 });
        d.usedPrefetcher = !0;
        e && e.set(l, c, a);
        return a;
      });
    }
    function t(a, b, c, d, e, f) {
      return h.create(function (g) {
        if (m(a) && !d.force) {
          var h = e.get(o(a), b);
          h && (f != null && f({ cached: !0 }), (c.usedCache = !0), g.next(h));
        }
        g.complete();
      });
    }
    function u(a, b, c, d) {
      return a["do"]({
        next: function (a) {
          l(b) ? d.clear() : d.set(o(b), c, a);
        },
      });
    }
    function v(a, c, d, e, f, g, j, k, m, o, p, q, r) {
      p === void 0 && (p = !1);
      r === void 0 && (r = !1);
      return h.create(function (s) {
        (!l(e) || k == null) &&
          (k = function () {
            return h.from(null);
          }),
          k().subscribe({
            next: function (h) {
              var k = new (b("RelayAPIRequest"))(a, m, o)
                .setMethod("POST")
                .setSkipRetry(l(e))
                .setTrackingName("RelayFBNetwork_" + e.name)
                .setTransportBuilder(c)
                .setErrorHandler(function (a) {
                  var c;
                  s.error(
                    b("RelayGraphQLRequestUtils").createErrorFromXHR(
                      a,
                      "Network request encountered error " +
                        (((c = a.errorType) != null ? c : "") + " ") +
                        (((c = a.errorCode) != null ? c : "") +
                          ": " +
                          ((c = a.errorMsg) != null ? c : ""))
                    )
                  );
                })
                .setTimeoutHandler(function () {
                  s.error(
                    i.createWarning(
                      "NetworkTimeoutError",
                      "Network request timed out. %s(%s)",
                      e.name,
                      e.id || ""
                    )
                  );
                });
              q && k.setPerformanceLogger(q);
              r
                ? k.setResponseBatchChunkHandler(function (a) {
                    var c = [],
                      d;
                    for (
                      var a = a,
                        f = Array.isArray(a),
                        g = 0,
                        a = f
                          ? a
                          : a[
                              typeof Symbol === "function"
                                ? Symbol.iterator
                                : "@@iterator"
                            ]();
                      ;

                    ) {
                      var h;
                      if (f) {
                        if (g >= a.length) break;
                        h = a[g++];
                      } else {
                        g = a.next();
                        if (g.done) break;
                        h = g.value;
                      }
                      h = h;
                      var j = h.responseText;
                      h = h.isComplete;
                      d = d || h;
                      h = void 0;
                      try {
                        h = b("RelayGraphQLRequestUtils").parsePayload(j);
                      } catch (a) {
                        c.length > 0 && s.next(c);
                        return s.error(a);
                      }
                      if (h == null) {
                        c.length > 0 && s.next(c);
                        return s.error(
                          i.createWarning(
                            "EmptyResponseError",
                            "Parsed network response is empty. %s(%s)",
                            e.name,
                            e.id || ""
                          )
                        );
                      }
                      if (h.errors)
                        for (
                          var j = h.errors,
                            k = Array.isArray(j),
                            l = 0,
                            j = k
                              ? j
                              : j[
                                  typeof Symbol === "function"
                                    ? Symbol.iterator
                                    : "@@iterator"
                                ]();
                          ;

                        ) {
                          var m;
                          if (k) {
                            if (l >= j.length) break;
                            m = j[l++];
                          } else {
                            l = j.next();
                            if (l.done) break;
                            m = l.value;
                          }
                          m = m;
                          if (m.severity === "CRITICAL") {
                            c.length > 0 && s.next(c);
                            return s.error(
                              b(
                                "RelayGraphQLRequestUtils"
                              ).createErrorFromPayload(m)
                            );
                          }
                        }
                      Array.isArray(h) ? c.push.apply(c, h) : c.push(h);
                    }
                    c.length > 0 && s.next(c);
                    d && s.complete();
                  })
                : k.setResponseChunkHandler(function (a, c, d) {
                    try {
                      c = b("RelayGraphQLRequestUtils").parsePayload(a);
                    } catch (a) {
                      return s.error(a);
                    }
                    if (!c)
                      return s.error(
                        i.createWarning(
                          "EmptyResponseError",
                          "Parsed network response is empty. %s(%s)",
                          e.name,
                          e.id || ""
                        )
                      );
                    if (c.errors)
                      for (
                        var a = c.errors,
                          f = Array.isArray(a),
                          g = 0,
                          a = f
                            ? a
                            : a[
                                typeof Symbol === "function"
                                  ? Symbol.iterator
                                  : "@@iterator"
                              ]();
                        ;

                      ) {
                        var h;
                        if (f) {
                          if (g >= a.length) break;
                          h = a[g++];
                        } else {
                          g = a.next();
                          if (g.done) break;
                          h = g.value;
                        }
                        h = h;
                        if (h.severity === "CRITICAL")
                          return s.error(
                            b(
                              "RelayGraphQLRequestUtils"
                            ).createErrorFromPayload(h)
                          );
                      }
                    s.next(c);
                    d && s.complete();
                  });
              var t = babelHelpers["extends"](
                {},
                j,
                b("getAsyncParams")("POST"),
                {
                  fb_api_caller_class: "RelayModern",
                  fb_api_req_friendly_name: e.name,
                  variables: JSON.stringify(f),
                  server_timestamps: !0,
                }
              );
              p && delete t.__csr;
              e.id
                ? (t.doc_id = e.id)
                : (t.doc = b("nullthrows")(
                    e.text,
                    "RelayFBNetwork: A query should have either an id or text, found neither."
                  ));
              h != null &&
                h.length > 0 &&
                (t.fb_api_analytics_tags = JSON.stringify(h));
              g != null
                ? k.setRawData(n(g, t))
                : k.setData(t).setRequestHeaders(
                    babelHelpers["extends"](
                      {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-FB-Friendly-Name": e.name,
                      },
                      d
                    )
                  );
              return k.send().abort;
            },
          });
      });
    }
    e.exports = c;
  },
  null
);
__d(
  "BladeRunnerAllowList",
  [],
  function (a, b, c, d, e, f) {
    function g(a) {
      return "FBGQLS:" + a.toUpperCase();
    }
    f.getGqlsMethodNameFromUseCase = g;
    function h(a) {
      a = a.split("/");
      return a.length > 2 ? g(a[1]) : null;
    }
    f.getGqlsMethodNameFor = h;
    var i = ["gqls/test_actualized_subscribe/"];
    function a(a) {
      if (!a.startsWith("gqls/")) return null;
      for (var b = 0; b < i.length; b++) {
        var c = i[b];
        if (a.startsWith(c)) return null;
      }
      return h(a);
    }
    f.getRequestStreamMethodIfSupported = a;
  },
  null
);
__d(
  "BladeRunnerStreamHandler",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a, b, c, d, e, f) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c || function (a) {}),
          (this.$4 = d || function (a) {}),
          (this.$5 = e || function (a) {}),
          (this.$6 = f);
      }
      var b = a.prototype;
      b.onData = function (a) {
        var b = this.$1,
          c = this.$2;
        if (b != null) b(a.decodeData());
        else if (c != null) {
          b = atob(a.rawData());
          a = new Uint8Array(b.length);
          for (var d = 0; d < b.length; d++) a[d] = b.charCodeAt(d);
          c(a.buffer);
        }
      };
      b.onStatusUpdate = function (a) {
        this.$3(a);
      };
      b.onLog = function (a) {
        this.$4(a);
      };
      b.onBatch = function (a) {
        this.$5(a);
      };
      b.onClientCancel = function () {};
      b.getUpdatedRequestBody = function () {
        if (this.$6 != null) return this.$6();
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BladeRunnerStreamStatus",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      CREATED: 0,
      ACCEPTED: 1,
      REJECTED: 2,
      STARTED: 3,
      STOPPED: 4,
      CLOSED: 5,
    };
    f.StreamStatus = a;
  },
  66
);
__d(
  "RequestStreamCommonRequestStreamCommonTypes",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    c = (a = b("$InternalEnum"))({ Accepted: 1, Started: 2, Stopped: 3 });
    d = a({ Rejected: 40, Error: 50, TryAgain: 80, Closed: 99 });
    f = a({ BestEffort: 0, Socket: 10, Device: 20 });
    b = a({
      Flow_status: "flow_status",
      Log: "log",
      Rewrite: "rewrite",
      Data: "data",
      Termination: "termination",
      Amend_ack: "amend_ack",
    });
    e.exports = {
      AckLevel: f,
      FlowStatus: c,
      StreamResponseDelta$Types: b,
      TerminationReason: d,
    };
  },
  null
);
__d(
  "MQTTRequestStreamUtils",
  [
    "BladeRunnerStreamHandler",
    "BladeRunnerStreamStatus",
    "RequestStreamCommonRequestStreamCommonTypes",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "Stream closed",
      i = "Stream rejected";
    function a(a) {
      var b = function (b) {
        switch (b) {
          case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
            a.onFlowStatus(
              d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Accepted
            );
            break;
          case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
            a.onFlowStatus(
              d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Started
            );
            break;
          case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
            a.onFlowStatus(
              d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Stopped
            );
            break;
          case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
            a.onTermination(h);
            break;
          case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
            a.onTermination(i);
            break;
        }
      };
      return new (c("BladeRunnerStreamHandler"))(
        function (b) {
          return a.onData(b);
        },
        null,
        b,
        function (b) {
          return a.onLog(b);
        },
        null,
        function () {
          return a.onRetryUpdateRequestBody();
        }
      );
    }
    g.TERMINATION_REASON_CLOSED = h;
    g.TERMINATION_REASON_REJECTED = i;
    g.convertToBRHandler = a;
  },
  98
);
__d(
  "StreamStateMachineConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      GQLS_STATE_CREATED: "created",
      GQLS_STATE_ACTIVE: "active",
      GQLS_STATE_PAUSED: "paused",
      GQLS_STATE_TERMINATED: "terminated",
    };
    b = {
      GQLS_STATE_TRANSIT_ON_CREATE: "onCreated",
      GQLS_STATE_TRANSIT_ON_ACTIVE: "onActive",
      GQLS_STATE_TRANSIT_ON_PAUSE: "onPause",
      GQLS_STATE_TRANSIT_ON_RESUME: "onResume",
      GQLS_STATE_TRANSIT_ON_TERMINATE: "onTerminate",
    };
    f.states = a;
    f.events = b;
  },
  66
);
__d(
  "BladeRunnerDeferredClient",
  ["Promise", "nullthrows", "requireDeferred"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a() {
        this.$1 = null;
      }
      var d = a.prototype;
      d.requestStream = function (a, b, d, e) {
        this.$2();
        return c("nullthrows")(this.$1).then(function (c) {
          return c.requestStream(a, b, d, e);
        });
      };
      d.logInfo = function (a) {
        this.$2();
        return c("nullthrows")(this.$1).then(function (b) {
          b.logInfo(a);
        });
      };
      d.bumpCounter = function (a) {
        this.$2();
        return c("nullthrows")(this.$1).then(function (b) {
          b.bumpCounter(a);
        });
      };
      d.$2 = function () {
        this.$1 == null &&
          (this.$1 = new (b("Promise"))(function (a) {
            c("requireDeferred")("BladeRunnerClient")
              .__setRef("BladeRunnerDeferredClient")
              .onReady(function (b) {
                a(new b());
              });
          }));
      };
      return a;
    })();
    d = new a();
    g["default"] = d;
  },
  98
);
__d(
  "DGWEnvUtil",
  ["URI", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = "";
        this.$2 = "";
        if (c("URI").isValidURI(window.location.href)) {
          var a = new (c("URI"))(window.location.href),
            b = a.getDomain();
          a = a.getPath();
          h(b)
            ? ((this.$1 = "gateway.internalfb.com"), (this.$2 = "INTERNALFB"))
            : i(b)
            ? ((this.$1 = "gateway.workplace.com"), (this.$2 = "FACEBOOK"))
            : j(b)
            ? ((this.$1 = "gateway.facebookenterprise.com"),
              (this.$2 = "ENTERPRISEFB"))
            : k(b, a) ||
              ((this.$1 = "gateway.facebook.com"), (this.$2 = "FACEBOOK"));
          b = new (c("URI"))()
            .setDomain(this.$1)
            .setProtocol("wss")
            .setPath("/ws");
          this.$1 = b.toString();
        }
      }
      var b = a.prototype;
      b.isDGWEnvCompatible = function () {
        return this.$1.length != 0 && this.$2.length != 0;
      };
      b.isDGWAsDefault = function () {
        return this.$2 === "ENTERPRISEFB";
      };
      b.getDGWEndpoint = function () {
        return this.$1;
      };
      b.getDGWAuthType = function () {
        return this.$2;
      };
      return a;
    })();
    function h(a) {
      return a.includes("internalfb.com") && c("gkx")("1365");
    }
    function i(a) {
      return a.includes("workplace.com");
    }
    function j(a) {
      return a.includes("facebookenterprise.com");
    }
    function k(a, b) {
      return (
        a.includes("facebook.com") &&
        (b.includes("adsmanager") || b.includes("aladdin") || b.includes("ads"))
      );
    }
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "RequestStreamHandler",
  ["err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = a.onData,
          c = a.onTermination,
          d = a.onLog,
          e = a.onFlowStatus;
        a = a.onRetryUpdateRequestBody;
        this.$1 = b || function (a) {};
        this.$2 = c || function (a) {};
        this.$3 = d || function (a) {};
        this.$4 = e;
        this.$5 = a;
      }
      var b = a.prototype;
      b.onFlowStatus = function (a) {
        this.$4(a);
      };
      b.onData = function (a) {
        this.$1(a);
      };
      b.onTermination = function (a) {
        this.$2(c("err")(a));
      };
      b.onLog = function (a) {
        this.$3(a);
      };
      b.onRetryUpdateRequestBody = function () {
        if (this.$5 != null) return this.$5();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TransportSelectingClientCCResolver",
  [
    "Promise",
    "TransportSelectingClientContextualConfig",
    "nullthrows",
    "regeneratorRuntime",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a() {
        this.$1 = null;
      }
      var d = a.prototype;
      d.getCCGroupName = function (a) {
        var d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  this.$2();
                  f.next = 3;
                  return b("regeneratorRuntime").awrap(
                    c("nullthrows")(this.$1)
                  );
                case 3:
                  d = f.sent;
                  e = new d(
                    JSON.parse(
                      c("TransportSelectingClientContextualConfig").rawConfig
                    )
                  ).resolve({ method: a });
                  return f.abrupt("return", e.get("group", "default_group"));
                case 6:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      d.getCCDGWUpsampleMultiplier = function (a) {
        var d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  this.$2();
                  f.next = 3;
                  return b("regeneratorRuntime").awrap(
                    c("nullthrows")(this.$1)
                  );
                case 3:
                  d = f.sent;
                  e = new d(
                    JSON.parse(
                      c("TransportSelectingClientContextualConfig").rawConfig
                    )
                  ).resolve({ method: a });
                  return f.abrupt("return", e.get("dgwUpsampleMultiplier", 1));
                case 6:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      d.$2 = function () {
        this.$1 == null &&
          (this.$1 = new (b("Promise"))(function (a) {
            c("requireDeferred")("ContextualConfig")
              .__setRef("TransportSelectingClientCCResolver")
              .onReady(function (b) {
                a(b);
              });
          }));
      };
      return a;
    })();
    d = new a();
    g["default"] = d;
  },
  98
);
__d(
  "BladeRunnerInstrumentedStreamHandler",
  [
    "BladeRunnerDeferredClient",
    "BladeRunnerStreamHandler",
    "BladeRunnerStreamStatus",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 60 * 1e3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$BladeRunnerInstrumentedStreamHandler1 = b;
        e.$BladeRunnerInstrumentedStreamHandler2 = d;
        e.$BladeRunnerInstrumentedStreamHandler3 = Date.now();
        e.$BladeRunnerInstrumentedStreamHandler5 = c(
          "setTimeoutAcrossTransitions"
        )(function () {
          e.$BladeRunnerInstrumentedStreamHandler4 == null &&
            e.$BladeRunnerInstrumentedStreamHandler6(-1, Date.now());
        }, h);
        return e;
      }
      var e = b.prototype;
      e.onData = function (a) {
        c("BladeRunnerDeferredClient").bumpCounter(
          "received_data." + this.$BladeRunnerInstrumentedStreamHandler2
        ),
          this.$BladeRunnerInstrumentedStreamHandler1.onData(a);
      };
      e.onStatusUpdate = function (a) {
        this.$BladeRunnerInstrumentedStreamHandler6(a, Date.now()),
          this.$BladeRunnerInstrumentedStreamHandler1.onStatusUpdate(a);
      };
      e.onLog = function (a) {
        this.$BladeRunnerInstrumentedStreamHandler1.onLog(a);
      };
      e.onBatch = function (a) {
        this.$BladeRunnerInstrumentedStreamHandler1.onBatch(a);
      };
      e.onClientCancel = function () {
        this.$BladeRunnerInstrumentedStreamHandler6(
          d("BladeRunnerStreamStatus").StreamStatus.CLOSED,
          Date.now()
        );
      };
      e.$BladeRunnerInstrumentedStreamHandler6 = function (a, b) {
        c("BladeRunnerDeferredClient").bumpCounter(
          "received_status_" +
            a +
            "." +
            this.$BladeRunnerInstrumentedStreamHandler2
        );
        if (this.$BladeRunnerInstrumentedStreamHandler4 == null) {
          this.$BladeRunnerInstrumentedStreamHandler4 = b;
          a = Math.max(
            this.$BladeRunnerInstrumentedStreamHandler4 -
              this.$BladeRunnerInstrumentedStreamHandler3,
            0
          );
          b =
            a >= 1e4
              ? Math.round(Math.min(a / 1e4, 6)) * 10
              : Math.round(Math.min(a / 1e3, 10));
          c("BladeRunnerDeferredClient").bumpCounter(
            "status_latency." +
              this.$BladeRunnerInstrumentedStreamHandler2 +
              "." +
              b +
              ".s"
          );
        }
        clearTimeout(this.$BladeRunnerInstrumentedStreamHandler5);
      };
      return b;
    })(c("BladeRunnerStreamHandler"));
    g["default"] = a;
  },
  98
);
__d(
  "TransportSelectingClientUtils",
  ["BladeRunnerInstrumentedStreamHandler", "MQTTRequestStreamUtils", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = d("MQTTRequestStreamUtils").convertToBRHandler(a);
      if (b.startsWith("FBGQLS") || b.startsWith("SKYWALKER"))
        return new (c("BladeRunnerInstrumentedStreamHandler"))(a, b);
      else return a;
    }
    function b(a) {
      return a.startsWith("FBGQLS:PIXELCLOUD") && !c("gkx")("1937") ? !0 : !1;
    }
    function e(a) {
      var b = !1;
      switch (a) {
        case "group1":
          b = c("gkx")("227");
          break;
        case "group2":
          b = c("gkx")("229");
          break;
        case "group3":
          b = c("gkx")("231");
          break;
        case "group4":
          b = c("gkx")("233");
          break;
        case "group5":
          b = c("gkx")("235");
          break;
        case "group6":
          b = c("gkx")("2254");
          break;
      }
      return b;
    }
    g.BRHandlerConverter = a;
    g.isBlockedMethod = b;
    g.isDGWStream = e;
  },
  98
);
__d(
  "TransportSelectingClient",
  [
    "BladeRunnerDeferredClient",
    "DGWEnvUtil",
    "RequestStreamHandler",
    "TransportSelectingClientCCResolver",
    "TransportSelectingClientUtils",
    "cr:1987488",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a() {
        this.$1 = null;
      }
      var e = a.prototype;
      e.requestStream = function (a, e, f, g) {
        var h, i, j, k, l, m, n, o;
        return b("regeneratorRuntime").async(
          function (p) {
            while (1)
              switch ((p.prev = p.next)) {
                case 0:
                  j = new (c("RequestStreamHandler"))(f);
                  k = (h = a.method) != null ? h : "unknown";
                  if (
                    !(
                      b("cr:1987488") != null &&
                      c("DGWEnvUtil").isDGWEnvCompatible() &&
                      !d("TransportSelectingClientUtils").isBlockedMethod(k)
                    )
                  ) {
                    p.next = 16;
                    break;
                  }
                  p.next = 5;
                  return b("regeneratorRuntime").awrap(
                    c("TransportSelectingClientCCResolver").getCCGroupName(k)
                  );
                case 5:
                  l = p.sent;
                  if (
                    !(
                      d("TransportSelectingClientUtils").isDGWStream(l) ||
                      c("DGWEnvUtil").isDGWAsDefault()
                    )
                  ) {
                    p.next = 16;
                    break;
                  }
                  p.next = 9;
                  return b("regeneratorRuntime").awrap(
                    c(
                      "TransportSelectingClientCCResolver"
                    ).getCCDGWUpsampleMultiplier(k)
                  );
                case 9:
                  m = p.sent;
                  p.next = 12;
                  return b("regeneratorRuntime").awrap(
                    b("cr:1987488").createStream(a, e, g, j, {
                      upsampleMultiplier: m,
                    })
                  );
                case 12:
                  n = p.sent;
                  p.next = 15;
                  return b("regeneratorRuntime").awrap(n.start());
                case 15:
                  return p.abrupt("return", n);
                case 16:
                  p.next = 18;
                  return b("regeneratorRuntime").awrap(
                    c("BladeRunnerDeferredClient").requestStream(
                      a,
                      e,
                      d("TransportSelectingClientUtils").BRHandlerConverter(
                        j,
                        (i = a.method) != null ? i : "unknown"
                      ),
                      g
                    )
                  );
                case 18:
                  o = p.sent;
                  return p.abrupt("return", o);
                case 20:
                case "end":
                  return p.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TransportSelectingClientSingleton",
  ["TransportSelectingClient"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (c("TransportSelectingClient"))();
    g["default"] = a;
  },
  98
);
__d(
  "GQLSManager",
  [
    "BladeRunnerAllowList",
    "Bootloader",
    "MQTTRequestStreamUtils",
    "Promise",
    "RequestStreamCommonRequestStreamCommonTypes",
    "StreamStateMachineConstants",
    "TransportSelectingClientSingleton",
    "nullthrows",
    "promiseDone",
    "regeneratorRuntime",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "request_stream",
      i = "mqtt_skywalker",
      j = babelHelpers["extends"]({}, d("StreamStateMachineConstants").events, {
        GQLS_STATE_TRANSIT_ON_REJECT: "onReject",
      });
    a = (function () {
      function a() {}
      var e = a.prototype;
      e.subscribeViaRequestStreamWithMobileStyleTopicTransform = function (
        a,
        b,
        e
      ) {
        e === void 0 && (e = {});
        var f = this.$3(
          d("BladeRunnerAllowList").getGqlsMethodNameFromUseCase(a),
          null,
          b,
          e
        );
        c("promiseDone")(f);
        return {
          getTopic: function () {
            var a = new Error(
              "Unimplemented getTopic called for mobile style GQLS"
            );
            a.stack;
            throw a;
          },
          getContext: function () {
            var a = new Error(
              "Unimplemented getContext called for mobile style GQLS"
            );
            a.stack;
            throw a;
          },
          isUnsubscribed: function () {
            return this.$4;
          },
          unsubscribe: function () {
            this.$4 = !0;
            return f.then(function (a) {
              return a.unsubscribe();
            });
          },
          $4: !1,
        };
      };
      e.subscribe = function (a, b, d) {
        d === void 0 && (d = {});
        var e = this.$5(a, b, d);
        c("promiseDone")(e);
        return {
          getTopic: function () {
            return a;
          },
          getContext: function () {
            return d.context;
          },
          isUnsubscribed: function () {
            return this.$4;
          },
          unsubscribe: function () {
            this.$4 = !0;
            return e.then(function (a) {
              return a.unsubscribe();
            });
          },
          $4: !1,
        };
      };
      e.once = function (a, b, c) {
        c === void 0 && (c = {});
        var d = this.subscribe(
          a,
          function () {
            d.isUnsubscribed() || (d.unsubscribe(), b.apply(this, arguments));
          },
          c
        );
        return d;
      };
      e.getSubscriptionType = function (a, b) {
        if (this.$6(a)) return h;
        return b != null && b.headers != null ? h : i;
      };
      e.$5 = function (a, e, f) {
        var g, i;
        return b("regeneratorRuntime").async(
          function (b) {
            while (1)
              switch ((b.prev = b.next)) {
                case 0:
                  g = this.getSubscriptionType(a, f);
                  if (!(g === h)) {
                    b.next = 7;
                    break;
                  }
                  i = f.headers != null ? f.headers.method : null;
                  i == null &&
                    (i = d(
                      "BladeRunnerAllowList"
                    ).getRequestStreamMethodIfSupported(a));
                  return b.abrupt(
                    "return",
                    this.$3(c("nullthrows")(i), a, e, f)
                  );
                case 7:
                  return b.abrupt("return", this.$7(a, e, f));
                case 8:
                case "end":
                  return b.stop();
              }
          },
          null,
          this
        );
      };
      e.$7 = function (a, c, d) {
        var e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  f.next = 2;
                  return b("regeneratorRuntime").awrap(this.$8());
                case 2:
                  e = f.sent;
                  return f.abrupt(
                    "return",
                    e.subscribe(
                      a,
                      function (a) {
                        return c(babelHelpers["extends"]({}, a));
                      },
                      d
                    )
                  );
                case 4:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      e.$6 = function (a) {
        return (
          d("BladeRunnerAllowList").getRequestStreamMethodIfSupported(a) != null
        );
      };
      e.$3 = function (a, e, f, g) {
        var h, i, k, l, m, n, o, p;
        return b("regeneratorRuntime").async(
          function (q) {
            while (1)
              switch ((q.prev = q.next)) {
                case 0:
                  q.next = 2;
                  return b("regeneratorRuntime").awrap(this.$9());
                case 2:
                  h = q.sent;
                  i = h.patchContext(g.context);
                  k = Object.assign({}, g.headers, { method: a });
                  e != null && (k.topic = e);
                  l = function (a) {
                    var b = JSON.parse(a);
                    if (
                      Object.prototype.hasOwnProperty.call(b, "payload") &&
                      Object.prototype.hasOwnProperty.call(b, "topic")
                    ) {
                      var c = e != null ? e : b.topic;
                      f({ topic: c, payload: b.payload });
                    } else f(a);
                  };
                  m = function (a) {};
                  n = function (a) {
                    switch (a) {
                      case d("RequestStreamCommonRequestStreamCommonTypes")
                        .FlowStatus.Accepted:
                        g.gqlsLifecycleHandler &&
                          g.gqlsLifecycleHandler(
                            j.GQLS_STATE_TRANSIT_ON_CREATE
                          );
                        break;
                      case d("RequestStreamCommonRequestStreamCommonTypes")
                        .FlowStatus.Started:
                        g.gqlsLifecycleHandler &&
                          g.gqlsLifecycleHandler(
                            j.GQLS_STATE_TRANSIT_ON_ACTIVE
                          );
                        break;
                      case d("RequestStreamCommonRequestStreamCommonTypes")
                        .FlowStatus.Stopped:
                        g.gqlsLifecycleHandler &&
                          g.gqlsLifecycleHandler(j.GQLS_STATE_TRANSIT_ON_PAUSE);
                        break;
                    }
                  };
                  o = {
                    onData: l,
                    onTermination: function (a) {
                      var b;
                      a.message ===
                        d("MQTTRequestStreamUtils").TERMINATION_REASON_CLOSED &&
                        (b = j.GQLS_STATE_TRANSIT_ON_TERMINATE);
                      a.message ===
                        d("MQTTRequestStreamUtils")
                          .TERMINATION_REASON_REJECTED &&
                        (b = j.GQLS_STATE_TRANSIT_ON_REJECT);
                      g.gqlsLifecycleHandler &&
                        b != null &&
                        g.gqlsLifecycleHandler(b);
                    },
                    onLog: m,
                    onFlowStatus: n,
                  };
                  q.next = 12;
                  return b("regeneratorRuntime").awrap(
                    c("TransportSelectingClientSingleton").requestStream(
                      k,
                      JSON.stringify(i),
                      o,
                      g.instrumentationData
                    )
                  );
                case 12:
                  p = q.sent;
                  g.onSubscribe && g.onSubscribe({ data: {}, error: null });
                  return q.abrupt("return", {
                    unsubscribe: function () {
                      return b("regeneratorRuntime").async(
                        function (a) {
                          while (1)
                            switch ((a.prev = a.next)) {
                              case 0:
                                g.onUnsubscribeEager && g.onUnsubscribeEager(),
                                  p.cancel(),
                                  g.onUnsubscribe &&
                                    g.onUnsubscribe({ data: {}, error: null });
                              case 3:
                              case "end":
                                return a.stop();
                            }
                        },
                        null,
                        this
                      );
                    },
                  });
                case 15:
                case "end":
                  return q.stop();
              }
          },
          null,
          this
        );
      };
      e.$8 = function () {
        var a, d;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!(this.$1 != null)) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", this.$1);
                case 2:
                  a = new (b("Promise"))(function (a) {
                    c("Bootloader").loadModules(
                      ["MqttSkywalkerManager"],
                      a,
                      "GQLSManager"
                    );
                  });
                  e.next = 5;
                  return b("regeneratorRuntime").awrap(a);
                case 5:
                  d = e.sent;
                  this.$1 = d;
                  return e.abrupt("return", d);
                case 8:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      e.$9 = function () {
        var a, d;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!(this.$2 != null)) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", this.$2);
                case 2:
                  a = new (b("Promise"))(function (a) {
                    c("requireDeferred")("SkywalkerUtils")
                      .__setRef("GQLSManager")
                      .onReady(function (b) {
                        a(b);
                      });
                  });
                  e.next = 5;
                  return b("regeneratorRuntime").awrap(a);
                case 5:
                  d = e.sent;
                  this.$2 = d;
                  return e.abrupt("return", d);
                case 8:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    e = new a();
    g["default"] = e;
  },
  98
);
__d(
  "ActorURI",
  ["ActorURIConfig", "URI"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      return new (c("URI"))(a).addQueryData(
        c("ActorURIConfig").PARAMETER_ACTOR,
        b
      );
    }
    g.create = a;
    g.PARAMETER_ACTOR = c("ActorURIConfig").PARAMETER_ACTOR;
  },
  98
);
__d(
  "ChannelClientID",
  ["MqttWebDeviceID", "uuid"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      (a =
        b("MqttWebDeviceID") == null
          ? void 0
          : b("MqttWebDeviceID").clientID) != null
        ? a
        : b("uuid")();
    c = {
      getID: function () {
        return g;
      },
    };
    e.exports = c;
  },
  null
);
__d(
  "CurrentLocale",
  ["IntlCurrentLocale"],
  function (a, b, c, d, e, f, g) {
    a = {
      get: function () {
        return c("IntlCurrentLocale").code;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "GeneratedLoggerUtils",
  [
    "invariant",
    "Banzai",
    "JstlMigrationFalcoEvent",
    "getDataWithLoggerOptions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = window.location.search.indexOf("showlog") > -1;
    function a(a, c, d, e) {
      var f = b("getDataWithLoggerOptions")(c, e);
      c = a.split(":")[0];
      var g = a.split(":")[1];
      c == "logger"
        ? b("JstlMigrationFalcoEvent").log(function () {
            return { logger_config_name: g, payload: f };
          })
        : b("Banzai").post(a, f, d);
      h;
    }
    c = {
      log: a,
      serializeVector: function (a) {
        if (!a) return a;
        if (Array.isArray(a)) return a;
        if (a.toArray) {
          var b = a;
          return b.toArray();
        }
        if (
          typeof a === "object" &&
          a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
        )
          return Array.from(a);
        g(0, 3874, a);
      },
      serializeMap: function (a) {
        if (!a) return a;
        if (a.toJS) {
          var b = a;
          return b.toJS();
        }
        if (
          typeof a === "object" &&
          a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
        ) {
          b = a;
          var c = {};
          for (
            var b = b,
              d = Array.isArray(b),
              e = 0,
              b = d
                ? b
                : b[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= b.length) break;
              f = b[e++];
            } else {
              e = b.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            c[f[0]] = f[1];
          }
          return c;
        }
        if (Object.prototype.toString.call(a) === "[object Object]") return a;
        g(0, 3875, a);
      },
      checkExtraDataFieldNames: function (a, b) {
        Object.keys(a).forEach(function (a) {
          Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a);
        });
      },
      warnForInvalidFieldNames: function (a, b, c, d) {},
      throwIfNull: function (a, b) {
        a || g(0, 3877, b);
        return a;
      },
    };
    e.exports = c;
  },
  null
);
__d(
  "GraphQLSubscriptionsTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:GraphQLSubscriptionsLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:GraphQLSubscriptionsLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:GraphQLSubscriptionsLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setAppBackgrounded = function (a) {
        this.$1.app_backgrounded = a;
        return this;
      };
      c.setAppState = function (a) {
        this.$1.app_state = a;
        return this;
      };
      c.setAppID = function (a) {
        this.$1.appid = a;
        return this;
      };
      c.setAppversion = function (a) {
        this.$1.appversion = a;
        return this;
      };
      c.setAttemptCount = function (a) {
        this.$1.attempt_count = a;
        return this;
      };
      c.setClientSampleWeight = function (a) {
        this.$1.client_sample_weight = a;
        return this;
      };
      c.setClientUserID = function (a) {
        this.$1.client_userid = a;
        return this;
      };
      c.setClienttime = function (a) {
        this.$1.clienttime = a;
        return this;
      };
      c.setDebugData = function (a) {
        this.$1.debug_data = a;
        return this;
      };
      c.setDeltaTime = function (a) {
        this.$1.delta_time = a;
        return this;
      };
      c.setErrorRecoveryPolicyName = function (a) {
        this.$1.error_recovery_policy_name = a;
        return this;
      };
      c.setErrorRetriesEnabled = function (a) {
        this.$1.error_retries_enabled = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setExceptionCategory = function (a) {
        this.$1.exception_category = a;
        return this;
      };
      c.setExceptionData = function (a) {
        this.$1.exception_data = a;
        return this;
      };
      c.setExceptionType = function (a) {
        this.$1.exception_type = a;
        return this;
      };
      c.setFilterChain = function (a) {
        this.$1.filter_chain = a;
        return this;
      };
      c.setForceLogContext = function (a) {
        this.$1.force_log_context = a;
        return this;
      };
      c.setHandleType = function (a) {
        this.$1.handle_type = a;
        return this;
      };
      c.setHeartbeatInterval = function (a) {
        this.$1.heartbeat_interval = a;
        return this;
      };
      c.setHeartbeatSequenceID = function (a) {
        this.$1.heartbeat_sequence_id = a;
        return this;
      };
      c.setIsemployee = function (a) {
        this.$1.isemployee = a;
        return this;
      };
      c.setMqttClientCheckpoint = function (a) {
        this.$1.mqtt_client_checkpoint = a;
        return this;
      };
      c.setMqttState = function (a) {
        this.$1.mqtt_state = a;
        return this;
      };
      c.setMutationType = function (a) {
        this.$1.mutation_type = a;
        return this;
      };
      c.setName = function (a) {
        this.$1.name = a;
        return this;
      };
      c.setPublishCluster = function (a) {
        this.$1.publish_cluster = a;
        return this;
      };
      c.setPublishID = function (a) {
        this.$1.publish_id = a;
        return this;
      };
      c.setPublishTimeMs = function (a) {
        this.$1.publish_time_ms = a;
        return this;
      };
      c.setQueryID = function (a) {
        this.$1.query_id = a;
        return this;
      };
      c.setQueryParams = function (a) {
        this.$1.query_params = b("GeneratedLoggerUtils").serializeMap(a);
        return this;
      };
      c.setRawclienttime = function (a) {
        this.$1.rawclienttime = a;
        return this;
      };
      c.setReason = function (a) {
        this.$1.reason = a;
        return this;
      };
      c.setResult = function (a) {
        this.$1.result = a;
        return this;
      };
      c.setSessionID = function (a) {
        this.$1.session_id = a;
        return this;
      };
      c.setShadowingPayloadCount = function (a) {
        this.$1.shadowing_payload_count = a;
        return this;
      };
      c.setSubscriptionCall = function (a) {
        this.$1.subscription_call = a;
        return this;
      };
      c.setSubscriptionLeg = function (a) {
        this.$1.subscription_leg = a;
        return this;
      };
      c.setSubscriptionPayloadCount = function (a) {
        this.$1.subscription_payload_count = a;
        return this;
      };
      c.setTimeSinceLastWindowShownMs = function (a) {
        this.$1.time_since_last_window_shown_ms = a;
        return this;
      };
      c.setTopic = function (a) {
        this.$1.topic = a;
        return this;
      };
      c.setTopicData = function (a) {
        this.$1.topic_data = b("GeneratedLoggerUtils").serializeMap(a);
        return this;
      };
      return a;
    })();
    c = {
      app_backgrounded: !0,
      app_state: !0,
      appid: !0,
      appversion: !0,
      attempt_count: !0,
      client_sample_weight: !0,
      client_userid: !0,
      clienttime: !0,
      debug_data: !0,
      delta_time: !0,
      error_recovery_policy_name: !0,
      error_retries_enabled: !0,
      event: !0,
      exception_category: !0,
      exception_data: !0,
      exception_type: !0,
      filter_chain: !0,
      force_log_context: !0,
      handle_type: !0,
      heartbeat_interval: !0,
      heartbeat_sequence_id: !0,
      isemployee: !0,
      mqtt_client_checkpoint: !0,
      mqtt_state: !0,
      mutation_type: !0,
      name: !0,
      publish_cluster: !0,
      publish_id: !0,
      publish_time_ms: !0,
      query_id: !0,
      query_params: !0,
      rawclienttime: !0,
      reason: !0,
      result: !0,
      session_id: !0,
      shadowing_payload_count: !0,
      subscription_call: !0,
      subscription_leg: !0,
      subscription_payload_count: !0,
      time_since_last_window_shown_ms: !0,
      topic: !0,
      topic_data: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "RealtimeFrameworksCounterFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744251");
    c = b("FalcoLoggerInternal").create("realtime_frameworks_counter", a);
    e.exports = c;
  },
  null
);
__d(
  "RelayFBEnvironment",
  ["cr:1385201"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1385201");
  },
  98
);
__d(
  "str2rstr",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = "",
        c,
        d;
      for (var e = 0; e < a.length; e++)
        (c = a.charCodeAt(e)),
          (d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0),
          55296 <= c &&
            c <= 56319 &&
            56320 <= d &&
            d <= 57343 &&
            ((c = 65536 + ((c & 1023) << 10) + (d & 1023)), e++),
          c <= 127
            ? (b += String.fromCharCode(c))
            : c <= 2047
            ? (b += String.fromCharCode(192 | ((c >>> 6) & 31), 128 | (c & 63)))
            : c <= 65535
            ? (b += String.fromCharCode(
                224 | ((c >>> 12) & 15),
                128 | ((c >>> 6) & 63),
                128 | (c & 63)
              ))
            : c <= 2097151 &&
              (b += String.fromCharCode(
                240 | ((c >>> 18) & 7),
                128 | ((c >>> 12) & 63),
                128 | ((c >>> 6) & 63),
                128 | (c & 63)
              ));
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "md5",
  ["str2rstr"],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3];
      c = j(c, d, e, f, b[0], 7, -680876936);
      f = j(f, c, d, e, b[1], 12, -389564586);
      e = j(e, f, c, d, b[2], 17, 606105819);
      d = j(d, e, f, c, b[3], 22, -1044525330);
      c = j(c, d, e, f, b[4], 7, -176418897);
      f = j(f, c, d, e, b[5], 12, 1200080426);
      e = j(e, f, c, d, b[6], 17, -1473231341);
      d = j(d, e, f, c, b[7], 22, -45705983);
      c = j(c, d, e, f, b[8], 7, 1770035416);
      f = j(f, c, d, e, b[9], 12, -1958414417);
      e = j(e, f, c, d, b[10], 17, -42063);
      d = j(d, e, f, c, b[11], 22, -1990404162);
      c = j(c, d, e, f, b[12], 7, 1804603682);
      f = j(f, c, d, e, b[13], 12, -40341101);
      e = j(e, f, c, d, b[14], 17, -1502002290);
      d = j(d, e, f, c, b[15], 22, 1236535329);
      c = k(c, d, e, f, b[1], 5, -165796510);
      f = k(f, c, d, e, b[6], 9, -1069501632);
      e = k(e, f, c, d, b[11], 14, 643717713);
      d = k(d, e, f, c, b[0], 20, -373897302);
      c = k(c, d, e, f, b[5], 5, -701558691);
      f = k(f, c, d, e, b[10], 9, 38016083);
      e = k(e, f, c, d, b[15], 14, -660478335);
      d = k(d, e, f, c, b[4], 20, -405537848);
      c = k(c, d, e, f, b[9], 5, 568446438);
      f = k(f, c, d, e, b[14], 9, -1019803690);
      e = k(e, f, c, d, b[3], 14, -187363961);
      d = k(d, e, f, c, b[8], 20, 1163531501);
      c = k(c, d, e, f, b[13], 5, -1444681467);
      f = k(f, c, d, e, b[2], 9, -51403784);
      e = k(e, f, c, d, b[7], 14, 1735328473);
      d = k(d, e, f, c, b[12], 20, -1926607734);
      c = l(c, d, e, f, b[5], 4, -378558);
      f = l(f, c, d, e, b[8], 11, -2022574463);
      e = l(e, f, c, d, b[11], 16, 1839030562);
      d = l(d, e, f, c, b[14], 23, -35309556);
      c = l(c, d, e, f, b[1], 4, -1530992060);
      f = l(f, c, d, e, b[4], 11, 1272893353);
      e = l(e, f, c, d, b[7], 16, -155497632);
      d = l(d, e, f, c, b[10], 23, -1094730640);
      c = l(c, d, e, f, b[13], 4, 681279174);
      f = l(f, c, d, e, b[0], 11, -358537222);
      e = l(e, f, c, d, b[3], 16, -722521979);
      d = l(d, e, f, c, b[6], 23, 76029189);
      c = l(c, d, e, f, b[9], 4, -640364487);
      f = l(f, c, d, e, b[12], 11, -421815835);
      e = l(e, f, c, d, b[15], 16, 530742520);
      d = l(d, e, f, c, b[2], 23, -995338651);
      c = m(c, d, e, f, b[0], 6, -198630844);
      f = m(f, c, d, e, b[7], 10, 1126891415);
      e = m(e, f, c, d, b[14], 15, -1416354905);
      d = m(d, e, f, c, b[5], 21, -57434055);
      c = m(c, d, e, f, b[12], 6, 1700485571);
      f = m(f, c, d, e, b[3], 10, -1894986606);
      e = m(e, f, c, d, b[10], 15, -1051523);
      d = m(d, e, f, c, b[1], 21, -2054922799);
      c = m(c, d, e, f, b[8], 6, 1873313359);
      f = m(f, c, d, e, b[15], 10, -30611744);
      e = m(e, f, c, d, b[6], 15, -1560198380);
      d = m(d, e, f, c, b[13], 21, 1309151649);
      c = m(c, d, e, f, b[4], 6, -145523070);
      f = m(f, c, d, e, b[11], 10, -1120210379);
      e = m(e, f, c, d, b[2], 15, 718787259);
      d = m(d, e, f, c, b[9], 21, -343485551);
      a[0] = s(c, a[0]);
      a[1] = s(d, a[1]);
      a[2] = s(e, a[2]);
      a[3] = s(f, a[3]);
    }
    function i(a, b, c, d, e, f) {
      b = s(s(b, a), s(d, f));
      return s((b << e) | (b >>> (32 - e)), c);
    }
    function j(a, b, c, d, e, f, g) {
      return i((b & c) | (~b & d), a, b, e, f, g);
    }
    function k(a, b, c, d, e, f, g) {
      return i((b & d) | (c & ~d), a, b, e, f, g);
    }
    function l(a, b, c, d, e, f, g) {
      return i(b ^ c ^ d, a, b, e, f, g);
    }
    function m(a, b, c, d, e, f, g) {
      return i(c ^ (b | ~d), a, b, e, f, g);
    }
    function n(a) {
      var b = a.length,
        c = [1732584193, -271733879, -1732584194, 271733878],
        d;
      for (d = 64; d <= a.length; d += 64) h(c, o(a.substring(d - 64, d)));
      a = a.substring(d - 64);
      var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (d = 0; d < a.length; d++)
        e[d >> 2] |= a.charCodeAt(d) << ((d & 3) << 3);
      e[d >> 2] |= 128 << ((d & 3) << 3);
      if (d > 55) {
        h(c, e);
        for (d = 0; d < 16; d++) e[d] = 0;
      }
      e[14] = b * 8;
      h(c, e);
      return c;
    }
    function o(a) {
      var b = [],
        c = 0;
      while (c < 64)
        b[c >> 2] =
          a.charCodeAt(c++) |
          (a.charCodeAt(c++) << 8) |
          (a.charCodeAt(c++) << 16) |
          (a.charCodeAt(c++) << 24);
      return b;
    }
    var p = "0123456789abcdef".split("");
    function q(a) {
      var b = "",
        c = 0;
      for (; c < 4; c++)
        b += p[(a >> ((c << 3) + 4)) & 15] + p[(a >> (c << 3)) & 15];
      return b;
    }
    function r(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) b[c] = q(a[c]);
      return b.join("");
    }
    var s = function (a, b) {
      return (a + b) & 4294967295;
    };
    function a(a) {
      if (a == null) return null;
      a = a;
      for (var b = 0; b < a.length; b++)
        if (a[b] > "\x7f") {
          a = c("str2rstr")(a);
          break;
        }
      return r(n(a));
    }
    a("hello") != "5d41402abc4b2a76b9719d911017c592" &&
      (s = function (a, b) {
        var c = (a & 65535) + (b & 65535);
        a = (a >> 16) + (b >> 16) + (c >> 16);
        return (a << 16) | (c & 65535);
      });
    g["default"] = a;
  },
  98
);
__d(
  "RelayRTIUtils",
  [
    "invariant",
    "ActorURI",
    "CSRFGuard",
    "ChannelClientID",
    "CurrentLocale",
    "CurrentUser",
    "GraphQLSubscriptionsTypedLogger",
    "Promise",
    "Random",
    "RealtimeFrameworksCounterFalcoEvent",
    "RelayAPIConfig",
    "RelayFBEnvironment",
    "XHRRequest",
    "getAsyncParams",
    "getCrossOriginTransport",
    "gkx",
    "md5",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = c("requireDeferred")("FleetBeaconSubscriptionLauncher").__setRef(
        "RelayRTIUtils"
      ),
      j = 1e4,
      k = 1,
      l = 1e4,
      m = "155160167952447",
      n = "test_fleet_beacon_subscribe";
    function a(a) {
      if (!c("gkx")("1344998")) return !1;
      if (a == n) return !1;
      if (!d("Random").coinflip(l)) return !1;
      i.onReady(function (b) {
        var d = b.CreateFleetBeaconTestSubscription;
        b = b.LaunchFleetBeaconTestSubscription;
        var e = c("RelayFBEnvironment");
        d = d(e, a, function (a) {});
        b(d);
      });
      return !0;
    }
    function e(a, b, e, f, g, h) {
      var i = null;
      switch (a) {
        case "client_subscribe":
          i = "client_subscribe";
          break;
        case "client_unsubscribe":
          i = "client_unsubscribe";
          break;
        case "receivepayload":
          i = "client_received_payload";
          break;
      }
      i !== null &&
        c("RealtimeFrameworksCounterFalcoEvent").log(function () {
          var a;
          return {
            event: (a = i) != null ? a : "",
            event_detail: "null",
            use_case: b,
            use_case_type: "gqls",
          };
        });
      var l = c("gkx")("1243442") || f != null ? k : j;
      if (!d("Random").coinflip(l)) return;
      var m = new (c("GraphQLSubscriptionsTypedLogger"))();
      m.setSubscriptionCall(b)
        .setQueryParams({ input: JSON.stringify(e.input) })
        .setForceLogContext(f)
        .setEvent(a)
        .setHandleType(g)
        .setClienttime(Date.now() / 1e3)
        .setClientSampleWeight(l)
        .setQueryID(h)
        .setSessionID(d("ChannelClientID").getID())
        .log();
    }
    function o(a) {
      return a.split("/").reverse()[1];
    }
    function f(a, e, f, g, i, j) {
      if (f != null && i != null) {
        var k = {
          locale: c("CurrentLocale").get(),
          queryID: String(f),
          serializedQueryParameters: JSON.stringify(g),
          viewerID: c("CurrentUser").getID(),
          pageID: j == c("CurrentUser").getID() ? null : j,
          useOSSResponseFormat: !0,
          appID: m,
        };
        return b("Promise").resolve({
          topic: i,
          transformContext: k,
          useCase: o(i),
        });
      }
      e != null || f != null || h(0, 271);
      return new (b("Promise"))(function (b, h) {
        var i, k;
        i = babelHelpers["extends"](
          ((k = {}),
          (k[d("ActorURI").PARAMETER_ACTOR] =
            (i = j) != null ? i : c("RelayAPIConfig").actorID),
          (k.query_params = JSON.stringify(g)),
          k),
          c("getAsyncParams")("POST")
        );
        f != null && (i.doc_id = f);
        e != null && (i.query = e);
        k = new (c("XHRRequest"))(a)
          .setTransportBuilder(c("getCrossOriginTransport").withCredentials)
          .setMethod("POST")
          .setData(i)
          .setErrorHandler(function (a) {
            h(
              new Error(
                "getTopicAndTransformContext: Unable to retrieve topicID for subscription. HTTP Error [" +
                  a.errorCode +
                  "] " +
                  a.errorType +
                  " " +
                  a.errorMsg
              )
            );
          })
          .setResponseHandler(function (a) {
            try {
              var c = JSON.parse(d("CSRFGuard").clean(a)),
                e = c.payload.topic || c.payload.payload.topic;
              c = JSON.parse(
                c.payload.transform_context ||
                  c.payload.payload.transform_context
              );
              b({ topic: e, transformContext: c, useCase: o(e) });
            } catch (b) {
              h(
                new Error(
                  "getTopicAndTransformContext: encountered error " +
                    b +
                    " during " +
                    ("parsing, raw response is \n" + a)
                )
              );
            }
          });
        k.send();
      });
    }
    function p(a, b) {
      b = Object.assign({}, b);
      delete b.client_subscription_id;
      b = (JSON.stringify(b).match(/[a-zA-Z0-9\-_]+/g) || [])
        .concat(a)
        .sort()
        .join(":");
      return c("md5")(b);
    }
    function q(a) {
      return a === "pegasus_comment_create_subscribe" ? !0 : !1;
    }
    g.GRAPH_SERVICES_SDK_APP_ID = m;
    g.maybeLaunchGraphQLSubscriptionsFleetBeacon = a;
    g.logSubscriptionEvent = e;
    g.extractUseCaseFromTopic = o;
    g.getTopicAndTransformContext_DEPRECATED = f;
    g.computeRoutingHint = p;
    g.useJSScheduler = q;
  },
  98
);
__d(
  "RelayRTIGraphQLSubscriber",
  [
    "invariant",
    "CurrentUser",
    "GQLSManager",
    "Promise",
    "RTISubscriptionManagerConfig",
    "Random",
    "RelayRTIUtils",
    "RelayRuntime",
    "StreamStateMachineConstants",
    "gkx",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "no_logging",
      j = "custom_logging",
      k = "workplace_logging",
      l = "gqls_workplace_logging_relay",
      m = "default_logging",
      n = "gqls_default_logging_relay",
      o = 1e3,
      p = 100,
      q = 100;
    new Set();
    function a(a, b, c, d, e, f) {
      return r(a, b, c, e, f)["do"]({
        next: function () {
          d && d.clear();
        },
      });
    }
    function r(a, b, e, f, g) {
      var l,
        n = (l = b.metadata) == null ? void 0 : l.subscriptionName;
      typeof n === "string" || h(0, 13280, b.name);
      l = "gqls/" + n + "/";
      var r = c("GQLSManager").getSubscriptionType(l);
      l = e.input["%options"];
      l = (l == null ? void 0 : l.client_logged_context) == null ? i : j;
      l === i && c("gkx")("1383502") && c("Random").coinflip(p) && (l = k);
      l === i &&
        (c("gkx")("1388683") ||
          (c("gkx")("1382775") && c("Random").coinflip(o))) &&
        (l = m);
      n === "work_availability_status_fanout_subscribe" &&
        l === i &&
        c("gkx")("1809663") &&
        c("Random").coinflip(q) &&
        (l = m);
      var s = w(l, e);
      d("RelayRTIUtils").maybeLaunchGraphQLSubscriptionsFleetBeacon(n);
      return x(a, b, e, l, f, g)["do"]({
        start: function () {
          d("RelayRTIUtils").logSubscriptionEvent(
            "client_subscribe",
            n,
            e,
            s,
            r,
            b.id
          );
        },
        next: function () {
          d("RelayRTIUtils").logSubscriptionEvent(
            "receivepayload",
            n,
            e,
            s,
            r,
            b.id
          );
        },
        unsubscribe: function () {
          d("RelayRTIUtils").logSubscriptionEvent(
            "client_unsubscribe",
            n,
            e,
            s,
            r,
            b.id
          );
        },
      });
    }
    function s(a, b, e, f) {
      if (a != null) {
        a = d("RelayRTIUtils").computeRoutingHint(a, e.input);
        a != null && (f.routing_hint = a);
      }
      e.input.client_subscription_id != null &&
        (f.requestId = e.input.client_subscription_id);
      c("gkx")("33") && (f.routing_semr = b);
    }
    function t(a, b) {
      return a == null ? null : { requestId: b, forceLogContext: a };
    }
    function u(a, e, f, g, h) {
      g === void 0 && (g = null);
      return d("RelayRuntime").Observable.create(function (i) {
        var j = a.id;
        if (typeof j != "string") {
          var k = new Error(
            "Found illegal docID in subscribeWithMobileStyleTopicTransform"
          );
          k.stack;
          throw k;
        }
        k = { doc_id: j };
        ((j = c("RTISubscriptionManagerConfig").is_intern) != null ? j : !1) &&
          (k.www_tier = "intern");
        g != null && g != c("CurrentUser").getID() && (k.page_id = g);
        j = a.metadata.subscriptionName;
        if (typeof j != "string") {
          var l = new Error(
            "Found null useCase in subscribeWithMobileStyleTopicTransform"
          );
          l.stack;
          throw l;
        }
        s(j, a.name, e, k);
        l = (l = e["%options"]) != null ? l : {};
        l.useOSSResponseFormat = !0;
        f != null && (l.client_logged_context = f);
        l.client_has_ods_usecase_counters = !0;
        l = babelHelpers["extends"](
          {
            context: babelHelpers["extends"]({}, e, { "%options": l }),
            gqlsLifecycleHandler: function (a) {
              a ===
                d("StreamStateMachineConstants").events
                  .GQLS_STATE_TRANSIT_ON_ACTIVE &&
                h &&
                h();
              return new (b("Promise"))(function (a) {
                return a();
              });
            },
          },
          k ? { headers: k } : {}
        );
        k = t(f, e.input.client_subscription_id);
        k != null &&
          (l = babelHelpers["extends"]({}, l, { instrumentationData: k }));
        var m = c(
          "GQLSManager"
        ).subscribeViaRequestStreamWithMobileStyleTopicTransform(
          j,
          function (a) {
            try {
              a = y(a);
              i.next(a);
            } catch (a) {
              i.error(a);
            }
          },
          l
        );
        return function () {
          return m && m.unsubscribe();
        };
      });
    }
    function v(a) {
      var b = a.input;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["input"]);
      b["%options"];
      b = babelHelpers.objectWithoutPropertiesLoose(b, ["%options"]);
      return babelHelpers["extends"]({}, a, { input: b });
    }
    function w(a, b) {
      var c = null;
      a == k
        ? (c = l)
        : a == m
        ? (c = n)
        : a == j && (c = b.input["%options"].client_logged_context);
      return c;
    }
    function x(a, b, c, d, e, f) {
      a = v(c);
      d = w(d, c);
      return u(b, a, d, e, f);
    }
    function y(a) {
      if (typeof a === "string") return JSON.parse(a);
      else if (
        typeof a === "object" &&
        (a == null ? void 0 : a.hasOwnProperty("payload")) &&
        typeof (a == null ? void 0 : a.payload) === "string" &&
        (a == null ? void 0 : a.hasOwnProperty("topic")) &&
        typeof (a == null ? void 0 : a.topic) === "string"
      )
        return JSON.parse(a.payload);
      else {
        a = new Error("Relay client received an invalid GQLS payload");
        a.stack;
        throw a;
      }
    }
    g.subscribeWithURIWithLoggingWithCacheInvalidation = a;
    g.subscribeWithMobileStyleTopicTransform = u;
  },
  98
);
__d(
  "RelayFBSubscribeFunction",
  [
    "GQLSHeartbeatConfig",
    "RelayAPIConfig",
    "RelayRTIGraphQLSubscriber",
    "RelayRuntime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("GQLSHeartbeatConfig").heartbeat_interval,
      h = b(
        "RelayRTIGraphQLSubscriber"
      ).subscribeWithURIWithLoggingWithCacheInvalidation;
    b("RelayRuntime").Observable;
    function a(a, c, d, e, f) {
      if (b("RelayAPIConfig").subscriptionTopicURI == null)
        throw new Error(
          "RelayFBSubscribeFunction: `RelayAPIConfig.subscriptionTopicURI` should not be null on www"
        );
      c["%options"] &&
        c["%options"].heartbeat &&
        (c["%options"].heartbeat = { interval: g });
      return h(b("RelayAPIConfig").subscriptionTopicURI, a, c, d, e, f);
    }
    e.exports = a;
  },
  null
);
__d(
  "createRelayFBSubscribeFunction",
  ["RelayFBSubscribeFunction"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var c = a.queryResponseCache,
        d = a.actorID;
      return function (a, e, f) {
        f = f == null ? void 0 : f.onSubscribe;
        return b("RelayFBSubscribeFunction")(a, e, c, d, f);
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "GraphqlLiveQueryEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743656");
    c = b("FalcoLoggerInternal").create("graphql_live_query_event", a);
    e.exports = c;
  },
  null
);
__d(
  "LiveQueryEventsLoggingResolver",
  [
    "GraphqlLiveQueryEventFalcoEvent",
    "Random",
    "RealtimeFrameworksCounterFalcoEvent",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "default",
      i = "without_sampling";
    function a() {
      if (c("gkx")("1133447"))
        return {
          force_log_context: i,
          sampling_rate: 1,
          client_has_ods_usecase_counters: !0,
        };
      else if (c("gkx")("1202011")) {
        if (d("Random").coinflip(1e4))
          return {
            force_log_context: h,
            sampling_rate: 1e4,
            client_has_ods_usecase_counters: !0,
          };
      } else return { client_has_ods_usecase_counters: !0 };
    }
    function b(a, b, d, e, f, g, h, i) {
      g != null &&
        g.sampling_rate != null &&
        c("GraphqlLiveQueryEventFalcoEvent").log(function () {
          return {
            event: a,
            event_source: "web",
            event_reason: b,
            config_id: e,
            doc_id_str: d,
            force_log_context: g.force_log_context,
            logging_sampling_rate: g.sampling_rate,
            live_query_request_id: f,
            error_info: h,
            initial_response_latency_ms: i,
          };
        }),
        c("RealtimeFrameworksCounterFalcoEvent").log(function () {
          return {
            event: a,
            event_detail: b,
            use_case: e,
            use_case_type: "live_query",
          };
        });
    }
    g.tempResolveLoggingContext = a;
    g.logEvent = b;
  },
  98
);
__d(
  "RealtimeGraphQLRequest",
  [
    "invariant",
    "RTISubscriptionManagerConfig",
    "RequestStreamCommonRequestStreamCommonTypes",
    "TransportSelectingClientSingleton",
    "nullthrows",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = this,
          e = a.method,
          f = a.doc_id,
          g = a.is_intern,
          j = a.extra_headers;
        a = a.body;
        this.$11 = function (a) {
          switch (a) {
            case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Started:
              if (b.$10) {
                b.$9 != null || h(0, 13576);
                a = Date.now() - c("nullthrows")(b.$9);
                b.$7 != null && b.$7(a);
              } else (b.$10 = !0), b.$5 != null && b.$5();
              break;
            case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Stopped:
              b.$9 = Date.now();
              b.$6 != null && b.$6(!1, !1);
              break;
            default:
              break;
          }
        };
        this.$10 = !1;
        e = { method: e, doc_id: f };
        g =
          typeof g === "boolean"
            ? g
            : (f = c("RTISubscriptionManagerConfig").is_intern) != null
            ? f
            : !1;
        g && (e = babelHelpers["extends"]({}, e, { www_tier: "intern" }));
        j != null && (e = babelHelpers["extends"]({}, e, j));
        i(e);
        this.$1 = e;
        this.$2 = JSON.stringify(a);
      }
      var e = a.prototype;
      e.onResponse = function (a) {
        this.$3 = a;
        return this;
      };
      e.onError = function (a) {
        this.$4 = a;
        return this;
      };
      e.onActive = function (a) {
        this.$5 = a;
        return this;
      };
      e.onPause = function (a) {
        this.$6 = a;
        return this;
      };
      e.onResume = function (a) {
        this.$7 = a;
        return this;
      };
      e.onRetryUpdateRequestBody = function (a) {
        this.$8 = a;
        this.$1 = babelHelpers["extends"]({}, this.$1, {
          request_stream_retry: "false",
        });
        return this;
      };
      e.send = function () {
        var a, d;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  this.$3 != null || h(0, 33593);
                  a = { onData: c("nullthrows")(this.$3) };
                  this.$4 != null &&
                    (a = babelHelpers["extends"]({}, a, {
                      onTermination: this.$4,
                    }));
                  a = babelHelpers["extends"]({}, a, {
                    onFlowStatus: this.$11,
                  });
                  this.$8 != null &&
                    (a = babelHelpers["extends"]({}, a, {
                      onRetryUpdateRequestBody: this.$8,
                    }));
                  e.next = 7;
                  return b("regeneratorRuntime").awrap(
                    c("TransportSelectingClientSingleton").requestStream(
                      this.$1,
                      this.$2,
                      a
                    )
                  );
                case 7:
                  d = e.sent;
                  return e.abrupt("return", {
                    cancel: function () {
                      d.cancel();
                    },
                    amendExperimental: function (a) {
                      try {
                        d.amendWithoutAck(JSON.stringify(a));
                        return !0;
                      } catch (a) {
                        return !1;
                      }
                    },
                  });
                case 9:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    function i(a) {
      a.method == "FBGQLS:TOWN_CLOCK_SUBSCRIBE" &&
        ((a.method = "StreamBridge"),
        (a["php-handler"] = "GqlsTownClockHandler"));
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "makeGraphQLLiveQueryRequest",
  ["Cookie", "RealtimeGraphQLRequest"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "FBLQ";
    function a(a) {
      var b = a.doc_id,
        d = a.config_id,
        e = a.live_query_request_id,
        f = a.actor_id,
        g = a.variables,
        i = a.is_intern,
        j = a.access_token,
        k = a.graphiql_impersonation,
        l = a.logging_context,
        m = a.last_response_digest;
      a = a.priming_token;
      var n = h + ":" + d;
      b = {
        method: n,
        doc_id: b,
        body: { variables: (n = g) != null ? n : {} },
      };
      i != null && (b = babelHelpers["extends"]({}, b, { is_intern: i }));
      g = { config_id: d, live_query_request_id: e };
      m != null &&
        (g = babelHelpers["extends"]({}, g, { last_response_digest: m }));
      f != null && (g = babelHelpers["extends"]({}, g, { actor_id: f }));
      a != null && (g = babelHelpers["extends"]({}, g, { priming_token: a }));
      l != null && (g = babelHelpers["extends"]({}, g, { logging_context: l }));
      j != null && (g = babelHelpers["extends"]({}, g, { access_token: j }));
      k != null &&
        (g = babelHelpers["extends"]({}, g, { graphiql_impersonation: k }));
      n = c("Cookie").get("unittest_config");
      n != null && (g = babelHelpers["extends"]({}, g, { unittest_config: n }));
      b = babelHelpers["extends"]({}, b, { extra_headers: g });
      return new (c("RealtimeGraphQLRequest"))(b);
    }
    f.exports = a;
  },
  34
);
__d(
  "liveQueryFetch",
  [
    "invariant",
    "LiveQueryEventsLoggingResolver",
    "LiveQueryWebRelayKillList",
    "RelayGraphQLRequestUtils",
    "RelayRuntime",
    "makeGraphQLLiveQueryRequest",
    "nullthrows",
    "promiseDone",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("RelayRuntime").Observable,
      i = b("RelayRuntime").RelayError;
    function a(a, c, d) {
      if (!l() || k(d.config_id))
        return h.create(function (a) {
          a.complete();
          return;
        });
      var e = Date.now(),
        f = 0;
      a.id != null || g(0, 13279);
      var m = j();
      a.metadata.live != null &&
        (typeof a.metadata.live.live_query_request_id === "string" &&
          (m = a.metadata.live.live_query_request_id),
        typeof a.metadata.live.timeStamp === "number" &&
          (e = a.metadata.live.timeStamp));
      var n = {
        doc_id: b("nullthrows")(a.id),
        config_id: d.config_id,
        actor_id: d.actor_id,
        variables: c,
        live_query_request_id: m,
      };
      d.access_token !== "" &&
        (n = babelHelpers["extends"]({}, n, { access_token: d.access_token }));
      var o = b("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
      o != null &&
        ((o = babelHelpers["extends"]({}, o, {
          client_send_request_timestamp: e,
        })),
        (n = babelHelpers["extends"]({}, n, { logging_context: o })));
      return h.create(function (a) {
        var c = b("makeGraphQLLiveQueryRequest")(n)
          .onResponse(function (c) {
            var d = Date.now();
            try {
              (c = b("RelayGraphQLRequestUtils").parsePayload(c)),
                typeof c === "object" || g(0, 12937);
            } catch (c) {
              b("LiveQueryEventsLoggingResolver").logEvent(
                "client_update",
                "error_parsing_response",
                n.doc_id,
                n.config_id,
                m,
                o,
                c.message
              );
              return a.error(c);
            }
            if (!("errors" in c) && !("data" in c)) {
              b("LiveQueryEventsLoggingResolver").logEvent(
                "client_update",
                "error_empty_response",
                n.doc_id,
                n.config_id,
                m,
                o,
                "Parsed network response is empty"
              );
              return a.error(
                i.createWarning(
                  "EmptyResponseError",
                  "Parsed network response is empty"
                )
              );
            }
            if (c.errors)
              for (
                var h = c.errors,
                  j = Array.isArray(h),
                  k = 0,
                  h = j
                    ? h
                    : h[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var l;
                if (j) {
                  if (k >= h.length) break;
                  l = h[k++];
                } else {
                  k = h.next();
                  if (k.done) break;
                  l = k.value;
                }
                l = l;
                if (l.severity === "CRITICAL") {
                  l = b("RelayGraphQLRequestUtils").createErrorFromPayload(l);
                  b("LiveQueryEventsLoggingResolver").logEvent(
                    "client_update",
                    "error_in_response",
                    n.doc_id,
                    n.config_id,
                    m,
                    o,
                    l.message
                  );
                  return a.error(l);
                }
              }
            f == 0
              ? b("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "live_query_initial",
                  n.doc_id,
                  n.config_id,
                  m,
                  o,
                  null,
                  d - e
                )
              : b("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "regular_response_update",
                  n.doc_id,
                  n.config_id,
                  m,
                  o
                );
            f += 1;
            a.closed || a.next(c);
          })
          .onError(function (a) {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_update",
              "error_received",
              n.doc_id,
              n.config_id,
              m,
              o,
              a.message
            );
          })
          .onActive(function () {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_subscribe",
              "initial_subscribe_request",
              n.doc_id,
              n.config_id,
              m,
              o
            );
          })
          .onPause(function (a, c) {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_unsubscribe",
              "subscription_paused",
              n.doc_id,
              n.config_id,
              m,
              o
            );
          })
          .onResume(function (a) {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_subscribe",
              "subscription_resumed",
              n.doc_id,
              n.config_id,
              m,
              o
            );
          })
          .send();
        return function () {
          b("promiseDone")(c, function (a) {
            a.cancel(),
              b("LiveQueryEventsLoggingResolver").logEvent(
                "client_unsubscribe",
                "regular_unsubscribe",
                n.doc_id,
                n.config_id,
                m,
                o
              );
          });
        };
      });
    }
    function j() {
      return b("uuid")();
    }
    function k(a) {
      for (
        var c = b("LiveQueryWebRelayKillList").liveQueryWebRelayKillList,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        if (a === f) return !0;
      }
      return !1;
    }
    function l() {
      return "WebSocket" in window;
    }
    e.exports = a;
  },
  null
);
__d(
  "liveQueryFetchWithWWWInitial",
  [
    "invariant",
    "LiveQueryEventsLoggingResolver",
    "LiveQueryWebRelayKillList",
    "RelayGraphQLRequestUtils",
    "RelayRuntime",
    "makeGraphQLLiveQueryRequest",
    "nullthrows",
    "promiseDone",
    "uuid",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b, e, f) {
      if (!k() || j(e.config_id)) return f;
      var g = Date.now();
      a.id != null || h(0, 13279);
      var l = i();
      a.metadata.live != null &&
        (typeof a.metadata.live.live_query_request_id === "string" &&
          (l = a.metadata.live.live_query_request_id),
        typeof a.metadata.live.timeStamp === "number" &&
          (g = a.metadata.live.timeStamp));
      var m = {
        doc_id: c("nullthrows")(a.id),
        config_id: e.config_id,
        actor_id: e.actor_id,
        variables: b,
        live_query_request_id: l,
      };
      e.access_token !== "" &&
        (m = babelHelpers["extends"]({}, m, { access_token: e.access_token }));
      var n = d("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
      n != null && (m = babelHelpers["extends"]({}, m, { logging_context: n }));
      return d("RelayRuntime").Observable.create(function (a) {
        var b = !1,
          e = null;
        f.subscribe({
          next: function (c) {
            var e = Date.now();
            if (c.extensions != null && c.extensions.is_final === !0) {
              d("LiveQueryEventsLoggingResolver").logEvent(
                "client_update",
                "www_initials_is_final",
                m.doc_id,
                m.config_id,
                l,
                n,
                null,
                e - g
              );
              if (c.extensions != null && c.extensions.live_query != null) {
                e = c.extensions.live_query;
                typeof e.priming_token === "string" &&
                  (m = babelHelpers["extends"]({}, m, {
                    priming_token: e.priming_token,
                  }));
                typeof e.response_digest === "string" &&
                  (m = babelHelpers["extends"]({}, m, {
                    last_response_digest: e.response_digest,
                  }));
                typeof e.disable === "boolean" && (b = e.disable);
              }
            }
            a.next(c);
          },
          error: function (b) {
            a.error(b);
          },
          complete: function () {
            if (b) {
              a.complete();
              return function () {};
            }
            e = c("makeGraphQLLiveQueryRequest")(m)
              .onResponse(function (b) {
                try {
                  (b = c("RelayGraphQLRequestUtils").parsePayload(b)),
                    typeof b === "object" || h(0, 12937);
                } catch (b) {
                  d("LiveQueryEventsLoggingResolver").logEvent(
                    "client_update",
                    "error_parsing_response",
                    m.doc_id,
                    m.config_id,
                    l,
                    n,
                    b.message
                  );
                  return a.error(b);
                }
                if (!("errors" in b) && !("data" in b)) {
                  d("LiveQueryEventsLoggingResolver").logEvent(
                    "client_update",
                    "error_empty_response",
                    m.doc_id,
                    m.config_id,
                    l,
                    n,
                    "Parsed network response is empty"
                  );
                  return a.error(
                    d("RelayRuntime").RelayError.createWarning(
                      "EmptyResponseError",
                      "Parsed network response is empty"
                    )
                  );
                }
                if (b.errors)
                  for (
                    var e = b.errors,
                      f = Array.isArray(e),
                      g = 0,
                      e = f
                        ? e
                        : e[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var i;
                    if (f) {
                      if (g >= e.length) break;
                      i = e[g++];
                    } else {
                      g = e.next();
                      if (g.done) break;
                      i = g.value;
                    }
                    i = i;
                    if (i.severity === "CRITICAL") {
                      i = c("RelayGraphQLRequestUtils").createErrorFromPayload(
                        i
                      );
                      d("LiveQueryEventsLoggingResolver").logEvent(
                        "client_update",
                        "error_in_response",
                        m.doc_id,
                        m.config_id,
                        l,
                        n,
                        i.message
                      );
                      return a.error(i);
                    }
                  }
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "regular_response_update",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
                a.closed || a.next(b);
              })
              .onError(function (a) {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "error_received",
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                  a.message
                );
              })
              .onActive(function () {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_subscribe",
                  "initial_subscribe_request",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
              })
              .onPause(function (a, b) {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_unsubscribe",
                  "subscription_paused",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
              })
              .onResume(function (a) {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_subscribe",
                  "subscription_resumed",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
              })
              .send();
          },
        });
        return function () {
          e != null &&
            c("promiseDone")(e, function (a) {
              a.cancel(),
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_unsubscribe",
                  "regular_unsubscribe",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
            });
        };
      });
    }
    function i() {
      return c("uuid")();
    }
    function j(a) {
      for (
        var b = c("LiveQueryWebRelayKillList").liveQueryWebRelayKillList,
          d = Array.isArray(b),
          e = 0,
          b = d
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= b.length) break;
          f = b[e++];
        } else {
          e = b.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        if (a === f) return !0;
      }
      return !1;
    }
    function k() {
      return "WebSocket" in window;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometRelayEnvironmentConfig",
  [
    "ActorURIConfig",
    "CometMissingFieldHandlers",
    "CometRelayFlightEventLogger",
    "CometRelayPerfStore",
    "CometRootInitServerFlag",
    "RelayAPIConfig",
    "RelayFBFlightPayloadDeserializerGated",
    "RelayFBFlightServerErrorHandlerGated",
    "RelayFBOperationLoader",
    "RelayRequiredFieldLogger",
    "cometHandlerProvider",
    "cometPrefetchVideoDash",
    "cometWrapNetworkObservable",
    "cr:1121434",
    "cr:1445039",
    "cr:1467370",
    "cr:1850939",
    "cr:851",
    "createCometStore",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "createRelayFBSubscribeFunction",
    "gkx",
    "liveQueryFetch",
    "liveQueryFetchWithWWWInitial",
    "relay-runtime",
    "relayFBGetDataID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var d = c("RelayAPIConfig").actorID === a && b == null ? " DEFAULT" : "";
      b = b == null ? "" : " - " + b;
      return "CometRelayEnvironment (" + String(a) + b + ")" + d;
    }
    function i(a, d) {
      d = c("createRelayFBNetwork")(
        c("createRelayFBNetworkFetch")({
          actorID: a,
          batchResponseChunks: !0,
          getAdditionalData: function () {
            var b = {};
            a != null && (b[c("ActorURIConfig").PARAMETER_ACTOR] = a);
            c("gkx")("2588") &&
              c("RelayAPIConfig").useXController === !1 &&
              c("RelayAPIConfig").accessToken !== "" &&
              (b.access_token = c("RelayAPIConfig").accessToken);
            return b;
          },
          graphURI: d,
          liveQueryFetchFn: c("liveQueryFetch"),
          liveQueryFetchWithWWWInitialFn: c("liveQueryFetchWithWWWInitial"),
          wrapObservableFn: c("cometWrapNetworkObservable")(),
        }),
        c("createRelayFBSubscribeFunction")({ actorID: a }),
        c("cometPrefetchVideoDash"),
        function (a, c) {
          if (
            window.__comet_ssr_is_server_env_DO_NOT_USE === !0 ||
            b("cr:1850939") == null
          )
            return;
          b("cr:1850939").handleRelayRoutingPayload(a, c);
        }
      );
      return d;
    }
    function j(a) {
      a =
        b("cr:1445039") != null ? b("cr:1445039").create(String(a), 2e3) : null;
      return a;
    }
    function k(a) {
      var c = b("cr:1121434") != null ? b("cr:1121434")() : null;
      return function (e) {
        c && c(e),
          a && a.log(e),
          d("CometRelayPerfStore").log(e),
          d("CometRelayFlightEventLogger").log(e),
          b("cr:851") && b("cr:851").log(e);
      };
    }
    function l(a) {
      var b =
        a != null
          ? function (b) {
              return a.log(b);
            }
          : null;
      return b;
    }
    function a(a) {
      var e = a.actorID,
        f = a.actorEnvironmentKey;
      a = a.graphURI;
      a = a === void 0 ? void 0 : a;
      var g = j(e);
      return {
        UNSTABLE_defaultRenderPolicy: "partial",
        actorID: e,
        configName: h(e, f),
        getDataID: c("relayFBGetDataID"),
        handlerProvider: c("cometHandlerProvider"),
        isServer: d("CometRootInitServerFlag").isServerEnvironment(),
        log: k(g),
        missingFieldHandlers: c("CometMissingFieldHandlers"),
        network: i(e, a),
        operationLoader: c("RelayFBOperationLoader"),
        operationTracker: new (d(
          "relay-runtime"
        ).__internal.OperationTracker)(),
        reactFlightPayloadDeserializer: c(
          "RelayFBFlightPayloadDeserializerGated"
        ),
        reactFlightServerErrorHandler: c(
          "RelayFBFlightServerErrorHandlerGated"
        ),
        requiredFieldLogger: d("RelayRequiredFieldLogger").create(),
        scheduler: b("cr:1467370"),
        store: c("createCometStore")(l(g)),
      };
    }
    g.createCometEnvironmentConfigName = h;
    g.createCometNetwork = i;
    g.createCometRelayEventLogger = j;
    g.createCometEnvironmentLogFn = k;
    g.createCometStoreLoggerFn = l;
    g.createCometRelayEnvironmentConfig = a;
  },
  98
);
__d(
  "cometCreateMulitActorEnvironmentConfig",
  [
    "CometMissingFieldHandlers",
    "CometRootInitServerFlag",
    "RelayFBFlightPayloadDeserializerGated",
    "RelayFBFlightServerErrorHandlerGated",
    "RelayFBOperationLoader",
    "RelayRequiredFieldLogger",
    "cometHandlerProvider",
    "cr:1467370",
    "createCometRelayEnvironmentConfig",
    "createCometStore",
    "relayFBGetDataID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, e, f) {
      f === void 0 && (f = void 0);
      var g = d(
        "createCometRelayEnvironmentConfig"
      ).createCometRelayEventLogger(a);
      return {
        createConfigNameForActor: function (a) {
          return (
            d(
              "createCometRelayEnvironmentConfig"
            ).createCometEnvironmentConfigName(String(a), e) + " (Multi Actor)"
          );
        },
        createNetworkForActor: function (a) {
          return d("createCometRelayEnvironmentConfig").createCometNetwork(
            String(a),
            f
          );
        },
        createStoreForActor: function () {
          return c("createCometStore")(
            d("createCometRelayEnvironmentConfig").createCometStoreLoggerFn(g)
          );
        },
        getDataID: c("relayFBGetDataID"),
        handlerProvider: c("cometHandlerProvider"),
        isServer: d("CometRootInitServerFlag").isServerEnvironment(),
        logFn: d(
          "createCometRelayEnvironmentConfig"
        ).createCometEnvironmentLogFn(g),
        missingFieldHandlers: c("CometMissingFieldHandlers"),
        operationLoader: c("RelayFBOperationLoader"),
        reactFlightPayloadDeserializer: c(
          "RelayFBFlightPayloadDeserializerGated"
        ),
        reactFlightServerErrorHandler: c(
          "RelayFBFlightServerErrorHandlerGated"
        ),
        requiredFieldLogger: d("RelayRequiredFieldLogger").create(),
        scheduler: b("cr:1467370"),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "relay-runtime/multi-actor-environment/ActorSpecificEnvironment",
  [
    "relay-runtime/network/wrapNetworkWithLogObserver",
    "relay-runtime/store/RelayOperationTracker",
    "relay-runtime/store/RelayPublishQueue",
    "relay-runtime/store/StoreInspector",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/util/registerEnvironmentWithDevTools",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        var c = this;
        this.configName = a.configName;
        this.actorIdentifier = a.actorIdentifier;
        this.multiActorEnvironment = a.multiActorEnvironment;
        this.__log = a.logFn;
        this.requiredFieldLogger = a.requiredFieldLogger;
        this.$3 = new (b("relay-runtime/store/RelayOperationTracker"))();
        this.$5 = a.store;
        this.$2 = b("relay-runtime/network/wrapNetworkWithLogObserver")(
          this,
          a.network
        );
        this.$4 = new (b("relay-runtime/store/RelayPublishQueue"))(
          a.store,
          a.handlerProvider,
          b("relay-runtime/store/defaultGetDataID")
        );
        this.$1 = a.defaultRenderPolicy;
        this.options = { actorID: this.actorIdentifier };
        this["@@RelayModernEnvironment"] = !0;
        b("relay-runtime/util/registerEnvironmentWithDevTools")(this);
      }
      var c = a.prototype;
      c.getPublishQueue = function () {
        return this.$4;
      };
      c.UNSTABLE_getDefaultRenderPolicy = function () {
        return this.$1;
      };
      c.applyMutation = function (a) {
        return this.multiActorEnvironment.applyMutation(this, a);
      };
      c.applyUpdate = function (a) {
        return this.multiActorEnvironment.applyUpdate(this, a);
      };
      c.revertUpdate = function (a) {
        return this.multiActorEnvironment.revertUpdate(this, a);
      };
      c.replaceUpdate = function (a, b) {
        return this.multiActorEnvironment.replaceUpdate(this, a, b);
      };
      c.check = function (a) {
        return this.multiActorEnvironment.check(this, a);
      };
      c.subscribe = function (a, b) {
        return this.multiActorEnvironment.subscribe(this, a, b);
      };
      c.retain = function (a) {
        return this.multiActorEnvironment.retain(this, a);
      };
      c.commitUpdate = function (a) {
        return this.multiActorEnvironment.commitUpdate(this, a);
      };
      c.commitPayload = function (a, b) {
        return this.multiActorEnvironment.commitPayload(this, a, b);
      };
      c.getNetwork = function () {
        return this.$2;
      };
      c.getStore = function () {
        return this.$5;
      };
      c.getOperationTracker = function () {
        return this.$3;
      };
      c.lookup = function (a) {
        return this.multiActorEnvironment.lookup(this, a);
      };
      c.execute = function (a) {
        return this.multiActorEnvironment.execute(this, a);
      };
      c.executeMutation = function (a) {
        return this.multiActorEnvironment.executeMutation(this, a);
      };
      c.executeWithSource = function (a) {
        return this.multiActorEnvironment.executeWithSource(this, a);
      };
      c.isRequestActive = function (a) {
        return this.multiActorEnvironment.isRequestActive(this, a);
      };
      c.isServer = function () {
        return this.multiActorEnvironment.isServer();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/multi-actor-environment/MultiActorEnvironment",
  [
    "relay-runtime/handlers/RelayDefaultHandlerProvider",
    "relay-runtime/multi-actor-environment/ActorSpecificEnvironment",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/store/OperationExecutor",
    "relay-runtime/store/RelayModernStore",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/store/defaultRequiredFieldLogger",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        var c;
        this.$1 = new Map();
        this.$12 = a.operationLoader;
        this.$3 = a.createNetworkForActor;
        this.$16 = a.scheduler;
        this.$6 =
          (c = a.getDataID) != null
            ? c
            : b("relay-runtime/store/defaultGetDataID");
        this.$7 = a.handlerProvider
          ? a.handlerProvider
          : b("relay-runtime/handlers/RelayDefaultHandlerProvider");
        this.$9 = (c = a.logFn) != null ? c : g;
        this.$11 = new Map();
        this.$15 =
          (c = a.requiredFieldLogger) != null
            ? c
            : b("relay-runtime/store/defaultRequiredFieldLogger");
        this.$17 = a.shouldProcessClientComponents;
        this.$18 = (c = a.treatMissingFieldsAsNull) != null ? c : !1;
        this.$8 = (c = a.isServer) != null ? c : !1;
        this.$10 = a.missingFieldHandlers;
        this.$4 = a.createStoreForActor;
        this.$13 = a.reactFlightPayloadDeserializer;
        this.$14 = a.reactFlightServerErrorHandler;
        this.$2 = a.createConfigNameForActor;
        this.$5 = (c = a.defaultRenderPolicy) != null ? c : "partial";
      }
      var c = a.prototype;
      c.forActor = function (a) {
        var c = this.$1.get(a);
        if (c == null) {
          var d = new (b(
            "relay-runtime/multi-actor-environment/ActorSpecificEnvironment"
          ))({
            configName: this.$2 ? this.$2(a) : null,
            actorIdentifier: a,
            multiActorEnvironment: this,
            logFn: this.$9,
            requiredFieldLogger: this.$15,
            store:
              this.$4 != null
                ? this.$4(a)
                : new (b("relay-runtime/store/RelayModernStore"))(
                    b("relay-runtime/store/RelayRecordSource").create()
                  ),
            network: this.$3(a),
            handlerProvider: this.$7,
            defaultRenderPolicy: this.$5,
          });
          this.$1.set(a, d);
          return d;
        } else return c;
      };
      c.check = function (a, c) {
        var d = this;
        return this.$10 == null || this.$10.length === 0
          ? a.getStore().check(c, {
              handlers: [],
              defaultActorIdentifier: a.actorIdentifier,
              getSourceForActor: function (a) {
                return d.forActor(a).getStore().getSource();
              },
              getTargetForActor: function () {
                return b("relay-runtime/store/RelayRecordSource").create();
              },
            })
          : this.$19(a, c, this.$10);
      };
      c.$19 = function (a, c, d) {
        var e = this,
          f = new Map([
            [
              a.actorIdentifier,
              b("relay-runtime/store/RelayRecordSource").create(),
            ],
          ]);
        c = a.getStore().check(c, {
          handlers: d,
          defaultActorIdentifier: a.actorIdentifier,
          getSourceForActor: function (a) {
            return e.forActor(a).getStore().getSource();
          },
          getTargetForActor: function (a) {
            var c = f.get(a);
            c == null &&
              ((c = b("relay-runtime/store/RelayRecordSource").create()),
              f.set(a, c));
            return c;
          },
        });
        a = function () {
          if (h) {
            if (i >= g.length) return "break";
            d = g[i++];
          } else {
            i = g.next();
            if (i.done) return "break";
            d = i.value;
          }
          var a = d,
            b = a[0],
            c = a[1];
          c.size() > 0 &&
            e.$20(function () {
              var a = e.forActor(b).getPublishQueue();
              a.commitSource(c);
              a.run();
            });
        };
        for (
          var g = f,
            h = Array.isArray(g),
            i = 0,
            g = h
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var j = a();
          if (j === "break") break;
        }
        return c;
      };
      c.subscribe = function (a, b, c) {
        return a.getStore().subscribe(b, c);
      };
      c.retain = function (a, b) {
        return a.getStore().retain(b);
      };
      c.applyUpdate = function (a, b) {
        var c = this,
          d = a.getPublishQueue();
        a = function () {
          c.$20(function () {
            d.revertUpdate(b), d.run();
          });
        };
        this.$20(function () {
          d.applyUpdate(b), d.run();
        });
        return { dispose: a };
      };
      c.revertUpdate = function (a, b) {
        var c = a.getPublishQueue();
        this.$20(function () {
          c.revertUpdate(b), c.run();
        });
      };
      c.replaceUpdate = function (a, b, c) {
        var d = a.getPublishQueue();
        this.$20(function () {
          d.revertUpdate(b), d.applyUpdate(c), d.run();
        });
      };
      c.applyMutation = function (a, c) {
        var d = this.$21(a, {
          createSource: function () {
            return b("relay-runtime/network/RelayObservable").create(function (
              a
            ) {});
          },
          isClientPayload: !1,
          operation: c.operation,
          optimisticConfig: c,
          updater: null,
        }).subscribe({});
        return {
          dispose: function () {
            return d.unsubscribe();
          },
        };
      };
      c.commitUpdate = function (a, b) {
        var c = a.getPublishQueue();
        this.$20(function () {
          c.commitUpdate(b), c.run();
        });
      };
      c.commitPayload = function (a, c, d) {
        this.$21(a, {
          createSource: function () {
            return b("relay-runtime/network/RelayObservable").from({ data: d });
          },
          isClientPayload: !0,
          operation: c,
          optimisticConfig: null,
          updater: null,
        }).subscribe({});
      };
      c.lookup = function (a, b) {
        return a.getStore().lookup(b);
      };
      c.execute = function (a, b) {
        var c = b.operation;
        b = b.updater;
        return this.$21(a, {
          createSource: function () {
            return a
              .getNetwork()
              .execute(
                c.request.node.params,
                c.request.variables,
                c.request.cacheConfig || {},
                null
              );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: null,
          updater: b,
        });
      };
      c.executeMutation = function (a, b) {
        var c = b.operation,
          d = b.optimisticResponse,
          e = b.optimisticUpdater,
          f = b.updater,
          g = b.uploadables,
          h;
        (d || e) && (h = { operation: c, response: d, updater: e });
        return this.$21(a, {
          createSource: function () {
            return a.getNetwork().execute(
              c.request.node.params,
              c.request.variables,
              babelHelpers["extends"]({}, c.request.cacheConfig, {
                force: !0,
              }),
              g
            );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: h,
          updater: f,
        });
      };
      c.executeWithSource = function (a, b) {
        return this.$21(a, {
          createSource: function () {
            return b.source;
          },
          isClientPayload: !1,
          operation: b.operation,
          optimisticConfig: null,
          updater: null,
        });
      };
      c.isRequestActive = function (a, b) {
        a = this.$11.get(b);
        return a === "active";
      };
      c.isServer = function () {
        return this.$8;
      };
      c.$21 = function (a, c) {
        var d = this,
          e = c.createSource,
          f = c.isClientPayload,
          g = c.operation,
          h = c.optimisticConfig,
          i = c.updater;
        return b("relay-runtime/network/RelayObservable").create(function (c) {
          var j = b("relay-runtime/store/OperationExecutor").execute({
            actorIdentifier: a.actorIdentifier,
            getDataID: d.$6,
            isClientPayload: f,
            operation: g,
            operationExecutions: d.$11,
            operationLoader: d.$12,
            operationTracker: a.getOperationTracker(),
            optimisticConfig: h,
            getPublishQueue: function (a) {
              return d.forActor(a).getPublishQueue();
            },
            reactFlightPayloadDeserializer: d.$13,
            reactFlightServerErrorHandler: d.$14,
            scheduler: d.$16,
            shouldProcessClientComponents: d.$17,
            sink: c,
            source: e(),
            getStore: function (a) {
              return d.forActor(a).getStore();
            },
            treatMissingFieldsAsNull: d.$18,
            updater: i,
            log: d.$9,
          });
          return function () {
            return j.cancel();
          };
        });
      };
      c.$20 = function (a) {
        var b = this.$16;
        b != null ? b.schedule(a) : a();
      };
      c.commitMultiActorUpdate = function (a) {
        var b = function () {
          if (d) {
            if (e >= c.length) return "break";
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) return "break";
            f = e.value;
          }
          var b = f,
            g = b[0],
            h = b[1];
          h.commitUpdate(function (b) {
            a(g, h, b);
          });
        };
        for (
          var c = this.$1,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f,
            g = b();
          if (g === "break") break;
        }
      };
      return a;
    })();
    function g() {}
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/multi-actor-environment",
  [
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/multi-actor-environment/MultiActorEnvironment",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b(
      "relay-runtime/multi-actor-environment/ActorIdentifier"
    ).getActorIdentifier;
    e.exports = {
      MultiActorEnvironment: b(
        "relay-runtime/multi-actor-environment/MultiActorEnvironment"
      ),
      getActorIdentifier: a,
    };
  },
  null
);
__d(
  "CometRelayMultiActorEnvironment",
  [
    "RelayAPIConfig",
    "cometCreateMulitActorEnvironmentConfig",
    "relay-runtime/multi-actor-environment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = new (d(
        "relay-runtime/multi-actor-environment"
      ).MultiActorEnvironment)(
        c("cometCreateMulitActorEnvironmentConfig")(c("RelayAPIConfig").actorID)
      );
    function a(a) {
      var b = function (b, c, d) {
        a(String(b), c, d);
      };
      for (
        var c = h.values(),
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        f.commitMultiActorUpdate(b);
      }
      i.commitMultiActorUpdate(b);
    }
    function b(a, b) {
      var e;
      b != null
        ? ((e = h.get(b)),
          e == null &&
            ((e = new (d(
              "relay-runtime/multi-actor-environment"
            ).MultiActorEnvironment)(
              c("cometCreateMulitActorEnvironmentConfig")(
                c("RelayAPIConfig").actorID,
                b
              )
            )),
            h.set(b, e)))
        : (e = i);
      return e.forActor(a);
    }
    g.commitMultiActorUpdate = a;
    g.forActor = b;
  },
  98
);
__d(
  "BizKitNotificationsThinClientConnectionHandler",
  ["relay-runtime", "unrecoverableViolation", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "bizkit_notifications_thin_client",
      i = "id",
      j = function (a) {
        return a == null
          ? void 0
          : (a = a.getLinkedRecord("notif")) == null
          ? void 0
          : a.getValue(i);
      },
      k = "__connection_next_edge_index";
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d("relay-runtime").ConnectionInterface.get(),
        h = g.EDGES,
        i = g.END_CURSOR,
        j = g.HAS_NEXT_PAGE,
        p = g.HAS_PREV_PAGE,
        q = g.PAGE_INFO,
        r = g.PAGE_INFO_TYPE;
      g = g.START_CURSOR;
      var s = f.getLinkedRecord(b.fieldKey),
        t = s && s.getLinkedRecord(q);
      if (!s) {
        f.setValue(null, b.handleKey);
        return;
      }
      var u = d("relay-runtime").generateClientID(f.getDataID(), b.handleKey),
        v = f.getLinkedRecord(b.handleKey);
      e = (e = v) != null ? e : a.get(u);
      var w = e && e.getLinkedRecord(q);
      if (!e) {
        var x = a.create(u, s.getType());
        x.setValue(0, k);
        x.copyFieldsFrom(s);
        u = s.getLinkedRecords(h);
        if (u) {
          var y = d("relay-runtime").ConnectionInterface.get(),
            z = y.NODE;
          u = u.reduce(function (b, c) {
            if (!c) return b;
            var d = c.getLinkedRecord(z);
            d = d == null ? void 0 : d.getType();
            return d === "NotifPageCachedNotificationRow"
              ? b
              : b.concat(l(a, x, c));
          }, []);
          x.setLinkedRecords(u, h);
        }
        f.setLinkedRecord(x, b.handleKey);
        w = a.create(d("relay-runtime").generateClientID(x.getDataID(), q), r);
        w.setValue(!1, j);
        w.setValue(!1, p);
        w.setValue(null, i);
        w.setValue(null, g);
        t && w.copyFieldsFrom(t);
        x.setLinkedRecord(w, q);
      } else {
        v == null && f.setLinkedRecord(e, b.handleKey);
        var A = e;
        y = s.getLinkedRecords(h);
        y &&
          (y = y.map(function (b) {
            return l(a, A, b);
          }));
        u = A.getLinkedRecords(h);
        r = A.getLinkedRecord(q);
        A.copyFieldsFrom(s);
        u && A.setLinkedRecords(u, h);
        r && A.setLinkedRecord(r, q);
        v = [];
        f = b.args;
        if (u && y)
          if (f.after != null)
            if (w && f.after === w.getValue(i)) {
              e = new Set();
              m(u, v, e);
              m(y, v, e);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                f.after,
                w && w.getValue(i)
              );
              return;
            }
          else if (f.before != null)
            if (w && f.before === w.getValue(g)) {
              s = new Set();
              m(y, v, s);
              m(u, v, s);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                f.before,
                w && w.getValue(g)
              );
              return;
            }
          else {
            r = n(u);
            q = new Set();
            o(y, v, r, q);
          }
        else y ? (v = y) : (v = u);
        v != null && v !== u && A.setLinkedRecords(v, h);
        if (w && t)
          if (f.after == null && f.before == null) w.copyFieldsFrom(t);
          else if (f.before != null || (f.after == null && f.last)) {
            w.setValue(!!t.getValue(p), p);
            b = t.getValue(g);
            typeof b === "string" && w.setValue(b, g);
          } else if (f.after != null || (f.before == null && f.first)) {
            w.setValue(!!t.getValue(j), j);
            e = t.getValue(i);
            typeof e === "string" && w.setValue(e, i);
          }
      }
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function l(a, b, e) {
      if (e == null) return e;
      var f = d("relay-runtime").ConnectionInterface.get();
      f = f.EDGES;
      var g = b.getValue(k);
      if (!(typeof g === "number"))
        throw c("unrecoverableViolation")(
          "CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number",
          "Notifications"
        );
      f = d("relay-runtime").generateClientID(b.getDataID(), f, g);
      a = a.create(f, e.getType());
      a.copyFieldsFrom(e);
      b.setValue(g + 1, k);
      return a;
    }
    function m(a, b, c) {
      var e = d("relay-runtime").ConnectionInterface.get();
      e = e.NODE;
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (!g) continue;
        var h = g.getLinkedRecord(e);
        h = h && h.getDataID();
        if (h != null) {
          if (c.has(h)) continue;
          c.add(h);
        }
        b.push(g);
      }
    }
    function n(a) {
      var b = {},
        c = d("relay-runtime").ConnectionInterface.get();
      c = c.NODE;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        if (!f) continue;
        f = f.getLinkedRecord(c);
        var g = f && f.getType();
        if (g === "NotifPageNotificationRow") {
          g = j(f);
          typeof g === "string" && (b[g] = f);
        }
      }
      return b;
    }
    function o(a, b, c, e) {
      var f = d("relay-runtime").ConnectionInterface.get();
      f = f.NODE;
      for (var g = 0; g < a.length; g++) {
        var h = a[g];
        if (!h) continue;
        var i = h.getLinkedRecord(f),
          k = i && i.getDataID();
        if (k != null) {
          if (e.has(k)) continue;
          e.add(k);
        }
        k = i == null ? void 0 : i.getType();
        var l = j(i);
        if (i && k === "NotifPageCachedNotificationRow") {
          if (typeof l === "string") {
            k = c[l];
            k && (k.copyFieldsFrom(i), h.setLinkedRecord(k, f), b.push(h));
          }
        } else b.push(h);
      }
    }
    g.update = a;
    g.getConnection = b;
    g.buildConnectionEdge = l;
  },
  98
);
__d(
  "RelayFBHandlerProvider",
  [
    "BizKitNotificationsThinClientConnectionHandler",
    "UFI2CommentsConnectionHandler",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      switch (a) {
        case "connection":
          return d("relay-runtime").ConnectionHandler;
        case "ufi2_comments":
          return d("UFI2CommentsConnectionHandler");
        case "bizkit_notifications_thin_client":
          return d("BizKitNotificationsThinClientConnectionHandler");
        case "deleteRecord":
          return d("relay-runtime").MutationHandlers.DeleteRecordHandler;
        case "deleteEdge":
          return d("relay-runtime").MutationHandlers.DeleteEdgeHandler;
        case "appendEdge":
          return d("relay-runtime").MutationHandlers.AppendEdgeHandler;
        case "prependEdge":
          return d("relay-runtime").MutationHandlers.PrependEdgeHandler;
        case "appendNode":
          return d("relay-runtime").MutationHandlers.AppendNodeHandler;
        case "prependNode":
          return d("relay-runtime").MutationHandlers.PrependNodeHandler;
      }
      throw new Error(
        "RelayFBHandlerProvider: No handler defined for `" + a + "`."
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "resolveImmediate",
  ["Promise"],
  function (a, b, c, d, e, f) {
    var g = b("Promise").resolve();
    function a(a) {
      g.then(a)["catch"](h);
    }
    function h(a) {
      setTimeout(function () {
        throw a;
      }, 0);
    }
    f["default"] = a;
  },
  66
);
__d(
  "createRelayFBLocalEnvironment",
  [
    "RelayFBHandlerProvider",
    "RelayFBOperationLoader",
    "RelayRequiredFieldLogger",
    "RelayRuntime",
    "getRelayFBMissingFieldHandlers",
    "relayFBGetDataID",
    "resolveImmediate",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").Environment,
      h = b("RelayRuntime").RecordSource,
      i = b("RelayRuntime").Store,
      j = {
        execute: function (a) {
          throw new Error(
            "RelayFBLocalEnvironment: Network requests are not allowed in the local environment, got: " +
              a.name
          );
        },
      };
    function a(a) {
      var c = a.handlerProvider,
        d = a.missingFieldHandlers,
        e = a.scheduler,
        f = a.store,
        k = a.configName,
        l = a.log,
        m = a.operationTracker;
      a = a.getDataID;
      c = new g({
        configName: (k = k) != null ? k : "RelayFBLocalEnvironment",
        handlerProvider: (k = c) != null ? k : b("RelayFBHandlerProvider"),
        missingFieldHandlers:
          (c = d) != null ? c : b("getRelayFBMissingFieldHandlers")(),
        operationLoader: b("RelayFBOperationLoader"),
        scheduler: e,
        store:
          (k = f) != null
            ? k
            : new i(new h(), {
                getDataID: b("relayFBGetDataID"),
                gcReleaseBufferSize: 10,
                gcScheduler: b("resolveImmediate"),
                operationLoader: b("RelayFBOperationLoader"),
              }),
        network: j,
        operationTracker: m,
        log: l,
        getDataID: (d = a) != null ? d : b("relayFBGetDataID"),
        options: { isLocal: !0 },
        requiredFieldLogger: b("RelayRequiredFieldLogger").create(),
      });
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  "cometCreateLocalEnvironment",
  [
    "CometMissingFieldHandlers",
    "cometHandlerProvider",
    "createCometStore",
    "createRelayFBLocalEnvironment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("createRelayFBLocalEnvironment")({
        configName: "CometRelayLocalEnvironment",
        handlerProvider: c("cometHandlerProvider"),
        missingFieldHandlers: c("CometMissingFieldHandlers"),
        scheduler: null,
        store: c("createCometStore")(),
      });
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "configureRelayFlight",
  ["RelayFlight.hybrid", "RelayFlightClientImpl.client"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      d("RelayFlight.hybrid").isServer_INTERNAL_DO_NOT_USE() ||
        d("RelayFlight.hybrid").initialize_INTERNAL_DO_NOT_USE(
          c("RelayFlightClientImpl.client")
        );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRelayEnvironmentFactory",
  [
    "CometRelayMultiActorEnvironment",
    "RelayAPIConfig",
    "cometCreateLocalEnvironment",
    "cometHandlerProvider",
    "configureRelayFlight",
    "configureRelayForWWW",
    "createCometRelayEnvironmentConfig",
    "relay-runtime/multi-actor-environment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("configureRelayForWWW")();
    c("configureRelayFlight")();
    function a(a, b) {
      return d("CometRelayMultiActorEnvironment").forActor(
        d("relay-runtime/multi-actor-environment").getActorIdentifier(a),
        b
      );
    }
    e = a(c("RelayAPIConfig").actorID);
    function b(a) {
      return d("CometRelayMultiActorEnvironment").commitMultiActorUpdate(a);
    }
    g.createLocalEnvironment = c("cometCreateLocalEnvironment");
    g.configEnvironment = d(
      "createCometRelayEnvironmentConfig"
    ).createCometRelayEnvironmentConfig;
    g.cometHandlerProvider = c("cometHandlerProvider");
    g.commitLocalUpdateForEachEnvironment = b;
    g.defaultEnvironment = e;
    g.getForActorID = a;
  },
  98
);
__d(
  "DocumentScrollViewPageOffsetsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "CometRouterDispatcherContextFactory.react",
  [
    "CometRouterDispatcherContext",
    "DocumentScrollViewPageOffsetsContext",
    "filterObject",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.actorID,
        d = a.children,
        e = a.from,
        f = a.tracePolicy,
        g = i(c("CometRouterDispatcherContext")),
        k = i(c("DocumentScrollViewPageOffsetsContext"));
      g = j(
        function () {
          var a,
            d = { actorID: b, from: e, pageOffsets: k, tracePolicy: f };
          d = c("filterObject")(d, function (a) {
            return a !== void 0;
          });
          return (a = g) == null ? void 0 : a.withContext(d);
        },
        [b, g, e, k, f]
      );
      return g == null
        ? d
        : h.jsx(c("CometRouterDispatcherContext").Provider, {
            value: g,
            children: d,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseModal.react",
  ["cr:1824473", "cr:994756", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = b("cr:1824473") != null ? b("cr:1824473") : b("cr:994756");
    g["default"] = a;
  },
  98
);
__d(
  "HeroTracingCoreConfig",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      enableCascadingRenderDetector: c("gkx")("443"),
      enableReactProfiling: c("gkx")("1407308"),
      logNestedReactUpdates: c("gkx")("678680") && c("gkx")("1902022"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useCometTailLoadPageletTracker",
  [
    "IntersectionObserver",
    "cr:1703077",
    "intersectionObserverEntryIsIntersecting",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef;
    function a(a, d, e) {
      var f = j(null),
        g = j(!1),
        k = j(null);
      i(
        function () {
          return function () {
            k.current && k.current(), (k.current = null);
          };
        },
        [a, d]
      );
      return h(
        function (h) {
          if (
            b("cr:1703077") &&
            e === !0 &&
            a != null &&
            d != null &&
            h &&
            f.current !== h
          ) {
            f.current = h;
            k.current && (k.current(), (k.current = null));
            var i = function (e) {
                Array.prototype.forEach.call(e, function (e) {
                  c("intersectionObserverEntryIsIntersecting")(e) &&
                    !g.current &&
                    ((g.current = !0),
                    b("cr:1703077") &&
                      b("cr:1703077").logPageletConsumed(a, d, e.time));
                });
              },
              j = new (c("IntersectionObserver"))(i);
            j.observe(h);
            k.current = function () {
              j.disconnect();
            };
          }
        },
        [a, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "HeroTracingCoreDependencies",
  [
    "cr:1791018",
    "cr:1791501",
    "cr:1808490",
    "cr:683059",
    "useCometTailLoadPageletTracker",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      useTailLoadPageletTracker: c("useCometTailLoadPageletTracker"),
      InteractionVC: b("cr:1791018"),
      UserTimingUtils: b("cr:1808490"),
      VCTracker: b("cr:1791501"),
      VisualCompletion: b("cr:683059"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "RelayProfilerContext",
  ["react-relay/relay-hooks/ProfilerContext"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("react-relay/relay-hooks/ProfilerContext");
  },
  98
);
__d(
  "VisualCompletionUtil",
  [
    "Visibility",
    "cancelAnimationFrame",
    "clearTimeout",
    "requestAnimationFrame",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (c("Visibility").isHidden()) {
        var b = c("setTimeout")(a, 0);
        return function () {
          c("clearTimeout")(b);
        };
      } else {
        var d = c("requestAnimationFrame")(a);
        return function () {
          c("cancelAnimationFrame")(d);
        };
      }
    }
    function h(a) {
      return (a.right - a.left) * (a.bottom - a.top);
    }
    function i(a, b) {
      return {
        bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
        left: Math.min(Math.max(a.left, b.left), b.right),
        right: Math.max(Math.min(a.right, b.right), b.left),
        top: Math.min(Math.max(a.top, b.top), b.bottom),
      };
    }
    function j() {
      return { height: window.innerHeight, width: window.innerWidth };
    }
    function b(a) {
      if (typeof a.getBoundingClientRect !== "function") return !1;
      var b = j();
      a = a.getBoundingClientRect();
      var c = a.bottom,
        d = a.left,
        e = a.right;
      a = a.top;
      c = h(
        i(
          { bottom: c, left: d, right: e, top: a },
          { bottom: b.height, left: 0, right: b.width, top: -window.scrollY }
        )
      );
      return c > 0;
    }
    function d(a, b) {
      var c = 0;
      a = a;
      while (a && a.offsetParent && typeof a.offsetTop === "number")
        (c += a.offsetTop), (a = a.offsetParent);
      if (
        a &&
        a.offsetParent == null &&
        typeof a.getBoundingClientRect === "function"
      ) {
        var d = a.getBoundingClientRect();
        d = d.top;
        d >= 0 ? (c += d) : a === document.body && (c -= b);
      }
      return c;
    }
    function e(a) {
      return a.split("#")[0];
    }
    g.foregroundRequestAnimationFrame = a;
    g.getPixels = h;
    g.getRectIntersection = i;
    g.getViewportSize = j;
    g.isInAboveTheFold = b;
    g.offsetTop = d;
    g.trimHash = e;
  },
  98
);
__d(
  "objectEntries",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return Object.entries(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "hero-tracing",
  [
    "ExecutionEnvironment",
    "HeroTracingCoreConfig",
    "HeroTracingCoreDependencies",
    "HiddenSubtreePassiveContext",
    "LegacyHidden",
    "Promise",
    "PromiseAnnotate",
    "RelayProfilerContext",
    "VisualCompletionUtil",
    "clearImmediate",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "mergeRefs",
    "objectEntries",
    "objectValues",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "performanceNow",
    "react",
    "setImmediateAcrossTransitions",
    "setTimeoutAcrossTransitions",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useStable",
    "uuid",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i,
      j = g || b("react"),
      k = b("HeroTracingCoreDependencies").UserTimingUtils,
      l = b("HeroTracingCoreDependencies").VCTracker,
      m = b("HeroTracingCoreDependencies").VisualCompletion,
      n = {};
    function o(a, c) {
      a = a !== null && a !== void 0 ? a : b("uuid")();
      q(a, "Interaction Start", c);
      c = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a);
      if (c != null && l) {
        b(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addMarkerPoint(
          a,
          "HeroTrace_start",
          "AppTiming"
        );
        (c = c.vcTracker) === null || c === void 0
          ? void 0
          : c.lock(l.VisualCompletionConstants.HERO_TRACING_HOLD);
      }
      b(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.addInteraction(a);
      return a;
    }
    function p(a, c) {
      b(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.removeInteraction(a);
      var d = b(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.get(a);
      if (d != null && l) {
        b(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addMarkerPoint(
          a,
          "HeroTrace_end",
          "AppTiming"
        );
        c === "ABORT" &&
          (b(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addMetadata(a, "aborted", 1),
          b(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addMetadata(
            a,
            "cancelType",
            "aborted"
          ));
        (c = d.vcTracker) === null || c === void 0
          ? void 0
          : c.unlock(l.VisualCompletionConstants.HERO_TRACING_HOLD);
      }
      m &&
        l &&
        m.resumeTrigger(l.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
      b("interaction-tracing-metrics").InteractionTracingMetricsCore.complete(
        a
      );
    }
    function q(a, c, d) {
      a = c + a;
      n[a] =
        d !== null && d !== void 0 ? d : (h || (h = b("performanceNow")))();
      k != null && k.measureStart(c);
    }
    function r(a, c, d, e, f) {
      q(a, c, d);
      e != null && f != null
        ? (d = (e.length > 0 ? e[e.length - 1] : "") + ":" + f)
        : (d = c + "_" + a);
      b(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.addPlaceholder(a, c, d);
    }
    function s(a, c, d, e, f, g, h) {
      var i = f + a;
      i = n[i];
      i != null && u(a, c, d, e, i, h, g);
      b(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.removePlaceholder(a, f);
    }
    function t(a, c, d, e, f, g, h) {
      s(a, c, d, e, f, g, h),
        b(
          "hero-tracing-placeholder"
        ).HeroPendingPlaceholderTracker.removePlaceholder(a, f);
    }
    function u(a, c, d, e, f, g, i) {
      g === void 0 && (g = (h || (h = b("performanceNow")))()),
        b(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addSubspan(
          a,
          e,
          "HeroTracing",
          f,
          g !== null && g !== void 0 ? g : (h || (h = b("performanceNow")))(),
          babelHelpers["extends"]({}, i, {
            pagelet: c[c.length - 1],
            pageletStack: c,
            spanType: d,
          })
        ),
        k != null &&
          k.measureModern(
            e + ("[" + a.slice(0, 3) + "]"),
            { end: g, start: f },
            d
          );
    }
    var v = Object.freeze({
        __proto__: null,
        genHeroInteractionUUIDAndMarkStart: o,
        endHeroInteraction: p,
        markStart: q,
        markStartPlaceholder: r,
        markEnd: s,
        markEndPlaceholder: t,
        measure: u,
      }),
      w = b("HeroTracingCoreConfig").enableReactProfiling,
      x = b("HeroTracingCoreConfig").logNestedReactUpdates,
      y = b("HeroTracingCoreDependencies").UserTimingUtils,
      z = function (a) {
        a = a.children;
        return a;
      };
    z.displayName = "HeroReactProfilerNoOp";
    var A = 0;
    function B() {
      var a = A++;
      y === null || y === void 0
        ? void 0
        : y.measureModern(
            "Nested update " + a,
            { duration: 100, start: (h || (h = b("performanceNow")))() },
            "ReactNestedUpdate"
          );
      console.trace("nested update " + a);
    }
    function a(a) {
      var c = a.children,
        d = a.id,
        e = a.isPagelet,
        f = e === void 0 ? !1 : e;
      e = a.logDurationToQPL;
      var g = e === void 0 ? !1 : e,
        h = j.useContext(
          b("hero-tracing-placeholder").HeroInteractionContext.Context
        ),
        i = j.useContext(
          b("hero-tracing-placeholder").HeroInteractionIDContext
        );
      a = j.useCallback(
        function (a, c, d, e, j, k) {
          if (i == null) return;
          h.logReactRender(i, a, c, j, k, d, e, f, h.pageletStack);
          b(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addReactRender(i, a, j, k, d, e, c);
          g &&
            b("interaction-tracing-metrics")
              .InteractionTracingMetricsCore.currentInteractionLogger()
              .forEach(function (b) {
                var c = a.replace(/_[0-9]+$/, "_{N}");
                c = "ReactRenderDuration_" + c;
                typeof b.metadata[c] === "number"
                  ? (b.metadata[c] += d)
                  : (b.metadata[c] = d);
              });
        },
        [h, i, f, g]
      );
      e = j.useCallback(
        function (a, b, c, d) {
          i != null && h.logReactCommit(i, a, b, c, d, f, h.pageletStack);
        },
        [h, i, f]
      );
      var k = j.useCallback(
        function (a, b, c, d) {
          i != null && h.logReactPostCommit(i, a, b, c, d, f, h.pageletStack);
        },
        [h, i, f]
      );
      return j.createElement(
        j.Profiler,
        {
          id: d,
          onCommit: e,
          onNestedUpdateScheduled: x ? B : null,
          onPostCommit: k,
          onRender: a,
        },
        c
      );
    }
    a.displayName = "HeroReactProfiler";
    var C = j.Profiler != null && w ? a : z,
      D = b("HeroTracingCoreDependencies").VisualCompletion;
    function E(a) {
      var c = j.useRef(null);
      return j.useCallback(
        function (d) {
          if (c.current !== d) {
            c.current = d;
            var e;
            if (d) {
              if (a.interactionUUID != null) {
                var f = b(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.get(a.interactionUUID);
                f && f.vcTracker && (e = f.vcTracker);
              } else
                D &&
                  a.excludeFromMainVC === !0 &&
                  (e = D.getCurrentNavigationTrace());
              if (e != null) {
                f = (i || (i = b("performanceAbsoluteNow")))();
                a.isMutationRoot === !0 &&
                  a.interactionUUID != null &&
                  e.addMutationRoot(d);
                e.addMountPoint(d, f, a.pageletName);
                e.trackPagelet(
                  d,
                  a.pageletName,
                  f,
                  a.vcCallback,
                  a.pageletType,
                  a.excludeFromMainVC
                );
              }
            }
          }
        },
        [a]
      );
    }
    var F = b("HeroTracingCoreDependencies").useTailLoadPageletTracker;
    function c(a, c) {
      var d = a.children,
        e = a.excludeFromMainVC,
        f = a.isMutationRoot,
        g = a.name,
        k = a.pageletName,
        l = a.pageletType,
        m = a.position;
      a = a.trackTailLoad;
      var n = j.useContext(
          b("hero-tracing-placeholder").HeroInteractionContext.Context
        ),
        o = j.useContext(
          b("hero-tracing-placeholder").HeroInteractionIDContext
        ),
        p = j.useMemo(
          function () {
            return babelHelpers["extends"]({}, n, {
              pageletStack: [].concat(n.pageletStack, [g]),
            });
          },
          [n, g]
        ),
        q = j.useMemo(
          function () {
            return (h || (h = b("performanceNow")))();
          },
          [o]
        ),
        r = j.useCallback(
          function () {
            if (o != null) {
              var a = b(
                "interaction-tracing-metrics"
              ).InteractionTracingMetricsCore.get(o);
              if (a && a.vcTracker) {
                a = a.vcTracker;
                a.addFirstMarkerPoint(
                  "Queue_" + g,
                  q + b("performanceNavigationStart")()
                );
                a.addFirstMarkerPoint(
                  "Render_" + g,
                  (i || (i = b("performanceAbsoluteNow")))()
                );
              }
            }
            return null;
          },
          [o, g, q]
        ),
        s = j.useCallback(
          function (a, b) {
            o != null && p.logPageletVC(o, q, a, b, p.pageletStack);
          },
          [o, p, q]
        ),
        t = E({
          excludeFromMainVC: e,
          interactionUUID: o,
          isMutationRoot: f,
          pageletName: g,
          pageletType: l,
          vcCallback: s,
        }),
        u = F(k, m, a);
      e = j.useMemo(
        function () {
          return b("mergeRefs")(c, t, u);
        },
        [c, t, u]
      );
      return j.createElement(
        b("hero-tracing-placeholder").HeroInteractionContext.Context.Provider,
        { value: p },
        j.createElement(C, { id: g, isPagelet: !0 }, d(e, r))
      );
    }
    c.displayName = "HeroPagelet";
    var G = j.forwardRef(c),
      H = b("HeroTracingCoreDependencies").UserTimingUtils,
      I = (function () {
        function a() {
          this.$1 = new Map();
        }
        var b = a.prototype;
        b.logRender = function (a, b, c, d) {
          a = this.$2(a);
          a.set(b, { isNested: c === "nested-update", renderDuration: d });
        };
        b.logCommit = function (a, b, c, d) {
          a = this.$2(a);
          var e = a.get(b);
          if (e == null || c !== "nested-update") return;
          a.set(
            b,
            babelHelpers["extends"]({}, e, { isNested: !0, layoutDuration: d })
          );
        };
        b.logPostCommit = function (a, b, c, d) {
          a = this.$2(a);
          var e = a.get(b);
          if (e == null || c !== "nested-update") return;
          a.set(
            b,
            babelHelpers["extends"]({}, e, { effectDuration: d, isNested: !0 })
          );
        };
        b.getPageletReport = function (a, b) {
          var c = this.$2(a);
          if (c.size === 0) return;
          var d = {
              cascadingRenderCount: 0,
              cascadingRenderTotalDuration: 0,
              maxChainedCascadingRenderCount: 0,
            },
            e = Array.from(c.keys()).reverse(),
            f = !1,
            g = 0;
          for (
            var e = e,
              h = Array.isArray(e),
              i = 0,
              e = h
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var j;
            if (h) {
              if (i >= e.length) break;
              j = e[i++];
            } else {
              i = e.next();
              if (i.done) break;
              j = i.value;
            }
            j = j;
            var k;
            if (j > b) continue;
            k = (k = c.get(j)) !== null && k !== void 0 ? k : {};
            var l = k.effectDuration;
            l = l === void 0 ? 0 : l;
            var m = k.isNested;
            m = m === void 0 ? !1 : m;
            var n = k.layoutDuration;
            n = n === void 0 ? 0 : n;
            k = k.renderDuration;
            k = k === void 0 ? 0 : k;
            m &&
              ((d.cascadingRenderCount += 1),
              (d.cascadingRenderTotalDuration += l + k + n));
            H != null &&
              m &&
              H.measureModern(
                "\u26a0\ufe0f " + a + " [cascading commit block]",
                { end: j + k + n + l, start: j },
                "ReactCascadingRender"
              );
            m && f
              ? g++
              : ((d.maxChainedCascadingRenderCount = Math.max(
                  g,
                  d.maxChainedCascadingRenderCount
                )),
                (g = 0));
            f = m;
          }
          return d;
        };
        b.cleanup = function (a) {
          this.$1["delete"](a);
        };
        b.$2 = function (a) {
          if (this.$1.has(a)) return this.$1.get(a);
          else {
            var b = new Map();
            this.$1.set(a, b);
            return b;
          }
        };
        return a;
      })();
    function d() {
      var a = b("useStable")(function () {
        return new I();
      });
      return a;
    }
    w = b("HeroTracingCoreConfig").enableCascadingRenderDetector;
    var J = b("HeroTracingCoreDependencies").InteractionVC,
      K = b("HeroTracingCoreDependencies").UserTimingUtils,
      L = w
        ? d
        : function () {
            return null;
          },
      M = "Interaction Start",
      N = "root",
      O = new Set();
    function P(a, b) {
      q(a, b);
    }
    function Q(a, b, c, d) {
      r(a, b, void 0, c, d);
    }
    function R(a, b, c, d) {
      s(a, c, "SuspensePromise", "Promise Wait: " + d, b);
    }
    function S(a, b, c, d) {
      t(a, c, "PlaceholderWait", "Placeholder Wait: " + d, b);
    }
    function T(a, c, d) {
      b(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addHeroRelay(c, {
        pageletStack: d,
        queries: a,
      });
      for (
        var a = a,
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= a.length) break;
          g = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        u(c, d, "Relay", g.name, g.start, g.end);
        for (var h = 0; h < g.flushes.length; h++) {
          var i = g.flushes[h];
          u(c, d, "RelayFlush", g.name + "(" + i.label + ")", g.start, i.time, {
            flush: i.label,
            queryName: g.name,
          });
        }
      }
    }
    function U(a, c, d) {
      b(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addHeroBootload(c, {
        moduleIDs: Array.from(a),
        pageletStack: d,
      });
    }
    function V(a) {
      if (!a) return "No placeholder";
      var c = a.name != null ? "@" + a.name : "";
      a =
        b(
          "hero-tracing-placeholder"
        ).HeroPlaceholderUtils.createThenableDescription(a.thenables) ||
        "No Promises";
      return a + c;
    }
    function W(a, c) {
      if (a == null) return null;
      var d = {
        commitCount: 0,
        lastBaseDuration: 0,
        maxBaseDuration: 0,
        totalActualDuration: 0,
        totalCommitDuration: 0,
        totalPostCommitDuration: 0,
        zeroDurationCommitCount: 0,
        zeroDurationPostCommitCount: 0,
      };
      for (
        var a = b("objectEntries")(a),
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= a.length) break;
          g = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = g[0];
        g = g[1];
        if (h > c) break;
        h = g.actualDuration;
        h = h === void 0 ? 0 : h;
        var i = g.baseDuration;
        i = i === void 0 ? 0 : i;
        var j = g.commitDuration;
        j = j === void 0 ? 0 : j;
        var k = g.postCommitDuration;
        k = k === void 0 ? 0 : k;
        d.commitCount++;
        g.commitDuration === 0 && d.zeroDurationCommitCount++;
        g.postCommitDuration === 0 && d.zeroDurationPostCommitCount++;
        d.maxBaseDuration = Math.max(d.maxBaseDuration, i);
        d.lastBaseDuration = i;
        d.totalActualDuration += h;
        d.totalCommitDuration += j;
        d.totalPostCommitDuration += k;
      }
      return d;
    }
    function e(a, c) {
      var d = a.children,
        e = a.excludeFromMainVC,
        f = a.hidden,
        g = a.htmlAttributes,
        h = a.interactionDesc,
        i = a.interactionUUID,
        k = a.pageletName,
        l = a.renderTrackedDOMElement,
        m = j.useContext(
          b("hero-tracing-placeholder").HeroInteractionContext.Context
        ),
        n = j.useContext(
          b("hero-tracing-placeholder").HeroInteractionIDContext
        ),
        q = j.useRef(null),
        r = j.useRef(null),
        t = j.useContext(b("HiddenSubtreePassiveContext")),
        v = h !== null && h !== void 0 ? h : "No Description",
        w = j.useRef({}),
        x = j.useRef({}),
        y = j.useRef({}),
        z = j.useRef(null),
        A = j.useRef(n),
        B = b("useStable")(
          b("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID
        ),
        C = j.useMemo(
          function () {
            return [].concat(m.pageletStack, [
              k !== null && k !== void 0 ? k : N,
            ]);
          },
          [m.pageletStack, k]
        ),
        D = j.useRef([]),
        E = j.useRef(new Set()),
        F = L(),
        H = j.useCallback(function () {
          return b("objectValues")(w.current).some(function (a) {
            return a.shouldHold;
          });
        }, []),
        I = j.useCallback(
          function (a, c, d) {
            r.current !== a &&
              q.current == null &&
              !t.getCurrentState().hidden &&
              !H() &&
              (q.current = b(
                "VisualCompletionUtil"
              ).foregroundRequestAnimationFrame(function () {
                (q.current = null),
                  !t.getCurrentState().hidden &&
                    r.current !== a &&
                    !H() &&
                    ((r.current = a),
                    s(a, C, "Interaction", "Interaction Done: " + c, M),
                    d !== a && p(a, "SUCCESS"),
                    m.unhold(a, a + "_" + B),
                    T(D.current, a, C),
                    U(E.current, a, C),
                    (D.current = []),
                    (E.current = new Set()));
              }));
          },
          [t, m, B, C, H]
        ),
        X = j.useCallback(
          function () {
            var a = z.current;
            a != null && I(a.interactionUUID, a.interactionDesc, n);
          },
          [n, I]
        ),
        Y = j.useCallback(
          function (a, c, d) {
            var e = z.current;
            e != null &&
              r.current !== e.interactionUUID &&
              (s(
                e.interactionUUID,
                C,
                "Interaction",
                "Interaction Aborted (" + c + "): " + e.interactionDesc,
                M
              ),
              m.unhold(e.interactionUUID, e.interactionUUID + "_" + B),
              d !== e.interactionUUID
                ? p(e.interactionUUID, "ABORT")
                : d != null &&
                  b(
                    "interaction-tracing-metrics"
                  ).InteractionTracingMetricsCore.addMetadata(
                    d,
                    "childInteractionAborted",
                    1
                  ),
              a !== null &&
                e.interactionUUID === a.interactionUUID &&
                (o(a.interactionUUID),
                m.hold(
                  a.interactionUUID,
                  C,
                  "Sub Interaction:" + a.interactionDesc,
                  a.interactionUUID + "_" + B
                )));
            e != null &&
              (T(D.current, e.interactionUUID, C),
              U(E.current, e.interactionUUID, C));
            D.current = [];
            E.current = new Set();
            r.current = null;
            q.current && q.current();
            q.current = null;
            z.current = a;
            A.current = d;
          },
          [m, B, C]
        );
      a = j.useRef(null);
      j.useEffect(
        function () {
          return function () {
            var a = function () {
              return Y(null, "Unmount");
            };
            a();
          };
        },
        [Y]
      );
      b("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var a = null;
          i != null && (a = { interactionDesc: v, interactionUUID: i });
          Y(a, "New Interaction", n);
          i != null && I(i, v, n);
        },
        [v, i, n, Y, I]
      );
      b("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          if (i != null) {
            var a = t.getCurrentState().hidden,
              b = t.subscribeToChanges(function (b) {
                b = b.hidden;
                a !== b &&
                  ((a = b),
                  b
                    ? Y({ interactionDesc: v, interactionUUID: i }, "Hidden")
                    : I(i, v, n));
              });
            i != null && I(i, v, n);
            return function () {
              return b.remove();
            };
          }
        },
        [t, i, v, Y, I, n]
      );
      h = j.useMemo(
        function () {
          var a = {
            consumeBootload: function (a) {
              E.current.add(a);
            },
            hold: function (c, d, e, f, g) {
              e === void 0 && (e = "Hold");
              f =
                f !== null && f !== void 0
                  ? f
                  : b(
                      "hero-tracing-placeholder"
                    ).HeroPlaceholderUtils.getSimpleUUID();
              var h = new (b("Promise"))(function () {});
              b("PromiseAnnotate").setDisplayName(h, e);
              a.suspenseCallback(c, f, d, new Set([h]), g);
              a.registerPlaceholder(c, f, d);
              return f;
            },
            logHeroRender: function (a, b, c) {
              r.current !== a &&
                s(
                  a,
                  [].concat(c),
                  "HeroRendering",
                  "Hero Rendering: " + b,
                  M,
                  void 0
                );
            },
            logMetadata: function (a, b, c) {
              var d;
              c = c[c.length - 1];
              d =
                (d = x.current[c]) !== null && d !== void 0
                  ? d
                  : Object.create(null);
              b != null ? (d[a] = b) : delete d[a];
              x.current[c] = d;
            },
            logPageletVC: function (a, b, c, d, e) {
              var f = e[e.length - 1],
                g = x.current[f];
              g = g != null ? babelHelpers["extends"]({}, g) : void 0;
              g && J && J.addMountPointMetaData(a, f, g);
              d != null &&
                u(
                  a,
                  [].concat(e),
                  "VCWithoutImage",
                  "VCWithoutImage: " + e[e.length - 1],
                  Math.min(b, d),
                  d,
                  g
                );
              if (c != null) {
                g = Object.assign(
                  (d = g) !== null && d !== void 0 ? d : {},
                  W(y.current[f], c),
                  F === null || F === void 0 ? void 0 : F.getPageletReport(f, c)
                );
                y.current[f] = {};
                F === null || F === void 0 ? void 0 : F.cleanup(f);
                u(
                  a,
                  [].concat(e),
                  "VC",
                  "VC: " + e[e.length - 1],
                  Math.min(b, c),
                  c,
                  g
                );
              }
            },
            logReactCommit: function (a, b, c, d, e, f, g) {
              K && K.measureReactCommit(b, e, d);
              if (r.current !== a && f) {
                b = g[g.length - 1];
                F === null || F === void 0 ? void 0 : F.logCommit(b, e, c, d);
                f =
                  (a = y.current[b]) !== null && a !== void 0
                    ? a
                    : Object.create(null);
                c =
                  (g = f[e]) !== null && g !== void 0 ? g : Object.create(null);
                c.commitDuration = d;
                f[e] = c;
                y.current[b] = f;
              }
            },
            logReactPostCommit: function (a, b, c, d, e, f, g) {
              K && K.measureReactPostCommit(b, d);
              if (r.current !== a && f) {
                b = g[g.length - 1];
                F === null || F === void 0
                  ? void 0
                  : F.logPostCommit(b, e, c, d);
                f =
                  (a = y.current[b]) !== null && a !== void 0
                    ? a
                    : Object.create(null);
                c =
                  (g = f[e]) !== null && g !== void 0 ? g : Object.create(null);
                c.postCommitDuration = d;
                f[e] = c;
                y.current[b] = f;
              }
            },
            logReactRender: function (a, b, c, d, e, f, g, h, i) {
              if (r.current !== a) {
                u(a, [].concat(i), "ReactRender", "ReactRender: " + b, d, e, {
                  actualDuration: f,
                  baseDuration: g,
                });
                if (h) {
                  a = i[i.length - 1];
                  F === null || F === void 0 ? void 0 : F.logRender(a, e, c, f);
                  d =
                    (b = y.current[a]) !== null && b !== void 0
                      ? b
                      : Object.create(null);
                  i =
                    (h = d[e]) !== null && h !== void 0
                      ? h
                      : Object.create(null);
                  i.actualDuration = f;
                  i.baseDuration = g;
                  d[e] = i;
                  y.current[a] = d;
                }
              }
            },
            pageletStack: m.pageletStack,
            registerPlaceholder: function (a, b, c) {
              var d = w.current[b];
              q.current && q.current();
              q.current = null;
              if (d != null) {
                d.shouldHold = !0;
                return;
              }
              d = new Set();
              w.current[b] = { pageletStack: c, shouldHold: !0, thenables: d };
              Q(a, b, c, V(w.current[b]));
            },
            removePlaceholder: function (a, b) {
              var c = w.current[b] != null;
              if (!c) return;
              c = w.current[b];
              delete w.current[b];
              X();
              S(a, b, c.pageletStack, V(c));
            },
            suspenseCallback: function (a, c, d, e, f) {
              var g = w.current[c];
              g == null &&
                Q(a, c, d, f !== null && f !== void 0 ? f : "Suspense");
              w.current[c] = {
                name: f,
                pageletStack: d,
                shouldHold:
                  (f = g === null || g === void 0 ? void 0 : g.shouldHold) !==
                    null && f !== void 0
                    ? f
                    : !1,
                thenables: e,
              };
              e.forEach(function (c) {
                if (!O.has(c)) {
                  var e;
                  O.add(c);
                  b("ExecutionEnvironment").canUseDOM &&
                    b("setTimeoutAcrossTransitions")(function () {
                      O["delete"](c);
                    }, 6e4);
                  var f =
                      (e = b("PromiseAnnotate").getDisplayName(c)) !== null &&
                      e !== void 0
                        ? e
                        : "Promise",
                    g = b(
                      "hero-tracing-placeholder"
                    ).HeroPlaceholderUtils.getSimpleUUID();
                  P(a, g);
                  c.then(function () {
                    R(a, g, d, f);
                  });
                }
              });
              f = V(g);
              e = V(w.current[c]);
              g != null && e !== f && (S(a, c, d, f), Q(a, c, d, e));
            },
            unhold: function (b, c) {
              a.removePlaceholder(b, c);
            },
          };
          return a;
        },
        [F, m.pageletStack, X]
      );
      a = j.useMemo(function () {
        return {
          consumeBootload: function (a) {
            E.current.add(a);
          },
          retainQuery: function (a) {
            D.current.push(a);
          },
          wrapPrepareQueryResource: function (a) {
            return a();
          },
        };
      }, []);
      var Z = k !== null && k !== void 0 ? k : N;
      return j.createElement(
        b("hero-tracing-placeholder").HeroInteractionContext.Context.Provider,
        { value: h },
        j.createElement(
          b("hero-tracing-placeholder").HeroInteractionIDContext.Provider,
          { value: i },
          j.createElement(
            b("hero-tracing-placeholder")
              .HeroCurrentInteractionForLoggingContext.Provider,
            { value: z },
            j.createElement(
              b("RelayProfilerContext").Provider,
              { value: a },
              j.createElement(
                G,
                { excludeFromMainVC: e, isMutationRoot: !0, name: Z, ref: c },
                function (a, c) {
                  return l
                    ? j.createElement(
                        j.Fragment,
                        null,
                        l(a, d),
                        j.createElement(c, null)
                      )
                    : j.createElement(
                        b("LegacyHidden"),
                        {
                          htmlAttributes: babelHelpers["extends"]({}, g),
                          mode: f === !0 ? "hidden" : "visible",
                          ref: a,
                        },
                        j.createElement(c, null),
                        d
                      );
                }
              )
            )
          )
        )
      );
    }
    e.displayName = "HeroInteraction";
    a = j.forwardRef(e);
    f.HeroInteraction = a;
    f.HeroLogger = v;
    f.HeroPagelet = G;
    f.HeroReactProfiler = C;
    f.usePageletVCTracker = E;
  },
  null
);
__d(
  "CometHeroLogging",
  ["hero-tracing"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing").HeroLogger;
  },
  98
);
__d(
  "CometInteractionTracingModulePopoverShowQPLEvent",
  ["cr:7130"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7130");
  },
  98
);
__d(
  "CometInteractionTracingQPLConfigContext",
  ["CometInteractionTracingModulePopoverShowQPLEvent", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    d = d("react");
    var i = d.useContext,
      j = d.useMemo,
      k = h.createContext({
        dialogTraceQPLEvent: c(
          "CometInteractionTracingModulePopoverShowQPLEvent"
        ),
        popoverTraceQPLEvent: c(
          "CometInteractionTracingModulePopoverShowQPLEvent"
        ),
      });
    function a() {
      return i(k).dialogTraceQPLEvent;
    }
    function b() {
      return i(k).popoverTraceQPLEvent;
    }
    function e(a) {
      var b = a.children,
        c = a.dialogTraceQPLEvent,
        d = a.popoverTraceQPLEvent;
      return h.jsx(k.Provider, {
        value: j(
          function () {
            return { dialogTraceQPLEvent: c, popoverTraceQPLEvent: d };
          },
          [c, d]
        ),
        children: b,
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.useDialogTraceQPLEvent = a;
    g.usePopoverTraceQPLEvent = b;
    g.CometInteractionTracingQPLConfigContextProvider = e;
  },
  98
);
__d(
  "emptyObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {};
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "BaseToasterStateManager",
  [
    "CometMaxEnqueuedToastsSitevarConfig",
    "JSScheduler",
    "clearTimeout",
    "emptyObject",
    "once",
    "react",
    "removeFromArray",
    "setTimeout",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = (function () {
      function a() {
        (this.$1 = 0),
          (this.$2 = new Map()),
          (this.$3 = []),
          (this.$4 = []),
          (this.$5 = null);
      }
      var b = a.prototype;
      b.push = function (a, b) {
        var c = "toast-" + this.$1++;
        b = {
          duration: b,
          expired: !1,
          id: c,
          shown: !1,
          timer: null,
          value: a,
        };
        this.$6({ node: b, type: "PUSH" });
        return c;
      };
      b.shown = function (a) {
        this.$6({ id: a, type: "SHOWN" });
      };
      b["delete"] = function (a) {
        this.$6({ id: a, type: "DELETE" });
      };
      b.expire = function (a) {
        this.$6({ id: a, type: "EXPIRE" });
      };
      b.hidden = function (a) {
        this.$6({ id: a, type: "HIDDEN" });
      };
      b.stopTimer = function (a) {
        this.$6({ id: a, type: "STOP_TIMER" });
      };
      b.resetTimer = function (a) {
        this.$6({ id: a, type: "RESET_TIMER" });
      };
      b.getState = function () {
        return Object.fromEntries(this.$2);
      };
      b.getEmptyState = function () {
        return c("emptyObject");
      };
      b.addListener = function (a) {
        var b = this;
        this.$3.push(a);
        return {
          remove: c("once")(function () {
            c("removeFromArray")(b.$3, a);
          }),
        };
      };
      b.$7 = function (a) {
        (this.$5 == null || a.priority > this.$5.priority) && (this.$5 = a);
      };
      b.registerView = function (a, b) {
        var d = this;
        b === void 0 && (b = 1);
        var e = { handler: a, priority: b };
        this.$4.push(e);
        this.$7(e);
        this.$8();
        return {
          remove: c("once")(function () {
            c("removeFromArray")(d.$4, e),
              d.$5 === e &&
                ((d.$5 = null),
                d.$4.forEach(function (a) {
                  return d.$7(a);
                }));
          }),
        };
      };
      b.$6 = function (a) {
        var b = this.$2;
        switch (a.type) {
          case "PUSH":
            var d = a.node;
            this.$2 = new Map([].concat(Array.from(this.$2), [[d.id, d]]));
            if (c("CometMaxEnqueuedToastsSitevarConfig").max !== 0) {
              d = Array.from(this.$2.values()).filter(function (a) {
                return !a.shown && !a.expired;
              });
              if (d.length > c("CometMaxEnqueuedToastsSitevarConfig").max) {
                d = d[0];
                this["delete"](d.id);
              }
            }
            break;
          case "SHOWN":
            if (this.$2.has(a.id) && !this.$9(a.id).shown) {
              d = babelHelpers["extends"]({}, this.$9(a.id), { shown: !0 });
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$10(d)]])
              );
            }
            break;
          case "EXPIRE":
            if (this.$2.has(a.id)) {
              d = babelHelpers["extends"]({}, this.$9(a.id), { expired: !0 });
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$11(d)]])
              );
              this.$12(d);
            }
            break;
          case "HIDDEN":
            if (this.$2.has(a.id)) {
              d = this.$9(a.id);
              (d.shown || d.expired) &&
                ((this.$2 = new Map(this.$2)),
                this.$2["delete"](a.id),
                this.$11(d));
            }
            break;
          case "DELETE":
            if (this.$2.has(a.id)) {
              d = this.$9(a.id);
              this.$2 = new Map(this.$2);
              this.$2["delete"](a.id);
              this.$11(d);
            }
            break;
          case "STOP_TIMER":
            if (this.$2.has(a.id) && this.$13(this.$9(a.id))) {
              d = babelHelpers["extends"]({}, this.$9(a.id));
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$11(d)]])
              );
            }
            break;
          case "RESET_TIMER":
            if (this.$2.has(a.id) && !this.$13(this.$9(a.id))) {
              d = babelHelpers["extends"]({}, this.$9(a.id));
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$10(d)]])
              );
            }
            break;
          default:
            a.type;
        }
        b !== this.$2 && this.$8();
      };
      b.$8 = function () {
        var a = this;
        this.$3.forEach(function (a) {
          return d("JSScheduler").scheduleNormalPriCallback(function () {
            a();
          });
        });
        this.$4.forEach(function (b) {
          return d("JSScheduler").scheduleNormalPriCallback(function () {
            b.handler(b === a.$5 ? a.getState() : a.getEmptyState());
          });
        });
      };
      b.$10 = function (a) {
        var b = this;
        a.duration !== null &&
          a.timer == null &&
          (a.timer = c("setTimeout")(function () {
            b.expire(a.id);
          }, a.duration));
        return a;
      };
      b.$11 = function (a) {
        a.timer != null && (c("clearTimeout")(a.timer), (a.timer = null));
        return a;
      };
      b.$12 = function (a) {
        var b = this;
        this.$11(a);
        var d = a.id;
        c("setTimeout")(function () {
          b["delete"](d);
        }, 1e3);
      };
      b.$13 = function (a) {
        return a.timer != null;
      };
      b.$9 = function (a) {
        a = this.$2.get(a);
        if (a == null)
          throw c("unrecoverableViolation")(
            "Toast with given identifier was not found",
            "comet_ui"
          );
        return a;
      };
      a.getInstance = function () {
        a.$14 == null && (a.$14 = new a());
        return a.$14;
      };
      a.resetInstance_DO_NOT_USE = function () {
        a.$14 = null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "deferredLoadComponentBase",
  ["Promise", "PromiseAnnotate", "react"],
  function (a, b, c, d, e, f, g) {
    var h = c("react"),
      i = {},
      j = {},
      k = new Map();
    function l(a, b) {
      k.set(a, b);
    }
    function m(a) {
      return k.get(a);
    }
    function a(a, c) {
      var e = m(a);
      if (e) return e;
      var g,
        k = a.getModuleId();
      function n() {
        var d = j[k];
        d ||
          (d = j[k] =
            new (b("Promise"))(function (b) {
              a.loadImmediately(function (a) {
                delete j[k], (g = c(a)), b();
              });
            }));
        return d;
      }
      function o() {
        var d = i[k];
        d ||
          (d = i[k] =
            new (b("Promise"))(function (b) {
              a.onReady(function (a) {
                (g = c(a)), delete i[k], b();
              });
            }));
        return d;
      }
      function p(b, e) {
        var f = b.loadImmediately;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ["loadImmediately"]);
        if (!g) {
          var i = a.getModuleIfRequireable();
          i != null && (g = c(i));
          if (!g) {
            i = f === !0 ? n() : o();
            d("PromiseAnnotate").setDisplayName(i, p.displayName);
            throw i;
          }
        }
        return h.jsx(g, babelHelpers["extends"]({}, b, { ref: e }));
      }
      p.displayName = p.name + " [from " + f.id + "]";
      p.displayName = "deferredLoadComponent(" + a.getModuleId() + ")";
      e = h.forwardRef(p);
      l(a, e);
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "deferredLoadComponent",
  ["deferredLoadComponentBase"],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
      return a;
    };
    function a(a) {
      return c("deferredLoadComponentBase")(a, h);
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometPushToast",
  [
    "ix",
    "BaseToasterStateManager",
    "TetraIcon.react",
    "deferredLoadComponent",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("BaseToasterStateManager").getInstance(),
      k = c("deferredLoadComponent")(
        c("requireDeferred")("CometToast.react").__setRef("cometPushToast")
      );
    function l(a, b, c) {
      b === void 0 && (b = 2750);
      var d = (c = c) != null ? c : j,
        e = d.push(
          i.jsx(
            k,
            babelHelpers["extends"]({}, a, {
              loadImmediately: !0,
              onDismiss: function () {
                return d.expire(e);
              },
            })
          ),
          b
        );
      return e;
    }
    function a(a, b) {
      return l({ message: a }, b);
    }
    function b(a, b, e) {
      b === void 0 && (b = 2750);
      return l(
        babelHelpers["extends"]({}, a, {
          icon: i.jsx(c("TetraIcon.react"), {
            color: "warning",
            icon: d("fbicon")._(h("502062"), 20),
          }),
        }),
        b,
        e
      );
    }
    g.cometPushToast = l;
    g.cometPushSimpleToast = a;
    g.cometPushErrorToast = b;
  },
  98
);
__d(
  "CometInteractionTracingConfig",
  ["cr:1486287"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      defaultTracePolicy: "comet.app",
      getMetadata: function () {
        return { darkMode: Number(b("cr:1486287").getDarkModePreference()) };
      },
      navigationCancelsInteractions: !0,
    };
    g.tracingConfig = a;
  },
  98
);
__d(
  "PerfFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744178");
    c = b("FalcoLoggerInternal").create("perf", a);
    e.exports = c;
  },
  null
);
__d(
  "PerfXSharedFields",
  ["CurrentLocale", "Locale", "SiteData"],
  function (a, b, c, d, e, f, g) {
    var h = {
      addCommonValues: function (a) {
        var b = window.navigator;
        b &&
          b.hardwareConcurrency !== void 0 &&
          (a.num_cores = b.hardwareConcurrency);
        b && b.deviceMemory && (a.ram_gb = b.deviceMemory);
        b &&
          b.connection &&
          (typeof b.connection.downlink === "number" &&
            (a.downlink_megabits = b.connection.downlink),
          typeof b.connection.effectiveType === "string" &&
            (a.effective_connection_type = b.connection.effectiveType),
          typeof b.connection.rtt === "number" &&
            (a.rtt_ms = b.connection.rtt));
        a.client_push_phase = c("SiteData").push_phase;
        a.client_revision = c("SiteData").client_revision;
        c("SiteData").server_revision != null &&
          (a.server_revision = c("SiteData").server_revision);
        a.locale = c("CurrentLocale").get();
        a.isRTL = Number(c("Locale").isRTL());
        return a;
      },
      getCommonData: function () {
        var a = {};
        h.addCommonValues(a);
        return a;
      },
    };
    f.exports = h;
  },
  34
);
__d(
  "QPLEvent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.markerId;
    }
    function b(a) {
      return (a = (a = a.config) == null ? void 0 : a.r) != null ? a : 0;
    }
    function c(a) {
      return (a = (a = a.config) == null ? void 0 : a.m) != null ? a : 1;
    }
    f.getMarkerId = a;
    f.getSampleRate = b;
    f.getSamplingMethod = c;
  },
  66
);
__d(
  "QPLTimestamp",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      if (a === 0) return "0";
      a = a.toFixed(6).split(".", 2);
      var b = a[0];
      a = a[1];
      return b === "0" ? a.replace(/^0+/, "") : b + a;
    }
    function a(a, b) {
      b = b - a;
      return g(b);
    }
    f.timestampToSerializedNanoseconds = g;
    f.calculateDurationAsNanoseconds = a;
  },
  66
);
__d(
  "crc32",
  [],
  function (a, b, c, d, e, f) {
    function b(a) {
      var b = -1;
      for (var c = 0, d = a.length; c < d; c++)
        b = (b >>> 8) ^ g[(b ^ a.charCodeAt(c)) & 255];
      return ~b;
    }
    var g = [
      0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685,
      2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995,
      2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648,
      2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990,
      1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755,
      2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
      1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206,
      2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980,
      1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705,
      3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527,
      1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772,
      4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
      251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719,
      3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925,
      453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
      4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
      984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733,
      3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467,
      855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048,
      3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
      702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
      3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945,
      2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430,
      2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
      2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225,
      1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143,
      2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732,
      1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
      2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135,
      1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
      3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
      1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920,
      3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877,
      83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603,
      3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992,
      534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
      4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795,
      376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105,
      3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
      936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
      3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449,
      601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
      3272380065, 1510334235, 755167117,
    ];
    a.Int32Array !== void 0 && (g = new Int32Array(g));
    f["default"] = b;
  },
  66
);
__d(
  "QPLUtils",
  ["crc32"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return c("crc32")(a) >>> 0;
    }
    function a(a) {
      return a != null ? h(a) : 0;
    }
    g.unsignedCrc32 = h;
    g.deriveInstanceKey = a;
  },
  98
);
__d(
  "QuickPerformanceLoggerTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 1;
    b = 3;
    f.EVENT_BASED_SAMPLING = a;
    f.USER_BASED_SAMPLING = b;
  },
  66
);
__d(
  "QPLCore",
  ["QPLEvent", "QPLTimestamp", "QPLUtils", "QuickPerformanceLoggerTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c, d) {
      var e = b[a];
      if (!e || Object.entries(e).length === 0) return null;
      var f = {};
      Object.keys(e).forEach(function (a) {
        var b = e[a];
        b === null || b === void 0 || b.length === 0
          ? delete e[a]
          : d
          ? (f[a] = d(b))
          : (f[a] = b);
      });
      return (b = {}), (b[a] = Object.assign({}, c && c[a], f)), b;
    }
    function i(a, b) {
      if (a == null) return b;
      var c = Object.assign(
        {},
        b,
        h("string", a, b),
        h("int", a, b, Math.trunc),
        h("double", a, b),
        h("bool", a, b),
        h("string_array", a, b),
        h("int_array", a, b, function (a) {
          return a.map(Math.trunc);
        }),
        h("double_array", a, b),
        h("bool_array", a, b)
      );
      Object.keys(c).forEach(function (a) {
        var b = c[a];
        (b === null || b === void 0 || Object.entries(b).length === 0) &&
          delete c[a];
      });
      return Object.entries(c).length !== 0 ? c : null;
    }
    function j(a, b) {
      var c = {};
      b.trackedForLoss === !0 && (c.tracked_for_loss = !0);
      typeof b.absoluteTimeOrigin === "number" &&
        (c.absolute_time_origin_ns = d(
          "QPLTimestamp"
        ).timestampToSerializedNanoseconds(b.absoluteTimeOrigin));
      b = babelHelpers["extends"]({}, a, c);
      return b;
    }
    function k(a, b) {
      if (!b) return a;
      var c = {};
      b.string && (c.annotations = b.string);
      b["int"] && (c.annotations_int = b["int"]);
      b["double"] && (c.annotations_double = b["double"]);
      b.bool && (c.annotations_bool = b.bool);
      b.string_array && (c.annotations_string_array = b.string_array);
      b.int_array && (c.annotations_int_array = b.int_array);
      b.double_array && (c.annotations_double_array = b.double_array);
      b.bool_array && (c.annotations_bool_array = b.bool_array);
      return babelHelpers["extends"]({}, a, c);
    }
    var l = new Map([
      [
        d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,
        "random_sampling",
      ],
      [d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING, "per_user"],
    ]);
    function m(a, b) {
      if (a === 0) return !1;
      if (a <= 1) return !0;
      return typeof b === "string"
        ? d("QPLUtils").unsignedCrc32(b) % a === 0
        : Math.random() * a <= 1;
    }
    a = (function () {
      function a(a) {
        this.$2 = 1;
        this.$3 = 100;
        this.$4 = new Map();
        this.$5 = new Map();
        this.$6 = null;
        this.$8 = new Map();
        this.activeMarkers = new Map();
        this.$1 = a;
        this.$7 = a.logger;
        this.$5 = (a = a.listenersWithMarker) != null ? a : new Map();
      }
      var b = a.prototype;
      b.getMarker = function (a, b) {
        a = this.$9(d("QPLEvent").getMarkerId(a));
        if (!a) return null;
        a = a.get(b);
        return !a ? null : a;
      };
      b.$9 = function (a) {
        return this.activeMarkers.get(a);
      };
      b.addMarker = function (a, b, c) {
        var d = this.activeMarkers.get(a);
        d || ((d = new Map()), this.activeMarkers.set(a, d));
        d.set(b, c);
      };
      b.deleteMarker = function (a, b) {
        (a = this.activeMarkers.get(a)) == null ? void 0 : a["delete"](b);
      };
      b.markerStart = function (a, b, c, e) {
        b === void 0 && (b = 0);
        c === void 0 && (c = this.currentTimestamp());
        e = e === void 0 ? {} : e;
        var f = e.cancelExisting;
        f = f === void 0 ? !1 : f;
        var g = e.cancelOnUnload;
        g = g === void 0 ? !1 : g;
        var h = e.trackedForLoss;
        h = h === void 0 ? !1 : h;
        var i = e.type;
        i = i === void 0 ? 1 : i;
        var j = e.samplingBasis;
        j = j === void 0 ? null : j;
        e = e.qplInternalDoNotUseAbsoluteTimeOrigin;
        this.getMarker(a, b) &&
          (this.$7.warn(
            "Duplicate QPL event: " +
              d("QPLEvent").getMarkerId(a) +
              " & instanceKey: " +
              b
          ),
          f &&
            (this.$7.warn(
              "Cancelling duplicate QPL markerId: " +
                d("QPLEvent").getMarkerId(a) +
                " & instanceKey: " +
                b
            ),
            this.markerEnd(a, 4, b, c)));
        f = this.$10(a, j);
        j = f[0];
        var k = f[1];
        f = f[2];
        var l = {
          event: a,
          passesSampling: j,
          timestamp: c,
          sampleRate: k,
          samplingMethod: f,
          points: [],
          cancelOnUnload: g,
          trackedForLoss: h,
          type: i,
        };
        typeof e === "number" && (l.absoluteTimeOrigin = e);
        this.$4.forEach(function (d) {
          d.onMarkerStart && d.onMarkerStart(a, b, c);
        });
        this.$5.forEach(function (d) {
          d.onMarkerStartWithMarker(a, b, c, l);
        });
        j && this.addMarker(d("QPLEvent").getMarkerId(a), b, l);
        j &&
          h === !0 &&
          this.$11({
            marker_id: 27787271,
            action_id: 0,
            sample_rate: 1,
            annotations_int: {
              tracked_marker_id: d("QPLEvent").getMarkerId(a),
            },
            marker_type: 1,
          });
        j &&
          this.$4.forEach(function (d) {
            d.onMarkerStarted && d.onMarkerStarted(a, b, c);
          });
      };
      b.markerAnnotate = function (a, b, c) {
        c = c === void 0 ? {} : c;
        c = c.instanceKey;
        var d = c === void 0 ? 0 : c;
        this.$4.forEach(function (c) {
          Object.keys(b).forEach(function (e) {
            var f = b[e];
            if (!f) return;
            Object.keys(f).forEach(function (b) {
              c.onAnnotation && c.onAnnotation(a, d, b, f[b]);
            });
          });
        });
        c = this.getMarker(a, d);
        if (!c) return;
        c.annotations = i(b, c.annotations);
      };
      b.markerPoint = function (a, b, c) {
        c = c === void 0 ? {} : c;
        var d = c.instanceKey,
          e = d === void 0 ? 0 : d,
          f = c.data;
        d = c.timestamp;
        var g = d === void 0 ? this.currentTimestamp() : d;
        this.$4.forEach(function (c) {
          if (c.onMarkerPoint) {
            c.onMarkerPoint(
              a,
              e,
              b,
              f == null ? void 0 : (c = f.string) == null ? void 0 : c.__key,
              g
            );
          }
        });
        c = this.getMarker(a, e);
        if (!c) return;
        d = { name: b, timeSinceStart: Math.trunc(g - c.timestamp) };
        var h = i(f);
        h && (d.data = h);
        c.points.push(d);
      };
      b.markerEnd = function (a, b, c, e) {
        c === void 0 && (c = 0);
        e === void 0 && (e = this.currentTimestamp());
        this.$4.forEach(function (d) {
          d.onMarkerEnd && d.onMarkerEnd(b, a, c, e);
        });
        var f = this.getMarker(a, c);
        if (!f) return;
        if (f.passesSampling) {
          if (f.timestampIsApproximate !== !0) {
            var g = {
              marker_id: d("QPLEvent").getMarkerId(a),
              action_id: b,
              instance_id: c,
              sample_rate: f.sampleRate,
              method: l.get(f.samplingMethod),
              duration_ns: d("QPLTimestamp").calculateDurationAsNanoseconds(
                f.timestamp,
                e
              ),
              points: f.points,
              metadata: {
                application_analytics: {
                  time_since_qpl_module_init: e - this.$1.moduleLoadTimestamp,
                },
              },
              marker_type: f.type,
              flags: 1,
            };
            g = k(g, f.annotations);
            g = j(g, f);
            this.$11(g);
          }
          this.$6 === d("QPLEvent").getMarkerId(a) &&
            this.$1.onDebuggingIdEnded &&
            this.$1.onDebuggingIdEnded();
        }
        this.deleteMarker(d("QPLEvent").getMarkerId(a), c);
      };
      b.markerDrop = function (a, b) {
        b === void 0 && (b = 0);
        this.deleteMarker(d("QPLEvent").getMarkerId(a), b);
        var c = this.currentTimestamp();
        this.$4.forEach(function (d) {
          d.onMarkerDrop && d.onMarkerDrop(a, b, c);
        });
      };
      b.markEvent = function (a, b, c, e) {
        var f;
        e = e === void 0 ? {} : e;
        var g = e.timestamp;
        g = g === void 0 ? this.currentTimestamp() : g;
        e = e.annotations;
        if (
          (f = this.$1.quickLogConfigHelper) == null
            ? void 0
            : f.isKillswitchOn()
        )
          return;
        f = this.$10(a);
        var h = f[0],
          j = f[1];
        f = f[2];
        if (!h) return;
        h = i(typeof e === "function" ? e() : e);
        e = {
          marker_id: d("QPLEvent").getMarkerId(a),
          action_id: 0,
          instance_id: 0,
          sample_rate: j,
          method: l.get(f),
          da_type: b,
          da_level: c,
          metadata: {
            application_analytics: {
              time_since_qpl_module_init: g - this.$1.moduleLoadTimestamp,
            },
          },
          marker_type: 1,
          flags: 1,
        };
        this.$11(k(e, h));
      };
      b.dropAllMarkers = function () {
        this.activeMarkers.clear();
      };
      b.setAlwaysOnSampleRate = function (a, b) {
        this.$8.set(a, b);
      };
      b.setDefaultSampleRate = function (a) {
        this.$3 = a;
      };
      b.currentTimestamp = function () {
        return this.$1.performanceNow();
      };
      b.enableDebug = function (a) {
        this.$6 = a;
      };
      b.disableDebug = function () {
        this.$6 = null;
      };
      b.addListener = function (a) {
        var b = this,
          c = this.$2++;
        this.$4.set(c, a);
        return {
          dispose: function () {
            b.$4["delete"](c);
          },
        };
      };
      b.$10 = function (a, b) {
        if (
          (this.$1.unsampleAllEvents && this.$1.unsampleAllEvents()) ||
          this.$6 === d("QPLEvent").getMarkerId(a)
        )
          return [!0, 1, d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING];
        var c = d("QPLEvent").getSampleRate(a),
          e = d("QPLEvent").getSamplingMethod(a);
        if (
          this.$8.get(a) == null &&
          c !== 0 &&
          e === d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING
        ) {
          var f;
          return [
            !0,
            (f = c) != null ? f : 1,
            d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING,
          ];
        }
        f = (a = (f = this.$8.get(a)) != null ? f : c) != null ? a : this.$3;
        a =
          (c = e) != null
            ? c
            : d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING;
        e = m(f, b);
        return [e, f, a];
      };
      b.$11 = function (a) {
        var b = this.$1.decorateEventBeforeUpload
          ? this.$1.decorateEventBeforeUpload(a)
          : a;
        this.$1.sendEvent(a, b);
      };
      b.getActiveMarkerIds = function (a) {
        var b = a.type,
          c = new Set();
        this.activeMarkers.forEach(function (a, d) {
          a.forEach(function (a) {
            if (a.type === b) {
              c.add(d);
              return;
            }
          });
        });
        return Array.from(c);
      };
      b.forEachMarkerInstance = function (a, b) {
        a = this.$9(a);
        if (!a) return;
        for (
          var a = a.entries(),
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          b(f, e.event);
        }
      };
      return a;
    })();
    a.normalizeAnnotations = i;
    g["default"] = a;
  },
  98
);
__d(
  "createQPLEvent_DO_NOT_USE",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return { config: b, markerId: a };
    }
    f["default"] = a;
  },
  66
);
__d(
  "QuickPerformanceLogger",
  [
    "Arbiter",
    "Bootloader",
    "Env",
    "FBLogger",
    "PerfFalcoEvent",
    "PerfXSharedFields",
    "Promise",
    "QPLCore",
    "QPLEvent",
    "Run",
    "WebStorage",
    "cr:1367102",
    "cr:1984081",
    "createQPLEvent_DO_NOT_USE",
    "gkx",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    a = b("QPLEvent").getMarkerId;
    function j(a) {
      var c = b("PerfXSharedFields").getCommonData();
      c = {
        memory_stats: {
          total_mem: c.ram_gb != null ? c.ram_gb * 1073741824 : null,
        },
        network_stats: {
          downlink_megabits: c.downlink_megabits,
          network_subtype: c.effective_connection_type,
          rtt_ms: c.rtt_ms,
        },
        sitedata_info: {
          client_push_phase: c.client_push_phase,
          client_revision: c.client_revision,
          server_revision: c.server_revision,
        },
        locale_info: { locale: c.locale, isRTL: c.isRTL },
      };
      b("gkx")("1224637") &&
        (c.workplace_info = { is_gemini: b("gkx")("1217157") });
      return babelHelpers["extends"]({}, a, {
        metadata: babelHelpers["extends"]({}, a.metadata, c),
      });
    }
    function k(a, c, d) {
      return b("createQPLEvent_DO_NOT_USE")(a, { m: d, r: c });
    }
    function l(a, c) {
      return new (b("Promise"))(function () {
        var d = c || a;
        typeof window.__je2e_recordQPLMarker === "function" &&
          window.__je2e_recordQPLMarker(d);
        (g || (g = b("Env"))).enable_qplinspector === !0 &&
          b("Bootloader").loadModules(
            ["QPLInspector"],
            function (a) {
              a.appendLog(d);
            },
            "QuickPerformanceLogger"
          );
        b("gkx")("1554827") || b("gkx")("708253")
          ? b("PerfFalcoEvent").logImmediately(function () {
              return d;
            })
          : b("PerfFalcoEvent").log(function () {
              return d;
            });
      });
    }
    function m() {
      return (
        (g || (g = b("Env"))).enable_qplinspector === !0 ||
        typeof window.__je2e_recordQPLMarker === "function" ||
        b("gkx")("1738486")
      );
    }
    function n() {
      b("Arbiter").inform("qpl_debugger_finished");
    }
    var o = (h || (h = b("performanceAbsoluteNow")))(),
      p = {
        debug: function (a, b, c) {},
        warn: function (a) {
          b("FBLogger")("qpl").blameToPreviousDirectory().warn(a);
        },
      },
      q = "qpl";
    c = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var c;
        c =
          a.call(this, {
            decorateEventBeforeUpload: j,
            unsampleAllEvents: m,
            onDebuggingIdEnded: n,
            performanceNow: h || (h = b("performanceAbsoluteNow")),
            moduleLoadTimestamp: o,
            logger: p,
            sendEvent: l,
          }) || this;
        b("Run").onUnload(function () {
          c.$QuickPerformanceLogger1(),
            c.$QuickPerformanceLogger2(706, {
              respectUnloadPolicy: !0,
              timestamp: c.currentTimestamp(),
            });
        });
        c.$QuickPerformanceLogger3();
        c.initQplFlipperPlugin();
        c.initQplSapienzPlugin();
        return c;
      }
      var d = c.prototype;
      d.$QuickPerformanceLogger3 = function () {
        var a = this,
          c = (i || (i = b("WebStorage"))).getSessionStorageForRead();
        if (!c) {
          this.$QuickPerformanceLogger4(
            "_loadSavedState",
            "sessionStorage is not available"
          );
          return;
        }
        var d = c.getItem(q);
        if (d == null) return;
        c.removeItem(q);
        c = JSON.parse(d);
        if (c == null) {
          this.$QuickPerformanceLogger4(
            "_loadSavedState",
            "Saved state failed to deserialize"
          );
          return;
        }
        if (c.markers == null || c.markers.length === 0) {
          this.$QuickPerformanceLogger4(
            "_loadSavedState",
            "No saved markers found"
          );
          return;
        }
        c.markers.forEach(function (b) {
          var c = b[0],
            d = b[1];
          b = b[2];
          a.addMarker(c, d, b);
          a.$QuickPerformanceLogger4(
            "_loadSavedState",
            "Marker " + c + " (instanceKey: " + d + ") resumed"
          );
        });
      };
      d.$QuickPerformanceLogger1 = function () {
        var a = this,
          c = [];
        this.activeMarkers.forEach(function (a, b) {
          a.forEach(function (a, d) {
            a.resumeAfterNavigation === !0 &&
              (delete a.resumeAfterNavigation, c.push([b, d, a]));
          });
        });
        if (c.length > 0) {
          var d = { markers: c },
            e = (i || (i = b("WebStorage"))).getSessionStorage();
          e = i.setItemGuarded(e, q, JSON.stringify(d));
          e &&
            (c.forEach(function (b) {
              var c = b[0],
                d = b[1];
              b = b[2];
              c = k(c, b.sampleRate, b.samplingMethod);
              a.markerEnd(c, 96, d);
            }),
            this.$QuickPerformanceLogger4(
              "_storeSavedState",
              "Failed to store saved state: " + e.message
            ),
            b("FBLogger")("qpl")
              .catching(e)
              .warn(
                "Failed to store QPL state: " + JSON.stringify(d, null, 2)
              ));
          c.forEach(function (b) {
            var c = b[0];
            b = b[1];
            a.deleteMarker(c, b);
          });
        }
      };
      d.markerStoreBeforeNavigation = function (a, b) {
        b = b === void 0 ? {} : b;
        b = b.instanceKey;
        b = b === void 0 ? 0 : b;
        a = this.getMarker(a, b);
        if (!a) return;
        a.resumeAfterNavigation = !0;
      };
      d.markerStartFromNavStart = function (a, c, d) {
        c === void 0 && (c = 0);
        d = d === void 0 ? {} : d;
        var e = d.cancelExisting;
        e = e === void 0 ? !1 : e;
        var f = d.cancelOnUnload;
        f = f === void 0 ? !1 : f;
        var g = d.trackedForLoss;
        g = g === void 0 ? !1 : g;
        var h = d.type;
        h = h === void 0 ? 1 : h;
        d = d.qplInternalDoNotUseConvertToTimeOnServer;
        var i = b("performanceNavigationStart")();
        d = typeof d === "function" ? d(i) : void 0;
        this.markerStart(a, c, i, {
          cancelExisting: e,
          cancelOnUnload: f,
          trackedForLoss: g,
          type: h,
          qplInternalDoNotUseAbsoluteTimeOrigin: d,
        });
        if (b("performanceNavigationStart").isPolyfilled) {
          i = this.getMarker(a, c);
          i && (i.timestampIsApproximate = !0);
        }
      };
      d.$QuickPerformanceLogger2 = function (a, b) {
        var c = this;
        b = b === void 0 ? {} : b;
        var d = b.timestamp,
          e = b.respectUnloadPolicy;
        this.activeMarkers.forEach(function (b, f) {
          b.forEach(function (b, g) {
            if (!e || b.cancelOnUnload === !0) {
              b = k(f, b.sampleRate, b.samplingMethod);
              c.markerEnd(b, a, g, d);
            }
          });
        });
      };
      d.$QuickPerformanceLogger4 = function (a, b, c) {
        p.debug(a, b, c);
      };
      d.initQplFlipperPlugin = function () {
        b("cr:1367102") != null &&
          this.addListener(b("cr:1367102").qplFlipperPlugin.listener());
      };
      d.initQplSapienzPlugin = function () {
        b("cr:1984081") != null &&
          this.addListener(b("cr:1984081").getQplSapienzListener());
      };
      return c;
    })(b("QPLCore"));
    d = new c();
    e.exports = d;
  },
  null
);
__d(
  "OneTraceQPLLogger",
  ["QuickPerformanceLogger", "performanceNavigationStart", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        CANCEL: 4,
        ERROR: 87,
        FAIL: 3,
        OFFLINE: 160,
        START: 1,
        SUCCESS: 2,
        TIMEOUT: 113,
      },
      i = c("performanceNavigationStart")();
    function a(a, b) {
      if (a == null) return;
      c("QuickPerformanceLogger").markerStart(
        a,
        b.instanceKey,
        b.startTime + i
      );
    }
    function b(a, b) {
      if (a == null) return;
      c("QuickPerformanceLogger").markerAnnotate(a, b.annotations, {
        instanceKey: b.instanceKey,
      });
      for (var d in b.markerPoints)
        c("QuickPerformanceLogger").markerPoint(a, d, {
          data: b.markerPoints[d].data,
          instanceKey: b.instanceKey,
          timestamp: b.markerPoints[d].timeSinceStart + i,
        });
      var e = h[b.status];
      c("QuickPerformanceLogger").markerEnd(
        a,
        e,
        b.instanceKey,
        ((a = b.endTime) != null ? a : c("performanceNow")()) + i
      );
    }
    g.qplActionMap = h;
    g.initQPL = a;
    g.logQPL = b;
  },
  98
);
__d(
  "InteractionTracingConfigDefault",
  ["OneTraceQPLLogger", "SiteData", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = 6e4;
    b = {
      defaultTracePolicy: "default",
      enableMemoryLogging: c("gkx")("1773917"),
      logLateMutationReactStack: c("gkx")("1914427"),
      logVCReactStack: c("gkx")("1778371"),
      pkgCohort: c("SiteData").pkg_cohort,
      timeout: a,
      qplActionMap: d("OneTraceQPLLogger").qplActionMap,
      useDocumentBodyForVCRoot: !0,
      navigationCancelsInteractions: !1,
    };
    g.DEFAULT_TRACING_CONFIG = b;
  },
  98
);
__d(
  "InteractionTracing",
  ["InteractionTracingConfigDefault", "cr:11469", "cr:70"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var c = a.cfg;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["cfg"]);
      return babelHelpers["extends"]({}, a, {
        cfg: babelHelpers["extends"](
          {},
          d("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG,
          c
        ),
        deps: b("cr:70"),
      });
    }
    a = babelHelpers["extends"]({}, b("cr:11469").InteractionTracingCore, {
      transformStartMetadata: h,
      startInteraction: function (a, c) {
        return b("cr:11469").InteractionTracingCore.startInteraction(h(a), c);
      },
      trace: (function (a) {
        function b(b, c, d, e, f, g, h, i, j) {
          return a.apply(this, arguments);
        }
        b.toString = function () {
          return a.toString();
        };
        return b;
      })(function (a, c, e, f, g, h, i, j, k) {
        return b("cr:11469").InteractionTracingCore.trace(
          babelHelpers["extends"](
            {},
            d("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG,
            k
          ),
          b("cr:70"),
          a,
          c,
          e,
          f,
          g,
          h,
          i,
          j
        );
      }),
      logServerTimings: function (a, c, d) {
        b("cr:11469").logServerTimings(b("cr:70"), a, c, d);
      },
      navigation: b("cr:11469").NavigationTracing,
    });
    g["default"] = a;
  },
  98
);
__d(
  "useCometRouteTracePolicy",
  ["useCurrentRoute"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "comet.app";
    function a() {
      var a;
      return (a =
        (a = c("useCurrentRoute")()) == null ? void 0 : a.tracePolicy) != null
        ? a
        : h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInteractionTracing",
  [
    "CometInteractionTracingConfig",
    "InteractionTracing",
    "forEachObject",
    "react",
    "useCometRouteTracePolicy",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b, e, f, g) {
      var i = (f = f) != null ? f : c("useCometRouteTracePolicy")();
      return h(
        function (f, h, j, k) {
          var l = c("uuid")(),
            m = (k = k) != null ? k : i;
          c("InteractionTracing").trace(
            a,
            function (a) {
              var b = c("InteractionTracing").checkAndMarkRevisit(m);
              a.addMetadata("revisit", b ? 1 : 0);
              g != null &&
                c("forEachObject")(g, function (b, c) {
                  c != null && b != null && a.addMetadata(c, b);
                });
              f(a);
            },
            b,
            e,
            m,
            l,
            h,
            j,
            d("CometInteractionTracingConfig").tracingConfig
          );
        },
        [a, b, e, i]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useIsMountedRef",
  ["react", "useLayoutEffect_SAFE_FOR_SSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;
    function a() {
      var a = h(!1);
      c("useLayoutEffect_SAFE_FOR_SSR")(function () {
        a.current = !0;
        return function () {
          a.current = !1;
        };
      }, []);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTransientDialogProvider.react",
  [
    "fbt",
    "BaseModal.react",
    "CometDialogContext",
    "CometErrorBoundary.react",
    "CometHeroLogging",
    "CometInteractionTracingQPLConfigContext",
    "cometPushToast",
    "cr:945",
    "react",
    "recoverableViolation",
    "useCometInteractionTracing",
    "useIsMountedRef",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState;
    function n(a) {
      var b = a.dialogConfig,
        e = a.dialogConfigsRef,
        f = a.removeDialogConfig,
        g = l(null);
      k(function () {
        return function () {
          g.current != null && window.cancelAnimationFrame(g.current);
        };
      }, []);
      a = b.dialog;
      var n = b.dialogProps,
        o = m(!1),
        p = o[0];
      o = o[1];
      var q = j(
          function () {
            for (var a = arguments.length, d = new Array(a), h = 0; h < a; h++)
              d[h] = arguments[h];
            g.current != null && window.cancelAnimationFrame(g.current);
            var i = e.current.indexOf(b);
            i < 0 &&
              c("recoverableViolation")(
                "Attempting to close a dialog that does not exist anymore.",
                "comet_ui"
              );
            g.current = window.requestAnimationFrame(function () {
              f(b, d), (g.current = null);
            });
          },
          [b, e, f]
        ),
        r = j(
          function () {
            q(),
              d("cometPushToast").cometPushErrorToast({
                message: h._(
                  "Something isn't working. This may be because of a technical error we're working to fix."
                ),
              });
          },
          [q]
        );
      return i.jsx(c("CometErrorBoundary.react"), {
        onError: r,
        children: i.jsx(c("BaseModal.react"), {
          hidden: p,
          interactionDesc: b.interactionDesc,
          interactionUUID: b.interactionUUID,
          stackingBehavior: "above-everything",
          children: i.jsx(
            a,
            babelHelpers["extends"]({}, n, { onClose: q, onHide: o })
          ),
        }),
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var e = m([]),
        f = e[0],
        g = e[1];
      e = d("CometInteractionTracingQPLConfigContext").useDialogTraceQPLEvent();
      var h = c("useCometInteractionTracing")(e, "fluid", "INTERACTION");
      e = j(
        function (a, d, e, f) {
          var i = e.loadType,
            j = e.preloadTrigger,
            k = e.tracePolicy;
          h(
            function (e) {
              var h = c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(
                e.getTraceId()
              );
              e.addMetadata("interaction_type", "dialog");
              e.addMetadata("load_type", i);
              j != null && e.addMetadata("preload_trigger", j);
              var l = "Dialog";
              g(function (b) {
                return b.concat({
                  dialog: a,
                  dialogProps: d,
                  interactionDesc: l,
                  interactionUUID: h,
                  onClose: f,
                  tracePolicy: k,
                });
              });
              b("cr:945") && b("cr:945").logOpen(k, h);
            },
            void 0,
            void 0,
            k
          );
        },
        [h]
      );
      var o = l(f);
      k(
        function () {
          o.current = f;
        },
        [f]
      );
      var p = c("useIsMountedRef")(),
        q = j(
          function (a, c) {
            if (!p.current) return;
            g(function (b) {
              var c = b.indexOf(a);
              return c < 0 ? b : b.slice(0, c);
            });
            a.onClose && a.onClose.apply(a, c);
            b("cr:945") &&
              b("cr:945").logClose(a.tracePolicy, a.interactionUUID);
          },
          [p]
        );
      return i.jsxs(c("CometDialogContext").Provider, {
        value: e,
        children: [
          a.children,
          f.map(function (a, b) {
            return i.jsx(
              n,
              { dialogConfig: a, dialogConfigsRef: o, removeDialogConfig: q },
              b
            );
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePrevious",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = i(null);
      h(function () {
        b.current = a;
      });
      return b.current;
    }
    g["default"] = a;
  },
  98
);
__d(
  "Actor",
  [
    "CometRelay",
    "CometRelayEnvironmentFactory",
    "CometRelayMultiActorEnvironment",
    "CometRouterDispatcherContextFactory.react",
    "CometTransientDialogProvider.react",
    "react",
    "recoverableViolation",
    "unrecoverableViolation",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react"),
      j = i.useContext,
      k = i.useMemo,
      l = i.useState;
    function a(a) {
      return function () {
        throw c("unrecoverableViolation")(
          "You are " +
            a +
            " the Actor from a React component that is not a descendent of ActorProvider.",
          "groups_comet"
        );
      };
    }
    var m = h.createContext({ get: a("reading"), set: a("setting") });
    function b(a) {
      var b =
          a.actorEnvironmentKey_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING,
        e = a.children,
        f = a.initialActorID,
        g = a.readonly,
        i = g === void 0 ? !1 : g;
      g = a.scope;
      a = g === void 0 ? null : g;
      g = l(f);
      var j = g[0],
        n = g[1];
      g = c("usePrevious")(a);
      var o = c("usePrevious")(f);
      b = d("CometRelayEnvironmentFactory").getForActorID(j, b);
      o = o != null && o !== f;
      g = g != null && g !== a;
      (o || g) && j !== f && n(f);
      a = k(
        function () {
          return {
            get: function () {
              return j;
            },
            set: function (a) {
              if (i) {
                c("recoverableViolation")(
                  "You tried to update the Actor ID, but the <ActorProvider /> closest to your useActor() call has a read-only Actor ID. To fix this, wrap the React tree that you want to set an Actor ID for with your own <ActorProvider />.",
                  "groups_comet"
                );
                return;
              }
              n(a);
            },
          };
        },
        [j, i]
      );
      return h.jsx(m.Provider, {
        value: a,
        children: h.jsx(d("CometRelay").RelayEnvironmentProvider, {
          environment: b,
          getEnvironmentForActor: d("CometRelayMultiActorEnvironment").forActor,
          children: h.jsx(c("CometRouterDispatcherContextFactory.react"), {
            actorID: j,
            children: h.jsx(c("CometTransientDialogProvider.react"), {
              children: e,
            }),
          }),
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e() {
      var a = j(m);
      return [a.get(), a.set];
    }
    g.ActorProvider = b;
    g.useActor = e;
  },
  98
);
__d(
  "CometRelayEnvironment",
  ["CometRelayEnvironmentFactory"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("CometRelayEnvironmentFactory").defaultEnvironment;
  },
  98
);
__d(
  "HiddenSubtreeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      backgrounded: !1,
      hidden: !1,
      hiddenOrBackgrounded: !1,
      hiddenOrBackgrounded_FIXME: !1,
    });
    g["default"] = b;
  },
  98
);
__d(
  "HiddenSubtreeContextProvider.react",
  [
    "HiddenSubtreeContext",
    "HiddenSubtreePassiveContext",
    "react",
    "removeFromArray",
    "useLayoutEffect_SAFE_FOR_SSR",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef;
    function n(a, b) {
      return a.backgrounded === b.backgrounded && a.hidden === b.hidden;
    }
    function o(a, b) {
      var c = a.backgrounded || b.backgrounded;
      a = a.hidden || b.hidden;
      return {
        backgrounded: c,
        hidden: a,
        hiddenOrBackgrounded: c || a,
        hiddenOrBackgrounded_FIXME: c || a,
      };
    }
    function a(a) {
      var b = a.children,
        d = a.ignoreParent,
        e = a.isBackgrounded,
        f = e === void 0 ? !1 : e,
        g = a.isHidden;
      e = j(c("HiddenSubtreeContext"));
      var p = j(c("HiddenSubtreePassiveContext")),
        q = l(
          function () {
            return {
              backgrounded: f,
              hidden: g,
              hiddenOrBackgrounded: f || g,
              hiddenOrBackgrounded_FIXME: f || g,
            };
          },
          [f, g]
        ),
        r = m(q),
        s = m(null),
        t = m([]),
        u = i(
          function () {
            var a = d === !0 ? r.current : o(r.current, p.getCurrentState());
            if (s.current == null || !n(a, s.current)) {
              s.current = a;
              var b = Array.from(t.current);
              b.forEach(function (b) {
                b(a);
              });
            }
          },
          [d, p]
        );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          (r.current = q), u();
        },
        [q, u]
      );
      k(
        function () {
          if (d !== !0) {
            var a = p.subscribeToChanges(u);
            return function () {
              return a.remove();
            };
          }
        },
        [d, u, p]
      );
      a = l(
        function () {
          return {
            getCurrentState: function () {
              return d === !0 ? r.current : o(r.current, p.getCurrentState());
            },
            subscribeToChanges: function (a) {
              var b = t.current;
              b.push(a);
              return {
                remove: function () {
                  c("removeFromArray")(b, a);
                },
              };
            },
          };
        },
        [p, d]
      );
      var v = d === !0 ? q : o(q, e);
      e = l(
        function () {
          return {
            backgrounded: v.backgrounded,
            hidden: v.hidden,
            hiddenOrBackgrounded: v.backgrounded || v.hidden,
            hiddenOrBackgrounded_FIXME: v.backgrounded || v.hidden,
          };
        },
        [v.backgrounded, v.hidden]
      );
      return h.jsx(c("HiddenSubtreeContext").Provider, {
        value: e,
        children: h.jsx(c("HiddenSubtreePassiveContext").Provider, {
          value: a,
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseDocumentScrollView.react",
  [
    "BaseView.react",
    "DocumentScrollViewPageOffsetsContext",
    "HiddenSubtreeContext",
    "HiddenSubtreeContextProvider.react",
    "qex",
    "react",
    "useLayoutEffect_SAFE_FOR_SSR",
    "usePrevious",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useRef,
      l = e.useState,
      m = {
        detached: {
          MsOverflowStyle: "q5bimw55",
          height: "datstx6m",
          overflowX: "d76ob5m9",
          overflowY: "eg9m0zos",
          position: "poy2od1o",
          scrollbarWidth: "ofs802cu",
          start: "j9ispegn",
          top: "kr520xx4",
          width: "k4urcfbm",
          "::-webkit-scrollbar": {
            display: "pohlnb88",
            height: "dkue75c7",
            width: "mb9wzai9",
          },
        },
      },
      n = new Map(),
      o = new Set(),
      p = null;
    function q(a, b) {
      return !!(
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
      );
    }
    function r() {
      var a = null;
      n.forEach(function (b, c) {
        a == null
          ? (a = c)
          : a != null && c != null && q(a, c) && !o.has(c) && (a = c);
      });
      return a;
    }
    function s(a) {
      return p == null || q(p, a);
    }
    function b(b) {
      var d = b.contextKey,
        e = d === void 0 ? null : d;
      d = b.detached;
      d = d === void 0 ? !1 : d;
      var f = b.detachedPageOffsets,
        g = b.hiddenWhenDetached;
      g = g === void 0 ? !1 : g;
      var q = b.maintainScrollForContext,
        t = q === void 0 ? !1 : q,
        u = b.onInitialScroll;
      q = b.resetScrollOnMount;
      var v = q === void 0 ? !0 : q;
      q = babelHelpers.objectWithoutPropertiesLoose(b, [
        "contextKey",
        "detached",
        "detachedPageOffsets",
        "hiddenWhenDetached",
        "maintainScrollForContext",
        "onInitialScroll",
        "resetScrollOnMount",
      ]);
      var w = k(),
        x = k({ x: 0, y: 0 }),
        y = c("useStable")(function () {
          return {};
        }),
        z = c("usePrevious")(e);
      b = l(!1);
      var A = b[0],
        B = b[1];
      b = l({ x: 0, y: 0 });
      var C = b[0],
        D = b[1],
        E = c("usePrevious")(A);
      b = j(c("HiddenSubtreeContext"));
      var F = b.hidden;
      c("useLayoutEffect_SAFE_FOR_SSR")(function () {
        var a = w.current;
        if (a != null) {
          if (s(a)) {
            if (p != null) {
              var b = n.get(p);
              b && b(!1);
            }
            p = a;
          } else B(!0);
          n.set(a, function (a) {
            a || D(babelHelpers["extends"]({}, x.current)), B(!a);
          });
          return function () {
            n["delete"](a);
            if (p === a) {
              p = r();
              if (p != null) {
                var b = n.get(p);
                b && b(!0);
              }
            }
          };
        }
      }, []);
      var G = i(
        function (b, c) {
          a.scrollTo && a.scrollTo(b, c), typeof u === "function" && u(b, c);
        },
        [u]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          (v || E != null) && !A && A !== E && G(C.x, C.y);
        },
        [A, C, E, G, v]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          if ((v || z != null) && e !== z) {
            var a = t && e != null && e in y ? y[e] : { x: 0, y: 0 };
            A ? D(a) : G(a.x, a.y);
          }
        },
        [e, y, A, t, z, G, v]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          if (!A) {
            var b = function () {
              var b = a.pageXOffset,
                c = a.pageYOffset;
              x.current = { x: b, y: c };
              e != null && (y[e] = { x: b, y: c });
            };
            window.addEventListener("scroll", b, { passive: !0 });
            return function () {
              return window.removeEventListener("scroll", b, { passive: !0 });
            };
          }
        },
        [A, e, y]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var a = w.current;
          if (a != null)
            if (F) {
              o.add(a);
              if (!A) {
                B(!0);
                p = r();
                if (p != null) {
                  var b = n.get(p);
                  b && b(!0);
                }
              }
              return function () {
                o["delete"](a);
              };
            } else if (A && a !== p && a === r()) {
              if (p != null) {
                b = n.get(p);
                b && b(!1);
              }
              p = a;
              b = n.get(p);
              b && b(!0);
            }
        },
        [A, F]
      );
      b = d || A;
      d = g;
      var H = (c("qex")._("1839372") ? b : A) && !g,
        I = f && c("qex")._("1839372") ? f : C;
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var a = w.current;
          H && a != null && (a.scrollTop = I.y);
        },
        [I.y, H]
      );
      return h.jsx(c("DocumentScrollViewPageOffsetsContext").Provider, {
        value: x,
        children: h.jsx(c("HiddenSubtreeContextProvider.react"), {
          ignoreParent: !0,
          isBackgrounded: b,
          isHidden: d,
          children: h.jsx(
            c("BaseView.react"),
            babelHelpers["extends"](
              {},
              q,
              { hidden: d },
              H && {
                "aria-hidden": !0,
                id: "scrollview",
                style: { left: -I.x },
                xstyle: m.detached,
              },
              { ref: w }
            )
          ),
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b;
  },
  98
);
__d(
  "BaseContextualLayerAnchorRootContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ current: document.body });
    g["default"] = b;
  },
  98
);
__d(
  "BaseDOMContainer.react",
  ["react", "useLayoutEffect_SAFE_FOR_SSR", "useMergeRefs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef;
    function a(a, b) {
      var d = a.node,
        e = i(null);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var a = e.current;
          if (d != null && a != null) {
            a.appendChild(d);
            return function () {
              a.removeChild(d);
            };
          }
        },
        [d]
      );
      a = c("useMergeRefs")(b, e);
      return h.jsx("div", { ref: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b;
  },
  98
);
__d(
  "BaseContextualLayerAnchorRoot.react",
  [
    "BaseContextualLayerAnchorRootContext",
    "BaseDOMContainer.react",
    "ExecutionEnvironment",
    "react",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef;
    function a(a) {
      a = a.children;
      var b = c("useStable")(function () {
          return d("ExecutionEnvironment").canUseDOM
            ? document.createElement("div")
            : null;
        }),
        e = i(b);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("BaseContextualLayerAnchorRootContext").Provider, {
            value: e,
            children: a,
          }),
          h.jsx(c("BaseDOMContainer.react"), { node: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHeroInteractionWithDiv.react",
  ["LegacyHidden", "cr:1011783", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a, b) {
      var d = a.children,
        e = a.hidden,
        f = a.htmlAttributes,
        g = a.pageletAriaProps;
      a = a.xstyle;
      return h.jsx(c("LegacyHidden"), {
        htmlAttributes: babelHelpers["extends"](
          {
            className: c("stylex")(a),
            onMouseLeave: f == null ? void 0 : f.onMouseLeave,
            style: f == null ? void 0 : f.style,
          },
          g
        ),
        mode: e === !0 ? "hidden" : "visible",
        ref: b,
        children: d,
      });
    };
    f = (e = b("cr:1011783")) != null ? e : h.forwardRef(a);
    g["default"] = f;
  },
  98
);
__d(
  "CometLayerKeyCommandWidget",
  ["createKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a;
  },
  98
);
__d(
  "SetActiveLayerIfAttached.react",
  [
    "CometKeyCommandUtilsContext",
    "CometLayerKeyCommandWidget",
    "HiddenSubtreeContext",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    function a(a) {
      var b = h(c("HiddenSubtreeContext"));
      a = h(c("CometKeyCommandUtilsContext"));
      var d = a && a.setActiveLayer,
        e = h(c("CometLayerKeyCommandWidget").Context);
      i(
        function () {
          if (!d) {
            c("recoverableViolation")(
              "The current layer is not wrapped in a *KeyCommandListener",
              "comet_ax"
            );
            return;
          }
          if (!e) {
            c("recoverableViolation")(
              "setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper",
              "comet_ax"
            );
            return;
          }
          b.hiddenOrBackgrounded || d(e);
        },
        [e, b, d]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometLayerKeyCommandWrapper.react",
  ["CometLayerKeyCommandWidget", "SetActiveLayerIfAttached.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.debugName;
      return h.jsxs(c("CometLayerKeyCommandWidget").Wrapper, {
        debugName: a,
        children: [
          h.jsx(c("SetActiveLayerIfAttached.react"), { debugName: a }),
          b,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getCometRouteKey",
  ["stableStringify"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof WeakMap === "function" ? new WeakMap() : new Map();
    function a(a) {
      var b = h.get(a);
      if (b != null) return b;
      b = a.rootView.resource.getModuleId();
      b = b + "||" + c("stableStringify")(a.rootView.props);
      var d = a.hostableView;
      if (d != null) {
        var e = d.resource.getModuleId();
        b = b + "||" + e + "||" + c("stableStringify")(d.props);
      }
      e = a.actorID;
      e != null && (b = b + "||" + e);
      h.set(a, b);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ActiveFocusRegionUtilsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "getTabbableNodes",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = document.activeElement,
        d = function (b, d, e) {
          return e === c
            ? !0
            : a(b, d, e) &&
                e.offsetWidth > 0 &&
                e.offsetHeight > 0 &&
                e.tabIndex !== -1 &&
                window.getComputedStyle(e).visibility !== "hidden";
        };
      b = c ? b.DO_NOT_USE_queryAllNodes(d) : null;
      if (b === null) return [null, null, null, 0, null];
      d = b[0];
      var e = b[b.length - 1],
        f = b.indexOf(c),
        g = null;
      f !== -1 && (g = b[f]);
      return [b, d, e, f, g];
    }
    f["default"] = a;
  },
  66
);
__d(
  "FocusManager",
  ["getTabbableNodes"],
  function (a, b, c, d, e, f, g) {
    var h = !1,
      i = !1,
      j = !1,
      k = 500;
    function l() {
      try {
        var a = document.createElement("div");
        a.addEventListener(
          "focus",
          function (a) {
            a.preventDefault(), a.stopPropagation();
          },
          !0
        );
        a.focus(
          Object.defineProperty({}, "preventScroll", {
            get: function () {
              i = !0;
            },
          })
        );
      } catch (a) {}
    }
    function m(a) {
      a = a.parentElement;
      var b = [],
        c = document.scrollingElement || document.documentElement;
      while (a && a !== c) {
        var d = a,
          e = d.offsetHeight;
        d = d.offsetWidth;
        (e < a.scrollHeight || d < a.scrollWidth) &&
          b.push([a, a.scrollTop, a.scrollLeft]);
        a = a.parentElement;
      }
      c && b.push([c, c.scrollTop, c.scrollLeft]);
      return b;
    }
    function n(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = c[0],
          e = c[1];
        c = c[2];
        d.scrollTop = e;
        d.scrollLeft = c;
      }
    }
    function a(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryAllNodes(a[c]);
        if (d) return d;
      }
      return null;
    }
    function o(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryFirstNode(a[c]);
        if (d) return d;
      }
      return null;
    }
    function b(a, b, c) {
      c = c || {};
      var d = c.preventScroll,
        e = c.focusWithoutUserIntent;
      c = c.focusWithAutoFocus;
      a = o(a, b);
      a != null &&
        p(a, {
          preventScroll: d,
          focusWithoutUserIntent: e,
          focusWithAutoFocus: c,
        });
    }
    function d() {
      return h;
    }
    function e(a) {
      return a._focusWithAutoFocus === !0;
    }
    function p(a, b) {
      b = b || {};
      var c = b.preventScroll,
        d = b.focusWithoutUserIntent;
      b = b.focusWithAutoFocus;
      if (a !== null) {
        j || ((j = !0), l());
        var e = a._tabIndexState;
        if (e && e.canTab === !1) return;
        e = e ? e.value : a.tabIndex;
        a.tabIndex = -1;
        var f = h;
        c = c || !1;
        b === !0 &&
          ((a._focusWithAutoFocus = !0),
          window.setTimeout(function () {
            a._focusWithAutoFocus = !1;
          }, k));
        try {
          h = d || !1;
          if (!c) t(a);
          else if (i) t(a, { preventScroll: !0 });
          else {
            b = m(a);
            t(a);
            n(b);
          }
        } catch (a) {
        } finally {
          h = f;
        }
        a.tabIndex = e;
      }
    }
    function f(a, b, d) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var e = a[2],
        f = a[3];
      a = a[4];
      a !== null && a !== e && b && p(b[f + 1], { preventScroll: d });
    }
    function q(a, b, d) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var e = a[1],
        f = a[3];
      a = a[4];
      a !== null && a !== e && b && p(b[f - 1], { preventScroll: d });
    }
    function r(a, b, d, e) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var f = a[1],
        g = a[2],
        h = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === g
        ? e === !0 && (p(f), d.preventDefault(), d.stopPropagation())
        : (p(b[h + 1]), d.preventDefault(), d.stopPropagation());
    }
    function s(a, b, d, e) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var f = a[1],
        g = a[2],
        h = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === f
        ? e === !0 && (p(g), d.preventDefault(), d.stopPropagation())
        : (p(b[h - 1]), d.preventDefault(), d.stopPropagation());
    }
    var t = function (a, b) {
      (a.focus || HTMLElement.prototype.focus).call(a, b);
    };
    g.getAllNodesFromOneOrManyQueries = a;
    g.getFirstNodeFromOneOrManyQueries = o;
    g.focusFirst = b;
    g.isFocusingWithoutUserIntent = d;
    g.wasElementAutoFocused = e;
    g.focusElement = p;
    g.focusNext = f;
    g.focusPrevious = q;
    g.focusNextContained = r;
    g.focusPreviousContained = s;
  },
  98
);
__d(
  "FocusRegionType",
  ["$InternalEnum", "react"],
  function (a, b, c, d, e, f, g) {
    d("react");
    a = b("$InternalEnum").Mirrored(["Nearest", "First"]);
    g.RecoverFocusStrategy = a;
  },
  98
);
__d(
  "ReactKeyboardEvent.react",
  ["ReactUseEvent.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = { passive: !0 };
    function a(a, b) {
      var d = b.disabled,
        e = d === void 0 ? !1 : d,
        f = b.onKeyDown,
        g = b.onKeyUp,
        j = c("ReactUseEvent.react")("keydown"),
        k = c("ReactUseEvent.react")("keyup", i);
      h(
        function () {
          var b = a.current;
          b !== null &&
            (j.setListener(b, (!e && f) || null),
            k.setListener(b, (!e && g) || null));
        },
        [e, f, j, k, a, g]
      );
    }
    g.useKeyboard = a;
  },
  98
);
__d(
  "setElementCanTab",
  [],
  function (a, b, c, d, e, f) {
    b = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex");
    c = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex");
    d = function (a) {
      return a;
    };
    var g = b ? b.set : d,
      h = c ? c.set : d;
    function i(a) {
      return a instanceof SVGElement ? h : g;
    }
    function a(a, b) {
      var c = a._tabIndexState,
        d = i(a);
      if (!c) {
        var e = { value: a.tabIndex, canTab: b };
        a._tabIndexState = e;
        b || (a.tabIndex = -1);
        Object.defineProperty(a, "tabIndex", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return e.canTab ? e.value : -1;
          },
          set: function (a) {
            e.canTab && typeof d === "function" && d.call(this, a),
              (e.value = a);
          },
        });
      } else
        c.canTab !== b &&
          typeof d === "function" &&
          (d.call(a, b ? c.value : -1), (c.canTab = b));
    }
    f["default"] = a;
  },
  66
);
__d(
  "FocusRegion.react",
  [
    "ActiveFocusRegionUtilsContext",
    "FocusManager",
    "FocusRegionType",
    "ReactEventHookPropagation",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "gkx",
    "react",
    "setElementCanTab",
    "useLayoutEffect_SAFE_FOR_SSR",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useMemo,
      m = e.useRef;
    function n(a, b, c) {
      var e = document.activeElement;
      window.requestAnimationFrame(function () {
        document.activeElement === e &&
          d("FocusManager").focusElement(a, {
            preventScroll: b,
            focusWithoutUserIntent: c,
          });
      });
    }
    function o(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0;
    }
    var p = h.unstable_Scope,
      q = new Map();
    function a(a) {
      var b = a.autoRestoreFocus,
        e = a.autoFocusQuery,
        f = a.children,
        g = a.containFocusQuery,
        r = a.forwardRef,
        s = a.id,
        t = a.recoverFocusStrategy,
        u =
          t === void 0 ? d("FocusRegionType").RecoverFocusStrategy.Nearest : t,
        v = a.recoverFocusQuery,
        w = m(null),
        x = m(null),
        y = j(c("ActiveFocusRegionUtilsContext")),
        z = m(y === null && b === !0 ? document.activeElement : null),
        A = l(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          };
        }, []),
        B = i(
          function () {
            if (y != null) {
              var a = y.getActiveFocusRegion();
              if (a !== A) {
                var b;
                A.restorationFocusRegionItem !== a &&
                  !(
                    a != null &&
                    a.lastFocused != null &&
                    ((b = w.current) == null
                      ? void 0
                      : b.containsNode(a.lastFocused))
                  ) &&
                  (a != null && a.triggeredFocusRegionItems.add(A),
                  (A.restorationFocusRegionItem = a));
                (a === null ||
                  (a != null &&
                    A != null &&
                    a.lastFocused !== A.lastFocused)) &&
                  y.setActiveFocusRegion(A);
              }
            }
          },
          [y, A]
        ),
        C = m(null);
      t = i(
        function (a) {
          w.current = a;
          A.scope = a;
          var b = C.current;
          r && (r.current = a);
          b !== null && b !== s && q.get(b) === null && q["delete"](b);
          s != null &&
            (a !== null
              ? ((C.current = s), q.set(s, a))
              : q.get(s) === null && q["delete"](s));
        },
        [r, s, A]
      );
      t = d("ReactFocusEvent.react").useFocusWithin(
        t,
        l(
          function () {
            return {
              onBeforeBlurWithin: function (a) {
                var b = w.current;
                if (b !== null && v !== void 0) {
                  a.stopPropagation();
                  if (v === null) return;
                  a = a.target;
                  b = d("FocusManager").getAllNodesFromOneOrManyQueries(v, b);
                  if (b === null) return;
                  var c = b.indexOf(a);
                  a = a._tabIndexState;
                  x.current = {
                    detachedCanTab: a != null && a.canTab,
                    recoveryIndex: c,
                    recovery: b,
                  };
                }
              },
              onAfterBlurWithin: function () {
                var a = w.current,
                  b = x.current;
                x.current = null;
                var e = document.activeElement;
                if (
                  a !== null &&
                  v != null &&
                  b !== null &&
                  (e == null || e === document.body || !a.containsNode(e))
                ) {
                  e = !0;
                  var f = !0,
                    g = b.recovery,
                    h = b.recoveryIndex,
                    i = d("FocusManager").getAllNodesFromOneOrManyQueries(v, a);
                  if (i !== null && g !== null) {
                    var j = new Set(i),
                      k = new Set(g);
                    for (var l = h - 1; l >= 0; l--) {
                      var m = g[l];
                      if (j.has(m)) {
                        var o = i.indexOf(m);
                        o = o + 1;
                        if (o < i.length) {
                          o = i[o];
                          if (!k.has(o)) {
                            b.detachedCanTab && c("setElementCanTab")(o, !0);
                            n(o, e, f);
                            return;
                          }
                        }
                        b.detachedCanTab && c("setElementCanTab")(m, !0);
                        n(m, e, f);
                        return;
                      }
                    }
                    if (u === d("FocusRegionType").RecoverFocusStrategy.Nearest)
                      for (var o = h + 1; o < g.length; o++) {
                        m = g[o];
                        if (j.has(m)) {
                          k = i.indexOf(m);
                          l = k - 1;
                          if (l >= 0) {
                            h = i[l];
                            b.detachedCanTab && c("setElementCanTab")(h, !0);
                            n(h, e, f);
                            return;
                          }
                        }
                      }
                    m = d("FocusManager").getFirstNodeFromOneOrManyQueries(
                      v,
                      a
                    );
                    m &&
                      (b.detachedCanTab && c("setElementCanTab")(m, !0),
                      n(m, e, f));
                  }
                }
              },
              onFocusWithin: function (a) {
                d("ReactEventHookPropagation").stopEventHookPropagation(
                  a,
                  "useFocusWithin"
                ),
                  (A.lastFocused = a.target),
                  B();
              },
            };
          },
          [v, u, B, A]
        )
      );
      d("ReactKeyboardEvent.react").useKeyboard(
        w,
        l(
          function () {
            return {
              onKeyDown: function (a) {
                if (g == null || a.key !== "Tab" || a.isDefaultPrevented())
                  return;
                var b = w.current;
                b !== null &&
                  (a.shiftKey
                    ? d("FocusManager").focusPreviousContained(g, b, a, !0)
                    : d("FocusManager").focusNextContained(g, b, a, !0));
              },
            };
          },
          [g]
        )
      );
      a = i(
        function () {
          var a = w.current,
            b = document.activeElement;
          if (e != null && a !== null && (!b || !a.containsNode(b))) {
            b = A.lastFocused;
            b != null && a.containsNode(b) && !o(b)
              ? d("FocusManager").focusElement(b, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
              : d("FocusManager").focusFirst(e, a, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                });
          }
        },
        [e, A]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(a, [a]);
      k(a, [a]);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var a = A;
          return function () {
            var e,
              f,
              g = w.current,
              h = document.activeElement,
              i = z.current;
            z.current = null;
            e = (e = a) == null ? void 0 : e.triggeredFocusRegionItems;
            var j = (f = a) == null ? void 0 : f.restorationFocusRegionItem;
            (e == null ? void 0 : e.size) &&
              e.forEach(function (a) {
                return (a.restorationFocusRegionItem = j);
              });
            a != null &&
              j != null &&
              (j.triggeredFocusRegionItems["delete"](a),
              (e == null ? void 0 : e.size) &&
                e.forEach(function (a) {
                  j.triggeredFocusRegionItems.add(a);
                }));
            c("gkx")("1211") && (A.lastFocused = null);
            f = y == null ? void 0 : y.getActiveFocusRegion();
            var k =
              f != null ? f.restorationFocusRegionItem : { lastFocused: i };
            f === a && (y == null ? void 0 : y.setActiveFocusRegion(j));
            e =
              (g !== null && h !== null && g.containsNode(h)) ||
              h == null ||
              h === document.body;
            b === !0 && e
              ? window.requestAnimationFrame(function () {
                  if ((k == null ? void 0 : k.lastFocused) != null) {
                    var b = !0,
                      c = !0,
                      e = document.activeElement;
                    (e === null || e === document.body) &&
                      d("FocusManager").focusElement(k.lastFocused, {
                        preventScroll: b,
                        focusWithoutUserIntent: c,
                      });
                  }
                  a = null;
                })
              : (a = null);
          };
        },
        [y, b, A]
      );
      return h.jsx(p, { ref: t, id: s, children: f });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b, c) {
      a = q.get(a);
      if (a) {
        a = a.DO_NOT_USE_queryFirstNode(b);
        if (a !== null) {
          d("FocusManager").focusElement(a, { preventScroll: c });
          return a;
        }
      }
      return null;
    }
    g.FocusRegion = a;
    g.focusRegionById = b;
  },
  98
);
__d(
  "focusScopeQueries",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      return a === "h1" ||
        a === "h2" ||
        a === "h3" ||
        b["aria-busy"] === !0 ||
        b.role === "progressbar"
        ? !0
        : !1;
    }
    function b(a, b) {
      return b.tabIndex === -1 &&
        !(
          b.disabled === !0 ||
          b.type === "hidden" ||
          b["aria-disabled"] === !0 ||
          b["aria-hidden"] === !0
        )
        ? !0
        : g(a, b);
    }
    function g(a, b) {
      if (b.tabIndex === -1 || b.disabled === !0) return !1;
      if (b.tabIndex === 0 || b.contentEditable === !0) return !0;
      if (a === "a" || a === "area")
        return b.href != null && b.href !== "" && b.rel !== "ignore";
      return a === "input"
        ? b.type !== "hidden" && b.type !== "file"
        : a === "button" ||
            a === "textarea" ||
            a === "select" ||
            a === "iframe" ||
            a === "embed";
    }
    c = [a, g];
    d = function (a, b) {
      return b["data-focus-target"] === !0 &&
        (b["aria-busy"] === !0 || b.role === "progressbar")
        ? !0
        : !1;
    };
    f.headerAndSpinnerFocusScopeQuery = a;
    f.focusableScopeQuery = b;
    f.tabbableScopeQuery = g;
    f.headerFirstTabbableSecondScopeQuery = c;
    f.topLoadingScopeQuery = d;
  },
  66
);
__d(
  "createCometRelayEntryPointEnvironmentProvider",
  ["CometRelayEnvironmentFactory"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a === void 0 &&
        (a = d("CometRelayEnvironmentFactory").defaultEnvironment);
      var b = function (b) {
        b = b == null ? void 0 : b.actorID;
        return b == null
          ? a
          : d("CometRelayEnvironmentFactory").getForActorID(String(b));
      };
      return { getEnvironment: b };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometRelayEntrypointContextualEnvironmentProvider",
  ["CometRelay", "createCometRelayEntryPointEnvironmentProvider", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a() {
      var a = d("CometRelay").useRelayEnvironment();
      return h(
        function () {
          return c("createCometRelayEntryPointEnvironmentProvider")(a);
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d(
  "resize-observer-polyfill-1.5.1",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {},
      h = { exports: g },
      i;
    function j() {
      (function (b, c) {
        typeof g === "object" && typeof h !== "undefined"
          ? (h.exports = c())
          : typeof i === "function" && i.amd
          ? i(c)
          : (b.ResizeObserver = c());
      })(this, function () {
        var b = (function () {
            if (typeof Map !== "undefined") return Map;
            function a(a, b) {
              var c = -1;
              a.some(function (d, a) {
                if (d[0] === b) {
                  c = a;
                  return !0;
                }
                return !1;
              });
              return c;
            }
            return (function () {
              function b() {
                this.__entries__ = [];
              }
              Object.defineProperty(b.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              });
              b.prototype.get = function (b) {
                b = a(this.__entries__, b);
                b = this.__entries__[b];
                return b && b[1];
              };
              b.prototype.set = function (c, d) {
                var b = a(this.__entries__, c);
                ~b
                  ? (this.__entries__[b][1] = d)
                  : this.__entries__.push([c, d]);
              };
              b.prototype["delete"] = function (b) {
                var c = this.__entries__;
                b = a(c, b);
                ~b && c.splice(b, 1);
              };
              b.prototype.has = function (b) {
                return !!~a(this.__entries__, b);
              };
              b.prototype.clear = function () {
                this.__entries__.splice(0);
              };
              b.prototype.forEach = function (a, b) {
                b === void 0 && (b = null);
                for (var c = 0, d = this.__entries__; c < d.length; c++) {
                  var e = d[c];
                  a.call(b, e[1], e[0]);
                }
              };
              return b;
            })();
          })(),
          c =
            typeof window !== "undefined" &&
            typeof document !== "undefined" &&
            window.document === document,
          d = (function () {
            if (typeof a !== "undefined" && a.Math === Math) return a;
            if (typeof self !== "undefined" && self.Math === Math) return self;
            return typeof window !== "undefined" && window.Math === Math
              ? window
              : Function("return this")();
          })(),
          e = (function () {
            return typeof requestAnimationFrame === "function"
              ? requestAnimationFrame.bind(d)
              : function (a) {
                  return setTimeout(function () {
                    return a(Date.now());
                  }, 1e3 / 60);
                };
          })(),
          f = 2;
        function g(a, b) {
          var c = !1,
            d = !1,
            g = 0;
          function h() {
            c && ((c = !1), a()), d && j();
          }
          function i() {
            e(h);
          }
          function j() {
            var a = Date.now();
            if (c) {
              if (a - g < f) return;
              d = !0;
            } else (c = !0), (d = !1), setTimeout(i, b);
            g = a;
          }
          return j;
        }
        var h = 20,
          i = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight",
          ],
          j = typeof MutationObserver !== "undefined",
          k = (function () {
            function a() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = g(this.refresh.bind(this), h));
            }
            a.prototype.addObserver = function (a) {
              ~this.observers_.indexOf(a) || this.observers_.push(a),
                this.connected_ || this.connect_();
            };
            a.prototype.removeObserver = function (b) {
              var a = this.observers_;
              b = a.indexOf(b);
              ~b && a.splice(b, 1);
              !a.length && this.connected_ && this.disconnect_();
            };
            a.prototype.refresh = function () {
              var a = this.updateObservers_();
              a && this.refresh();
            };
            a.prototype.updateObservers_ = function () {
              var a = this.observers_.filter(function (a) {
                return a.gatherActive(), a.hasActive();
              });
              a.forEach(function (a) {
                return a.broadcastActive();
              });
              return a.length > 0;
            };
            a.prototype.connect_ = function () {
              if (!c || this.connected_) return;
              document.addEventListener("transitionend", this.onTransitionEnd_);
              window.addEventListener("resize", this.refresh);
              j
                ? ((this.mutationsObserver_ = new MutationObserver(
                    this.refresh
                  )),
                  this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }))
                : (document.addEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                  (this.mutationEventsAdded_ = !0));
              this.connected_ = !0;
            };
            a.prototype.disconnect_ = function () {
              if (!c || !this.connected_) return;
              document.removeEventListener(
                "transitionend",
                this.onTransitionEnd_
              );
              window.removeEventListener("resize", this.refresh);
              this.mutationsObserver_ && this.mutationsObserver_.disconnect();
              this.mutationEventsAdded_ &&
                document.removeEventListener(
                  "DOMSubtreeModified",
                  this.refresh
                );
              this.mutationsObserver_ = null;
              this.mutationEventsAdded_ = !1;
              this.connected_ = !1;
            };
            a.prototype.onTransitionEnd_ = function (a) {
              a = a.propertyName;
              var b = a === void 0 ? "" : a;
              a = i.some(function (a) {
                return !!~b.indexOf(a);
              });
              a && this.refresh();
            };
            a.getInstance = function () {
              this.instance_ || (this.instance_ = new a());
              return this.instance_;
            };
            a.instance_ = null;
            return a;
          })(),
          l = function (a, b) {
            for (var c = 0, d = Object.keys(b); c < d.length; c++) {
              var e = d[c];
              Object.defineProperty(a, e, {
                value: b[e],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return a;
          },
          m = function (a) {
            a = a && a.ownerDocument && a.ownerDocument.defaultView;
            return a || d;
          },
          n = x(0, 0, 0, 0);
        function o(a) {
          return parseFloat(a) || 0;
        }
        function p(a) {
          var b = [];
          for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
          return b.reduce(function (b, c) {
            c = a["border-" + c + "-width"];
            return b + o(c);
          }, 0);
        }
        function q(a) {
          var b = ["top", "right", "bottom", "left"],
            c = {};
          for (var d = 0, b = b; d < b.length; d++) {
            var e = b[d],
              f = a["padding-" + e];
            c[e] = o(f);
          }
          return c;
        }
        function r(a) {
          a = a.getBBox();
          return x(0, 0, a.width, a.height);
        }
        function s(a) {
          var b = a.clientWidth,
            c = a.clientHeight;
          if (!b && !c) return n;
          var d = m(a).getComputedStyle(a),
            e = q(d),
            f = e.left + e.right,
            g = e.top + e.bottom,
            h = o(d.width),
            i = o(d.height);
          d.boxSizing === "border-box" &&
            (Math.round(h + f) !== b && (h -= p(d, "left", "right") + f),
            Math.round(i + g) !== c && (i -= p(d, "top", "bottom") + g));
          if (!u(a)) {
            d = Math.round(h + f) - b;
            a = Math.round(i + g) - c;
            Math.abs(d) !== 1 && (h -= d);
            Math.abs(a) !== 1 && (i -= a);
          }
          return x(e.left, e.top, h, i);
        }
        var t = (function () {
          return typeof SVGGraphicsElement !== "undefined"
            ? function (a) {
                return a instanceof m(a).SVGGraphicsElement;
              }
            : function (a) {
                return (
                  a instanceof m(a).SVGElement &&
                  typeof a.getBBox === "function"
                );
              };
        })();
        function u(a) {
          return a === m(a).document.documentElement;
        }
        function v(a) {
          if (!c) return n;
          return t(a) ? r(a) : s(a);
        }
        function w(a) {
          var b = a.x,
            c = a.y,
            d = a.width;
          a = a.height;
          var e =
            typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
          e = Object.create(e.prototype);
          l(e, {
            x: b,
            y: c,
            width: d,
            height: a,
            top: c,
            right: b + d,
            bottom: a + c,
            left: b,
          });
          return e;
        }
        function x(a, b, c, d) {
          return { x: a, y: b, width: c, height: d };
        }
        var y = (function () {
            function a(a) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = x(0, 0, 0, 0)),
                (this.target = a);
            }
            a.prototype.isActive = function () {
              var a = v(this.target);
              this.contentRect_ = a;
              return (
                a.width !== this.broadcastWidth ||
                a.height !== this.broadcastHeight
              );
            };
            a.prototype.broadcastRect = function () {
              var a = this.contentRect_;
              this.broadcastWidth = a.width;
              this.broadcastHeight = a.height;
              return a;
            };
            return a;
          })(),
          z = (function () {
            function a(a, b) {
              b = w(b);
              l(this, { target: a, contentRect: b });
            }
            return a;
          })(),
          A = (function () {
            function a(a, c, d) {
              this.activeObservations_ = [];
              this.observations_ = new b();
              if (typeof a !== "function")
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function."
                );
              this.callback_ = a;
              this.controller_ = c;
              this.callbackCtx_ = d;
            }
            a.prototype.observe = function (a) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if (
                typeof Element === "undefined" ||
                !(Element instanceof Object)
              )
                return;
              if (!(a instanceof m(a).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var b = this.observations_;
              if (b.has(a)) return;
              b.set(a, new y(a));
              this.controller_.addObserver(this);
              this.controller_.refresh();
            };
            a.prototype.unobserve = function (a) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if (
                typeof Element === "undefined" ||
                !(Element instanceof Object)
              )
                return;
              if (!(a instanceof m(a).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var b = this.observations_;
              if (!b.has(a)) return;
              b["delete"](a);
              b.size || this.controller_.removeObserver(this);
            };
            a.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            };
            a.prototype.gatherActive = function () {
              var a = this;
              this.clearActive();
              this.observations_.forEach(function (b) {
                b.isActive() && a.activeObservations_.push(b);
              });
            };
            a.prototype.broadcastActive = function () {
              if (!this.hasActive()) return;
              var a = this.callbackCtx_,
                b = this.activeObservations_.map(function (a) {
                  return new z(a.target, a.broadcastRect());
                });
              this.callback_.call(a, b, a);
              this.clearActive();
            };
            a.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            };
            a.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            };
            return a;
          })(),
          B = typeof WeakMap !== "undefined" ? new WeakMap() : new b(),
          C = (function () {
            function a(b) {
              if (!(this instanceof a))
                throw new TypeError("Cannot call a class as a function.");
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              var c = k.getInstance(),
                d = new A(b, c, this);
              B.set(this, d);
            }
            return a;
          })();
        ["observe", "unobserve", "disconnect"].forEach(function (a) {
          C.prototype[a] = function () {
            var b;
            return (b = B.get(this))[a].apply(b, arguments);
          };
        });
        var D = (function () {
          return typeof d.ResizeObserver !== "undefined" ? d.ResizeObserver : C;
        })();
        return D;
      });
    }
    var k = !1;
    function l() {
      k || ((k = !0), j());
      return h.exports;
    }
    function b(a) {
      switch (a) {
        case void 0:
          return l();
      }
    }
    e.exports = b;
  },
  null
);
__d(
  "resize-observer-polyfill",
  ["resize-observer-polyfill-1.5.1"],
  function (a, b, c, d, e, f) {
    e.exports = b("resize-observer-polyfill-1.5.1")();
  },
  null
);
__d(
  "uniqueID",
  [],
  function (a, b, c, d, e, f) {
    var g = "js_",
      h = 36,
      i = 0;
    function a() {
      return g + (i++).toString(h);
    }
    f["default"] = a;
  },
  66
);
__d(
  "useResizeObserver",
  [
    "FBLogger",
    "ReactDOMComet",
    "gkx",
    "react",
    "resize-observer-polyfill",
    "uniqueID",
    "useLayoutEffect_SAFE_FOR_SSR",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = i(null),
        d = i(a);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          d.current = a;
        },
        [a]
      );
      return h(function (c) {
        var a = function (a, b, c) {
          d.current && d.current(a, b, c);
        };
        c = c == null ? null : n(c, a);
        b.current && b.current();
        b.current = c;
      }, []);
    }
    var j = null,
      k = new Map();
    function l() {
      j == null && (j = new (c("resize-observer-polyfill"))(m));
      return j;
    }
    function m(a) {
      var b = new Map(),
        e = new Map(
          a.map(function (a) {
            var d = a.contentRect;
            if (c("gkx")("1470120")) {
              var e = b.get(a.target);
              if (e == null) {
                var f = v(a.target);
                b.set(a.target, f);
                d = f;
              } else d = e;
            }
            return [a.target, d];
          })
        ),
        f = new Set(k.keys());
      d("ReactDOMComet").unstable_batchedUpdates(function () {
        for (
          var a = e,
            b = Array.isArray(a),
            d = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (b) {
            if (d >= a.length) break;
            g = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            g = d.value;
          }
          g = g;
          var h = g[0];
          g = g[1];
          var i = k.get(h);
          if (i != null)
            for (
              var i = i,
                j = Array.isArray(i),
                l = 0,
                i = j
                  ? i
                  : i[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var m;
              if (j) {
                if (l >= i.length) break;
                m = i[l++];
              } else {
                l = i.next();
                if (l.done) break;
                m = l.value;
              }
              m = m;
              m = m[1];
              try {
                m(g, h, e);
              } catch (a) {
                c("FBLogger")("useResizeObserver").catching(a);
              }
            }
          else
            f.has(h) ||
              c("FBLogger")("useResizeObserver").mustfix(
                "ResizeObserver observed resizing of an element that it should not be observing"
              );
        }
      });
    }
    function n(a, b) {
      var d,
        e = c("uniqueID")();
      d = (d = k.get(a)) != null ? d : new Map();
      d.set(e, b);
      k.set(a, d);
      l().observe(a);
      return o(a, e);
    }
    function o(a, b) {
      return function () {
        var c = k.get(a);
        if (c == null) return;
        c["delete"](b);
        c.size === 0 && (l().unobserve(a), k["delete"](a));
      };
    }
    function p(a) {
      return parseFloat(a) || 0;
    }
    function q(a) {
      return (a =
        a == null
          ? void 0
          : (a = a.ownerDocument) == null
          ? void 0
          : a.defaultView) != null
        ? a
        : window;
    }
    function r(a, b, c, d) {
      return { x: a, y: b, width: c, height: d };
    }
    var s = r(0, 0, 0, 0);
    function t(a) {
      var b = ["top", "right", "bottom", "left"],
        c = {};
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a["padding-" + e];
        c[e] = p(f);
      }
      return c;
    }
    function u(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return c.reduce(function (b, c) {
        c = a["border-" + c + "-width"];
        return b + p(c);
      }, 0);
    }
    function v(a) {
      var b = a.clientWidth,
        c = a.clientHeight;
      if (!b && !c) return s;
      a = q(a).getComputedStyle(a);
      var d = t(a),
        e = d.left + d.right,
        f = d.top + d.bottom,
        g = p(a.width),
        h = p(a.height);
      a.boxSizing === "border-box" &&
        (Math.round(g + e) !== b && (g -= u(a, "left", "right") + e),
        Math.round(h + f) !== c && (h -= u(a, "top", "bottom") + f));
      return r(d.left, d.top, g, h);
    }
    f.exports = a;
  },
  34
);
__d(
  "BasePortalTargetContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(document.body);
    g["default"] = b;
  },
  98
);
__d(
  "BaseThemeConfigContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      darkClassName: null,
      darkVariables: {},
      lightClassName: null,
      lightVariables: {},
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "BaseThemeProvider.react",
  [
    "BaseThemeConfigContext",
    "BaseThemeDisplayModeContext",
    "react",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.config;
      a = a.displayMode;
      var e = i(c("BaseThemeConfigContext")),
        f = c("useCurrentDisplayMode")(),
        g = (a = a) != null ? a : f;
      a = j(
        function () {
          var a;
          d != null && d.type === "CLASSNAMES"
            ? (a = g === "dark" ? d.dark : d.light)
            : (a = g === "dark" ? e.darkClassName : e.lightClassName);
          return { theme: a };
        },
        [d, e.darkClassName, e.lightClassName, g]
      );
      f = j(
        function () {
          if (d != null)
            if (d.type === "VARIABLES")
              return babelHelpers["extends"]({}, e, {
                darkVariables: babelHelpers["extends"](
                  {},
                  e.darkVariables,
                  d.dark
                ),
                lightVariables: babelHelpers["extends"](
                  {},
                  e.lightVariables,
                  d.light
                ),
              });
            else if (d.type === "CLASSNAMES")
              return babelHelpers["extends"]({}, e, {
                darkClassName: d.dark,
                lightClassName: d.light,
              });
          return e;
        },
        [d, e]
      );
      var l = k(g === "dark" ? f.darkVariables : f.lightVariables);
      return h.jsx(c("BaseThemeConfigContext").Provider, {
        value: f,
        children: h.jsx(c("BaseThemeDisplayModeContext").Provider, {
          value: g,
          children: b(a, l),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var b = {};
      Object.keys(a).forEach(function (c) {
        b["--" + c] = a[c];
      });
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BasePortal.react",
  [
    "BaseDOMContainer.react",
    "BasePortalTargetContext",
    "BaseThemeProvider.react",
    "ExecutionEnvironment",
    "Promise",
    "ReactDOMComet",
    "react",
    "stylex",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var e = a.children,
        f = a.hidden,
        g = f === void 0 ? !1 : f;
      f = a.target;
      var j = a.xstyle;
      a = i(c("BasePortalTargetContext"));
      f = f || a;
      var k = c("useStable")(function () {
        return d("ExecutionEnvironment").canUseDOM
          ? document.createElement("div")
          : null;
      });
      if (!d("ExecutionEnvironment").canUseDOM) throw b("Promise").reject();
      return f != null
        ? d("ReactDOMComet").createPortal(
            h.jsx(c("BaseThemeProvider.react"), {
              children: function (a, b) {
                return h.jsxs(
                  "div",
                  babelHelpers["extends"]({}, g && { hidden: !0 }, {
                    className: c("stylex")(a, j) || void 0,
                    style: b,
                    children: [
                      h.jsx(c("BasePortalTargetContext").Provider, {
                        value: k,
                        children: e,
                      }),
                      h.jsx(c("BaseDOMContainer.react"), { node: k }),
                    ],
                  })
                );
              },
            }),
            f
          )
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHeroInteractionContextPassthrough.react",
  ["hero-tracing-placeholder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d(
      "hero-tracing-placeholder"
    ).HeroInteractionContextPassthrough;
  },
  98
);
__d(
  "useCometVisualChangeTracker",
  ["cr:683059", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c = d("react");
    var h = c.useCallback,
      i = c.useEffect,
      j = c.useRef;
    function a() {
      var a = j(null),
        c = j(null);
      i(function () {
        return function () {
          c.current && c.current(), (c.current = null), (a.current = null);
        };
      }, []);
      return h(function (d) {
        if (a.current !== d) {
          c.current && (c.current(), (c.current = null));
          a.current = d;
          if (d && b("cr:683059")) {
            var e = b("cr:683059").getCurrentNavigationTrace();
            e && (c.current = e.addMutationRoot(d));
          }
        }
      }, []);
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseCometModal.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "BaseDocumentScrollView.react",
    "BaseHeadingContext",
    "BasePortal.react",
    "CometHeroInteractionContextPassthrough.react",
    "CometHeroInteractionWithDiv.react",
    "CometLayerKeyCommandWrapper.react",
    "FocusRegion.react",
    "HiddenSubtreeContext",
    "cr:1829844",
    "focusScopeQueries",
    "react",
    "stylex",
    "useCometVisualChangeTracker",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        content: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          minHeight: "h3gjbzrl",
          position: "l9j0dhe7",
        },
        hidden: { visibility: "kr9hpln1" },
        mask: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "poy2od1o",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        maskOverlay: { backgroundColor: "ms7hmo2b" },
        root: { position: "l9j0dhe7" },
        rootStatic: { position: "hwddc3l5" },
      },
      k = {
        "above-everything": { zIndex: "tkr6xdv7" },
        normal: { zIndex: "du4w35lb" },
      };
    function a(a) {
      var e = a.blockKeyCommands;
      e = e === void 0 ? !1 : e;
      var f = a.children,
        g = a.contextKey,
        l = a.hidden;
      l = l === void 0 ? !1 : l;
      var m = a.interactionDesc,
        n = a.interactionUUID,
        o = a.isOverlayTransparent;
      o = o === void 0 ? !1 : o;
      a = a.stackingBehavior;
      a = a === void 0 ? "auto" : a;
      var p = i(c("HiddenSubtreeContext"));
      p = p.hidden;
      var q = c("useStable")(function () {
          return n !== void 0;
        }),
        r = c("useCometVisualChangeTracker")();
      o = h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", { className: c("stylex")(j.mask, !o && j.maskOverlay) }),
          h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
            children: h.jsx(d("FocusRegion.react").FocusRegion, {
              autoFocusQuery:
                d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
              autoRestoreFocus: !0,
              containFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
              recoverFocusQuery:
                d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
              children: e
                ? f
                : h.jsx(c("CometLayerKeyCommandWrapper.react"), {
                    debugName: "modal layer",
                    children: f,
                  }),
            }),
          }),
        ],
      });
      b("cr:1829844") != null &&
        (o = h.jsx(b("cr:1829844"), { name: "modal", children: o }));
      e = p ? "normal" : a;
      return h.jsx(c("BasePortal.react"), {
        hidden: p,
        xstyle: [
          e === "auto" ? j.rootStatic : j.root,
          l && j.hidden,
          e !== "auto" && k[e],
        ],
        children: h.jsx(c("BaseDocumentScrollView.react"), {
          contextKey: g,
          hiddenWhenDetached: l,
          children: h.jsx(c("BaseHeadingContext").Provider, {
            value: 1,
            children: q
              ? h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
                  clear: !0,
                  children: h.jsx(c("CometHeroInteractionWithDiv.react"), {
                    interactionDesc: m,
                    interactionUUID: n,
                    ref: r,
                    xstyle: j.content,
                    children: o,
                  }),
                })
              : h.jsx("div", {
                  className: c("stylex")(j.content),
                  ref: r,
                  children: o,
                }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "routeBuilderUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.split("/");
      return a
        .filter(function (a) {
          return a !== "";
        })
        .map(function (a) {
          var b = a.split(/{|}/);
          if (b.length < 3) return { isToken: !1, part: a };
          else {
            a = b[0];
            var c = b[1];
            b = b[2];
            var d = c[0] === "?",
              e = c[d ? 1 : 0] === "*";
            c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
            return { isToken: !0, optional: d, prefix: a, suffix: b, token: c };
          }
        });
    }
    f.getPathParts = a;
  },
  66
);
__d(
  "jsRouteBuilder",
  ["ConstUriUtils", "FBLogger", "routeBuilderUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "#";
    function a(a, b, e, f, g) {
      g === void 0 && (g = !1);
      var i = d("routeBuilderUtils").getPathParts(a);
      function j(j) {
        try {
          var k = f != null ? babelHelpers["extends"]({}, f, j) : j,
            l = {};
          j = "";
          var m = !1;
          j = i.reduce(function (a, c) {
            if (!c.isToken) return a + "/" + c.part;
            else {
              var d,
                e = c.optional,
                f = c.prefix,
                g = c.suffix;
              c = c.token;
              if (e && m) return a;
              d = (d = k[c]) != null ? d : b[c];
              if (d == null && e) {
                m = !0;
                return a;
              }
              if (d == null)
                throw new Error("Missing required template parameter: " + c);
              if (d === "")
                throw new Error(
                  "Required template parameter is an empty string: " + c
                );
              l[c] = !0;
              return a + "/" + f + d + g;
            }
          }, "");
          a.slice(-1) === "/" && (j += "/");
          j === "" && (j = "/");
          var n = d("ConstUriUtils").getUri(j);
          for (var o in k) {
            var p = k[o];
            !l[o] &&
              p != null &&
              n != null &&
              (e != null && e.has(o)
                ? p !== !1 && (n = n.addQueryParam(o, null))
                : (n = n.addQueryParam(o, p)));
          }
          return [n, j];
        } catch (b) {
          p = b == null ? void 0 : b.message;
          n = c("FBLogger")("JSRouteBuilder").blameToPreviousFrame();
          g && (n = n.blameToPreviousFrame());
          n.mustfix("Failed building URI for base path: %s message: %s", a, p);
          return [null, h];
        }
      }
      return {
        buildUri: function (a) {
          a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
          if (a == null)
            throw new Error("Not even the fallback URL parsed validly!");
          return a;
        },
        buildUriNullable: function (a) {
          return j(a)[0];
        },
        buildURLStringDEPRECATED: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
        buildURL: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "requireDeferredForDisplay",
  ["requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("requireDeferred").call(null, a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseContextualLayerAvailableHeightContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "BaseContextualLayerContextSizeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "BaseContextualLayerDefaultContainer.react",
  ["LegacyHidden", "react", "stylex", "testID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(c("LegacyHidden"), {
        htmlAttributes: babelHelpers["extends"]({}, c("testID")(a.testid), {
          className: c("stylex")(a.xstyle),
        }),
        mode: a.hidden ? "hidden" : "visible",
        ref: b,
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseContextualLayerLayerAdjustmentContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "BaseContextualLayerOrientationContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { align: "start", position: "below" };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "BaseScrollableAreaContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext([]);
    g["default"] = b;
  },
  98
);
__d(
  "calculateBaseContextualLayerPosition_DEPRECATED",
  ["Locale"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("Locale").isRTL();
    function a(a) {
      var b = a.align,
        c = a.contextRect,
        d = a.contextualLayerSize,
        e = a.fixed,
        f = a.offsetRect,
        g = a.position;
      a = a.screenRect;
      e = {
        height: void 0,
        position: e ? "fixed" : void 0,
        transform: "",
        width: void 0,
      };
      var i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = (c.bottom + c.top) / 2,
        n = (c.left + c.right) / 2,
        o = h ? "start" : "end",
        p = h ? "end" : "start";
      switch (g) {
        case "above":
          j = c.top - f.top;
          l = "-100%";
          break;
        case "below":
          j = c.bottom - f.top;
          break;
        case p:
          i = c.left - f.left;
          k = "-100%";
          break;
        case o:
          i = c.right - f.left;
          break;
      }
      if (g === "start" || g === "end")
        switch (b) {
          case "start":
            j = c.top - f.top;
            break;
          case "middle":
            j = m - f.top;
            l = "-50%";
            break;
          case "end":
            j = c.bottom - f.top;
            l = "-100%";
            break;
          case "stretch":
            j = c.top - f.top;
            e.height = c.bottom - c.top + "px";
            break;
        }
      else if (g === "above" || g === "below")
        switch (b) {
          case p:
            i = c.left - f.left;
            break;
          case "middle":
            i = n - f.left;
            k = "-50%";
            break;
          case o:
            i = c.right - f.left;
            k = "-100%";
            break;
          case "stretch":
            i = c.left - f.left;
            e.width = c.right - c.left + "px";
            break;
        }
      f = 0;
      if (d != null)
        if (g === "start" || g === "end") {
          var q = null;
          switch (b) {
            case "start":
              q = c.top;
              break;
            case "middle":
              q = m - d.height / 2;
              break;
            case "end":
              q = c.bottom - d.height;
              break;
          }
          q != null &&
            (q < a.top
              ? (f = a.top - q)
              : q + d.height > a.bottom && (f = a.bottom - q - d.height));
          j += f;
        } else if (g === "above" || g === "below") {
          m = null;
          switch (b) {
            case p:
              m = c.left;
              break;
            case "middle":
              m = n - d.width / 2;
              break;
            case o:
              m = c.right - d.width;
              break;
          }
          m != null &&
            (m < a.left
              ? (f = a.left - m)
              : m + d.width > a.right && (f = a.right - m - d.width));
          i += f;
        }
      q = "";
      (i !== 0 || j !== 0) &&
        (q += "translate(" + Math.round(i) + "px, " + Math.round(j) + "px) ");
      (k !== 0 || l !== 0) && (q += "translate(" + k + ", " + l + ") ");
      e.transform = q;
      return { adjustment: f, style: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getDefaultViewForNode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a === document ? document : a.ownerDocument;
      return a.defaultView;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getComputedStyle",
  ["getDefaultViewForNode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = c("getDefaultViewForNode")(a);
      return d == null ? null : d.getComputedStyle(a, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "isElementFixedOrSticky",
  ["getComputedStyle"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a;
      while (b != null && b !== a.ownerDocument) {
        var d = c("getComputedStyle")(b);
        if (d == null) return !1;
        d = d.getPropertyValue("position");
        if (d === "fixed" || d === "sticky") return !0;
        b = b.parentElement;
      }
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseContextualLayer.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "BaseContextualLayerAnchorRootContext",
    "BaseContextualLayerAvailableHeightContext",
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerDefaultContainer.react",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BaseLinkNestedPressableContext",
    "BasePortal.react",
    "BaseScrollableAreaContext",
    "BaseViewportMarginsContext",
    "CometTextContext",
    "FocusRegion.react",
    "HiddenSubtreeContext",
    "Locale",
    "calculateBaseContextualLayerPosition_DEPRECATED",
    "focusScopeQueries",
    "getComputedStyle",
    "isElementFixedOrSticky",
    "mergeRefs",
    "react",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useImperativeHandle,
      m = b.useMemo,
      n = b.useReducer,
      o = b.useRef;
    function p(a) {
      a = a.getBoundingClientRect();
      return { bottom: a.bottom, left: a.left, right: a.right, top: a.top };
    }
    function q(a) {
      var b = c("getComputedStyle")(a);
      return b != null && b.getPropertyValue("position") !== "static"
        ? a
        : (a instanceof HTMLElement && a.offsetParent) ||
            a.ownerDocument.documentElement;
    }
    var r = 8;
    function s(a, b) {
      return a.bottom < b.top ||
        b.bottom < a.top ||
        a.right < b.left ||
        b.right < b.left
        ? null
        : {
            bottom: Math.min(a.bottom, b.bottom),
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top),
          };
    }
    var t = d("Locale").isRTL(),
      u = {
        root: {
          left: "j34wkznp",
          marginRight: "qp9yad78",
          position: "pmk7jnqg",
          top: "kr520xx4",
        },
      };
    function v(a) {
      return {
        adjustment: null,
        availableHeight: null,
        contextSize: null,
        isPositionIndeterminate: !1,
        position: a,
      };
    }
    function w(a, b) {
      var c;
      switch (b.type) {
        case "determine_direction":
          if (
            a.position !== b.position ||
            a.availableHeight !== b.availableHeight
          )
            return babelHelpers["extends"]({}, a, {
              availableHeight: b.availableHeight,
              position: b.position,
            });
          break;
        case "reposition":
          if (
            a.adjustment !== b.adjustment ||
            ((c = a.contextSize) == null ? void 0 : c.height) !==
              ((c = b.contextSize) == null ? void 0 : c.height) ||
            ((c = a.contextSize) == null ? void 0 : c.width) !==
              ((c = b.contextSize) == null ? void 0 : c.width)
          )
            return babelHelpers["extends"]({}, a, {
              adjustment: b.adjustment,
              contextSize: b.contextSize,
              isPositionIndeterminate: !1,
            });
          break;
        case "position_indeterminate":
          return babelHelpers["extends"]({}, a, {
            isPositionIndeterminate: !0,
          });
        case "position_changed":
          if (a.position !== b.position)
            return babelHelpers["extends"]({}, a, { position: b.position });
          break;
      }
      return a;
    }
    function a(a, b) {
      var e = a.align,
        f = e === void 0 ? "start" : e;
      e = a.disableAutoAlign;
      var g = e === void 0 ? !1 : e;
      e = a.children;
      var x = a.containFocus;
      x = x === void 0 ? !1 : x;
      var y = a.customContainer;
      y = y === void 0 ? c("BaseContextualLayerDefaultContainer.react") : y;
      var z = a.disableAutoFlip,
        A = z === void 0 ? !1 : z;
      z = a.hidden;
      z = z === void 0 ? !1 : z;
      var B = a.imperativeRef,
        C = a.onIndeterminatePosition,
        D = a.presencePayload,
        E = a.position,
        F = E === void 0 ? "below" : E;
      E = a.xstyle;
      var G = babelHelpers.objectWithoutPropertiesLoose(a, [
        "align",
        "disableAutoAlign",
        "children",
        "containFocus",
        "customContainer",
        "disableAutoFlip",
        "hidden",
        "imperativeRef",
        "onIndeterminatePosition",
        "presencePayload",
        "position",
        "xstyle",
      ]);
      a = n(w, F, v);
      var H = a[0],
        I = H.adjustment,
        J = H.availableHeight,
        K = H.contextSize,
        L = H.isPositionIndeterminate,
        M = H.position,
        N = a[1],
        O = j(c("BaseContextualLayerAnchorRootContext")),
        P = j(c("BaseScrollableAreaContext")),
        Q = j(c("BaseViewportMarginsContext"));
      H = j(c("HiddenSubtreeContext"));
      a = H.hidden;
      var R = a || z,
        S = o(null),
        T = o(null),
        U = i(
          function () {
            return G.context_DEPRECATED == null && G.contextRef != null
              ? G.contextRef.current
              : G.context_DEPRECATED;
          },
          [G.contextRef, G.context_DEPRECATED]
        ),
        V = i(
          function () {
            var a = document.documentElement;
            if (a == null) return;
            return {
              bottom: a.clientHeight - Q.bottom - r,
              left: Q.left + r,
              right: a.clientWidth - Q.right - r,
              top: Q.top + r,
            };
          },
          [Q.bottom, Q.left, Q.right, Q.top]
        ),
        W = i(
          function () {
            var a = S.current,
              b = U(),
              c = V();
            if (a == null || b == null || c == null) return;
            b = p(b);
            a = p(a);
            var d = a.bottom - a.top;
            a = a.right - a.left;
            var e = t ? "start" : "end",
              f = t ? "end" : "start",
              g = M,
              h = null;
            A ||
              (M === "above" || M === "below"
                ? M === "above" && b.top - d < c.top && b.bottom + d < c.bottom
                  ? (g = "below")
                  : M === "below" &&
                    b.bottom + d > c.bottom &&
                    b.top - d > c.top &&
                    (g = "above")
                : (M === "start" || M === "end") &&
                  (M === f && b.left - a < c.left && b.right + a < c.right
                    ? (g = e)
                    : M === e &&
                      b.right + a > c.right &&
                      b.left - a > c.left &&
                      (g = f)));
            (g === "above" || g === "below") &&
              (h = g === "above" ? b.top - c.top : c.bottom - b.bottom);
            T.current = { height: d, width: a };
            N({ availableHeight: h, position: g, type: "determine_direction" });
          },
          [U, V, A, M]
        ),
        X = i(
          function () {
            var a = document.documentElement,
              b = O.current,
              d = V(),
              e = U();
            if (a == null || b == null || d == null || e == null) return;
            var h = q(b);
            if (h == null) return;
            b = c("isElementFixedOrSticky")(b);
            b = !b && e.nodeType === 1 && c("isElementFixedOrSticky")(e);
            e = P.map(function (a) {
              return a.getDOMNode();
            })
              .filter(Boolean)
              .filter(function (a) {
                return h.contains(a);
              })
              .reduce(function (a, b) {
                return a != null ? s(a, p(b)) : null;
              }, p(e));
            if (e == null || (e.left === 0 && e.right === 0)) {
              N({ type: "position_indeterminate" });
              C && C();
              return;
            }
            a = b
              ? {
                  bottom: a.clientHeight,
                  left: 0,
                  right: a.clientWidth,
                  top: 0,
                }
              : p(h);
            b = c("calculateBaseContextualLayerPosition_DEPRECATED")({
              align: f,
              contextRect: e,
              contextualLayerSize: g ? null : T.current,
              fixed: b,
              offsetRect: a,
              position: M,
              screenRect: d,
            });
            a = b.adjustment;
            d = b.style;
            b = S.current;
            if (b != null) {
              var i = Object.keys(d);
              for (var j = 0; j < i.length; j++) {
                var k = i[j],
                  l = d[k];
                l != null
                  ? b.style.setProperty(k, l)
                  : b.style.removeProperty(k);
              }
            }
            N({
              adjustment: a,
              contextSize: {
                height: e.bottom - e.top,
                width: e.right - e.left,
              },
              type: "reposition",
            });
          },
          [O, V, U, P, g, f, M, C]
        );
      l(
        B,
        function () {
          return {
            reposition: function (a) {
              a = a || {};
              a = a.autoflip;
              a = a === void 0 ? !1 : a;
              a && W();
              X();
            },
          };
        },
        [X, W]
      );
      var Y = c("useResizeObserver")(function (a) {
          var b = a.height;
          a = a.width;
          T.current = { height: b, width: a };
        }),
        Z = o(F);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          F !== Z.current &&
            (N({ position: F, type: "position_changed" }), W(), X()),
            (Z.current = F);
        },
        [F, X, W]
      );
      var $ = i(
        function (a) {
          (S.current = a), a != null && !R && (W(), X());
        },
        [R, X, W]
      );
      k(
        function () {
          if (R) return;
          var a = function () {
            W(), X();
          };
          window.addEventListener("resize", a);
          return function () {
            window.removeEventListener("resize", a);
          };
        },
        [R, X, W]
      );
      k(
        function () {
          if (R) return;
          var a = P.map(function (a) {
            return a.getDOMNode();
          }).filter(Boolean);
          if (a.length > 0) {
            a.forEach(function (a) {
              return a.addEventListener("scroll", X, { passive: !0 });
            });
            return function () {
              a.forEach(function (a) {
                return a.removeEventListener("scroll", X, { passive: !0 });
              });
            };
          }
          if (window.addEventListener == null) return;
          window.addEventListener("scroll", X, { passive: !0 });
          return function () {
            window.removeEventListener("scroll", X, { passive: !0 });
          };
        },
        [R, X, P]
      );
      H = m(
        function () {
          return c("mergeRefs")($, Y, b);
        },
        [$, Y, b]
      );
      a = m(
        function () {
          return { align: f, position: M };
        },
        [f, M]
      );
      B = z || L;
      return h.jsx(c("BasePortal.react"), {
        target: O.current,
        children: h.jsx(y, {
          hidden: z || L,
          presencePayload: D,
          ref: H,
          testid: void 0,
          xstyle: [u.root, E],
          children: h.jsx(d("FocusRegion.react").FocusRegion, {
            autoFocusQuery:
              !B && x
                ? d("focusScopeQueries").headerFirstTabbableSecondScopeQuery
                : null,
            autoRestoreFocus: !B,
            containFocusQuery:
              !B && x ? d("focusScopeQueries").tabbableScopeQuery : null,
            recoverFocusQuery: B
              ? null
              : d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
            children: h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
              children: h.jsx(
                c("BaseContextualLayerContextSizeContext").Provider,
                {
                  value: K,
                  children: h.jsx(
                    c("BaseContextualLayerLayerAdjustmentContext").Provider,
                    {
                      value: I,
                      children: h.jsx(
                        c("BaseContextualLayerAvailableHeightContext").Provider,
                        {
                          value: J,
                          children: h.jsx(
                            c("BaseContextualLayerOrientationContext").Provider,
                            {
                              value: a,
                              children: h.jsx(
                                c("BaseLinkNestedPressableContext").Provider,
                                {
                                  value: !1,
                                  children: h.jsx(
                                    c("CometTextContext").Provider,
                                    { value: null, children: e }
                                  ),
                                }
                              ),
                            }
                          ),
                        }
                      ),
                    }
                  ),
                }
              ),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "BaseStyledButton.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "CometPressable.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = 0.96,
      k = 10,
      l = {
        button: {
          boxSizing: "rq0escxv",
          display: "pq6dq46d",
          flexDirection: "cbu4d94t",
          justifyContent: "taijpn5t",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        content: {
          borderTopStartRadius: "kt9q3ron",
          borderTopEndRadius: "ak7q8e6j",
          borderBottomEndRadius: "isp2s0ed",
          borderBottomStartRadius: "ri5dt5u2",
          borderTopWidth: "rt8b4zig",
          borderEndWidth: "n8ej3o3l",
          borderBottomWidth: "agehan2d",
          borderStartWidth: "sk4xxmp2",
          boxSizing: "rq0escxv",
          paddingEnd: "d1544ag0",
          paddingStart: "tw6a2znq",
        },
        disabled: { backgroundColor: "c98fg2ug" },
        item: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexShrink: "pfnyh3mw",
          marginEnd: "j5wkysh0",
          marginStart: "hytbnt81",
        },
        offset: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          marginEnd: "c4xchbtz",
          marginStart: "by2jbhx6",
          width: "a0jftqn4",
        },
        paddingWide: { paddingEnd: "tkv8g59h", paddingStart: "fl8dtwsd" },
      };
    function a(a, b) {
      var d = a.addOnEnd,
        e = a.addOnStart,
        f = a.content,
        g = a.contentXstyle,
        m = a.disabled,
        n = m === void 0 ? !1 : m,
        o = a.icon;
      m = a.linkProps;
      var p = a.onFocusIn,
        q = a.onFocusOut,
        r = a.onHoverIn,
        s = a.onHoverOut,
        t = a.onPress,
        u = a.onPressIn,
        v = a.onPressOut,
        w = a.overlayHoveredStyle,
        x = a.overlayPressedStyle,
        y = a.padding,
        z = y === void 0 ? "normal" : y;
      y = a.suppressHydrationWarning;
      y = y === void 0 ? !1 : y;
      var A = a.testid;
      A = a.testOnly_pressed;
      A = A === void 0 ? !1 : A;
      var B = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "addOnEnd",
        "addOnStart",
        "content",
        "contentXstyle",
        "disabled",
        "icon",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressIn",
        "onPressOut",
        "overlayHoveredStyle",
        "overlayPressedStyle",
        "padding",
        "suppressHydrationWarning",
        "testid",
        "testOnly_pressed",
        "xstyle",
      ]);
      var C = i(null),
        D = function (a) {
          if (C.current != null) {
            var b = C.current;
            b.style.transform =
              "scale(" + Math.max(j, (b.offsetWidth - k) / b.offsetWidth) + ")";
          }
          typeof u === "function" && u(a);
        },
        E = function (a) {
          if (C.current != null) {
            var b = C.current;
            b.style.transform = "none";
          }
          typeof v === "function" && v(a);
        };
      B = c("stylex").compose(B);
      var F = B.alignSelf,
        G = B.flexGrow,
        H = B.flexShrink,
        I = B.height,
        J = B.justifySelf,
        K = B.margin,
        L = B.marginBottom,
        M = B.marginEnd,
        N = B.marginStart,
        O = B.marginTop,
        P = B.maxHeight,
        Q = B.maxWidth,
        R = B.minHeight,
        S = B.minWidth,
        T = B.position,
        U = B.width,
        V = babelHelpers.objectWithoutPropertiesLoose(B, [
          "alignSelf",
          "flexGrow",
          "flexShrink",
          "height",
          "justifySelf",
          "margin",
          "marginBottom",
          "marginEnd",
          "marginStart",
          "marginTop",
          "maxHeight",
          "maxWidth",
          "minHeight",
          "minWidth",
          "position",
          "width",
        ]);
      B = function (a) {
        a = a.overlay;
        return h.jsxs(c("BaseRow.react"), {
          align: "center",
          ref: C,
          verticalAlign: "center",
          xstyle: [
            l.content,
            z === "wide" && l.paddingWide,
            n && l.disabled,
            V,
            g,
          ],
          children: [
            h.jsxs("div", {
              className: c("stylex")(l.offset),
              children: [
                e != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: l.item,
                      children: e,
                    })
                  : o != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: l.item,
                      children: o,
                    })
                  : null,
                f != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: l.item,
                      children: f,
                    })
                  : null,
                d != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: l.item,
                      children: d,
                    })
                  : null,
              ],
            }),
            a,
          ],
        });
      };
      a = h.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"]({}, a, {
          disabled: n,
          display: "inline",
          linkProps: m,
          onFocusIn: p,
          onFocusOut: q,
          onHoverIn: r,
          onHoverOut: s,
          onPress: t,
          onPressIn: D,
          onPressOut: E,
          overlayHoveredStyle: w,
          overlayPressedStyle: x,
          ref: b,
          suppressHydrationWarning: y,
          testOnly_pressed: A,
          testid: void 0,
          xstyle: [
            l.button,
            {
              alignSelf: F,
              flexGrow: G,
              flexShrink: H,
              height: I,
              justifySelf: J,
              margin: K,
              marginBottom: L,
              marginEnd: M,
              marginStart: N,
              marginTop: O,
              maxHeight: P,
              maxWidth: Q,
              minHeight: R,
              minWidth: S,
              position: T,
              width: U,
            },
          ],
          children: B,
        })
      );
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseTooltipTargetWrapper.react",
  ["FocusWithinHandler.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a, b) {
      var d = a.children,
        e = a.forceInlineDisplay,
        f = a.onHide,
        g = a.onShow;
      a = a.tooltipIdentifier;
      var l = k(!1),
        m = l[0];
      l = l[1];
      var n = k(!1),
        o = n[0];
      n = n[1];
      var p = m && o,
        q = j(p);
      i(
        function () {
          q.current !== p && (p ? g() : f()), (q.current = p);
        },
        [f, g, p]
      );
      return h.jsx("span", {
        "aria-describedby": a,
        className: c("stylex").dedupe(
          {
            "align-content-1": "tojvnm2t",
            "align-items-1": "a6sixzi8",
            "align-self-1": "abs2jz4q",
            "display-1": "a8s20v7p",
            "flex-basis-1": "t1p8iaqh",
            "flex-direction-1": "k5wvi7nf",
            "flex-grow-1": "q3lfd5jv",
            "flex-shrink-1": "pk4s997a",
            "height-1": "bipmatt0",
            "justify-content-1": "cebpdrjk",
            "max-height-1": "qowsmv63",
            "max-width-1": "owwhemhu",
            "min-height-1": "dp1hu0rb",
            "min-width-1": "dhp61c6y",
            "width-1": "iyyx5f41",
          },
          e === !0 ? { "display-1": "pq6dq46d" } : null
        ),
        "data-testid": void 0,
        onPointerEnter: g,
        onPointerLeave: f,
        onPointerUp: f,
        ref: b,
        children: h.jsx(c("FocusWithinHandler.react"), {
          onFocusChange: l,
          onFocusVisibleChange: n,
          children: d,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "useDelayedState",
  ["clearTimeout", "emptyFunction", "react", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      a = k(a);
      var b = a[0],
        d = a[1],
        e = j(null);
      i(function () {
        return function () {
          return c("clearTimeout")(e.current);
        };
      }, []);
      a = h(function (a, b, f) {
        b === void 0 && (b = 0),
          f === void 0 && (f = c("emptyFunction")),
          c("clearTimeout")(e.current),
          (e.current = null),
          b === 0
            ? (d(a), f(a))
            : (e.current = c("setTimeout")(function () {
                d(a), f(a), (e.current = null);
              }, b));
      }, []);
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseTooltipGroup.react",
  [
    "BaseTooltipTargetWrapper.react",
    "react",
    "recoverableViolation",
    "useCometUniqueID",
    "useDelayedState",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useMemo,
      l = e.useRef,
      m = e.useState,
      n = h.createContext(null);
    function a(a) {
      var b = a.children;
      a = a.tooltipImpl;
      var d = c("useDelayedState")(!1),
        e = d[0],
        f = d[1];
      d = m(null);
      var g = d[0],
        i = d[1],
        j = c("useCometUniqueID")(),
        l = g != null && g.contentKey != null ? g.contentKey : null;
      d = k(
        function () {
          return {
            activeContentKey: l,
            isVisible: e,
            onHide: function (a, b) {
              f(!1, a, b);
            },
            onShow: function (a, b, c) {
              i(a), f(!0, b, c);
            },
            tooltipIdentifier: j,
          };
        },
        [l, e, j, f]
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(n.Provider, { value: d, children: b }),
          g != null
            ? h.jsx(
                a,
                babelHelpers["extends"]({}, g, {
                  id: e ? j : void 0,
                  isVisible: e,
                })
              )
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var o = 0;
    function p() {
      return "tooltip-" + o++;
    }
    function b(a) {
      var b = a.children,
        d = a.forceInlineDisplay,
        e = a.hideDelayMs,
        f = a.onVisibilityChange,
        g = a.showDelayMs,
        k = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "forceInlineDisplay",
          "hideDelayMs",
          "onVisibilityChange",
          "showDelayMs",
        ]),
        m = c("useStable")(p),
        o = l(null);
      a = j(n);
      var q = a || {},
        r = q.activeContentKey,
        s = q.isVisible,
        t = q.onHide,
        u = q.onShow;
      q = q.tooltipIdentifier;
      var v = i(
          function () {
            u &&
              u(
                babelHelpers["extends"]({ contentKey: m, contextRef: o }, k),
                g,
                f
              );
          },
          [u, m, k, g, f]
        ),
        w = i(
          function () {
            t && t(e, f);
          },
          [e, t, f]
        );
      a == null &&
        c("recoverableViolation")(
          "BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ",
          "comet_ui"
        );
      return h.jsx(c("BaseTooltipTargetWrapper.react"), {
        forceInlineDisplay: d,
        onHide: w,
        onShow: v,
        ref: o,
        tooltipIdentifier: s && r === m ? q : void 0,
        children: b,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.Context = n;
    g.Container = a;
    g.Child = b;
  },
  98
);
__d(
  "BaseTooltip.react",
  [
    "BaseTooltipGroup.react",
    "BaseTooltipTargetWrapper.react",
    "react",
    "useCometUniqueID",
    "useDelayedState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useRef,
      l = 50,
      m = 300;
    function n(a) {
      var b = a.children,
        d = a.delayTooltipMs,
        e = d === void 0 ? m : d;
      d = a.forceInlineDisplay;
      var f = a.tooltipImpl,
        g = a.onVisibilityChange;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "delayTooltipMs",
        "forceInlineDisplay",
        "tooltipImpl",
        "onVisibilityChange",
      ]);
      var j = c("useDelayedState")(!1),
        l = j[0],
        n = j[1];
      j = k(null);
      var o = c("useCometUniqueID")(),
        p = i(
          function () {
            n(!0, e, g);
          },
          [e, g, n]
        ),
        q = i(
          function () {
            n(!1, 0, g);
          },
          [g, n]
        );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("BaseTooltipTargetWrapper.react"), {
            forceInlineDisplay: d,
            onHide: q,
            onShow: p,
            ref: j,
            tooltipIdentifier: l ? o : void 0,
            children: b,
          }),
          h.jsx(
            f,
            babelHelpers["extends"]({}, a, {
              contentKey: null,
              contextRef: j,
              id: l ? o : void 0,
              isVisible: l,
            })
          ),
        ],
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var b = j(d("BaseTooltipGroup.react").Context);
      if (b != null) {
        b = a.delayTooltipMs;
        b = b === void 0 ? m : b;
        a.tooltipImpl;
        var c = babelHelpers.objectWithoutPropertiesLoose(a, [
          "delayTooltipMs",
          "tooltipImpl",
        ]);
        return h.jsx(
          d("BaseTooltipGroup.react").Child,
          babelHelpers["extends"]({}, c, { hideDelayMs: l, showDelayMs: b })
        );
      }
      return h.jsx(n, babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTooltipImpl.react",
  [
    "CometPlaceholder.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometTooltipDeferredImpl.react"
        ).__setRef("CometTooltipImpl.react")
      );
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: h.jsx(i, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTooltip.react",
  ["BaseTooltip.react", "CometTooltipImpl.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.delayMs;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["delayMs"]);
      return h.jsx(
        c("BaseTooltip.react"),
        babelHelpers["extends"]({}, a, {
          delayTooltipMs: b,
          tooltipImpl: c("CometTooltipImpl.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTheme",
  ["BaseThemeDisplayModeContext", "react", "useCurrentDisplayMode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = { dark: "__fb-dark-mode ", light: "__fb-light-mode " };
    function a(a) {
      var b = c("useCurrentDisplayMode")(),
        d;
      a === "invert" ? (d = b === "light" ? "dark" : "light") : (d = a);
      b = i(
        function () {
          return function (a) {
            a = a.children;
            return h.jsx(c("BaseThemeDisplayModeContext").Provider, {
              value: d,
              children: a,
            });
          };
        },
        [d]
      );
      return [b, { theme: j[d] }];
    }
    g["default"] = a;
  },
  98
);
__d(
  "TetraButton.react",
  [
    "BaseStyledButton.react",
    "CometTooltip.react",
    "TetraIcon.react",
    "TetraText.react",
    "gkx",
    "mergeRefs",
    "react",
    "useCometTheme",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = {
        contentDisabled: { opacity: "akz8cqyu" },
        disabled: { backgroundColor: "c98fg2ug" },
        fdsOverrideBlack: { backgroundColor: "tqsryivl" },
        fdsOverrideCollaborativePostCTA: {
          backgroundColor: "q2y6ezfg",
          mixBlendMode: "br5bkhab",
        },
        fdsOverrideNegative: { backgroundColor: "l44iypv3" },
        fdsOverridePositive: { backgroundColor: "jllm4f4h" },
        overlay: { backgroundColor: "q2y6ezfg" },
        overlayDeemphasized: { backgroundColor: "cubx1xtm" },
        overlayDeemphasizedOverlayPressed: { backgroundColor: "cubx1xtm" },
        overlayDisabled: { backgroundColor: "nc12k21y" },
        overlayOverlayPressed: { backgroundColor: "r898ja9m" },
        paddingIconOnly: { paddingEnd: "hv4rvrfc", paddingStart: "dati1w0a" },
        primary: { backgroundColor: "s1i5eluu" },
        primaryDeemphasized: { backgroundColor: "oo1teu6h" },
        primaryDeemphasizedOverlayPressed: { backgroundColor: "l4sirx1s" },
        primaryExperiment: { backgroundColor: "synb87wq" },
        primaryOverlayPressed: { backgroundColor: "k19f6yf2" },
        secondary: { backgroundColor: "tdjehn4e" },
        secondaryDeemphasized: { backgroundColor: "g5ia77u1" },
        secondaryDeemphasizedOverlayPressed: { backgroundColor: "l4sirx1s" },
        secondaryOverlayPressed: { backgroundColor: "k19f6yf2" },
        sizeLarge: { height: "qypqp5cg" },
        sizeMedium: { height: "tv7at329" },
      },
      k = {
        iconColor: "white",
        overlayPressedStyle: j.primaryOverlayPressed,
        textColor: "white",
        ":deemphasized": {
          iconColor: "highlight",
          overlayPressedStyle: j.primaryDeemphasizedOverlayPressed,
          textColor: "highlight",
        },
        ":disabled": { iconColor: "disabled", textColor: "disabled" },
      },
      l = {
        iconColor: "primary",
        overlayPressedStyle: j.secondaryOverlayPressed,
        textColor: "secondary",
        ":deemphasized": {
          iconColor: "highlight",
          overlayPressedStyle: j.secondaryDeemphasizedOverlayPressed,
          textColor: "highlight",
        },
        ":disabled": { iconColor: "disabled", textColor: "disabled" },
      },
      m = {
        iconColor: "primary",
        overlayPressedStyle: j.overlayOverlayPressed,
        textColor: "primary",
        ":deemphasized": {
          iconColor: "white",
          overlayPressedStyle: j.overlayDeemphasizedOverlayPressed,
          textColor: "white",
        },
        ":disabled": { iconColor: "disabled", textColor: "disabled" },
      };
    function n(a) {
      switch (a) {
        case "fdsOverride_collaborativePostCTA":
        case "secondary":
          return l;
        case "overlay":
          return m;
        case "primary":
        default:
          return k;
      }
    }
    function o(a, b) {
      var c = b.disabled;
      b = b.reduceEmphasis;
      a = n(a);
      return (
        (c ? a[":disabled"] : null) || (b ? a[":deemphasized"] : null) || a
      );
    }
    function a(a, b) {
      var d = a.addOnPrimary,
        e = a.addOnSecondary,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.icon,
        k = a.label,
        l = a.labelIsHidden;
      l = l === void 0 ? !1 : l;
      var m = a.linkProps,
        n = a.onFocusIn,
        p = a.onFocusOut,
        q = a.onHoverIn,
        r = a.onHoverOut,
        s = a.onPress,
        t = a.onPressIn,
        u = a.onPressOut,
        v = a.padding;
      v = v === void 0 ? "normal" : v;
      var w = a.reduceEmphasis;
      w = w === void 0 ? !1 : w;
      var x = a.size;
      x = x === void 0 ? "medium" : x;
      var y = a.suppressHydrationWarning;
      y = y === void 0 ? !1 : y;
      var z = a.testid;
      z = a.testOnly_pressed;
      z = z === void 0 ? !1 : z;
      var A = a.tooltip,
        B = a.type;
      B = B === void 0 ? "primary" : B;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "addOnPrimary",
        "addOnSecondary",
        "disabled",
        "icon",
        "label",
        "labelIsHidden",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressIn",
        "onPressOut",
        "padding",
        "reduceEmphasis",
        "size",
        "suppressHydrationWarning",
        "testid",
        "testOnly_pressed",
        "tooltip",
        "type",
      ]);
      var C = o(B, { disabled: f, reduceEmphasis: w }),
        D = C.iconColor,
        E = C.overlayPressedStyle;
      C = C.textColor;
      var F = i(null),
        G = c("useCometTheme")("light"),
        H = G[0];
      G = G[1];
      d = h.jsx(
        c("BaseStyledButton.react"),
        babelHelpers["extends"]({}, a, {
          addOnEnd: e,
          addOnStart: d,
          "aria-label": (e = a["aria-label"]) != null ? e : k,
          content: l
            ? null
            : h.jsx(c("TetraText.react"), {
                color: C,
                numberOfLines: 1,
                type: x === "large" ? "button1" : "button2",
                children: k,
              }),
          contentXstyle: [
            B === "overlay" && f && j.contentDisabled,
            B === "overlay" && G,
            x === "medium" && j.sizeMedium,
            x === "large" && j.sizeLarge,
            g != null && l && j.paddingIconOnly,
          ],
          disabled: f,
          icon:
            g && h.jsx(c("TetraIcon.react"), { color: D, icon: g, size: 16 }),
          linkProps: m,
          onFocusIn: n,
          onFocusOut: p,
          onHoverIn: q,
          onHoverOut: r,
          onPress: s,
          onPressIn: t,
          onPressOut: u,
          overlayPressedStyle: E,
          padding: v,
          ref: c("mergeRefs")(F, b),
          suppressHydrationWarning: y,
          testOnly_pressed: z,
          testid: void 0,
          xstyle: [
            c("gkx")("1738831")
              ? B === "primary" && j.primaryExperiment
              : B === "primary" && j.primary,
            B === "primary" && w && j.primaryDeemphasized,
            B === "secondary" && j.secondary,
            B === "secondary" && w && j.secondaryDeemphasized,
            B === "fdsOverride_black" && j.fdsOverrideBlack,
            B === "fdsOverride_negative" && j.fdsOverrideNegative,
            B === "fdsOverride_positive" && j.fdsOverridePositive,
            B === "fdsOverride_collaborativePostCTA" &&
              j.fdsOverrideCollaborativePostCTA,
            B === "overlay" && j.overlay,
            B === "overlay" && w && j.overlayDeemphasized,
            f && j.disabled,
            B === "overlay" && f && j.overlayDisabled,
          ],
        })
      );
      a = B === "overlay" ? h.jsx(H, { children: d }) : d;
      return A != null
        ? h.jsx(c("CometTooltip.react"), {
            position: "above",
            tooltip: A,
            children: a,
          })
        : a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometLink.react",
  [
    "BaseLink.react",
    "CometTextContext",
    "CometTextTypography",
    "isCometRouterUrl",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        disabled: {
          color: "erlsw9ld",
          ":hover": { textDecoration: "p8dawk7l" },
        },
        root: { color: "gmql0nx0", ":hover": { textDecoration: "gpro0wi8" } },
      },
      k = {
        blueLink: { color: "py34i1dx" },
        disabled: { color: "erlsw9ld" },
        highlight: { color: "q66pz984" },
        negative: { color: "jdix4yx3" },
        positive: { color: "g5o1ygfq" },
        primary: { color: "oo9gr5id" },
        secondary: { color: "m9osqain" },
        tertiary: { color: "pipptul6" },
        white: { color: "ljqsnud1" },
      },
      l = {
        bold: { fontWeight: "hnhda86s" },
        medium: { fontWeight: "ekzkrbhg" },
        normal: { fontWeight: "b1v8xokw" },
        semibold: { fontWeight: "lrazzd5p" },
      },
      m = {
        block: { display: "a8c37x1j" },
        "inline-block": { display: "q9uorilb" },
      };
    function a(a, b) {
      var d = a.color,
        e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.display;
      f = f === void 0 ? "inline" : f;
      var g = a.fbclid,
        p = a.href,
        q = a.lynxMode,
        r = a.role,
        s = a.target,
        t = a.weight,
        u = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "color",
        "disabled",
        "display",
        "fbclid",
        "href",
        "lynxMode",
        "role",
        "target",
        "weight",
        "xstyle",
      ]);
      var v = i(c("CometTextContext")),
        w =
          s === "_blank" ||
          (s == null && p != null && p !== "#" && !c("isCometRouterUrl")(p));
      d = (d = d) != null ? d : v != null ? n(v.type, w) : "inherit";
      t = (t = t) != null ? t : v != null ? o(v.type, w) : "inherit";
      v = r == null && (p == null || p === "#") ? "button" : r;
      return h.jsx(
        c("BaseLink.react"),
        babelHelpers["extends"]({}, a, {
          disabled: e,
          display: "inline",
          fbclid: g,
          href: p,
          lynxMode: q,
          ref: b,
          role: v,
          target: w ? "_blank" : s,
          xstyle: [
            j.root,
            d !== "inherit" && k[d],
            t !== "inherit" && l[t],
            e && j.disabled,
            f !== "inline" && m[f],
            u,
          ],
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a, b) {
      switch (a) {
        case "headline3":
        case "headline4":
        case "body1":
        case "body2":
        case "body3":
        case "body4":
          return b ? "blueLink" : "primary";
        case "meta1":
        case "meta2":
        case "meta3":
        case "meta4":
          return b ? "blueLink" : "inherit";
        default:
          return "inherit";
      }
    }
    function o(a, b) {
      if (!b) {
        b = p(a);
        return c("CometTextTypography")[b].fontWeight;
      }
      return "inherit";
    }
    function p(a) {
      switch (a) {
        case "headline3":
          return "headlineEmphasized3";
        case "headline4":
          return "headlineEmphasized4";
        case "body1":
          return "bodyLink1";
        case "body2":
          return "bodyLink2";
        case "body3":
          return "bodyLink3";
        case "body4":
          return "bodyLink4";
        default:
          return a;
      }
    }
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "useCometDisplayTimingTrackerForInteraction",
  ["cr:1791501", "performanceAbsoluteNow", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useRef;
    function a(a, d, e) {
      d === void 0 && (d = !1);
      var f = i(null);
      return h(
        function (g) {
          if (a != null && f.current !== g) {
            f.current = g;
            if (g && b("cr:1791501")) {
              var h = c("performanceAbsoluteNow")(),
                i = b("cr:1791501").getCurrentVCTraces();
              if (e != null) {
                var j = i.get(e);
                j && j.addMountPoint(g, h, a);
              } else
                i.forEach(function (b) {
                  b.interactionType === "INTERACTION" &&
                    b.addMountPoint(g, h, a);
                });
              d ||
                i.forEach(function (a) {
                  a.interactionType !== "INTERACTION" && a.excludeElement(g);
                });
            }
          }
        },
        [e, d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionSourceContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(10);
    g["default"] = b;
  },
  98
);
__d(
  "useFeedImageErrorEventLoggerCbs",
  ["Banzai", "CometInteractionSourceContext", "Random", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef,
      k = 1e3,
      l = function (a) {
        var b = a.result,
          e = a.src;
        a = a.surface;
        d("Random").coinflip(k) &&
          c("Banzai").post("logger:WWWImageLoadSrcEventLoggerConfig", {
            surface: a,
            src: e,
            result: b,
          });
      };
    function a(a) {
      var b = a.onError,
        d = a.onLoad,
        e = a.src,
        f = j(null);
      a = i(c("CometInteractionSourceContext"));
      var g = a === 3 ? "profile" : a === 0 ? "feed" : null;
      a = h(
        function (a) {
          d != null && d(a);
          if (f.current === e) return;
          typeof e === "string" &&
            (l({ result: "success", src: e, surface: g }), (f.current = e));
        },
        [d, e, g]
      );
      var k = h(
        function (a) {
          b != null && b(a);
          if (f.current === e) return;
          typeof e === "string" &&
            (l({ result: "error", src: e, surface: g }), (f.current = e));
        },
        [b, e, g]
      );
      return g == null || typeof e !== "string"
        ? { _onError: b, _onLoad: d }
        : { _onError: k, _onLoad: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometImage.react",
  [
    "BaseImage.react",
    "CometImageFromIXValue.react",
    "cr:2010754",
    "gkx",
    "mergeRefs",
    "react",
    "useFeedImageErrorEventLoggerCbs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useMemo,
      j = e.useRef,
      k = "1";
    function a(a, d) {
      var e = j(null),
        f = i(
          function () {
            return c("mergeRefs")(e, d);
          },
          [e, d]
        ),
        g = a.alt,
        l = a.onError,
        m = a.onLoad,
        n = a.src,
        o = a.testid;
      o = babelHelpers.objectWithoutPropertiesLoose(a, [
        "alt",
        "onError",
        "onLoad",
        "src",
        "testid",
      ]);
      a = c("useFeedImageErrorEventLoggerCbs")({
        onError: l,
        onLoad: m,
        src: n,
      });
      l = a._onError;
      m = a._onLoad;
      a = c("gkx")("1690028") ? k : void 0;
      function p(a, c, d, f, g, h) {
        b("cr:2010754") &&
          c === "mount" &&
          e.current != null &&
          typeof n === "string" &&
          b("cr:2010754").trackImagePerf(e.current, h, n, {
            mutationType: "reactCommit",
          });
      }
      if (typeof n === "string") {
        o = h.jsx(
          c("BaseImage.react"),
          babelHelpers["extends"]({}, o, {
            alt: g,
            elementtiming: a,
            onError: l,
            onLoad: m,
            ref: f,
            src: n,
            testid: void 0,
          })
        );
        return c("gkx")("1690028")
          ? h.jsx(h.Profiler, { id: k, onRender: p, children: o })
          : o;
      }
      return h.jsx(c("CometImageFromIXValue.react"), {
        alt: g,
        ref: f,
        source: n,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = h.forwardRef(a);
    g["default"] = d;
  },
  98
);
__d(
  "useGlobalEventListener",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = {
        fullscreenchange: [
          "webkitfullscreenchange",
          "mozfullscreenchange",
          "MSFullscreenChange",
          "fullscreenchange",
        ],
      };
    a = function (a, b, c) {
      h(
        function () {
          if (b != null) {
            var d,
              e = (d = i[a]) != null ? d : a;
            window.addEventListener(e, b, c);
            return function () {
              window.removeEventListener(e, b, c);
            };
          }
        },
        [b, a, c]
      );
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometGlobalKeyCommandWidget",
  ["createKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a;
  },
  98
);
__d(
  "getCometKey",
  ["CometKeys"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        8: "Backspace",
        13: "Enter",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        46: "Delete",
      },
      i = new Set(Object.values(c("CometKeys")));
    function a(a) {
      var b = a.key;
      a = a.which || a.keyCode;
      ((a >= 48 && a <= 57) || (a >= 65 && a <= 90)) &&
        (b = String.fromCharCode(a));
      a >= 96 && a <= 105 && (b = String.fromCharCode(a - 48));
      if (b != null && b !== "") {
        b = b.toLowerCase();
        if (i.has(b)) return b;
      }
      if (Object.prototype.hasOwnProperty.call(h, a)) {
        b = h[a].toLowerCase();
        if (i.has(b)) return b;
      }
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getKeyCommand",
  ["UserAgent", "createKeyCommand", "getCometKey"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("getCometKey")(a);
      if (b === void 0 || b === null) return null;
      var d = !1;
      c("UserAgent").isPlatform("Mac OS X")
        ? a.metaKey && (d = !0)
        : a.ctrlKey && (d = !0);
      d = { alt: a.altKey, command: d, key: b, shift: a.shiftKey };
      return c("createKeyCommand")(d);
    }
    g["default"] = a;
  },
  98
);
__d(
  "applyKeyCommand",
  ["getKeyCommand"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      var f = c("getKeyCommand")(a);
      if (f === void 0 || f === null) return !1;
      b = b;
      while (b !== null && b !== void 0) {
        if (b && b.applyCommand(f, a)) return !0;
        b = b && b.getParent();
      }
      if (d != null && d.applyCommand(f, a)) return !0;
      return e != null && e.applyCommand(f, a) ? !0 : !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getActiveCommands",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d = new Map();
      function e(a) {
        a.forEach(function (a, b) {
          var c = d.get(b);
          if (c) {
            var e = c.every(function (a) {
              return a.shouldStopPropagation === !1;
            });
            e && c.push(a);
          } else d.set(b, [a]);
        });
      }
      a = a;
      while (a !== null && a !== void 0) {
        var f = a && a.getCommandMap();
        e(f);
        a = a && a.getParent();
      }
      b && e(b.getCommandMap());
      c && e(c.getCommandMap());
      return d;
    }
    f["default"] = a;
  },
  66
);
__d(
  "useGetComposingState",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function a() {
      var a = j(!1),
        b = h(
          function (b) {
            a.current = !0;
          },
          [a]
        ),
        c = h(
          function (b) {
            a.current = !1;
          },
          [a]
        );
      i(
        function () {
          window.addEventListener("compositionstart", b);
          window.addEventListener("compositionend", c);
          return function () {
            window.removeEventListener("compositionstart", b),
              window.removeEventListener("compositionend", c);
          };
        },
        [c, b]
      );
      return function (b) {
        return b.isComposing || a.current;
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseKeyCommandListener.react",
  [
    "CometGlobalKeyCommandWidget",
    "CometKeyCommandUtilsContext",
    "ReactDOMComet",
    "applyKeyCommand",
    "getActiveCommands",
    "getKeyCommand",
    "react",
    "recoverableViolation",
    "useGetComposingState",
    "useGlobalEventListener",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      l = b.useRef;
    function m(a, b) {
      var c;
      return function () {
        window.clearTimeout(c), (c = window.setTimeout(a, b));
      };
    }
    var n = 100;
    function a(a) {
      var b = l(null),
        e = l(null),
        f = l(new Set()),
        g = j(c("CometGlobalKeyCommandWidget").Context),
        o = i(
          function (d) {
            if (!a.observersEnabled)
              return {
                getActiveCommands: function () {
                  c("recoverableViolation")(
                    "Key Command observers are not supported in this context",
                    "comet_ax"
                  );
                  return null;
                },
                remove: function () {},
              };
            var h = f.current;
            h.add(d);
            return {
              getActiveCommands: function () {
                return c("getActiveCommands")(e.current, b.current, g);
              },
              remove: function () {
                h["delete"](d);
              },
            };
          },
          [g, a.observersEnabled]
        ),
        p = i(
          function (b) {
            a.observersEnabled &&
              f.current.forEach(function (a) {
                return a({ key: b, type: "triggered" });
              });
          },
          [a.observersEnabled]
        ),
        q = k(
          function () {
            return m(function () {
              a.observersEnabled &&
                f.current.forEach(function (a) {
                  return a({ type: "update" });
                });
            }, n);
          },
          [a.observersEnabled]
        ),
        r = i(
          function (a) {
            var c = b.current !== a;
            b.current = a;
            c && q();
          },
          [q]
        ),
        s = i(
          function (a) {
            var b = e.current !== a;
            e.current = a;
            b && q();
          },
          [q]
        );
      o = l({
        addObserver: o,
        notifyCommandUpdate: q,
        setActiveLayer: r,
        setActiveWrapper: s,
      });
      r = i(
        function () {
          var a = e.current !== null;
          e.current = null;
          a && q();
        },
        [q]
      );
      var t = c("useGetComposingState")();
      s = i(
        function (a) {
          if (t(a)) return;
          d("ReactDOMComet").flushSync(function () {
            var d = c("applyKeyCommand")(a, e.current, b.current, g);
            if (d) {
              d = c("getKeyCommand")(a);
              p(d);
            }
          });
        },
        [t, g, p]
      );
      c("useGlobalEventListener")("keydown", s);
      c("useGlobalEventListener")("keyup", s);
      return h.jsx(c("CometKeyCommandUtilsContext").Provider, {
        value: o.current,
        children: h.jsx("div", { onBlurCapture: r, children: a.children }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometErrorOverlay",
  ["ReactDOMComet", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function h() {
      var a = document.body;
      if (a == null) return null;
      var b = document.createElement("div");
      a.appendChild(b);
      return b;
    }
    function a(a) {
      var b = h();
      if (b != null) {
        var c = function () {
            window.setTimeout(function () {
              e.unmount(), b.remove();
            }, 0);
          },
          e = d("ReactDOMComet").createRoot(b, {
            unstable_concurrentUpdatesByDefault: !0,
            unstable_strictMode: !0,
          });
        a = a(c);
        e.render(a);
        return c;
      }
    }
    g.injectComponent = a;
  },
  98
);
__d(
  "ServerHTML.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.elementRef = h.createRef()),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.render = function () {
        var a = this.props,
          b = a.blob;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["blob"]);
        return typeof b === "string"
          ? h.jsx(
              "div",
              babelHelpers["extends"]({}, a, {
                ref: this.elementRef,
                children: b,
              })
            )
          : h.jsx(
              "div",
              babelHelpers["extends"]({}, a, {
                ref: this.elementRef,
                dangerouslySetInnerHTML: b,
              })
            );
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "CometExceptionDialog.react",
  [
    "fbt",
    "BaseModal.react",
    "CometCardedDialog.react",
    "TetraButton.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.closeButtonText,
        d = a.errorDescription,
        e = a.errorSummary,
        f = a.onClose;
      a = a.withCloseButton;
      a = a === void 0 ? !0 : a;
      return i.jsx(c("BaseModal.react"), {
        stackingBehavior: "above-everything",
        children: i.jsxs(c("CometCardedDialog.react"), {
          onClose: f,
          title: e,
          withCloseButton: a,
          children: [
            i.jsx("div", {
              className: "dati1w0a jbae33se hv4rvrfc bjjx79mm",
              children: i.jsx(c("TetraText.react"), {
                color: "secondary",
                type: "body2",
                children: d,
              }),
            }),
            i.jsx("div", {
              className:
                "gjzvkazv dati1w0a f10w8fjw hv4rvrfc ecm0bbzt cbu4d94t j83agx80 c4hnarmi",
              children: i.jsx(c("TetraButton.react"), {
                label: (e = b) != null ? e : h._("OK"),
                onPress: f,
                testid: void 0,
                type: "primary",
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "OutsideExceptionKeyCommandListener.react",
  [
    "BaseKeyCommandListener.react",
    "CometLayerKeyCommandWrapper.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("BaseKeyCommandListener.react"), {
        observersEnabled: !1,
        children: h.jsx(c("CometLayerKeyCommandWrapper.react"), {
          debugName: "outside exception layer",
          children: a.children,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDisableDarkModeMutation",
  ["CometDisableDarkModeMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h !== void 0 ? h : (h = b("CometDisableDarkModeMutation.graphql"));
    g["default"] = a;
  },
  98
);
__d(
  "CometEnableDarkModeMutation",
  ["CometEnableDarkModeMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h !== void 0 ? h : (h = b("CometEnableDarkModeMutation.graphql"));
    g["default"] = a;
  },
  98
);
__d(
  "CometDarkMode",
  [
    "CometDarkModeSetting",
    "CometDisableDarkModeMutation",
    "CometEnableDarkModeMutation",
    "CometRelay",
    "CometRelayEnvironment",
    "CometStyleXSheet",
    "Env",
    "ExecutionEnvironment",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { product: "COMET" },
      i = c("CometDarkModeSetting").initialSetting,
      j = new Set();
    function a(a) {
      j.add(a);
      return function () {
        j["delete"](a);
      };
    }
    function k(a) {
      i = a;
      var b = l();
      j.forEach(function (a) {
        return a(b);
      });
    }
    function l() {
      if (!c("gkx")("919810") || c("Env").isCometOnMobile === !0) return !1;
      if (i === "UNDECLARED") return !1;
      else return i === "ENABLED";
    }
    function b(a, b) {
      var e = b.onRevert;
      if (!d("ExecutionEnvironment").canUseDOM) return;
      var f = i,
        g = a ? "ENABLED" : "DISABLED";
      if (f === g) return;
      k(g);
      function j(a) {
        a = a.getRoot().getLinkedRecord("viewer");
        if (a == null) return;
        var b = a.getValue("dark_mode_setting", h);
        if (b === g) return;
        a.setValue("dark_mode_setting", g, h);
      }
      d("CometRelay").commitMutation(c("CometRelayEnvironment"), {
        mutation: a
          ? c("CometEnableDarkModeMutation")
          : c("CometDisableDarkModeMutation"),
        onError: function () {
          k(f), e(l());
        },
        optimisticUpdater: j,
        variables: { input: h },
      });
    }
    function m(a, b, c) {
      c ? a.classList.add(b) : a.classList.remove(b);
    }
    function n(a) {
      if (!d("ExecutionEnvironment").canUseDOM) return;
      var b = window.document.documentElement;
      m(b, d("CometStyleXSheet").DARK_MODE_CLASS_NAME, a);
    }
    function e() {
      return i;
    }
    function f() {
      var a = l();
      n(a);
    }
    g.onDarkModeChange = a;
    g.getDarkModePreference = l;
    g.saveDarkModePreference = b;
    g.toggleDarkModeRootClass = n;
    g.getCurrentSetting_FOR_TEST_DO_NOT_USE = e;
    g.initDarkMode = f;
  },
  98
);
__d(
  "LogHistory",
  [],
  function (a, b, c, d, e, f) {
    var g = 500,
      h = {},
      i = [];
    function j(a, b, c, d) {
      var e = d[0];
      if (typeof e !== "string" || d.length !== 1) return;
      i.push({ date: Date.now(), level: a, category: b, event: c, args: e });
      i.length > g && i.shift();
    }
    var k = (function () {
      function a(a) {
        this.category = a;
      }
      var b = a.prototype;
      b.debug = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("debug", this.category, a, c);
        return this;
      };
      b.log = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("log", this.category, a, c);
        return this;
      };
      b.warn = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("warn", this.category, a, c);
        return this;
      };
      b.error = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("error", this.category, a, c);
        return this;
      };
      return a;
    })();
    function a(a) {
      h[a] || (h[a] = new k(a));
      return h[a];
    }
    function b() {
      return i;
    }
    function c() {
      i.length = 0;
    }
    function d(a) {
      return a
        .map(function (a) {
          var b = /\d\d:\d\d:\d\d/.exec(new Date(a.date).toString());
          return [b && b[0], a.level, a.category, a.event, a.args].join(" | ");
        })
        .join("\n");
    }
    f.getInstance = a;
    f.getEntries = b;
    f.clearEntries = c;
    f.formatEntries = d;
  },
  66
);
__d(
  "CometRouteCache",
  ["normalizeCometRouterUrl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function a(a, b) {
      a = c("normalizeCometRouterUrl")(a);
      h[a] =
        (b == null ? void 0 : b.prefetchable) === !1
          ? { type: "nonprefetchable_route", url: b.url }
          : b;
    }
    function b(a) {
      a = c("normalizeCometRouterUrl")(a);
      return h[a];
    }
    function d(a) {
      Object.keys(h).forEach(function (b) {
        b.startsWith(a) && delete h[b];
      });
    }
    e = null;
    g.install = a;
    g.getRoute = b;
    g.invalidatePath = d;
    g.dump = e;
  },
  98
);
__d(
  "buildCometRouteFromDefinition",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      return babelHelpers["extends"]({}, a, {
        params: c,
        routePath: d,
        type: "valid_route",
        url: b,
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "buildRouteParams",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      return Object.keys(a).reduce(function (d, e) {
        var f = a[e];
        if (f != null && (c == null || f[c] === !0)) {
          var h,
            i = (h = g(b[e], f.coercibleType)) != null ? h : f["default"];
          d[e] = i;
          f.legacyNames.forEach(function (a) {
            d[a] = i;
          });
        }
        return d;
      }, {});
    }
    function g(a, b) {
      if (a == null) return null;
      switch (b) {
        case "BOOL":
          if (typeof a === "boolean") return a;
          b = String(a).toLowerCase();
          return b === "0" || b === "false" ? !1 : Boolean(a);
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "normalizeCometRouterConstUri",
  ["ConstUriUtils", "isCometRouterUrl", "memoizeStringOnly"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("memoizeStringOnly")(function (a) {
      if (!c("isCometRouterUrl")(a)) return a;
      var b = d("ConstUriUtils").getUri(a);
      b != null && (b = b.getUnqualifiedUri());
      b != null && (b = b.stripTrailingSlash());
      b != null &&
        !b.getPath().startsWith("/") &&
        (b = b.setPath("/" + b.getPath()));
      return b != null ? b.toString() : a;
    });
    g["default"] = a;
  },
  98
);
__d(
  "CometRouteMapper",
  [
    "ConstUriUtils",
    "buildCometRouteFromDefinition",
    "buildRouteParams",
    "normalizeCometRouterConstUri",
    "recoverableViolation",
    "stableStringify",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    f = function (a) {
      return c("normalizeCometRouterConstUri")(a.getPath());
    };
    function i(a, b) {
      return c("stableStringify")(c("buildRouteParams")(a, b, "significant"));
    }
    function j(a) {
      var b = a.instanceParams,
        d = a.routeParams;
      a = a.routePath;
      b = c("buildRouteParams")(d, b, "path");
      return { pathParams: b, results: {}, routeParams: d, routePath: a };
    }
    function k(a, b, e, f) {
      var g = i(b.routeParams, babelHelpers["extends"]({}, b.pathParams, e));
      g = b.results[g];
      if (g == null) return null;
      if (g.type === "routeMatch") return k(a, g.routeMatch, e, f);
      if (g.type === "routeRedirect") {
        var h = d("ConstUriUtils").getUri(g.routeRedirect.url);
        g.routeRedirect.useCurrentParams === !0 &&
          h != null &&
          (h = h.addQueryParams(new Map(Object.entries(e))));
        g.routeRedirect.currentUrlParam != null &&
          h != null &&
          (h = h.addQueryParam(g.routeRedirect.currentUrlParam, a));
        h != null && (h = h.removeQueryParams(g.routeRedirect.strip));
        h = h != null ? h.toString() : "";
        return l(h, f);
      }
      if (g.type === "routeDefinition") {
        h = babelHelpers["extends"]({}, b.pathParams, e);
        return c("buildCometRouteFromDefinition")(
          g.routeDefinition,
          a,
          c("buildRouteParams")(b.routeParams, h, null),
          b.routePath
        );
      }
      c("recoverableViolation")(
        "CometRouteMapper encountered an invalid result type " + g.type,
        "comet_infra"
      );
      return null;
    }
    function l(a, b) {
      b === void 0 && (b = {});
      var e = c("normalizeCometRouterConstUri")(a);
      if (b[a] === !0) {
        c("recoverableViolation")(
          "CometRouteMapper encountered cyclic redirect " + a,
          "comet_infra"
        );
        return null;
      }
      b[a] = !0;
      a = "";
      var f = {},
        g = d("ConstUriUtils").getUri(e);
      g != null &&
        ((f = Object.fromEntries(g.getQueryParams())), (a = g.getPath()));
      g = h[a];
      return g == null ? null : k(e, g, f, b);
    }
    function m(a, b, e) {
      var f = "",
        g = {};
      a = c("normalizeCometRouterConstUri")(a);
      a = d("ConstUriUtils").getUri(a);
      a != null &&
        ((g = Object.fromEntries(a.getQueryParams())), (f = a.getPath()));
      a = h[f];
      a == null && (a = h[f] = j(e[0]));
      var k = a;
      e.slice(1).forEach(function (a) {
        var b = k;
        b = b.results;
        var c = i(k.routeParams, babelHelpers["extends"]({}, k.pathParams, g));
        a = j(a);
        b[c] = { routeMatch: a, type: "routeMatch" };
        k = a;
      });
      f = i(k.routeParams, babelHelpers["extends"]({}, k.pathParams, g));
      k.results[f] = b;
    }
    function a(a, b, c) {
      if (b.prefetchable === !1) return;
      b = { routeDefinition: b, type: "routeDefinition" };
      m(a, b, c);
    }
    function b(a, b, c) {
      if (b.prefetchable === !1) return;
      b = { routeRedirect: b, type: "routeRedirect" };
      m(a, b, c);
    }
    function e(a) {
      Object.keys(h).forEach(function (b) {
        b.startsWith(a) && delete h[b];
      });
    }
    var n = null;
    g.getURIPath = f;
    g.getRoute = l;
    g.installRoute = a;
    g.installRedirect = b;
    g.invalidatePath = e;
    g.dump = n;
  },
  98
);
__d(
  "buildCometErrorRoute",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")("CometErrorRoot.react").__setRef(
      "buildCometErrorRoute"
    );
    function a(a) {
      return {
        hostableView: { allResources: [h], props: {}, resource: h },
        params: {},
        rootView: { allResources: [h], props: {}, resource: h },
        routePath: null,
        tracePolicy: "comet.error",
        type: "valid_route",
        url: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometAsyncFetchError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      if (a == null) return "";
      if (typeof a === "string") return a;
      try {
        return String.fromCharCode.apply(null, new Uint16Array(a));
      } catch (a) {
        return "<error parsing ArrayBuffer>";
      }
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f) {
        var g;
        g = a.call(this, b) || this;
        g.errorMsg = b;
        g.errorCode = c;
        g.errorRawResponseHeaders = d;
        g.errorRawTransport = e;
        g.errorType = f;
        return g;
      }
      var c = b.prototype;
      c.toString = function () {
        var a;
        a =
          ((a = this.errorCode) != null ? a : "") +
          "." +
          g(this.errorMsg) +
          "." +
          ((a = this.errorRawResponseHeaders) != null ? a : "") +
          "." +
          ((a = this.errorRawTransport) != null ? a : "") +
          "." +
          ((a = this.errorType) != null ? a : "") +
          "." +
          ((a = this.errorRawTransportStatus) != null ? a : "");
        return "CometAyncFetchError: " + a;
      };
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a;
  },
  66
);
__d(
  "goForceFullPageRedirectTo",
  ["ConstUriUtils", "FBLogger", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = typeof a === "string" ? d("ConstUriUtils").getUri(a) : a;
      if (e)
        b === !0
          ? window.location.replace(e.toString())
          : (window.location = e.toString());
      else {
        b = "Invalid URI " + a.toString() + " provided to goFullPageRedirectTo";
        c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "handleCheckpointRedirect",
  ["ConstUriUtils", "goForceFullPageRedirectTo"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a =
        (a = d("ConstUriUtils").getUri(a)) == null
          ? void 0
          : a.addQueryParam("next", location.toString());
      c("goForceFullPageRedirectTo")((a = a) != null ? a : "/");
    }
    g["default"] = a;
  },
  98
);
__d(
  "handleErrorCodeBasicSideEffects",
  ["errorCode"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      if (a === 1357001 || a === 1357032) {
        window.location.reload(!0);
        return !0;
      }
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "handleCometErrorCodeSideEffects",
  [
    "errorCode",
    "fbt",
    "CometErrorOverlay",
    "CometExceptionDialog.react",
    "OutsideExceptionKeyCommandListener.react",
    "ServerHTML.react",
    "handleCheckpointRedirect",
    "handleErrorCodeBasicSideEffects",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = new Set();
    function l(a) {
      return (
        typeof a === "object" &&
        a != null &&
        Object.prototype.hasOwnProperty.call(a, "__html")
      );
    }
    function m(a, b, e) {
      var f = e,
        g = b;
      f = j.jsx(c("ServerHTML.react"), { blob: f });
      l(g) && (g = i._("Something went wrong."));
      d("CometErrorOverlay").injectComponent(function (b) {
        return j.jsx(c("OutsideExceptionKeyCommandListener.react"), {
          children: j.jsx(c("CometExceptionDialog.react"), {
            errorDescription: f,
            errorSummary: g,
            onClose: function () {
              k["delete"](a), b();
            },
          }),
        });
      });
    }
    function a(a, b, d, e, f) {
      e === void 0 && (e = null),
        f === void 0 && (f = !0),
        c("handleErrorCodeBasicSideEffects")(a) ||
          (a === 1357053 && e != null
            ? c("handleCheckpointRedirect")(e)
            : k.has(a) || (k.add(a), f && m(a, b, d)));
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometAsyncFetch",
  [
    "CSRFGuard",
    "CometAsyncFetchError",
    "ConstUriUtils",
    "DTSG",
    "DTSG_ASYNC",
    "NetworkStatus",
    "PHPQuerySerializer",
    "Promise",
    "XHRRequest",
    "getAsyncParams",
    "handleCometErrorCodeSideEffects",
    "isFacebookURI",
    "isInternalFBURI",
    "isMessengerDotComURI",
    "isWorkplaceDotComURI",
    "recoverableViolation",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 250,
      i = [];
    function a(a, e) {
      e === void 0 && (e = { data: {}, method: "GET" });
      var f = 0,
        g;
      return new (b("Promise"))(function (b, l) {
        var m;
        function n(f) {
          if (e.ignoreResponse === !0) return b();
          f = f.trim();
          try {
            d("CSRFGuard").exists(f) && (f = d("CSRFGuard").clean(f)),
              (f = JSON.parse(f));
          } catch (b) {
            c("recoverableViolation")(
              'Unable to parse uri "' +
                a.toString() +
                '" response. ' +
                (b == null ? void 0 : b.message),
              "comet_infra"
            );
            l(b);
            return;
          }
          if (f.error) {
            c("handleCometErrorCodeSideEffects")(
              f.error,
              f.errorSummary,
              f.errorDescription,
              f.redirectTo,
              e.shouldShowErrorDialog
            );
            l({
              error: f.error,
              errorMsg: f.errorDescription,
              errorType: f.errorSummary,
              redirectTo: f.redirectTo,
            });
            return;
          }
          if (k(a)) {
            var g, h;
            g = (g = f) == null ? void 0 : g.dtsgToken;
            h = (h = f) == null ? void 0 : h.dtsgAsyncGetToken;
            g && d("DTSG").setToken(g);
            h && d("DTSG_ASYNC").setToken(h);
          }
          if (((g = e) == null ? void 0 : g.getFullPayload) === !0) {
            b(f);
            return;
          }
          b((h = f) == null ? void 0 : h.payload);
        }
        function o(a) {
          var b = e.retryCount != null && e.retryCount > 0 && f <= e.retryCount;
          if (b) c("setTimeout")(q, h);
          else {
            b = new (c("CometAsyncFetchError"))(
              a.errorMsg,
              a.errorCode,
              a.errorRawResponseHeaders,
              a.errorRawTransport,
              a.errorType
            );
            return l(b);
          }
        }
        function p() {
          var b = new (c("CometAsyncFetchError"))(
            "Request to " + a + " was aborted",
            null,
            null,
            null,
            "Abort"
          );
          return l(b);
        }
        function q() {
          var a;
          if (((a = e.abortSignal) == null ? void 0 : a.aborted) === !0)
            return p();
          r();
          s();
        }
        function r() {
          m != null && (m.abort(), (m = null));
        }
        function s() {
          var b,
            d = (b = e.requestHeaders) != null ? b : {};
          i.forEach(function (a) {
            a = a();
            d = Object.assign(a, d);
          });
          b = Object.keys(d)
            .reduce(function (a, b) {
              return a.setRequestHeader(b, d[b]);
            }, new (c("XHRRequest"))(a))
            .setMethod(e.method)
            .setData(
              babelHelpers["extends"]({}, e.data, c("getAsyncParams")(e.method))
            )
            .setRawData(e.formData)
            .setResponseHandler(n)
            .setErrorHandler(o)
            .setAbortHandler(p)
            .setUploadProgressHandler(e.onUploadProgress)
            .setDataSerializer(c("PHPQuerySerializer").serialize);
          m = b;
          e.withCredentials === !0 && j(a) && b.setWithCredentials(!0);
          b.send();
          f++;
        }
        e.abortSignal &&
          (e.abortSignal.onabort = function () {
            r();
          });
        c("NetworkStatus").isOnline()
          ? q()
          : (g = c("NetworkStatus").onChange(function (a) {
              a = a.online;
              a && (q(), g.remove());
            }));
      });
    }
    a.registerHeaderProvider = function (a) {
      i.push(a);
    };
    function j(a) {
      a = d("ConstUriUtils").getUri(a);
      return a == null
        ? !1
        : c("isFacebookURI")(a) ||
            c("isInternalFBURI")(a) ||
            c("isMessengerDotComURI")(a) ||
            c("isWorkplaceDotComURI")(a);
    }
    function k(a) {
      a = d("ConstUriUtils").getUri(a);
      if (a == null) return !1;
      return !a.getProtocol() && !a.getDomain()
        ? !0
        : document.location.origin === a.getOrigin();
    }
    g["default"] = a;
  },
  98
);
__d(
  "parseCometRouteFetchPayload",
  ["recoverableViolation", "replaceTransportMarkers"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      if (a == null) return null;
      if (a.type === "route_redirect") {
        var b = a.exports,
          d = a.redirect_url,
          e = a.redirect_result,
          f = a.route_match_infos;
        if (
          f != null &&
          Array.isArray(f) &&
          f.length > 0 &&
          b != null &&
          d != null
        ) {
          c("replaceTransportMarkers")({ relativeTo: null }, b);
          return {
            redirectResult: h(e),
            redirectUrl: d,
            routeMatchInfos: f,
            routeRedirect: b,
            type: "routeRedirect",
          };
        }
      }
      if (a.type === "route_definition") {
        e = a.exports;
        d = a.route_match_infos;
        if (d != null && Array.isArray(d) && d.length > 0 && e != null) {
          c("replaceTransportMarkers")({ relativeTo: null }, e);
          return {
            routeDefinition: e,
            routeMatchInfos: d,
            timeSpentMetaData: a.time_spent_meta_data,
            type: "routeDefinition",
          };
        }
      }
      c("recoverableViolation")(
        "parseCometRouteFetchPayload encountered a bad payload result: " + a,
        "comet_infra"
      );
      return null;
    }
    function a(a) {
      return a == null || a.error == null
        ? { error: !0 }
        : { error: !1, result: h(a.result) };
    }
    g["default"] = a;
  },
  98
);
__d(
  "stringifyCyclicJson",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a) {
      return ["Element", a.localName].concat(a.className.split(" ")).join(".");
    };
    function a(a) {
      try {
        var b = new Set();
        return JSON.stringify(a, function (a, c) {
          if (c != null && typeof c === "object") {
            if (c instanceof Element) return g(c);
            else if (b.has(c)) return "<Cyclic Dependency>";
            b.add(c);
          }
          return c;
        });
      } catch (a) {
        return "<Error Stringifying Trace>";
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "fetchAnonymousCometRoute",
  [
    "CSRFGuard",
    "CometAsyncFetchError",
    "Env",
    "HasteResponse",
    "JSScheduler",
    "PHPQuerySerializer",
    "Promise",
    "RelayAPIConfig",
    "RelayPrefetchedStreamCache",
    "XHRRequest",
    "cometAsyncFetch",
    "createChunkedResponseParser",
    "err",
    "getAsyncParams",
    "parseCometRouteFetchPayload",
    "promiseDone",
    "recoverableViolation",
    "setTimeout",
    "stringifyCyclicJson",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = {},
      j = null,
      k = [],
      l = 2,
      m = 3e3,
      n = 15;
    function o(a) {
      if (
        a != null &&
        typeof a === "object" &&
        Object.prototype.hasOwnProperty.call(a, "payloads") &&
        Object.prototype.hasOwnProperty.call(a, "sr_payload")
      )
        return a;
      else {
        throw c("err")(
          "Routing payload expected, but got " +
            ((a = JSON.stringify(a)) != null ? a : "<unstringifiable>")
        );
      }
    }
    function p(a, b) {
      var d,
        e = a == null ? void 0 : a.payloads;
      t(
        (d = a == null ? void 0 : a.sr_payload) != null ? d : Object.freeze({}),
        b,
        a.log_roots
      );
      var f = {};
      typeof e === "object" &&
        e != null &&
        Object.keys(e).forEach(function (a) {
          f[a] = c("parseCometRouteFetchPayload")(e[a]);
        });
      return f;
    }
    function q(a, d) {
      d === void 0 && (d = l);
      return a()["catch"](function (e) {
        if (d > 0)
          return new (b("Promise"))(function (b, e) {
            c("setTimeout")(function () {
              c("promiseDone")(q(a, d - 1), b, e);
            }, m);
          });
        throw e;
      });
    }
    function r(a) {
      var b = function () {
        return c("cometAsyncFetch")("/ajax/bulk-route-definitions/", {
          data: {
            route_urls: a,
            routing_namespace: c("Env").routing_namespace,
          },
          method: "POST",
          shouldShowErrorDialog: !1,
        });
      };
      return q(b).then(function (a) {
        a = o(a);
        return p(a, "comet_route_fetch");
      });
    }
    function s(a) {
      if (a instanceof c("CometAsyncFetchError")) return a.toString();
      if (typeof a === "object") {
        var b;
        return (b = c("stringifyCyclicJson")(a)) != null
          ? b
          : "<unstringifiable>";
      }
      return a;
    }
    function a(a) {
      if (i[a] != null) return i[a];
      var e = new (b("Promise"))(function (b, c) {
        k.push({ reject: c, resolve: b, url: a });
      });
      i[a] = e;
      e["finally"](function () {
        return delete i[a];
      });
      j == null &&
        (j = d("JSScheduler").scheduleSpeculativeCallback(function () {
          j = null;
          var a = function () {
            var a = k.splice(0, n);
            c("promiseDone")(
              r(
                a.map(function (a) {
                  a = a.url;
                  return a;
                })
              ),
              function (b) {
                a.forEach(function (a) {
                  var d = a.resolve;
                  a = a.url;
                  var e = b[a];
                  e == null
                    ? (c("recoverableViolation")(
                        "Unable to find route for " + a,
                        "comet_infra"
                      ),
                      d({ error: !0 }))
                    : d(e);
                });
              },
              function (b) {
                c("recoverableViolation")(
                  "Failed call to /ajax/bulk-route-definitions/: " + s(b),
                  "comet_infra"
                ),
                  a.forEach(function (a) {
                    a = a.resolve;
                    return a({ error: !0 });
                  });
              }
            );
          };
          while (k.length > 0) a();
        }));
      return e;
    }
    function e(a, e) {
      if (h[a] != null) return h[a];
      var f = function () {
        return new (b("Promise"))(function (b, f) {
          var g = !1,
            h = c("createChunkedResponseParser")(function (e) {
              var f;
              e = e.trim();
              try {
                d("CSRFGuard").exists(e) && (e = d("CSRFGuard").clean(e)),
                  (f = JSON.parse(e));
              } catch (a) {
                g ||
                  c("recoverableViolation")(
                    "Unable to parse /ajax/route-definition/ response " +
                      e +
                      ", " +
                      a,
                    "comet_infra"
                  );
                b({ error: !0 });
                return;
              }
              if ((!f || !f.__type) && !g) {
                e =
                  "Routing payload expected for " +
                  a +
                  ", but got " +
                  ((e = JSON.stringify(f)) != null ? e : "<unstringifiable>");
                c("recoverableViolation")(e, "comet_infra");
                b({ error: !0 });
              }
              if (f.__type === "error_response") {
                b({ error: !0 });
                return;
              }
              if (f.__type === "first_response") {
                if (g)
                  throw c("unrecoverableViolation")(
                    "There cannot be two first responses to one request",
                    "comet_infra"
                  );
                g = !0;
                u(f);
                b(f.payload);
              } else if (f.__type === "preloader") {
                e = f.id;
                var h = f.result;
                h
                  ? d("RelayPrefetchedStreamCache").next(e, h)
                  : d("RelayPrefetchedStreamCache").error(e, {});
              } else if (f.__type === "preloader_error") {
                h = f.id;
                d("RelayPrefetchedStreamCache").error(h, {});
              }
            });
          new (c("XHRRequest"))("/ajax/route-definition/")
            .setMethod("POST")
            .setData(
              babelHelpers["extends"](
                {
                  client_previous_actor_id: e !== "0" ? e : null,
                  route_url: a,
                  routing_namespace: c("Env").routing_namespace,
                },
                c("getAsyncParams")("POST")
              )
            )
            .setResponseHandler(h)
            .setErrorHandler(function (a) {
              f(a);
            })
            .setDataSerializer(c("PHPQuerySerializer").serialize)
            .send();
        });
      };
      f = q(f).then(c("parseCometRouteFetchPayload"));
      h[a] = f;
      f["finally"](function () {
        return delete h[a];
      });
      return f;
    }
    function t(a, b, c) {
      d("HasteResponse").handle(a, {
        source: b,
        sourceDetail: JSON.stringify(c),
      });
    }
    function u(a) {
      var b;
      t(
        (b = a.sr_payload) != null ? b : {},
        "comet_route_first_response",
        null
      );
      if (a.preloaders && a.preloaders.length)
        for (
          var b = a.preloaders,
            a = Array.isArray(b),
            e = 0,
            b = a
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (a) {
            if (e >= b.length) break;
            f = b[e++];
          } else {
            e = b.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          d("RelayPrefetchedStreamCache").registerPreloader(
            f.preloaderID,
            f.queryID,
            f.variables,
            (f = f.actorID) != null ? f : c("RelayAPIConfig").actorID
          );
        }
    }
    g.assertRoutingPayload = o;
    g.responseHandler = p;
    g.retryFetchOnError = q;
    g.fetchAnonymousCometRouteForPreload = a;
    g.fetchAnonymousCometRouteForTransition = e;
    g.handleSRandJSModules = t;
  },
  98
);
__d(
  "notifyServerOnNavigation",
  [
    "Env",
    "JSScheduler",
    "Promise",
    "cometAsyncFetch",
    "fetchAnonymousCometRoute",
    "parseCometRouteFetchPayload",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, e) {
      var f = function () {
        return new (b("Promise"))(function (b, f) {
          d("JSScheduler").scheduleLoggingPriCallback(function () {
            c("promiseDone")(
              c("cometAsyncFetch")("/ajax/navigation/", {
                data: {
                  client_previous_actor_id: e !== "0" ? e : null,
                  route_url: a,
                  routing_namespace: c("Env").routing_namespace,
                },
                method: "POST",
              }),
              b,
              f
            );
          });
        });
      };
      return d("fetchAnonymousCometRoute")
        .retryFetchOnError(f)
        .then(function (a) {
          d("fetchAnonymousCometRoute").handleSRandJSModules(
            a.sr_payload,
            "comet_route_navigation",
            a.log_roots
          );
          return c("parseCometRouteFetchPayload")(a.payload);
        });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRouteStore",
  [
    "CometRouteCache",
    "CometRouteMapper",
    "ConstUriUtils",
    "ODS",
    "Promise",
    "buildCometErrorRoute",
    "buildCometRouteFromDefinition",
    "buildRouteParams",
    "fetchAnonymousCometRoute",
    "getCometRouteKey",
    "gkx",
    "normalizeCometRouterConstUri",
    "normalizeCometRouterUrl",
    "notifyServerOnNavigation",
    "recoverableViolation",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("1401861"),
      i = 15e3,
      j = ["__cft__", "__tn__", "fnr_t", "sw_fnr_id"],
      k = new Map();
    function l(a) {
      var b;
      b =
        (b = d("ConstUriUtils").getUri(a)) == null
          ? void 0
          : (b = b.removeQueryParams(j)) == null
          ? void 0
          : b.toString();
      return c("normalizeCometRouterUrl")((b = b) != null ? b : a);
    }
    function m(a, b) {
      if (b == null) return;
      if (b.type === "routeRedirect") {
        d("CometRouteMapper").installRedirect(
          a,
          b.routeRedirect,
          b.routeMatchInfos
        );
        m(b.redirectUrl, b.redirectResult);
        return;
      }
      if (b.type === "routeDefinition") {
        d("CometRouteMapper").installRoute(
          a,
          b.routeDefinition,
          b.routeMatchInfos
        );
        return;
      }
      c("recoverableViolation")(
        "CometRouteStore encountered a bad fetch result: " + b.type,
        "comet_infra"
      );
      return;
    }
    function n(a, b) {
      if (b.error) return;
      m(a, b.result);
    }
    function o(a, b) {
      if (b != null && b.type === "routeRedirect") {
        var e = o(b.redirectUrl, b.redirectResult);
        return babelHelpers["extends"]({}, e, {
          prefetchable:
            e.prefetchable === !0 && b.routeRedirect.prefetchable !== !1,
        });
      }
      if (b == null || b.type !== "routeDefinition")
        return { prefetchable: !0, route: { type: "unmatched_route", url: a } };
      ({});
      e = d("ConstUriUtils").getUri(c("normalizeCometRouterConstUri")(a));
      e = e != null ? Object.fromEntries(e.getQueryParams()) : {};
      var f = b.routeDefinition,
        g = b.routeMatchInfos;
      b = b.timeSpentMetaData;
      g = g[g.length - 1];
      var h = g.instanceParams,
        i = g.routeParams;
      g = g.routePath;
      h = babelHelpers["extends"]({}, h, e);
      return {
        initialTimeSpentMetaData: b,
        prefetchable: f.prefetchable !== !1,
        route: c("buildCometRouteFromDefinition")(
          f,
          a,
          c("buildRouteParams")(i, h, null),
          g
        ),
      };
    }
    function p(a, b) {
      return b.error
        ? { prefetchable: !0, route: c("buildCometErrorRoute")(a) }
        : o(a, b.result);
    }
    function q(a) {
      var b = d("CometRouteCache").getRoute(a);
      if (b != null) return b;
      b = d("CometRouteMapper").getRoute(a);
      if (b != null) {
        d("CometRouteCache").install(a, b);
        return b;
      }
      return null;
    }
    function a(a) {
      var c = q(a);
      if (c != null) return b("Promise").resolve(c);
      c = l(a);
      c = k.get(c);
      return c
        ? c.promise["catch"](function () {
            return r(a);
          })
        : r(a);
    }
    function r(a) {
      return d("fetchAnonymousCometRoute")
        .fetchAnonymousCometRouteForPreload(a)
        .then(function (b) {
          var c = p(a, b);
          c = c.prefetchable
            ? c.route
            : { type: "nonprefetchable_route", url: a };
          b.error || (n(a, b), d("CometRouteCache").install(a, c));
          return c;
        });
    }
    function s(a, b) {
      var c = p(a, b);
      c = c.prefetchable ? c.route : { type: "nonprefetchable_route", url: a };
      if (!b.error) {
        var e = q(a);
        d("ODS").bumpEntityKey(
          2994,
          "comet_route_store",
          "relay_fetch." + (e != null ? "install_override" : "install")
        );
        n(a, b);
        d("CometRouteCache").install(a, c);
        return c;
      }
    }
    function e(a, c) {
      var e = q(a);
      return e != null && e.type !== "nonprefetchable_route"
        ? b("Promise").resolve({ prefetchable: !0, route: e })
        : d("fetchAnonymousCometRoute")
            .fetchAnonymousCometRouteForTransition(a, c)
            .then(function (b) {
              var c = p(a, b),
                e = c.prefetchable
                  ? c.route
                  : { type: "nonprefetchable_route", url: a };
              n(a, b);
              d("CometRouteCache").install(a, e);
              return c;
            });
    }
    function f(a, b, e) {
      return c("notifyServerOnNavigation")(b, e).then(function (e) {
        var f = p(b, e),
          g = f.route;
        if (
          (g == null ? void 0 : g.type) === "valid_route" &&
          c("getCometRouteKey")(g) === c("getCometRouteKey")(a)
        )
          return null;
        n(b, e);
        e = f.prefetchable
          ? f.route
          : { type: "nonprefetchable_route", url: b };
        d("CometRouteCache").install(b, e);
        return g;
      });
    }
    function t(a) {
      var b = "";
      a = d("ConstUriUtils").getUri(c("normalizeCometRouterConstUri")(a));
      b = a != null ? a.getPath() : "";
      d("CometRouteMapper").invalidatePath(b);
      d("CometRouteCache").invalidatePath(b);
    }
    function u(a, e) {
      if (!h) return;
      Array.isArray(a) &&
        a.forEach(function (a) {
          if (typeof a !== "string") return;
          var d = l(a);
          a = q(d);
          if ((a == null ? void 0 : a.type) === "valid_route") return;
          if (!k.has(d)) {
            a = null;
            var f = null,
              g = new (b("Promise"))(function (b, c) {
                (a = c), (f = b);
              });
            if (a != null && f != null) {
              var e = { promise: g, reject: a, resolve: f };
              k.set(d, e);
              c("setTimeout")(function () {
                k["delete"](d), e.reject();
              }, i);
            }
          }
        });
      if (e != null) {
        a = d("fetchAnonymousCometRoute").assertRoutingPayload(e);
        e = d("fetchAnonymousCometRoute").responseHandler(
          a,
          "comet_route_prefetch"
        );
        for (var f in e) {
          a = e[f];
          var g = l(f);
          a = a != null ? s(g, a) : null;
          var j = k.get(g);
          j != null && (k["delete"](g), a != null ? j.resolve(a) : j.reject());
        }
      }
    }
    g.parseCometRouteFetchResult = o;
    g.getRoute = q;
    g.fetch = a;
    g.fetchForNavigation = e;
    g.fetchForValidation = f;
    g.invalidatePath = t;
    g.handleRelayRoutingPayload = u;
  },
  98
);
__d(
  "CometRelayScheduler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").startTransition;
    a = {
      cancel: function () {},
      schedule: function (a) {
        h(a);
        return "";
      },
    };
    g["default"] = a;
  },
  98
);
