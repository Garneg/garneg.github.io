!(function (_, a) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = a())
    : "function" == typeof define && define.amd
      ? define([], a)
      : "object" == typeof exports
        ? (exports.composeApp = a())
        : (_.composeApp = a());
})(this, () =>
  (() => {
    "use strict";
    var _,
      a,
      e,
      r,
      t = {
        108: (_, a, e) => {
          _.exports = e.p + "8433c6b69bfa201b0895.wasm";
        },
        735: (_, a, e) => {
          e.a(
            _,
            async (_, r) => {
              try {
                e.r(a),
                  e.d(a, {
                    _initialize: () => k,
                    default: () => o,
                    main: () => g,
                    memory: () => l,
                  });
                var t = e(615),
                  i = e(194),
                  n = _([t]);
                t = (n.then ? (await n)() : n)[0];
                const s = (await (0, i.F)({ "./skiko.mjs": t })).exports,
                  o = new Proxy(s, {
                    _shownError: !1,
                    get(_, a) {
                      return (
                        this._shownError ||
                          ((this._shownError = !0),
                          "undefined" != typeof console &&
                            console.error(
                              "Do not use default import. Use corresponding named import instead.",
                            )),
                        _[a]
                      );
                    },
                  }),
                  { main: g, _initialize: k, memory: l } = s;
                r();
              } catch (_) {
                r(_);
              }
            },
            1,
          );
        },
        194: (_, a, e) => {
          async function r(_ = {}, a = !0) {
            const e = new WeakMap(),
              r = _["./skiko.mjs"],
              t = {
                "kotlin.captureStackTrace": () => new Error().stack,
                "kotlin.wasm.internal.throwJsError": (_, a, e) => {
                  const r = new Error();
                  throw ((r.message = _), (r.name = a), (r.stack = e), r);
                },
                "kotlin.wasm.internal.stringLength": (_) => _.length,
                "kotlin.wasm.internal.jsExportStringToWasm": (_, a, e, r) => {
                  const t = new Uint16Array(s.memory.buffer, r, e);
                  let i = 0,
                    n = a;
                  for (; i < e; ) t.set([_.charCodeAt(n)], i), n++, i++;
                },
                "kotlin.wasm.internal.externrefToString": (_) => String(_),
                "kotlin.wasm.internal.externrefEquals": (_, a) => _ === a,
                "kotlin.wasm.internal.externrefHashCode": (() => {
                  const _ = new DataView(new ArrayBuffer(8)),
                    a = new WeakMap();
                  return (e) => {
                    if (null == e) return 0;
                    switch (typeof e) {
                      case "object":
                      case "function":
                        return (function (_) {
                          const e = a.get(_);
                          if (void 0 === e) {
                            const e = 4294967296,
                              r = (Math.random() * e) | 0;
                            return a.set(_, r), r;
                          }
                          return e;
                        })(e);
                      case "number":
                        return (function (a) {
                          return (0 | a) === a
                            ? 0 | a
                            : (_.setFloat64(0, a, !0),
                              (((31 * _.getInt32(0, !0)) | 0) +
                                _.getInt32(4, !0)) |
                                0);
                        })(e);
                      case "boolean":
                        return e ? 1231 : 1237;
                      default:
                        return (function (_) {
                          for (var a = 0, e = 0; e < _.length; e++)
                            a = (31 * a + _.charCodeAt(e)) | 0;
                          return a;
                        })(String(e));
                    }
                  };
                })(),
                "kotlin.wasm.internal.importStringFromWasm": (_, a, e) => {
                  const r = new Uint16Array(s.memory.buffer, _, a),
                    t = String.fromCharCode.apply(null, r);
                  return null == e ? t : e + t;
                },
                "kotlin.wasm.internal.getJsEmptyString": () => "",
                "kotlin.wasm.internal.isNullish": (_) => null == _,
                "kotlin.wasm.internal.getJsTrue": () => !0,
                "kotlin.wasm.internal.getJsFalse": () => !1,
                "kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun": (
                  _,
                  a,
                ) =>
                  (function (_, a) {
                    if ("object" != typeof _) return a;
                    const r = e.get(_);
                    return void 0 !== r ? r : (e.set(_, a), a);
                  })(_, a),
                "kotlin.js.__convertKotlinClosureToJsClosure_(()->Unit)":
                  (_) => () =>
                    s["__callFunction_(()->Unit)"](_),
                "kotlin.io.printError": (_) => console.error(_),
                "kotlin.io.printlnImpl": (_) => console.log(_),
                "kotlin.js.jsArrayGet": (_, a) => _[a],
                "kotlin.js.length_$external_prop_getter": (_) => _.length,
                "kotlin.random.initialSeed": () =>
                  (Math.random() * Math.pow(2, 32)) | 0,
                "kotlin.wasm.internal.getJsClassName": (_) => _.name,
                "kotlin.wasm.internal.getConstructor": (_) => _.constructor,
                "kotlinx.browser.window_$external_prop_getter": () => window,
                "kotlinx.browser.document_$external_prop_getter": () =>
                  document,
                "org.w3c.dom.length_$external_prop_getter": (_) => _.length,
                "org.w3c.dom.item_$external_fun": (_, a) => _.item(a),
                "org.w3c.dom.css.cursor_$external_prop_setter": (_, a) =>
                  (_.cursor = a),
                "org.w3c.dom.css.height_$external_prop_setter": (_, a) =>
                  (_.height = a),
                "org.w3c.dom.css.width_$external_prop_setter": (_, a) =>
                  (_.width = a),
                "org.w3c.dom.css.style_$external_prop_getter": (_) => _.style,
                "org.w3c.dom.encryptedmedia.__convertKotlinClosureToJsClosure_((Js)->Unit)":
                  (_) => (a) => s["__callFunction_((Js)->Unit)"](_, a),
                "org.w3c.dom.events.addEventListener_$external_fun": (
                  _,
                  a,
                  e,
                  r,
                ) => _.addEventListener(a, e, r),
                "org.w3c.dom.events.addEventListener_$external_fun_1": (
                  _,
                  a,
                  e,
                ) => _.addEventListener(a, e),
                "org.w3c.dom.events.removeEventListener_$external_fun": (
                  _,
                  a,
                  e,
                ) => _.removeEventListener(a, e),
                "org.w3c.dom.events.type_$external_prop_getter": (_) => _.type,
                "org.w3c.dom.events.preventDefault_$external_fun": (_) =>
                  _.preventDefault(),
                "org.w3c.dom.events.Event_$external_class_instanceof": (_) =>
                  _ instanceof Event,
                "org.w3c.dom.events.ctrlKey_$external_prop_getter": (_) =>
                  _.ctrlKey,
                "org.w3c.dom.events.shiftKey_$external_prop_getter": (_) =>
                  _.shiftKey,
                "org.w3c.dom.events.altKey_$external_prop_getter": (_) =>
                  _.altKey,
                "org.w3c.dom.events.metaKey_$external_prop_getter": (_) =>
                  _.metaKey,
                "org.w3c.dom.events.button_$external_prop_getter": (_) =>
                  _.button,
                "org.w3c.dom.events.buttons_$external_prop_getter": (_) =>
                  _.buttons,
                "org.w3c.dom.events.offsetX_$external_prop_getter": (_) =>
                  _.offsetX,
                "org.w3c.dom.events.offsetY_$external_prop_getter": (_) =>
                  _.offsetY,
                "org.w3c.dom.events.MouseEvent_$external_class_instanceof": (
                  _,
                ) => _ instanceof MouseEvent,
                "org.w3c.dom.events.key_$external_prop_getter": (_) => _.key,
                "org.w3c.dom.events.location_$external_prop_getter": (_) =>
                  _.location,
                "org.w3c.dom.events.ctrlKey_$external_prop_getter_1": (_) =>
                  _.ctrlKey,
                "org.w3c.dom.events.shiftKey_$external_prop_getter_1": (_) =>
                  _.shiftKey,
                "org.w3c.dom.events.altKey_$external_prop_getter_1": (_) =>
                  _.altKey,
                "org.w3c.dom.events.metaKey_$external_prop_getter_1": (_) =>
                  _.metaKey,
                "org.w3c.dom.events.keyCode_$external_prop_getter": (_) =>
                  _.keyCode,
                "org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter":
                  (_) => _.DOM_KEY_LOCATION_RIGHT,
                "org.w3c.dom.events.Companion_$external_object_getInstance":
                  () => KeyboardEvent,
                "org.w3c.dom.events.KeyboardEvent_$external_class_instanceof": (
                  _,
                ) => _ instanceof KeyboardEvent,
                "org.w3c.dom.events.deltaX_$external_prop_getter": (_) =>
                  _.deltaX,
                "org.w3c.dom.events.deltaY_$external_prop_getter": (_) =>
                  _.deltaY,
                "org.w3c.dom.events.WheelEvent_$external_class_instanceof": (
                  _,
                ) => _ instanceof WheelEvent,
                "org.w3c.dom.AddEventListenerOptions_js_code": (_, a, e) => ({
                  passive: _,
                  once: a,
                  capture: e,
                }),
                "org.w3c.dom.devicePixelRatio_$external_prop_getter": (_) =>
                  _.devicePixelRatio,
                "org.w3c.dom.requestAnimationFrame_$external_fun": (_, a) =>
                  _.requestAnimationFrame(a),
                "org.w3c.dom.__convertKotlinClosureToJsClosure_((Double)->Unit)":
                  (_) => (a) => s["__callFunction_((Double)->Unit)"](_, a),
                "org.w3c.dom.matchMedia_$external_fun": (_, a) =>
                  _.matchMedia(a),
                "org.w3c.dom.matches_$external_prop_getter": (_) => _.matches,
                "org.w3c.dom.addListener_$external_fun": (_, a) =>
                  _.addListener(a),
                "org.w3c.dom.body_$external_prop_getter": (_) => _.body,
                "org.w3c.dom.createElement_$external_fun": (_, a, e, r) =>
                  _.createElement(a, r ? void 0 : e),
                "org.w3c.dom.hasFocus_$external_fun": (_) => _.hasFocus(),
                "org.w3c.dom.clearTimeout_$external_fun": (_, a, e) =>
                  _.clearTimeout(e ? void 0 : a),
                "org.w3c.dom.clientWidth_$external_prop_getter": (_) =>
                  _.clientWidth,
                "org.w3c.dom.clientHeight_$external_prop_getter": (_) =>
                  _.clientHeight,
                "org.w3c.dom.setAttribute_$external_fun": (_, a, e) =>
                  _.setAttribute(a, e),
                "org.w3c.dom.getBoundingClientRect_$external_fun": (_) =>
                  _.getBoundingClientRect(),
                "org.w3c.dom.appendChild_$external_fun": (_, a) =>
                  _.appendChild(a),
                "org.w3c.dom.identifier_$external_prop_getter": (_) =>
                  _.identifier,
                "org.w3c.dom.clientX_$external_prop_getter": (_) => _.clientX,
                "org.w3c.dom.clientY_$external_prop_getter": (_) => _.clientY,
                "org.w3c.dom.top_$external_prop_getter": (_) => _.top,
                "org.w3c.dom.left_$external_prop_getter": (_) => _.left,
                "org.w3c.dom.width_$external_prop_setter": (_, a) =>
                  (_.width = a),
                "org.w3c.dom.height_$external_prop_setter": (_, a) =>
                  (_.height = a),
                "org.w3c.dom.HTMLCanvasElement_$external_class_instanceof": (
                  _,
                ) => _ instanceof HTMLCanvasElement,
                "org.w3c.dom.changedTouches_$external_prop_getter": (_) =>
                  _.changedTouches,
                "org.w3c.dom.TouchEvent_$external_class_instanceof": (_) =>
                  _ instanceof TouchEvent,
                "org.w3c.dom.matches_$external_prop_getter_1": (_) => _.matches,
                "org.w3c.dom.MediaQueryListEvent_$external_class_instanceof": (
                  _,
                ) => _ instanceof MediaQueryListEvent,
                "kotlinx.coroutines.tryGetProcess": () =>
                  "undefined" != typeof process &&
                  "function" == typeof process.nextTick
                    ? process
                    : null,
                "kotlinx.coroutines.tryGetWindow": () =>
                  "undefined" != typeof window &&
                  null != window &&
                  "function" == typeof window.addEventListener
                    ? window
                    : null,
                "kotlinx.coroutines.nextTick_$external_fun": (_, a) =>
                  _.nextTick(a),
                "kotlinx.coroutines.error_$external_fun": (_, a) => _.error(a),
                "kotlinx.coroutines.console_$external_prop_getter": () =>
                  console,
                "kotlinx.coroutines.createScheduleMessagePoster": (_) => () =>
                  Promise.resolve(0).then(_),
                "kotlinx.coroutines.__callJsClosure_(()->Unit)": (_) => _(),
                "kotlinx.coroutines.createRescheduleMessagePoster": (_) => () =>
                  _.postMessage("dispatchCoroutine", "*"),
                "kotlinx.coroutines.subscribeToWindowMessages": (_, a) => {
                  _.addEventListener(
                    "message",
                    (e) => {
                      e.source == _ &&
                        "dispatchCoroutine" == e.data &&
                        (e.stopPropagation(), a());
                    },
                    !0,
                  );
                },
                "kotlinx.coroutines.setTimeout": (_, a, e) =>
                  _.setTimeout(a, e),
                "kotlinx.coroutines.clearTimeout": (_) => {
                  "undefined" != typeof clearTimeout && clearTimeout(_);
                },
                "kotlinx.coroutines.setTimeout_$external_fun": (_, a) =>
                  setTimeout(_, a),
                "org.jetbrains.skiko.w3c.language_$external_prop_getter": (_) =>
                  _.language,
                "org.jetbrains.skiko.w3c.userAgent_$external_prop_getter": (
                  _,
                ) => _.userAgent,
                "org.jetbrains.skiko.w3c.navigator_$external_prop_getter": (
                  _,
                ) => _.navigator,
                "org.jetbrains.skiko.w3c.performance_$external_prop_getter": (
                  _,
                ) => _.performance,
                "org.jetbrains.skiko.w3c.requestAnimationFrame_$external_fun": (
                  _,
                  a,
                ) => _.requestAnimationFrame(a),
                "org.jetbrains.skiko.w3c.window_$external_object_getInstance":
                  () => window,
                "org.jetbrains.skiko.w3c.now_$external_fun": (_) => _.now(),
                "org.jetbrains.skiko.w3c.width_$external_prop_getter": (_) =>
                  _.width,
                "org.jetbrains.skiko.w3c.height_$external_prop_getter": (_) =>
                  _.height,
                "org.jetbrains.skiko.w3c.HTMLCanvasElement_$external_class_instanceof":
                  (_) => _ instanceof HTMLCanvasElement,
                "org.jetbrains.skia.impl.FinalizationRegistry_$external_fun": (
                  _,
                ) => new FinalizationRegistry(_),
                "org.jetbrains.skia.impl.register_$external_fun": (_, a, e) =>
                  _.register(a, e),
                "org.jetbrains.skia.impl.unregister_$external_fun": (_, a) =>
                  _.unregister(a),
                "org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun":
                  () => r._releaseLocalCallbackScope(),
                "org.jetbrains.skiko.getNavigatorInfo": () =>
                  navigator.userAgentData
                    ? navigator.userAgentData.platform
                    : navigator.platform,
                "org.jetbrains.skiko.wasm.createContext_$external_fun": (
                  _,
                  a,
                  e,
                ) => _.createContext(a, e),
                "org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun": (
                  _,
                  a,
                ) => _.makeContextCurrent(a),
                "org.jetbrains.skiko.wasm.GL_$external_object_getInstance":
                  () => r.GL,
                "org.jetbrains.skiko.wasm.createDefaultContextAttributes":
                  () => ({
                    alpha: 1,
                    depth: 1,
                    stencil: 8,
                    antialias: 0,
                    premultipliedAlpha: 1,
                    preserveDrawingBuffer: 0,
                    preferLowPowerToHighPerformance: 0,
                    failIfMajorPerformanceCaveat: 0,
                    enableExtensionsByDefault: 1,
                    explicitSwapControl: 0,
                    renderViaOffscreenBackBuffer: 0,
                    majorVersion: 2,
                  }),
                "androidx.compose.ui.text.intl.getUserPreferredLanguagesAsArray":
                  () => window.navigator.languages,
                "androidx.compose.ui.text.intl.parseLanguageTagToIntlLocale": (
                  _,
                ) => new Intl.Locale(_),
                "androidx.compose.ui.text.intl.language_$external_prop_getter":
                  (_) => _.language,
                "androidx.compose.ui.text.intl.baseName_$external_prop_getter":
                  (_) => _.baseName,
                "androidx.compose.ui.window.isMatchMediaSupported": () =>
                  null != window.matchMedia,
                "androidx.compose.ui.window.force_$external_prop_getter": (_) =>
                  _.force,
                redirectTo4pda: () =>
                  document.location.replace(
                    "https://4pda.to/forum/index.php?showtopic=1065764&st=80#entry129537691",
                  ),
                redirectToGitHub: () => 
                  document.location.replace(
                    "https://yandex.ru/search/?text=js+prettier&lr=10522",
                    ),
              };
            let i, n, s;
            const o =
                "undefined" != typeof process &&
                "node" === process.release.name,
              g = !o && "undefined" != typeof Deno,
              k = !(
                g ||
                o ||
                ("undefined" == typeof d8 &&
                  "undefined" == typeof inIon &&
                  "undefined" == typeof jscOptions)
              ),
              l = !o && !g && !k && "undefined" != typeof window;
            if (!(o || g || k || l)) throw "Supported JS engine not detected";
            const b = "./composeApp.wasm",
              j = { js_code: t, "./skiko.mjs": _["./skiko.mjs"] };
            try {
              if (o) {
                const _ = await import("node:module"),
                  a = {};
                n = _.default.createRequire(a.url);
                const e = n("fs"),
                  r = n("url"),
                  t = {}.resolve(b),
                  s = e.readFileSync(r.fileURLToPath(t)),
                  o = new WebAssembly.Module(s);
                i = new WebAssembly.Instance(o, j);
              }
              if (g) {
                const _ = await import("https://deno.land/std/path/mod.ts"),
                  a = Deno.readFileSync(_.fromFileUrl({}.resolve(b))),
                  e = await WebAssembly.compile(a);
                i = await WebAssembly.instantiate(e, j);
              }
              if (k) {
                const _ = read(b, "binary"),
                  a = new WebAssembly.Module(_);
                i = new WebAssembly.Instance(a, j);
              }
              l &&
                (i = (await WebAssembly.instantiateStreaming(fetch(b), j))
                  .instance);
            } catch (_) {
              if (_ instanceof WebAssembly.CompileError) {
                let _ =
                  "Please make sure that your runtime environment supports the latest version of Wasm GC and Exception-Handling proposals.\nFor more information, see https://kotl.in/wasm-help\n";
                if (l) console.error(_);
                else {
                  const a = "\n" + _;
                  "undefined" != typeof console && void 0 !== console.log
                    ? console.log(a)
                    : print(a);
                }
              }
              throw _;
            }
            return (
              (s = i.exports), a && s._initialize(), { instance: i, exports: s }
            );
          }
          e.d(a, { F: () => r });
        },
        615: (_, a, e) => {
          e.a(
            _,
            async (_, r) => {
              try {
                e.r(a),
                  e.d(a, {
                    BackendRenderTarget_MakeDirect3D: () => m,
                    BackendRenderTarget_nMakeMetal: () => u,
                    GL: () => j,
                    _callCallback: () => s,
                    _createLocalCallbackScope: () => k,
                    _registerCallback: () => o,
                    _releaseCallback: () => g,
                    _releaseLocalCallbackScope: () => l,
                    default: () => _,
                    free: () => Xh,
                    loadedWasm: () => b,
                    malloc: () => qh,
                    org_jetbrains_skia_BBHFactory__1nGetFinalizer: () => h,
                    org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer:
                      () => c,
                    org_jetbrains_skia_BackendRenderTarget__1nMakeGL: () => d,
                    org_jetbrains_skia_Bitmap__1nAllocPixels: () => H,
                    org_jetbrains_skia_Bitmap__1nAllocPixelsFlags: () => L,
                    org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes: () => z,
                    org_jetbrains_skia_Bitmap__1nComputeByteSize: () => T,
                    org_jetbrains_skia_Bitmap__1nComputeIsOpaque: () => E,
                    org_jetbrains_skia_Bitmap__1nErase: () => Y,
                    org_jetbrains_skia_Bitmap__1nEraseColor: () => X,
                    org_jetbrains_skia_Bitmap__1nExtractAlpha: () => a_,
                    org_jetbrains_skia_Bitmap__1nExtractSubset: () => Z,
                    org_jetbrains_skia_Bitmap__1nGetAlphaf: () => J,
                    org_jetbrains_skia_Bitmap__1nGetColor: () => Q,
                    org_jetbrains_skia_Bitmap__1nGetFinalizer: () => S,
                    org_jetbrains_skia_Bitmap__1nGetGenerationId: () => K,
                    org_jetbrains_skia_Bitmap__1nGetImageInfo: () => F,
                    org_jetbrains_skia_Bitmap__1nGetPixelRef: () => U,
                    org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX: () => O,
                    org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY: () => W,
                    org_jetbrains_skia_Bitmap__1nGetPixmap: () => y,
                    org_jetbrains_skia_Bitmap__1nGetRowBytes: () => M,
                    org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels: () => C,
                    org_jetbrains_skia_Bitmap__1nInstallPixels: () => V,
                    org_jetbrains_skia_Bitmap__1nIsImmutable: () => R,
                    org_jetbrains_skia_Bitmap__1nIsNull: () => x,
                    org_jetbrains_skia_Bitmap__1nIsReadyToDraw: () => $,
                    org_jetbrains_skia_Bitmap__1nIsVolatile: () => I,
                    org_jetbrains_skia_Bitmap__1nMake: () => f,
                    org_jetbrains_skia_Bitmap__1nMakeClone: () => P,
                    org_jetbrains_skia_Bitmap__1nMakeShader: () => r_,
                    org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged: () => q,
                    org_jetbrains_skia_Bitmap__1nPeekPixels: () => e_,
                    org_jetbrains_skia_Bitmap__1nReadPixels: () => __,
                    org_jetbrains_skia_Bitmap__1nReset: () => D,
                    org_jetbrains_skia_Bitmap__1nSetAlphaType: () => v,
                    org_jetbrains_skia_Bitmap__1nSetImageInfo: () => A,
                    org_jetbrains_skia_Bitmap__1nSetImmutable: () => B,
                    org_jetbrains_skia_Bitmap__1nSetPixelRef: () => N,
                    org_jetbrains_skia_Bitmap__1nSetVolatile: () => w,
                    org_jetbrains_skia_Bitmap__1nSwap: () => G,
                    org_jetbrains_skia_BreakIterator__1nClone: () => n_,
                    org_jetbrains_skia_BreakIterator__1nCurrent: () => s_,
                    org_jetbrains_skia_BreakIterator__1nFirst: () => k_,
                    org_jetbrains_skia_BreakIterator__1nFollowing: () => j_,
                    org_jetbrains_skia_BreakIterator__1nGetFinalizer: () => t_,
                    org_jetbrains_skia_BreakIterator__1nGetRuleStatus: () => h_,
                    org_jetbrains_skia_BreakIterator__1nGetRuleStatuses: () =>
                      d_,
                    org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen:
                      () => c_,
                    org_jetbrains_skia_BreakIterator__1nIsBoundary: () => p_,
                    org_jetbrains_skia_BreakIterator__1nLast: () => l_,
                    org_jetbrains_skia_BreakIterator__1nMake: () => i_,
                    org_jetbrains_skia_BreakIterator__1nNext: () => o_,
                    org_jetbrains_skia_BreakIterator__1nPreceding: () => b_,
                    org_jetbrains_skia_BreakIterator__1nPrevious: () => g_,
                    org_jetbrains_skia_BreakIterator__1nSetText: () => u_,
                    org_jetbrains_skia_Canvas__1nClear: () => z_,
                    org_jetbrains_skia_Canvas__1nClipPath: () => $_,
                    org_jetbrains_skia_Canvas__1nClipRRect: () => N_,
                    org_jetbrains_skia_Canvas__1nClipRect: () => W_,
                    org_jetbrains_skia_Canvas__1nClipRegion: () => K_,
                    org_jetbrains_skia_Canvas__1nConcat: () => J_,
                    org_jetbrains_skia_Canvas__1nConcat44: () => Z_,
                    org_jetbrains_skia_Canvas__1nDrawArc: () => y_,
                    org_jetbrains_skia_Canvas__1nDrawDRRect: () => M_,
                    org_jetbrains_skia_Canvas__1nDrawDrawable: () => L_,
                    org_jetbrains_skia_Canvas__1nDrawImageNine: () => R_,
                    org_jetbrains_skia_Canvas__1nDrawImageRect: () => T_,
                    org_jetbrains_skia_Canvas__1nDrawLine: () => G_,
                    org_jetbrains_skia_Canvas__1nDrawOval: () => C_,
                    org_jetbrains_skia_Canvas__1nDrawPaint: () => V_,
                    org_jetbrains_skia_Canvas__1nDrawPatch: () => A_,
                    org_jetbrains_skia_Canvas__1nDrawPath: () => v_,
                    org_jetbrains_skia_Canvas__1nDrawPicture: () => D_,
                    org_jetbrains_skia_Canvas__1nDrawPoint: () => f_,
                    org_jetbrains_skia_Canvas__1nDrawPoints: () => P_,
                    org_jetbrains_skia_Canvas__1nDrawRRect: () => x_,
                    org_jetbrains_skia_Canvas__1nDrawRect: () => F_,
                    org_jetbrains_skia_Canvas__1nDrawRegion: () => B_,
                    org_jetbrains_skia_Canvas__1nDrawString: () => I_,
                    org_jetbrains_skia_Canvas__1nDrawTextBlob: () => w_,
                    org_jetbrains_skia_Canvas__1nDrawVertices: () => E_,
                    org_jetbrains_skia_Canvas__1nGetFinalizer: () => m_,
                    org_jetbrains_skia_Canvas__1nGetLocalToDevice: () => U_,
                    org_jetbrains_skia_Canvas__1nGetSaveCount: () => ia,
                    org_jetbrains_skia_Canvas__1nMakeFromBitmap: () => S_,
                    org_jetbrains_skia_Canvas__1nReadPixels: () => _a,
                    org_jetbrains_skia_Canvas__1nResetMatrix: () => O_,
                    org_jetbrains_skia_Canvas__1nRestore: () => na,
                    org_jetbrains_skia_Canvas__1nRestoreToCount: () => sa,
                    org_jetbrains_skia_Canvas__1nRotate: () => Y_,
                    org_jetbrains_skia_Canvas__1nSave: () => ea,
                    org_jetbrains_skia_Canvas__1nSaveLayer: () => ra,
                    org_jetbrains_skia_Canvas__1nSaveLayerRect: () => ta,
                    org_jetbrains_skia_Canvas__1nScale: () => X_,
                    org_jetbrains_skia_Canvas__1nSetMatrix: () => H_,
                    org_jetbrains_skia_Canvas__1nSkew: () => Q_,
                    org_jetbrains_skia_Canvas__1nTranslate: () => q_,
                    org_jetbrains_skia_Canvas__1nWritePixels: () => aa,
                    org_jetbrains_skia_Codec__1nFramesInfo_Delete: () => Sa,
                    org_jetbrains_skia_Codec__1nFramesInfo_GetInfos: () => Pa,
                    org_jetbrains_skia_Codec__1nFramesInfo_GetSize: () => fa,
                    org_jetbrains_skia_Codec__1nGetEncodedImageFormat: () => ha,
                    org_jetbrains_skia_Codec__1nGetEncodedOrigin: () => pa,
                    org_jetbrains_skia_Codec__1nGetFinalizer: () => oa,
                    org_jetbrains_skia_Codec__1nGetFrameCount: () => ca,
                    org_jetbrains_skia_Codec__1nGetFrameInfo: () => da,
                    org_jetbrains_skia_Codec__1nGetFramesInfo: () => ua,
                    org_jetbrains_skia_Codec__1nGetImageInfo: () => ga,
                    org_jetbrains_skia_Codec__1nGetRepetitionCount: () => ma,
                    org_jetbrains_skia_Codec__1nGetSizeHeight: () => ja,
                    org_jetbrains_skia_Codec__1nGetSizeWidth: () => ba,
                    org_jetbrains_skia_Codec__1nMakeFromData: () => la,
                    org_jetbrains_skia_Codec__1nReadPixels: () => ka,
                    org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma:
                      () => xa,
                    org_jetbrains_skia_ColorFilter__1nGetLuma: () => wa,
                    org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma:
                      () => Ma,
                    org_jetbrains_skia_ColorFilter__1nMakeBlend: () => ya,
                    org_jetbrains_skia_ColorFilter__1nMakeComposed: () => Ga,
                    org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix: () => Ca,
                    org_jetbrains_skia_ColorFilter__1nMakeHighContrast: () =>
                      Ra,
                    org_jetbrains_skia_ColorFilter__1nMakeLerp: () => va,
                    org_jetbrains_skia_ColorFilter__1nMakeLighting: () => Ta,
                    org_jetbrains_skia_ColorFilter__1nMakeMatrix: () => Fa,
                    org_jetbrains_skia_ColorFilter__1nMakeOverdraw: () => Ia,
                    org_jetbrains_skia_ColorFilter__1nMakeTable: () => Ba,
                    org_jetbrains_skia_ColorFilter__1nMakeTableARGB: () => Da,
                    org_jetbrains_skia_ColorSpace__1nGetFinalizer: () => Ea,
                    org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB: () =>
                      Ha,
                    org_jetbrains_skia_ColorSpace__1nIsGammaLinear: () => Ua,
                    org_jetbrains_skia_ColorSpace__1nIsSRGB: () => Oa,
                    org_jetbrains_skia_ColorSpace__1nMakeDisplayP3: () => za,
                    org_jetbrains_skia_ColorSpace__1nMakeSRGB: () => La,
                    org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear: () => Va,
                    org_jetbrains_skia_ColorSpace__nConvert: () => Aa,
                    org_jetbrains_skia_ColorType__1nIsAlwaysOpaque: () => Wa,
                    org_jetbrains_skia_Data__1nBytes: () => Ka,
                    org_jetbrains_skia_Data__1nEquals: () => qa,
                    org_jetbrains_skia_Data__1nGetFinalizer: () => Na,
                    org_jetbrains_skia_Data__1nMakeEmpty: () => Za,
                    org_jetbrains_skia_Data__1nMakeFromBytes: () => Xa,
                    org_jetbrains_skia_Data__1nMakeFromFileName: () => Qa,
                    org_jetbrains_skia_Data__1nMakeSubset: () => Ja,
                    org_jetbrains_skia_Data__1nMakeUninitialized: () => _e,
                    org_jetbrains_skia_Data__1nMakeWithoutCopy: () => Ya,
                    org_jetbrains_skia_Data__1nSize: () => $a,
                    org_jetbrains_skia_Data__1nWritableData: () => ae,
                    org_jetbrains_skia_DirectContext__1nAbandon: () => oe,
                    org_jetbrains_skia_DirectContext__1nFlush: () => ee,
                    org_jetbrains_skia_DirectContext__1nMakeDirect3D: () => ie,
                    org_jetbrains_skia_DirectContext__1nMakeGL: () => re,
                    org_jetbrains_skia_DirectContext__1nMakeMetal: () => te,
                    org_jetbrains_skia_DirectContext__1nReset: () => se,
                    org_jetbrains_skia_DirectContext__1nSubmit: () => ne,
                    org_jetbrains_skia_Drawable__1nDraw: () => be,
                    org_jetbrains_skia_Drawable__1nGetBounds: () => he,
                    org_jetbrains_skia_Drawable__1nGetFinalizer: () => ge,
                    org_jetbrains_skia_Drawable__1nGetGenerationId: () => le,
                    org_jetbrains_skia_Drawable__1nGetOnDrawCanvas: () => de,
                    org_jetbrains_skia_Drawable__1nInit: () => ce,
                    org_jetbrains_skia_Drawable__1nMake: () => ke,
                    org_jetbrains_skia_Drawable__1nMakePictureSnapshot: () =>
                      je,
                    org_jetbrains_skia_Drawable__1nNotifyDrawingChanged: () =>
                      pe,
                    org_jetbrains_skia_Drawable__1nSetBounds: () => ue,
                    org_jetbrains_skia_FontMgr__1nDefault: () => dr,
                    org_jetbrains_skia_FontMgr__1nGetFamiliesCount: () => kr,
                    org_jetbrains_skia_FontMgr__1nGetFamilyName: () => lr,
                    org_jetbrains_skia_FontMgr__1nMakeFromData: () => cr,
                    org_jetbrains_skia_FontMgr__1nMakeStyleSet: () => br,
                    org_jetbrains_skia_FontMgr__1nMatchFamily: () => jr,
                    org_jetbrains_skia_FontMgr__1nMatchFamilyStyle: () => pr,
                    org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter:
                      () => hr,
                    org_jetbrains_skia_FontStyleSet__1nCount: () => mr,
                    org_jetbrains_skia_FontStyleSet__1nGetStyle: () => Sr,
                    org_jetbrains_skia_FontStyleSet__1nGetStyleName: () => fr,
                    org_jetbrains_skia_FontStyleSet__1nGetTypeface: () => Pr,
                    org_jetbrains_skia_FontStyleSet__1nMakeEmpty: () => ur,
                    org_jetbrains_skia_FontStyleSet__1nMatchStyle: () => Gr,
                    org_jetbrains_skia_Font__1nAreBitmapsEmbedded: () => Me,
                    org_jetbrains_skia_Font__1nAreMetricsLinear: () => Te,
                    org_jetbrains_skia_Font__1nEquals: () => fe,
                    org_jetbrains_skia_Font__1nGetBounds: () => rr,
                    org_jetbrains_skia_Font__1nGetEdging: () => ze,
                    org_jetbrains_skia_Font__1nGetFinalizer: () => me,
                    org_jetbrains_skia_Font__1nGetHinting: () => He,
                    org_jetbrains_skia_Font__1nGetMetrics: () => or,
                    org_jetbrains_skia_Font__1nGetPath: () => nr,
                    org_jetbrains_skia_Font__1nGetPaths: () => sr,
                    org_jetbrains_skia_Font__1nGetPositions: () => tr,
                    org_jetbrains_skia_Font__1nGetScaleX: () => Ne,
                    org_jetbrains_skia_Font__1nGetSize: () => Pe,
                    org_jetbrains_skia_Font__1nGetSkewX: () => $e,
                    org_jetbrains_skia_Font__1nGetSpacing: () => gr,
                    org_jetbrains_skia_Font__1nGetStringGlyphsCount: () => Ze,
                    org_jetbrains_skia_Font__1nGetTypeface: () => Oe,
                    org_jetbrains_skia_Font__1nGetTypefaceOrDefault: () => We,
                    org_jetbrains_skia_Font__1nGetUTF32Glyph: () => Qe,
                    org_jetbrains_skia_Font__1nGetUTF32Glyphs: () => Je,
                    org_jetbrains_skia_Font__1nGetWidths: () => er,
                    org_jetbrains_skia_Font__1nGetXPositions: () => ir,
                    org_jetbrains_skia_Font__1nIsAutoHintingForced: () => xe,
                    org_jetbrains_skia_Font__1nIsBaselineSnapped: () => Be,
                    org_jetbrains_skia_Font__1nIsEmboldened: () => Re,
                    org_jetbrains_skia_Font__1nIsSubpixel: () => ve,
                    org_jetbrains_skia_Font__1nMakeClone: () => Se,
                    org_jetbrains_skia_Font__1nMakeDefault: () => Ge,
                    org_jetbrains_skia_Font__1nMakeTypeface: () => ye,
                    org_jetbrains_skia_Font__1nMakeTypefaceSize: () => Fe,
                    org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew: () =>
                      Ce,
                    org_jetbrains_skia_Font__1nMeasureText: () => _r,
                    org_jetbrains_skia_Font__1nMeasureTextWidth: () => ar,
                    org_jetbrains_skia_Font__1nSetAutoHintingForced: () => Ie,
                    org_jetbrains_skia_Font__1nSetBaselineSnapped: () => Le,
                    org_jetbrains_skia_Font__1nSetBitmapsEmbedded: () => we,
                    org_jetbrains_skia_Font__1nSetEdging: () => Ve,
                    org_jetbrains_skia_Font__1nSetEmboldened: () => Ae,
                    org_jetbrains_skia_Font__1nSetHinting: () => Ue,
                    org_jetbrains_skia_Font__1nSetMetricsLinear: () => Ee,
                    org_jetbrains_skia_Font__1nSetScaleX: () => Xe,
                    org_jetbrains_skia_Font__1nSetSize: () => qe,
                    org_jetbrains_skia_Font__1nSetSkewX: () => Ye,
                    org_jetbrains_skia_Font__1nSetSubpixel: () => De,
                    org_jetbrains_skia_Font__1nSetTypeface: () => Ke,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit:
                      () => xr,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed:
                      () => vr,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit: () =>
                      yr,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed: () => Cr,
                    org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit:
                      () => Br,
                    org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit:
                      () => Tr,
                    org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed:
                      () => wr,
                    org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches: () => Ar,
                    org_jetbrains_skia_GraphicsKt__1nPurgeFontCache: () => Dr,
                    org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache: () =>
                      Er,
                    org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit:
                      () => Mr,
                    org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit: () =>
                      Fr,
                    org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit:
                      () => Ir,
                    org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit:
                      () => Rr,
                    org_jetbrains_skia_ImageFilter__1nMakeArithmetic: () => Qr,
                    org_jetbrains_skia_ImageFilter__1nMakeBlend: () => Jr,
                    org_jetbrains_skia_ImageFilter__1nMakeBlur: () => Zr,
                    org_jetbrains_skia_ImageFilter__1nMakeColorFilter: () => _t,
                    org_jetbrains_skia_ImageFilter__1nMakeCompose: () => at,
                    org_jetbrains_skia_ImageFilter__1nMakeDilate: () => ct,
                    org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap: () =>
                      et,
                    org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse:
                      () => ut,
                    org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular:
                      () => ft,
                    org_jetbrains_skia_ImageFilter__1nMakeDropShadow: () => rt,
                    org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly: () =>
                      tt,
                    org_jetbrains_skia_ImageFilter__1nMakeErode: () => dt,
                    org_jetbrains_skia_ImageFilter__1nMakeImage: () => it,
                    org_jetbrains_skia_ImageFilter__1nMakeMagnifier: () => nt,
                    org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution:
                      () => st,
                    org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform: () =>
                      ot,
                    org_jetbrains_skia_ImageFilter__1nMakeMerge: () => gt,
                    org_jetbrains_skia_ImageFilter__1nMakeOffset: () => kt,
                    org_jetbrains_skia_ImageFilter__1nMakePicture: () => bt,
                    org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse: () =>
                      mt,
                    org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular:
                      () => Pt,
                    org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader: () =>
                      jt,
                    org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray:
                      () => pt,
                    org_jetbrains_skia_ImageFilter__1nMakeShader: () => lt,
                    org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse: () =>
                      St,
                    org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular: () =>
                      Gt,
                    org_jetbrains_skia_ImageFilter__1nMakeTile: () => ht,
                    org_jetbrains_skia_Image__1nEncodeToData: () => $r,
                    org_jetbrains_skia_Image__1nGetImageInfo: () => Lr,
                    org_jetbrains_skia_Image__1nMakeFromBitmap: () => Or,
                    org_jetbrains_skia_Image__1nMakeFromEncoded: () => Nr,
                    org_jetbrains_skia_Image__1nMakeFromPixmap: () => Wr,
                    org_jetbrains_skia_Image__1nMakeRaster: () => Hr,
                    org_jetbrains_skia_Image__1nMakeRasterData: () => Ur,
                    org_jetbrains_skia_Image__1nMakeShader: () => zr,
                    org_jetbrains_skia_Image__1nPeekPixels: () => Vr,
                    org_jetbrains_skia_Image__1nPeekPixelsToPixmap: () => Kr,
                    org_jetbrains_skia_Image__1nReadPixelsBitmap: () => Xr,
                    org_jetbrains_skia_Image__1nReadPixelsPixmap: () => Yr,
                    org_jetbrains_skia_Image__1nScalePixels: () => qr,
                    org_jetbrains_skia_ManagedString__1nAppend: () => vt,
                    org_jetbrains_skia_ManagedString__1nGetFinalizer: () => yt,
                    org_jetbrains_skia_ManagedString__1nInsert: () => Mt,
                    org_jetbrains_skia_ManagedString__1nMake: () => Ft,
                    org_jetbrains_skia_ManagedString__1nRemove: () => Rt,
                    org_jetbrains_skia_ManagedString__1nRemoveSuffix: () => Tt,
                    org_jetbrains_skia_ManagedString__nStringData: () => xt,
                    org_jetbrains_skia_ManagedString__nStringSize: () => Ct,
                    org_jetbrains_skia_MaskFilter__1nMakeBlur: () => It,
                    org_jetbrains_skia_MaskFilter__1nMakeClip: () => Et,
                    org_jetbrains_skia_MaskFilter__1nMakeGamma: () => Dt,
                    org_jetbrains_skia_MaskFilter__1nMakeShader: () => wt,
                    org_jetbrains_skia_MaskFilter__1nMakeTable: () => Bt,
                    org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint:
                      () => fi,
                    org_jetbrains_skia_PaintFilterCanvas__1nInit: () => Si,
                    org_jetbrains_skia_PaintFilterCanvas__1nMake: () => mi,
                    org_jetbrains_skia_Paint__1nEquals: () => Vt,
                    org_jetbrains_skia_Paint__1nGetBlendMode: () => ki,
                    org_jetbrains_skia_Paint__1nGetColor: () => qt,
                    org_jetbrains_skia_Paint__1nGetColor4f: () => Xt,
                    org_jetbrains_skia_Paint__1nGetColorFilter: () => oi,
                    org_jetbrains_skia_Paint__1nGetFinalizer: () => At,
                    org_jetbrains_skia_Paint__1nGetImageFilter: () => ci,
                    org_jetbrains_skia_Paint__1nGetMaskFilter: () => pi,
                    org_jetbrains_skia_Paint__1nGetMode: () => $t,
                    org_jetbrains_skia_Paint__1nGetPathEffect: () => bi,
                    org_jetbrains_skia_Paint__1nGetShader: () => ni,
                    org_jetbrains_skia_Paint__1nGetStrokeCap: () => ei,
                    org_jetbrains_skia_Paint__1nGetStrokeJoin: () => ti,
                    org_jetbrains_skia_Paint__1nGetStrokeMiter: () => _i,
                    org_jetbrains_skia_Paint__1nGetStrokeWidth: () => Jt,
                    org_jetbrains_skia_Paint__1nHasNothingToDraw: () => ui,
                    org_jetbrains_skia_Paint__1nIsAntiAlias: () => Ut,
                    org_jetbrains_skia_Paint__1nIsDither: () => Wt,
                    org_jetbrains_skia_Paint__1nMake: () => Lt,
                    org_jetbrains_skia_Paint__1nMakeClone: () => zt,
                    org_jetbrains_skia_Paint__1nReset: () => Ht,
                    org_jetbrains_skia_Paint__1nSetAntiAlias: () => Ot,
                    org_jetbrains_skia_Paint__1nSetBlendMode: () => li,
                    org_jetbrains_skia_Paint__1nSetColor: () => Yt,
                    org_jetbrains_skia_Paint__1nSetColor4f: () => Qt,
                    org_jetbrains_skia_Paint__1nSetColorFilter: () => gi,
                    org_jetbrains_skia_Paint__1nSetDither: () => Nt,
                    org_jetbrains_skia_Paint__1nSetImageFilter: () => di,
                    org_jetbrains_skia_Paint__1nSetMaskFilter: () => hi,
                    org_jetbrains_skia_Paint__1nSetMode: () => Kt,
                    org_jetbrains_skia_Paint__1nSetPathEffect: () => ji,
                    org_jetbrains_skia_Paint__1nSetShader: () => si,
                    org_jetbrains_skia_Paint__1nSetStrokeCap: () => ri,
                    org_jetbrains_skia_Paint__1nSetStrokeJoin: () => ii,
                    org_jetbrains_skia_Paint__1nSetStrokeMiter: () => ai,
                    org_jetbrains_skia_Paint__1nSetStrokeWidth: () => Zt,
                    org_jetbrains_skia_PathEffect__1nMakeCompose: () => On,
                    org_jetbrains_skia_PathEffect__1nMakeCorner: () => qn,
                    org_jetbrains_skia_PathEffect__1nMakeDash: () => Xn,
                    org_jetbrains_skia_PathEffect__1nMakeDiscrete: () => Yn,
                    org_jetbrains_skia_PathEffect__1nMakeLine2D: () => Kn,
                    org_jetbrains_skia_PathEffect__1nMakePath1D: () => Nn,
                    org_jetbrains_skia_PathEffect__1nMakePath2D: () => $n,
                    org_jetbrains_skia_PathEffect__1nMakeSum: () => Wn,
                    org_jetbrains_skia_PathMeasure__1nGetFinalizer: () => Qn,
                    org_jetbrains_skia_PathMeasure__1nGetLength: () => as,
                    org_jetbrains_skia_PathMeasure__1nGetMatrix: () => is,
                    org_jetbrains_skia_PathMeasure__1nGetPosition: () => es,
                    org_jetbrains_skia_PathMeasure__1nGetRSXform: () => ts,
                    org_jetbrains_skia_PathMeasure__1nGetSegment: () => ns,
                    org_jetbrains_skia_PathMeasure__1nGetTangent: () => rs,
                    org_jetbrains_skia_PathMeasure__1nIsClosed: () => ss,
                    org_jetbrains_skia_PathMeasure__1nMake: () => Jn,
                    org_jetbrains_skia_PathMeasure__1nMakePath: () => Zn,
                    org_jetbrains_skia_PathMeasure__1nNextContour: () => os,
                    org_jetbrains_skia_PathMeasure__1nSetPath: () => _s,
                    org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer:
                      () => gs,
                    org_jetbrains_skia_PathSegmentIterator__1nMake: () => ls,
                    org_jetbrains_skia_PathSegmentIterator__1nNext: () => ks,
                    org_jetbrains_skia_PathUtils__1nFillPathWithPaint: () => bs,
                    org_jetbrains_skia_PathUtils__1nFillPathWithPaintCull: () =>
                      js,
                    org_jetbrains_skia_Path__1nAddArc: () => yn,
                    org_jetbrains_skia_Path__1nAddCircle: () => Gn,
                    org_jetbrains_skia_Path__1nAddOval: () => Pn,
                    org_jetbrains_skia_Path__1nAddPath: () => xn,
                    org_jetbrains_skia_Path__1nAddPathOffset: () => Mn,
                    org_jetbrains_skia_Path__1nAddPathTransform: () => vn,
                    org_jetbrains_skia_Path__1nAddPoly: () => Cn,
                    org_jetbrains_skia_Path__1nAddRRect: () => Fn,
                    org_jetbrains_skia_Path__1nAddRect: () => fn,
                    org_jetbrains_skia_Path__1nApproximateBytesUsed: () => Qi,
                    org_jetbrains_skia_Path__1nArcTo: () => pn,
                    org_jetbrains_skia_Path__1nClosePath: () => un,
                    org_jetbrains_skia_Path__1nComputeTightBounds: () => _n,
                    org_jetbrains_skia_Path__1nConicTo: () => kn,
                    org_jetbrains_skia_Path__1nConservativelyContainsRect: () =>
                      an,
                    org_jetbrains_skia_Path__1nContains: () => En,
                    org_jetbrains_skia_Path__1nConvertConicToQuads: () => mn,
                    org_jetbrains_skia_Path__1nCountVerbs: () => Xi,
                    org_jetbrains_skia_Path__1nCubicTo: () => bn,
                    org_jetbrains_skia_Path__1nDump: () => An,
                    org_jetbrains_skia_Path__1nDumpHex: () => Ln,
                    org_jetbrains_skia_Path__1nEllipticalArcTo: () => cn,
                    org_jetbrains_skia_Path__1nEquals: () => yi,
                    org_jetbrains_skia_Path__1nGetBounds: () => Ji,
                    org_jetbrains_skia_Path__1nGetFillMode: () => Ii,
                    org_jetbrains_skia_Path__1nGetFinalizer: () => Pi,
                    org_jetbrains_skia_Path__1nGetGenerationId: () => vi,
                    org_jetbrains_skia_Path__1nGetLastPt: () => In,
                    org_jetbrains_skia_Path__1nGetPoint: () => Ki,
                    org_jetbrains_skia_Path__1nGetPoints: () => qi,
                    org_jetbrains_skia_Path__1nGetPointsCount: () => $i,
                    org_jetbrains_skia_Path__1nGetSegmentMasks: () => Dn,
                    org_jetbrains_skia_Path__1nGetVerbs: () => Yi,
                    org_jetbrains_skia_Path__1nIncReserve: () => en,
                    org_jetbrains_skia_Path__1nIsConvex: () => Di,
                    org_jetbrains_skia_Path__1nIsCubicDegenerate: () => Wi,
                    org_jetbrains_skia_Path__1nIsEmpty: () => zi,
                    org_jetbrains_skia_Path__1nIsFinite: () => Hi,
                    org_jetbrains_skia_Path__1nIsInterpolatable: () => Ri,
                    org_jetbrains_skia_Path__1nIsLastContourClosed: () => Vi,
                    org_jetbrains_skia_Path__1nIsLineDegenerate: () => Ui,
                    org_jetbrains_skia_Path__1nIsOval: () => Ei,
                    org_jetbrains_skia_Path__1nIsQuadDegenerate: () => Oi,
                    org_jetbrains_skia_Path__1nIsRRect: () => Ai,
                    org_jetbrains_skia_Path__1nIsRect: () => Sn,
                    org_jetbrains_skia_Path__1nIsValid: () => Un,
                    org_jetbrains_skia_Path__1nIsVolatile: () => Ci,
                    org_jetbrains_skia_Path__1nLineTo: () => nn,
                    org_jetbrains_skia_Path__1nMake: () => Gi,
                    org_jetbrains_skia_Path__1nMakeCombining: () => Vn,
                    org_jetbrains_skia_Path__1nMakeFromBytes: () => Hn,
                    org_jetbrains_skia_Path__1nMakeFromSVGString: () => Ti,
                    org_jetbrains_skia_Path__1nMakeLerp: () => Bi,
                    org_jetbrains_skia_Path__1nMaybeGetAsLine: () => Ni,
                    org_jetbrains_skia_Path__1nMoveTo: () => rn,
                    org_jetbrains_skia_Path__1nOffset: () => Rn,
                    org_jetbrains_skia_Path__1nQuadTo: () => on,
                    org_jetbrains_skia_Path__1nRConicTo: () => ln,
                    org_jetbrains_skia_Path__1nRCubicTo: () => jn,
                    org_jetbrains_skia_Path__1nREllipticalArcTo: () => dn,
                    org_jetbrains_skia_Path__1nRLineTo: () => sn,
                    org_jetbrains_skia_Path__1nRMoveTo: () => tn,
                    org_jetbrains_skia_Path__1nRQuadTo: () => gn,
                    org_jetbrains_skia_Path__1nReset: () => Fi,
                    org_jetbrains_skia_Path__1nReverseAddPath: () => Tn,
                    org_jetbrains_skia_Path__1nRewind: () => Li,
                    org_jetbrains_skia_Path__1nSerializeToBytes: () => zn,
                    org_jetbrains_skia_Path__1nSetFillMode: () => wi,
                    org_jetbrains_skia_Path__1nSetLastPt: () => wn,
                    org_jetbrains_skia_Path__1nSetVolatile: () => xi,
                    org_jetbrains_skia_Path__1nSwap: () => Mi,
                    org_jetbrains_skia_Path__1nTangentArcTo: () => hn,
                    org_jetbrains_skia_Path__1nTransform: () => Bn,
                    org_jetbrains_skia_Path__1nUpdateBoundsCache: () => Zi,
                    org_jetbrains_skia_PictureRecorder__1nBeginRecording: () =>
                      Fs,
                    org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable:
                      () => vs,
                    org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture:
                      () => xs,
                    org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull:
                      () => Ms,
                    org_jetbrains_skia_PictureRecorder__1nGetFinalizer: () =>
                      ys,
                    org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas:
                      () => Cs,
                    org_jetbrains_skia_PictureRecorder__1nMake: () => Gs,
                    org_jetbrains_skia_Picture__1nGetApproximateBytesUsed: () =>
                      Ss,
                    org_jetbrains_skia_Picture__1nGetApproximateOpCount: () =>
                      ms,
                    org_jetbrains_skia_Picture__1nGetCullRect: () => hs,
                    org_jetbrains_skia_Picture__1nGetUniqueId: () => cs,
                    org_jetbrains_skia_Picture__1nMakeFromData: () => ps,
                    org_jetbrains_skia_Picture__1nMakePlaceholder: () => us,
                    org_jetbrains_skia_Picture__1nMakeShader: () => fs,
                    org_jetbrains_skia_Picture__1nPlayback: () => Ps,
                    org_jetbrains_skia_Picture__1nSerializeToData: () => ds,
                    org_jetbrains_skia_PixelRef__1nGetGenerationId: () => Rs,
                    org_jetbrains_skia_PixelRef__1nGetHeight: () => Es,
                    org_jetbrains_skia_PixelRef__1nGetRowBytes: () => Ts,
                    org_jetbrains_skia_PixelRef__1nGetWidth: () => Ds,
                    org_jetbrains_skia_PixelRef__1nIsImmutable: () => Is,
                    org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged: () =>
                      Bs,
                    org_jetbrains_skia_PixelRef__1nSetImmutable: () => ws,
                    org_jetbrains_skia_Pixmap__1nComputeByteSize: () => Us,
                    org_jetbrains_skia_Pixmap__1nComputeIsOpaque: () => Os,
                    org_jetbrains_skia_Pixmap__1nErase: () => to,
                    org_jetbrains_skia_Pixmap__1nEraseSubset: () => io,
                    org_jetbrains_skia_Pixmap__1nExtractSubset: () => zs,
                    org_jetbrains_skia_Pixmap__1nGetAddr: () => Ys,
                    org_jetbrains_skia_Pixmap__1nGetAddrAt: () => Js,
                    org_jetbrains_skia_Pixmap__1nGetAlphaF: () => Qs,
                    org_jetbrains_skia_Pixmap__1nGetColor: () => Ws,
                    org_jetbrains_skia_Pixmap__1nGetFinalizer: () => As,
                    org_jetbrains_skia_Pixmap__1nGetInfo: () => Xs,
                    org_jetbrains_skia_Pixmap__1nGetRowBytes: () => Vs,
                    org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels: () => Hs,
                    org_jetbrains_skia_Pixmap__1nMake: () => $s,
                    org_jetbrains_skia_Pixmap__1nMakeNull: () => Ns,
                    org_jetbrains_skia_Pixmap__1nReadPixels: () => Zs,
                    org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint: () => _o,
                    org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap: () => ao,
                    org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint:
                      () => eo,
                    org_jetbrains_skia_Pixmap__1nReset: () => Ls,
                    org_jetbrains_skia_Pixmap__1nResetWithInfo: () => Ks,
                    org_jetbrains_skia_Pixmap__1nScalePixels: () => ro,
                    org_jetbrains_skia_Pixmap__1nSetColorSpace: () => qs,
                    org_jetbrains_skia_RTreeFactory__1nMake: () => p,
                    org_jetbrains_skia_Region__1nComputeRegionComplexity: () =>
                      jo,
                    org_jetbrains_skia_Region__1nContainsIPoint: () => Go,
                    org_jetbrains_skia_Region__1nContainsIRect: () => yo,
                    org_jetbrains_skia_Region__1nContainsRegion: () => Fo,
                    org_jetbrains_skia_Region__1nGetBoundaryPath: () => po,
                    org_jetbrains_skia_Region__1nGetBounds: () => ko,
                    org_jetbrains_skia_Region__1nGetFinalizer: () => so,
                    org_jetbrains_skia_Region__1nIntersectsIRect: () => fo,
                    org_jetbrains_skia_Region__1nIntersectsRegion: () => Po,
                    org_jetbrains_skia_Region__1nIsComplex: () => bo,
                    org_jetbrains_skia_Region__1nIsEmpty: () => oo,
                    org_jetbrains_skia_Region__1nIsRect: () => go,
                    org_jetbrains_skia_Region__1nMake: () => no,
                    org_jetbrains_skia_Region__1nOpIRect: () => To,
                    org_jetbrains_skia_Region__1nOpIRectRegion: () => Bo,
                    org_jetbrains_skia_Region__1nOpRegion: () => Ro,
                    org_jetbrains_skia_Region__1nOpRegionIRect: () => Io,
                    org_jetbrains_skia_Region__1nOpRegionRegion: () => wo,
                    org_jetbrains_skia_Region__1nQuickContains: () => Co,
                    org_jetbrains_skia_Region__1nQuickRejectIRect: () => xo,
                    org_jetbrains_skia_Region__1nQuickRejectRegion: () => Mo,
                    org_jetbrains_skia_Region__1nSet: () => lo,
                    org_jetbrains_skia_Region__1nSetEmpty: () => ho,
                    org_jetbrains_skia_Region__1nSetPath: () => So,
                    org_jetbrains_skia_Region__1nSetRect: () => co,
                    org_jetbrains_skia_Region__1nSetRects: () => uo,
                    org_jetbrains_skia_Region__1nSetRegion: () => mo,
                    org_jetbrains_skia_Region__1nTranslate: () => vo,
                    org_jetbrains_skia_RuntimeEffect__1Result_nDestroy: () =>
                      Vo,
                    org_jetbrains_skia_RuntimeEffect__1Result_nGetError: () =>
                      zo,
                    org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr: () => Lo,
                    org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter:
                      () => Ao,
                    org_jetbrains_skia_RuntimeEffect__1nMakeForShader: () => Eo,
                    org_jetbrains_skia_RuntimeEffect__1nMakeShader: () => Do,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter:
                      () => ag,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader:
                      () => _g,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer:
                      () => Uo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect:
                      () => Ho,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader: () =>
                      eg,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat:
                      () => Ko,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2:
                      () => qo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3:
                      () => Xo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4:
                      () => Yo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22:
                      () => Qo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33:
                      () => Jo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44:
                      () => Zo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt: () =>
                      Oo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2:
                      () => Wo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3:
                      () => No,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4:
                      () => $o,
                    org_jetbrains_skia_Shader__1nMakeBlend: () => dg,
                    org_jetbrains_skia_Shader__1nMakeColor: () => hg,
                    org_jetbrains_skia_Shader__1nMakeColorCS: () => cg,
                    org_jetbrains_skia_Shader__1nMakeEmpty: () => rg,
                    org_jetbrains_skia_Shader__1nMakeFractalNoise: () => jg,
                    org_jetbrains_skia_Shader__1nMakeLinearGradient: () => ig,
                    org_jetbrains_skia_Shader__1nMakeLinearGradientCS: () => ng,
                    org_jetbrains_skia_Shader__1nMakeRadialGradient: () => sg,
                    org_jetbrains_skia_Shader__1nMakeRadialGradientCS: () => og,
                    org_jetbrains_skia_Shader__1nMakeSweepGradient: () => lg,
                    org_jetbrains_skia_Shader__1nMakeSweepGradientCS: () => bg,
                    org_jetbrains_skia_Shader__1nMakeTurbulence: () => pg,
                    org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient:
                      () => gg,
                    org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS:
                      () => kg,
                    org_jetbrains_skia_Shader__1nMakeWithColorFilter: () => tg,
                    org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor:
                      () => mg,
                    org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor:
                      () => Sg,
                    org_jetbrains_skia_ShadowUtils__1nDrawShadow: () => ug,
                    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray: () =>
                      Pg,
                    org_jetbrains_skia_StdVectorDecoder__1nGetArraySize: () =>
                      fg,
                    org_jetbrains_skia_StdVectorDecoder__1nReleaseElement: () =>
                      Gg,
                    org_jetbrains_skia_Surface__1nDraw: () => $g,
                    org_jetbrains_skia_Surface__1nFlush: () => vg,
                    org_jetbrains_skia_Surface__1nFlushAndSubmit: () => Yg,
                    org_jetbrains_skia_Surface__1nGenerationId: () => Lg,
                    org_jetbrains_skia_Surface__1nGetCanvas: () => Hg,
                    org_jetbrains_skia_Surface__1nGetHeight: () => Fg,
                    org_jetbrains_skia_Surface__1nGetImageInfo: () => Cg,
                    org_jetbrains_skia_Surface__1nGetRecordingContext: () => Vg,
                    org_jetbrains_skia_Surface__1nGetWidth: () => yg,
                    org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget:
                      () => wg,
                    org_jetbrains_skia_Surface__1nMakeFromMTKView: () => Dg,
                    org_jetbrains_skia_Surface__1nMakeImageSnapshot: () => Wg,
                    org_jetbrains_skia_Surface__1nMakeImageSnapshotR: () => Ng,
                    org_jetbrains_skia_Surface__1nMakeNull: () => Ag,
                    org_jetbrains_skia_Surface__1nMakeRaster: () => Bg,
                    org_jetbrains_skia_Surface__1nMakeRasterDirect: () => Tg,
                    org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap:
                      () => Rg,
                    org_jetbrains_skia_Surface__1nMakeRasterN32Premul: () => Ig,
                    org_jetbrains_skia_Surface__1nMakeRenderTarget: () => Eg,
                    org_jetbrains_skia_Surface__1nMakeSurface: () => Og,
                    org_jetbrains_skia_Surface__1nMakeSurfaceI: () => Ug,
                    org_jetbrains_skia_Surface__1nNotifyContentWillChange: () =>
                      zg,
                    org_jetbrains_skia_Surface__1nPeekPixels: () => Kg,
                    org_jetbrains_skia_Surface__1nReadPixels: () => xg,
                    org_jetbrains_skia_Surface__1nReadPixelsToPixmap: () => qg,
                    org_jetbrains_skia_Surface__1nUnique: () => Qg,
                    org_jetbrains_skia_Surface__1nWritePixels: () => Mg,
                    org_jetbrains_skia_Surface__1nWritePixelsFromPixmap: () =>
                      Xg,
                    org_jetbrains_skia_TextBlobBuilderRunHandler__1nGetFinalizer:
                      () => Kp,
                    org_jetbrains_skia_TextBlobBuilderRunHandler__1nMake: () =>
                      qp,
                    org_jetbrains_skia_TextBlobBuilderRunHandler__1nMakeBlob:
                      () => Xp,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRun: () => Mk,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos: () =>
                      Tk,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH: () =>
                      vk,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform:
                      () => Rk,
                    org_jetbrains_skia_TextBlobBuilder__1nBuild: () => xk,
                    org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer: () =>
                      Fk,
                    org_jetbrains_skia_TextBlobBuilder__1nMake: () => Ck,
                    org_jetbrains_skia_TextBlob_Iter__1nCreate: () => uk,
                    org_jetbrains_skia_TextBlob_Iter__1nFetch: () => Sk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer: () => mk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount: () => Gk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs: () => yk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetTypeface: () => fk,
                    org_jetbrains_skia_TextBlob_Iter__1nHasNext: () => Pk,
                    org_jetbrains_skia_TextBlob__1nBounds: () => ek,
                    org_jetbrains_skia_TextBlob__1nGetBlockBounds: () => hk,
                    org_jetbrains_skia_TextBlob__1nGetClusters: () => jk,
                    org_jetbrains_skia_TextBlob__1nGetClustersLength: () => bk,
                    org_jetbrains_skia_TextBlob__1nGetFinalizer: () => Jg,
                    org_jetbrains_skia_TextBlob__1nGetFirstBaseline: () => ck,
                    org_jetbrains_skia_TextBlob__1nGetGlyphs: () => gk,
                    org_jetbrains_skia_TextBlob__1nGetGlyphsLength: () => ok,
                    org_jetbrains_skia_TextBlob__1nGetIntercepts: () => tk,
                    org_jetbrains_skia_TextBlob__1nGetInterceptsLength: () =>
                      rk,
                    org_jetbrains_skia_TextBlob__1nGetLastBaseline: () => dk,
                    org_jetbrains_skia_TextBlob__1nGetPositions: () => lk,
                    org_jetbrains_skia_TextBlob__1nGetPositionsLength: () => kk,
                    org_jetbrains_skia_TextBlob__1nGetTightBounds: () => pk,
                    org_jetbrains_skia_TextBlob__1nGetUniqueId: () => Zg,
                    org_jetbrains_skia_TextBlob__1nMakeFromData: () => ak,
                    org_jetbrains_skia_TextBlob__1nMakeFromPos: () => nk,
                    org_jetbrains_skia_TextBlob__1nMakeFromPosH: () => ik,
                    org_jetbrains_skia_TextBlob__1nMakeFromRSXform: () => sk,
                    org_jetbrains_skia_TextBlob__1nSerializeToData: () => _k,
                    org_jetbrains_skia_TextLine__1nGetAscent: () => Lk,
                    org_jetbrains_skia_TextLine__1nGetBreakOffsets: () => Xk,
                    org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount: () =>
                      qk,
                    org_jetbrains_skia_TextLine__1nGetBreakPositions: () => Kk,
                    org_jetbrains_skia_TextLine__1nGetBreakPositionsCount: () =>
                      $k,
                    org_jetbrains_skia_TextLine__1nGetCapHeight: () => zk,
                    org_jetbrains_skia_TextLine__1nGetCoordAtOffset: () => Jk,
                    org_jetbrains_skia_TextLine__1nGetDescent: () => Hk,
                    org_jetbrains_skia_TextLine__1nGetFinalizer: () => Bk,
                    org_jetbrains_skia_TextLine__1nGetGlyphs: () => Ek,
                    org_jetbrains_skia_TextLine__1nGetGlyphsLength: () => Dk,
                    org_jetbrains_skia_TextLine__1nGetHeight: () => wk,
                    org_jetbrains_skia_TextLine__1nGetLeading: () => Uk,
                    org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord: () =>
                      Qk,
                    org_jetbrains_skia_TextLine__1nGetOffsetAtCoord: () => Yk,
                    org_jetbrains_skia_TextLine__1nGetPositions: () => Ak,
                    org_jetbrains_skia_TextLine__1nGetRunPositions: () => Wk,
                    org_jetbrains_skia_TextLine__1nGetRunPositionsCount: () =>
                      Nk,
                    org_jetbrains_skia_TextLine__1nGetTextBlob: () => Ok,
                    org_jetbrains_skia_TextLine__1nGetWidth: () => Ik,
                    org_jetbrains_skia_TextLine__1nGetXHeight: () => Vk,
                    org_jetbrains_skia_Typeface__1nEquals: () => _l,
                    org_jetbrains_skia_Typeface__1nGetBounds: () => tl,
                    org_jetbrains_skia_Typeface__1nGetFamilyName: () => yl,
                    org_jetbrains_skia_Typeface__1nGetFamilyNames: () => Gl,
                    org_jetbrains_skia_Typeface__1nGetFontStyle: () => il,
                    org_jetbrains_skia_Typeface__1nGetGlyphsCount: () => hl,
                    org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments:
                      () => Pl,
                    org_jetbrains_skia_Typeface__1nGetTableData: () => Sl,
                    org_jetbrains_skia_Typeface__1nGetTableSize: () => ml,
                    org_jetbrains_skia_Typeface__1nGetTableTags: () => ul,
                    org_jetbrains_skia_Typeface__1nGetTableTagsCount: () => dl,
                    org_jetbrains_skia_Typeface__1nGetTablesCount: () => cl,
                    org_jetbrains_skia_Typeface__1nGetUTF32Glyph: () => rl,
                    org_jetbrains_skia_Typeface__1nGetUTF32Glyphs: () => el,
                    org_jetbrains_skia_Typeface__1nGetUniqueId: () => Zk,
                    org_jetbrains_skia_Typeface__1nGetUnitsPerEm: () => fl,
                    org_jetbrains_skia_Typeface__1nGetVariationAxes: () => kl,
                    org_jetbrains_skia_Typeface__1nGetVariationAxesCount: () =>
                      gl,
                    org_jetbrains_skia_Typeface__1nGetVariations: () => ol,
                    org_jetbrains_skia_Typeface__1nGetVariationsCount: () => sl,
                    org_jetbrains_skia_Typeface__1nIsFixedPitch: () => nl,
                    org_jetbrains_skia_Typeface__1nMakeClone: () => pl,
                    org_jetbrains_skia_Typeface__1nMakeDefault: () => al,
                    org_jetbrains_skia_Typeface__1nMakeFromData: () => jl,
                    org_jetbrains_skia_Typeface__1nMakeFromFile: () => bl,
                    org_jetbrains_skia_Typeface__1nMakeFromName: () => ll,
                    org_jetbrains_skia_U16String__1nGetFinalizer: () => Fl,
                    org_jetbrains_skia_icu_Unicode_charDirection: () => Cl,
                    org_jetbrains_skia_impl_Managed__invokeFinalizer: () => Kh,
                    org_jetbrains_skia_impl_RefCnt__getFinalizer: () => Yh,
                    org_jetbrains_skia_impl_RefCnt__getRefCount: () => Qh,
                    org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback:
                      () => El,
                    org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar:
                      () => Dl,
                    org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces:
                      () => wl,
                    org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager:
                      () => Il,
                    org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount:
                      () => Ml,
                    org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache:
                      () => Ll,
                    org_jetbrains_skia_paragraph_FontCollection__1nMake: () =>
                      xl,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager:
                      () => vl,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager:
                      () => Bl,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager:
                      () => Tl,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback:
                      () => Al,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager:
                      () => Rl,
                    org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray:
                      () => Vl,
                    org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement:
                      () => Hl,
                    org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize:
                      () => zl,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder:
                      () => cb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText:
                      () => hb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild:
                      () => db,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer:
                      () => lb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake: () =>
                      bb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle:
                      () => pb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle:
                      () => jb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon:
                      () => ub,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph:
                      () => fb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount:
                      () => yb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics:
                      () => Pb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nReset: () =>
                      mb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled:
                      () => Gb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph:
                      () => Sb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting:
                      () => $b,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals: () =>
                      Mb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment:
                      () => Db,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection:
                      () => Ib,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging:
                      () => qb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment:
                      () => Wb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis:
                      () => zb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer:
                      () => Fb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight:
                      () => xb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode:
                      () => Ub,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting:
                      () => Xb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount:
                      () => Ab,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle:
                      () => vb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel:
                      () => Yb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent:
                      () => Jb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle:
                      () => Rb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled:
                      () => Nb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nMake: () =>
                      Cb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment:
                      () => Eb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection:
                      () => wb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis:
                      () => Vb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings:
                      () => Kb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight:
                      () => Hb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode:
                      () => Ob,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount:
                      () => Lb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle:
                      () => Tb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent:
                      () => Qb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle:
                      () => Bb,
                    org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines:
                      () => Yl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline:
                      () => Kl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer:
                      () => Ul,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate:
                      () => ab,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetHeight: () =>
                      Wl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline:
                      () => ql,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics:
                      () => rb,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber:
                      () => tb,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine:
                      () => Xl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth:
                      () => $l,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth: () =>
                      Ol,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth:
                      () => Nl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders:
                      () => _b,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange:
                      () => Zl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount:
                      () => nb,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary:
                      () => eb,
                    org_jetbrains_skia_paragraph_Paragraph__1nLayout: () => Ql,
                    org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty: () =>
                      ib,
                    org_jetbrains_skia_paragraph_Paragraph__1nPaint: () => Jl,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment:
                      () => sb,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint:
                      () => kb,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize:
                      () => ob,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint:
                      () => gb,
                    org_jetbrains_skia_paragraph_StrutStyle__1nEquals: () => aj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer:
                      () => Zb,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies:
                      () => ij,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize:
                      () => gj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle:
                      () => sj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight: () =>
                      ej,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading: () =>
                      lj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled: () =>
                      jj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading:
                      () => uj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced:
                      () => pj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden:
                      () => cj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nMake: () => _j,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled: () =>
                      tj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies:
                      () => nj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize:
                      () => kj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle:
                      () => oj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading:
                      () => mj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight: () =>
                      rj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced:
                      () => hj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden:
                      () => dj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading: () =>
                      bj,
                    org_jetbrains_skia_paragraph_TextBox__1nDisposeArray: () =>
                      fj,
                    org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement:
                      () => Pj,
                    org_jetbrains_skia_paragraph_TextBox__1nGetArraySize: () =>
                      Sj,
                    org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature:
                      () => Jj,
                    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow: () =>
                      qj,
                    org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals:
                      () => Aj,
                    org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures:
                      () => Zj,
                    org_jetbrains_skia_paragraph_TextStyle__1nClearShadows:
                      () => Xj,
                    org_jetbrains_skia_paragraph_TextStyle__1nEquals: () => Fj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetBackground:
                      () => Uj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode:
                      () => gp,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift:
                      () => Dj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetColor: () =>
                      Lj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle:
                      () => Wj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer:
                      () => Gj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies:
                      () => Tj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures:
                      () => Yj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize:
                      () => Qj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics:
                      () => lp,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize: () =>
                      Mj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle:
                      () => Cj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetForeground:
                      () => Vj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading:
                      () => Ij,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetHeight: () =>
                      Rj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing:
                      () => ap,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetLocale: () =>
                      sp,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetShadows: () =>
                      Kj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount:
                      () => $j,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface: () =>
                      ip,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing:
                      () => rp,
                    org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder:
                      () => bp,
                    org_jetbrains_skia_paragraph_TextStyle__1nMake: () => yj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetBackground:
                      () => Oj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode:
                      () => kp,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift:
                      () => Ej,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetColor: () =>
                      zj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle:
                      () => Nj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies:
                      () => _p,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize: () =>
                      vj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle:
                      () => xj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetForeground:
                      () => Hj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading:
                      () => wj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetHeight: () =>
                      Bj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing:
                      () => ep,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetLocale: () =>
                      op,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder:
                      () => jp,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface: () =>
                      np,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing:
                      () => tp,
                    org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake:
                      () => pp,
                    org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface:
                      () => hp,
                    org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont:
                      () => dp,
                    org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake: () =>
                      cp,
                    org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag:
                      () => mp,
                    org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake:
                      () => up,
                    org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel:
                      () => fp,
                    org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake: () =>
                      Sp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume:
                      () => Gp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun:
                      () => yp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer:
                      () => Pp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd:
                      () => Fp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate: () =>
                      zp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters:
                      () => Op,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer:
                      () => Vp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs:
                      () => Up,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions:
                      () => Wp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo:
                      () => $p,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit: () =>
                      Hp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset:
                      () => Np,
                    org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator:
                      () => Ap,
                    org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer:
                      () => Ep,
                    org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator:
                      () => Lp,
                    org_jetbrains_skia_shaper_Shaper__1nGetFinalizer: () => Cp,
                    org_jetbrains_skia_shaper_Shaper__1nMake: () => xp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeCoreText: () => Bp,
                    org_jetbrains_skia_shaper_Shaper__1nMakePrimitive: () => Mp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder:
                      () => Rp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap: () =>
                      Tp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper:
                      () => vp,
                    org_jetbrains_skia_shaper_Shaper__1nShape: () => Dp,
                    org_jetbrains_skia_shaper_Shaper__1nShapeBlob: () => Ip,
                    org_jetbrains_skia_shaper_Shaper__1nShapeLine: () => wp,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData:
                      () => ch,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile:
                      () => hh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString:
                      () => ph,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer:
                      () => kh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nMake: () =>
                      lh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager:
                      () => bh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger:
                      () => jh,
                    org_jetbrains_skia_skottie_Animation__1nGetDuration: () =>
                      th,
                    org_jetbrains_skia_skottie_Animation__1nGetFPS: () => ih,
                    org_jetbrains_skia_skottie_Animation__1nGetFinalizer: () =>
                      Yp,
                    org_jetbrains_skia_skottie_Animation__1nGetInPoint: () =>
                      nh,
                    org_jetbrains_skia_skottie_Animation__1nGetOutPoint: () =>
                      sh,
                    org_jetbrains_skia_skottie_Animation__1nGetSize: () => gh,
                    org_jetbrains_skia_skottie_Animation__1nGetVersion: () =>
                      oh,
                    org_jetbrains_skia_skottie_Animation__1nMakeFromData: () =>
                      Zp,
                    org_jetbrains_skia_skottie_Animation__1nMakeFromFile: () =>
                      Jp,
                    org_jetbrains_skia_skottie_Animation__1nMakeFromString:
                      () => Qp,
                    org_jetbrains_skia_skottie_Animation__1nRender: () => _h,
                    org_jetbrains_skia_skottie_Animation__1nSeek: () => ah,
                    org_jetbrains_skia_skottie_Animation__1nSeekFrame: () => eh,
                    org_jetbrains_skia_skottie_Animation__1nSeekFrameTime: () =>
                      rh,
                    org_jetbrains_skia_skottie_Logger__1nGetLogJson: () => Sh,
                    org_jetbrains_skia_skottie_Logger__1nGetLogLevel: () => fh,
                    org_jetbrains_skia_skottie_Logger__1nGetLogMessage: () =>
                      mh,
                    org_jetbrains_skia_skottie_Logger__1nInit: () => uh,
                    org_jetbrains_skia_skottie_Logger__1nMake: () => dh,
                    org_jetbrains_skia_sksg_InvalidationController_nGetBounds:
                      () => Fh,
                    org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer:
                      () => Ph,
                    org_jetbrains_skia_sksg_InvalidationController_nInvalidate:
                      () => yh,
                    org_jetbrains_skia_sksg_InvalidationController_nMake: () =>
                      Gh,
                    org_jetbrains_skia_sksg_InvalidationController_nReset: () =>
                      Ch,
                    org_jetbrains_skia_svg_SVGCanvasKt__1nMake: () => xh,
                    org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize: () => Th,
                    org_jetbrains_skia_svg_SVGDOM__1nGetRoot: () => vh,
                    org_jetbrains_skia_svg_SVGDOM__1nMakeFromData: () => Mh,
                    org_jetbrains_skia_svg_SVGDOM__1nRender: () => Bh,
                    org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize: () => Rh,
                    org_jetbrains_skia_svg_SVGNode__1nGetTag: () => Ih,
                    org_jetbrains_skia_svg_SVGSVG__1nGetHeight: () => Ah,
                    org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize: () => Vh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio:
                      () => Lh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetViewBox: () => zh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetWidth: () => Eh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetX: () => wh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetY: () => Dh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetHeight: () => Wh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio:
                      () => Nh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetViewBox: () => $h,
                    org_jetbrains_skia_svg_SVGSVG__1nSetWidth: () => Oh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetX: () => Hh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetY: () => Uh,
                    skia_memGetByte: () => Zh,
                    skia_memGetChar: () => ac,
                    skia_memGetDouble: () => gc,
                    skia_memGetFloat: () => sc,
                    skia_memGetInt: () => ic,
                    skia_memGetShort: () => rc,
                    skia_memSetByte: () => Jh,
                    skia_memSetChar: () => _c,
                    skia_memSetDouble: () => oc,
                    skia_memSetFloat: () => nc,
                    skia_memSetInt: () => tc,
                    skia_memSetShort: () => ec,
                  });
                var t =
                  ((i =
                    "file:///home/daniil/source/IntelliJIdeaProjects/HubsMainWebPage/build/js/packages/composeApp/kotlin/skiko.mjs"),
                  async function (_ = {}) {
                    var a,
                      r,
                      t = _;
                    t.ready = new Promise((_, e) => {
                      (a = _), (r = e);
                    });
                    var n,
                      o,
                      k,
                      l = Object.assign({}, t),
                      b = "./this.program",
                      j = (_, a) => {
                        throw a;
                      },
                      p = "object" == typeof window,
                      h = "function" == typeof importScripts,
                      c =
                        "object" == typeof process &&
                        "object" == typeof process.versions &&
                        "string" == typeof process.versions.node,
                      d = "";
                    (p || h) &&
                      (h
                        ? (d = self.location.href)
                        : "undefined" != typeof document &&
                          document.currentScript &&
                          (d = document.currentScript.src),
                      i && (d = i),
                      (d =
                        0 !== d.indexOf("blob:")
                          ? d.substr(
                              0,
                              d.replace(/[?#].*/, "").lastIndexOf("/") + 1,
                            )
                          : ""),
                      (n = (_) => {
                        var a = new XMLHttpRequest();
                        return (
                          a.open("GET", _, !1), a.send(null), a.responseText
                        );
                      }),
                      h &&
                        (k = (_) => {
                          var a = new XMLHttpRequest();
                          return (
                            a.open("GET", _, !1),
                            (a.responseType = "arraybuffer"),
                            a.send(null),
                            new Uint8Array(a.response)
                          );
                        }),
                      (o = (_, a, e) => {
                        var r = new XMLHttpRequest();
                        r.open("GET", _, !0),
                          (r.responseType = "arraybuffer"),
                          (r.onload = () => {
                            200 == r.status || (0 == r.status && r.response)
                              ? a(r.response)
                              : e();
                          }),
                          (r.onerror = e),
                          r.send(null);
                      }));
                    var u,
                      m,
                      S = t.print || console.log.bind(console),
                      f = t.printErr || console.error.bind(console);
                    Object.assign(t, l),
                      (l = null),
                      t.arguments && t.arguments,
                      t.thisProgram && (b = t.thisProgram),
                      t.quit && (j = t.quit),
                      t.wasmBinary && (u = t.wasmBinary),
                      "object" != typeof WebAssembly &&
                        V("no native wasm support detected");
                    var P,
                      G,
                      y,
                      F,
                      C,
                      x,
                      M,
                      v,
                      T = !1;
                    function R() {
                      var _ = m.buffer;
                      (t.HEAP8 = P = new Int8Array(_)),
                        (t.HEAP16 = y = new Int16Array(_)),
                        (t.HEAPU8 = G = new Uint8Array(_)),
                        (t.HEAPU16 = F = new Uint16Array(_)),
                        (t.HEAP32 = C = new Int32Array(_)),
                        (t.HEAPU32 = x = new Uint32Array(_)),
                        (t.HEAPF32 = M = new Float32Array(_)),
                        (t.HEAPF64 = v = new Float64Array(_));
                    }
                    var B = [],
                      I = [],
                      w = [],
                      D = 0,
                      E = null,
                      A = null;
                    function L(_) {
                      D++,
                        t.monitorRunDependencies && t.monitorRunDependencies(D);
                    }
                    function z(_) {
                      if (
                        (D--,
                        t.monitorRunDependencies && t.monitorRunDependencies(D),
                        0 == D &&
                          (null !== E && (clearInterval(E), (E = null)), A))
                      ) {
                        var a = A;
                        (A = null), a();
                      }
                    }
                    function V(_) {
                      t.onAbort && t.onAbort(_),
                        f((_ = "Aborted(" + _ + ")")),
                        (T = !0),
                        (_ += ". Build with -sASSERTIONS for more info.");
                      var a = new WebAssembly.RuntimeError(_);
                      throw (r(a), a);
                    }
                    var H,
                      U,
                      O,
                      W,
                      N = (_) =>
                        _.startsWith("data:application/octet-stream;base64,"),
                      $ = (_) => _.startsWith("file://");
                    function K(_) {
                      if (_ == H && u) return new Uint8Array(u);
                      if (k) return k(_);
                      throw "both async and sync fetching of the wasm failed";
                    }
                    function q(_, a, e) {
                      return (function (_) {
                        if (!u && (p || h)) {
                          if ("function" == typeof fetch && !$(_))
                            return fetch(_, { credentials: "same-origin" })
                              .then((a) => {
                                if (!a.ok)
                                  throw (
                                    "failed to load wasm binary file at '" +
                                    _ +
                                    "'"
                                  );
                                return a.arrayBuffer();
                              })
                              .catch(() => K(_));
                          if (o)
                            return new Promise((a, e) => {
                              o(_, (_) => a(new Uint8Array(_)), e);
                            });
                        }
                        return Promise.resolve().then(() => K(_));
                      })(_)
                        .then((_) => WebAssembly.instantiate(_, a))
                        .then((_) => _)
                        .then(e, (_) => {
                          f(`failed to asynchronously prepare wasm: ${_}`),
                            V(_);
                        });
                    }
                    t.locateFile
                      ? N((H = "skiko.wasm")) ||
                        ((U = H),
                        (H = t.locateFile ? t.locateFile(U, d) : d + U))
                      : (H = new URL(e(108), e.b).href);
                    var X = {
                      1873856: (_) => {
                        g(_);
                      },
                      1873881: (_) => (s(_).value ? 1 : 0),
                      1873925: (_) => s(_).value,
                      1873961: (_) => s(_).value,
                      1873997: (_) => s(_).value,
                      1874033: (_) => {
                        s(_);
                      },
                    };
                    function Y(_) {
                      (this.name = "ExitStatus"),
                        (this.message = `Program terminated with exit(${_})`),
                        (this.status = _);
                    }
                    var Q = (_) => {
                        for (; _.length > 0; ) _.shift()(t);
                      },
                      J = t.noExitRuntime || !0,
                      Z = {
                        isAbs: (_) => "/" === _.charAt(0),
                        splitPath: (_) =>
                          /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                            .exec(_)
                            .slice(1),
                        normalizeArray: (_, a) => {
                          for (var e = 0, r = _.length - 1; r >= 0; r--) {
                            var t = _[r];
                            "." === t
                              ? _.splice(r, 1)
                              : ".." === t
                                ? (_.splice(r, 1), e++)
                                : e && (_.splice(r, 1), e--);
                          }
                          if (a) for (; e; e--) _.unshift("..");
                          return _;
                        },
                        normalize: (_) => {
                          var a = Z.isAbs(_),
                            e = "/" === _.substr(-1);
                          return (
                            (_ = Z.normalizeArray(
                              _.split("/").filter((_) => !!_),
                              !a,
                            ).join("/")) ||
                              a ||
                              (_ = "."),
                            _ && e && (_ += "/"),
                            (a ? "/" : "") + _
                          );
                        },
                        dirname: (_) => {
                          var a = Z.splitPath(_),
                            e = a[0],
                            r = a[1];
                          return e || r
                            ? (r && (r = r.substr(0, r.length - 1)), e + r)
                            : ".";
                        },
                        basename: (_) => {
                          if ("/" === _) return "/";
                          var a = (_ = (_ = Z.normalize(_)).replace(
                            /\/$/,
                            "",
                          )).lastIndexOf("/");
                          return -1 === a ? _ : _.substr(a + 1);
                        },
                        join: function () {
                          var _ = Array.prototype.slice.call(arguments);
                          return Z.normalize(_.join("/"));
                        },
                        join2: (_, a) => Z.normalize(_ + "/" + a),
                      },
                      __ = (_) =>
                        (__ = (() => {
                          if (
                            "object" == typeof crypto &&
                            "function" == typeof crypto.getRandomValues
                          )
                            return (_) => crypto.getRandomValues(_);
                          V("initRandomDevice");
                        })())(_),
                      a_ = {
                        resolve: function () {
                          for (
                            var _ = "", a = !1, e = arguments.length - 1;
                            e >= -1 && !a;
                            e--
                          ) {
                            var r = e >= 0 ? arguments[e] : h_.cwd();
                            if ("string" != typeof r)
                              throw new TypeError(
                                "Arguments to path.resolve must be strings",
                              );
                            if (!r) return "";
                            (_ = r + "/" + _), (a = Z.isAbs(r));
                          }
                          return (
                            (a ? "/" : "") +
                              (_ = Z.normalizeArray(
                                _.split("/").filter((_) => !!_),
                                !a,
                              ).join("/")) || "."
                          );
                        },
                        relative: (_, a) => {
                          function e(_) {
                            for (var a = 0; a < _.length && "" === _[a]; a++);
                            for (
                              var e = _.length - 1;
                              e >= 0 && "" === _[e];
                              e--
                            );
                            return a > e ? [] : _.slice(a, e - a + 1);
                          }
                          (_ = a_.resolve(_).substr(1)),
                            (a = a_.resolve(a).substr(1));
                          for (
                            var r = e(_.split("/")),
                              t = e(a.split("/")),
                              i = Math.min(r.length, t.length),
                              n = i,
                              s = 0;
                            s < i;
                            s++
                          )
                            if (r[s] !== t[s]) {
                              n = s;
                              break;
                            }
                          var o = [];
                          for (s = n; s < r.length; s++) o.push("..");
                          return (o = o.concat(t.slice(n))).join("/");
                        },
                      },
                      e_ =
                        "undefined" != typeof TextDecoder
                          ? new TextDecoder("utf8")
                          : void 0,
                      r_ = (_, a, e) => {
                        for (var r = a + e, t = a; _[t] && !(t >= r); ) ++t;
                        if (t - a > 16 && _.buffer && e_)
                          return e_.decode(_.subarray(a, t));
                        for (var i = ""; a < t; ) {
                          var n = _[a++];
                          if (128 & n) {
                            var s = 63 & _[a++];
                            if (192 != (224 & n)) {
                              var o = 63 & _[a++];
                              if (
                                (n =
                                  224 == (240 & n)
                                    ? ((15 & n) << 12) | (s << 6) | o
                                    : ((7 & n) << 18) |
                                      (s << 12) |
                                      (o << 6) |
                                      (63 & _[a++])) < 65536
                              )
                                i += String.fromCharCode(n);
                              else {
                                var g = n - 65536;
                                i += String.fromCharCode(
                                  55296 | (g >> 10),
                                  56320 | (1023 & g),
                                );
                              }
                            } else
                              i += String.fromCharCode(((31 & n) << 6) | s);
                          } else i += String.fromCharCode(n);
                        }
                        return i;
                      },
                      t_ = [],
                      i_ = (_) => {
                        for (var a = 0, e = 0; e < _.length; ++e) {
                          var r = _.charCodeAt(e);
                          r <= 127
                            ? a++
                            : r <= 2047
                              ? (a += 2)
                              : r >= 55296 && r <= 57343
                                ? ((a += 4), ++e)
                                : (a += 3);
                        }
                        return a;
                      },
                      n_ = (_, a, e, r) => {
                        if (!(r > 0)) return 0;
                        for (
                          var t = e, i = e + r - 1, n = 0;
                          n < _.length;
                          ++n
                        ) {
                          var s = _.charCodeAt(n);
                          if (
                            (s >= 55296 &&
                              s <= 57343 &&
                              (s =
                                (65536 + ((1023 & s) << 10)) |
                                (1023 & _.charCodeAt(++n))),
                            s <= 127)
                          ) {
                            if (e >= i) break;
                            a[e++] = s;
                          } else if (s <= 2047) {
                            if (e + 1 >= i) break;
                            (a[e++] = 192 | (s >> 6)),
                              (a[e++] = 128 | (63 & s));
                          } else if (s <= 65535) {
                            if (e + 2 >= i) break;
                            (a[e++] = 224 | (s >> 12)),
                              (a[e++] = 128 | ((s >> 6) & 63)),
                              (a[e++] = 128 | (63 & s));
                          } else {
                            if (e + 3 >= i) break;
                            (a[e++] = 240 | (s >> 18)),
                              (a[e++] = 128 | ((s >> 12) & 63)),
                              (a[e++] = 128 | ((s >> 6) & 63)),
                              (a[e++] = 128 | (63 & s));
                          }
                        }
                        return (a[e] = 0), e - t;
                      };
                    function s_(_, a, e) {
                      var r = e > 0 ? e : i_(_) + 1,
                        t = new Array(r),
                        i = n_(_, t, 0, t.length);
                      return a && (t.length = i), t;
                    }
                    var o_,
                      g_,
                      k_ = {
                        ttys: [],
                        init() {},
                        shutdown() {},
                        register(_, a) {
                          (k_.ttys[_] = { input: [], output: [], ops: a }),
                            h_.registerDevice(_, k_.stream_ops);
                        },
                        stream_ops: {
                          open(_) {
                            var a = k_.ttys[_.node.rdev];
                            if (!a) throw new h_.ErrnoError(43);
                            (_.tty = a), (_.seekable = !1);
                          },
                          close(_) {
                            _.tty.ops.fsync(_.tty);
                          },
                          fsync(_) {
                            _.tty.ops.fsync(_.tty);
                          },
                          read(_, a, e, r, t) {
                            if (!_.tty || !_.tty.ops.get_char)
                              throw new h_.ErrnoError(60);
                            for (var i = 0, n = 0; n < r; n++) {
                              var s;
                              try {
                                s = _.tty.ops.get_char(_.tty);
                              } catch (_) {
                                throw new h_.ErrnoError(29);
                              }
                              if (void 0 === s && 0 === i)
                                throw new h_.ErrnoError(6);
                              if (null == s) break;
                              i++, (a[e + n] = s);
                            }
                            return i && (_.node.timestamp = Date.now()), i;
                          },
                          write(_, a, e, r, t) {
                            if (!_.tty || !_.tty.ops.put_char)
                              throw new h_.ErrnoError(60);
                            try {
                              for (var i = 0; i < r; i++)
                                _.tty.ops.put_char(_.tty, a[e + i]);
                            } catch (_) {
                              throw new h_.ErrnoError(29);
                            }
                            return r && (_.node.timestamp = Date.now()), i;
                          },
                        },
                        default_tty_ops: {
                          get_char: (_) =>
                            (() => {
                              if (!t_.length) {
                                var _ = null;
                                if (
                                  ("undefined" != typeof window &&
                                  "function" == typeof window.prompt
                                    ? null !== (_ = window.prompt("Input: ")) &&
                                      (_ += "\n")
                                    : "function" == typeof readline &&
                                      null !== (_ = readline()) &&
                                      (_ += "\n"),
                                  !_)
                                )
                                  return null;
                                t_ = s_(_, !0);
                              }
                              return t_.shift();
                            })(),
                          put_char(_, a) {
                            null === a || 10 === a
                              ? (S(r_(_.output, 0)), (_.output = []))
                              : 0 != a && _.output.push(a);
                          },
                          fsync(_) {
                            _.output &&
                              _.output.length > 0 &&
                              (S(r_(_.output, 0)), (_.output = []));
                          },
                          ioctl_tcgets: (_) => ({
                            c_iflag: 25856,
                            c_oflag: 5,
                            c_cflag: 191,
                            c_lflag: 35387,
                            c_cc: [
                              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15,
                              23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              0, 0,
                            ],
                          }),
                          ioctl_tcsets: (_, a, e) => 0,
                          ioctl_tiocgwinsz: (_) => [24, 80],
                        },
                        default_tty1_ops: {
                          put_char(_, a) {
                            null === a || 10 === a
                              ? (f(r_(_.output, 0)), (_.output = []))
                              : 0 != a && _.output.push(a);
                          },
                          fsync(_) {
                            _.output &&
                              _.output.length > 0 &&
                              (f(r_(_.output, 0)), (_.output = []));
                          },
                        },
                      },
                      l_ = (_) => {
                        _ = ((_, a) => 65536 * Math.ceil(_ / 65536))(_);
                        var a = xa(65536, _);
                        return a
                          ? ((_, a) => (G.fill(0, _, _ + a), _))(a, _)
                          : 0;
                      },
                      b_ = {
                        ops_table: null,
                        mount: (_) => b_.createNode(null, "/", 16895, 0),
                        createNode(_, a, e, r) {
                          if (h_.isBlkdev(e) || h_.isFIFO(e))
                            throw new h_.ErrnoError(63);
                          b_.ops_table ||
                            (b_.ops_table = {
                              dir: {
                                node: {
                                  getattr: b_.node_ops.getattr,
                                  setattr: b_.node_ops.setattr,
                                  lookup: b_.node_ops.lookup,
                                  mknod: b_.node_ops.mknod,
                                  rename: b_.node_ops.rename,
                                  unlink: b_.node_ops.unlink,
                                  rmdir: b_.node_ops.rmdir,
                                  readdir: b_.node_ops.readdir,
                                  symlink: b_.node_ops.symlink,
                                },
                                stream: { llseek: b_.stream_ops.llseek },
                              },
                              file: {
                                node: {
                                  getattr: b_.node_ops.getattr,
                                  setattr: b_.node_ops.setattr,
                                },
                                stream: {
                                  llseek: b_.stream_ops.llseek,
                                  read: b_.stream_ops.read,
                                  write: b_.stream_ops.write,
                                  allocate: b_.stream_ops.allocate,
                                  mmap: b_.stream_ops.mmap,
                                  msync: b_.stream_ops.msync,
                                },
                              },
                              link: {
                                node: {
                                  getattr: b_.node_ops.getattr,
                                  setattr: b_.node_ops.setattr,
                                  readlink: b_.node_ops.readlink,
                                },
                                stream: {},
                              },
                              chrdev: {
                                node: {
                                  getattr: b_.node_ops.getattr,
                                  setattr: b_.node_ops.setattr,
                                },
                                stream: h_.chrdev_stream_ops,
                              },
                            });
                          var t = h_.createNode(_, a, e, r);
                          return (
                            h_.isDir(t.mode)
                              ? ((t.node_ops = b_.ops_table.dir.node),
                                (t.stream_ops = b_.ops_table.dir.stream),
                                (t.contents = {}))
                              : h_.isFile(t.mode)
                                ? ((t.node_ops = b_.ops_table.file.node),
                                  (t.stream_ops = b_.ops_table.file.stream),
                                  (t.usedBytes = 0),
                                  (t.contents = null))
                                : h_.isLink(t.mode)
                                  ? ((t.node_ops = b_.ops_table.link.node),
                                    (t.stream_ops = b_.ops_table.link.stream))
                                  : h_.isChrdev(t.mode) &&
                                    ((t.node_ops = b_.ops_table.chrdev.node),
                                    (t.stream_ops =
                                      b_.ops_table.chrdev.stream)),
                            (t.timestamp = Date.now()),
                            _ &&
                              ((_.contents[a] = t),
                              (_.timestamp = t.timestamp)),
                            t
                          );
                        },
                        getFileDataAsTypedArray: (_) =>
                          _.contents
                            ? _.contents.subarray
                              ? _.contents.subarray(0, _.usedBytes)
                              : new Uint8Array(_.contents)
                            : new Uint8Array(0),
                        expandFileStorage(_, a) {
                          var e = _.contents ? _.contents.length : 0;
                          if (!(e >= a)) {
                            (a = Math.max(
                              a,
                              (e * (e < 1048576 ? 2 : 1.125)) >>> 0,
                            )),
                              0 != e && (a = Math.max(a, 256));
                            var r = _.contents;
                            (_.contents = new Uint8Array(a)),
                              _.usedBytes > 0 &&
                                _.contents.set(r.subarray(0, _.usedBytes), 0);
                          }
                        },
                        resizeFileStorage(_, a) {
                          if (_.usedBytes != a)
                            if (0 == a) (_.contents = null), (_.usedBytes = 0);
                            else {
                              var e = _.contents;
                              (_.contents = new Uint8Array(a)),
                                e &&
                                  _.contents.set(
                                    e.subarray(0, Math.min(a, _.usedBytes)),
                                  ),
                                (_.usedBytes = a);
                            }
                        },
                        node_ops: {
                          getattr(_) {
                            var a = {};
                            return (
                              (a.dev = h_.isChrdev(_.mode) ? _.id : 1),
                              (a.ino = _.id),
                              (a.mode = _.mode),
                              (a.nlink = 1),
                              (a.uid = 0),
                              (a.gid = 0),
                              (a.rdev = _.rdev),
                              h_.isDir(_.mode)
                                ? (a.size = 4096)
                                : h_.isFile(_.mode)
                                  ? (a.size = _.usedBytes)
                                  : h_.isLink(_.mode)
                                    ? (a.size = _.link.length)
                                    : (a.size = 0),
                              (a.atime = new Date(_.timestamp)),
                              (a.mtime = new Date(_.timestamp)),
                              (a.ctime = new Date(_.timestamp)),
                              (a.blksize = 4096),
                              (a.blocks = Math.ceil(a.size / a.blksize)),
                              a
                            );
                          },
                          setattr(_, a) {
                            void 0 !== a.mode && (_.mode = a.mode),
                              void 0 !== a.timestamp &&
                                (_.timestamp = a.timestamp),
                              void 0 !== a.size &&
                                b_.resizeFileStorage(_, a.size);
                          },
                          lookup(_, a) {
                            throw h_.genericErrors[44];
                          },
                          mknod: (_, a, e, r) => b_.createNode(_, a, e, r),
                          rename(_, a, e) {
                            if (h_.isDir(_.mode)) {
                              var r;
                              try {
                                r = h_.lookupNode(a, e);
                              } catch (_) {}
                              if (r)
                                for (var t in r.contents)
                                  throw new h_.ErrnoError(55);
                            }
                            delete _.parent.contents[_.name],
                              (_.parent.timestamp = Date.now()),
                              (_.name = e),
                              (a.contents[e] = _),
                              (a.timestamp = _.parent.timestamp),
                              (_.parent = a);
                          },
                          unlink(_, a) {
                            delete _.contents[a], (_.timestamp = Date.now());
                          },
                          rmdir(_, a) {
                            var e = h_.lookupNode(_, a);
                            for (var r in e.contents)
                              throw new h_.ErrnoError(55);
                            delete _.contents[a], (_.timestamp = Date.now());
                          },
                          readdir(_) {
                            var a = [".", ".."];
                            for (var e in _.contents)
                              _.contents.hasOwnProperty(e) && a.push(e);
                            return a;
                          },
                          symlink(_, a, e) {
                            var r = b_.createNode(_, a, 41471, 0);
                            return (r.link = e), r;
                          },
                          readlink(_) {
                            if (!h_.isLink(_.mode)) throw new h_.ErrnoError(28);
                            return _.link;
                          },
                        },
                        stream_ops: {
                          read(_, a, e, r, t) {
                            var i = _.node.contents;
                            if (t >= _.node.usedBytes) return 0;
                            var n = Math.min(_.node.usedBytes - t, r);
                            if (n > 8 && i.subarray)
                              a.set(i.subarray(t, t + n), e);
                            else
                              for (var s = 0; s < n; s++) a[e + s] = i[t + s];
                            return n;
                          },
                          write(_, a, e, r, t, i) {
                            if ((a.buffer === P.buffer && (i = !1), !r))
                              return 0;
                            var n = _.node;
                            if (
                              ((n.timestamp = Date.now()),
                              a.subarray &&
                                (!n.contents || n.contents.subarray))
                            ) {
                              if (i)
                                return (
                                  (n.contents = a.subarray(e, e + r)),
                                  (n.usedBytes = r),
                                  r
                                );
                              if (0 === n.usedBytes && 0 === t)
                                return (
                                  (n.contents = a.slice(e, e + r)),
                                  (n.usedBytes = r),
                                  r
                                );
                              if (t + r <= n.usedBytes)
                                return (
                                  n.contents.set(a.subarray(e, e + r), t), r
                                );
                            }
                            if (
                              (b_.expandFileStorage(n, t + r),
                              n.contents.subarray && a.subarray)
                            )
                              n.contents.set(a.subarray(e, e + r), t);
                            else
                              for (var s = 0; s < r; s++)
                                n.contents[t + s] = a[e + s];
                            return (
                              (n.usedBytes = Math.max(n.usedBytes, t + r)), r
                            );
                          },
                          llseek(_, a, e) {
                            var r = a;
                            if (
                              (1 === e
                                ? (r += _.position)
                                : 2 === e &&
                                  h_.isFile(_.node.mode) &&
                                  (r += _.node.usedBytes),
                              r < 0)
                            )
                              throw new h_.ErrnoError(28);
                            return r;
                          },
                          allocate(_, a, e) {
                            b_.expandFileStorage(_.node, a + e),
                              (_.node.usedBytes = Math.max(
                                _.node.usedBytes,
                                a + e,
                              ));
                          },
                          mmap(_, a, e, r, t) {
                            if (!h_.isFile(_.node.mode))
                              throw new h_.ErrnoError(43);
                            var i,
                              n,
                              s = _.node.contents;
                            if (2 & t || s.buffer !== P.buffer) {
                              if (
                                ((e > 0 || e + a < s.length) &&
                                  (s = s.subarray
                                    ? s.subarray(e, e + a)
                                    : Array.prototype.slice.call(s, e, e + a)),
                                (n = !0),
                                !(i = l_(a)))
                              )
                                throw new h_.ErrnoError(48);
                              P.set(s, i);
                            } else (n = !1), (i = s.byteOffset);
                            return { ptr: i, allocated: n };
                          },
                          msync: (_, a, e, r, t) => (
                            b_.stream_ops.write(_, a, 0, r, e, !1), 0
                          ),
                        },
                      },
                      j_ = t.preloadPlugins || [],
                      p_ = (_, a) => {
                        var e = 0;
                        return _ && (e |= 365), a && (e |= 146), e;
                      },
                      h_ = {
                        root: null,
                        mounts: [],
                        devices: {},
                        streams: [],
                        nextInode: 1,
                        nameTable: null,
                        currentPath: "/",
                        initialized: !1,
                        ignorePermissions: !0,
                        ErrnoError: null,
                        genericErrors: {},
                        filesystems: null,
                        syncFSRequests: 0,
                        lookupPath(_, a = {}) {
                          if (!(_ = a_.resolve(_)))
                            return { path: "", node: null };
                          if (
                            (a = Object.assign(
                              { follow_mount: !0, recurse_count: 0 },
                              a,
                            )).recurse_count > 8
                          )
                            throw new h_.ErrnoError(32);
                          for (
                            var e = _.split("/").filter((_) => !!_),
                              r = h_.root,
                              t = "/",
                              i = 0;
                            i < e.length;
                            i++
                          ) {
                            var n = i === e.length - 1;
                            if (n && a.parent) break;
                            if (
                              ((r = h_.lookupNode(r, e[i])),
                              (t = Z.join2(t, e[i])),
                              h_.isMountpoint(r) &&
                                (!n || (n && a.follow_mount)) &&
                                (r = r.mounted.root),
                              !n || a.follow)
                            )
                              for (var s = 0; h_.isLink(r.mode); ) {
                                var o = h_.readlink(t);
                                if (
                                  ((t = a_.resolve(Z.dirname(t), o)),
                                  (r = h_.lookupPath(t, {
                                    recurse_count: a.recurse_count + 1,
                                  }).node),
                                  s++ > 40)
                                )
                                  throw new h_.ErrnoError(32);
                              }
                          }
                          return { path: t, node: r };
                        },
                        getPath(_) {
                          for (var a; ; ) {
                            if (h_.isRoot(_)) {
                              var e = _.mount.mountpoint;
                              return a
                                ? "/" !== e[e.length - 1]
                                  ? `${e}/${a}`
                                  : e + a
                                : e;
                            }
                            (a = a ? `${_.name}/${a}` : _.name), (_ = _.parent);
                          }
                        },
                        hashName(_, a) {
                          for (var e = 0, r = 0; r < a.length; r++)
                            e = ((e << 5) - e + a.charCodeAt(r)) | 0;
                          return ((_ + e) >>> 0) % h_.nameTable.length;
                        },
                        hashAddNode(_) {
                          var a = h_.hashName(_.parent.id, _.name);
                          (_.name_next = h_.nameTable[a]),
                            (h_.nameTable[a] = _);
                        },
                        hashRemoveNode(_) {
                          var a = h_.hashName(_.parent.id, _.name);
                          if (h_.nameTable[a] === _)
                            h_.nameTable[a] = _.name_next;
                          else
                            for (var e = h_.nameTable[a]; e; ) {
                              if (e.name_next === _) {
                                e.name_next = _.name_next;
                                break;
                              }
                              e = e.name_next;
                            }
                        },
                        lookupNode(_, a) {
                          var e = h_.mayLookup(_);
                          if (e) throw new h_.ErrnoError(e, _);
                          for (
                            var r = h_.hashName(_.id, a), t = h_.nameTable[r];
                            t;
                            t = t.name_next
                          ) {
                            var i = t.name;
                            if (t.parent.id === _.id && i === a) return t;
                          }
                          return h_.lookup(_, a);
                        },
                        createNode(_, a, e, r) {
                          var t = new h_.FSNode(_, a, e, r);
                          return h_.hashAddNode(t), t;
                        },
                        destroyNode(_) {
                          h_.hashRemoveNode(_);
                        },
                        isRoot: (_) => _ === _.parent,
                        isMountpoint: (_) => !!_.mounted,
                        isFile: (_) => 32768 == (61440 & _),
                        isDir: (_) => 16384 == (61440 & _),
                        isLink: (_) => 40960 == (61440 & _),
                        isChrdev: (_) => 8192 == (61440 & _),
                        isBlkdev: (_) => 24576 == (61440 & _),
                        isFIFO: (_) => 4096 == (61440 & _),
                        isSocket: (_) => !(49152 & ~_),
                        flagsToPermissionString(_) {
                          var a = ["r", "w", "rw"][3 & _];
                          return 512 & _ && (a += "w"), a;
                        },
                        nodePermissions: (_, a) =>
                          h_.ignorePermissions ||
                          ((!a.includes("r") || 292 & _.mode) &&
                            (!a.includes("w") || 146 & _.mode) &&
                            (!a.includes("x") || 73 & _.mode))
                            ? 0
                            : 2,
                        mayLookup: (_) =>
                          h_.nodePermissions(_, "x") ||
                          (_.node_ops.lookup ? 0 : 2),
                        mayCreate(_, a) {
                          try {
                            return h_.lookupNode(_, a), 20;
                          } catch (_) {}
                          return h_.nodePermissions(_, "wx");
                        },
                        mayDelete(_, a, e) {
                          var r;
                          try {
                            r = h_.lookupNode(_, a);
                          } catch (_) {
                            return _.errno;
                          }
                          var t = h_.nodePermissions(_, "wx");
                          if (t) return t;
                          if (e) {
                            if (!h_.isDir(r.mode)) return 54;
                            if (h_.isRoot(r) || h_.getPath(r) === h_.cwd())
                              return 10;
                          } else if (h_.isDir(r.mode)) return 31;
                          return 0;
                        },
                        mayOpen: (_, a) =>
                          _
                            ? h_.isLink(_.mode)
                              ? 32
                              : h_.isDir(_.mode) &&
                                  ("r" !== h_.flagsToPermissionString(a) ||
                                    512 & a)
                                ? 31
                                : h_.nodePermissions(
                                    _,
                                    h_.flagsToPermissionString(a),
                                  )
                            : 44,
                        MAX_OPEN_FDS: 4096,
                        nextfd() {
                          for (var _ = 0; _ <= h_.MAX_OPEN_FDS; _++)
                            if (!h_.streams[_]) return _;
                          throw new h_.ErrnoError(33);
                        },
                        getStreamChecked(_) {
                          var a = h_.getStream(_);
                          if (!a) throw new h_.ErrnoError(8);
                          return a;
                        },
                        getStream: (_) => h_.streams[_],
                        createStream: (_, a = -1) => (
                          h_.FSStream ||
                            ((h_.FSStream = function () {
                              this.shared = {};
                            }),
                            (h_.FSStream.prototype = {}),
                            Object.defineProperties(h_.FSStream.prototype, {
                              object: {
                                get() {
                                  return this.node;
                                },
                                set(_) {
                                  this.node = _;
                                },
                              },
                              isRead: {
                                get() {
                                  return 1 != (2097155 & this.flags);
                                },
                              },
                              isWrite: {
                                get() {
                                  return !!(2097155 & this.flags);
                                },
                              },
                              isAppend: {
                                get() {
                                  return 1024 & this.flags;
                                },
                              },
                              flags: {
                                get() {
                                  return this.shared.flags;
                                },
                                set(_) {
                                  this.shared.flags = _;
                                },
                              },
                              position: {
                                get() {
                                  return this.shared.position;
                                },
                                set(_) {
                                  this.shared.position = _;
                                },
                              },
                            })),
                          (_ = Object.assign(new h_.FSStream(), _)),
                          -1 == a && (a = h_.nextfd()),
                          (_.fd = a),
                          (h_.streams[a] = _),
                          _
                        ),
                        closeStream(_) {
                          h_.streams[_] = null;
                        },
                        chrdev_stream_ops: {
                          open(_) {
                            var a = h_.getDevice(_.node.rdev);
                            (_.stream_ops = a.stream_ops),
                              _.stream_ops.open && _.stream_ops.open(_);
                          },
                          llseek() {
                            throw new h_.ErrnoError(70);
                          },
                        },
                        major: (_) => _ >> 8,
                        minor: (_) => 255 & _,
                        makedev: (_, a) => (_ << 8) | a,
                        registerDevice(_, a) {
                          h_.devices[_] = { stream_ops: a };
                        },
                        getDevice: (_) => h_.devices[_],
                        getMounts(_) {
                          for (var a = [], e = [_]; e.length; ) {
                            var r = e.pop();
                            a.push(r), e.push.apply(e, r.mounts);
                          }
                          return a;
                        },
                        syncfs(_, a) {
                          "function" == typeof _ && ((a = _), (_ = !1)),
                            h_.syncFSRequests++,
                            h_.syncFSRequests > 1 &&
                              f(
                                `warning: ${h_.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
                              );
                          var e = h_.getMounts(h_.root.mount),
                            r = 0;
                          function t(_) {
                            return h_.syncFSRequests--, a(_);
                          }
                          function i(_) {
                            if (_)
                              return i.errored
                                ? void 0
                                : ((i.errored = !0), t(_));
                            ++r >= e.length && t(null);
                          }
                          e.forEach((a) => {
                            if (!a.type.syncfs) return i(null);
                            a.type.syncfs(a, _, i);
                          });
                        },
                        mount(_, a, e) {
                          var r,
                            t = "/" === e,
                            i = !e;
                          if (t && h_.root) throw new h_.ErrnoError(10);
                          if (!t && !i) {
                            var n = h_.lookupPath(e, { follow_mount: !1 });
                            if (
                              ((e = n.path), (r = n.node), h_.isMountpoint(r))
                            )
                              throw new h_.ErrnoError(10);
                            if (!h_.isDir(r.mode)) throw new h_.ErrnoError(54);
                          }
                          var s = {
                              type: _,
                              opts: a,
                              mountpoint: e,
                              mounts: [],
                            },
                            o = _.mount(s);
                          return (
                            (o.mount = s),
                            (s.root = o),
                            t
                              ? (h_.root = o)
                              : r &&
                                ((r.mounted = s),
                                r.mount && r.mount.mounts.push(s)),
                            o
                          );
                        },
                        unmount(_) {
                          var a = h_.lookupPath(_, { follow_mount: !1 });
                          if (!h_.isMountpoint(a.node))
                            throw new h_.ErrnoError(28);
                          var e = a.node,
                            r = e.mounted,
                            t = h_.getMounts(r);
                          Object.keys(h_.nameTable).forEach((_) => {
                            for (var a = h_.nameTable[_]; a; ) {
                              var e = a.name_next;
                              t.includes(a.mount) && h_.destroyNode(a), (a = e);
                            }
                          }),
                            (e.mounted = null);
                          var i = e.mount.mounts.indexOf(r);
                          e.mount.mounts.splice(i, 1);
                        },
                        lookup: (_, a) => _.node_ops.lookup(_, a),
                        mknod(_, a, e) {
                          var r = h_.lookupPath(_, { parent: !0 }).node,
                            t = Z.basename(_);
                          if (!t || "." === t || ".." === t)
                            throw new h_.ErrnoError(28);
                          var i = h_.mayCreate(r, t);
                          if (i) throw new h_.ErrnoError(i);
                          if (!r.node_ops.mknod) throw new h_.ErrnoError(63);
                          return r.node_ops.mknod(r, t, a, e);
                        },
                        create: (_, a) => (
                          (a = void 0 !== a ? a : 438),
                          (a &= 4095),
                          (a |= 32768),
                          h_.mknod(_, a, 0)
                        ),
                        mkdir: (_, a) => (
                          (a = void 0 !== a ? a : 511),
                          (a &= 1023),
                          (a |= 16384),
                          h_.mknod(_, a, 0)
                        ),
                        mkdirTree(_, a) {
                          for (
                            var e = _.split("/"), r = "", t = 0;
                            t < e.length;
                            ++t
                          )
                            if (e[t]) {
                              r += "/" + e[t];
                              try {
                                h_.mkdir(r, a);
                              } catch (_) {
                                if (20 != _.errno) throw _;
                              }
                            }
                        },
                        mkdev: (_, a, e) => (
                          void 0 === e && ((e = a), (a = 438)),
                          (a |= 8192),
                          h_.mknod(_, a, e)
                        ),
                        symlink(_, a) {
                          if (!a_.resolve(_)) throw new h_.ErrnoError(44);
                          var e = h_.lookupPath(a, { parent: !0 }).node;
                          if (!e) throw new h_.ErrnoError(44);
                          var r = Z.basename(a),
                            t = h_.mayCreate(e, r);
                          if (t) throw new h_.ErrnoError(t);
                          if (!e.node_ops.symlink) throw new h_.ErrnoError(63);
                          return e.node_ops.symlink(e, r, _);
                        },
                        rename(_, a) {
                          var e,
                            r,
                            t = Z.dirname(_),
                            i = Z.dirname(a),
                            n = Z.basename(_),
                            s = Z.basename(a);
                          if (
                            ((e = h_.lookupPath(_, { parent: !0 }).node),
                            (r = h_.lookupPath(a, { parent: !0 }).node),
                            !e || !r)
                          )
                            throw new h_.ErrnoError(44);
                          if (e.mount !== r.mount) throw new h_.ErrnoError(75);
                          var o,
                            g = h_.lookupNode(e, n),
                            k = a_.relative(_, i);
                          if ("." !== k.charAt(0)) throw new h_.ErrnoError(28);
                          if ("." !== (k = a_.relative(a, t)).charAt(0))
                            throw new h_.ErrnoError(55);
                          try {
                            o = h_.lookupNode(r, s);
                          } catch (_) {}
                          if (g !== o) {
                            var l = h_.isDir(g.mode),
                              b = h_.mayDelete(e, n, l);
                            if (b) throw new h_.ErrnoError(b);
                            if (
                              (b = o
                                ? h_.mayDelete(r, s, l)
                                : h_.mayCreate(r, s))
                            )
                              throw new h_.ErrnoError(b);
                            if (!e.node_ops.rename) throw new h_.ErrnoError(63);
                            if (h_.isMountpoint(g) || (o && h_.isMountpoint(o)))
                              throw new h_.ErrnoError(10);
                            if (r !== e && (b = h_.nodePermissions(e, "w")))
                              throw new h_.ErrnoError(b);
                            h_.hashRemoveNode(g);
                            try {
                              e.node_ops.rename(g, r, s);
                            } catch (_) {
                              throw _;
                            } finally {
                              h_.hashAddNode(g);
                            }
                          }
                        },
                        rmdir(_) {
                          var a = h_.lookupPath(_, { parent: !0 }).node,
                            e = Z.basename(_),
                            r = h_.lookupNode(a, e),
                            t = h_.mayDelete(a, e, !0);
                          if (t) throw new h_.ErrnoError(t);
                          if (!a.node_ops.rmdir) throw new h_.ErrnoError(63);
                          if (h_.isMountpoint(r)) throw new h_.ErrnoError(10);
                          a.node_ops.rmdir(a, e), h_.destroyNode(r);
                        },
                        readdir(_) {
                          var a = h_.lookupPath(_, { follow: !0 }).node;
                          if (!a.node_ops.readdir) throw new h_.ErrnoError(54);
                          return a.node_ops.readdir(a);
                        },
                        unlink(_) {
                          var a = h_.lookupPath(_, { parent: !0 }).node;
                          if (!a) throw new h_.ErrnoError(44);
                          var e = Z.basename(_),
                            r = h_.lookupNode(a, e),
                            t = h_.mayDelete(a, e, !1);
                          if (t) throw new h_.ErrnoError(t);
                          if (!a.node_ops.unlink) throw new h_.ErrnoError(63);
                          if (h_.isMountpoint(r)) throw new h_.ErrnoError(10);
                          a.node_ops.unlink(a, e), h_.destroyNode(r);
                        },
                        readlink(_) {
                          var a = h_.lookupPath(_).node;
                          if (!a) throw new h_.ErrnoError(44);
                          if (!a.node_ops.readlink) throw new h_.ErrnoError(28);
                          return a_.resolve(
                            h_.getPath(a.parent),
                            a.node_ops.readlink(a),
                          );
                        },
                        stat(_, a) {
                          var e = h_.lookupPath(_, { follow: !a }).node;
                          if (!e) throw new h_.ErrnoError(44);
                          if (!e.node_ops.getattr) throw new h_.ErrnoError(63);
                          return e.node_ops.getattr(e);
                        },
                        lstat: (_) => h_.stat(_, !0),
                        chmod(_, a, e) {
                          var r;
                          if (
                            !(r =
                              "string" == typeof _
                                ? h_.lookupPath(_, { follow: !e }).node
                                : _).node_ops.setattr
                          )
                            throw new h_.ErrnoError(63);
                          r.node_ops.setattr(r, {
                            mode: (4095 & a) | (-4096 & r.mode),
                            timestamp: Date.now(),
                          });
                        },
                        lchmod(_, a) {
                          h_.chmod(_, a, !0);
                        },
                        fchmod(_, a) {
                          var e = h_.getStreamChecked(_);
                          h_.chmod(e.node, a);
                        },
                        chown(_, a, e, r) {
                          var t;
                          if (
                            !(t =
                              "string" == typeof _
                                ? h_.lookupPath(_, { follow: !r }).node
                                : _).node_ops.setattr
                          )
                            throw new h_.ErrnoError(63);
                          t.node_ops.setattr(t, { timestamp: Date.now() });
                        },
                        lchown(_, a, e) {
                          h_.chown(_, a, e, !0);
                        },
                        fchown(_, a, e) {
                          var r = h_.getStreamChecked(_);
                          h_.chown(r.node, a, e);
                        },
                        truncate(_, a) {
                          if (a < 0) throw new h_.ErrnoError(28);
                          var e;
                          if (
                            !(e =
                              "string" == typeof _
                                ? h_.lookupPath(_, { follow: !0 }).node
                                : _).node_ops.setattr
                          )
                            throw new h_.ErrnoError(63);
                          if (h_.isDir(e.mode)) throw new h_.ErrnoError(31);
                          if (!h_.isFile(e.mode)) throw new h_.ErrnoError(28);
                          var r = h_.nodePermissions(e, "w");
                          if (r) throw new h_.ErrnoError(r);
                          e.node_ops.setattr(e, {
                            size: a,
                            timestamp: Date.now(),
                          });
                        },
                        ftruncate(_, a) {
                          var e = h_.getStreamChecked(_);
                          if (!(2097155 & e.flags)) throw new h_.ErrnoError(28);
                          h_.truncate(e.node, a);
                        },
                        utime(_, a, e) {
                          var r = h_.lookupPath(_, { follow: !0 }).node;
                          r.node_ops.setattr(r, { timestamp: Math.max(a, e) });
                        },
                        open(_, a, e) {
                          if ("" === _) throw new h_.ErrnoError(44);
                          var r;
                          if (
                            ((e = void 0 === e ? 438 : e),
                            (e =
                              64 &
                              (a =
                                "string" == typeof a
                                  ? ((_) => {
                                      var a = {
                                        r: 0,
                                        "r+": 2,
                                        w: 577,
                                        "w+": 578,
                                        a: 1089,
                                        "a+": 1090,
                                      }[_];
                                      if (void 0 === a)
                                        throw new Error(
                                          `Unknown file open mode: ${_}`,
                                        );
                                      return a;
                                    })(a)
                                  : a)
                                ? (4095 & e) | 32768
                                : 0),
                            "object" == typeof _)
                          )
                            r = _;
                          else {
                            _ = Z.normalize(_);
                            try {
                              r = h_.lookupPath(_, {
                                follow: !(131072 & a),
                              }).node;
                            } catch (_) {}
                          }
                          var i = !1;
                          if (64 & a)
                            if (r) {
                              if (128 & a) throw new h_.ErrnoError(20);
                            } else (r = h_.mknod(_, e, 0)), (i = !0);
                          if (!r) throw new h_.ErrnoError(44);
                          if (
                            (h_.isChrdev(r.mode) && (a &= -513),
                            65536 & a && !h_.isDir(r.mode))
                          )
                            throw new h_.ErrnoError(54);
                          if (!i) {
                            var n = h_.mayOpen(r, a);
                            if (n) throw new h_.ErrnoError(n);
                          }
                          512 & a && !i && h_.truncate(r, 0), (a &= -131713);
                          var s = h_.createStream({
                            node: r,
                            path: h_.getPath(r),
                            flags: a,
                            seekable: !0,
                            position: 0,
                            stream_ops: r.stream_ops,
                            ungotten: [],
                            error: !1,
                          });
                          return (
                            s.stream_ops.open && s.stream_ops.open(s),
                            !t.logReadFiles ||
                              1 & a ||
                              (h_.readFiles || (h_.readFiles = {}),
                              _ in h_.readFiles || (h_.readFiles[_] = 1)),
                            s
                          );
                        },
                        close(_) {
                          if (h_.isClosed(_)) throw new h_.ErrnoError(8);
                          _.getdents && (_.getdents = null);
                          try {
                            _.stream_ops.close && _.stream_ops.close(_);
                          } catch (_) {
                            throw _;
                          } finally {
                            h_.closeStream(_.fd);
                          }
                          _.fd = null;
                        },
                        isClosed: (_) => null === _.fd,
                        llseek(_, a, e) {
                          if (h_.isClosed(_)) throw new h_.ErrnoError(8);
                          if (!_.seekable || !_.stream_ops.llseek)
                            throw new h_.ErrnoError(70);
                          if (0 != e && 1 != e && 2 != e)
                            throw new h_.ErrnoError(28);
                          return (
                            (_.position = _.stream_ops.llseek(_, a, e)),
                            (_.ungotten = []),
                            _.position
                          );
                        },
                        read(_, a, e, r, t) {
                          if (r < 0 || t < 0) throw new h_.ErrnoError(28);
                          if (h_.isClosed(_)) throw new h_.ErrnoError(8);
                          if (1 == (2097155 & _.flags))
                            throw new h_.ErrnoError(8);
                          if (h_.isDir(_.node.mode))
                            throw new h_.ErrnoError(31);
                          if (!_.stream_ops.read) throw new h_.ErrnoError(28);
                          var i = void 0 !== t;
                          if (i) {
                            if (!_.seekable) throw new h_.ErrnoError(70);
                          } else t = _.position;
                          var n = _.stream_ops.read(_, a, e, r, t);
                          return i || (_.position += n), n;
                        },
                        write(_, a, e, r, t, i) {
                          if (r < 0 || t < 0) throw new h_.ErrnoError(28);
                          if (h_.isClosed(_)) throw new h_.ErrnoError(8);
                          if (!(2097155 & _.flags)) throw new h_.ErrnoError(8);
                          if (h_.isDir(_.node.mode))
                            throw new h_.ErrnoError(31);
                          if (!_.stream_ops.write) throw new h_.ErrnoError(28);
                          _.seekable && 1024 & _.flags && h_.llseek(_, 0, 2);
                          var n = void 0 !== t;
                          if (n) {
                            if (!_.seekable) throw new h_.ErrnoError(70);
                          } else t = _.position;
                          var s = _.stream_ops.write(_, a, e, r, t, i);
                          return n || (_.position += s), s;
                        },
                        allocate(_, a, e) {
                          if (h_.isClosed(_)) throw new h_.ErrnoError(8);
                          if (a < 0 || e <= 0) throw new h_.ErrnoError(28);
                          if (!(2097155 & _.flags)) throw new h_.ErrnoError(8);
                          if (!h_.isFile(_.node.mode) && !h_.isDir(_.node.mode))
                            throw new h_.ErrnoError(43);
                          if (!_.stream_ops.allocate)
                            throw new h_.ErrnoError(138);
                          _.stream_ops.allocate(_, a, e);
                        },
                        mmap(_, a, e, r, t) {
                          if (2 & r && !(2 & t) && 2 != (2097155 & _.flags))
                            throw new h_.ErrnoError(2);
                          if (1 == (2097155 & _.flags))
                            throw new h_.ErrnoError(2);
                          if (!_.stream_ops.mmap) throw new h_.ErrnoError(43);
                          return _.stream_ops.mmap(_, a, e, r, t);
                        },
                        msync: (_, a, e, r, t) =>
                          _.stream_ops.msync
                            ? _.stream_ops.msync(_, a, e, r, t)
                            : 0,
                        munmap: (_) => 0,
                        ioctl(_, a, e) {
                          if (!_.stream_ops.ioctl) throw new h_.ErrnoError(59);
                          return _.stream_ops.ioctl(_, a, e);
                        },
                        readFile(_, a = {}) {
                          if (
                            ((a.flags = a.flags || 0),
                            (a.encoding = a.encoding || "binary"),
                            "utf8" !== a.encoding && "binary" !== a.encoding)
                          )
                            throw new Error(
                              `Invalid encoding type "${a.encoding}"`,
                            );
                          var e,
                            r = h_.open(_, a.flags),
                            t = h_.stat(_).size,
                            i = new Uint8Array(t);
                          return (
                            h_.read(r, i, 0, t, 0),
                            "utf8" === a.encoding
                              ? (e = r_(i, 0))
                              : "binary" === a.encoding && (e = i),
                            h_.close(r),
                            e
                          );
                        },
                        writeFile(_, a, e = {}) {
                          e.flags = e.flags || 577;
                          var r = h_.open(_, e.flags, e.mode);
                          if ("string" == typeof a) {
                            var t = new Uint8Array(i_(a) + 1),
                              i = n_(a, t, 0, t.length);
                            h_.write(r, t, 0, i, void 0, e.canOwn);
                          } else {
                            if (!ArrayBuffer.isView(a))
                              throw new Error("Unsupported data type");
                            h_.write(r, a, 0, a.byteLength, void 0, e.canOwn);
                          }
                          h_.close(r);
                        },
                        cwd: () => h_.currentPath,
                        chdir(_) {
                          var a = h_.lookupPath(_, { follow: !0 });
                          if (null === a.node) throw new h_.ErrnoError(44);
                          if (!h_.isDir(a.node.mode))
                            throw new h_.ErrnoError(54);
                          var e = h_.nodePermissions(a.node, "x");
                          if (e) throw new h_.ErrnoError(e);
                          h_.currentPath = a.path;
                        },
                        createDefaultDirectories() {
                          h_.mkdir("/tmp"),
                            h_.mkdir("/home"),
                            h_.mkdir("/home/web_user");
                        },
                        createDefaultDevices() {
                          h_.mkdir("/dev"),
                            h_.registerDevice(h_.makedev(1, 3), {
                              read: () => 0,
                              write: (_, a, e, r, t) => r,
                            }),
                            h_.mkdev("/dev/null", h_.makedev(1, 3)),
                            k_.register(h_.makedev(5, 0), k_.default_tty_ops),
                            k_.register(h_.makedev(6, 0), k_.default_tty1_ops),
                            h_.mkdev("/dev/tty", h_.makedev(5, 0)),
                            h_.mkdev("/dev/tty1", h_.makedev(6, 0));
                          var _ = new Uint8Array(1024),
                            a = 0,
                            e = () => (
                              0 === a && (a = __(_).byteLength), _[--a]
                            );
                          h_.createDevice("/dev", "random", e),
                            h_.createDevice("/dev", "urandom", e),
                            h_.mkdir("/dev/shm"),
                            h_.mkdir("/dev/shm/tmp");
                        },
                        createSpecialDirectories() {
                          h_.mkdir("/proc");
                          var _ = h_.mkdir("/proc/self");
                          h_.mkdir("/proc/self/fd"),
                            h_.mount(
                              {
                                mount() {
                                  var a = h_.createNode(_, "fd", 16895, 73);
                                  return (
                                    (a.node_ops = {
                                      lookup(_, a) {
                                        var e = +a,
                                          r = h_.getStreamChecked(e),
                                          t = {
                                            parent: null,
                                            mount: { mountpoint: "fake" },
                                            node_ops: {
                                              readlink: () => r.path,
                                            },
                                          };
                                        return (t.parent = t), t;
                                      },
                                    }),
                                    a
                                  );
                                },
                              },
                              {},
                              "/proc/self/fd",
                            );
                        },
                        createStandardStreams() {
                          t.stdin
                            ? h_.createDevice("/dev", "stdin", t.stdin)
                            : h_.symlink("/dev/tty", "/dev/stdin"),
                            t.stdout
                              ? h_.createDevice(
                                  "/dev",
                                  "stdout",
                                  null,
                                  t.stdout,
                                )
                              : h_.symlink("/dev/tty", "/dev/stdout"),
                            t.stderr
                              ? h_.createDevice(
                                  "/dev",
                                  "stderr",
                                  null,
                                  t.stderr,
                                )
                              : h_.symlink("/dev/tty1", "/dev/stderr"),
                            h_.open("/dev/stdin", 0),
                            h_.open("/dev/stdout", 1),
                            h_.open("/dev/stderr", 1);
                        },
                        ensureErrnoError() {
                          h_.ErrnoError ||
                            ((h_.ErrnoError = function (_, a) {
                              (this.name = "ErrnoError"),
                                (this.node = a),
                                (this.setErrno = function (_) {
                                  this.errno = _;
                                }),
                                this.setErrno(_),
                                (this.message = "FS error");
                            }),
                            (h_.ErrnoError.prototype = new Error()),
                            (h_.ErrnoError.prototype.constructor =
                              h_.ErrnoError),
                            [44].forEach((_) => {
                              (h_.genericErrors[_] = new h_.ErrnoError(_)),
                                (h_.genericErrors[_].stack =
                                  "<generic error, no stack>");
                            }));
                        },
                        staticInit() {
                          h_.ensureErrnoError(),
                            (h_.nameTable = new Array(4096)),
                            h_.mount(b_, {}, "/"),
                            h_.createDefaultDirectories(),
                            h_.createDefaultDevices(),
                            h_.createSpecialDirectories(),
                            (h_.filesystems = { MEMFS: b_ });
                        },
                        init(_, a, e) {
                          (h_.init.initialized = !0),
                            h_.ensureErrnoError(),
                            (t.stdin = _ || t.stdin),
                            (t.stdout = a || t.stdout),
                            (t.stderr = e || t.stderr),
                            h_.createStandardStreams();
                        },
                        quit() {
                          h_.init.initialized = !1;
                          for (var _ = 0; _ < h_.streams.length; _++) {
                            var a = h_.streams[_];
                            a && h_.close(a);
                          }
                        },
                        findObject(_, a) {
                          var e = h_.analyzePath(_, a);
                          return e.exists ? e.object : null;
                        },
                        analyzePath(_, a) {
                          try {
                            _ = (r = h_.lookupPath(_, { follow: !a })).path;
                          } catch (_) {}
                          var e = {
                            isRoot: !1,
                            exists: !1,
                            error: 0,
                            name: null,
                            path: null,
                            object: null,
                            parentExists: !1,
                            parentPath: null,
                            parentObject: null,
                          };
                          try {
                            var r = h_.lookupPath(_, { parent: !0 });
                            (e.parentExists = !0),
                              (e.parentPath = r.path),
                              (e.parentObject = r.node),
                              (e.name = Z.basename(_)),
                              (r = h_.lookupPath(_, { follow: !a })),
                              (e.exists = !0),
                              (e.path = r.path),
                              (e.object = r.node),
                              (e.name = r.node.name),
                              (e.isRoot = "/" === r.path);
                          } catch (_) {
                            e.error = _.errno;
                          }
                          return e;
                        },
                        createPath(_, a, e, r) {
                          _ = "string" == typeof _ ? _ : h_.getPath(_);
                          for (var t = a.split("/").reverse(); t.length; ) {
                            var i = t.pop();
                            if (i) {
                              var n = Z.join2(_, i);
                              try {
                                h_.mkdir(n);
                              } catch (_) {}
                              _ = n;
                            }
                          }
                          return n;
                        },
                        createFile(_, a, e, r, t) {
                          var i = Z.join2(
                              "string" == typeof _ ? _ : h_.getPath(_),
                              a,
                            ),
                            n = p_(r, t);
                          return h_.create(i, n);
                        },
                        createDataFile(_, a, e, r, t, i) {
                          var n = a;
                          _ &&
                            ((_ = "string" == typeof _ ? _ : h_.getPath(_)),
                            (n = a ? Z.join2(_, a) : _));
                          var s = p_(r, t),
                            o = h_.create(n, s);
                          if (e) {
                            if ("string" == typeof e) {
                              for (
                                var g = new Array(e.length),
                                  k = 0,
                                  l = e.length;
                                k < l;
                                ++k
                              )
                                g[k] = e.charCodeAt(k);
                              e = g;
                            }
                            h_.chmod(o, 146 | s);
                            var b = h_.open(o, 577);
                            h_.write(b, e, 0, e.length, 0, i),
                              h_.close(b),
                              h_.chmod(o, s);
                          }
                        },
                        createDevice(_, a, e, r) {
                          var t = Z.join2(
                              "string" == typeof _ ? _ : h_.getPath(_),
                              a,
                            ),
                            i = p_(!!e, !!r);
                          h_.createDevice.major || (h_.createDevice.major = 64);
                          var n = h_.makedev(h_.createDevice.major++, 0);
                          return (
                            h_.registerDevice(n, {
                              open(_) {
                                _.seekable = !1;
                              },
                              close(_) {
                                r && r.buffer && r.buffer.length && r(10);
                              },
                              read(_, a, r, t, i) {
                                for (var n = 0, s = 0; s < t; s++) {
                                  var o;
                                  try {
                                    o = e();
                                  } catch (_) {
                                    throw new h_.ErrnoError(29);
                                  }
                                  if (void 0 === o && 0 === n)
                                    throw new h_.ErrnoError(6);
                                  if (null == o) break;
                                  n++, (a[r + s] = o);
                                }
                                return n && (_.node.timestamp = Date.now()), n;
                              },
                              write(_, a, e, t, i) {
                                for (var n = 0; n < t; n++)
                                  try {
                                    r(a[e + n]);
                                  } catch (_) {
                                    throw new h_.ErrnoError(29);
                                  }
                                return t && (_.node.timestamp = Date.now()), n;
                              },
                            }),
                            h_.mkdev(t, i, n)
                          );
                        },
                        forceLoadFile(_) {
                          if (_.isDevice || _.isFolder || _.link || _.contents)
                            return !0;
                          if ("undefined" != typeof XMLHttpRequest)
                            throw new Error(
                              "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                            );
                          if (!n)
                            throw new Error(
                              "Cannot load without read() or XMLHttpRequest.",
                            );
                          try {
                            (_.contents = s_(n(_.url), !0)),
                              (_.usedBytes = _.contents.length);
                          } catch (_) {
                            throw new h_.ErrnoError(29);
                          }
                        },
                        createLazyFile(_, a, e, r, t) {
                          function i() {
                            (this.lengthKnown = !1), (this.chunks = []);
                          }
                          if (
                            ((i.prototype.get = function (_) {
                              if (!(_ > this.length - 1 || _ < 0)) {
                                var a = _ % this.chunkSize,
                                  e = (_ / this.chunkSize) | 0;
                                return this.getter(e)[a];
                              }
                            }),
                            (i.prototype.setDataGetter = function (_) {
                              this.getter = _;
                            }),
                            (i.prototype.cacheLength = function () {
                              var _ = new XMLHttpRequest();
                              if (
                                (_.open("HEAD", e, !1),
                                _.send(null),
                                !(
                                  (_.status >= 200 && _.status < 300) ||
                                  304 === _.status
                                ))
                              )
                                throw new Error(
                                  "Couldn't load " +
                                    e +
                                    ". Status: " +
                                    _.status,
                                );
                              var a,
                                r = Number(
                                  _.getResponseHeader("Content-length"),
                                ),
                                t =
                                  (a = _.getResponseHeader("Accept-Ranges")) &&
                                  "bytes" === a,
                                i =
                                  (a =
                                    _.getResponseHeader("Content-Encoding")) &&
                                  "gzip" === a,
                                n = 1048576;
                              t || (n = r);
                              var s = this;
                              s.setDataGetter((_) => {
                                var a = _ * n,
                                  t = (_ + 1) * n - 1;
                                if (
                                  ((t = Math.min(t, r - 1)),
                                  void 0 === s.chunks[_] &&
                                    (s.chunks[_] = ((_, a) => {
                                      if (_ > a)
                                        throw new Error(
                                          "invalid range (" +
                                            _ +
                                            ", " +
                                            a +
                                            ") or no bytes requested!",
                                        );
                                      if (a > r - 1)
                                        throw new Error(
                                          "only " +
                                            r +
                                            " bytes available! programmer error!",
                                        );
                                      var t = new XMLHttpRequest();
                                      if (
                                        (t.open("GET", e, !1),
                                        r !== n &&
                                          t.setRequestHeader(
                                            "Range",
                                            "bytes=" + _ + "-" + a,
                                          ),
                                        (t.responseType = "arraybuffer"),
                                        t.overrideMimeType &&
                                          t.overrideMimeType(
                                            "text/plain; charset=x-user-defined",
                                          ),
                                        t.send(null),
                                        !(
                                          (t.status >= 200 && t.status < 300) ||
                                          304 === t.status
                                        ))
                                      )
                                        throw new Error(
                                          "Couldn't load " +
                                            e +
                                            ". Status: " +
                                            t.status,
                                        );
                                      return void 0 !== t.response
                                        ? new Uint8Array(t.response || [])
                                        : s_(t.responseText || "", !0);
                                    })(a, t)),
                                  void 0 === s.chunks[_])
                                )
                                  throw new Error("doXHR failed!");
                                return s.chunks[_];
                              }),
                                (!i && r) ||
                                  ((n = r = 1),
                                  (r = this.getter(0).length),
                                  (n = r),
                                  S(
                                    "LazyFiles on gzip forces download of the whole file when length is accessed",
                                  )),
                                (this._length = r),
                                (this._chunkSize = n),
                                (this.lengthKnown = !0);
                            }),
                            "undefined" != typeof XMLHttpRequest)
                          ) {
                            if (!h)
                              throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                            var n = new i();
                            Object.defineProperties(n, {
                              length: {
                                get: function () {
                                  return (
                                    this.lengthKnown || this.cacheLength(),
                                    this._length
                                  );
                                },
                              },
                              chunkSize: {
                                get: function () {
                                  return (
                                    this.lengthKnown || this.cacheLength(),
                                    this._chunkSize
                                  );
                                },
                              },
                            });
                            var s = { isDevice: !1, contents: n };
                          } else s = { isDevice: !1, url: e };
                          var o = h_.createFile(_, a, s, r, t);
                          s.contents
                            ? (o.contents = s.contents)
                            : s.url && ((o.contents = null), (o.url = s.url)),
                            Object.defineProperties(o, {
                              usedBytes: {
                                get: function () {
                                  return this.contents.length;
                                },
                              },
                            });
                          var g = {};
                          function k(_, a, e, r, t) {
                            var i = _.node.contents;
                            if (t >= i.length) return 0;
                            var n = Math.min(i.length - t, r);
                            if (i.slice)
                              for (var s = 0; s < n; s++) a[e + s] = i[t + s];
                            else
                              for (s = 0; s < n; s++) a[e + s] = i.get(t + s);
                            return n;
                          }
                          return (
                            Object.keys(o.stream_ops).forEach((_) => {
                              var a = o.stream_ops[_];
                              g[_] = function () {
                                return (
                                  h_.forceLoadFile(o), a.apply(null, arguments)
                                );
                              };
                            }),
                            (g.read = (_, a, e, r, t) => (
                              h_.forceLoadFile(o), k(_, a, e, r, t)
                            )),
                            (g.mmap = (_, a, e, r, t) => {
                              h_.forceLoadFile(o);
                              var i = l_(a);
                              if (!i) throw new h_.ErrnoError(48);
                              return (
                                k(_, P, i, a, e), { ptr: i, allocated: !0 }
                              );
                            }),
                            (o.stream_ops = g),
                            o
                          );
                        },
                      },
                      c_ = (_, a) => (_ ? r_(G, _, a) : ""),
                      d_ = {
                        DEFAULT_POLLMASK: 5,
                        calculateAt(_, a, e) {
                          if (Z.isAbs(a)) return a;
                          var r;
                          if (
                            ((r =
                              -100 === _
                                ? h_.cwd()
                                : d_.getStreamFromFD(_).path),
                            0 == a.length)
                          ) {
                            if (!e) throw new h_.ErrnoError(44);
                            return r;
                          }
                          return Z.join2(r, a);
                        },
                        doStat(_, a, e) {
                          try {
                            var r = _(a);
                          } catch (_) {
                            if (
                              _ &&
                              _.node &&
                              Z.normalize(a) !== Z.normalize(h_.getPath(_.node))
                            )
                              return -54;
                            throw _;
                          }
                          (C[e >> 2] = r.dev),
                            (C[(e + 4) >> 2] = r.mode),
                            (x[(e + 8) >> 2] = r.nlink),
                            (C[(e + 12) >> 2] = r.uid),
                            (C[(e + 16) >> 2] = r.gid),
                            (C[(e + 20) >> 2] = r.rdev),
                            (W = [
                              r.size >>> 0,
                              ((O = r.size),
                              +Math.abs(O) >= 1
                                ? O > 0
                                  ? +Math.floor(O / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (O - +(~~O >>> 0)) / 4294967296,
                                    ) >>> 0
                                : 0),
                            ]),
                            (C[(e + 24) >> 2] = W[0]),
                            (C[(e + 28) >> 2] = W[1]),
                            (C[(e + 32) >> 2] = 4096),
                            (C[(e + 36) >> 2] = r.blocks);
                          var t = r.atime.getTime(),
                            i = r.mtime.getTime(),
                            n = r.ctime.getTime();
                          return (
                            (W = [
                              Math.floor(t / 1e3) >>> 0,
                              ((O = Math.floor(t / 1e3)),
                              +Math.abs(O) >= 1
                                ? O > 0
                                  ? +Math.floor(O / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (O - +(~~O >>> 0)) / 4294967296,
                                    ) >>> 0
                                : 0),
                            ]),
                            (C[(e + 40) >> 2] = W[0]),
                            (C[(e + 44) >> 2] = W[1]),
                            (x[(e + 48) >> 2] = (t % 1e3) * 1e3),
                            (W = [
                              Math.floor(i / 1e3) >>> 0,
                              ((O = Math.floor(i / 1e3)),
                              +Math.abs(O) >= 1
                                ? O > 0
                                  ? +Math.floor(O / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (O - +(~~O >>> 0)) / 4294967296,
                                    ) >>> 0
                                : 0),
                            ]),
                            (C[(e + 56) >> 2] = W[0]),
                            (C[(e + 60) >> 2] = W[1]),
                            (x[(e + 64) >> 2] = (i % 1e3) * 1e3),
                            (W = [
                              Math.floor(n / 1e3) >>> 0,
                              ((O = Math.floor(n / 1e3)),
                              +Math.abs(O) >= 1
                                ? O > 0
                                  ? +Math.floor(O / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (O - +(~~O >>> 0)) / 4294967296,
                                    ) >>> 0
                                : 0),
                            ]),
                            (C[(e + 72) >> 2] = W[0]),
                            (C[(e + 76) >> 2] = W[1]),
                            (x[(e + 80) >> 2] = (n % 1e3) * 1e3),
                            (W = [
                              r.ino >>> 0,
                              ((O = r.ino),
                              +Math.abs(O) >= 1
                                ? O > 0
                                  ? +Math.floor(O / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (O - +(~~O >>> 0)) / 4294967296,
                                    ) >>> 0
                                : 0),
                            ]),
                            (C[(e + 88) >> 2] = W[0]),
                            (C[(e + 92) >> 2] = W[1]),
                            0
                          );
                        },
                        doMsync(_, a, e, r, t) {
                          if (!h_.isFile(a.node.mode))
                            throw new h_.ErrnoError(43);
                          if (2 & r) return 0;
                          var i = G.slice(_, _ + e);
                          h_.msync(a, i, t, e, r);
                        },
                        varargs: void 0,
                        get() {
                          var _ = C[+d_.varargs >> 2];
                          return (d_.varargs += 4), _;
                        },
                        getp: () => d_.get(),
                        getStr: (_) => c_(_),
                        getStreamFromFD: (_) => h_.getStreamChecked(_),
                      },
                      u_ = (_) => {
                        for (var a = "", e = _; G[e]; ) a += o_[G[e++]];
                        return a;
                      },
                      m_ = {},
                      S_ = {},
                      f_ = {},
                      P_ = (_) => {
                        throw new g_(_);
                      };
                    function G_(_, a, e = {}) {
                      if (!("argPackAdvance" in a))
                        throw new TypeError(
                          "registerType registeredInstance requires argPackAdvance",
                        );
                      return (function (_, a, e = {}) {
                        var r = a.name;
                        if (
                          (_ ||
                            P_(
                              `type "${r}" must have a positive integer typeid pointer`,
                            ),
                          S_.hasOwnProperty(_))
                        ) {
                          if (e.ignoreDuplicateRegistrations) return;
                          P_(`Cannot register type '${r}' twice`);
                        }
                        if (((S_[_] = a), delete f_[_], m_.hasOwnProperty(_))) {
                          var t = m_[_];
                          delete m_[_], t.forEach((_) => _());
                        }
                      })(_, a, e);
                    }
                    function y_() {
                      (this.allocated = [void 0]), (this.freelist = []);
                    }
                    var F_ = new y_();
                    function C_(_) {
                      return this.fromWireType(C[_ >> 2]);
                    }
                    var x_ = (_, a) => {
                        switch (a) {
                          case 4:
                            return function (_) {
                              return this.fromWireType(M[_ >> 2]);
                            };
                          case 8:
                            return function (_) {
                              return this.fromWireType(v[_ >> 3]);
                            };
                          default:
                            throw new TypeError(
                              `invalid float width (${a}): ${_}`,
                            );
                        }
                      },
                      M_ = (_, a, e) => {
                        switch (a) {
                          case 1:
                            return e ? (_) => P[0 | _] : (_) => G[0 | _];
                          case 2:
                            return e ? (_) => y[_ >> 1] : (_) => F[_ >> 1];
                          case 4:
                            return e ? (_) => C[_ >> 2] : (_) => x[_ >> 2];
                          default:
                            throw new TypeError(
                              `invalid integer width (${a}): ${_}`,
                            );
                        }
                      };
                    function v_(_) {
                      return this.fromWireType(x[_ >> 2]);
                    }
                    var T_,
                      R_ = (_, a, e) => n_(_, G, a, e),
                      B_ =
                        "undefined" != typeof TextDecoder
                          ? new TextDecoder("utf-16le")
                          : void 0,
                      I_ = (_, a) => {
                        for (
                          var e = _, r = e >> 1, t = r + a / 2;
                          !(r >= t) && F[r];

                        )
                          ++r;
                        if ((e = r << 1) - _ > 32 && B_)
                          return B_.decode(G.subarray(_, e));
                        for (var i = "", n = 0; !(n >= a / 2); ++n) {
                          var s = y[(_ + 2 * n) >> 1];
                          if (0 == s) break;
                          i += String.fromCharCode(s);
                        }
                        return i;
                      },
                      w_ = (_, a, e) => {
                        if ((void 0 === e && (e = 2147483647), e < 2)) return 0;
                        for (
                          var r = a,
                            t = (e -= 2) < 2 * _.length ? e / 2 : _.length,
                            i = 0;
                          i < t;
                          ++i
                        ) {
                          var n = _.charCodeAt(i);
                          (y[a >> 1] = n), (a += 2);
                        }
                        return (y[a >> 1] = 0), a - r;
                      },
                      D_ = (_) => 2 * _.length,
                      E_ = (_, a) => {
                        for (var e = 0, r = ""; !(e >= a / 4); ) {
                          var t = C[(_ + 4 * e) >> 2];
                          if (0 == t) break;
                          if ((++e, t >= 65536)) {
                            var i = t - 65536;
                            r += String.fromCharCode(
                              55296 | (i >> 10),
                              56320 | (1023 & i),
                            );
                          } else r += String.fromCharCode(t);
                        }
                        return r;
                      },
                      A_ = (_, a, e) => {
                        if ((void 0 === e && (e = 2147483647), e < 4)) return 0;
                        for (
                          var r = a, t = r + e - 4, i = 0;
                          i < _.length;
                          ++i
                        ) {
                          var n = _.charCodeAt(i);
                          if (
                            (n >= 55296 &&
                              n <= 57343 &&
                              (n =
                                (65536 + ((1023 & n) << 10)) |
                                (1023 & _.charCodeAt(++i))),
                            (C[a >> 2] = n),
                            (a += 4) + 4 > t)
                          )
                            break;
                        }
                        return (C[a >> 2] = 0), a - r;
                      },
                      L_ = (_) => {
                        for (var a = 0, e = 0; e < _.length; ++e) {
                          var r = _.charCodeAt(e);
                          r >= 55296 && r <= 57343 && ++e, (a += 4);
                        }
                        return a;
                      },
                      z_ = (_, a) =>
                        (a + 2097152) >>> 0 < 4194305 - !!_
                          ? (_ >>> 0) + 4294967296 * a
                          : NaN,
                      V_ = [];
                    T_ = () => performance.now();
                    var H_ = {
                        counter: 1,
                        buffers: [],
                        programs: [],
                        framebuffers: [],
                        renderbuffers: [],
                        textures: [],
                        shaders: [],
                        vaos: [],
                        contexts: [],
                        offscreenCanvases: {},
                        queries: [],
                        samplers: [],
                        transformFeedbacks: [],
                        syncs: [],
                        stringCache: {},
                        stringiCache: {},
                        unpackAlignment: 4,
                        recordError: function (_) {
                          H_.lastError || (H_.lastError = _);
                        },
                        getNewId: (_) => {
                          for (var a = H_.counter++, e = _.length; e < a; e++)
                            _[e] = null;
                          return a;
                        },
                        getSource: (_, a, e, r) => {
                          for (var t = "", i = 0; i < a; ++i) {
                            var n = r ? C[(r + 4 * i) >> 2] : -1;
                            t += c_(C[(e + 4 * i) >> 2], n < 0 ? void 0 : n);
                          }
                          return t;
                        },
                        createContext: (_, a) => {
                          if (
                            (a.renderViaOffscreenBackBuffer &&
                              (a.preserveDrawingBuffer = !0),
                            !_.getContextSafariWebGL2Fixed)
                          ) {
                            function r(a, e) {
                              var r = _.getContextSafariWebGL2Fixed(a, e);
                              return ("webgl" == a) ==
                                r instanceof WebGLRenderingContext
                                ? r
                                : null;
                            }
                            (_.getContextSafariWebGL2Fixed = _.getContext),
                              (_.getContext = r);
                          }
                          var e = _.getContext("webgl2", a);
                          return e ? H_.registerContext(e, a) : 0;
                        },
                        enableOffscreenFramebufferAttributes: (_) => {
                          (_.renderViaOffscreenBackBuffer = !0),
                            (_.preserveDrawingBuffer = !0);
                        },
                        createOffscreenFramebuffer: (_) => {
                          var a = _.GLctx,
                            e = a.createFramebuffer();
                          a.bindFramebuffer(36160, e),
                            (_.defaultFbo = e),
                            (_.defaultFboForbidBlitFramebuffer = !1),
                            a.getContextAttributes().antialias &&
                              (_.defaultFboForbidBlitFramebuffer = !0),
                            (_.defaultColorTarget = a.createTexture()),
                            (_.defaultDepthTarget = a.createRenderbuffer()),
                            H_.resizeOffscreenFramebuffer(_),
                            a.bindTexture(3553, _.defaultColorTarget),
                            a.texParameteri(3553, 10241, 9728),
                            a.texParameteri(3553, 10240, 9728),
                            a.texParameteri(3553, 10242, 33071),
                            a.texParameteri(3553, 10243, 33071),
                            a.texImage2D(
                              3553,
                              0,
                              6408,
                              a.canvas.width,
                              a.canvas.height,
                              0,
                              6408,
                              5121,
                              null,
                            ),
                            a.framebufferTexture2D(
                              36160,
                              36064,
                              3553,
                              _.defaultColorTarget,
                              0,
                            ),
                            a.bindTexture(3553, null),
                            a.createRenderbuffer(),
                            a.bindRenderbuffer(36161, _.defaultDepthTarget),
                            a.renderbufferStorage(
                              36161,
                              33189,
                              a.canvas.width,
                              a.canvas.height,
                            ),
                            a.framebufferRenderbuffer(
                              36160,
                              36096,
                              36161,
                              _.defaultDepthTarget,
                            ),
                            a.bindRenderbuffer(36161, null);
                          var r = a.createBuffer();
                          a.bindBuffer(34962, r),
                            a.bufferData(
                              34962,
                              new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]),
                              35044,
                            ),
                            a.bindBuffer(34962, null),
                            (_.blitVB = r);
                          var t = a.createShader(35633);
                          a.shaderSource(
                            t,
                            "attribute vec2 pos;varying lowp vec2 tex;void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }",
                          ),
                            a.compileShader(t);
                          var i = a.createShader(35632);
                          a.shaderSource(
                            i,
                            "varying lowp vec2 tex;uniform sampler2D sampler;void main() { gl_FragColor = texture2D(sampler, tex); }",
                          ),
                            a.compileShader(i);
                          var n = a.createProgram();
                          a.attachShader(n, t),
                            a.attachShader(n, i),
                            a.linkProgram(n),
                            (_.blitProgram = n),
                            (_.blitPosLoc = a.getAttribLocation(n, "pos")),
                            a.useProgram(n),
                            a.uniform1i(a.getUniformLocation(n, "sampler"), 0),
                            a.useProgram(null),
                            (_.defaultVao = void 0),
                            a.createVertexArray &&
                              ((_.defaultVao = a.createVertexArray()),
                              a.bindVertexArray(_.defaultVao),
                              a.enableVertexAttribArray(_.blitPosLoc),
                              a.bindVertexArray(null));
                        },
                        resizeOffscreenFramebuffer: (_) => {
                          var a = _.GLctx;
                          if (_.defaultColorTarget) {
                            var e = a.getParameter(32873);
                            a.bindTexture(3553, _.defaultColorTarget),
                              a.texImage2D(
                                3553,
                                0,
                                6408,
                                a.drawingBufferWidth,
                                a.drawingBufferHeight,
                                0,
                                6408,
                                5121,
                                null,
                              ),
                              a.bindTexture(3553, e);
                          }
                          if (_.defaultDepthTarget) {
                            var r = a.getParameter(36007);
                            a.bindRenderbuffer(36161, _.defaultDepthTarget),
                              a.renderbufferStorage(
                                36161,
                                33189,
                                a.drawingBufferWidth,
                                a.drawingBufferHeight,
                              ),
                              a.bindRenderbuffer(36161, r);
                          }
                        },
                        blitOffscreenFramebuffer: (_) => {
                          var a = _.GLctx,
                            e = a.getParameter(3089);
                          e && a.disable(3089);
                          var r = a.getParameter(36006);
                          if (
                            a.blitFramebuffer &&
                            !_.defaultFboForbidBlitFramebuffer
                          )
                            a.bindFramebuffer(36008, _.defaultFbo),
                              a.bindFramebuffer(36009, null),
                              a.blitFramebuffer(
                                0,
                                0,
                                a.canvas.width,
                                a.canvas.height,
                                0,
                                0,
                                a.canvas.width,
                                a.canvas.height,
                                16384,
                                9728,
                              );
                          else {
                            a.bindFramebuffer(36160, null);
                            var t = a.getParameter(35725);
                            a.useProgram(_.blitProgram);
                            var i = a.getParameter(34964);
                            a.bindBuffer(34962, _.blitVB);
                            var n = a.getParameter(34016);
                            a.activeTexture(33984);
                            var s = a.getParameter(32873);
                            a.bindTexture(3553, _.defaultColorTarget);
                            var o = a.getParameter(3042);
                            o && a.disable(3042);
                            var g = a.getParameter(2884);
                            g && a.disable(2884);
                            var k = a.getParameter(2929);
                            k && a.disable(2929);
                            var l = a.getParameter(2960);
                            function S() {
                              a.vertexAttribPointer(
                                _.blitPosLoc,
                                2,
                                5126,
                                !1,
                                0,
                                0,
                              ),
                                a.drawArrays(5, 0, 4);
                            }
                            if ((l && a.disable(2960), _.defaultVao)) {
                              var b = a.getParameter(34229);
                              a.bindVertexArray(_.defaultVao),
                                S(),
                                a.bindVertexArray(b);
                            } else {
                              for (
                                var j = {
                                    buffer: a.getVertexAttrib(
                                      _.blitPosLoc,
                                      34975,
                                    ),
                                    size: a.getVertexAttrib(
                                      _.blitPosLoc,
                                      34339,
                                    ),
                                    stride: a.getVertexAttrib(
                                      _.blitPosLoc,
                                      34340,
                                    ),
                                    type: a.getVertexAttrib(
                                      _.blitPosLoc,
                                      34341,
                                    ),
                                    normalized: a.getVertexAttrib(
                                      _.blitPosLoc,
                                      34922,
                                    ),
                                    pointer: a.getVertexAttribOffset(
                                      _.blitPosLoc,
                                      34373,
                                    ),
                                  },
                                  p = a.getParameter(34921),
                                  h = [],
                                  c = 0;
                                c < p;
                                ++c
                              ) {
                                var d = a.getVertexAttrib(c, 34338),
                                  u = c == _.blitPosLoc;
                                d && !u && a.disableVertexAttribArray(c),
                                  !d && u && a.enableVertexAttribArray(c),
                                  (h[c] = d);
                              }
                              for (S(), c = 0; c < p; ++c) {
                                d = h[c];
                                var m = c == _.blitPosLoc;
                                d && !m && a.enableVertexAttribArray(c),
                                  !d && m && a.disableVertexAttribArray(c);
                              }
                              a.bindBuffer(34962, j.buffer),
                                a.vertexAttribPointer(
                                  _.blitPosLoc,
                                  j.size,
                                  j.type,
                                  j.normalized,
                                  j.stride,
                                  j.offset,
                                );
                            }
                            l && a.enable(2960),
                              k && a.enable(2929),
                              g && a.enable(2884),
                              o && a.enable(3042),
                              a.bindTexture(3553, s),
                              a.activeTexture(n),
                              a.bindBuffer(34962, i),
                              a.useProgram(t);
                          }
                          a.bindFramebuffer(36160, r), e && a.enable(3089);
                        },
                        registerContext: (_, a) => {
                          var e = H_.getNewId(H_.contexts),
                            r = {
                              handle: e,
                              attributes: a,
                              version: a.majorVersion,
                              GLctx: _,
                            };
                          return (
                            _.canvas && (_.canvas.GLctxObject = r),
                            (H_.contexts[e] = r),
                            (void 0 === a.enableExtensionsByDefault ||
                              a.enableExtensionsByDefault) &&
                              H_.initExtensions(r),
                            a.renderViaOffscreenBackBuffer &&
                              H_.createOffscreenFramebuffer(r),
                            e
                          );
                        },
                        makeContextCurrent: (_) => (
                          (H_.currentContext = H_.contexts[_]),
                          (t.ctx = aa =
                            H_.currentContext && H_.currentContext.GLctx),
                          !(_ && !aa)
                        ),
                        getContext: (_) => H_.contexts[_],
                        deleteContext: (_) => {
                          H_.currentContext === H_.contexts[_] &&
                            (H_.currentContext = null),
                            "object" == typeof JSEvents &&
                              JSEvents.removeAllHandlersOnTarget(
                                H_.contexts[_].GLctx.canvas,
                              ),
                            H_.contexts[_] &&
                              H_.contexts[_].GLctx.canvas &&
                              (H_.contexts[_].GLctx.canvas.GLctxObject =
                                void 0),
                            (H_.contexts[_] = null);
                        },
                        initExtensions: (_) => {
                          if (
                            (_ || (_ = H_.currentContext),
                            !_.initExtensionsDone)
                          ) {
                            _.initExtensionsDone = !0;
                            var a,
                              e = _.GLctx;
                            ((a = e).dibvbi = a.getExtension(
                              "WEBGL_draw_instanced_base_vertex_base_instance",
                            )),
                              ((_) => {
                                _.mdibvbi = _.getExtension(
                                  "WEBGL_multi_draw_instanced_base_vertex_base_instance",
                                );
                              })(e),
                              _.version >= 2 &&
                                (e.disjointTimerQueryExt = e.getExtension(
                                  "EXT_disjoint_timer_query_webgl2",
                                )),
                              (_.version < 2 || !e.disjointTimerQueryExt) &&
                                (e.disjointTimerQueryExt = e.getExtension(
                                  "EXT_disjoint_timer_query",
                                )),
                              ((_) => {
                                _.multiDrawWebgl =
                                  _.getExtension("WEBGL_multi_draw");
                              })(e),
                              (e.getSupportedExtensions() || []).forEach(
                                (_) => {
                                  _.includes("lose_context") ||
                                    _.includes("debug") ||
                                    e.getExtension(_);
                                },
                              );
                          }
                        },
                        getExtensions() {
                          var _ = aa.getSupportedExtensions() || [];
                          return _.concat(_.map((_) => "GL_" + _));
                        },
                      },
                      U_ = (_) => {
                        aa.bindVertexArray(H_.vaos[_]);
                      },
                      O_ = U_,
                      W_ = U_,
                      N_ = (_, a) => (_ >>> 0) + 4294967296 * a,
                      $_ = (_, a) => {
                        for (var e = 0; e < _; e++) {
                          var r = C[(a + 4 * e) >> 2];
                          aa.deleteVertexArray(H_.vaos[r]), (H_.vaos[r] = null);
                        }
                      },
                      K_ = $_,
                      q_ = $_,
                      X_ = [],
                      Y_ = (_, a, e, r) => {
                        aa.drawElements(_, a, e, r);
                      },
                      Q_ = Y_,
                      J_ = (_, a, e, r) => {
                        for (var t = 0; t < _; t++) {
                          var i = aa[e](),
                            n = i && H_.getNewId(r);
                          i ? ((i.name = n), (r[n] = i)) : H_.recordError(1282),
                            (C[(a + 4 * t) >> 2] = n);
                        }
                      };
                    function Z_(_, a) {
                      J_(_, a, "createVertexArray", H_.vaos);
                    }
                    var _a,
                      aa,
                      ea = Z_,
                      ra = Z_,
                      ta = (_, a, e) => {
                        if (a) {
                          var r = void 0;
                          switch (_) {
                            case 36346:
                              r = 1;
                              break;
                            case 36344:
                              return void (
                                0 != e &&
                                1 != e &&
                                H_.recordError(1280)
                              );
                            case 34814:
                            case 36345:
                              r = 0;
                              break;
                            case 34466:
                              var t = aa.getParameter(34467);
                              r = t ? t.length : 0;
                              break;
                            case 33309:
                              if (H_.currentContext.version < 2)
                                return void H_.recordError(1282);
                              r =
                                2 * (aa.getSupportedExtensions() || []).length;
                              break;
                            case 33307:
                            case 33308:
                              if (H_.currentContext.version < 2)
                                return void H_.recordError(1280);
                              r = 33307 == _ ? 3 : 0;
                          }
                          if (void 0 === r) {
                            var i = aa.getParameter(_);
                            switch (typeof i) {
                              case "number":
                                r = i;
                                break;
                              case "boolean":
                                r = i ? 1 : 0;
                                break;
                              case "string":
                                return void H_.recordError(1280);
                              case "object":
                                if (null === i)
                                  switch (_) {
                                    case 34964:
                                    case 35725:
                                    case 34965:
                                    case 36006:
                                    case 36007:
                                    case 32873:
                                    case 34229:
                                    case 36662:
                                    case 36663:
                                    case 35053:
                                    case 35055:
                                    case 36010:
                                    case 35097:
                                    case 35869:
                                    case 32874:
                                    case 36389:
                                    case 35983:
                                    case 35368:
                                    case 34068:
                                      r = 0;
                                      break;
                                    default:
                                      return void H_.recordError(1280);
                                  }
                                else {
                                  if (
                                    i instanceof Float32Array ||
                                    i instanceof Uint32Array ||
                                    i instanceof Int32Array ||
                                    i instanceof Array
                                  ) {
                                    for (var n = 0; n < i.length; ++n)
                                      switch (e) {
                                        case 0:
                                          C[(a + 4 * n) >> 2] = i[n];
                                          break;
                                        case 2:
                                          M[(a + 4 * n) >> 2] = i[n];
                                          break;
                                        case 4:
                                          P[(a + n) | 0] = i[n] ? 1 : 0;
                                      }
                                    return;
                                  }
                                  try {
                                    r = 0 | i.name;
                                  } catch (a) {
                                    return (
                                      H_.recordError(1280),
                                      void f(
                                        `GL_INVALID_ENUM in glGet${e}v: Unknown object returned from WebGL getParameter(${_})! (error: ${a})`,
                                      )
                                    );
                                  }
                                }
                                break;
                              default:
                                return (
                                  H_.recordError(1280),
                                  void f(
                                    `GL_INVALID_ENUM in glGet${e}v: Native code calling glGet${e}v(${_}) and it returns ${i} of type ${typeof i}!`,
                                  )
                                );
                            }
                          }
                          switch (e) {
                            case 1:
                              ((_, a) => {
                                x[_ >> 2] = a;
                                var e = x[_ >> 2];
                                x[(_ + 4) >> 2] = (a - e) / 4294967296;
                              })(a, r);
                              break;
                            case 0:
                              C[a >> 2] = r;
                              break;
                            case 2:
                              M[a >> 2] = r;
                              break;
                            case 4:
                              P[0 | a] = r ? 1 : 0;
                          }
                        } else H_.recordError(1281);
                      },
                      ia = (_) => {
                        var a = i_(_) + 1,
                          e = Fa(a);
                        return e && R_(_, e, a), e;
                      },
                      na = (_) => "]" == _.slice(-1) && _.lastIndexOf("["),
                      sa = (_) =>
                        0 == (_ -= 5120)
                          ? P
                          : 1 == _
                            ? G
                            : 2 == _
                              ? y
                              : 4 == _
                                ? C
                                : 6 == _
                                  ? M
                                  : 5 == _ ||
                                      28922 == _ ||
                                      28520 == _ ||
                                      30779 == _ ||
                                      30782 == _
                                    ? x
                                    : F,
                      oa = (_) => 31 - Math.clz32(_.BYTES_PER_ELEMENT),
                      ga = (_) => {
                        var a = aa.currentProgram;
                        if (a) {
                          var e = a.uniformLocsById[_];
                          return (
                            "number" == typeof e &&
                              (a.uniformLocsById[_] = e =
                                aa.getUniformLocation(
                                  a,
                                  a.uniformArrayNamesById[_] +
                                    (e > 0 ? `[${e}]` : ""),
                                )),
                            e
                          );
                        }
                        H_.recordError(1282);
                      },
                      ka = (_) => {
                        var a = (_ - m.buffer.byteLength + 65535) / 65536;
                        try {
                          return m.grow(a), R(), 1;
                        } catch (_) {}
                      },
                      la = {},
                      ba = () => {
                        if (!ba.strings) {
                          var _ = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG:
                              (
                                ("object" == typeof navigator &&
                                  navigator.languages &&
                                  navigator.languages[0]) ||
                                "C"
                              ).replace("-", "_") + ".UTF-8",
                            _: b || "./this.program",
                          };
                          for (var a in la)
                            void 0 === la[a] ? delete _[a] : (_[a] = la[a]);
                          var e = [];
                          for (var a in _) e.push(`${a}=${_[a]}`);
                          ba.strings = e;
                        }
                        return ba.strings;
                      },
                      ja = (_, a, e, r) => {
                        for (var t = 0, i = 0; i < e; i++) {
                          var n = x[a >> 2],
                            s = x[(a + 4) >> 2];
                          a += 8;
                          var o = h_.read(_, P, n, s, r);
                          if (o < 0) return -1;
                          if (((t += o), o < s)) break;
                          void 0 !== r && (r += o);
                        }
                        return t;
                      },
                      pa = (_) => _ % 4 == 0 && (_ % 100 != 0 || _ % 400 == 0),
                      ha = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                      ca = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                      da = [],
                      ua = (_) => {
                        var a = da[_];
                        return (
                          a ||
                            (_ >= da.length && (da.length = _ + 1),
                            (da[_] = a = _a.get(_))),
                          a
                        );
                      },
                      ma = function (_, a, e, r) {
                        _ || (_ = this),
                          (this.parent = _),
                          (this.mount = _.mount),
                          (this.mounted = null),
                          (this.id = h_.nextInode++),
                          (this.name = a),
                          (this.mode = e),
                          (this.node_ops = {}),
                          (this.stream_ops = {}),
                          (this.rdev = r);
                      };
                    Object.defineProperties(ma.prototype, {
                      read: {
                        get: function () {
                          return !(365 & ~this.mode);
                        },
                        set: function (_) {
                          _ ? (this.mode |= 365) : (this.mode &= -366);
                        },
                      },
                      write: {
                        get: function () {
                          return !(146 & ~this.mode);
                        },
                        set: function (_) {
                          _ ? (this.mode |= 146) : (this.mode &= -147);
                        },
                      },
                      isFolder: {
                        get: function () {
                          return h_.isDir(this.mode);
                        },
                      },
                      isDevice: {
                        get: function () {
                          return h_.isChrdev(this.mode);
                        },
                      },
                    }),
                      (h_.FSNode = ma),
                      (h_.createPreloadedFile = (
                        _,
                        a,
                        e,
                        r,
                        t,
                        i,
                        n,
                        s,
                        g,
                        k,
                      ) => {
                        var l = a ? a_.resolve(Z.join2(_, a)) : _;
                        function b(e) {
                          function o(e) {
                            k && k(),
                              s ||
                                ((_, a, e, r, t, i) => {
                                  h_.createDataFile(_, a, e, r, t, i);
                                })(_, a, e, r, t, g),
                              i && i(),
                              z();
                          }
                          ((_, a, e, r) => {
                            "undefined" != typeof Browser && Browser.init();
                            var t = !1;
                            return (
                              j_.forEach((i) => {
                                t ||
                                  (i.canHandle(a) &&
                                    (i.handle(_, a, e, r), (t = !0)));
                              }),
                              t
                            );
                          })(e, l, o, () => {
                            n && n(), z();
                          }) || o(e);
                        }
                        L(),
                          "string" == typeof e
                            ? ((_, a, e, r) => {
                                var t = r ? "" : `al ${_}`;
                                o(
                                  _,
                                  (e) => {
                                    e ||
                                      V(
                                        `Loading data file "${_}" failed (no arrayBuffer).`,
                                      ),
                                      a(new Uint8Array(e)),
                                      t && z();
                                  },
                                  (a) => {
                                    if (!e)
                                      throw `Loading data file "${_}" failed.`;
                                    e();
                                  },
                                ),
                                  t && L();
                              })(e, (_) => b(_), n)
                            : b(e);
                      }),
                      h_.staticInit(),
                      (() => {
                        for (var _ = new Array(256), a = 0; a < 256; ++a)
                          _[a] = String.fromCharCode(a);
                        o_ = _;
                      })(),
                      (g_ = t.BindingError =
                        class extends Error {
                          constructor(_) {
                            super(_), (this.name = "BindingError");
                          }
                        }),
                      (t.InternalError = class extends Error {
                        constructor(_) {
                          super(_), (this.name = "InternalError");
                        }
                      }),
                      Object.assign(y_.prototype, {
                        get(_) {
                          return this.allocated[_];
                        },
                        has(_) {
                          return void 0 !== this.allocated[_];
                        },
                        allocate(_) {
                          var a = this.freelist.pop() || this.allocated.length;
                          return (this.allocated[a] = _), a;
                        },
                        free(_) {
                          (this.allocated[_] = void 0), this.freelist.push(_);
                        },
                      }),
                      F_.allocated.push(
                        { value: void 0 },
                        { value: null },
                        { value: !0 },
                        { value: !1 },
                      ),
                      (F_.reserved = F_.allocated.length),
                      (t.count_emval_handles = () => {
                        for (
                          var _ = 0, a = F_.reserved;
                          a < F_.allocated.length;
                          ++a
                        )
                          void 0 !== F_.allocated[a] && ++_;
                        return _;
                      });
                    for (var Sa = 0; Sa < 32; ++Sa) X_.push(new Array(Sa));
                    var fa,
                      Pa = {
                        __syscall_fcntl64: function (_, a, e) {
                          d_.varargs = e;
                          try {
                            var r = d_.getStreamFromFD(_);
                            switch (a) {
                              case 0:
                                if ((t = d_.get()) < 0) return -28;
                                for (; h_.streams[t]; ) t++;
                                return h_.createStream(r, t).fd;
                              case 1:
                              case 2:
                              case 6:
                              case 7:
                                return 0;
                              case 3:
                                return r.flags;
                              case 4:
                                var t = d_.get();
                                return (r.flags |= t), 0;
                              case 5:
                                return (
                                  (t = d_.getp()), (y[(t + 0) >> 1] = 2), 0
                                );
                              case 16:
                              case 8:
                              default:
                                return -28;
                              case 9:
                                return (C[Ca() >> 2] = 28), -1;
                            }
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        __syscall_fstat64: function (_, a) {
                          try {
                            var e = d_.getStreamFromFD(_);
                            return d_.doStat(h_.stat, e.path, a);
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        __syscall_ioctl: function (_, a, e) {
                          d_.varargs = e;
                          try {
                            var r = d_.getStreamFromFD(_);
                            switch (a) {
                              case 21509:
                              case 21510:
                              case 21511:
                              case 21512:
                              case 21524:
                              case 21515:
                                return r.tty ? 0 : -59;
                              case 21505:
                                if (!r.tty) return -59;
                                if (r.tty.ops.ioctl_tcgets) {
                                  var t = r.tty.ops.ioctl_tcgets(r),
                                    i = d_.getp();
                                  (C[i >> 2] = t.c_iflag || 0),
                                    (C[(i + 4) >> 2] = t.c_oflag || 0),
                                    (C[(i + 8) >> 2] = t.c_cflag || 0),
                                    (C[(i + 12) >> 2] = t.c_lflag || 0);
                                  for (var n = 0; n < 32; n++)
                                    P[(i + n + 17) | 0] = t.c_cc[n] || 0;
                                  return 0;
                                }
                                return 0;
                              case 21506:
                              case 21507:
                              case 21508:
                                if (!r.tty) return -59;
                                if (r.tty.ops.ioctl_tcsets) {
                                  i = d_.getp();
                                  var s = C[i >> 2],
                                    o = C[(i + 4) >> 2],
                                    g = C[(i + 8) >> 2],
                                    k = C[(i + 12) >> 2],
                                    l = [];
                                  for (n = 0; n < 32; n++)
                                    l.push(P[(i + n + 17) | 0]);
                                  return r.tty.ops.ioctl_tcsets(r.tty, a, {
                                    c_iflag: s,
                                    c_oflag: o,
                                    c_cflag: g,
                                    c_lflag: k,
                                    c_cc: l,
                                  });
                                }
                                return 0;
                              case 21519:
                                return r.tty
                                  ? ((i = d_.getp()), (C[i >> 2] = 0), 0)
                                  : -59;
                              case 21520:
                                return r.tty ? -28 : -59;
                              case 21531:
                                return (i = d_.getp()), h_.ioctl(r, a, i);
                              case 21523:
                                if (!r.tty) return -59;
                                if (r.tty.ops.ioctl_tiocgwinsz) {
                                  var b = r.tty.ops.ioctl_tiocgwinsz(r.tty);
                                  (i = d_.getp()),
                                    (y[i >> 1] = b[0]),
                                    (y[(i + 2) >> 1] = b[1]);
                                }
                                return 0;
                              default:
                                return -28;
                            }
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        __syscall_lstat64: function (_, a) {
                          try {
                            return (
                              (_ = d_.getStr(_)), d_.doStat(h_.lstat, _, a)
                            );
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        __syscall_newfstatat: function (_, a, e, r) {
                          try {
                            a = d_.getStr(a);
                            var t = 256 & r,
                              i = 4096 & r;
                            return (
                              (r &= -6401),
                              (a = d_.calculateAt(_, a, i)),
                              d_.doStat(t ? h_.lstat : h_.stat, a, e)
                            );
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        __syscall_openat: function (_, a, e, r) {
                          d_.varargs = r;
                          try {
                            (a = d_.getStr(a)), (a = d_.calculateAt(_, a));
                            var t = r ? d_.get() : 0;
                            return h_.open(a, e, t).fd;
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        __syscall_stat64: function (_, a) {
                          try {
                            return (_ = d_.getStr(_)), d_.doStat(h_.stat, _, a);
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        _embind_register_bigint: (_, a, e, r, t) => {},
                        _embind_register_bool: (_, a, e, r) => {
                          G_(_, {
                            name: (a = u_(a)),
                            fromWireType: function (_) {
                              return !!_;
                            },
                            toWireType: function (_, a) {
                              return a ? e : r;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: function (_) {
                              return this.fromWireType(G[_]);
                            },
                            destructorFunction: null,
                          });
                        },
                        _embind_register_emval: (_, a) => {
                          G_(_, {
                            name: (a = u_(a)),
                            fromWireType: (_) => {
                              var a = ((_) => (
                                _ ||
                                  P_("Cannot use deleted val. handle = " + _),
                                F_.get(_).value
                              ))(_);
                              return (
                                ((_) => {
                                  _ >= F_.reserved &&
                                    0 == --F_.get(_).refcount &&
                                    F_.free(_);
                                })(_),
                                a
                              );
                            },
                            toWireType: (_, a) =>
                              ((_) => {
                                switch (_) {
                                  case void 0:
                                    return 1;
                                  case null:
                                    return 2;
                                  case !0:
                                    return 3;
                                  case !1:
                                    return 4;
                                  default:
                                    return F_.allocate({
                                      refcount: 1,
                                      value: _,
                                    });
                                }
                              })(a),
                            argPackAdvance: 8,
                            readValueFromPointer: C_,
                            destructorFunction: null,
                          });
                        },
                        _embind_register_float: (_, a, e) => {
                          G_(_, {
                            name: (a = u_(a)),
                            fromWireType: (_) => _,
                            toWireType: (_, a) => a,
                            argPackAdvance: 8,
                            readValueFromPointer: x_(a, e),
                            destructorFunction: null,
                          });
                        },
                        _embind_register_integer: (_, a, e, r, t) => {
                          (a = u_(a)), -1 === t && (t = 4294967295);
                          var i = (_) => _;
                          if (0 === r) {
                            var n = 32 - 8 * e;
                            i = (_) => (_ << n) >>> n;
                          }
                          var s = a.includes("unsigned");
                          G_(_, {
                            name: a,
                            fromWireType: i,
                            toWireType: s
                              ? function (_, a) {
                                  return this.name, a >>> 0;
                                }
                              : function (_, a) {
                                  return this.name, a;
                                },
                            argPackAdvance: 8,
                            readValueFromPointer: M_(a, e, 0 !== r),
                            destructorFunction: null,
                          });
                        },
                        _embind_register_memory_view: (_, a, e) => {
                          var r = [
                            Int8Array,
                            Uint8Array,
                            Int16Array,
                            Uint16Array,
                            Int32Array,
                            Uint32Array,
                            Float32Array,
                            Float64Array,
                          ][a];
                          function t(_) {
                            var a = x[_ >> 2],
                              e = x[(_ + 4) >> 2];
                            return new r(P.buffer, e, a);
                          }
                          G_(
                            _,
                            {
                              name: (e = u_(e)),
                              fromWireType: t,
                              argPackAdvance: 8,
                              readValueFromPointer: t,
                            },
                            { ignoreDuplicateRegistrations: !0 },
                          );
                        },
                        _embind_register_std_string: (_, a) => {
                          var e = "std::string" === (a = u_(a));
                          G_(_, {
                            name: a,
                            fromWireType(_) {
                              var a,
                                r = x[_ >> 2],
                                t = _ + 4;
                              if (e)
                                for (var i = t, n = 0; n <= r; ++n) {
                                  var s = t + n;
                                  if (n == r || 0 == G[s]) {
                                    var o = c_(i, s - i);
                                    void 0 === a
                                      ? (a = o)
                                      : ((a += String.fromCharCode(0)),
                                        (a += o)),
                                      (i = s + 1);
                                  }
                                }
                              else {
                                var g = new Array(r);
                                for (n = 0; n < r; ++n)
                                  g[n] = String.fromCharCode(G[t + n]);
                                a = g.join("");
                              }
                              return ya(_), a;
                            },
                            toWireType(_, a) {
                              var r;
                              a instanceof ArrayBuffer &&
                                (a = new Uint8Array(a));
                              var t = "string" == typeof a;
                              t ||
                                a instanceof Uint8Array ||
                                a instanceof Uint8ClampedArray ||
                                a instanceof Int8Array ||
                                P_("Cannot pass non-string to std::string"),
                                (r = e && t ? i_(a) : a.length);
                              var i = Fa(4 + r + 1),
                                n = i + 4;
                              if (((x[i >> 2] = r), e && t)) R_(a, n, r + 1);
                              else if (t)
                                for (var s = 0; s < r; ++s) {
                                  var o = a.charCodeAt(s);
                                  o > 255 &&
                                    (ya(n),
                                    P_(
                                      "String has UTF-16 code units that do not fit in 8 bits",
                                    )),
                                    (G[n + s] = o);
                                }
                              else for (s = 0; s < r; ++s) G[n + s] = a[s];
                              return null !== _ && _.push(ya, i), i;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: v_,
                            destructorFunction(_) {
                              ya(_);
                            },
                          });
                        },
                        _embind_register_std_wstring: (_, a, e) => {
                          var r, t, i, n, s;
                          (e = u_(e)),
                            2 === a
                              ? ((r = I_),
                                (t = w_),
                                (n = D_),
                                (i = () => F),
                                (s = 1))
                              : 4 === a &&
                                ((r = E_),
                                (t = A_),
                                (n = L_),
                                (i = () => x),
                                (s = 2)),
                            G_(_, {
                              name: e,
                              fromWireType: (_) => {
                                for (
                                  var e,
                                    t = x[_ >> 2],
                                    n = i(),
                                    o = _ + 4,
                                    g = 0;
                                  g <= t;
                                  ++g
                                ) {
                                  var k = _ + 4 + g * a;
                                  if (g == t || 0 == n[k >> s]) {
                                    var l = r(o, k - o);
                                    void 0 === e
                                      ? (e = l)
                                      : ((e += String.fromCharCode(0)),
                                        (e += l)),
                                      (o = k + a);
                                  }
                                }
                                return ya(_), e;
                              },
                              toWireType: (_, r) => {
                                "string" != typeof r &&
                                  P_(
                                    `Cannot pass non-string to C++ string type ${e}`,
                                  );
                                var i = n(r),
                                  o = Fa(4 + i + a);
                                return (
                                  (x[o >> 2] = i >> s),
                                  t(r, o + 4, i + a),
                                  null !== _ && _.push(ya, o),
                                  o
                                );
                              },
                              argPackAdvance: 8,
                              readValueFromPointer: C_,
                              destructorFunction(_) {
                                ya(_);
                              },
                            });
                        },
                        _embind_register_void: (_, a) => {
                          G_(_, {
                            isVoid: !0,
                            name: (a = u_(a)),
                            argPackAdvance: 0,
                            fromWireType: () => {},
                            toWireType: (_, a) => {},
                          });
                        },
                        _emscripten_get_now_is_monotonic: () => 1,
                        _emscripten_throw_longjmp: () => {
                          throw 1 / 0;
                        },
                        _mmap_js: function (_, a, e, r, t, i, n, s) {
                          var o = z_(t, i);
                          try {
                            if (isNaN(o)) return 61;
                            var g = d_.getStreamFromFD(r),
                              k = h_.mmap(g, _, o, a, e),
                              l = k.ptr;
                            return (
                              (C[n >> 2] = k.allocated), (x[s >> 2] = l), 0
                            );
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        _munmap_js: function (_, a, e, r, t, i, n) {
                          var s = z_(i, n);
                          try {
                            if (isNaN(s)) return 61;
                            var o = d_.getStreamFromFD(t);
                            2 & e && d_.doMsync(_, o, a, r, s), h_.munmap(o);
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return -_.errno;
                          }
                        },
                        abort: () => {
                          V("");
                        },
                        emscripten_asm_const_int: (_, a, e) =>
                          ((_, a, e) => {
                            var r = ((_, a) => {
                              var e;
                              for (V_.length = 0; (e = G[_++]); ) {
                                var r = 105 != e;
                                (a += (r &= 112 != e) && a % 8 ? 4 : 0),
                                  V_.push(
                                    112 == e
                                      ? x[a >> 2]
                                      : 105 == e
                                        ? C[a >> 2]
                                        : v[a >> 3],
                                  ),
                                  (a += r ? 8 : 4);
                              }
                              return V_;
                            })(a, e);
                            return X[_].apply(null, r);
                          })(_, a, e),
                        emscripten_date_now: () => Date.now(),
                        emscripten_get_now: T_,
                        emscripten_glActiveTexture: function (_) {
                          aa.activeTexture(_);
                        },
                        emscripten_glAttachShader: (_, a) => {
                          aa.attachShader(H_.programs[_], H_.shaders[a]);
                        },
                        emscripten_glBindAttribLocation: (_, a, e) => {
                          aa.bindAttribLocation(H_.programs[_], a, c_(e));
                        },
                        emscripten_glBindBuffer: (_, a) => {
                          35051 == _
                            ? (aa.currentPixelPackBufferBinding = a)
                            : 35052 == _ &&
                              (aa.currentPixelUnpackBufferBinding = a),
                            aa.bindBuffer(_, H_.buffers[a]);
                        },
                        emscripten_glBindFramebuffer: (_, a) => {
                          aa.bindFramebuffer(
                            _,
                            a
                              ? H_.framebuffers[a]
                              : H_.currentContext.defaultFbo,
                          );
                        },
                        emscripten_glBindRenderbuffer: (_, a) => {
                          aa.bindRenderbuffer(_, H_.renderbuffers[a]);
                        },
                        emscripten_glBindSampler: (_, a) => {
                          aa.bindSampler(_, H_.samplers[a]);
                        },
                        emscripten_glBindTexture: (_, a) => {
                          aa.bindTexture(_, H_.textures[a]);
                        },
                        emscripten_glBindVertexArray: O_,
                        emscripten_glBindVertexArrayOES: W_,
                        emscripten_glBlendColor: function (_, a, e, r) {
                          aa.blendColor(_, a, e, r);
                        },
                        emscripten_glBlendEquation: function (_) {
                          aa.blendEquation(_);
                        },
                        emscripten_glBlendFunc: function (_, a) {
                          aa.blendFunc(_, a);
                        },
                        emscripten_glBlitFramebuffer: function (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) {
                          aa.blitFramebuffer(_, a, e, r, t, i, n, s, o, g);
                        },
                        emscripten_glBufferData: (_, a, e, r) => {
                          e && a
                            ? aa.bufferData(_, G, r, e, a)
                            : aa.bufferData(_, a, r);
                        },
                        emscripten_glBufferSubData: (_, a, e, r) => {
                          e && aa.bufferSubData(_, a, G, r, e);
                        },
                        emscripten_glCheckFramebufferStatus: function (_) {
                          return aa.checkFramebufferStatus(_);
                        },
                        emscripten_glClear: function (_) {
                          aa.clear(_);
                        },
                        emscripten_glClearColor: function (_, a, e, r) {
                          aa.clearColor(_, a, e, r);
                        },
                        emscripten_glClearStencil: function (_) {
                          aa.clearStencil(_);
                        },
                        emscripten_glClientWaitSync: (_, a, e, r) => {
                          var t = N_(e, r);
                          return aa.clientWaitSync(H_.syncs[_], a, t);
                        },
                        emscripten_glColorMask: (_, a, e, r) => {
                          aa.colorMask(!!_, !!a, !!e, !!r);
                        },
                        emscripten_glCompileShader: (_) => {
                          aa.compileShader(H_.shaders[_]);
                        },
                        emscripten_glCompressedTexImage2D: (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                        ) => {
                          aa.currentPixelUnpackBufferBinding || !n
                            ? aa.compressedTexImage2D(_, a, e, r, t, i, n, s)
                            : aa.compressedTexImage2D(
                                _,
                                a,
                                e,
                                r,
                                t,
                                i,
                                G,
                                s,
                                n,
                              );
                        },
                        emscripten_glCompressedTexSubImage2D: (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                          o,
                        ) => {
                          aa.currentPixelUnpackBufferBinding || !s
                            ? aa.compressedTexSubImage2D(
                                _,
                                a,
                                e,
                                r,
                                t,
                                i,
                                n,
                                s,
                                o,
                              )
                            : aa.compressedTexSubImage2D(
                                _,
                                a,
                                e,
                                r,
                                t,
                                i,
                                n,
                                G,
                                o,
                                s,
                              );
                        },
                        emscripten_glCopyBufferSubData: function (
                          _,
                          a,
                          e,
                          r,
                          t,
                        ) {
                          aa.copyBufferSubData(_, a, e, r, t);
                        },
                        emscripten_glCopyTexSubImage2D: function (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                        ) {
                          aa.copyTexSubImage2D(_, a, e, r, t, i, n, s);
                        },
                        emscripten_glCreateProgram: () => {
                          var _ = H_.getNewId(H_.programs),
                            a = aa.createProgram();
                          return (
                            (a.name = _),
                            (a.maxUniformLength =
                              a.maxAttributeLength =
                              a.maxUniformBlockNameLength =
                                0),
                            (a.uniformIdCounter = 1),
                            (H_.programs[_] = a),
                            _
                          );
                        },
                        emscripten_glCreateShader: (_) => {
                          var a = H_.getNewId(H_.shaders);
                          return (H_.shaders[a] = aa.createShader(_)), a;
                        },
                        emscripten_glCullFace: function (_) {
                          aa.cullFace(_);
                        },
                        emscripten_glDeleteBuffers: (_, a) => {
                          for (var e = 0; e < _; e++) {
                            var r = C[(a + 4 * e) >> 2],
                              t = H_.buffers[r];
                            t &&
                              (aa.deleteBuffer(t),
                              (t.name = 0),
                              (H_.buffers[r] = null),
                              r == aa.currentPixelPackBufferBinding &&
                                (aa.currentPixelPackBufferBinding = 0),
                              r == aa.currentPixelUnpackBufferBinding &&
                                (aa.currentPixelUnpackBufferBinding = 0));
                          }
                        },
                        emscripten_glDeleteFramebuffers: (_, a) => {
                          for (var e = 0; e < _; ++e) {
                            var r = C[(a + 4 * e) >> 2],
                              t = H_.framebuffers[r];
                            t &&
                              (aa.deleteFramebuffer(t),
                              (t.name = 0),
                              (H_.framebuffers[r] = null));
                          }
                        },
                        emscripten_glDeleteProgram: (_) => {
                          if (_) {
                            var a = H_.programs[_];
                            a
                              ? (aa.deleteProgram(a),
                                (a.name = 0),
                                (H_.programs[_] = null))
                              : H_.recordError(1281);
                          }
                        },
                        emscripten_glDeleteRenderbuffers: (_, a) => {
                          for (var e = 0; e < _; e++) {
                            var r = C[(a + 4 * e) >> 2],
                              t = H_.renderbuffers[r];
                            t &&
                              (aa.deleteRenderbuffer(t),
                              (t.name = 0),
                              (H_.renderbuffers[r] = null));
                          }
                        },
                        emscripten_glDeleteSamplers: (_, a) => {
                          for (var e = 0; e < _; e++) {
                            var r = C[(a + 4 * e) >> 2],
                              t = H_.samplers[r];
                            t &&
                              (aa.deleteSampler(t),
                              (t.name = 0),
                              (H_.samplers[r] = null));
                          }
                        },
                        emscripten_glDeleteShader: (_) => {
                          if (_) {
                            var a = H_.shaders[_];
                            a
                              ? (aa.deleteShader(a), (H_.shaders[_] = null))
                              : H_.recordError(1281);
                          }
                        },
                        emscripten_glDeleteSync: (_) => {
                          if (_) {
                            var a = H_.syncs[_];
                            a
                              ? (aa.deleteSync(a),
                                (a.name = 0),
                                (H_.syncs[_] = null))
                              : H_.recordError(1281);
                          }
                        },
                        emscripten_glDeleteTextures: (_, a) => {
                          for (var e = 0; e < _; e++) {
                            var r = C[(a + 4 * e) >> 2],
                              t = H_.textures[r];
                            t &&
                              (aa.deleteTexture(t),
                              (t.name = 0),
                              (H_.textures[r] = null));
                          }
                        },
                        emscripten_glDeleteVertexArrays: K_,
                        emscripten_glDeleteVertexArraysOES: q_,
                        emscripten_glDepthMask: (_) => {
                          aa.depthMask(!!_);
                        },
                        emscripten_glDisable: function (_) {
                          aa.disable(_);
                        },
                        emscripten_glDisableVertexAttribArray: (_) => {
                          aa.disableVertexAttribArray(_);
                        },
                        emscripten_glDrawArrays: (_, a, e) => {
                          aa.drawArrays(_, a, e);
                        },
                        emscripten_glDrawArraysInstanced: (_, a, e, r) => {
                          aa.drawArraysInstanced(_, a, e, r);
                        },
                        emscripten_glDrawArraysInstancedBaseInstanceWEBGL: (
                          _,
                          a,
                          e,
                          r,
                          t,
                        ) => {
                          aa.dibvbi.drawArraysInstancedBaseInstanceWEBGL(
                            _,
                            a,
                            e,
                            r,
                            t,
                          );
                        },
                        emscripten_glDrawBuffers: (_, a) => {
                          for (var e = X_[_], r = 0; r < _; r++)
                            e[r] = C[(a + 4 * r) >> 2];
                          aa.drawBuffers(e);
                        },
                        emscripten_glDrawElements: Q_,
                        emscripten_glDrawElementsInstanced: (_, a, e, r, t) => {
                          aa.drawElementsInstanced(_, a, e, r, t);
                        },
                        emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL:
                          (_, a, e, r, t, i, n) => {
                            aa.dibvbi.drawElementsInstancedBaseVertexBaseInstanceWEBGL(
                              _,
                              a,
                              e,
                              r,
                              t,
                              i,
                              n,
                            );
                          },
                        emscripten_glDrawRangeElements: (_, a, e, r, t, i) => {
                          Y_(_, r, t, i);
                        },
                        emscripten_glEnable: function (_) {
                          aa.enable(_);
                        },
                        emscripten_glEnableVertexAttribArray: (_) => {
                          aa.enableVertexAttribArray(_);
                        },
                        emscripten_glFenceSync: (_, a) => {
                          var e = aa.fenceSync(_, a);
                          if (e) {
                            var r = H_.getNewId(H_.syncs);
                            return (e.name = r), (H_.syncs[r] = e), r;
                          }
                          return 0;
                        },
                        emscripten_glFinish: function () {
                          aa.finish();
                        },
                        emscripten_glFlush: function () {
                          aa.flush();
                        },
                        emscripten_glFramebufferRenderbuffer: (_, a, e, r) => {
                          aa.framebufferRenderbuffer(
                            _,
                            a,
                            e,
                            H_.renderbuffers[r],
                          );
                        },
                        emscripten_glFramebufferTexture2D: (_, a, e, r, t) => {
                          aa.framebufferTexture2D(_, a, e, H_.textures[r], t);
                        },
                        emscripten_glFrontFace: function (_) {
                          aa.frontFace(_);
                        },
                        emscripten_glGenBuffers: (_, a) => {
                          J_(_, a, "createBuffer", H_.buffers);
                        },
                        emscripten_glGenFramebuffers: (_, a) => {
                          J_(_, a, "createFramebuffer", H_.framebuffers);
                        },
                        emscripten_glGenRenderbuffers: (_, a) => {
                          J_(_, a, "createRenderbuffer", H_.renderbuffers);
                        },
                        emscripten_glGenSamplers: (_, a) => {
                          J_(_, a, "createSampler", H_.samplers);
                        },
                        emscripten_glGenTextures: (_, a) => {
                          J_(_, a, "createTexture", H_.textures);
                        },
                        emscripten_glGenVertexArrays: ea,
                        emscripten_glGenVertexArraysOES: ra,
                        emscripten_glGenerateMipmap: function (_) {
                          aa.generateMipmap(_);
                        },
                        emscripten_glGetBufferParameteriv: (_, a, e) => {
                          e
                            ? (C[e >> 2] = aa.getBufferParameter(_, a))
                            : H_.recordError(1281);
                        },
                        emscripten_glGetError: () => {
                          var _ = aa.getError() || H_.lastError;
                          return (H_.lastError = 0), _;
                        },
                        emscripten_glGetFloatv: (_, a) => ta(_, a, 2),
                        emscripten_glGetFramebufferAttachmentParameteriv: (
                          _,
                          a,
                          e,
                          r,
                        ) => {
                          var t = aa.getFramebufferAttachmentParameter(_, a, e);
                          (t instanceof WebGLRenderbuffer ||
                            t instanceof WebGLTexture) &&
                            (t = 0 | t.name),
                            (C[r >> 2] = t);
                        },
                        emscripten_glGetIntegerv: (_, a) => ta(_, a, 0),
                        emscripten_glGetProgramInfoLog: (_, a, e, r) => {
                          var t = aa.getProgramInfoLog(H_.programs[_]);
                          null === t && (t = "(unknown error)");
                          var i = a > 0 && r ? R_(t, r, a) : 0;
                          e && (C[e >> 2] = i);
                        },
                        emscripten_glGetProgramiv: (_, a, e) => {
                          if (e)
                            if (_ >= H_.counter) H_.recordError(1281);
                            else if (((_ = H_.programs[_]), 35716 == a)) {
                              var r = aa.getProgramInfoLog(_);
                              null === r && (r = "(unknown error)"),
                                (C[e >> 2] = r.length + 1);
                            } else if (35719 == a) {
                              if (!_.maxUniformLength)
                                for (
                                  var t = 0;
                                  t < aa.getProgramParameter(_, 35718);
                                  ++t
                                )
                                  _.maxUniformLength = Math.max(
                                    _.maxUniformLength,
                                    aa.getActiveUniform(_, t).name.length + 1,
                                  );
                              C[e >> 2] = _.maxUniformLength;
                            } else if (35722 == a) {
                              if (!_.maxAttributeLength)
                                for (
                                  t = 0;
                                  t < aa.getProgramParameter(_, 35721);
                                  ++t
                                )
                                  _.maxAttributeLength = Math.max(
                                    _.maxAttributeLength,
                                    aa.getActiveAttrib(_, t).name.length + 1,
                                  );
                              C[e >> 2] = _.maxAttributeLength;
                            } else if (35381 == a) {
                              if (!_.maxUniformBlockNameLength)
                                for (
                                  t = 0;
                                  t < aa.getProgramParameter(_, 35382);
                                  ++t
                                )
                                  _.maxUniformBlockNameLength = Math.max(
                                    _.maxUniformBlockNameLength,
                                    aa.getActiveUniformBlockName(_, t).length +
                                      1,
                                  );
                              C[e >> 2] = _.maxUniformBlockNameLength;
                            } else C[e >> 2] = aa.getProgramParameter(_, a);
                          else H_.recordError(1281);
                        },
                        emscripten_glGetRenderbufferParameteriv: (_, a, e) => {
                          e
                            ? (C[e >> 2] = aa.getRenderbufferParameter(_, a))
                            : H_.recordError(1281);
                        },
                        emscripten_glGetShaderInfoLog: (_, a, e, r) => {
                          var t = aa.getShaderInfoLog(H_.shaders[_]);
                          null === t && (t = "(unknown error)");
                          var i = a > 0 && r ? R_(t, r, a) : 0;
                          e && (C[e >> 2] = i);
                        },
                        emscripten_glGetShaderPrecisionFormat: (_, a, e, r) => {
                          var t = aa.getShaderPrecisionFormat(_, a);
                          (C[e >> 2] = t.rangeMin),
                            (C[(e + 4) >> 2] = t.rangeMax),
                            (C[r >> 2] = t.precision);
                        },
                        emscripten_glGetShaderiv: (_, a, e) => {
                          if (e)
                            if (35716 == a) {
                              var r = aa.getShaderInfoLog(H_.shaders[_]);
                              null === r && (r = "(unknown error)");
                              var t = r ? r.length + 1 : 0;
                              C[e >> 2] = t;
                            } else if (35720 == a) {
                              var i = aa.getShaderSource(H_.shaders[_]),
                                n = i ? i.length + 1 : 0;
                              C[e >> 2] = n;
                            } else
                              C[e >> 2] = aa.getShaderParameter(
                                H_.shaders[_],
                                a,
                              );
                          else H_.recordError(1281);
                        },
                        emscripten_glGetString: (_) => {
                          var a = H_.stringCache[_];
                          if (!a) {
                            switch (_) {
                              case 7939:
                                a = ia(H_.getExtensions().join(" "));
                                break;
                              case 7936:
                              case 7937:
                              case 37445:
                              case 37446:
                                var e = aa.getParameter(_);
                                e || H_.recordError(1280), (a = e ? ia(e) : 0);
                                break;
                              case 7938:
                                var r = aa.getParameter(7938);
                                a = ia((r = `OpenGL ES 3.0 (${r})`));
                                break;
                              case 35724:
                                var t = aa.getParameter(35724),
                                  i = t.match(
                                    /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/,
                                  );
                                null !== i &&
                                  (3 == i[1].length && (i[1] = i[1] + "0"),
                                  (t = `OpenGL ES GLSL ES ${i[1]} (${t})`)),
                                  (a = ia(t));
                                break;
                              default:
                                H_.recordError(1280);
                            }
                            H_.stringCache[_] = a;
                          }
                          return a;
                        },
                        emscripten_glGetStringi: (_, a) => {
                          if (H_.currentContext.version < 2)
                            return H_.recordError(1282), 0;
                          var e = H_.stringiCache[_];
                          if (e)
                            return a < 0 || a >= e.length
                              ? (H_.recordError(1281), 0)
                              : e[a];
                          if (7939 === _) {
                            var r = H_.getExtensions().map((_) => ia(_));
                            return (
                              (e = H_.stringiCache[_] = r),
                              a < 0 || a >= e.length
                                ? (H_.recordError(1281), 0)
                                : e[a]
                            );
                          }
                          return H_.recordError(1280), 0;
                        },
                        emscripten_glGetUniformLocation: (_, a) => {
                          if (((a = c_(a)), (_ = H_.programs[_]))) {
                            ((_) => {
                              var a,
                                e,
                                r = _.uniformLocsById,
                                t = _.uniformSizeAndIdsByName;
                              if (!r)
                                for (
                                  _.uniformLocsById = r = {},
                                    _.uniformArrayNamesById = {},
                                    a = 0;
                                  a < aa.getProgramParameter(_, 35718);
                                  ++a
                                ) {
                                  var i = aa.getActiveUniform(_, a),
                                    n = i.name,
                                    s = i.size,
                                    o = na(n),
                                    g = o > 0 ? n.slice(0, o) : n,
                                    k = _.uniformIdCounter;
                                  for (
                                    _.uniformIdCounter += s,
                                      t[g] = [s, k],
                                      e = 0;
                                    e < s;
                                    ++e
                                  )
                                    (r[k] = e),
                                      (_.uniformArrayNamesById[k++] = g);
                                }
                            })(_);
                            var e = _.uniformLocsById,
                              r = 0,
                              t = a,
                              i = na(a);
                            i > 0 &&
                              ((s = a.slice(i + 1)),
                              (r = parseInt(s) >>> 0),
                              (t = a.slice(0, i)));
                            var n = _.uniformSizeAndIdsByName[t];
                            if (
                              n &&
                              r < n[0] &&
                              (e[(r += n[1])] =
                                e[r] || aa.getUniformLocation(_, a))
                            )
                              return r;
                          } else H_.recordError(1281);
                          var s;
                          return -1;
                        },
                        emscripten_glInvalidateFramebuffer: (_, a, e) => {
                          for (var r = X_[a], t = 0; t < a; t++)
                            r[t] = C[(e + 4 * t) >> 2];
                          aa.invalidateFramebuffer(_, r);
                        },
                        emscripten_glInvalidateSubFramebuffer: (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                        ) => {
                          for (var s = X_[a], o = 0; o < a; o++)
                            s[o] = C[(e + 4 * o) >> 2];
                          aa.invalidateSubFramebuffer(_, s, r, t, i, n);
                        },
                        emscripten_glIsSync: (_) => aa.isSync(H_.syncs[_]),
                        emscripten_glIsTexture: (_) => {
                          var a = H_.textures[_];
                          return a ? aa.isTexture(a) : 0;
                        },
                        emscripten_glLineWidth: function (_) {
                          aa.lineWidth(_);
                        },
                        emscripten_glLinkProgram: (_) => {
                          (_ = H_.programs[_]),
                            aa.linkProgram(_),
                            (_.uniformLocsById = 0),
                            (_.uniformSizeAndIdsByName = {});
                        },
                        emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL:
                          (_, a, e, r, t, i) => {
                            aa.mdibvbi.multiDrawArraysInstancedBaseInstanceWEBGL(
                              _,
                              C,
                              a >> 2,
                              C,
                              e >> 2,
                              C,
                              r >> 2,
                              x,
                              t >> 2,
                              i,
                            );
                          },
                        emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL:
                          (_, a, e, r, t, i, n, s) => {
                            aa.mdibvbi.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
                              _,
                              C,
                              a >> 2,
                              e,
                              C,
                              r >> 2,
                              C,
                              t >> 2,
                              C,
                              i >> 2,
                              x,
                              n >> 2,
                              s,
                            );
                          },
                        emscripten_glPixelStorei: (_, a) => {
                          3317 == _ && (H_.unpackAlignment = a),
                            aa.pixelStorei(_, a);
                        },
                        emscripten_glReadBuffer: function (_) {
                          aa.readBuffer(_);
                        },
                        emscripten_glReadPixels: (_, a, e, r, t, i, n) => {
                          if (aa.currentPixelPackBufferBinding)
                            aa.readPixels(_, a, e, r, t, i, n);
                          else {
                            var s = sa(i);
                            aa.readPixels(_, a, e, r, t, i, s, n >> oa(s));
                          }
                        },
                        emscripten_glRenderbufferStorage: function (
                          _,
                          a,
                          e,
                          r,
                        ) {
                          aa.renderbufferStorage(_, a, e, r);
                        },
                        emscripten_glRenderbufferStorageMultisample: function (
                          _,
                          a,
                          e,
                          r,
                          t,
                        ) {
                          aa.renderbufferStorageMultisample(_, a, e, r, t);
                        },
                        emscripten_glSamplerParameterf: (_, a, e) => {
                          aa.samplerParameterf(H_.samplers[_], a, e);
                        },
                        emscripten_glSamplerParameteri: (_, a, e) => {
                          aa.samplerParameteri(H_.samplers[_], a, e);
                        },
                        emscripten_glSamplerParameteriv: (_, a, e) => {
                          var r = C[e >> 2];
                          aa.samplerParameteri(H_.samplers[_], a, r);
                        },
                        emscripten_glScissor: function (_, a, e, r) {
                          aa.scissor(_, a, e, r);
                        },
                        emscripten_glShaderSource: (_, a, e, r) => {
                          var t = H_.getSource(_, a, e, r);
                          aa.shaderSource(H_.shaders[_], t);
                        },
                        emscripten_glStencilFunc: function (_, a, e) {
                          aa.stencilFunc(_, a, e);
                        },
                        emscripten_glStencilFuncSeparate: function (
                          _,
                          a,
                          e,
                          r,
                        ) {
                          aa.stencilFuncSeparate(_, a, e, r);
                        },
                        emscripten_glStencilMask: function (_) {
                          aa.stencilMask(_);
                        },
                        emscripten_glStencilMaskSeparate: function (_, a) {
                          aa.stencilMaskSeparate(_, a);
                        },
                        emscripten_glStencilOp: function (_, a, e) {
                          aa.stencilOp(_, a, e);
                        },
                        emscripten_glStencilOpSeparate: function (_, a, e, r) {
                          aa.stencilOpSeparate(_, a, e, r);
                        },
                        emscripten_glTexImage2D: (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                          o,
                        ) => {
                          if (aa.currentPixelUnpackBufferBinding)
                            aa.texImage2D(_, a, e, r, t, i, n, s, o);
                          else if (o) {
                            var g = sa(s);
                            aa.texImage2D(
                              _,
                              a,
                              e,
                              r,
                              t,
                              i,
                              n,
                              s,
                              g,
                              o >> oa(g),
                            );
                          } else aa.texImage2D(_, a, e, r, t, i, n, s, null);
                        },
                        emscripten_glTexParameterf: function (_, a, e) {
                          aa.texParameterf(_, a, e);
                        },
                        emscripten_glTexParameterfv: (_, a, e) => {
                          var r = M[e >> 2];
                          aa.texParameterf(_, a, r);
                        },
                        emscripten_glTexParameteri: function (_, a, e) {
                          aa.texParameteri(_, a, e);
                        },
                        emscripten_glTexParameteriv: (_, a, e) => {
                          var r = C[e >> 2];
                          aa.texParameteri(_, a, r);
                        },
                        emscripten_glTexStorage2D: function (_, a, e, r, t) {
                          aa.texStorage2D(_, a, e, r, t);
                        },
                        emscripten_glTexSubImage2D: (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                          o,
                        ) => {
                          if (aa.currentPixelUnpackBufferBinding)
                            aa.texSubImage2D(_, a, e, r, t, i, n, s, o);
                          else if (o) {
                            var g = sa(s);
                            aa.texSubImage2D(
                              _,
                              a,
                              e,
                              r,
                              t,
                              i,
                              n,
                              s,
                              g,
                              o >> oa(g),
                            );
                          } else aa.texSubImage2D(_, a, e, r, t, i, n, s, null);
                        },
                        emscripten_glUniform1f: (_, a) => {
                          aa.uniform1f(ga(_), a);
                        },
                        emscripten_glUniform1fv: (_, a, e) => {
                          a && aa.uniform1fv(ga(_), M, e >> 2, a);
                        },
                        emscripten_glUniform1i: (_, a) => {
                          aa.uniform1i(ga(_), a);
                        },
                        emscripten_glUniform1iv: (_, a, e) => {
                          a && aa.uniform1iv(ga(_), C, e >> 2, a);
                        },
                        emscripten_glUniform2f: (_, a, e) => {
                          aa.uniform2f(ga(_), a, e);
                        },
                        emscripten_glUniform2fv: (_, a, e) => {
                          a && aa.uniform2fv(ga(_), M, e >> 2, 2 * a);
                        },
                        emscripten_glUniform2i: (_, a, e) => {
                          aa.uniform2i(ga(_), a, e);
                        },
                        emscripten_glUniform2iv: (_, a, e) => {
                          a && aa.uniform2iv(ga(_), C, e >> 2, 2 * a);
                        },
                        emscripten_glUniform3f: (_, a, e, r) => {
                          aa.uniform3f(ga(_), a, e, r);
                        },
                        emscripten_glUniform3fv: (_, a, e) => {
                          a && aa.uniform3fv(ga(_), M, e >> 2, 3 * a);
                        },
                        emscripten_glUniform3i: (_, a, e, r) => {
                          aa.uniform3i(ga(_), a, e, r);
                        },
                        emscripten_glUniform3iv: (_, a, e) => {
                          a && aa.uniform3iv(ga(_), C, e >> 2, 3 * a);
                        },
                        emscripten_glUniform4f: (_, a, e, r, t) => {
                          aa.uniform4f(ga(_), a, e, r, t);
                        },
                        emscripten_glUniform4fv: (_, a, e) => {
                          a && aa.uniform4fv(ga(_), M, e >> 2, 4 * a);
                        },
                        emscripten_glUniform4i: (_, a, e, r, t) => {
                          aa.uniform4i(ga(_), a, e, r, t);
                        },
                        emscripten_glUniform4iv: (_, a, e) => {
                          a && aa.uniform4iv(ga(_), C, e >> 2, 4 * a);
                        },
                        emscripten_glUniformMatrix2fv: (_, a, e, r) => {
                          a &&
                            aa.uniformMatrix2fv(ga(_), !!e, M, r >> 2, 4 * a);
                        },
                        emscripten_glUniformMatrix3fv: (_, a, e, r) => {
                          a &&
                            aa.uniformMatrix3fv(ga(_), !!e, M, r >> 2, 9 * a);
                        },
                        emscripten_glUniformMatrix4fv: (_, a, e, r) => {
                          a &&
                            aa.uniformMatrix4fv(ga(_), !!e, M, r >> 2, 16 * a);
                        },
                        emscripten_glUseProgram: (_) => {
                          (_ = H_.programs[_]),
                            aa.useProgram(_),
                            (aa.currentProgram = _);
                        },
                        emscripten_glVertexAttrib1f: function (_, a) {
                          aa.vertexAttrib1f(_, a);
                        },
                        emscripten_glVertexAttrib2fv: (_, a) => {
                          aa.vertexAttrib2f(_, M[a >> 2], M[(a + 4) >> 2]);
                        },
                        emscripten_glVertexAttrib3fv: (_, a) => {
                          aa.vertexAttrib3f(
                            _,
                            M[a >> 2],
                            M[(a + 4) >> 2],
                            M[(a + 8) >> 2],
                          );
                        },
                        emscripten_glVertexAttrib4fv: (_, a) => {
                          aa.vertexAttrib4f(
                            _,
                            M[a >> 2],
                            M[(a + 4) >> 2],
                            M[(a + 8) >> 2],
                            M[(a + 12) >> 2],
                          );
                        },
                        emscripten_glVertexAttribDivisor: (_, a) => {
                          aa.vertexAttribDivisor(_, a);
                        },
                        emscripten_glVertexAttribIPointer: (_, a, e, r, t) => {
                          aa.vertexAttribIPointer(_, a, e, r, t);
                        },
                        emscripten_glVertexAttribPointer: (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                        ) => {
                          aa.vertexAttribPointer(_, a, e, !!r, t, i);
                        },
                        emscripten_glViewport: function (_, a, e, r) {
                          aa.viewport(_, a, e, r);
                        },
                        emscripten_glWaitSync: (_, a, e, r) => {
                          var t = N_(e, r);
                          aa.waitSync(H_.syncs[_], a, t);
                        },
                        emscripten_memcpy_js: (_, a, e) =>
                          G.copyWithin(_, a, a + e),
                        emscripten_resize_heap: (_) => {
                          var a = G.length,
                            e = 2147483648;
                          if ((_ >>>= 0) > e) return !1;
                          for (var r, t = 1; t <= 4; t *= 2) {
                            var i = a * (1 + 0.2 / t);
                            i = Math.min(i, _ + 100663296);
                            var n = Math.min(
                              e,
                              (r = Math.max(_, i)) +
                                ((65536 - (r % 65536)) % 65536),
                            );
                            if (ka(n)) return !0;
                          }
                          return !1;
                        },
                        environ_get: (_, a) => {
                          var e = 0;
                          return (
                            ba().forEach((r, t) => {
                              var i = a + e;
                              (x[(_ + 4 * t) >> 2] = i),
                                ((_, a) => {
                                  for (var e = 0; e < _.length; ++e)
                                    P[0 | a++] = _.charCodeAt(e);
                                  P[0 | a] = 0;
                                })(r, i),
                                (e += r.length + 1);
                            }),
                            0
                          );
                        },
                        environ_sizes_get: (_, a) => {
                          var e = ba();
                          x[_ >> 2] = e.length;
                          var r = 0;
                          return (
                            e.forEach((_) => (r += _.length + 1)),
                            (x[a >> 2] = r),
                            0
                          );
                        },
                        exit: (_, a) => {
                          var e;
                          (e = _),
                            J || (t.onExit && t.onExit(e), (T = !0)),
                            j(e, new Y(e));
                        },
                        fd_close: function (_) {
                          try {
                            var a = d_.getStreamFromFD(_);
                            return h_.close(a), 0;
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return _.errno;
                          }
                        },
                        fd_pread: function (_, a, e, r, t, i) {
                          var n = z_(r, t);
                          try {
                            if (isNaN(n)) return 61;
                            var s = d_.getStreamFromFD(_),
                              o = ja(s, a, e, n);
                            return (x[i >> 2] = o), 0;
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return _.errno;
                          }
                        },
                        fd_read: function (_, a, e, r) {
                          try {
                            var t = d_.getStreamFromFD(_),
                              i = ja(t, a, e);
                            return (x[r >> 2] = i), 0;
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return _.errno;
                          }
                        },
                        fd_seek: function (_, a, e, r, t) {
                          var i = z_(a, e);
                          try {
                            if (isNaN(i)) return 61;
                            var n = d_.getStreamFromFD(_);
                            return (
                              h_.llseek(n, i, r),
                              (W = [
                                n.position >>> 0,
                                ((O = n.position),
                                +Math.abs(O) >= 1
                                  ? O > 0
                                    ? +Math.floor(O / 4294967296) >>> 0
                                    : ~~+Math.ceil(
                                        (O - +(~~O >>> 0)) / 4294967296,
                                      ) >>> 0
                                  : 0),
                              ]),
                              (C[t >> 2] = W[0]),
                              (C[(t + 4) >> 2] = W[1]),
                              n.getdents &&
                                0 === i &&
                                0 === r &&
                                (n.getdents = null),
                              0
                            );
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return _.errno;
                          }
                        },
                        fd_write: function (_, a, e, r) {
                          try {
                            var t = ((_, a, e, r) => {
                              for (var t = 0, i = 0; i < e; i++) {
                                var n = x[a >> 2],
                                  s = x[(a + 4) >> 2];
                                a += 8;
                                var o = h_.write(_, P, n, s, r);
                                if (o < 0) return -1;
                                (t += o), void 0 !== r && (r += o);
                              }
                              return t;
                            })(d_.getStreamFromFD(_), a, e);
                            return (x[r >> 2] = t), 0;
                          } catch (_) {
                            if (void 0 === h_ || "ErrnoError" !== _.name)
                              throw _;
                            return _.errno;
                          }
                        },
                        invoke_ii: function (_, a) {
                          var e = va();
                          try {
                            return ua(_)(a);
                          } catch (_) {
                            if ((Ta(e), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_iii: function (_, a, e) {
                          var r = va();
                          try {
                            return ua(_)(a, e);
                          } catch (_) {
                            if ((Ta(r), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_iiii: function (_, a, e, r) {
                          var t = va();
                          try {
                            return ua(_)(a, e, r);
                          } catch (_) {
                            if ((Ta(t), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_iiiii: function (_, a, e, r, t) {
                          var i = va();
                          try {
                            return ua(_)(a, e, r, t);
                          } catch (_) {
                            if ((Ta(i), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_iiiiii: function (_, a, e, r, t, i) {
                          var n = va();
                          try {
                            return ua(_)(a, e, r, t, i);
                          } catch (_) {
                            if ((Ta(n), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_iiiiiii: function (_, a, e, r, t, i, n) {
                          var s = va();
                          try {
                            return ua(_)(a, e, r, t, i, n);
                          } catch (_) {
                            if ((Ta(s), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_iiiiiiiiii: function (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) {
                          var k = va();
                          try {
                            return ua(_)(a, e, r, t, i, n, s, o, g);
                          } catch (_) {
                            if ((Ta(k), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_v: function (_) {
                          var a = va();
                          try {
                            ua(_)();
                          } catch (_) {
                            if ((Ta(a), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_vi: function (_, a) {
                          var e = va();
                          try {
                            ua(_)(a);
                          } catch (_) {
                            if ((Ta(e), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_vii: function (_, a, e) {
                          var r = va();
                          try {
                            ua(_)(a, e);
                          } catch (_) {
                            if ((Ta(r), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_viii: function (_, a, e, r) {
                          var t = va();
                          try {
                            ua(_)(a, e, r);
                          } catch (_) {
                            if ((Ta(t), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_viiii: function (_, a, e, r, t) {
                          var i = va();
                          try {
                            ua(_)(a, e, r, t);
                          } catch (_) {
                            if ((Ta(i), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_viiiii: function (_, a, e, r, t, i) {
                          var n = va();
                          try {
                            ua(_)(a, e, r, t, i);
                          } catch (_) {
                            if ((Ta(n), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_viiiiii: function (_, a, e, r, t, i, n) {
                          var s = va();
                          try {
                            ua(_)(a, e, r, t, i, n);
                          } catch (_) {
                            if ((Ta(s), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        invoke_viiiiiiiii: function (
                          _,
                          a,
                          e,
                          r,
                          t,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) {
                          var k = va();
                          try {
                            ua(_)(a, e, r, t, i, n, s, o, g);
                          } catch (_) {
                            if ((Ta(k), _ !== _ + 0)) throw _;
                            Ma(1, 0);
                          }
                        },
                        strftime_l: (_, a, e, r, t) =>
                          ((_, a, e, r) => {
                            var t = x[(r + 40) >> 2],
                              i = {
                                tm_sec: C[r >> 2],
                                tm_min: C[(r + 4) >> 2],
                                tm_hour: C[(r + 8) >> 2],
                                tm_mday: C[(r + 12) >> 2],
                                tm_mon: C[(r + 16) >> 2],
                                tm_year: C[(r + 20) >> 2],
                                tm_wday: C[(r + 24) >> 2],
                                tm_yday: C[(r + 28) >> 2],
                                tm_isdst: C[(r + 32) >> 2],
                                tm_gmtoff: C[(r + 36) >> 2],
                                tm_zone: t ? c_(t) : "",
                              },
                              n = c_(e),
                              s = {
                                "%c": "%a %b %d %H:%M:%S %Y",
                                "%D": "%m/%d/%y",
                                "%F": "%Y-%m-%d",
                                "%h": "%b",
                                "%r": "%I:%M:%S %p",
                                "%R": "%H:%M",
                                "%T": "%H:%M:%S",
                                "%x": "%m/%d/%y",
                                "%X": "%H:%M:%S",
                                "%Ec": "%c",
                                "%EC": "%C",
                                "%Ex": "%m/%d/%y",
                                "%EX": "%H:%M:%S",
                                "%Ey": "%y",
                                "%EY": "%Y",
                                "%Od": "%d",
                                "%Oe": "%e",
                                "%OH": "%H",
                                "%OI": "%I",
                                "%Om": "%m",
                                "%OM": "%M",
                                "%OS": "%S",
                                "%Ou": "%u",
                                "%OU": "%U",
                                "%OV": "%V",
                                "%Ow": "%w",
                                "%OW": "%W",
                                "%Oy": "%y",
                              };
                            for (var o in s)
                              n = n.replace(new RegExp(o, "g"), s[o]);
                            var g = [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                              ],
                              k = [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December",
                              ];
                            function l(_, a, e) {
                              for (
                                var r =
                                  "number" == typeof _ ? _.toString() : _ || "";
                                r.length < a;

                              )
                                r = e[0] + r;
                              return r;
                            }
                            function b(_, a) {
                              return l(_, a, "0");
                            }
                            function j(_, a) {
                              function e(_) {
                                return _ < 0 ? -1 : _ > 0 ? 1 : 0;
                              }
                              var r;
                              return (
                                0 ===
                                  (r = e(_.getFullYear() - a.getFullYear())) &&
                                  0 === (r = e(_.getMonth() - a.getMonth())) &&
                                  (r = e(_.getDate() - a.getDate())),
                                r
                              );
                            }
                            function p(_) {
                              switch (_.getDay()) {
                                case 0:
                                  return new Date(_.getFullYear() - 1, 11, 29);
                                case 1:
                                  return _;
                                case 2:
                                  return new Date(_.getFullYear(), 0, 3);
                                case 3:
                                  return new Date(_.getFullYear(), 0, 2);
                                case 4:
                                  return new Date(_.getFullYear(), 0, 1);
                                case 5:
                                  return new Date(_.getFullYear() - 1, 11, 31);
                                case 6:
                                  return new Date(_.getFullYear() - 1, 11, 30);
                              }
                            }
                            function h(_) {
                              var a = ((_, a) => {
                                  for (var e = new Date(_.getTime()); a > 0; ) {
                                    var r = pa(e.getFullYear()),
                                      t = e.getMonth(),
                                      i = (r ? ha : ca)[t];
                                    if (!(a > i - e.getDate()))
                                      return e.setDate(e.getDate() + a), e;
                                    (a -= i - e.getDate() + 1),
                                      e.setDate(1),
                                      t < 11
                                        ? e.setMonth(t + 1)
                                        : (e.setMonth(0),
                                          e.setFullYear(e.getFullYear() + 1));
                                  }
                                  return e;
                                })(new Date(_.tm_year + 1900, 0, 1), _.tm_yday),
                                e = new Date(a.getFullYear(), 0, 4),
                                r = new Date(a.getFullYear() + 1, 0, 4),
                                t = p(e),
                                i = p(r);
                              return j(t, a) <= 0
                                ? j(i, a) <= 0
                                  ? a.getFullYear() + 1
                                  : a.getFullYear()
                                : a.getFullYear() - 1;
                            }
                            var c = {
                              "%a": (_) => g[_.tm_wday].substring(0, 3),
                              "%A": (_) => g[_.tm_wday],
                              "%b": (_) => k[_.tm_mon].substring(0, 3),
                              "%B": (_) => k[_.tm_mon],
                              "%C": (_) => b(((_.tm_year + 1900) / 100) | 0, 2),
                              "%d": (_) => b(_.tm_mday, 2),
                              "%e": (_) => l(_.tm_mday, 2, " "),
                              "%g": (_) => h(_).toString().substring(2),
                              "%G": (_) => h(_),
                              "%H": (_) => b(_.tm_hour, 2),
                              "%I": (_) => {
                                var a = _.tm_hour;
                                return (
                                  0 == a ? (a = 12) : a > 12 && (a -= 12),
                                  b(a, 2)
                                );
                              },
                              "%j": (_) =>
                                b(
                                  _.tm_mday +
                                    ((_, a) => {
                                      for (
                                        var e = 0, r = 0;
                                        r <= a;
                                        e += _[r++]
                                      );
                                      return e;
                                    })(
                                      pa(_.tm_year + 1900) ? ha : ca,
                                      _.tm_mon - 1,
                                    ),
                                  3,
                                ),
                              "%m": (_) => b(_.tm_mon + 1, 2),
                              "%M": (_) => b(_.tm_min, 2),
                              "%n": () => "\n",
                              "%p": (_) =>
                                _.tm_hour >= 0 && _.tm_hour < 12 ? "AM" : "PM",
                              "%S": (_) => b(_.tm_sec, 2),
                              "%t": () => "\t",
                              "%u": (_) => _.tm_wday || 7,
                              "%U": (_) => {
                                var a = _.tm_yday + 7 - _.tm_wday;
                                return b(Math.floor(a / 7), 2);
                              },
                              "%V": (_) => {
                                var a = Math.floor(
                                  (_.tm_yday + 7 - ((_.tm_wday + 6) % 7)) / 7,
                                );
                                if (
                                  ((_.tm_wday + 371 - _.tm_yday - 2) % 7 <= 2 &&
                                    a++,
                                  a)
                                ) {
                                  if (53 == a) {
                                    var e = (_.tm_wday + 371 - _.tm_yday) % 7;
                                    4 == e ||
                                      (3 == e && pa(_.tm_year)) ||
                                      (a = 1);
                                  }
                                } else {
                                  a = 52;
                                  var r = (_.tm_wday + 7 - _.tm_yday - 1) % 7;
                                  (4 == r ||
                                    (5 == r && pa((_.tm_year % 400) - 1))) &&
                                    a++;
                                }
                                return b(a, 2);
                              },
                              "%w": (_) => _.tm_wday,
                              "%W": (_) => {
                                var a = _.tm_yday + 7 - ((_.tm_wday + 6) % 7);
                                return b(Math.floor(a / 7), 2);
                              },
                              "%y": (_) =>
                                (_.tm_year + 1900).toString().substring(2),
                              "%Y": (_) => _.tm_year + 1900,
                              "%z": (_) => {
                                var a = _.tm_gmtoff,
                                  e = a >= 0;
                                return (
                                  (a =
                                    ((a = Math.abs(a) / 60) / 60) * 100 +
                                    (a % 60)),
                                  (e ? "+" : "-") + String("0000" + a).slice(-4)
                                );
                              },
                              "%Z": (_) => _.tm_zone,
                              "%%": () => "%",
                            };
                            for (var o in ((n = n.replace(/%%/g, "\0\0")), c))
                              n.includes(o) &&
                                (n = n.replace(new RegExp(o, "g"), c[o](i)));
                            var d,
                              u,
                              m = s_((n = n.replace(/\0\0/g, "%")), !1);
                            return m.length > a
                              ? 0
                              : ((d = m), (u = _), P.set(d, u), m.length - 1);
                          })(_, a, e, r),
                      },
                      Ga = (function () {
                        var _,
                          a,
                          e,
                          i,
                          n = { env: Pa, wasi_snapshot_preview1: Pa };
                        function s(_, a) {
                          var e;
                          return (
                            (Ga = _.exports),
                            (t.wasmExports = Ga),
                            (m = Ga.memory),
                            R(),
                            (_a = Ga.__indirect_function_table),
                            (e = Ga.__wasm_call_ctors),
                            I.unshift(e),
                            z(),
                            Ga
                          );
                        }
                        if ((L(), t.instantiateWasm))
                          try {
                            return t.instantiateWasm(n, s);
                          } catch (_) {
                            f(
                              `Module.instantiateWasm callback failed with error: ${_}`,
                            ),
                              r(_);
                          }
                        return (
                          ((_ = u),
                          (a = H),
                          (e = n),
                          (i = function (_) {
                            s(_.instance);
                          }),
                          _ ||
                          "function" !=
                            typeof WebAssembly.instantiateStreaming ||
                          N(a) ||
                          $(a) ||
                          c ||
                          "function" != typeof fetch
                            ? q(a, e, i)
                            : fetch(a, { credentials: "same-origin" }).then(
                                (_) =>
                                  WebAssembly.instantiateStreaming(_, e).then(
                                    i,
                                    function (_) {
                                      return (
                                        f(
                                          `wasm streaming compile failed: ${_}`,
                                        ),
                                        f(
                                          "falling back to ArrayBuffer instantiation",
                                        ),
                                        q(a, e, i)
                                      );
                                    },
                                  ),
                              )).catch(r),
                          {}
                        );
                      })(),
                      ya =
                        ((t.org_jetbrains_skia_StdVectorDecoder__1nGetArraySize =
                          (_) =>
                            (t.org_jetbrains_skia_StdVectorDecoder__1nGetArraySize =
                              Ga.org_jetbrains_skia_StdVectorDecoder__1nGetArraySize)(
                              _,
                            )),
                        (t.org_jetbrains_skia_StdVectorDecoder__1nReleaseElement =
                          (_, a) =>
                            (t.org_jetbrains_skia_StdVectorDecoder__1nReleaseElement =
                              Ga.org_jetbrains_skia_StdVectorDecoder__1nReleaseElement)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_StdVectorDecoder__1nDisposeArray =
                          (_, a) =>
                            (t.org_jetbrains_skia_StdVectorDecoder__1nDisposeArray =
                              Ga.org_jetbrains_skia_StdVectorDecoder__1nDisposeArray)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake =
                              Ga.org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag =
                              Ga.org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake =
                          (_, a) =>
                            (t.org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake =
                              Ga.org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel =
                              Ga.org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer =
                              Ga.org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume =
                              Ga.org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun =
                          (_, a) =>
                            (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun =
                              Ga.org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd =
                              Ga.org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nGetFinalizer =
                              Ga.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMake =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMake =
                              Ga.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMake)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMakeBlob =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMakeBlob =
                              Ga.org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMakeBlob)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake =
                              Ga.org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont =
                              Ga.org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_shaper_Shaper__1nGetFinalizer =
                              Ga.org_jetbrains_skia_shaper_Shaper__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_shaper_Shaper__1nMakePrimitive =
                          () =>
                            (t.org_jetbrains_skia_shaper_Shaper__1nMakePrimitive =
                              Ga.org_jetbrains_skia_shaper_Shaper__1nMakePrimitive)()),
                        (t.org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper =
                              Ga.org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap =
                              Ga.org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder =
                          (_) =>
                            (t.org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder =
                              Ga.org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder)(
                              _,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper__1nMakeCoreText =
                          () =>
                            (t.org_jetbrains_skia_shaper_Shaper__1nMakeCoreText =
                              Ga.org_jetbrains_skia_shaper_Shaper__1nMakeCoreText)()),
                        (t.org_jetbrains_skia_shaper_Shaper__1nMake = (_) =>
                          (t.org_jetbrains_skia_shaper_Shaper__1nMake =
                            Ga.org_jetbrains_skia_shaper_Shaper__1nMake)(_)),
                        (t.org_jetbrains_skia_shaper_Shaper__1nShapeBlob = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_shaper_Shaper__1nShapeBlob =
                            Ga.org_jetbrains_skia_shaper_Shaper__1nShapeBlob)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_shaper_Shaper__1nShapeLine = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_shaper_Shaper__1nShapeLine =
                            Ga.org_jetbrains_skia_shaper_Shaper__1nShapeLine)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_shaper_Shaper__1nShape = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                        ) =>
                          (t.org_jetbrains_skia_shaper_Shaper__1nShape =
                            Ga.org_jetbrains_skia_shaper_Shaper__1nShape)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                          )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer)()),
                        (t.org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator =
                          (_, a) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer)()),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo =
                          (_, a) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs =
                          (_, a) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions =
                          (_, a) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters =
                          (_, a) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate =
                          () =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate)()),
                        (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit =
                          (_, a, e, r, i, n, s) =>
                            (t.org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit =
                              Ga.org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                            )),
                        (t.org_jetbrains_skia_Bitmap__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Bitmap__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Bitmap__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Bitmap__1nMake = () =>
                          (t.org_jetbrains_skia_Bitmap__1nMake =
                            Ga.org_jetbrains_skia_Bitmap__1nMake)()),
                        (t.org_jetbrains_skia_Bitmap__1nMakeClone = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nMakeClone =
                            Ga.org_jetbrains_skia_Bitmap__1nMakeClone)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nSwap = (_, a) =>
                          (t.org_jetbrains_skia_Bitmap__1nSwap =
                            Ga.org_jetbrains_skia_Bitmap__1nSwap)(_, a)),
                        (t.org_jetbrains_skia_Bitmap__1nGetImageInfo = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetImageInfo =
                            Ga.org_jetbrains_skia_Bitmap__1nGetImageInfo)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels =
                            Ga.org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nIsNull = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nIsNull =
                            Ga.org_jetbrains_skia_Bitmap__1nIsNull)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nGetRowBytes = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetRowBytes =
                            Ga.org_jetbrains_skia_Bitmap__1nGetRowBytes)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nSetAlphaType = (_, a) =>
                          (t.org_jetbrains_skia_Bitmap__1nSetAlphaType =
                            Ga.org_jetbrains_skia_Bitmap__1nSetAlphaType)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nComputeByteSize = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nComputeByteSize =
                            Ga.org_jetbrains_skia_Bitmap__1nComputeByteSize)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nIsImmutable = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nIsImmutable =
                            Ga.org_jetbrains_skia_Bitmap__1nIsImmutable)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nSetImmutable = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nSetImmutable =
                            Ga.org_jetbrains_skia_Bitmap__1nSetImmutable)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nReset = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nReset =
                            Ga.org_jetbrains_skia_Bitmap__1nReset)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nComputeIsOpaque = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nComputeIsOpaque =
                            Ga.org_jetbrains_skia_Bitmap__1nComputeIsOpaque)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nSetImageInfo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nSetImageInfo =
                            Ga.org_jetbrains_skia_Bitmap__1nSetImageInfo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nAllocPixelsFlags = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nAllocPixelsFlags =
                            Ga.org_jetbrains_skia_Bitmap__1nAllocPixelsFlags)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes =
                            Ga.org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (_) => (ya = Ga.free)(_)),
                      Fa =
                        ((t.org_jetbrains_skia_Bitmap__1nInstallPixels = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nInstallPixels =
                            Ga.org_jetbrains_skia_Bitmap__1nInstallPixels)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (_) => (Fa = Ga.malloc)(_)),
                      Ca =
                        ((t.org_jetbrains_skia_Bitmap__1nAllocPixels = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nAllocPixels =
                            Ga.org_jetbrains_skia_Bitmap__1nAllocPixels)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nGetPixelRef = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetPixelRef =
                            Ga.org_jetbrains_skia_Bitmap__1nGetPixelRef)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX =
                            Ga.org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY =
                            Ga.org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nSetPixelRef = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nSetPixelRef =
                            Ga.org_jetbrains_skia_Bitmap__1nSetPixelRef)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nIsReadyToDraw = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nIsReadyToDraw =
                            Ga.org_jetbrains_skia_Bitmap__1nIsReadyToDraw)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nGetGenerationId = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetGenerationId =
                            Ga.org_jetbrains_skia_Bitmap__1nGetGenerationId)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged =
                            Ga.org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nEraseColor = (_, a) =>
                          (t.org_jetbrains_skia_Bitmap__1nEraseColor =
                            Ga.org_jetbrains_skia_Bitmap__1nEraseColor)(_, a)),
                        (t.org_jetbrains_skia_Bitmap__1nErase = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nErase =
                            Ga.org_jetbrains_skia_Bitmap__1nErase)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nGetColor = (_, a, e) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetColor =
                            Ga.org_jetbrains_skia_Bitmap__1nGetColor)(_, a, e)),
                        (t.org_jetbrains_skia_Bitmap__1nGetAlphaf = (_, a, e) =>
                          (t.org_jetbrains_skia_Bitmap__1nGetAlphaf =
                            Ga.org_jetbrains_skia_Bitmap__1nGetAlphaf)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nExtractSubset = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nExtractSubset =
                            Ga.org_jetbrains_skia_Bitmap__1nExtractSubset)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nReadPixels = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nReadPixels =
                            Ga.org_jetbrains_skia_Bitmap__1nReadPixels)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nExtractAlpha = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nExtractAlpha =
                            Ga.org_jetbrains_skia_Bitmap__1nExtractAlpha)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Bitmap__1nPeekPixels = (_) =>
                          (t.org_jetbrains_skia_Bitmap__1nPeekPixels =
                            Ga.org_jetbrains_skia_Bitmap__1nPeekPixels)(_)),
                        (t.org_jetbrains_skia_Bitmap__1nMakeShader = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Bitmap__1nMakeShader =
                            Ga.org_jetbrains_skia_Bitmap__1nMakeShader)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_PathSegmentIterator__1nMake = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_PathSegmentIterator__1nMake =
                            Ga.org_jetbrains_skia_PathSegmentIterator__1nMake)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer =
                              Ga.org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_PathSegmentIterator__1nNext = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_PathSegmentIterator__1nNext =
                            Ga.org_jetbrains_skia_PathSegmentIterator__1nNext)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Picture__1nMakeFromData = (_) =>
                          (t.org_jetbrains_skia_Picture__1nMakeFromData =
                            Ga.org_jetbrains_skia_Picture__1nMakeFromData)(_)),
                        (t.org_jetbrains_skia_Picture__1nPlayback = (_, a, e) =>
                          (t.org_jetbrains_skia_Picture__1nPlayback =
                            Ga.org_jetbrains_skia_Picture__1nPlayback)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Picture__1nGetCullRect = (_, a) =>
                          (t.org_jetbrains_skia_Picture__1nGetCullRect =
                            Ga.org_jetbrains_skia_Picture__1nGetCullRect)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Picture__1nGetUniqueId = (_) =>
                          (t.org_jetbrains_skia_Picture__1nGetUniqueId =
                            Ga.org_jetbrains_skia_Picture__1nGetUniqueId)(_)),
                        (t.org_jetbrains_skia_Picture__1nSerializeToData = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Picture__1nSerializeToData =
                            Ga.org_jetbrains_skia_Picture__1nSerializeToData)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Picture__1nMakePlaceholder = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Picture__1nMakePlaceholder =
                            Ga.org_jetbrains_skia_Picture__1nMakePlaceholder)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Picture__1nGetApproximateOpCount =
                          (_) =>
                            (t.org_jetbrains_skia_Picture__1nGetApproximateOpCount =
                              Ga.org_jetbrains_skia_Picture__1nGetApproximateOpCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_Picture__1nGetApproximateBytesUsed =
                          (_) =>
                            (t.org_jetbrains_skia_Picture__1nGetApproximateBytesUsed =
                              Ga.org_jetbrains_skia_Picture__1nGetApproximateBytesUsed)(
                              _,
                            )),
                        (t.org_jetbrains_skia_Picture__1nMakeShader = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_Picture__1nMakeShader =
                            Ga.org_jetbrains_skia_Picture__1nMakeShader)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_Path__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Path__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Path__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Path__1nMake = () =>
                          (t.org_jetbrains_skia_Path__1nMake =
                            Ga.org_jetbrains_skia_Path__1nMake)()),
                        (t.org_jetbrains_skia_Path__1nMakeFromSVGString = (_) =>
                          (t.org_jetbrains_skia_Path__1nMakeFromSVGString =
                            Ga.org_jetbrains_skia_Path__1nMakeFromSVGString)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Path__1nEquals = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nEquals =
                            Ga.org_jetbrains_skia_Path__1nEquals)(_, a)),
                        (t.org_jetbrains_skia_Path__1nIsInterpolatable = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nIsInterpolatable =
                            Ga.org_jetbrains_skia_Path__1nIsInterpolatable)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Path__1nMakeLerp = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nMakeLerp =
                            Ga.org_jetbrains_skia_Path__1nMakeLerp)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nGetFillMode = (_) =>
                          (t.org_jetbrains_skia_Path__1nGetFillMode =
                            Ga.org_jetbrains_skia_Path__1nGetFillMode)(_)),
                        (t.org_jetbrains_skia_Path__1nSetFillMode = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nSetFillMode =
                            Ga.org_jetbrains_skia_Path__1nSetFillMode)(_, a)),
                        (t.org_jetbrains_skia_Path__1nIsConvex = (_) =>
                          (t.org_jetbrains_skia_Path__1nIsConvex =
                            Ga.org_jetbrains_skia_Path__1nIsConvex)(_)),
                        (t.org_jetbrains_skia_Path__1nIsOval = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nIsOval =
                            Ga.org_jetbrains_skia_Path__1nIsOval)(_, a)),
                        (t.org_jetbrains_skia_Path__1nIsRRect = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nIsRRect =
                            Ga.org_jetbrains_skia_Path__1nIsRRect)(_, a)),
                        (t.org_jetbrains_skia_Path__1nReset = (_) =>
                          (t.org_jetbrains_skia_Path__1nReset =
                            Ga.org_jetbrains_skia_Path__1nReset)(_)),
                        (t.org_jetbrains_skia_Path__1nRewind = (_) =>
                          (t.org_jetbrains_skia_Path__1nRewind =
                            Ga.org_jetbrains_skia_Path__1nRewind)(_)),
                        (t.org_jetbrains_skia_Path__1nIsEmpty = (_) =>
                          (t.org_jetbrains_skia_Path__1nIsEmpty =
                            Ga.org_jetbrains_skia_Path__1nIsEmpty)(_)),
                        (t.org_jetbrains_skia_Path__1nIsLastContourClosed = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nIsLastContourClosed =
                            Ga.org_jetbrains_skia_Path__1nIsLastContourClosed)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Path__1nIsFinite = (_) =>
                          (t.org_jetbrains_skia_Path__1nIsFinite =
                            Ga.org_jetbrains_skia_Path__1nIsFinite)(_)),
                        (t.org_jetbrains_skia_Path__1nIsVolatile = (_) =>
                          (t.org_jetbrains_skia_Path__1nIsVolatile =
                            Ga.org_jetbrains_skia_Path__1nIsVolatile)(_)),
                        (t.org_jetbrains_skia_Path__1nSetVolatile = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nSetVolatile =
                            Ga.org_jetbrains_skia_Path__1nSetVolatile)(_, a)),
                        (t.org_jetbrains_skia_Path__1nIsLineDegenerate = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nIsLineDegenerate =
                            Ga.org_jetbrains_skia_Path__1nIsLineDegenerate)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Path__1nIsQuadDegenerate = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nIsQuadDegenerate =
                            Ga.org_jetbrains_skia_Path__1nIsQuadDegenerate)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Path__1nIsCubicDegenerate = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nIsCubicDegenerate =
                            Ga.org_jetbrains_skia_Path__1nIsCubicDegenerate)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_Path__1nMaybeGetAsLine = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nMaybeGetAsLine =
                            Ga.org_jetbrains_skia_Path__1nMaybeGetAsLine)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Path__1nGetPointsCount = (_) =>
                          (t.org_jetbrains_skia_Path__1nGetPointsCount =
                            Ga.org_jetbrains_skia_Path__1nGetPointsCount)(_)),
                        (t.org_jetbrains_skia_Path__1nGetPoint = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nGetPoint =
                            Ga.org_jetbrains_skia_Path__1nGetPoint)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nGetPoints = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nGetPoints =
                            Ga.org_jetbrains_skia_Path__1nGetPoints)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nCountVerbs = (_) =>
                          (t.org_jetbrains_skia_Path__1nCountVerbs =
                            Ga.org_jetbrains_skia_Path__1nCountVerbs)(_)),
                        (t.org_jetbrains_skia_Path__1nGetVerbs = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nGetVerbs =
                            Ga.org_jetbrains_skia_Path__1nGetVerbs)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nApproximateBytesUsed = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nApproximateBytesUsed =
                            Ga.org_jetbrains_skia_Path__1nApproximateBytesUsed)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Path__1nSwap = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nSwap =
                            Ga.org_jetbrains_skia_Path__1nSwap)(_, a)),
                        (t.org_jetbrains_skia_Path__1nGetBounds = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nGetBounds =
                            Ga.org_jetbrains_skia_Path__1nGetBounds)(_, a)),
                        (t.org_jetbrains_skia_Path__1nUpdateBoundsCache = (_) =>
                          (t.org_jetbrains_skia_Path__1nUpdateBoundsCache =
                            Ga.org_jetbrains_skia_Path__1nUpdateBoundsCache)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Path__1nComputeTightBounds = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nComputeTightBounds =
                            Ga.org_jetbrains_skia_Path__1nComputeTightBounds)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Path__1nConservativelyContainsRect =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_Path__1nConservativelyContainsRect =
                              Ga.org_jetbrains_skia_Path__1nConservativelyContainsRect)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_Path__1nIncReserve = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nIncReserve =
                            Ga.org_jetbrains_skia_Path__1nIncReserve)(_, a)),
                        (t.org_jetbrains_skia_Path__1nMoveTo = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nMoveTo =
                            Ga.org_jetbrains_skia_Path__1nMoveTo)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nRMoveTo = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nRMoveTo =
                            Ga.org_jetbrains_skia_Path__1nRMoveTo)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nLineTo = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nLineTo =
                            Ga.org_jetbrains_skia_Path__1nLineTo)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nRLineTo = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nRLineTo =
                            Ga.org_jetbrains_skia_Path__1nRLineTo)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nQuadTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nQuadTo =
                            Ga.org_jetbrains_skia_Path__1nQuadTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Path__1nRQuadTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nRQuadTo =
                            Ga.org_jetbrains_skia_Path__1nRQuadTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Path__1nConicTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nConicTo =
                            Ga.org_jetbrains_skia_Path__1nConicTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Path__1nRConicTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nRConicTo =
                            Ga.org_jetbrains_skia_Path__1nRConicTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Path__1nCubicTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nCubicTo =
                            Ga.org_jetbrains_skia_Path__1nCubicTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Path__1nRCubicTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nRCubicTo =
                            Ga.org_jetbrains_skia_Path__1nRCubicTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Path__1nArcTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nArcTo =
                            Ga.org_jetbrains_skia_Path__1nArcTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_Path__1nTangentArcTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nTangentArcTo =
                            Ga.org_jetbrains_skia_Path__1nTangentArcTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Path__1nEllipticalArcTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nEllipticalArcTo =
                            Ga.org_jetbrains_skia_Path__1nEllipticalArcTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_Path__1nREllipticalArcTo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nREllipticalArcTo =
                            Ga.org_jetbrains_skia_Path__1nREllipticalArcTo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_Path__1nClosePath = (_) =>
                          (t.org_jetbrains_skia_Path__1nClosePath =
                            Ga.org_jetbrains_skia_Path__1nClosePath)(_)),
                        (t.org_jetbrains_skia_Path__1nConvertConicToQuads = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nConvertConicToQuads =
                            Ga.org_jetbrains_skia_Path__1nConvertConicToQuads)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_Path__1nIsRect = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nIsRect =
                            Ga.org_jetbrains_skia_Path__1nIsRect)(_, a)),
                        (t.org_jetbrains_skia_Path__1nAddRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nAddRect =
                            Ga.org_jetbrains_skia_Path__1nAddRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Path__1nAddOval = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nAddOval =
                            Ga.org_jetbrains_skia_Path__1nAddOval)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Path__1nAddCircle = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nAddCircle =
                            Ga.org_jetbrains_skia_Path__1nAddCircle)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Path__1nAddArc = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nAddArc =
                            Ga.org_jetbrains_skia_Path__1nAddArc)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Path__1nAddRRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nAddRRect =
                            Ga.org_jetbrains_skia_Path__1nAddRRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_Path__1nAddPoly = (_, a, e, r) =>
                          (t.org_jetbrains_skia_Path__1nAddPoly =
                            Ga.org_jetbrains_skia_Path__1nAddPoly)(_, a, e, r)),
                        (t.org_jetbrains_skia_Path__1nAddPath = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nAddPath =
                            Ga.org_jetbrains_skia_Path__1nAddPath)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nAddPathOffset = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nAddPathOffset =
                            Ga.org_jetbrains_skia_Path__1nAddPathOffset)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Path__1nAddPathTransform = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nAddPathTransform =
                            Ga.org_jetbrains_skia_Path__1nAddPathTransform)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Path__1nReverseAddPath = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nReverseAddPath =
                            Ga.org_jetbrains_skia_Path__1nReverseAddPath)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Path__1nOffset = (_, a, e, r) =>
                          (t.org_jetbrains_skia_Path__1nOffset =
                            Ga.org_jetbrains_skia_Path__1nOffset)(_, a, e, r)),
                        (t.org_jetbrains_skia_Path__1nTransform = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nTransform =
                            Ga.org_jetbrains_skia_Path__1nTransform)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Path__1nGetLastPt = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nGetLastPt =
                            Ga.org_jetbrains_skia_Path__1nGetLastPt)(_, a)),
                        (t.org_jetbrains_skia_Path__1nSetLastPt = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nSetLastPt =
                            Ga.org_jetbrains_skia_Path__1nSetLastPt)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nGetSegmentMasks = (_) =>
                          (t.org_jetbrains_skia_Path__1nGetSegmentMasks =
                            Ga.org_jetbrains_skia_Path__1nGetSegmentMasks)(_)),
                        (t.org_jetbrains_skia_Path__1nContains = (_, a, e) =>
                          (t.org_jetbrains_skia_Path__1nContains =
                            Ga.org_jetbrains_skia_Path__1nContains)(_, a, e)),
                        (t.org_jetbrains_skia_Path__1nDump = (_) =>
                          (t.org_jetbrains_skia_Path__1nDump =
                            Ga.org_jetbrains_skia_Path__1nDump)(_)),
                        (t.org_jetbrains_skia_Path__1nDumpHex = (_) =>
                          (t.org_jetbrains_skia_Path__1nDumpHex =
                            Ga.org_jetbrains_skia_Path__1nDumpHex)(_)),
                        (t.org_jetbrains_skia_Path__1nSerializeToBytes = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nSerializeToBytes =
                            Ga.org_jetbrains_skia_Path__1nSerializeToBytes)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Path__1nMakeCombining = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Path__1nMakeCombining =
                            Ga.org_jetbrains_skia_Path__1nMakeCombining)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Path__1nMakeFromBytes = (_, a) =>
                          (t.org_jetbrains_skia_Path__1nMakeFromBytes =
                            Ga.org_jetbrains_skia_Path__1nMakeFromBytes)(_, a)),
                        (t.org_jetbrains_skia_Path__1nGetGenerationId = (_) =>
                          (t.org_jetbrains_skia_Path__1nGetGenerationId =
                            Ga.org_jetbrains_skia_Path__1nGetGenerationId)(_)),
                        (t.org_jetbrains_skia_Path__1nIsValid = (_) =>
                          (t.org_jetbrains_skia_Path__1nIsValid =
                            Ga.org_jetbrains_skia_Path__1nIsValid)(_)),
                        (t.org_jetbrains_skia_Paint__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Paint__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Paint__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Paint__1nMake = () =>
                          (t.org_jetbrains_skia_Paint__1nMake =
                            Ga.org_jetbrains_skia_Paint__1nMake)()),
                        (t.org_jetbrains_skia_Paint__1nMakeClone = (_) =>
                          (t.org_jetbrains_skia_Paint__1nMakeClone =
                            Ga.org_jetbrains_skia_Paint__1nMakeClone)(_)),
                        (t.org_jetbrains_skia_Paint__1nEquals = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nEquals =
                            Ga.org_jetbrains_skia_Paint__1nEquals)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nReset = (_) =>
                          (t.org_jetbrains_skia_Paint__1nReset =
                            Ga.org_jetbrains_skia_Paint__1nReset)(_)),
                        (t.org_jetbrains_skia_Paint__1nIsAntiAlias = (_) =>
                          (t.org_jetbrains_skia_Paint__1nIsAntiAlias =
                            Ga.org_jetbrains_skia_Paint__1nIsAntiAlias)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetAntiAlias = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetAntiAlias =
                            Ga.org_jetbrains_skia_Paint__1nSetAntiAlias)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nIsDither = (_) =>
                          (t.org_jetbrains_skia_Paint__1nIsDither =
                            Ga.org_jetbrains_skia_Paint__1nIsDither)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetDither = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetDither =
                            Ga.org_jetbrains_skia_Paint__1nSetDither)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nGetColor = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetColor =
                            Ga.org_jetbrains_skia_Paint__1nGetColor)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetColor = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetColor =
                            Ga.org_jetbrains_skia_Paint__1nSetColor)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nGetColor4f = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nGetColor4f =
                            Ga.org_jetbrains_skia_Paint__1nGetColor4f)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nSetColor4f = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Paint__1nSetColor4f =
                            Ga.org_jetbrains_skia_Paint__1nSetColor4f)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Paint__1nGetMode = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetMode =
                            Ga.org_jetbrains_skia_Paint__1nGetMode)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetMode = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetMode =
                            Ga.org_jetbrains_skia_Paint__1nSetMode)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nGetStrokeWidth = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetStrokeWidth =
                            Ga.org_jetbrains_skia_Paint__1nGetStrokeWidth)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetStrokeWidth = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Paint__1nSetStrokeWidth =
                            Ga.org_jetbrains_skia_Paint__1nSetStrokeWidth)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Paint__1nGetStrokeMiter = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetStrokeMiter =
                            Ga.org_jetbrains_skia_Paint__1nGetStrokeMiter)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetStrokeMiter = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Paint__1nSetStrokeMiter =
                            Ga.org_jetbrains_skia_Paint__1nSetStrokeMiter)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Paint__1nGetStrokeCap = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetStrokeCap =
                            Ga.org_jetbrains_skia_Paint__1nGetStrokeCap)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetStrokeCap = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetStrokeCap =
                            Ga.org_jetbrains_skia_Paint__1nSetStrokeCap)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nGetStrokeJoin = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetStrokeJoin =
                            Ga.org_jetbrains_skia_Paint__1nGetStrokeJoin)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetStrokeJoin = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetStrokeJoin =
                            Ga.org_jetbrains_skia_Paint__1nSetStrokeJoin)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Paint__1nGetMaskFilter = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetMaskFilter =
                            Ga.org_jetbrains_skia_Paint__1nGetMaskFilter)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetMaskFilter = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetMaskFilter =
                            Ga.org_jetbrains_skia_Paint__1nSetMaskFilter)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Paint__1nGetImageFilter = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetImageFilter =
                            Ga.org_jetbrains_skia_Paint__1nGetImageFilter)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetImageFilter = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Paint__1nSetImageFilter =
                            Ga.org_jetbrains_skia_Paint__1nSetImageFilter)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Paint__1nGetBlendMode = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetBlendMode =
                            Ga.org_jetbrains_skia_Paint__1nGetBlendMode)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetBlendMode = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetBlendMode =
                            Ga.org_jetbrains_skia_Paint__1nSetBlendMode)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nGetPathEffect = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetPathEffect =
                            Ga.org_jetbrains_skia_Paint__1nGetPathEffect)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetPathEffect = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetPathEffect =
                            Ga.org_jetbrains_skia_Paint__1nSetPathEffect)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Paint__1nGetShader = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetShader =
                            Ga.org_jetbrains_skia_Paint__1nGetShader)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetShader = (_, a) =>
                          (t.org_jetbrains_skia_Paint__1nSetShader =
                            Ga.org_jetbrains_skia_Paint__1nSetShader)(_, a)),
                        (t.org_jetbrains_skia_Paint__1nGetColorFilter = (_) =>
                          (t.org_jetbrains_skia_Paint__1nGetColorFilter =
                            Ga.org_jetbrains_skia_Paint__1nGetColorFilter)(_)),
                        (t.org_jetbrains_skia_Paint__1nSetColorFilter = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Paint__1nSetColorFilter =
                            Ga.org_jetbrains_skia_Paint__1nSetColorFilter)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Paint__1nHasNothingToDraw = (_) =>
                          (t.org_jetbrains_skia_Paint__1nHasNothingToDraw =
                            Ga.org_jetbrains_skia_Paint__1nHasNothingToDraw)(
                            _,
                          )),
                        (t.org_jetbrains_skiko_RenderTargetsKt_makeGLRenderTargetNative =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skiko_RenderTargetsKt_makeGLRenderTargetNative =
                              Ga.org_jetbrains_skiko_RenderTargetsKt_makeGLRenderTargetNative)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skiko_RenderTargetsKt_makeGLContextNative =
                          () =>
                            (t.org_jetbrains_skiko_RenderTargetsKt_makeGLContextNative =
                              Ga.org_jetbrains_skiko_RenderTargetsKt_makeGLContextNative)()),
                        (t.org_jetbrains_skiko_RenderTargetsKt_makeMetalRenderTargetNative =
                          (_, a, e) =>
                            (t.org_jetbrains_skiko_RenderTargetsKt_makeMetalRenderTargetNative =
                              Ga.org_jetbrains_skiko_RenderTargetsKt_makeMetalRenderTargetNative)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skiko_RenderTargetsKt_makeMetalContextNative =
                          () =>
                            (t.org_jetbrains_skiko_RenderTargetsKt_makeMetalContextNative =
                              Ga.org_jetbrains_skiko_RenderTargetsKt_makeMetalContextNative)()),
                        (t.org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer =
                              Ga.org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_skottie_AnimationBuilder__1nMake =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_AnimationBuilder__1nMake =
                              Ga.org_jetbrains_skia_skottie_AnimationBuilder__1nMake)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager =
                          (_, a) =>
                            (t.org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager =
                              Ga.org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger =
                          (_, a) =>
                            (t.org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger =
                              Ga.org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString =
                          (_, a) =>
                            (t.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString =
                              Ga.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile =
                          (_, a) =>
                            (t.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile =
                              Ga.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData =
                          (_, a) =>
                            (t.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData =
                              Ga.org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_skottie_Animation__1nGetFinalizer =
                              Ga.org_jetbrains_skia_skottie_Animation__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_skottie_Animation__1nMakeFromString =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nMakeFromString =
                              Ga.org_jetbrains_skia_skottie_Animation__1nMakeFromString)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nMakeFromFile =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nMakeFromFile =
                              Ga.org_jetbrains_skia_skottie_Animation__1nMakeFromFile)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nMakeFromData =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nMakeFromData =
                              Ga.org_jetbrains_skia_skottie_Animation__1nMakeFromData)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nRender = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_skottie_Animation__1nRender =
                            Ga.org_jetbrains_skia_skottie_Animation__1nRender)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_skottie_Animation__1nSeek = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_skottie_Animation__1nSeek =
                            Ga.org_jetbrains_skia_skottie_Animation__1nSeek)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_skottie_Animation__1nSeekFrame = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_skottie_Animation__1nSeekFrame =
                            Ga.org_jetbrains_skia_skottie_Animation__1nSeekFrame)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_skottie_Animation__1nSeekFrameTime =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nSeekFrameTime =
                              Ga.org_jetbrains_skia_skottie_Animation__1nSeekFrameTime)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nGetDuration =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nGetDuration =
                              Ga.org_jetbrains_skia_skottie_Animation__1nGetDuration)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nGetFPS = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_skottie_Animation__1nGetFPS =
                            Ga.org_jetbrains_skia_skottie_Animation__1nGetFPS)(
                            _,
                          )),
                        (t.org_jetbrains_skia_skottie_Animation__1nGetInPoint =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nGetInPoint =
                              Ga.org_jetbrains_skia_skottie_Animation__1nGetInPoint)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nGetOutPoint =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nGetOutPoint =
                              Ga.org_jetbrains_skia_skottie_Animation__1nGetOutPoint)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nGetVersion =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Animation__1nGetVersion =
                              Ga.org_jetbrains_skia_skottie_Animation__1nGetVersion)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Animation__1nGetSize = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_skottie_Animation__1nGetSize =
                            Ga.org_jetbrains_skia_skottie_Animation__1nGetSize)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_skottie_Logger__1nMake = () =>
                          (t.org_jetbrains_skia_skottie_Logger__1nMake =
                            Ga.org_jetbrains_skia_skottie_Logger__1nMake)()),
                        (t.org_jetbrains_skia_skottie_Logger__1nInit = (_, a) =>
                          (t.org_jetbrains_skia_skottie_Logger__1nInit =
                            Ga.org_jetbrains_skia_skottie_Logger__1nInit)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_skottie_Logger__1nGetLogMessage =
                          (_) =>
                            (t.org_jetbrains_skia_skottie_Logger__1nGetLogMessage =
                              Ga.org_jetbrains_skia_skottie_Logger__1nGetLogMessage)(
                              _,
                            )),
                        (t.org_jetbrains_skia_skottie_Logger__1nGetLogJson = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_skottie_Logger__1nGetLogJson =
                            Ga.org_jetbrains_skia_skottie_Logger__1nGetLogJson)(
                            _,
                          )),
                        (t.org_jetbrains_skia_skottie_Logger__1nGetLogLevel = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_skottie_Logger__1nGetLogLevel =
                            Ga.org_jetbrains_skia_skottie_Logger__1nGetLogLevel)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer =
                              Ga.org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_TextBlobBuilder__1nMake = () =>
                          (t.org_jetbrains_skia_TextBlobBuilder__1nMake =
                            Ga.org_jetbrains_skia_TextBlobBuilder__1nMake)()),
                        (t.org_jetbrains_skia_TextBlobBuilder__1nBuild = (_) =>
                          (t.org_jetbrains_skia_TextBlobBuilder__1nBuild =
                            Ga.org_jetbrains_skia_TextBlobBuilder__1nBuild)(_)),
                        (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRun = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRun =
                            Ga.org_jetbrains_skia_TextBlobBuilder__1nAppendRun)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH =
                          (_, a, e, r, i, n, s) =>
                            (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH =
                              Ga.org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                            )),
                        (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos =
                              Ga.org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform =
                              Ga.org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_Drawable__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Drawable__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Drawable__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Drawable__1nSetBounds = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Drawable__1nSetBounds =
                            Ga.org_jetbrains_skia_Drawable__1nSetBounds)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Drawable__1nGetBounds = (_, a) =>
                          (t.org_jetbrains_skia_Drawable__1nGetBounds =
                            Ga.org_jetbrains_skia_Drawable__1nGetBounds)(_, a)),
                        (t.org_jetbrains_skia_Drawable__1nGetOnDrawCanvas = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Drawable__1nGetOnDrawCanvas =
                            Ga.org_jetbrains_skia_Drawable__1nGetOnDrawCanvas)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Drawable__1nMake = () =>
                          (t.org_jetbrains_skia_Drawable__1nMake =
                            Ga.org_jetbrains_skia_Drawable__1nMake)()),
                        (t.org_jetbrains_skia_Drawable__1nInit = (_, a, e) =>
                          (t.org_jetbrains_skia_Drawable__1nInit =
                            Ga.org_jetbrains_skia_Drawable__1nInit)(_, a, e)),
                        (t.org_jetbrains_skia_Drawable__1nDraw = (_, a, e) =>
                          (t.org_jetbrains_skia_Drawable__1nDraw =
                            Ga.org_jetbrains_skia_Drawable__1nDraw)(_, a, e)),
                        (t.org_jetbrains_skia_Drawable__1nMakePictureSnapshot =
                          (_) =>
                            (t.org_jetbrains_skia_Drawable__1nMakePictureSnapshot =
                              Ga.org_jetbrains_skia_Drawable__1nMakePictureSnapshot)(
                              _,
                            )),
                        (t.org_jetbrains_skia_Drawable__1nGetGenerationId = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Drawable__1nGetGenerationId =
                            Ga.org_jetbrains_skia_Drawable__1nGetGenerationId)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Drawable__1nNotifyDrawingChanged =
                          (_) =>
                            (t.org_jetbrains_skia_Drawable__1nNotifyDrawingChanged =
                              Ga.org_jetbrains_skia_Drawable__1nNotifyDrawingChanged)(
                              _,
                            )),
                        (t.org_jetbrains_skia_FontStyleSet__1nMakeEmpty = () =>
                          (t.org_jetbrains_skia_FontStyleSet__1nMakeEmpty =
                            Ga.org_jetbrains_skia_FontStyleSet__1nMakeEmpty)()),
                        (t.org_jetbrains_skia_FontStyleSet__1nCount = (_) =>
                          (t.org_jetbrains_skia_FontStyleSet__1nCount =
                            Ga.org_jetbrains_skia_FontStyleSet__1nCount)(_)),
                        (t.org_jetbrains_skia_FontStyleSet__1nGetStyle = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_FontStyleSet__1nGetStyle =
                            Ga.org_jetbrains_skia_FontStyleSet__1nGetStyle)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_FontStyleSet__1nGetStyleName = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_FontStyleSet__1nGetStyleName =
                            Ga.org_jetbrains_skia_FontStyleSet__1nGetStyleName)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_FontStyleSet__1nGetTypeface = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_FontStyleSet__1nGetTypeface =
                            Ga.org_jetbrains_skia_FontStyleSet__1nGetTypeface)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_FontStyleSet__1nMatchStyle = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_FontStyleSet__1nMatchStyle =
                            Ga.org_jetbrains_skia_FontStyleSet__1nMatchStyle)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_icu_Unicode_charDirection = (_) =>
                          (t.org_jetbrains_skia_icu_Unicode_charDirection =
                            Ga.org_jetbrains_skia_icu_Unicode_charDirection)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Font__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Font__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Font__1nMakeDefault = () =>
                          (t.org_jetbrains_skia_Font__1nMakeDefault =
                            Ga.org_jetbrains_skia_Font__1nMakeDefault)()),
                        (t.org_jetbrains_skia_Font__1nMakeTypeface = (_) =>
                          (t.org_jetbrains_skia_Font__1nMakeTypeface =
                            Ga.org_jetbrains_skia_Font__1nMakeTypeface)(_)),
                        (t.org_jetbrains_skia_Font__1nMakeTypefaceSize = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nMakeTypefaceSize =
                            Ga.org_jetbrains_skia_Font__1nMakeTypefaceSize)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew =
                              Ga.org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_Font__1nMakeClone = (_) =>
                          (t.org_jetbrains_skia_Font__1nMakeClone =
                            Ga.org_jetbrains_skia_Font__1nMakeClone)(_)),
                        (t.org_jetbrains_skia_Font__1nEquals = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nEquals =
                            Ga.org_jetbrains_skia_Font__1nEquals)(_, a)),
                        (t.org_jetbrains_skia_Font__1nIsAutoHintingForced = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nIsAutoHintingForced =
                            Ga.org_jetbrains_skia_Font__1nIsAutoHintingForced)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Font__1nAreBitmapsEmbedded = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nAreBitmapsEmbedded =
                            Ga.org_jetbrains_skia_Font__1nAreBitmapsEmbedded)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Font__1nIsSubpixel = (_) =>
                          (t.org_jetbrains_skia_Font__1nIsSubpixel =
                            Ga.org_jetbrains_skia_Font__1nIsSubpixel)(_)),
                        (t.org_jetbrains_skia_Font__1nAreMetricsLinear = (_) =>
                          (t.org_jetbrains_skia_Font__1nAreMetricsLinear =
                            Ga.org_jetbrains_skia_Font__1nAreMetricsLinear)(_)),
                        (t.org_jetbrains_skia_Font__1nIsEmboldened = (_) =>
                          (t.org_jetbrains_skia_Font__1nIsEmboldened =
                            Ga.org_jetbrains_skia_Font__1nIsEmboldened)(_)),
                        (t.org_jetbrains_skia_Font__1nIsBaselineSnapped = (_) =>
                          (t.org_jetbrains_skia_Font__1nIsBaselineSnapped =
                            Ga.org_jetbrains_skia_Font__1nIsBaselineSnapped)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Font__1nSetAutoHintingForced = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nSetAutoHintingForced =
                            Ga.org_jetbrains_skia_Font__1nSetAutoHintingForced)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Font__1nSetBitmapsEmbedded = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nSetBitmapsEmbedded =
                            Ga.org_jetbrains_skia_Font__1nSetBitmapsEmbedded)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Font__1nSetSubpixel = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetSubpixel =
                            Ga.org_jetbrains_skia_Font__1nSetSubpixel)(_, a)),
                        (t.org_jetbrains_skia_Font__1nSetMetricsLinear = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nSetMetricsLinear =
                            Ga.org_jetbrains_skia_Font__1nSetMetricsLinear)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Font__1nSetEmboldened = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetEmboldened =
                            Ga.org_jetbrains_skia_Font__1nSetEmboldened)(_, a)),
                        (t.org_jetbrains_skia_Font__1nSetBaselineSnapped = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nSetBaselineSnapped =
                            Ga.org_jetbrains_skia_Font__1nSetBaselineSnapped)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetEdging = (_) =>
                          (t.org_jetbrains_skia_Font__1nGetEdging =
                            Ga.org_jetbrains_skia_Font__1nGetEdging)(_)),
                        (t.org_jetbrains_skia_Font__1nSetEdging = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetEdging =
                            Ga.org_jetbrains_skia_Font__1nSetEdging)(_, a)),
                        (t.org_jetbrains_skia_Font__1nGetHinting = (_) =>
                          (t.org_jetbrains_skia_Font__1nGetHinting =
                            Ga.org_jetbrains_skia_Font__1nGetHinting)(_)),
                        (t.org_jetbrains_skia_Font__1nSetHinting = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetHinting =
                            Ga.org_jetbrains_skia_Font__1nSetHinting)(_, a)),
                        (t.org_jetbrains_skia_Font__1nGetTypeface = (_) =>
                          (t.org_jetbrains_skia_Font__1nGetTypeface =
                            Ga.org_jetbrains_skia_Font__1nGetTypeface)(_)),
                        (t.org_jetbrains_skia_Font__1nGetTypefaceOrDefault = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nGetTypefaceOrDefault =
                            Ga.org_jetbrains_skia_Font__1nGetTypefaceOrDefault)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetSize = (_) =>
                          (t.org_jetbrains_skia_Font__1nGetSize =
                            Ga.org_jetbrains_skia_Font__1nGetSize)(_)),
                        (t.org_jetbrains_skia_Font__1nGetScaleX = (_) =>
                          (t.org_jetbrains_skia_Font__1nGetScaleX =
                            Ga.org_jetbrains_skia_Font__1nGetScaleX)(_)),
                        (t.org_jetbrains_skia_Font__1nGetSkewX = (_) =>
                          (t.org_jetbrains_skia_Font__1nGetSkewX =
                            Ga.org_jetbrains_skia_Font__1nGetSkewX)(_)),
                        (t.org_jetbrains_skia_Font__1nSetTypeface = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetTypeface =
                            Ga.org_jetbrains_skia_Font__1nSetTypeface)(_, a)),
                        (t.org_jetbrains_skia_Font__1nSetSize = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetSize =
                            Ga.org_jetbrains_skia_Font__1nSetSize)(_, a)),
                        (t.org_jetbrains_skia_Font__1nSetScaleX = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetScaleX =
                            Ga.org_jetbrains_skia_Font__1nSetScaleX)(_, a)),
                        (t.org_jetbrains_skia_Font__1nSetSkewX = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nSetSkewX =
                            Ga.org_jetbrains_skia_Font__1nSetSkewX)(_, a)),
                        (t.org_jetbrains_skia_Font__1nGetUTF32Glyphs = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nGetUTF32Glyphs =
                            Ga.org_jetbrains_skia_Font__1nGetUTF32Glyphs)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetUTF32Glyph = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nGetUTF32Glyph =
                            Ga.org_jetbrains_skia_Font__1nGetUTF32Glyph)(_, a)),
                        (t.org_jetbrains_skia_Font__1nGetStringGlyphsCount = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nGetStringGlyphsCount =
                            Ga.org_jetbrains_skia_Font__1nGetStringGlyphsCount)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Font__1nMeasureText = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nMeasureText =
                            Ga.org_jetbrains_skia_Font__1nMeasureText)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Font__1nMeasureTextWidth = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nMeasureTextWidth =
                            Ga.org_jetbrains_skia_Font__1nMeasureTextWidth)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetWidths = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nGetWidths =
                            Ga.org_jetbrains_skia_Font__1nGetWidths)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetBounds = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nGetBounds =
                            Ga.org_jetbrains_skia_Font__1nGetBounds)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetPositions = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nGetPositions =
                            Ga.org_jetbrains_skia_Font__1nGetPositions)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetXPositions = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Font__1nGetXPositions =
                            Ga.org_jetbrains_skia_Font__1nGetXPositions)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Font__1nGetPath = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nGetPath =
                            Ga.org_jetbrains_skia_Font__1nGetPath)(_, a)),
                        (t.org_jetbrains_skia_Font__1nGetPaths = (_, a, e) =>
                          (t.org_jetbrains_skia_Font__1nGetPaths =
                            Ga.org_jetbrains_skia_Font__1nGetPaths)(_, a, e)),
                        (t.org_jetbrains_skia_Font__1nGetMetrics = (_, a) =>
                          (t.org_jetbrains_skia_Font__1nGetMetrics =
                            Ga.org_jetbrains_skia_Font__1nGetMetrics)(_, a)),
                        (t.org_jetbrains_skia_Font__1nGetSpacing = (_) =>
                          (t.org_jetbrains_skia_Font__1nGetSpacing =
                            Ga.org_jetbrains_skia_Font__1nGetSpacing)(_)),
                        (t.org_jetbrains_skia_Region__1nMake = () =>
                          (t.org_jetbrains_skia_Region__1nMake =
                            Ga.org_jetbrains_skia_Region__1nMake)()),
                        (t.org_jetbrains_skia_Region__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Region__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Region__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Region__1nSet = (_, a) =>
                          (t.org_jetbrains_skia_Region__1nSet =
                            Ga.org_jetbrains_skia_Region__1nSet)(_, a)),
                        (t.org_jetbrains_skia_Region__1nIsEmpty = (_) =>
                          (t.org_jetbrains_skia_Region__1nIsEmpty =
                            Ga.org_jetbrains_skia_Region__1nIsEmpty)(_)),
                        (t.org_jetbrains_skia_Region__1nIsRect = (_) =>
                          (t.org_jetbrains_skia_Region__1nIsRect =
                            Ga.org_jetbrains_skia_Region__1nIsRect)(_)),
                        (t.org_jetbrains_skia_Region__1nIsComplex = (_) =>
                          (t.org_jetbrains_skia_Region__1nIsComplex =
                            Ga.org_jetbrains_skia_Region__1nIsComplex)(_)),
                        (t.org_jetbrains_skia_Region__1nGetBounds = (_, a) =>
                          (t.org_jetbrains_skia_Region__1nGetBounds =
                            Ga.org_jetbrains_skia_Region__1nGetBounds)(_, a)),
                        (t.org_jetbrains_skia_Region__1nComputeRegionComplexity =
                          (_) =>
                            (t.org_jetbrains_skia_Region__1nComputeRegionComplexity =
                              Ga.org_jetbrains_skia_Region__1nComputeRegionComplexity)(
                              _,
                            )),
                        (t.org_jetbrains_skia_Region__1nGetBoundaryPath = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nGetBoundaryPath =
                            Ga.org_jetbrains_skia_Region__1nGetBoundaryPath)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Region__1nSetEmpty = (_) =>
                          (t.org_jetbrains_skia_Region__1nSetEmpty =
                            Ga.org_jetbrains_skia_Region__1nSetEmpty)(_)),
                        (t.org_jetbrains_skia_Region__1nSetRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nSetRect =
                            Ga.org_jetbrains_skia_Region__1nSetRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Region__1nSetRects = (_, a, e) =>
                          (t.org_jetbrains_skia_Region__1nSetRects =
                            Ga.org_jetbrains_skia_Region__1nSetRects)(_, a, e)),
                        (t.org_jetbrains_skia_Region__1nSetRegion = (_, a) =>
                          (t.org_jetbrains_skia_Region__1nSetRegion =
                            Ga.org_jetbrains_skia_Region__1nSetRegion)(_, a)),
                        (t.org_jetbrains_skia_Region__1nSetPath = (_, a, e) =>
                          (t.org_jetbrains_skia_Region__1nSetPath =
                            Ga.org_jetbrains_skia_Region__1nSetPath)(_, a, e)),
                        (t.org_jetbrains_skia_Region__1nIntersectsIRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nIntersectsIRect =
                            Ga.org_jetbrains_skia_Region__1nIntersectsIRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Region__1nIntersectsRegion = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nIntersectsRegion =
                            Ga.org_jetbrains_skia_Region__1nIntersectsRegion)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Region__1nContainsIPoint = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nContainsIPoint =
                            Ga.org_jetbrains_skia_Region__1nContainsIPoint)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Region__1nContainsIRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nContainsIRect =
                            Ga.org_jetbrains_skia_Region__1nContainsIRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Region__1nContainsRegion = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nContainsRegion =
                            Ga.org_jetbrains_skia_Region__1nContainsRegion)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Region__1nQuickContains = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nQuickContains =
                            Ga.org_jetbrains_skia_Region__1nQuickContains)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Region__1nQuickRejectIRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nQuickRejectIRect =
                            Ga.org_jetbrains_skia_Region__1nQuickRejectIRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Region__1nQuickRejectRegion = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nQuickRejectRegion =
                            Ga.org_jetbrains_skia_Region__1nQuickRejectRegion)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Region__1nTranslate = (_, a, e) =>
                          (t.org_jetbrains_skia_Region__1nTranslate =
                            Ga.org_jetbrains_skia_Region__1nTranslate)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Region__1nOpIRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nOpIRect =
                            Ga.org_jetbrains_skia_Region__1nOpIRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Region__1nOpRegion = (_, a, e) =>
                          (t.org_jetbrains_skia_Region__1nOpRegion =
                            Ga.org_jetbrains_skia_Region__1nOpRegion)(_, a, e)),
                        (t.org_jetbrains_skia_Region__1nOpIRectRegion = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nOpIRectRegion =
                            Ga.org_jetbrains_skia_Region__1nOpIRectRegion)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Region__1nOpRegionIRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nOpRegionIRect =
                            Ga.org_jetbrains_skia_Region__1nOpRegionIRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Region__1nOpRegionRegion = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Region__1nOpRegionRegion =
                            Ga.org_jetbrains_skia_Region__1nOpRegionRegion)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect =
                          (_) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect)(
                              _,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2 =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3 =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4 =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2 =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3 =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4 =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22 =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33 =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44 =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44 =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader =
                          (_, a) =>
                            (t.org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader =
                              Ga.org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_U16String__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_U16String__1nGetFinalizer =
                            Ga.org_jetbrains_skia_U16String__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_TextLine__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_TextLine__1nGetFinalizer =
                            Ga.org_jetbrains_skia_TextLine__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_TextLine__1nGetAscent = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetAscent =
                            Ga.org_jetbrains_skia_TextLine__1nGetAscent)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetCapHeight = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetCapHeight =
                            Ga.org_jetbrains_skia_TextLine__1nGetCapHeight)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetXHeight = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetXHeight =
                            Ga.org_jetbrains_skia_TextLine__1nGetXHeight)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetDescent = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetDescent =
                            Ga.org_jetbrains_skia_TextLine__1nGetDescent)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetLeading = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetLeading =
                            Ga.org_jetbrains_skia_TextLine__1nGetLeading)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetWidth = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetWidth =
                            Ga.org_jetbrains_skia_TextLine__1nGetWidth)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetHeight = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetHeight =
                            Ga.org_jetbrains_skia_TextLine__1nGetHeight)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetTextBlob = (_) =>
                          (t.org_jetbrains_skia_TextLine__1nGetTextBlob =
                            Ga.org_jetbrains_skia_TextLine__1nGetTextBlob)(_)),
                        (t.org_jetbrains_skia_TextLine__1nGetGlyphsLength = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetGlyphsLength =
                            Ga.org_jetbrains_skia_TextLine__1nGetGlyphsLength)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextLine__1nGetGlyphs = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetGlyphs =
                            Ga.org_jetbrains_skia_TextLine__1nGetGlyphs)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_TextLine__1nGetPositions = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetPositions =
                            Ga.org_jetbrains_skia_TextLine__1nGetPositions)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextLine__1nGetRunPositionsCount =
                          (_) =>
                            (t.org_jetbrains_skia_TextLine__1nGetRunPositionsCount =
                              Ga.org_jetbrains_skia_TextLine__1nGetRunPositionsCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_TextLine__1nGetRunPositions = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetRunPositions =
                            Ga.org_jetbrains_skia_TextLine__1nGetRunPositions)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextLine__1nGetBreakPositionsCount =
                          (_) =>
                            (t.org_jetbrains_skia_TextLine__1nGetBreakPositionsCount =
                              Ga.org_jetbrains_skia_TextLine__1nGetBreakPositionsCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_TextLine__1nGetBreakPositions = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetBreakPositions =
                            Ga.org_jetbrains_skia_TextLine__1nGetBreakPositions)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount =
                          (_) =>
                            (t.org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount =
                              Ga.org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_TextLine__1nGetBreakOffsets = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetBreakOffsets =
                            Ga.org_jetbrains_skia_TextLine__1nGetBreakOffsets)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextLine__1nGetOffsetAtCoord = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetOffsetAtCoord =
                            Ga.org_jetbrains_skia_TextLine__1nGetOffsetAtCoord)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord =
                          (_, a) =>
                            (t.org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord =
                              Ga.org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_TextLine__1nGetCoordAtOffset = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextLine__1nGetCoordAtOffset =
                            Ga.org_jetbrains_skia_TextLine__1nGetCoordAtOffset)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PixelRef__1nGetWidth = (_) =>
                          (t.org_jetbrains_skia_PixelRef__1nGetWidth =
                            Ga.org_jetbrains_skia_PixelRef__1nGetWidth)(_)),
                        (t.org_jetbrains_skia_PixelRef__1nGetHeight = (_) =>
                          (t.org_jetbrains_skia_PixelRef__1nGetHeight =
                            Ga.org_jetbrains_skia_PixelRef__1nGetHeight)(_)),
                        (t.org_jetbrains_skia_PixelRef__1nGetRowBytes = (_) =>
                          (t.org_jetbrains_skia_PixelRef__1nGetRowBytes =
                            Ga.org_jetbrains_skia_PixelRef__1nGetRowBytes)(_)),
                        (t.org_jetbrains_skia_PixelRef__1nGetGenerationId = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_PixelRef__1nGetGenerationId =
                            Ga.org_jetbrains_skia_PixelRef__1nGetGenerationId)(
                            _,
                          )),
                        (t.org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged =
                          (_) =>
                            (t.org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged =
                              Ga.org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged)(
                              _,
                            )),
                        (t.org_jetbrains_skia_PixelRef__1nIsImmutable = (_) =>
                          (t.org_jetbrains_skia_PixelRef__1nIsImmutable =
                            Ga.org_jetbrains_skia_PixelRef__1nIsImmutable)(_)),
                        (t.org_jetbrains_skia_PixelRef__1nSetImmutable = (_) =>
                          (t.org_jetbrains_skia_PixelRef__1nSetImmutable =
                            Ga.org_jetbrains_skia_PixelRef__1nSetImmutable)(_)),
                        (t.org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer =
                              Ga.org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer)()),
                        (t.org_jetbrains_skia_sksg_InvalidationController_nMake =
                          () =>
                            (t.org_jetbrains_skia_sksg_InvalidationController_nMake =
                              Ga.org_jetbrains_skia_sksg_InvalidationController_nMake)()),
                        (t.org_jetbrains_skia_sksg_InvalidationController_nInvalidate =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_sksg_InvalidationController_nInvalidate =
                              Ga.org_jetbrains_skia_sksg_InvalidationController_nInvalidate)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_sksg_InvalidationController_nGetBounds =
                          (_, a) =>
                            (t.org_jetbrains_skia_sksg_InvalidationController_nGetBounds =
                              Ga.org_jetbrains_skia_sksg_InvalidationController_nGetBounds)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_sksg_InvalidationController_nReset =
                          (_) =>
                            (t.org_jetbrains_skia_sksg_InvalidationController_nReset =
                              Ga.org_jetbrains_skia_sksg_InvalidationController_nReset)(
                              _,
                            )),
                        (t.org_jetbrains_skia_RuntimeEffect__1nMakeShader = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_RuntimeEffect__1nMakeShader =
                            Ga.org_jetbrains_skia_RuntimeEffect__1nMakeShader)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_RuntimeEffect__1nMakeForShader = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_RuntimeEffect__1nMakeForShader =
                            Ga.org_jetbrains_skia_RuntimeEffect__1nMakeForShader)(
                            _,
                          )),
                        (t.org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter =
                          (_) =>
                            (t.org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter =
                              Ga.org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter)(
                              _,
                            )),
                        (t.org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr =
                            Ga.org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr)(
                            _,
                          )),
                        (t.org_jetbrains_skia_RuntimeEffect__1Result_nGetError =
                          (_) =>
                            (t.org_jetbrains_skia_RuntimeEffect__1Result_nGetError =
                              Ga.org_jetbrains_skia_RuntimeEffect__1Result_nGetError)(
                              _,
                            )),
                        (t.org_jetbrains_skia_RuntimeEffect__1Result_nDestroy =
                          (_) =>
                            (t.org_jetbrains_skia_RuntimeEffect__1Result_nDestroy =
                              Ga.org_jetbrains_skia_RuntimeEffect__1Result_nDestroy)(
                              _,
                            )),
                        (t.org_jetbrains_skia_MaskFilter__1nMakeBlur = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_MaskFilter__1nMakeBlur =
                            Ga.org_jetbrains_skia_MaskFilter__1nMakeBlur)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_MaskFilter__1nMakeShader = (_) =>
                          (t.org_jetbrains_skia_MaskFilter__1nMakeShader =
                            Ga.org_jetbrains_skia_MaskFilter__1nMakeShader)(_)),
                        (t.org_jetbrains_skia_MaskFilter__1nMakeTable = (_) =>
                          (t.org_jetbrains_skia_MaskFilter__1nMakeTable =
                            Ga.org_jetbrains_skia_MaskFilter__1nMakeTable)(_)),
                        (t.org_jetbrains_skia_MaskFilter__1nMakeGamma = (_) =>
                          (t.org_jetbrains_skia_MaskFilter__1nMakeGamma =
                            Ga.org_jetbrains_skia_MaskFilter__1nMakeGamma)(_)),
                        (t.org_jetbrains_skia_MaskFilter__1nMakeClip = (_, a) =>
                          (t.org_jetbrains_skia_MaskFilter__1nMakeClip =
                            Ga.org_jetbrains_skia_MaskFilter__1nMakeClip)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PathUtils__1nFillPathWithPaint = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathUtils__1nFillPathWithPaint =
                            Ga.org_jetbrains_skia_PathUtils__1nFillPathWithPaint)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathUtils__1nFillPathWithPaintCull =
                          (_, a, e, r, i, n, s) =>
                            (t.org_jetbrains_skia_PathUtils__1nFillPathWithPaintCull =
                              Ga.org_jetbrains_skia_PathUtils__1nFillPathWithPaintCull)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetHeight =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetHeight =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetHeight)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nLayout = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_paragraph_Paragraph__1nLayout =
                            Ga.org_jetbrains_skia_paragraph_Paragraph__1nLayout)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nPaint = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_paragraph_Paragraph__1nPaint =
                            Ga.org_jetbrains_skia_paragraph_Paragraph__1nPaint)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint =
                              Ga.org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nMake =
                          () =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nMake =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nMake)()),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache =
                              Ga.org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize =
                              Ga.org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray =
                              Ga.org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement =
                              Ga.org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon =
                              Ga.org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphCache__1nReset =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphCache__1nReset =
                              Ga.org_jetbrains_skia_paragraph_ParagraphCache__1nReset)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph =
                              Ga.org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph =
                              Ga.org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics =
                              Ga.org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled =
                              Ga.org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount =
                              Ga.org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nMake =
                          () =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nMake =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nMake)()),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nEquals = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_paragraph_TextStyle__1nEquals =
                            Ga.org_jetbrains_skia_paragraph_TextStyle__1nEquals)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetColor =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetColor =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetColor)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetColor =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetColor =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetColor)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetForeground =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetForeground =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetForeground)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetForeground =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetForeground =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetForeground)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetBackground =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetBackground =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetBackground)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetBackground =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetBackground =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetBackground)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle =
                          (_, a, e, r, i, n, s, o) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetShadows =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetShadows =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetShadows)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nAddShadow =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nAddShadow =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nAddShadow)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nClearShadows =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nClearShadows =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nClearShadows)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetHeight =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetHeight =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetHeight)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetHeight =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetHeight =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetHeight)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetLocale =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetLocale =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetLocale)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetLocale =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetLocale =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetLocale)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder =
                              Ga.org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextBox__1nGetArraySize =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextBox__1nGetArraySize =
                              Ga.org_jetbrains_skia_paragraph_TextBox__1nGetArraySize)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextBox__1nDisposeArray =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_TextBox__1nDisposeArray =
                              Ga.org_jetbrains_skia_paragraph_TextBox__1nDisposeArray)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement =
                              Ga.org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake =
                              Ga.org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer =
                              Ga.org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle =
                              Ga.org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle =
                              Ga.org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText =
                              Ga.org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder =
                              Ga.org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild =
                              Ga.org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake =
                          () =>
                            (t.org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake =
                              Ga.org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake)()),
                        (t.org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface =
                              Ga.org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nMake =
                          () =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nMake =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nMake)()),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nEquals = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_paragraph_StrutStyle__1nEquals =
                            Ga.org_jetbrains_skia_paragraph_StrutStyle__1nEquals)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading =
                              Ga.org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nMake =
                          () =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nMake =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nMake)()),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel =
                          (_) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel)(
                              _,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent =
                          (_, a) =>
                            (t.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent =
                              Ga.org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_Typeface__1nGetFontStyle = (_) =>
                          (t.org_jetbrains_skia_Typeface__1nGetFontStyle =
                            Ga.org_jetbrains_skia_Typeface__1nGetFontStyle)(_)),
                        (t.org_jetbrains_skia_Typeface__1nIsFixedPitch = (_) =>
                          (t.org_jetbrains_skia_Typeface__1nIsFixedPitch =
                            Ga.org_jetbrains_skia_Typeface__1nIsFixedPitch)(_)),
                        (t.org_jetbrains_skia_Typeface__1nGetVariationsCount = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetVariationsCount =
                            Ga.org_jetbrains_skia_Typeface__1nGetVariationsCount)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetVariations = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetVariations =
                            Ga.org_jetbrains_skia_Typeface__1nGetVariations)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetVariationAxesCount =
                          (_) =>
                            (t.org_jetbrains_skia_Typeface__1nGetVariationAxesCount =
                              Ga.org_jetbrains_skia_Typeface__1nGetVariationAxesCount)(
                              _,
                            )),
                        (t.org_jetbrains_skia_Typeface__1nGetVariationAxes = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetVariationAxes =
                            Ga.org_jetbrains_skia_Typeface__1nGetVariationAxes)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetUniqueId = (_) =>
                          (t.org_jetbrains_skia_Typeface__1nGetUniqueId =
                            Ga.org_jetbrains_skia_Typeface__1nGetUniqueId)(_)),
                        (t.org_jetbrains_skia_Typeface__1nEquals = (_, a) =>
                          (t.org_jetbrains_skia_Typeface__1nEquals =
                            Ga.org_jetbrains_skia_Typeface__1nEquals)(_, a)),
                        (t.org_jetbrains_skia_Typeface__1nMakeDefault = () =>
                          (t.org_jetbrains_skia_Typeface__1nMakeDefault =
                            Ga.org_jetbrains_skia_Typeface__1nMakeDefault)()),
                        (t.org_jetbrains_skia_Typeface__1nMakeFromName = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nMakeFromName =
                            Ga.org_jetbrains_skia_Typeface__1nMakeFromName)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nMakeFromFile = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nMakeFromFile =
                            Ga.org_jetbrains_skia_Typeface__1nMakeFromFile)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nMakeFromData = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nMakeFromData =
                            Ga.org_jetbrains_skia_Typeface__1nMakeFromData)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nMakeClone = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nMakeClone =
                            Ga.org_jetbrains_skia_Typeface__1nMakeClone)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetUTF32Glyphs = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetUTF32Glyphs =
                            Ga.org_jetbrains_skia_Typeface__1nGetUTF32Glyphs)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetUTF32Glyph = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetUTF32Glyph =
                            Ga.org_jetbrains_skia_Typeface__1nGetUTF32Glyph)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetGlyphsCount = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetGlyphsCount =
                            Ga.org_jetbrains_skia_Typeface__1nGetGlyphsCount)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetTablesCount = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetTablesCount =
                            Ga.org_jetbrains_skia_Typeface__1nGetTablesCount)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetTableTagsCount = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetTableTagsCount =
                            Ga.org_jetbrains_skia_Typeface__1nGetTableTagsCount)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetTableTags = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetTableTags =
                            Ga.org_jetbrains_skia_Typeface__1nGetTableTags)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetTableSize = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetTableSize =
                            Ga.org_jetbrains_skia_Typeface__1nGetTableSize)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetTableData = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetTableData =
                            Ga.org_jetbrains_skia_Typeface__1nGetTableData)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetUnitsPerEm = (_) =>
                          (t.org_jetbrains_skia_Typeface__1nGetUnitsPerEm =
                            Ga.org_jetbrains_skia_Typeface__1nGetUnitsPerEm)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments =
                              Ga.org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_Typeface__1nGetFamilyNames = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Typeface__1nGetFamilyNames =
                            Ga.org_jetbrains_skia_Typeface__1nGetFamilyNames)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetFamilyName = (_) =>
                          (t.org_jetbrains_skia_Typeface__1nGetFamilyName =
                            Ga.org_jetbrains_skia_Typeface__1nGetFamilyName)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Typeface__1nGetBounds = (_, a) =>
                          (t.org_jetbrains_skia_Typeface__1nGetBounds =
                            Ga.org_jetbrains_skia_Typeface__1nGetBounds)(_, a)),
                        (t.org_jetbrains_skia_ManagedString__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_ManagedString__1nGetFinalizer =
                              Ga.org_jetbrains_skia_ManagedString__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_ManagedString__1nMake = (_) =>
                          (t.org_jetbrains_skia_ManagedString__1nMake =
                            Ga.org_jetbrains_skia_ManagedString__1nMake)(_)),
                        (t.org_jetbrains_skia_ManagedString__nStringSize = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_ManagedString__nStringSize =
                            Ga.org_jetbrains_skia_ManagedString__nStringSize)(
                            _,
                          )),
                        (t.org_jetbrains_skia_ManagedString__nStringData = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_ManagedString__nStringData =
                            Ga.org_jetbrains_skia_ManagedString__nStringData)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_ManagedString__1nInsert = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_ManagedString__1nInsert =
                            Ga.org_jetbrains_skia_ManagedString__1nInsert)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_ManagedString__1nAppend = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_ManagedString__1nAppend =
                            Ga.org_jetbrains_skia_ManagedString__1nAppend)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_ManagedString__1nRemoveSuffix = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_ManagedString__1nRemoveSuffix =
                            Ga.org_jetbrains_skia_ManagedString__1nRemoveSuffix)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_ManagedString__1nRemove = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_ManagedString__1nRemove =
                            Ga.org_jetbrains_skia_ManagedString__1nRemove)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetTag = (_) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nGetTag =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nGetTag)(_)),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetX = (_, a) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nGetX =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nGetX)(_, a)),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetY = (_, a) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nGetY =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nGetY)(_, a)),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetHeight = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nGetHeight =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nGetHeight)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetWidth = (_, a) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nGetWidth =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nGetWidth)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio =
                          (_, a) =>
                            (t.org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio =
                              Ga.org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetViewBox = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nGetViewBox =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nGetViewBox)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nSetX = (_, a, e) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nSetX =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nSetX)(_, a, e)),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nSetY = (_, a, e) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nSetY =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nSetY)(_, a, e)),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nSetWidth = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nSetWidth =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nSetWidth)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nSetHeight = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nSetHeight =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nSetHeight)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio =
                              Ga.org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_svg_SVGSVG__1nSetViewBox = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGSVG__1nSetViewBox =
                            Ga.org_jetbrains_skia_svg_SVGSVG__1nSetViewBox)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_svg_SVGCanvas__1nMake = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGCanvas__1nMake =
                            Ga.org_jetbrains_skia_svg_SVGCanvas__1nMake)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_svg_SVGNode__1nGetTag = (_) =>
                          (t.org_jetbrains_skia_svg_SVGNode__1nGetTag =
                            Ga.org_jetbrains_skia_svg_SVGNode__1nGetTag)(_)),
                        (t.org_jetbrains_skia_svg_SVGDOM__1nMakeFromData = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGDOM__1nMakeFromData =
                            Ga.org_jetbrains_skia_svg_SVGDOM__1nMakeFromData)(
                            _,
                          )),
                        (t.org_jetbrains_skia_svg_SVGDOM__1nGetRoot = (_) =>
                          (t.org_jetbrains_skia_svg_SVGDOM__1nGetRoot =
                            Ga.org_jetbrains_skia_svg_SVGDOM__1nGetRoot)(_)),
                        (t.org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize =
                            Ga.org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize =
                            Ga.org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_svg_SVGDOM__1nRender = (_, a) =>
                          (t.org_jetbrains_skia_svg_SVGDOM__1nRender =
                            Ga.org_jetbrains_skia_svg_SVGDOM__1nRender)(_, a)),
                        (t.org_jetbrains_skia_TextBlob__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_TextBlob__1nGetFinalizer =
                            Ga.org_jetbrains_skia_TextBlob__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_TextBlob__1nBounds = (_, a) =>
                          (t.org_jetbrains_skia_TextBlob__1nBounds =
                            Ga.org_jetbrains_skia_TextBlob__1nBounds)(_, a)),
                        (t.org_jetbrains_skia_TextBlob__1nGetUniqueId = (_) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetUniqueId =
                            Ga.org_jetbrains_skia_TextBlob__1nGetUniqueId)(_)),
                        (t.org_jetbrains_skia_TextBlob__1nGetInterceptsLength =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_TextBlob__1nGetInterceptsLength =
                              Ga.org_jetbrains_skia_TextBlob__1nGetInterceptsLength)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_TextBlob__1nGetIntercepts = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetIntercepts =
                            Ga.org_jetbrains_skia_TextBlob__1nGetIntercepts)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nMakeFromPosH = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nMakeFromPosH =
                            Ga.org_jetbrains_skia_TextBlob__1nMakeFromPosH)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nMakeFromPos = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nMakeFromPos =
                            Ga.org_jetbrains_skia_TextBlob__1nMakeFromPos)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nMakeFromRSXform = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nMakeFromRSXform =
                            Ga.org_jetbrains_skia_TextBlob__1nMakeFromRSXform)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nSerializeToData = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nSerializeToData =
                            Ga.org_jetbrains_skia_TextBlob__1nSerializeToData)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nMakeFromData = (_) =>
                          (t.org_jetbrains_skia_TextBlob__1nMakeFromData =
                            Ga.org_jetbrains_skia_TextBlob__1nMakeFromData)(_)),
                        (t.org_jetbrains_skia_TextBlob__1nGetGlyphsLength = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetGlyphsLength =
                            Ga.org_jetbrains_skia_TextBlob__1nGetGlyphsLength)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetGlyphs = (_, a) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetGlyphs =
                            Ga.org_jetbrains_skia_TextBlob__1nGetGlyphs)(_, a)),
                        (t.org_jetbrains_skia_TextBlob__1nGetPositionsLength = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetPositionsLength =
                            Ga.org_jetbrains_skia_TextBlob__1nGetPositionsLength)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetPositions = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetPositions =
                            Ga.org_jetbrains_skia_TextBlob__1nGetPositions)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetClustersLength = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetClustersLength =
                            Ga.org_jetbrains_skia_TextBlob__1nGetClustersLength)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetClusters = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetClusters =
                            Ga.org_jetbrains_skia_TextBlob__1nGetClusters)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetTightBounds = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetTightBounds =
                            Ga.org_jetbrains_skia_TextBlob__1nGetTightBounds)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetBlockBounds = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetBlockBounds =
                            Ga.org_jetbrains_skia_TextBlob__1nGetBlockBounds)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetFirstBaseline = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetFirstBaseline =
                            Ga.org_jetbrains_skia_TextBlob__1nGetFirstBaseline)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextBlob__1nGetLastBaseline = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob__1nGetLastBaseline =
                            Ga.org_jetbrains_skia_TextBlob__1nGetLastBaseline)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_TextBlob_Iter__1nCreate = (_) =>
                          (t.org_jetbrains_skia_TextBlob_Iter__1nCreate =
                            Ga.org_jetbrains_skia_TextBlob_Iter__1nCreate)(_)),
                        (t.org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer =
                              Ga.org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_TextBlob_Iter__1nFetch = (_) =>
                          (t.org_jetbrains_skia_TextBlob_Iter__1nFetch =
                            Ga.org_jetbrains_skia_TextBlob_Iter__1nFetch)(_)),
                        (t.org_jetbrains_skia_TextBlob_Iter__1nHasNext = (_) =>
                          (t.org_jetbrains_skia_TextBlob_Iter__1nHasNext =
                            Ga.org_jetbrains_skia_TextBlob_Iter__1nHasNext)(_)),
                        (t.org_jetbrains_skia_TextBlob_Iter__1nGetTypeface = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob_Iter__1nGetTypeface =
                            Ga.org_jetbrains_skia_TextBlob_Iter__1nGetTypeface)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount =
                            Ga.org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount)(
                            _,
                          )),
                        (t.org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs =
                            Ga.org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_PathMeasure__1nGetFinalizer =
                              Ga.org_jetbrains_skia_PathMeasure__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_PathMeasure__1nMake = () =>
                          (t.org_jetbrains_skia_PathMeasure__1nMake =
                            Ga.org_jetbrains_skia_PathMeasure__1nMake)()),
                        (t.org_jetbrains_skia_PathMeasure__1nMakePath = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nMakePath =
                            Ga.org_jetbrains_skia_PathMeasure__1nMakePath)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nSetPath = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nSetPath =
                            Ga.org_jetbrains_skia_PathMeasure__1nSetPath)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nGetLength = (_) =>
                          (t.org_jetbrains_skia_PathMeasure__1nGetLength =
                            Ga.org_jetbrains_skia_PathMeasure__1nGetLength)(_)),
                        (t.org_jetbrains_skia_PathMeasure__1nGetPosition = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nGetPosition =
                            Ga.org_jetbrains_skia_PathMeasure__1nGetPosition)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nGetTangent = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nGetTangent =
                            Ga.org_jetbrains_skia_PathMeasure__1nGetTangent)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nGetRSXform = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nGetRSXform =
                            Ga.org_jetbrains_skia_PathMeasure__1nGetRSXform)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nGetMatrix = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nGetMatrix =
                            Ga.org_jetbrains_skia_PathMeasure__1nGetMatrix)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nGetSegment = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nGetSegment =
                            Ga.org_jetbrains_skia_PathMeasure__1nGetSegment)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_PathMeasure__1nIsClosed = (_) =>
                          (t.org_jetbrains_skia_PathMeasure__1nIsClosed =
                            Ga.org_jetbrains_skia_PathMeasure__1nIsClosed)(_)),
                        (t.org_jetbrains_skia_PathMeasure__1nNextContour = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_PathMeasure__1nNextContour =
                            Ga.org_jetbrains_skia_PathMeasure__1nNextContour)(
                            _,
                          )),
                        (t.org_jetbrains_skia_OutputWStream__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_OutputWStream__1nGetFinalizer =
                              Ga.org_jetbrains_skia_OutputWStream__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_OutputWStream__1nMake = (_) =>
                          (t.org_jetbrains_skia_OutputWStream__1nMake =
                            Ga.org_jetbrains_skia_OutputWStream__1nMake)(_)),
                        (t.org_jetbrains_skia_PictureRecorder__1nMake = () =>
                          (t.org_jetbrains_skia_PictureRecorder__1nMake =
                            Ga.org_jetbrains_skia_PictureRecorder__1nMake)()),
                        (t.org_jetbrains_skia_PictureRecorder__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_PictureRecorder__1nGetFinalizer =
                              Ga.org_jetbrains_skia_PictureRecorder__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_PictureRecorder__1nBeginRecording =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_PictureRecorder__1nBeginRecording =
                              Ga.org_jetbrains_skia_PictureRecorder__1nBeginRecording)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas =
                          (_) =>
                            (t.org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas =
                              Ga.org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas)(
                              _,
                            )),
                        (t.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture =
                          (_) =>
                            (t.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture =
                              Ga.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture)(
                              _,
                            )),
                        (t.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull =
                          (_, a, e, r, i) =>
                            (t.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull =
                              Ga.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull)(
                              _,
                              a,
                              e,
                              r,
                              i,
                            )),
                        (t.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable =
                          (_) =>
                            (t.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable =
                              Ga.org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable)(
                              _,
                            )),
                        (t.org_jetbrains_skia_impl_Managed__invokeFinalizer = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_impl_Managed__invokeFinalizer =
                            Ga.org_jetbrains_skia_impl_Managed__invokeFinalizer)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Image__1nMakeRaster = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nMakeRaster =
                            Ga.org_jetbrains_skia_Image__1nMakeRaster)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Image__1nMakeRasterData = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nMakeRasterData =
                            Ga.org_jetbrains_skia_Image__1nMakeRasterData)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Image__1nMakeFromBitmap = (_) =>
                          (t.org_jetbrains_skia_Image__1nMakeFromBitmap =
                            Ga.org_jetbrains_skia_Image__1nMakeFromBitmap)(_)),
                        (t.org_jetbrains_skia_Image__1nMakeFromPixmap = (_) =>
                          (t.org_jetbrains_skia_Image__1nMakeFromPixmap =
                            Ga.org_jetbrains_skia_Image__1nMakeFromPixmap)(_)),
                        (t.org_jetbrains_skia_Image__1nMakeFromEncoded = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nMakeFromEncoded =
                            Ga.org_jetbrains_skia_Image__1nMakeFromEncoded)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Image__1nGetImageInfo = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nGetImageInfo =
                            Ga.org_jetbrains_skia_Image__1nGetImageInfo)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Image__1nEncodeToData = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nEncodeToData =
                            Ga.org_jetbrains_skia_Image__1nEncodeToData)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Image__1nMakeShader = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nMakeShader =
                            Ga.org_jetbrains_skia_Image__1nMakeShader)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Image__1nPeekPixels = (_) =>
                          (t.org_jetbrains_skia_Image__1nPeekPixels =
                            Ga.org_jetbrains_skia_Image__1nPeekPixels)(_)),
                        (t.org_jetbrains_skia_Image__1nPeekPixelsToPixmap = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nPeekPixelsToPixmap =
                            Ga.org_jetbrains_skia_Image__1nPeekPixelsToPixmap)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Image__1nReadPixelsBitmap = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nReadPixelsBitmap =
                            Ga.org_jetbrains_skia_Image__1nReadPixelsBitmap)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Image__1nReadPixelsPixmap = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nReadPixelsPixmap =
                            Ga.org_jetbrains_skia_Image__1nReadPixelsPixmap)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Image__1nScalePixels = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Image__1nScalePixels =
                            Ga.org_jetbrains_skia_Image__1nScalePixels)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Canvas__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Canvas__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Canvas__1nMakeFromBitmap = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nMakeFromBitmap =
                            Ga.org_jetbrains_skia_Canvas__1nMakeFromBitmap)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawPoint = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawPoint =
                            Ga.org_jetbrains_skia_Canvas__1nDrawPoint)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawPoints = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawPoints =
                            Ga.org_jetbrains_skia_Canvas__1nDrawPoints)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawLine = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawLine =
                            Ga.org_jetbrains_skia_Canvas__1nDrawLine)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawArc = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawArc =
                            Ga.org_jetbrains_skia_Canvas__1nDrawArc)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawRect =
                            Ga.org_jetbrains_skia_Canvas__1nDrawRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawOval = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawOval =
                            Ga.org_jetbrains_skia_Canvas__1nDrawOval)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawRRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawRRect =
                            Ga.org_jetbrains_skia_Canvas__1nDrawRRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawDRRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                          b,
                          j,
                          p,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawDRRect =
                            Ga.org_jetbrains_skia_Canvas__1nDrawDRRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                            b,
                            j,
                            p,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawPath = (_, a, e) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawPath =
                            Ga.org_jetbrains_skia_Canvas__1nDrawPath)(_, a, e)),
                        (t.org_jetbrains_skia_Canvas__1nDrawImageRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                          b,
                          j,
                          p,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawImageRect =
                            Ga.org_jetbrains_skia_Canvas__1nDrawImageRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                            b,
                            j,
                            p,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawImageNine = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                          b,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawImageNine =
                            Ga.org_jetbrains_skia_Canvas__1nDrawImageNine)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                            b,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawRegion = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawRegion =
                            Ga.org_jetbrains_skia_Canvas__1nDrawRegion)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawString = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawString =
                            Ga.org_jetbrains_skia_Canvas__1nDrawString)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawTextBlob = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawTextBlob =
                            Ga.org_jetbrains_skia_Canvas__1nDrawTextBlob)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawPicture = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawPicture =
                            Ga.org_jetbrains_skia_Canvas__1nDrawPicture)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawVertices = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawVertices =
                            Ga.org_jetbrains_skia_Canvas__1nDrawVertices)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawPatch = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawPatch =
                            Ga.org_jetbrains_skia_Canvas__1nDrawPatch)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nDrawDrawable = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawDrawable =
                            Ga.org_jetbrains_skia_Canvas__1nDrawDrawable)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nClear = (_, a) =>
                          (t.org_jetbrains_skia_Canvas__1nClear =
                            Ga.org_jetbrains_skia_Canvas__1nClear)(_, a)),
                        (t.org_jetbrains_skia_Canvas__1nDrawPaint = (_, a) =>
                          (t.org_jetbrains_skia_Canvas__1nDrawPaint =
                            Ga.org_jetbrains_skia_Canvas__1nDrawPaint)(_, a)),
                        (t.org_jetbrains_skia_Canvas__1nSetMatrix = (_, a) =>
                          (t.org_jetbrains_skia_Canvas__1nSetMatrix =
                            Ga.org_jetbrains_skia_Canvas__1nSetMatrix)(_, a)),
                        (t.org_jetbrains_skia_Canvas__1nResetMatrix = (_) =>
                          (t.org_jetbrains_skia_Canvas__1nResetMatrix =
                            Ga.org_jetbrains_skia_Canvas__1nResetMatrix)(_)),
                        (t.org_jetbrains_skia_Canvas__1nGetLocalToDevice = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nGetLocalToDevice =
                            Ga.org_jetbrains_skia_Canvas__1nGetLocalToDevice)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nClipRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nClipRect =
                            Ga.org_jetbrains_skia_Canvas__1nClipRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nClipRRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nClipRRect =
                            Ga.org_jetbrains_skia_Canvas__1nClipRRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nClipPath = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nClipPath =
                            Ga.org_jetbrains_skia_Canvas__1nClipPath)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nClipRegion = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nClipRegion =
                            Ga.org_jetbrains_skia_Canvas__1nClipRegion)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nConcat = (_, a) =>
                          (t.org_jetbrains_skia_Canvas__1nConcat =
                            Ga.org_jetbrains_skia_Canvas__1nConcat)(_, a)),
                        (t.org_jetbrains_skia_Canvas__1nConcat44 = (_, a) =>
                          (t.org_jetbrains_skia_Canvas__1nConcat44 =
                            Ga.org_jetbrains_skia_Canvas__1nConcat44)(_, a)),
                        (t.org_jetbrains_skia_Canvas__1nTranslate = (_, a, e) =>
                          (t.org_jetbrains_skia_Canvas__1nTranslate =
                            Ga.org_jetbrains_skia_Canvas__1nTranslate)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nScale = (_, a, e) =>
                          (t.org_jetbrains_skia_Canvas__1nScale =
                            Ga.org_jetbrains_skia_Canvas__1nScale)(_, a, e)),
                        (t.org_jetbrains_skia_Canvas__1nRotate = (_, a, e, r) =>
                          (t.org_jetbrains_skia_Canvas__1nRotate =
                            Ga.org_jetbrains_skia_Canvas__1nRotate)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nSkew = (_, a, e) =>
                          (t.org_jetbrains_skia_Canvas__1nSkew =
                            Ga.org_jetbrains_skia_Canvas__1nSkew)(_, a, e)),
                        (t.org_jetbrains_skia_Canvas__1nReadPixels = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nReadPixels =
                            Ga.org_jetbrains_skia_Canvas__1nReadPixels)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nWritePixels = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nWritePixels =
                            Ga.org_jetbrains_skia_Canvas__1nWritePixels)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nSave = (_) =>
                          (t.org_jetbrains_skia_Canvas__1nSave =
                            Ga.org_jetbrains_skia_Canvas__1nSave)(_)),
                        (t.org_jetbrains_skia_Canvas__1nSaveLayer = (_, a) =>
                          (t.org_jetbrains_skia_Canvas__1nSaveLayer =
                            Ga.org_jetbrains_skia_Canvas__1nSaveLayer)(_, a)),
                        (t.org_jetbrains_skia_Canvas__1nSaveLayerRect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nSaveLayerRect =
                            Ga.org_jetbrains_skia_Canvas__1nSaveLayerRect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Canvas__1nGetSaveCount = (_) =>
                          (t.org_jetbrains_skia_Canvas__1nGetSaveCount =
                            Ga.org_jetbrains_skia_Canvas__1nGetSaveCount)(_)),
                        (t.org_jetbrains_skia_Canvas__1nRestore = (_) =>
                          (t.org_jetbrains_skia_Canvas__1nRestore =
                            Ga.org_jetbrains_skia_Canvas__1nRestore)(_)),
                        (t.org_jetbrains_skia_Canvas__1nRestoreToCount = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Canvas__1nRestoreToCount =
                            Ga.org_jetbrains_skia_Canvas__1nRestoreToCount)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer =
                              Ga.org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_BackendRenderTarget__1nMakeGL = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_BackendRenderTarget__1nMakeGL =
                            Ga.org_jetbrains_skia_BackendRenderTarget__1nMakeGL)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t._BackendRenderTarget_nMakeMetal = (_, a, e) =>
                          (t._BackendRenderTarget_nMakeMetal =
                            Ga.BackendRenderTarget_nMakeMetal)(_, a, e)),
                        (t._BackendRenderTarget_MakeDirect3D = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t._BackendRenderTarget_MakeDirect3D =
                            Ga.BackendRenderTarget_MakeDirect3D)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeArithmetic = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeArithmetic =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeArithmetic)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeBlend = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeBlend =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeBlend)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeBlur = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeBlur =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeBlur)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeColorFilter = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeColorFilter =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeColorFilter)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeCompose = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeCompose =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeCompose)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeDropShadow = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeDropShadow =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeDropShadow)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly =
                          (_, a, e, r, i, n, s) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeImage = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeImage =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeImage)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeMagnifier = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeMagnifier =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeMagnifier)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution =
                          (_, a, e, r, i, n, s, o, g, k, l) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                              g,
                              k,
                              l,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeMerge = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeMerge =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeMerge)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeOffset = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeOffset =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeOffset)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeShader = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeShader =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeShader)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakePicture = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakePicture =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakePicture)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeTile = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeTile =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeTile)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeDilate = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeDilate =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeDilate)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeErode = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_ImageFilter__1nMakeErode =
                            Ga.org_jetbrains_skia_ImageFilter__1nMakeErode)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse =
                          (_, a, e, r, i, n, s, o) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse =
                          (_, a, e, r, i, n, s, o) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse =
                          (_, a, e, r, i, n, s, o, g, k, l, b, j) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                              g,
                              k,
                              l,
                              b,
                              j,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular =
                          (_, a, e, r, i, n, s, o, g) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                              g,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular =
                          (_, a, e, r, i, n, s, o, g) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                              g,
                            )),
                        (t.org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular =
                          (_, a, e, r, i, n, s, o, g, k, l, b, j, p) =>
                            (t.org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular =
                              Ga.org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                              g,
                              k,
                              l,
                              b,
                              j,
                              p,
                            )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeComposed = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeComposed =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeComposed)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeBlend = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeBlend =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeBlend)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeMatrix = (_) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeMatrix =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeMatrix)(
                            _,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix)(
                            _,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma =
                          () =>
                            (t.org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma =
                              Ga.org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma)()),
                        (t.org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma =
                          () =>
                            (t.org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma =
                              Ga.org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma)()),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeLerp = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeLerp =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeLerp)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeLighting = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeLighting =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeLighting)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeHighContrast =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_ColorFilter__1nMakeHighContrast =
                              Ga.org_jetbrains_skia_ColorFilter__1nMakeHighContrast)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeTable = (_) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeTable =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeTable)(_)),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeTableARGB = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeTableARGB =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeTableARGB)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nMakeOverdraw = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_ColorFilter__1nMakeOverdraw =
                            Ga.org_jetbrains_skia_ColorFilter__1nMakeOverdraw)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_ColorFilter__1nGetLuma = () =>
                          (t.org_jetbrains_skia_ColorFilter__1nGetLuma =
                            Ga.org_jetbrains_skia_ColorFilter__1nGetLuma)()),
                        (t.org_jetbrains_skia_DirectContext__1nMakeGL = () =>
                          (t.org_jetbrains_skia_DirectContext__1nMakeGL =
                            Ga.org_jetbrains_skia_DirectContext__1nMakeGL)()),
                        (t.org_jetbrains_skia_DirectContext__1nMakeGLWithInterface =
                          (_) =>
                            (t.org_jetbrains_skia_DirectContext__1nMakeGLWithInterface =
                              Ga.org_jetbrains_skia_DirectContext__1nMakeGLWithInterface)(
                              _,
                            )),
                        (t.org_jetbrains_skia_DirectContext__1nMakeMetal = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_DirectContext__1nMakeMetal =
                            Ga.org_jetbrains_skia_DirectContext__1nMakeMetal)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_DirectContext__1nMakeDirect3D = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_DirectContext__1nMakeDirect3D =
                            Ga.org_jetbrains_skia_DirectContext__1nMakeDirect3D)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_DirectContext__1nFlush = (_) =>
                          (t.org_jetbrains_skia_DirectContext__1nFlush =
                            Ga.org_jetbrains_skia_DirectContext__1nFlush)(_)),
                        (t.org_jetbrains_skia_DirectContext__1nSubmit = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_DirectContext__1nSubmit =
                            Ga.org_jetbrains_skia_DirectContext__1nSubmit)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_DirectContext__1nReset = (_, a) =>
                          (t.org_jetbrains_skia_DirectContext__1nReset =
                            Ga.org_jetbrains_skia_DirectContext__1nReset)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_DirectContext__1nAbandon = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_DirectContext__1nAbandon =
                            Ga.org_jetbrains_skia_DirectContext__1nAbandon)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_RTreeFactory__1nMake = () =>
                          (t.org_jetbrains_skia_RTreeFactory__1nMake =
                            Ga.org_jetbrains_skia_RTreeFactory__1nMake)()),
                        (t.org_jetbrains_skia_BBHFactory__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_BBHFactory__1nGetFinalizer =
                            Ga.org_jetbrains_skia_BBHFactory__1nGetFinalizer)()),
                        (t._skia_memGetByte = (_) =>
                          (t._skia_memGetByte = Ga.skia_memGetByte)(_)),
                        (t._skia_memSetByte = (_, a) =>
                          (t._skia_memSetByte = Ga.skia_memSetByte)(_, a)),
                        (t._skia_memGetChar = (_) =>
                          (t._skia_memGetChar = Ga.skia_memGetChar)(_)),
                        (t._skia_memSetChar = (_, a) =>
                          (t._skia_memSetChar = Ga.skia_memSetChar)(_, a)),
                        (t._skia_memGetShort = (_) =>
                          (t._skia_memGetShort = Ga.skia_memGetShort)(_)),
                        (t._skia_memSetShort = (_, a) =>
                          (t._skia_memSetShort = Ga.skia_memSetShort)(_, a)),
                        (t._skia_memGetInt = (_) =>
                          (t._skia_memGetInt = Ga.skia_memGetInt)(_)),
                        (t._skia_memSetInt = (_, a) =>
                          (t._skia_memSetInt = Ga.skia_memSetInt)(_, a)),
                        (t._skia_memGetFloat = (_) =>
                          (t._skia_memGetFloat = Ga.skia_memGetFloat)(_)),
                        (t._skia_memSetFloat = (_, a) =>
                          (t._skia_memSetFloat = Ga.skia_memSetFloat)(_, a)),
                        (t._skia_memGetDouble = (_) =>
                          (t._skia_memGetDouble = Ga.skia_memGetDouble)(_)),
                        (t._skia_memSetDouble = (_, a) =>
                          (t._skia_memSetDouble = Ga.skia_memSetDouble)(_, a)),
                        (t.org_jetbrains_skia_Surface__1nMakeRasterDirect = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeRasterDirect =
                            Ga.org_jetbrains_skia_Surface__1nMakeRasterDirect)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap =
                          (_, a) =>
                            (t.org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap =
                              Ga.org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_Surface__1nMakeRaster = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeRaster =
                            Ga.org_jetbrains_skia_Surface__1nMakeRaster)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeRasterN32Premul = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeRasterN32Premul =
                            Ga.org_jetbrains_skia_Surface__1nMakeRasterN32Premul)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget =
                              Ga.org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_Surface__1nMakeFromMTKView = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeFromMTKView =
                            Ga.org_jetbrains_skia_Surface__1nMakeFromMTKView)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeRenderTarget = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeRenderTarget =
                            Ga.org_jetbrains_skia_Surface__1nMakeRenderTarget)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeNull = (_, a) =>
                          (t.org_jetbrains_skia_Surface__1nMakeNull =
                            Ga.org_jetbrains_skia_Surface__1nMakeNull)(_, a)),
                        (t.org_jetbrains_skia_Surface__1nGetCanvas = (_) =>
                          (t.org_jetbrains_skia_Surface__1nGetCanvas =
                            Ga.org_jetbrains_skia_Surface__1nGetCanvas)(_)),
                        (t.org_jetbrains_skia_Surface__1nGetWidth = (_) =>
                          (t.org_jetbrains_skia_Surface__1nGetWidth =
                            Ga.org_jetbrains_skia_Surface__1nGetWidth)(_)),
                        (t.org_jetbrains_skia_Surface__1nGetHeight = (_) =>
                          (t.org_jetbrains_skia_Surface__1nGetHeight =
                            Ga.org_jetbrains_skia_Surface__1nGetHeight)(_)),
                        (t.org_jetbrains_skia_Surface__1nMakeImageSnapshot = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeImageSnapshot =
                            Ga.org_jetbrains_skia_Surface__1nMakeImageSnapshot)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeImageSnapshotR = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeImageSnapshotR =
                            Ga.org_jetbrains_skia_Surface__1nMakeImageSnapshotR)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Surface__1nGenerationId = (_) =>
                          (t.org_jetbrains_skia_Surface__1nGenerationId =
                            Ga.org_jetbrains_skia_Surface__1nGenerationId)(_)),
                        (t.org_jetbrains_skia_Surface__1nReadPixelsToPixmap = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nReadPixelsToPixmap =
                            Ga.org_jetbrains_skia_Surface__1nReadPixelsToPixmap)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Surface__1nReadPixels = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nReadPixels =
                            Ga.org_jetbrains_skia_Surface__1nReadPixels)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Surface__1nWritePixelsFromPixmap =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_Surface__1nWritePixelsFromPixmap =
                              Ga.org_jetbrains_skia_Surface__1nWritePixelsFromPixmap)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_Surface__1nWritePixels = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nWritePixels =
                            Ga.org_jetbrains_skia_Surface__1nWritePixels)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Surface__1nFlushAndSubmit = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nFlushAndSubmit =
                            Ga.org_jetbrains_skia_Surface__1nFlushAndSubmit)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Surface__1nFlush = (_) =>
                          (t.org_jetbrains_skia_Surface__1nFlush =
                            Ga.org_jetbrains_skia_Surface__1nFlush)(_)),
                        (t.org_jetbrains_skia_Surface__1nUnique = (_) =>
                          (t.org_jetbrains_skia_Surface__1nUnique =
                            Ga.org_jetbrains_skia_Surface__1nUnique)(_)),
                        (t.org_jetbrains_skia_Surface__1nGetImageInfo = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nGetImageInfo =
                            Ga.org_jetbrains_skia_Surface__1nGetImageInfo)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeSurface = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeSurface =
                            Ga.org_jetbrains_skia_Surface__1nMakeSurface)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Surface__1nMakeSurfaceI = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nMakeSurfaceI =
                            Ga.org_jetbrains_skia_Surface__1nMakeSurfaceI)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Surface__1nDraw = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nDraw =
                            Ga.org_jetbrains_skia_Surface__1nDraw)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Surface__1nPeekPixels = (_, a) =>
                          (t.org_jetbrains_skia_Surface__1nPeekPixels =
                            Ga.org_jetbrains_skia_Surface__1nPeekPixels)(_, a)),
                        (t.org_jetbrains_skia_Surface__1nNotifyContentWillChange =
                          (_, a) =>
                            (t.org_jetbrains_skia_Surface__1nNotifyContentWillChange =
                              Ga.org_jetbrains_skia_Surface__1nNotifyContentWillChange)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_Surface__1nGetRecordingContext = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Surface__1nGetRecordingContext =
                            Ga.org_jetbrains_skia_Surface__1nGetRecordingContext)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeWithColorFilter = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeWithColorFilter =
                            Ga.org_jetbrains_skia_Shader__1nMakeWithColorFilter)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeLinearGradient = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeLinearGradient =
                            Ga.org_jetbrains_skia_Shader__1nMakeLinearGradient)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeLinearGradientCS = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeLinearGradientCS =
                            Ga.org_jetbrains_skia_Shader__1nMakeLinearGradientCS)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeRadialGradient = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeRadialGradient =
                            Ga.org_jetbrains_skia_Shader__1nMakeRadialGradient)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeRadialGradientCS = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeRadialGradientCS =
                            Ga.org_jetbrains_skia_Shader__1nMakeRadialGradientCS)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient =
                          (_, a, e, r, i, n, s, o, g, k, l, b) =>
                            (t.org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient =
                              Ga.org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                              g,
                              k,
                              l,
                              b,
                            )),
                        (t.org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS =
                          (_, a, e, r, i, n, s, o, g, k, l, b, j) =>
                            (t.org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS =
                              Ga.org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                              s,
                              o,
                              g,
                              k,
                              l,
                              b,
                              j,
                            )),
                        (t.org_jetbrains_skia_Shader__1nMakeSweepGradient = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeSweepGradient =
                            Ga.org_jetbrains_skia_Shader__1nMakeSweepGradient)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeSweepGradientCS = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeSweepGradientCS =
                            Ga.org_jetbrains_skia_Shader__1nMakeSweepGradientCS)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeEmpty = () =>
                          (t.org_jetbrains_skia_Shader__1nMakeEmpty =
                            Ga.org_jetbrains_skia_Shader__1nMakeEmpty)()),
                        (t.org_jetbrains_skia_Shader__1nMakeColor = (_) =>
                          (t.org_jetbrains_skia_Shader__1nMakeColor =
                            Ga.org_jetbrains_skia_Shader__1nMakeColor)(_)),
                        (t.org_jetbrains_skia_Shader__1nMakeColorCS = (
                          _,
                          a,
                          e,
                          r,
                          i,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeColorCS =
                            Ga.org_jetbrains_skia_Shader__1nMakeColorCS)(
                            _,
                            a,
                            e,
                            r,
                            i,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeBlend = (_, a, e) =>
                          (t.org_jetbrains_skia_Shader__1nMakeBlend =
                            Ga.org_jetbrains_skia_Shader__1nMakeBlend)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeFractalNoise = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeFractalNoise =
                            Ga.org_jetbrains_skia_Shader__1nMakeFractalNoise)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Shader__1nMakeTurbulence = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Shader__1nMakeTurbulence =
                            Ga.org_jetbrains_skia_Shader__1nMakeTurbulence)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Data__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Data__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Data__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Data__1nSize = (_) =>
                          (t.org_jetbrains_skia_Data__1nSize =
                            Ga.org_jetbrains_skia_Data__1nSize)(_)),
                        (t.org_jetbrains_skia_Data__1nBytes = (_, a, e, r) =>
                          (t.org_jetbrains_skia_Data__1nBytes =
                            Ga.org_jetbrains_skia_Data__1nBytes)(_, a, e, r)),
                        (t.org_jetbrains_skia_Data__1nEquals = (_, a) =>
                          (t.org_jetbrains_skia_Data__1nEquals =
                            Ga.org_jetbrains_skia_Data__1nEquals)(_, a)),
                        (t.org_jetbrains_skia_Data__1nMakeFromBytes = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Data__1nMakeFromBytes =
                            Ga.org_jetbrains_skia_Data__1nMakeFromBytes)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Data__1nMakeWithoutCopy = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Data__1nMakeWithoutCopy =
                            Ga.org_jetbrains_skia_Data__1nMakeWithoutCopy)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Data__1nMakeFromFileName = (_) =>
                          (t.org_jetbrains_skia_Data__1nMakeFromFileName =
                            Ga.org_jetbrains_skia_Data__1nMakeFromFileName)(_)),
                        (t.org_jetbrains_skia_Data__1nMakeSubset = (_, a, e) =>
                          (t.org_jetbrains_skia_Data__1nMakeSubset =
                            Ga.org_jetbrains_skia_Data__1nMakeSubset)(_, a, e)),
                        (t.org_jetbrains_skia_Data__1nMakeEmpty = () =>
                          (t.org_jetbrains_skia_Data__1nMakeEmpty =
                            Ga.org_jetbrains_skia_Data__1nMakeEmpty)()),
                        (t.org_jetbrains_skia_Data__1nMakeUninitialized = (_) =>
                          (t.org_jetbrains_skia_Data__1nMakeUninitialized =
                            Ga.org_jetbrains_skia_Data__1nMakeUninitialized)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Data__1nWritableData = (_) =>
                          (t.org_jetbrains_skia_Data__1nWritableData =
                            Ga.org_jetbrains_skia_Data__1nWritableData)(_)),
                        (t.org_jetbrains_skia_ColorType__1nIsAlwaysOpaque = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_ColorType__1nIsAlwaysOpaque =
                            Ga.org_jetbrains_skia_ColorType__1nIsAlwaysOpaque)(
                            _,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nGetFinalizer =
                          () =>
                            (t.org_jetbrains_skia_BreakIterator__1nGetFinalizer =
                              Ga.org_jetbrains_skia_BreakIterator__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_BreakIterator__1nMake = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_BreakIterator__1nMake =
                            Ga.org_jetbrains_skia_BreakIterator__1nMake)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nClone = (_, a) =>
                          (t.org_jetbrains_skia_BreakIterator__1nClone =
                            Ga.org_jetbrains_skia_BreakIterator__1nClone)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nCurrent = (_) =>
                          (t.org_jetbrains_skia_BreakIterator__1nCurrent =
                            Ga.org_jetbrains_skia_BreakIterator__1nCurrent)(_)),
                        (t.org_jetbrains_skia_BreakIterator__1nNext = (_) =>
                          (t.org_jetbrains_skia_BreakIterator__1nNext =
                            Ga.org_jetbrains_skia_BreakIterator__1nNext)(_)),
                        (t.org_jetbrains_skia_BreakIterator__1nPrevious = (_) =>
                          (t.org_jetbrains_skia_BreakIterator__1nPrevious =
                            Ga.org_jetbrains_skia_BreakIterator__1nPrevious)(
                            _,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nFirst = (_) =>
                          (t.org_jetbrains_skia_BreakIterator__1nFirst =
                            Ga.org_jetbrains_skia_BreakIterator__1nFirst)(_)),
                        (t.org_jetbrains_skia_BreakIterator__1nLast = (_) =>
                          (t.org_jetbrains_skia_BreakIterator__1nLast =
                            Ga.org_jetbrains_skia_BreakIterator__1nLast)(_)),
                        (t.org_jetbrains_skia_BreakIterator__1nPreceding = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_BreakIterator__1nPreceding =
                            Ga.org_jetbrains_skia_BreakIterator__1nPreceding)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nFollowing = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_BreakIterator__1nFollowing =
                            Ga.org_jetbrains_skia_BreakIterator__1nFollowing)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nIsBoundary = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_BreakIterator__1nIsBoundary =
                            Ga.org_jetbrains_skia_BreakIterator__1nIsBoundary)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nGetRuleStatus = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_BreakIterator__1nGetRuleStatus =
                            Ga.org_jetbrains_skia_BreakIterator__1nGetRuleStatus)(
                            _,
                          )),
                        (t.org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen =
                          (_) =>
                            (t.org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen =
                              Ga.org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen)(
                              _,
                            )),
                        (t.org_jetbrains_skia_BreakIterator__1nGetRuleStatuses =
                          (_, a, e) =>
                            (t.org_jetbrains_skia_BreakIterator__1nGetRuleStatuses =
                              Ga.org_jetbrains_skia_BreakIterator__1nGetRuleStatuses)(
                              _,
                              a,
                              e,
                            )),
                        (t.org_jetbrains_skia_BreakIterator__1nSetText = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_BreakIterator__1nSetText =
                            Ga.org_jetbrains_skia_BreakIterator__1nSetText)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_FontMgr__1nGetFamiliesCount = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_FontMgr__1nGetFamiliesCount =
                            Ga.org_jetbrains_skia_FontMgr__1nGetFamiliesCount)(
                            _,
                          )),
                        (t.org_jetbrains_skia_FontMgr__1nGetFamilyName = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_FontMgr__1nGetFamilyName =
                            Ga.org_jetbrains_skia_FontMgr__1nGetFamilyName)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_FontMgr__1nMakeStyleSet = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_FontMgr__1nMakeStyleSet =
                            Ga.org_jetbrains_skia_FontMgr__1nMakeStyleSet)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_FontMgr__1nMatchFamily = (_, a) =>
                          (t.org_jetbrains_skia_FontMgr__1nMatchFamily =
                            Ga.org_jetbrains_skia_FontMgr__1nMatchFamily)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_FontMgr__1nMatchFamilyStyle = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_FontMgr__1nMatchFamilyStyle =
                            Ga.org_jetbrains_skia_FontMgr__1nMatchFamilyStyle)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter =
                          (_, a, e, r, i, n) =>
                            (t.org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter =
                              Ga.org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter)(
                              _,
                              a,
                              e,
                              r,
                              i,
                              n,
                            )),
                        (t.org_jetbrains_skia_FontMgr__1nMakeFromData = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_FontMgr__1nMakeFromData =
                            Ga.org_jetbrains_skia_FontMgr__1nMakeFromData)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_FontMgr__1nDefault = () =>
                          (t.org_jetbrains_skia_FontMgr__1nDefault =
                            Ga.org_jetbrains_skia_FontMgr__1nDefault)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit =
                          (_) =>
                            (t.org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit)(
                              _,
                            )),
                        (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed =
                              Ga.org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit =
                          (_) =>
                            (t.org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit)(
                              _,
                            )),
                        (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed =
                              Ga.org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit =
                          (_) =>
                            (t.org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit)(
                              _,
                            )),
                        (t.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit =
                          (_) =>
                            (t.org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit =
                              Ga.org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit)(
                              _,
                            )),
                        (t.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed =
                              Ga.org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nPurgeFontCache =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nPurgeFontCache =
                              Ga.org_jetbrains_skia_GraphicsKt__1nPurgeFontCache)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache =
                              Ga.org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache)()),
                        (t.org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches =
                          () =>
                            (t.org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches =
                              Ga.org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches)()),
                        (t.org_jetbrains_skia_impl_RefCnt__getFinalizer = () =>
                          (t.org_jetbrains_skia_impl_RefCnt__getFinalizer =
                            Ga.org_jetbrains_skia_impl_RefCnt__getFinalizer)()),
                        (t.org_jetbrains_skia_impl_RefCnt__getRefCount = (_) =>
                          (t.org_jetbrains_skia_impl_RefCnt__getRefCount =
                            Ga.org_jetbrains_skia_impl_RefCnt__getRefCount)(_)),
                        (t.org_jetbrains_skia_PaintFilterCanvas__1nInit = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_PaintFilterCanvas__1nInit =
                            Ga.org_jetbrains_skia_PaintFilterCanvas__1nInit)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PaintFilterCanvas__1nMake = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_PaintFilterCanvas__1nMake =
                            Ga.org_jetbrains_skia_PaintFilterCanvas__1nMake)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint =
                          (_) =>
                            (t.org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint =
                              Ga.org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint)(
                              _,
                            )),
                        (t.org_jetbrains_skia_ShadowUtils__1nDrawShadow = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                          l,
                          b,
                        ) =>
                          (t.org_jetbrains_skia_ShadowUtils__1nDrawShadow =
                            Ga.org_jetbrains_skia_ShadowUtils__1nDrawShadow)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                            l,
                            b,
                          )),
                        (t.org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor =
                          (_, a) =>
                            (t.org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor =
                              Ga.org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor =
                          (_, a) =>
                            (t.org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor =
                              Ga.org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor)(
                              _,
                              a,
                            )),
                        (t.org_jetbrains_skia_PathEffect__1nMakeSum = (_, a) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakeSum =
                            Ga.org_jetbrains_skia_PathEffect__1nMakeSum)(_, a)),
                        (t.org_jetbrains_skia_PathEffect__1nMakeCompose = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakeCompose =
                            Ga.org_jetbrains_skia_PathEffect__1nMakeCompose)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PathEffect__1nMakePath1D = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakePath1D =
                            Ga.org_jetbrains_skia_PathEffect__1nMakePath1D)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_PathEffect__1nMakePath2D = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakePath2D =
                            Ga.org_jetbrains_skia_PathEffect__1nMakePath2D)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PathEffect__1nMakeLine2D = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakeLine2D =
                            Ga.org_jetbrains_skia_PathEffect__1nMakeLine2D)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_PathEffect__1nMakeCorner = (_) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakeCorner =
                            Ga.org_jetbrains_skia_PathEffect__1nMakeCorner)(_)),
                        (t.org_jetbrains_skia_PathEffect__1nMakeDash = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakeDash =
                            Ga.org_jetbrains_skia_PathEffect__1nMakeDash)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_PathEffect__1nMakeDiscrete = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_PathEffect__1nMakeDiscrete =
                            Ga.org_jetbrains_skia_PathEffect__1nMakeDiscrete)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_ColorSpace__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_ColorSpace__1nGetFinalizer =
                            Ga.org_jetbrains_skia_ColorSpace__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_ColorSpace__1nMakeSRGB = () =>
                          (t.org_jetbrains_skia_ColorSpace__1nMakeSRGB =
                            Ga.org_jetbrains_skia_ColorSpace__1nMakeSRGB)()),
                        (t.org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear =
                          () =>
                            (t.org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear =
                              Ga.org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear)()),
                        (t.org_jetbrains_skia_ColorSpace__1nMakeDisplayP3 =
                          () =>
                            (t.org_jetbrains_skia_ColorSpace__1nMakeDisplayP3 =
                              Ga.org_jetbrains_skia_ColorSpace__1nMakeDisplayP3)()),
                        (t.org_jetbrains_skia_ColorSpace__nConvert = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_ColorSpace__nConvert =
                            Ga.org_jetbrains_skia_ColorSpace__nConvert)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB =
                          (_) =>
                            (t.org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB =
                              Ga.org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB)(
                              _,
                            )),
                        (t.org_jetbrains_skia_ColorSpace__1nIsGammaLinear = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_ColorSpace__1nIsGammaLinear =
                            Ga.org_jetbrains_skia_ColorSpace__1nIsGammaLinear)(
                            _,
                          )),
                        (t.org_jetbrains_skia_ColorSpace__1nIsSRGB = (_) =>
                          (t.org_jetbrains_skia_ColorSpace__1nIsSRGB =
                            Ga.org_jetbrains_skia_ColorSpace__1nIsSRGB)(_)),
                        (t.org_jetbrains_skia_Pixmap__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Pixmap__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Pixmap__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Pixmap__1nMakeNull = () =>
                          (t.org_jetbrains_skia_Pixmap__1nMakeNull =
                            Ga.org_jetbrains_skia_Pixmap__1nMakeNull)()),
                        (t.org_jetbrains_skia_Pixmap__1nMake = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nMake =
                            Ga.org_jetbrains_skia_Pixmap__1nMake)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nReset = (_) =>
                          (t.org_jetbrains_skia_Pixmap__1nReset =
                            Ga.org_jetbrains_skia_Pixmap__1nReset)(_)),
                        (t.org_jetbrains_skia_Pixmap__1nResetWithInfo = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nResetWithInfo =
                            Ga.org_jetbrains_skia_Pixmap__1nResetWithInfo)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nSetColorSpace = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nSetColorSpace =
                            Ga.org_jetbrains_skia_Pixmap__1nSetColorSpace)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nExtractSubset = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nExtractSubset =
                            Ga.org_jetbrains_skia_Pixmap__1nExtractSubset)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nGetInfo = (_, a, e) =>
                          (t.org_jetbrains_skia_Pixmap__1nGetInfo =
                            Ga.org_jetbrains_skia_Pixmap__1nGetInfo)(_, a, e)),
                        (t.org_jetbrains_skia_Pixmap__1nGetRowBytes = (_) =>
                          (t.org_jetbrains_skia_Pixmap__1nGetRowBytes =
                            Ga.org_jetbrains_skia_Pixmap__1nGetRowBytes)(_)),
                        (t.org_jetbrains_skia_Pixmap__1nGetAddr = (_) =>
                          (t.org_jetbrains_skia_Pixmap__1nGetAddr =
                            Ga.org_jetbrains_skia_Pixmap__1nGetAddr)(_)),
                        (t.org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels =
                            Ga.org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nComputeByteSize = (_) =>
                          (t.org_jetbrains_skia_Pixmap__1nComputeByteSize =
                            Ga.org_jetbrains_skia_Pixmap__1nComputeByteSize)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nComputeIsOpaque = (_) =>
                          (t.org_jetbrains_skia_Pixmap__1nComputeIsOpaque =
                            Ga.org_jetbrains_skia_Pixmap__1nComputeIsOpaque)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nGetColor = (_, a, e) =>
                          (t.org_jetbrains_skia_Pixmap__1nGetColor =
                            Ga.org_jetbrains_skia_Pixmap__1nGetColor)(_, a, e)),
                        (t.org_jetbrains_skia_Pixmap__1nGetAlphaF = (_, a, e) =>
                          (t.org_jetbrains_skia_Pixmap__1nGetAlphaF =
                            Ga.org_jetbrains_skia_Pixmap__1nGetAlphaF)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nGetAddrAt = (_, a, e) =>
                          (t.org_jetbrains_skia_Pixmap__1nGetAddrAt =
                            Ga.org_jetbrains_skia_Pixmap__1nGetAddrAt)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nReadPixels = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nReadPixels =
                            Ga.org_jetbrains_skia_Pixmap__1nReadPixels)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint =
                            Ga.org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                            s,
                            o,
                            g,
                            k,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap =
                            Ga.org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint =
                          (_, a, e, r) =>
                            (t.org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint =
                              Ga.org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint)(
                              _,
                              a,
                              e,
                              r,
                            )),
                        (t.org_jetbrains_skia_Pixmap__1nScalePixels = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nScalePixels =
                            Ga.org_jetbrains_skia_Pixmap__1nScalePixels)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Pixmap__1nErase = (_, a) =>
                          (t.org_jetbrains_skia_Pixmap__1nErase =
                            Ga.org_jetbrains_skia_Pixmap__1nErase)(_, a)),
                        (t.org_jetbrains_skia_Pixmap__1nEraseSubset = (
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        ) =>
                          (t.org_jetbrains_skia_Pixmap__1nEraseSubset =
                            Ga.org_jetbrains_skia_Pixmap__1nEraseSubset)(
                            _,
                            a,
                            e,
                            r,
                            i,
                            n,
                          )),
                        (t.org_jetbrains_skia_Codec__1nGetFinalizer = () =>
                          (t.org_jetbrains_skia_Codec__1nGetFinalizer =
                            Ga.org_jetbrains_skia_Codec__1nGetFinalizer)()),
                        (t.org_jetbrains_skia_Codec__1nMakeFromData = (_) =>
                          (t.org_jetbrains_skia_Codec__1nMakeFromData =
                            Ga.org_jetbrains_skia_Codec__1nMakeFromData)(_)),
                        (t.org_jetbrains_skia_Codec__1nGetImageInfo = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nGetImageInfo =
                            Ga.org_jetbrains_skia_Codec__1nGetImageInfo)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Codec__1nGetSizeWidth = (_) =>
                          (t.org_jetbrains_skia_Codec__1nGetSizeWidth =
                            Ga.org_jetbrains_skia_Codec__1nGetSizeWidth)(_)),
                        (t.org_jetbrains_skia_Codec__1nGetSizeHeight = (_) =>
                          (t.org_jetbrains_skia_Codec__1nGetSizeHeight =
                            Ga.org_jetbrains_skia_Codec__1nGetSizeHeight)(_)),
                        (t.org_jetbrains_skia_Codec__1nGetEncodedOrigin = (_) =>
                          (t.org_jetbrains_skia_Codec__1nGetEncodedOrigin =
                            Ga.org_jetbrains_skia_Codec__1nGetEncodedOrigin)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Codec__1nGetEncodedImageFormat = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nGetEncodedImageFormat =
                            Ga.org_jetbrains_skia_Codec__1nGetEncodedImageFormat)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Codec__1nReadPixels = (
                          _,
                          a,
                          e,
                          r,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nReadPixels =
                            Ga.org_jetbrains_skia_Codec__1nReadPixels)(
                            _,
                            a,
                            e,
                            r,
                          )),
                        (t.org_jetbrains_skia_Codec__1nGetFrameCount = (_) =>
                          (t.org_jetbrains_skia_Codec__1nGetFrameCount =
                            Ga.org_jetbrains_skia_Codec__1nGetFrameCount)(_)),
                        (t.org_jetbrains_skia_Codec__1nGetFrameInfo = (
                          _,
                          a,
                          e,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nGetFrameInfo =
                            Ga.org_jetbrains_skia_Codec__1nGetFrameInfo)(
                            _,
                            a,
                            e,
                          )),
                        (t.org_jetbrains_skia_Codec__1nGetFramesInfo = (_) =>
                          (t.org_jetbrains_skia_Codec__1nGetFramesInfo =
                            Ga.org_jetbrains_skia_Codec__1nGetFramesInfo)(_)),
                        (t.org_jetbrains_skia_Codec__1nFramesInfo_Delete = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nFramesInfo_Delete =
                            Ga.org_jetbrains_skia_Codec__1nFramesInfo_Delete)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Codec__1nFramesInfo_GetSize = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nFramesInfo_GetSize =
                            Ga.org_jetbrains_skia_Codec__1nFramesInfo_GetSize)(
                            _,
                          )),
                        (t.org_jetbrains_skia_Codec__1nFramesInfo_GetInfos = (
                          _,
                          a,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nFramesInfo_GetInfos =
                            Ga.org_jetbrains_skia_Codec__1nFramesInfo_GetInfos)(
                            _,
                            a,
                          )),
                        (t.org_jetbrains_skia_Codec__1nGetRepetitionCount = (
                          _,
                        ) =>
                          (t.org_jetbrains_skia_Codec__1nGetRepetitionCount =
                            Ga.org_jetbrains_skia_Codec__1nGetRepetitionCount)(
                            _,
                          )),
                        () => (Ca = Ga.__errno_location)()),
                      xa = (_, a) =>
                        (xa = Ga.emscripten_builtin_memalign)(_, a),
                      Ma = (_, a) => (Ma = Ga.setThrew)(_, a),
                      va = () => (va = Ga.stackSave)(),
                      Ta = (_) => (Ta = Ga.stackRestore)(_);
                    function Ra() {
                      function _() {
                        fa ||
                          ((fa = !0),
                          (t.calledRun = !0),
                          T ||
                            (t.noFSInit || h_.init.initialized || h_.init(),
                            (h_.ignorePermissions = !1),
                            k_.init(),
                            Q(I),
                            a(t),
                            t.onRuntimeInitialized && t.onRuntimeInitialized(),
                            (function () {
                              if (t.postRun)
                                for (
                                  "function" == typeof t.postRun &&
                                  (t.postRun = [t.postRun]);
                                  t.postRun.length;

                                )
                                  (_ = t.postRun.shift()), w.unshift(_);
                              var _;
                              Q(w);
                            })()));
                      }
                      D > 0 ||
                        ((function () {
                          if (t.preRun)
                            for (
                              "function" == typeof t.preRun &&
                              (t.preRun = [t.preRun]);
                              t.preRun.length;

                            )
                              (_ = t.preRun.shift()), B.unshift(_);
                          var _;
                          Q(B);
                        })(),
                        D > 0 ||
                          (t.setStatus
                            ? (t.setStatus("Running..."),
                              setTimeout(function () {
                                setTimeout(function () {
                                  t.setStatus("");
                                }, 1),
                                  _();
                              }, 1))
                            : _()));
                    }
                    if (
                      ((t.dynCall_ji = (_, a) =>
                        (t.dynCall_ji = Ga.dynCall_ji)(_, a)),
                      (t.dynCall_iiji = (_, a, e, r, i) =>
                        (t.dynCall_iiji = Ga.dynCall_iiji)(_, a, e, r, i)),
                      (t.dynCall_iijjiii = (_, a, e, r, i, n, s, o, g) =>
                        (t.dynCall_iijjiii = Ga.dynCall_iijjiii)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        )),
                      (t.dynCall_iij = (_, a, e, r) =>
                        (t.dynCall_iij = Ga.dynCall_iij)(_, a, e, r)),
                      (t.dynCall_vijjjii = (_, a, e, r, i, n, s, o, g, k) =>
                        (t.dynCall_vijjjii = Ga.dynCall_vijjjii)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        )),
                      (t.dynCall_viji = (_, a, e, r, i) =>
                        (t.dynCall_viji = Ga.dynCall_viji)(_, a, e, r, i)),
                      (t.dynCall_vijiii = (_, a, e, r, i, n, s) =>
                        (t.dynCall_vijiii = Ga.dynCall_vijiii)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        )),
                      (t.dynCall_viiiiij = (_, a, e, r, i, n, s, o) =>
                        (t.dynCall_viiiiij = Ga.dynCall_viiiiij)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        )),
                      (t.dynCall_jii = (_, a, e) =>
                        (t.dynCall_jii = Ga.dynCall_jii)(_, a, e)),
                      (t.dynCall_vij = (_, a, e, r) =>
                        (t.dynCall_vij = Ga.dynCall_vij)(_, a, e, r)),
                      (t.dynCall_iiij = (_, a, e, r, i) =>
                        (t.dynCall_iiij = Ga.dynCall_iiij)(_, a, e, r, i)),
                      (t.dynCall_iiiij = (_, a, e, r, i, n) =>
                        (t.dynCall_iiiij = Ga.dynCall_iiiij)(_, a, e, r, i, n)),
                      (t.dynCall_viij = (_, a, e, r, i) =>
                        (t.dynCall_viij = Ga.dynCall_viij)(_, a, e, r, i)),
                      (t.dynCall_viiij = (_, a, e, r, i, n) =>
                        (t.dynCall_viiij = Ga.dynCall_viiij)(_, a, e, r, i, n)),
                      (t.dynCall_jiiiiii = (_, a, e, r, i, n, s) =>
                        (t.dynCall_jiiiiii = Ga.dynCall_jiiiiii)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        )),
                      (t.dynCall_jiiiiji = (_, a, e, r, i, n, s, o) =>
                        (t.dynCall_jiiiiji = Ga.dynCall_jiiiiji)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                        )),
                      (t.dynCall_iijj = (_, a, e, r, i, n) =>
                        (t.dynCall_iijj = Ga.dynCall_iijj)(_, a, e, r, i, n)),
                      (t.dynCall_jiiiii = (_, a, e, r, i, n) =>
                        (t.dynCall_jiiiii = Ga.dynCall_jiiiii)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                        )),
                      (t.dynCall_iiiji = (_, a, e, r, i, n) =>
                        (t.dynCall_iiiji = Ga.dynCall_iiiji)(_, a, e, r, i, n)),
                      (t.dynCall_jiji = (_, a, e, r, i) =>
                        (t.dynCall_jiji = Ga.dynCall_jiji)(_, a, e, r, i)),
                      (t.dynCall_viijii = (_, a, e, r, i, n, s) =>
                        (t.dynCall_viijii = Ga.dynCall_viijii)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        )),
                      (t.dynCall_iiiiij = (_, a, e, r, i, n, s) =>
                        (t.dynCall_iiiiij = Ga.dynCall_iiiiij)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                        )),
                      (t.dynCall_iiiiijj = (_, a, e, r, i, n, s, o, g) =>
                        (t.dynCall_iiiiijj = Ga.dynCall_iiiiijj)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                        )),
                      (t.dynCall_iiiiiijj = (_, a, e, r, i, n, s, o, g, k) =>
                        (t.dynCall_iiiiiijj = Ga.dynCall_iiiiiijj)(
                          _,
                          a,
                          e,
                          r,
                          i,
                          n,
                          s,
                          o,
                          g,
                          k,
                        )),
                      (t.wasmExports = Ga),
                      (t.GL = H_),
                      (A = function _() {
                        fa || Ra(), fa || (A = _);
                      }),
                      t.preInit)
                    )
                      for (
                        "function" == typeof t.preInit &&
                        (t.preInit = [t.preInit]);
                        t.preInit.length > 0;

                      )
                        t.preInit.pop()();
                    return Ra(), _.ready;
                  });
                const _ = t,
                  n = (() => {
                    const _ = {
                        callback: () => {
                          throw new RangeError(
                            "attempted to call a callback at NULL",
                          );
                        },
                        data: null,
                      },
                      a = {
                        callback: () => {
                          throw new RangeError(
                            "attempted to call an uninitialized callback",
                          );
                        },
                        data: null,
                      };
                    class e {
                      constructor() {
                        (this.nextId = 1),
                          (this.callbackMap = new Map()),
                          this.callbackMap.set(0, _);
                      }
                      addCallback(_, a) {
                        let e = this.nextId++;
                        return (
                          this.callbackMap.set(e, { callback: _, data: a }), e
                        );
                      }
                      getCallback(_) {
                        return this.callbackMap.get(_) || a;
                      }
                      deleteCallback(_) {
                        this.callbackMap.delete(_);
                      }
                      release() {
                        this.callbackMap = null;
                      }
                    }
                    const r = new e();
                    let t = r;
                    return {
                      _callCallback(_, a = !1) {
                        let e = (a ? r : t).getCallback(_);
                        try {
                          return e.callback(), e.data;
                        } catch (_) {
                          console.error(_);
                        }
                      },
                      _registerCallback: (_, a = null, e = !1) =>
                        (e ? r : t).addCallback(_, a),
                      _releaseCallback(_, a = !1) {
                        (a ? r : t).deleteCallback(_);
                      },
                      _createLocalCallbackScope() {
                        if (t !== r)
                          throw new Error("attempted to overwrite local scope");
                        t = new e();
                      },
                      _releaseLocalCallbackScope() {
                        if (t === r)
                          throw new Error("attempted to release global scope");
                        t.release(), (t = r);
                      },
                    };
                  })(),
                  {
                    _callCallback: s,
                    _registerCallback: o,
                    _releaseCallback: g,
                    _createLocalCallbackScope: k,
                    _releaseLocalCallbackScope: l,
                  } = n,
                  b = await t(),
                  { GL: j } = b,
                  {
                    org_jetbrains_skia_RTreeFactory__1nMake: p,
                    org_jetbrains_skia_BBHFactory__1nGetFinalizer: h,
                    org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer: c,
                    org_jetbrains_skia_BackendRenderTarget__1nMakeGL: d,
                    BackendRenderTarget_nMakeMetal: u,
                    BackendRenderTarget_MakeDirect3D: m,
                    org_jetbrains_skia_Bitmap__1nGetFinalizer: S,
                    org_jetbrains_skia_Bitmap__1nMake: f,
                    org_jetbrains_skia_Bitmap__1nMakeClone: P,
                    org_jetbrains_skia_Bitmap__1nSwap: G,
                    org_jetbrains_skia_Bitmap__1nGetPixmap: y,
                    org_jetbrains_skia_Bitmap__1nGetImageInfo: F,
                    org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels: C,
                    org_jetbrains_skia_Bitmap__1nIsNull: x,
                    org_jetbrains_skia_Bitmap__1nGetRowBytes: M,
                    org_jetbrains_skia_Bitmap__1nSetAlphaType: v,
                    org_jetbrains_skia_Bitmap__1nComputeByteSize: T,
                    org_jetbrains_skia_Bitmap__1nIsImmutable: R,
                    org_jetbrains_skia_Bitmap__1nSetImmutable: B,
                    org_jetbrains_skia_Bitmap__1nIsVolatile: I,
                    org_jetbrains_skia_Bitmap__1nSetVolatile: w,
                    org_jetbrains_skia_Bitmap__1nReset: D,
                    org_jetbrains_skia_Bitmap__1nComputeIsOpaque: E,
                    org_jetbrains_skia_Bitmap__1nSetImageInfo: A,
                    org_jetbrains_skia_Bitmap__1nAllocPixelsFlags: L,
                    org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes: z,
                    org_jetbrains_skia_Bitmap__1nInstallPixels: V,
                    org_jetbrains_skia_Bitmap__1nAllocPixels: H,
                    org_jetbrains_skia_Bitmap__1nGetPixelRef: U,
                    org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX: O,
                    org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY: W,
                    org_jetbrains_skia_Bitmap__1nSetPixelRef: N,
                    org_jetbrains_skia_Bitmap__1nIsReadyToDraw: $,
                    org_jetbrains_skia_Bitmap__1nGetGenerationId: K,
                    org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged: q,
                    org_jetbrains_skia_Bitmap__1nEraseColor: X,
                    org_jetbrains_skia_Bitmap__1nErase: Y,
                    org_jetbrains_skia_Bitmap__1nGetColor: Q,
                    org_jetbrains_skia_Bitmap__1nGetAlphaf: J,
                    org_jetbrains_skia_Bitmap__1nExtractSubset: Z,
                    org_jetbrains_skia_Bitmap__1nReadPixels: __,
                    org_jetbrains_skia_Bitmap__1nExtractAlpha: a_,
                    org_jetbrains_skia_Bitmap__1nPeekPixels: e_,
                    org_jetbrains_skia_Bitmap__1nMakeShader: r_,
                    org_jetbrains_skia_BreakIterator__1nGetFinalizer: t_,
                    org_jetbrains_skia_BreakIterator__1nMake: i_,
                    org_jetbrains_skia_BreakIterator__1nClone: n_,
                    org_jetbrains_skia_BreakIterator__1nCurrent: s_,
                    org_jetbrains_skia_BreakIterator__1nNext: o_,
                    org_jetbrains_skia_BreakIterator__1nPrevious: g_,
                    org_jetbrains_skia_BreakIterator__1nFirst: k_,
                    org_jetbrains_skia_BreakIterator__1nLast: l_,
                    org_jetbrains_skia_BreakIterator__1nPreceding: b_,
                    org_jetbrains_skia_BreakIterator__1nFollowing: j_,
                    org_jetbrains_skia_BreakIterator__1nIsBoundary: p_,
                    org_jetbrains_skia_BreakIterator__1nGetRuleStatus: h_,
                    org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen: c_,
                    org_jetbrains_skia_BreakIterator__1nGetRuleStatuses: d_,
                    org_jetbrains_skia_BreakIterator__1nSetText: u_,
                    org_jetbrains_skia_Canvas__1nGetFinalizer: m_,
                    org_jetbrains_skia_Canvas__1nMakeFromBitmap: S_,
                    org_jetbrains_skia_Canvas__1nDrawPoint: f_,
                    org_jetbrains_skia_Canvas__1nDrawPoints: P_,
                    org_jetbrains_skia_Canvas__1nDrawLine: G_,
                    org_jetbrains_skia_Canvas__1nDrawArc: y_,
                    org_jetbrains_skia_Canvas__1nDrawRect: F_,
                    org_jetbrains_skia_Canvas__1nDrawOval: C_,
                    org_jetbrains_skia_Canvas__1nDrawRRect: x_,
                    org_jetbrains_skia_Canvas__1nDrawDRRect: M_,
                    org_jetbrains_skia_Canvas__1nDrawPath: v_,
                    org_jetbrains_skia_Canvas__1nDrawImageRect: T_,
                    org_jetbrains_skia_Canvas__1nDrawImageNine: R_,
                    org_jetbrains_skia_Canvas__1nDrawRegion: B_,
                    org_jetbrains_skia_Canvas__1nDrawString: I_,
                    org_jetbrains_skia_Canvas__1nDrawTextBlob: w_,
                    org_jetbrains_skia_Canvas__1nDrawPicture: D_,
                    org_jetbrains_skia_Canvas__1nDrawVertices: E_,
                    org_jetbrains_skia_Canvas__1nDrawPatch: A_,
                    org_jetbrains_skia_Canvas__1nDrawDrawable: L_,
                    org_jetbrains_skia_Canvas__1nClear: z_,
                    org_jetbrains_skia_Canvas__1nDrawPaint: V_,
                    org_jetbrains_skia_Canvas__1nSetMatrix: H_,
                    org_jetbrains_skia_Canvas__1nGetLocalToDevice: U_,
                    org_jetbrains_skia_Canvas__1nResetMatrix: O_,
                    org_jetbrains_skia_Canvas__1nClipRect: W_,
                    org_jetbrains_skia_Canvas__1nClipRRect: N_,
                    org_jetbrains_skia_Canvas__1nClipPath: $_,
                    org_jetbrains_skia_Canvas__1nClipRegion: K_,
                    org_jetbrains_skia_Canvas__1nTranslate: q_,
                    org_jetbrains_skia_Canvas__1nScale: X_,
                    org_jetbrains_skia_Canvas__1nRotate: Y_,
                    org_jetbrains_skia_Canvas__1nSkew: Q_,
                    org_jetbrains_skia_Canvas__1nConcat: J_,
                    org_jetbrains_skia_Canvas__1nConcat44: Z_,
                    org_jetbrains_skia_Canvas__1nReadPixels: _a,
                    org_jetbrains_skia_Canvas__1nWritePixels: aa,
                    org_jetbrains_skia_Canvas__1nSave: ea,
                    org_jetbrains_skia_Canvas__1nSaveLayer: ra,
                    org_jetbrains_skia_Canvas__1nSaveLayerRect: ta,
                    org_jetbrains_skia_Canvas__1nGetSaveCount: ia,
                    org_jetbrains_skia_Canvas__1nRestore: na,
                    org_jetbrains_skia_Canvas__1nRestoreToCount: sa,
                    org_jetbrains_skia_Codec__1nGetFinalizer: oa,
                    org_jetbrains_skia_Codec__1nGetImageInfo: ga,
                    org_jetbrains_skia_Codec__1nReadPixels: ka,
                    org_jetbrains_skia_Codec__1nMakeFromData: la,
                    org_jetbrains_skia_Codec__1nGetSizeWidth: ba,
                    org_jetbrains_skia_Codec__1nGetSizeHeight: ja,
                    org_jetbrains_skia_Codec__1nGetEncodedOrigin: pa,
                    org_jetbrains_skia_Codec__1nGetEncodedImageFormat: ha,
                    org_jetbrains_skia_Codec__1nGetFrameCount: ca,
                    org_jetbrains_skia_Codec__1nGetFrameInfo: da,
                    org_jetbrains_skia_Codec__1nGetFramesInfo: ua,
                    org_jetbrains_skia_Codec__1nGetRepetitionCount: ma,
                    org_jetbrains_skia_Codec__1nFramesInfo_Delete: Sa,
                    org_jetbrains_skia_Codec__1nFramesInfo_GetSize: fa,
                    org_jetbrains_skia_Codec__1nFramesInfo_GetInfos: Pa,
                    org_jetbrains_skia_ColorFilter__1nMakeComposed: Ga,
                    org_jetbrains_skia_ColorFilter__1nMakeBlend: ya,
                    org_jetbrains_skia_ColorFilter__1nMakeMatrix: Fa,
                    org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix: Ca,
                    org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma: xa,
                    org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma: Ma,
                    org_jetbrains_skia_ColorFilter__1nMakeLerp: va,
                    org_jetbrains_skia_ColorFilter__1nMakeLighting: Ta,
                    org_jetbrains_skia_ColorFilter__1nMakeHighContrast: Ra,
                    org_jetbrains_skia_ColorFilter__1nMakeTable: Ba,
                    org_jetbrains_skia_ColorFilter__1nMakeOverdraw: Ia,
                    org_jetbrains_skia_ColorFilter__1nGetLuma: wa,
                    org_jetbrains_skia_ColorFilter__1nMakeTableARGB: Da,
                    org_jetbrains_skia_ColorSpace__1nGetFinalizer: Ea,
                    org_jetbrains_skia_ColorSpace__nConvert: Aa,
                    org_jetbrains_skia_ColorSpace__1nMakeSRGB: La,
                    org_jetbrains_skia_ColorSpace__1nMakeDisplayP3: za,
                    org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear: Va,
                    org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB: Ha,
                    org_jetbrains_skia_ColorSpace__1nIsGammaLinear: Ua,
                    org_jetbrains_skia_ColorSpace__1nIsSRGB: Oa,
                    org_jetbrains_skia_ColorType__1nIsAlwaysOpaque: Wa,
                    org_jetbrains_skia_Data__1nGetFinalizer: Na,
                    org_jetbrains_skia_Data__1nSize: $a,
                    org_jetbrains_skia_Data__1nBytes: Ka,
                    org_jetbrains_skia_Data__1nEquals: qa,
                    org_jetbrains_skia_Data__1nMakeFromBytes: Xa,
                    org_jetbrains_skia_Data__1nMakeWithoutCopy: Ya,
                    org_jetbrains_skia_Data__1nMakeFromFileName: Qa,
                    org_jetbrains_skia_Data__1nMakeSubset: Ja,
                    org_jetbrains_skia_Data__1nMakeEmpty: Za,
                    org_jetbrains_skia_Data__1nMakeUninitialized: _e,
                    org_jetbrains_skia_Data__1nWritableData: ae,
                    org_jetbrains_skia_DirectContext__1nFlush: ee,
                    org_jetbrains_skia_DirectContext__1nMakeGL: re,
                    org_jetbrains_skia_DirectContext__1nMakeMetal: te,
                    org_jetbrains_skia_DirectContext__1nMakeDirect3D: ie,
                    org_jetbrains_skia_DirectContext__1nSubmit: ne,
                    org_jetbrains_skia_DirectContext__1nReset: se,
                    org_jetbrains_skia_DirectContext__1nAbandon: oe,
                    org_jetbrains_skia_Drawable__1nGetFinalizer: ge,
                    org_jetbrains_skia_Drawable__1nMake: ke,
                    org_jetbrains_skia_Drawable__1nGetGenerationId: le,
                    org_jetbrains_skia_Drawable__1nDraw: be,
                    org_jetbrains_skia_Drawable__1nMakePictureSnapshot: je,
                    org_jetbrains_skia_Drawable__1nNotifyDrawingChanged: pe,
                    org_jetbrains_skia_Drawable__1nGetBounds: he,
                    org_jetbrains_skia_Drawable__1nInit: ce,
                    org_jetbrains_skia_Drawable__1nGetOnDrawCanvas: de,
                    org_jetbrains_skia_Drawable__1nSetBounds: ue,
                    org_jetbrains_skia_Font__1nGetFinalizer: me,
                    org_jetbrains_skia_Font__1nMakeClone: Se,
                    org_jetbrains_skia_Font__1nEquals: fe,
                    org_jetbrains_skia_Font__1nGetSize: Pe,
                    org_jetbrains_skia_Font__1nMakeDefault: Ge,
                    org_jetbrains_skia_Font__1nMakeTypeface: ye,
                    org_jetbrains_skia_Font__1nMakeTypefaceSize: Fe,
                    org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew: Ce,
                    org_jetbrains_skia_Font__1nIsAutoHintingForced: xe,
                    org_jetbrains_skia_Font__1nAreBitmapsEmbedded: Me,
                    org_jetbrains_skia_Font__1nIsSubpixel: ve,
                    org_jetbrains_skia_Font__1nAreMetricsLinear: Te,
                    org_jetbrains_skia_Font__1nIsEmboldened: Re,
                    org_jetbrains_skia_Font__1nIsBaselineSnapped: Be,
                    org_jetbrains_skia_Font__1nSetAutoHintingForced: Ie,
                    org_jetbrains_skia_Font__1nSetBitmapsEmbedded: we,
                    org_jetbrains_skia_Font__1nSetSubpixel: De,
                    org_jetbrains_skia_Font__1nSetMetricsLinear: Ee,
                    org_jetbrains_skia_Font__1nSetEmboldened: Ae,
                    org_jetbrains_skia_Font__1nSetBaselineSnapped: Le,
                    org_jetbrains_skia_Font__1nGetEdging: ze,
                    org_jetbrains_skia_Font__1nSetEdging: Ve,
                    org_jetbrains_skia_Font__1nGetHinting: He,
                    org_jetbrains_skia_Font__1nSetHinting: Ue,
                    org_jetbrains_skia_Font__1nGetTypeface: Oe,
                    org_jetbrains_skia_Font__1nGetTypefaceOrDefault: We,
                    org_jetbrains_skia_Font__1nGetScaleX: Ne,
                    org_jetbrains_skia_Font__1nGetSkewX: $e,
                    org_jetbrains_skia_Font__1nSetTypeface: Ke,
                    org_jetbrains_skia_Font__1nSetSize: qe,
                    org_jetbrains_skia_Font__1nSetScaleX: Xe,
                    org_jetbrains_skia_Font__1nSetSkewX: Ye,
                    org_jetbrains_skia_Font__1nGetUTF32Glyph: Qe,
                    org_jetbrains_skia_Font__1nGetUTF32Glyphs: Je,
                    org_jetbrains_skia_Font__1nGetStringGlyphsCount: Ze,
                    org_jetbrains_skia_Font__1nMeasureText: _r,
                    org_jetbrains_skia_Font__1nMeasureTextWidth: ar,
                    org_jetbrains_skia_Font__1nGetWidths: er,
                    org_jetbrains_skia_Font__1nGetBounds: rr,
                    org_jetbrains_skia_Font__1nGetPositions: tr,
                    org_jetbrains_skia_Font__1nGetXPositions: ir,
                    org_jetbrains_skia_Font__1nGetPath: nr,
                    org_jetbrains_skia_Font__1nGetPaths: sr,
                    org_jetbrains_skia_Font__1nGetMetrics: or,
                    org_jetbrains_skia_Font__1nGetSpacing: gr,
                    org_jetbrains_skia_FontMgr__1nGetFamiliesCount: kr,
                    org_jetbrains_skia_FontMgr__1nGetFamilyName: lr,
                    org_jetbrains_skia_FontMgr__1nMakeStyleSet: br,
                    org_jetbrains_skia_FontMgr__1nMatchFamily: jr,
                    org_jetbrains_skia_FontMgr__1nMatchFamilyStyle: pr,
                    org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter: hr,
                    org_jetbrains_skia_FontMgr__1nMakeFromData: cr,
                    org_jetbrains_skia_FontMgr__1nDefault: dr,
                    org_jetbrains_skia_FontStyleSet__1nMakeEmpty: ur,
                    org_jetbrains_skia_FontStyleSet__1nCount: mr,
                    org_jetbrains_skia_FontStyleSet__1nGetStyle: Sr,
                    org_jetbrains_skia_FontStyleSet__1nGetStyleName: fr,
                    org_jetbrains_skia_FontStyleSet__1nGetTypeface: Pr,
                    org_jetbrains_skia_FontStyleSet__1nMatchStyle: Gr,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit: yr,
                    org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit: Fr,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed: Cr,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit: xr,
                    org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit: Mr,
                    org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed: vr,
                    org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit:
                      Tr,
                    org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit:
                      Rr,
                    org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit:
                      Br,
                    org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit:
                      Ir,
                    org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed:
                      wr,
                    org_jetbrains_skia_GraphicsKt__1nPurgeFontCache: Dr,
                    org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache: Er,
                    org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches: Ar,
                    org_jetbrains_skia_Image__1nGetImageInfo: Lr,
                    org_jetbrains_skia_Image__1nMakeShader: zr,
                    org_jetbrains_skia_Image__1nPeekPixels: Vr,
                    org_jetbrains_skia_Image__1nMakeRaster: Hr,
                    org_jetbrains_skia_Image__1nMakeRasterData: Ur,
                    org_jetbrains_skia_Image__1nMakeFromBitmap: Or,
                    org_jetbrains_skia_Image__1nMakeFromPixmap: Wr,
                    org_jetbrains_skia_Image__1nMakeFromEncoded: Nr,
                    org_jetbrains_skia_Image__1nEncodeToData: $r,
                    org_jetbrains_skia_Image__1nPeekPixelsToPixmap: Kr,
                    org_jetbrains_skia_Image__1nScalePixels: qr,
                    org_jetbrains_skia_Image__1nReadPixelsBitmap: Xr,
                    org_jetbrains_skia_Image__1nReadPixelsPixmap: Yr,
                    org_jetbrains_skia_ImageFilter__1nMakeArithmetic: Qr,
                    org_jetbrains_skia_ImageFilter__1nMakeBlend: Jr,
                    org_jetbrains_skia_ImageFilter__1nMakeBlur: Zr,
                    org_jetbrains_skia_ImageFilter__1nMakeColorFilter: _t,
                    org_jetbrains_skia_ImageFilter__1nMakeCompose: at,
                    org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap: et,
                    org_jetbrains_skia_ImageFilter__1nMakeDropShadow: rt,
                    org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly: tt,
                    org_jetbrains_skia_ImageFilter__1nMakeImage: it,
                    org_jetbrains_skia_ImageFilter__1nMakeMagnifier: nt,
                    org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution: st,
                    org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform: ot,
                    org_jetbrains_skia_ImageFilter__1nMakeMerge: gt,
                    org_jetbrains_skia_ImageFilter__1nMakeOffset: kt,
                    org_jetbrains_skia_ImageFilter__1nMakeShader: lt,
                    org_jetbrains_skia_ImageFilter__1nMakePicture: bt,
                    org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader: jt,
                    org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray:
                      pt,
                    org_jetbrains_skia_ImageFilter__1nMakeTile: ht,
                    org_jetbrains_skia_ImageFilter__1nMakeDilate: ct,
                    org_jetbrains_skia_ImageFilter__1nMakeErode: dt,
                    org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse: ut,
                    org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse: mt,
                    org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse: St,
                    org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular:
                      ft,
                    org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular: Pt,
                    org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular: Gt,
                    org_jetbrains_skia_ManagedString__1nGetFinalizer: yt,
                    org_jetbrains_skia_ManagedString__1nMake: Ft,
                    org_jetbrains_skia_ManagedString__nStringSize: Ct,
                    org_jetbrains_skia_ManagedString__nStringData: xt,
                    org_jetbrains_skia_ManagedString__1nInsert: Mt,
                    org_jetbrains_skia_ManagedString__1nAppend: vt,
                    org_jetbrains_skia_ManagedString__1nRemoveSuffix: Tt,
                    org_jetbrains_skia_ManagedString__1nRemove: Rt,
                    org_jetbrains_skia_MaskFilter__1nMakeTable: Bt,
                    org_jetbrains_skia_MaskFilter__1nMakeBlur: It,
                    org_jetbrains_skia_MaskFilter__1nMakeShader: wt,
                    org_jetbrains_skia_MaskFilter__1nMakeGamma: Dt,
                    org_jetbrains_skia_MaskFilter__1nMakeClip: Et,
                    org_jetbrains_skia_Paint__1nGetFinalizer: At,
                    org_jetbrains_skia_Paint__1nMake: Lt,
                    org_jetbrains_skia_Paint__1nMakeClone: zt,
                    org_jetbrains_skia_Paint__1nEquals: Vt,
                    org_jetbrains_skia_Paint__1nReset: Ht,
                    org_jetbrains_skia_Paint__1nIsAntiAlias: Ut,
                    org_jetbrains_skia_Paint__1nSetAntiAlias: Ot,
                    org_jetbrains_skia_Paint__1nIsDither: Wt,
                    org_jetbrains_skia_Paint__1nSetDither: Nt,
                    org_jetbrains_skia_Paint__1nGetMode: $t,
                    org_jetbrains_skia_Paint__1nSetMode: Kt,
                    org_jetbrains_skia_Paint__1nGetColor: qt,
                    org_jetbrains_skia_Paint__1nGetColor4f: Xt,
                    org_jetbrains_skia_Paint__1nSetColor: Yt,
                    org_jetbrains_skia_Paint__1nSetColor4f: Qt,
                    org_jetbrains_skia_Paint__1nGetStrokeWidth: Jt,
                    org_jetbrains_skia_Paint__1nSetStrokeWidth: Zt,
                    org_jetbrains_skia_Paint__1nGetStrokeMiter: _i,
                    org_jetbrains_skia_Paint__1nSetStrokeMiter: ai,
                    org_jetbrains_skia_Paint__1nGetStrokeCap: ei,
                    org_jetbrains_skia_Paint__1nSetStrokeCap: ri,
                    org_jetbrains_skia_Paint__1nGetStrokeJoin: ti,
                    org_jetbrains_skia_Paint__1nSetStrokeJoin: ii,
                    org_jetbrains_skia_Paint__1nGetShader: ni,
                    org_jetbrains_skia_Paint__1nSetShader: si,
                    org_jetbrains_skia_Paint__1nGetColorFilter: oi,
                    org_jetbrains_skia_Paint__1nSetColorFilter: gi,
                    org_jetbrains_skia_Paint__1nGetBlendMode: ki,
                    org_jetbrains_skia_Paint__1nSetBlendMode: li,
                    org_jetbrains_skia_Paint__1nGetPathEffect: bi,
                    org_jetbrains_skia_Paint__1nSetPathEffect: ji,
                    org_jetbrains_skia_Paint__1nGetMaskFilter: pi,
                    org_jetbrains_skia_Paint__1nSetMaskFilter: hi,
                    org_jetbrains_skia_Paint__1nGetImageFilter: ci,
                    org_jetbrains_skia_Paint__1nSetImageFilter: di,
                    org_jetbrains_skia_Paint__1nHasNothingToDraw: ui,
                    org_jetbrains_skia_PaintFilterCanvas__1nMake: mi,
                    org_jetbrains_skia_PaintFilterCanvas__1nInit: Si,
                    org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint:
                      fi,
                    org_jetbrains_skia_Path__1nGetFinalizer: Pi,
                    org_jetbrains_skia_Path__1nMake: Gi,
                    org_jetbrains_skia_Path__1nEquals: yi,
                    org_jetbrains_skia_Path__1nReset: Fi,
                    org_jetbrains_skia_Path__1nIsVolatile: Ci,
                    org_jetbrains_skia_Path__1nSetVolatile: xi,
                    org_jetbrains_skia_Path__1nSwap: Mi,
                    org_jetbrains_skia_Path__1nGetGenerationId: vi,
                    org_jetbrains_skia_Path__1nMakeFromSVGString: Ti,
                    org_jetbrains_skia_Path__1nIsInterpolatable: Ri,
                    org_jetbrains_skia_Path__1nMakeLerp: Bi,
                    org_jetbrains_skia_Path__1nGetFillMode: Ii,
                    org_jetbrains_skia_Path__1nSetFillMode: wi,
                    org_jetbrains_skia_Path__1nIsConvex: Di,
                    org_jetbrains_skia_Path__1nIsOval: Ei,
                    org_jetbrains_skia_Path__1nIsRRect: Ai,
                    org_jetbrains_skia_Path__1nRewind: Li,
                    org_jetbrains_skia_Path__1nIsEmpty: zi,
                    org_jetbrains_skia_Path__1nIsLastContourClosed: Vi,
                    org_jetbrains_skia_Path__1nIsFinite: Hi,
                    org_jetbrains_skia_Path__1nIsLineDegenerate: Ui,
                    org_jetbrains_skia_Path__1nIsQuadDegenerate: Oi,
                    org_jetbrains_skia_Path__1nIsCubicDegenerate: Wi,
                    org_jetbrains_skia_Path__1nMaybeGetAsLine: Ni,
                    org_jetbrains_skia_Path__1nGetPointsCount: $i,
                    org_jetbrains_skia_Path__1nGetPoint: Ki,
                    org_jetbrains_skia_Path__1nGetPoints: qi,
                    org_jetbrains_skia_Path__1nCountVerbs: Xi,
                    org_jetbrains_skia_Path__1nGetVerbs: Yi,
                    org_jetbrains_skia_Path__1nApproximateBytesUsed: Qi,
                    org_jetbrains_skia_Path__1nGetBounds: Ji,
                    org_jetbrains_skia_Path__1nUpdateBoundsCache: Zi,
                    org_jetbrains_skia_Path__1nComputeTightBounds: _n,
                    org_jetbrains_skia_Path__1nConservativelyContainsRect: an,
                    org_jetbrains_skia_Path__1nIncReserve: en,
                    org_jetbrains_skia_Path__1nMoveTo: rn,
                    org_jetbrains_skia_Path__1nRMoveTo: tn,
                    org_jetbrains_skia_Path__1nLineTo: nn,
                    org_jetbrains_skia_Path__1nRLineTo: sn,
                    org_jetbrains_skia_Path__1nQuadTo: on,
                    org_jetbrains_skia_Path__1nRQuadTo: gn,
                    org_jetbrains_skia_Path__1nConicTo: kn,
                    org_jetbrains_skia_Path__1nRConicTo: ln,
                    org_jetbrains_skia_Path__1nCubicTo: bn,
                    org_jetbrains_skia_Path__1nRCubicTo: jn,
                    org_jetbrains_skia_Path__1nArcTo: pn,
                    org_jetbrains_skia_Path__1nTangentArcTo: hn,
                    org_jetbrains_skia_Path__1nEllipticalArcTo: cn,
                    org_jetbrains_skia_Path__1nREllipticalArcTo: dn,
                    org_jetbrains_skia_Path__1nClosePath: un,
                    org_jetbrains_skia_Path__1nConvertConicToQuads: mn,
                    org_jetbrains_skia_Path__1nIsRect: Sn,
                    org_jetbrains_skia_Path__1nAddRect: fn,
                    org_jetbrains_skia_Path__1nAddOval: Pn,
                    org_jetbrains_skia_Path__1nAddCircle: Gn,
                    org_jetbrains_skia_Path__1nAddArc: yn,
                    org_jetbrains_skia_Path__1nAddRRect: Fn,
                    org_jetbrains_skia_Path__1nAddPoly: Cn,
                    org_jetbrains_skia_Path__1nAddPath: xn,
                    org_jetbrains_skia_Path__1nAddPathOffset: Mn,
                    org_jetbrains_skia_Path__1nAddPathTransform: vn,
                    org_jetbrains_skia_Path__1nReverseAddPath: Tn,
                    org_jetbrains_skia_Path__1nOffset: Rn,
                    org_jetbrains_skia_Path__1nTransform: Bn,
                    org_jetbrains_skia_Path__1nGetLastPt: In,
                    org_jetbrains_skia_Path__1nSetLastPt: wn,
                    org_jetbrains_skia_Path__1nGetSegmentMasks: Dn,
                    org_jetbrains_skia_Path__1nContains: En,
                    org_jetbrains_skia_Path__1nDump: An,
                    org_jetbrains_skia_Path__1nDumpHex: Ln,
                    org_jetbrains_skia_Path__1nSerializeToBytes: zn,
                    org_jetbrains_skia_Path__1nMakeCombining: Vn,
                    org_jetbrains_skia_Path__1nMakeFromBytes: Hn,
                    org_jetbrains_skia_Path__1nIsValid: Un,
                    org_jetbrains_skia_PathEffect__1nMakeCompose: On,
                    org_jetbrains_skia_PathEffect__1nMakeSum: Wn,
                    org_jetbrains_skia_PathEffect__1nMakePath1D: Nn,
                    org_jetbrains_skia_PathEffect__1nMakePath2D: $n,
                    org_jetbrains_skia_PathEffect__1nMakeLine2D: Kn,
                    org_jetbrains_skia_PathEffect__1nMakeCorner: qn,
                    org_jetbrains_skia_PathEffect__1nMakeDash: Xn,
                    org_jetbrains_skia_PathEffect__1nMakeDiscrete: Yn,
                    org_jetbrains_skia_PathMeasure__1nGetFinalizer: Qn,
                    org_jetbrains_skia_PathMeasure__1nMake: Jn,
                    org_jetbrains_skia_PathMeasure__1nMakePath: Zn,
                    org_jetbrains_skia_PathMeasure__1nSetPath: _s,
                    org_jetbrains_skia_PathMeasure__1nGetLength: as,
                    org_jetbrains_skia_PathMeasure__1nGetPosition: es,
                    org_jetbrains_skia_PathMeasure__1nGetTangent: rs,
                    org_jetbrains_skia_PathMeasure__1nGetRSXform: ts,
                    org_jetbrains_skia_PathMeasure__1nGetMatrix: is,
                    org_jetbrains_skia_PathMeasure__1nGetSegment: ns,
                    org_jetbrains_skia_PathMeasure__1nIsClosed: ss,
                    org_jetbrains_skia_PathMeasure__1nNextContour: os,
                    org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer: gs,
                    org_jetbrains_skia_PathSegmentIterator__1nNext: ks,
                    org_jetbrains_skia_PathSegmentIterator__1nMake: ls,
                    org_jetbrains_skia_PathUtils__1nFillPathWithPaint: bs,
                    org_jetbrains_skia_PathUtils__1nFillPathWithPaintCull: js,
                    org_jetbrains_skia_Picture__1nMakeFromData: ps,
                    org_jetbrains_skia_Picture__1nGetCullRect: hs,
                    org_jetbrains_skia_Picture__1nGetUniqueId: cs,
                    org_jetbrains_skia_Picture__1nSerializeToData: ds,
                    org_jetbrains_skia_Picture__1nMakePlaceholder: us,
                    org_jetbrains_skia_Picture__1nGetApproximateOpCount: ms,
                    org_jetbrains_skia_Picture__1nGetApproximateBytesUsed: Ss,
                    org_jetbrains_skia_Picture__1nMakeShader: fs,
                    org_jetbrains_skia_Picture__1nPlayback: Ps,
                    org_jetbrains_skia_PictureRecorder__1nMake: Gs,
                    org_jetbrains_skia_PictureRecorder__1nGetFinalizer: ys,
                    org_jetbrains_skia_PictureRecorder__1nBeginRecording: Fs,
                    org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas:
                      Cs,
                    org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture:
                      xs,
                    org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull:
                      Ms,
                    org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable:
                      vs,
                    org_jetbrains_skia_PixelRef__1nGetRowBytes: Ts,
                    org_jetbrains_skia_PixelRef__1nGetGenerationId: Rs,
                    org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged: Bs,
                    org_jetbrains_skia_PixelRef__1nIsImmutable: Is,
                    org_jetbrains_skia_PixelRef__1nSetImmutable: ws,
                    org_jetbrains_skia_PixelRef__1nGetWidth: Ds,
                    org_jetbrains_skia_PixelRef__1nGetHeight: Es,
                    org_jetbrains_skia_Pixmap__1nGetFinalizer: As,
                    org_jetbrains_skia_Pixmap__1nReset: Ls,
                    org_jetbrains_skia_Pixmap__1nExtractSubset: zs,
                    org_jetbrains_skia_Pixmap__1nGetRowBytes: Vs,
                    org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels: Hs,
                    org_jetbrains_skia_Pixmap__1nComputeByteSize: Us,
                    org_jetbrains_skia_Pixmap__1nComputeIsOpaque: Os,
                    org_jetbrains_skia_Pixmap__1nGetColor: Ws,
                    org_jetbrains_skia_Pixmap__1nMakeNull: Ns,
                    org_jetbrains_skia_Pixmap__1nMake: $s,
                    org_jetbrains_skia_Pixmap__1nResetWithInfo: Ks,
                    org_jetbrains_skia_Pixmap__1nSetColorSpace: qs,
                    org_jetbrains_skia_Pixmap__1nGetInfo: Xs,
                    org_jetbrains_skia_Pixmap__1nGetAddr: Ys,
                    org_jetbrains_skia_Pixmap__1nGetAlphaF: Qs,
                    org_jetbrains_skia_Pixmap__1nGetAddrAt: Js,
                    org_jetbrains_skia_Pixmap__1nReadPixels: Zs,
                    org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint: _o,
                    org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap: ao,
                    org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint:
                      eo,
                    org_jetbrains_skia_Pixmap__1nScalePixels: ro,
                    org_jetbrains_skia_Pixmap__1nErase: to,
                    org_jetbrains_skia_Pixmap__1nEraseSubset: io,
                    org_jetbrains_skia_Region__1nMake: no,
                    org_jetbrains_skia_Region__1nGetFinalizer: so,
                    org_jetbrains_skia_Region__1nIsEmpty: oo,
                    org_jetbrains_skia_Region__1nIsRect: go,
                    org_jetbrains_skia_Region__1nGetBounds: ko,
                    org_jetbrains_skia_Region__1nSet: lo,
                    org_jetbrains_skia_Region__1nIsComplex: bo,
                    org_jetbrains_skia_Region__1nComputeRegionComplexity: jo,
                    org_jetbrains_skia_Region__1nGetBoundaryPath: po,
                    org_jetbrains_skia_Region__1nSetEmpty: ho,
                    org_jetbrains_skia_Region__1nSetRect: co,
                    org_jetbrains_skia_Region__1nSetRects: uo,
                    org_jetbrains_skia_Region__1nSetRegion: mo,
                    org_jetbrains_skia_Region__1nSetPath: So,
                    org_jetbrains_skia_Region__1nIntersectsIRect: fo,
                    org_jetbrains_skia_Region__1nIntersectsRegion: Po,
                    org_jetbrains_skia_Region__1nContainsIPoint: Go,
                    org_jetbrains_skia_Region__1nContainsIRect: yo,
                    org_jetbrains_skia_Region__1nContainsRegion: Fo,
                    org_jetbrains_skia_Region__1nQuickContains: Co,
                    org_jetbrains_skia_Region__1nQuickRejectIRect: xo,
                    org_jetbrains_skia_Region__1nQuickRejectRegion: Mo,
                    org_jetbrains_skia_Region__1nTranslate: vo,
                    org_jetbrains_skia_Region__1nOpIRect: To,
                    org_jetbrains_skia_Region__1nOpRegion: Ro,
                    org_jetbrains_skia_Region__1nOpIRectRegion: Bo,
                    org_jetbrains_skia_Region__1nOpRegionIRect: Io,
                    org_jetbrains_skia_Region__1nOpRegionRegion: wo,
                    org_jetbrains_skia_RuntimeEffect__1nMakeShader: Do,
                    org_jetbrains_skia_RuntimeEffect__1nMakeForShader: Eo,
                    org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter: Ao,
                    org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr: Lo,
                    org_jetbrains_skia_RuntimeEffect__1Result_nGetError: zo,
                    org_jetbrains_skia_RuntimeEffect__1Result_nDestroy: Vo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect:
                      Ho,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer: Uo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt: Oo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2: Wo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3: No,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4: $o,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat: Ko,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2:
                      qo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3:
                      Xo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4:
                      Yo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22:
                      Qo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33:
                      Jo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44:
                      Zo,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader: _g,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter:
                      ag,
                    org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader: eg,
                    org_jetbrains_skia_Shader__1nMakeEmpty: rg,
                    org_jetbrains_skia_Shader__1nMakeWithColorFilter: tg,
                    org_jetbrains_skia_Shader__1nMakeLinearGradient: ig,
                    org_jetbrains_skia_Shader__1nMakeLinearGradientCS: ng,
                    org_jetbrains_skia_Shader__1nMakeRadialGradient: sg,
                    org_jetbrains_skia_Shader__1nMakeRadialGradientCS: og,
                    org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient:
                      gg,
                    org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS:
                      kg,
                    org_jetbrains_skia_Shader__1nMakeSweepGradient: lg,
                    org_jetbrains_skia_Shader__1nMakeSweepGradientCS: bg,
                    org_jetbrains_skia_Shader__1nMakeFractalNoise: jg,
                    org_jetbrains_skia_Shader__1nMakeTurbulence: pg,
                    org_jetbrains_skia_Shader__1nMakeColor: hg,
                    org_jetbrains_skia_Shader__1nMakeColorCS: cg,
                    org_jetbrains_skia_Shader__1nMakeBlend: dg,
                    org_jetbrains_skia_ShadowUtils__1nDrawShadow: ug,
                    org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor:
                      mg,
                    org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor: Sg,
                    org_jetbrains_skia_StdVectorDecoder__1nGetArraySize: fg,
                    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray: Pg,
                    org_jetbrains_skia_StdVectorDecoder__1nReleaseElement: Gg,
                    org_jetbrains_skia_Surface__1nGetWidth: yg,
                    org_jetbrains_skia_Surface__1nGetHeight: Fg,
                    org_jetbrains_skia_Surface__1nGetImageInfo: Cg,
                    org_jetbrains_skia_Surface__1nReadPixels: xg,
                    org_jetbrains_skia_Surface__1nWritePixels: Mg,
                    org_jetbrains_skia_Surface__1nFlush: vg,
                    org_jetbrains_skia_Surface__1nMakeRasterDirect: Tg,
                    org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap:
                      Rg,
                    org_jetbrains_skia_Surface__1nMakeRaster: Bg,
                    org_jetbrains_skia_Surface__1nMakeRasterN32Premul: Ig,
                    org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget:
                      wg,
                    org_jetbrains_skia_Surface__1nMakeFromMTKView: Dg,
                    org_jetbrains_skia_Surface__1nMakeRenderTarget: Eg,
                    org_jetbrains_skia_Surface__1nMakeNull: Ag,
                    org_jetbrains_skia_Surface__1nGenerationId: Lg,
                    org_jetbrains_skia_Surface__1nNotifyContentWillChange: zg,
                    org_jetbrains_skia_Surface__1nGetRecordingContext: Vg,
                    org_jetbrains_skia_Surface__1nGetCanvas: Hg,
                    org_jetbrains_skia_Surface__1nMakeSurfaceI: Ug,
                    org_jetbrains_skia_Surface__1nMakeSurface: Og,
                    org_jetbrains_skia_Surface__1nMakeImageSnapshot: Wg,
                    org_jetbrains_skia_Surface__1nMakeImageSnapshotR: Ng,
                    org_jetbrains_skia_Surface__1nDraw: $g,
                    org_jetbrains_skia_Surface__1nPeekPixels: Kg,
                    org_jetbrains_skia_Surface__1nReadPixelsToPixmap: qg,
                    org_jetbrains_skia_Surface__1nWritePixelsFromPixmap: Xg,
                    org_jetbrains_skia_Surface__1nFlushAndSubmit: Yg,
                    org_jetbrains_skia_Surface__1nUnique: Qg,
                    org_jetbrains_skia_TextBlob__1nGetFinalizer: Jg,
                    org_jetbrains_skia_TextBlob__1nGetUniqueId: Zg,
                    org_jetbrains_skia_TextBlob__1nSerializeToData: _k,
                    org_jetbrains_skia_TextBlob__1nMakeFromData: ak,
                    org_jetbrains_skia_TextBlob__1nBounds: ek,
                    org_jetbrains_skia_TextBlob__1nGetInterceptsLength: rk,
                    org_jetbrains_skia_TextBlob__1nGetIntercepts: tk,
                    org_jetbrains_skia_TextBlob__1nMakeFromPosH: ik,
                    org_jetbrains_skia_TextBlob__1nMakeFromPos: nk,
                    org_jetbrains_skia_TextBlob__1nMakeFromRSXform: sk,
                    org_jetbrains_skia_TextBlob__1nGetGlyphsLength: ok,
                    org_jetbrains_skia_TextBlob__1nGetGlyphs: gk,
                    org_jetbrains_skia_TextBlob__1nGetPositionsLength: kk,
                    org_jetbrains_skia_TextBlob__1nGetPositions: lk,
                    org_jetbrains_skia_TextBlob__1nGetClustersLength: bk,
                    org_jetbrains_skia_TextBlob__1nGetClusters: jk,
                    org_jetbrains_skia_TextBlob__1nGetTightBounds: pk,
                    org_jetbrains_skia_TextBlob__1nGetBlockBounds: hk,
                    org_jetbrains_skia_TextBlob__1nGetFirstBaseline: ck,
                    org_jetbrains_skia_TextBlob__1nGetLastBaseline: dk,
                    org_jetbrains_skia_TextBlob_Iter__1nCreate: uk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer: mk,
                    org_jetbrains_skia_TextBlob_Iter__1nFetch: Sk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetTypeface: fk,
                    org_jetbrains_skia_TextBlob_Iter__1nHasNext: Pk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount: Gk,
                    org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs: yk,
                    org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer: Fk,
                    org_jetbrains_skia_TextBlobBuilder__1nMake: Ck,
                    org_jetbrains_skia_TextBlobBuilder__1nBuild: xk,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRun: Mk,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH: vk,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos: Tk,
                    org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform: Rk,
                    org_jetbrains_skia_TextLine__1nGetFinalizer: Bk,
                    org_jetbrains_skia_TextLine__1nGetWidth: Ik,
                    org_jetbrains_skia_TextLine__1nGetHeight: wk,
                    org_jetbrains_skia_TextLine__1nGetGlyphsLength: Dk,
                    org_jetbrains_skia_TextLine__1nGetGlyphs: Ek,
                    org_jetbrains_skia_TextLine__1nGetPositions: Ak,
                    org_jetbrains_skia_TextLine__1nGetAscent: Lk,
                    org_jetbrains_skia_TextLine__1nGetCapHeight: zk,
                    org_jetbrains_skia_TextLine__1nGetXHeight: Vk,
                    org_jetbrains_skia_TextLine__1nGetDescent: Hk,
                    org_jetbrains_skia_TextLine__1nGetLeading: Uk,
                    org_jetbrains_skia_TextLine__1nGetTextBlob: Ok,
                    org_jetbrains_skia_TextLine__1nGetRunPositions: Wk,
                    org_jetbrains_skia_TextLine__1nGetRunPositionsCount: Nk,
                    org_jetbrains_skia_TextLine__1nGetBreakPositionsCount: $k,
                    org_jetbrains_skia_TextLine__1nGetBreakPositions: Kk,
                    org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount: qk,
                    org_jetbrains_skia_TextLine__1nGetBreakOffsets: Xk,
                    org_jetbrains_skia_TextLine__1nGetOffsetAtCoord: Yk,
                    org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord: Qk,
                    org_jetbrains_skia_TextLine__1nGetCoordAtOffset: Jk,
                    org_jetbrains_skia_Typeface__1nGetUniqueId: Zk,
                    org_jetbrains_skia_Typeface__1nEquals: _l,
                    org_jetbrains_skia_Typeface__1nMakeDefault: al,
                    org_jetbrains_skia_Typeface__1nGetUTF32Glyphs: el,
                    org_jetbrains_skia_Typeface__1nGetUTF32Glyph: rl,
                    org_jetbrains_skia_Typeface__1nGetBounds: tl,
                    org_jetbrains_skia_Typeface__1nGetFontStyle: il,
                    org_jetbrains_skia_Typeface__1nIsFixedPitch: nl,
                    org_jetbrains_skia_Typeface__1nGetVariationsCount: sl,
                    org_jetbrains_skia_Typeface__1nGetVariations: ol,
                    org_jetbrains_skia_Typeface__1nGetVariationAxesCount: gl,
                    org_jetbrains_skia_Typeface__1nGetVariationAxes: kl,
                    org_jetbrains_skia_Typeface__1nMakeFromName: ll,
                    org_jetbrains_skia_Typeface__1nMakeFromFile: bl,
                    org_jetbrains_skia_Typeface__1nMakeFromData: jl,
                    org_jetbrains_skia_Typeface__1nMakeClone: pl,
                    org_jetbrains_skia_Typeface__1nGetGlyphsCount: hl,
                    org_jetbrains_skia_Typeface__1nGetTablesCount: cl,
                    org_jetbrains_skia_Typeface__1nGetTableTagsCount: dl,
                    org_jetbrains_skia_Typeface__1nGetTableTags: ul,
                    org_jetbrains_skia_Typeface__1nGetTableSize: ml,
                    org_jetbrains_skia_Typeface__1nGetTableData: Sl,
                    org_jetbrains_skia_Typeface__1nGetUnitsPerEm: fl,
                    org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments:
                      Pl,
                    org_jetbrains_skia_Typeface__1nGetFamilyNames: Gl,
                    org_jetbrains_skia_Typeface__1nGetFamilyName: yl,
                    org_jetbrains_skia_U16String__1nGetFinalizer: Fl,
                    org_jetbrains_skia_icu_Unicode_charDirection: Cl,
                    org_jetbrains_skia_paragraph_FontCollection__1nMake: xl,
                    org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount:
                      Ml,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager:
                      vl,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager:
                      Tl,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager:
                      Rl,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager:
                      Bl,
                    org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager:
                      Il,
                    org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces:
                      wl,
                    org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar:
                      Dl,
                    org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback:
                      El,
                    org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback:
                      Al,
                    org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache:
                      Ll,
                    org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize:
                      zl,
                    org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray:
                      Vl,
                    org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement:
                      Hl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer: Ul,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth: Ol,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetHeight: Wl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth:
                      Nl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth:
                      $l,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline:
                      Kl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline:
                      ql,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine:
                      Xl,
                    org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines:
                      Yl,
                    org_jetbrains_skia_paragraph_Paragraph__1nLayout: Ql,
                    org_jetbrains_skia_paragraph_Paragraph__1nPaint: Jl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange:
                      Zl,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders:
                      _b,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate:
                      ab,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary:
                      eb,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics:
                      rb,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber: tb,
                    org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty: ib,
                    org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount:
                      nb,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment:
                      sb,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize:
                      ob,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint:
                      gb,
                    org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint:
                      kb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer:
                      lb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake: bb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle:
                      jb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle:
                      pb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText:
                      hb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder:
                      cb,
                    org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild: db,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon: ub,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nReset: mb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph:
                      Sb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph:
                      fb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics:
                      Pb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled:
                      Gb,
                    org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount: yb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer:
                      Fb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nMake: Cb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight:
                      xb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals: Mb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle:
                      vb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle:
                      Tb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle:
                      Rb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle:
                      Bb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection:
                      Ib,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection:
                      wb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment:
                      Db,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment:
                      Eb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount:
                      Ab,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount:
                      Lb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis:
                      zb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis:
                      Vb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight:
                      Hb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode:
                      Ub,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode:
                      Ob,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment:
                      Wb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled:
                      Nb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting:
                      $b,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings:
                      Kb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging:
                      qb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting:
                      Xb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel:
                      Yb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent:
                      Qb,
                    org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent:
                      Jb,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer: Zb,
                    org_jetbrains_skia_paragraph_StrutStyle__1nMake: _j,
                    org_jetbrains_skia_paragraph_StrutStyle__1nEquals: aj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight: ej,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight: rj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled: tj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies:
                      ij,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies:
                      nj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle: sj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle: oj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize: gj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize: kj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading: lj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading: bj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled: jj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced:
                      pj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced:
                      hj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden:
                      cj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden:
                      dj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading:
                      uj,
                    org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading:
                      mj,
                    org_jetbrains_skia_paragraph_TextBox__1nGetArraySize: Sj,
                    org_jetbrains_skia_paragraph_TextBox__1nDisposeArray: fj,
                    org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement: Pj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer: Gj,
                    org_jetbrains_skia_paragraph_TextStyle__1nMake: yj,
                    org_jetbrains_skia_paragraph_TextStyle__1nEquals: Fj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle: Cj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle: xj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize: Mj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize: vj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies:
                      Tj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetHeight: Rj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetHeight: Bj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading:
                      Ij,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading:
                      wj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift:
                      Dj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift:
                      Ej,
                    org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals:
                      Aj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetColor: Lj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetColor: zj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetForeground: Vj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetForeground: Hj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetBackground: Uj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetBackground: Oj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle:
                      Wj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle:
                      Nj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount:
                      $j,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetShadows: Kj,
                    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow: qj,
                    org_jetbrains_skia_paragraph_TextStyle__1nClearShadows: Xj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures:
                      Yj,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize:
                      Qj,
                    org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature:
                      Jj,
                    org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures:
                      Zj,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies:
                      _p,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing:
                      ap,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing:
                      ep,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing:
                      rp,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing:
                      tp,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface: ip,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface: np,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetLocale: sp,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetLocale: op,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode:
                      gp,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode:
                      kp,
                    org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics:
                      lp,
                    org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder: bp,
                    org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder:
                      jp,
                    org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake:
                      pp,
                    org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface:
                      hp,
                    org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake: cp,
                    org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont:
                      dp,
                    org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake:
                      up,
                    org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag:
                      mp,
                    org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake: Sp,
                    org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel:
                      fp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer:
                      Pp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume: Gp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun:
                      yp,
                    org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd: Fp,
                    org_jetbrains_skia_shaper_Shaper__1nGetFinalizer: Cp,
                    org_jetbrains_skia_shaper_Shaper__1nMake: xp,
                    org_jetbrains_skia_shaper_Shaper__1nMakePrimitive: Mp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper:
                      vp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap: Tp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder:
                      Rp,
                    org_jetbrains_skia_shaper_Shaper__1nMakeCoreText: Bp,
                    org_jetbrains_skia_shaper_Shaper__1nShapeBlob: Ip,
                    org_jetbrains_skia_shaper_Shaper__1nShapeLine: wp,
                    org_jetbrains_skia_shaper_Shaper__1nShape: Dp,
                    org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer:
                      Ep,
                    org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator:
                      Ap,
                    org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator:
                      Lp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate: zp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer:
                      Vp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit: Hp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs: Up,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters:
                      Op,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions:
                      Wp,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset: Np,
                    org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo:
                      $p,
                    org_jetbrains_skia_TextBlobBuilderRunHandler__1nGetFinalizer:
                      Kp,
                    org_jetbrains_skia_TextBlobBuilderRunHandler__1nMake: qp,
                    org_jetbrains_skia_TextBlobBuilderRunHandler__1nMakeBlob:
                      Xp,
                    org_jetbrains_skia_skottie_Animation__1nGetFinalizer: Yp,
                    org_jetbrains_skia_skottie_Animation__1nMakeFromString: Qp,
                    org_jetbrains_skia_skottie_Animation__1nMakeFromFile: Jp,
                    org_jetbrains_skia_skottie_Animation__1nMakeFromData: Zp,
                    org_jetbrains_skia_skottie_Animation__1nRender: _h,
                    org_jetbrains_skia_skottie_Animation__1nSeek: ah,
                    org_jetbrains_skia_skottie_Animation__1nSeekFrame: eh,
                    org_jetbrains_skia_skottie_Animation__1nSeekFrameTime: rh,
                    org_jetbrains_skia_skottie_Animation__1nGetDuration: th,
                    org_jetbrains_skia_skottie_Animation__1nGetFPS: ih,
                    org_jetbrains_skia_skottie_Animation__1nGetInPoint: nh,
                    org_jetbrains_skia_skottie_Animation__1nGetOutPoint: sh,
                    org_jetbrains_skia_skottie_Animation__1nGetVersion: oh,
                    org_jetbrains_skia_skottie_Animation__1nGetSize: gh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer:
                      kh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nMake: lh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager:
                      bh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger:
                      jh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString:
                      ph,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile:
                      hh,
                    org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData:
                      ch,
                    org_jetbrains_skia_skottie_Logger__1nMake: dh,
                    org_jetbrains_skia_skottie_Logger__1nInit: uh,
                    org_jetbrains_skia_skottie_Logger__1nGetLogMessage: mh,
                    org_jetbrains_skia_skottie_Logger__1nGetLogJson: Sh,
                    org_jetbrains_skia_skottie_Logger__1nGetLogLevel: fh,
                    org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer:
                      Ph,
                    org_jetbrains_skia_sksg_InvalidationController_nMake: Gh,
                    org_jetbrains_skia_sksg_InvalidationController_nInvalidate:
                      yh,
                    org_jetbrains_skia_sksg_InvalidationController_nGetBounds:
                      Fh,
                    org_jetbrains_skia_sksg_InvalidationController_nReset: Ch,
                    org_jetbrains_skia_svg_SVGCanvasKt__1nMake: xh,
                    org_jetbrains_skia_svg_SVGDOM__1nMakeFromData: Mh,
                    org_jetbrains_skia_svg_SVGDOM__1nGetRoot: vh,
                    org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize: Th,
                    org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize: Rh,
                    org_jetbrains_skia_svg_SVGDOM__1nRender: Bh,
                    org_jetbrains_skia_svg_SVGNode__1nGetTag: Ih,
                    org_jetbrains_skia_svg_SVGSVG__1nGetX: wh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetY: Dh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetWidth: Eh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetHeight: Ah,
                    org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio: Lh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetViewBox: zh,
                    org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize: Vh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetX: Hh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetY: Uh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetWidth: Oh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetHeight: Wh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio: Nh,
                    org_jetbrains_skia_svg_SVGSVG__1nSetViewBox: $h,
                    org_jetbrains_skia_impl_Managed__invokeFinalizer: Kh,
                    malloc: qh,
                    free: Xh,
                    org_jetbrains_skia_impl_RefCnt__getFinalizer: Yh,
                    org_jetbrains_skia_impl_RefCnt__getRefCount: Qh,
                    skia_memSetByte: Jh,
                    skia_memGetByte: Zh,
                    skia_memSetChar: _c,
                    skia_memGetChar: ac,
                    skia_memSetShort: ec,
                    skia_memGetShort: rc,
                    skia_memSetInt: tc,
                    skia_memGetInt: ic,
                    skia_memSetFloat: nc,
                    skia_memGetFloat: sc,
                    skia_memSetDouble: oc,
                    skia_memGetDouble: gc,
                  } = b.wasmExports;
                r();
              } catch (_) {
                r(_);
              }
              var i;
            },
            1,
          );
        },
      },
      i = {};
    function n(_) {
      var a = i[_];
      if (void 0 !== a) return a.exports;
      var e = (i[_] = { exports: {} });
      return t[_](e, e.exports, n), e.exports;
    }
    return (
      (n.m = t),
      (_ =
        "function" == typeof Symbol
          ? Symbol("webpack queues")
          : "__webpack_queues__"),
      (a =
        "function" == typeof Symbol
          ? Symbol("webpack exports")
          : "__webpack_exports__"),
      (e =
        "function" == typeof Symbol
          ? Symbol("webpack error")
          : "__webpack_error__"),
      (r = (_) => {
        _ &&
          _.d < 1 &&
          ((_.d = 1),
          _.forEach((_) => _.r--),
          _.forEach((_) => (_.r-- ? _.r++ : _())));
      }),
      (n.a = (t, i, n) => {
        var s;
        n && ((s = []).d = -1);
        var o,
          g,
          k,
          l = new Set(),
          b = t.exports,
          j = new Promise((_, a) => {
            (k = a), (g = _);
          });
        (j[a] = b),
          (j[_] = (_) => (s && _(s), l.forEach(_), j.catch((_) => {}))),
          (t.exports = j),
          i(
            (t) => {
              var i;
              o = ((t) =>
                t.map((t) => {
                  if (null !== t && "object" == typeof t) {
                    if (t[_]) return t;
                    if (t.then) {
                      var i = [];
                      (i.d = 0),
                        t.then(
                          (_) => {
                            (n[a] = _), r(i);
                          },
                          (_) => {
                            (n[e] = _), r(i);
                          },
                        );
                      var n = {};
                      return (n[_] = (_) => _(i)), n;
                    }
                  }
                  var s = {};
                  return (s[_] = (_) => {}), (s[a] = t), s;
                }))(t);
              var n = () =>
                  o.map((_) => {
                    if (_[e]) throw _[e];
                    return _[a];
                  }),
                g = new Promise((a) => {
                  (i = () => a(n)).r = 0;
                  var e = (_) =>
                    _ !== s &&
                    !l.has(_) &&
                    (l.add(_), _ && !_.d && (i.r++, _.push(i)));
                  o.map((a) => a[_](e));
                });
              return i.r ? g : n();
            },
            (_) => (_ ? k((j[e] = _)) : g(b), r(s)),
          ),
          s && s.d < 0 && (s.d = 0);
      }),
      (n.d = (_, a) => {
        for (var e in a)
          n.o(a, e) &&
            !n.o(_, e) &&
            Object.defineProperty(_, e, { enumerable: !0, get: a[e] });
      }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (_) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.o = (_, a) => Object.prototype.hasOwnProperty.call(_, a)),
      (n.r = (_) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(_, "__esModule", { value: !0 });
      }),
      (() => {
        var _;
        n.g.importScripts && (_ = n.g.location + "");
        var a = n.g.document;
        if (!_ && a && (a.currentScript && (_ = a.currentScript.src), !_)) {
          var e = a.getElementsByTagName("script");
          if (e.length)
            for (
              var r = e.length - 1;
              r > -1 && (!_ || !/^http(s?):/.test(_));

            )
              _ = e[r--].src;
        }
        if (!_)
          throw new Error(
            "Automatic publicPath is not supported in this browser",
          );
        (_ = _.replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/")),
          (n.p = _);
      })(),
      (n.b = document.baseURI || self.location.href),
      n(735)
    );
  })(),
);
//# sourceMappingURL=composeApp.js.map
