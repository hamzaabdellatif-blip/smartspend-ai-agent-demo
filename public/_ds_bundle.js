/* @ds-bundle: {"format":4,"namespace":"SmartSpendDesignSystem_d4f7b4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ButtonGroup","sourcePath":"components/core/ButtonGroup.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"IconTextSet","sourcePath":"components/core/IconTextSet.jsx"},{"name":"Link","sourcePath":"components/core/Link.jsx"},{"name":"PageTitle","sourcePath":"components/core/PageTitle.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data/AvatarGroup.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"BadgeOnlineBase","sourcePath":"components/data/BadgeOnlineBase.jsx"},{"name":"Grade","sourcePath":"components/data/Grade.jsx"},{"name":"KpiCard","sourcePath":"components/data/KpiCard.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Star","sourcePath":"components/data/Star.jsx"},{"name":"StatusBadge","sourcePath":"components/data/StatusBadge.jsx"},{"name":"SummaryCard","sourcePath":"components/data/SummaryCard.jsx"},{"name":"TableCell","sourcePath":"components/data/TableCell.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Breakdown","sourcePath":"components/forms/Breakdown.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"InputChip","sourcePath":"components/forms/InputChip.jsx"},{"name":"InputText","sourcePath":"components/forms/InputText.jsx"},{"name":"ListElement","sourcePath":"components/forms/ListElement.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"SegmentedControls","sourcePath":"components/navigation/SegmentedControls.jsx"},{"name":"SideMenu","sourcePath":"components/navigation/SideMenu.jsx"},{"name":"Tab","sourcePath":"components/navigation/Tab.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Button.jsx":"8bfd2a3858c0","components/core/ButtonGroup.jsx":"f09b37ebf50e","components/core/Icon.jsx":"f594768d19b3","components/core/IconButton.jsx":"63753552076d","components/core/IconTextSet.jsx":"8086d3f90264","components/core/Link.jsx":"d5fabf798dcc","components/core/PageTitle.jsx":"b5f4cdf7616c","components/data/Avatar.jsx":"61aa0e772c65","components/data/AvatarGroup.jsx":"5e3821d53a3c","components/data/Badge.jsx":"696e0c354590","components/data/BadgeOnlineBase.jsx":"225f3f091587","components/data/Grade.jsx":"5e72d47f7b9f","components/data/KpiCard.jsx":"1dc4f8d06fe4","components/data/Pagination.jsx":"888d2fd34cb5","components/data/Star.jsx":"28f6ffa1bbc0","components/data/StatusBadge.jsx":"fa0b5dbd8944","components/data/SummaryCard.jsx":"49c7d859b8a7","components/data/TableCell.jsx":"983459c2661e","components/data/Tag.jsx":"eb6db9fbc5f8","components/feedback/Alert.jsx":"4648f49bf4bf","components/forms/Breakdown.jsx":"acf37525c259","components/forms/Checkbox.jsx":"a877842b88c0","components/forms/Input.jsx":"a11f50bd8087","components/forms/InputChip.jsx":"367ecf3b8667","components/forms/InputText.jsx":"01b98d1833b3","components/forms/ListElement.jsx":"3b0519785814","components/forms/SearchInput.jsx":"0bb98425e8e5","components/forms/Switch.jsx":"8517e734d307","components/forms/TextField.jsx":"fb2f2ec38870","components/forms/Toggle.jsx":"35938c16f07d","components/navigation/SegmentedControls.jsx":"23d63212bf2d","components/navigation/SideMenu.jsx":"d1ec0602e842","components/navigation/Tab.jsx":"6e7acfa342a8","components/navigation/TopBar.jsx":"455e2d404dde","ui_kits/ai-agent/charts.jsx":"408bf15a95af","ui_kits/ai-agent/data.jsx":"a617f5b65261","ui_kits/ai-agent/history-insights.jsx":"0568d0287f86","ui_kits/ai-agent/lead.jsx":"e8fb0403aa42","ui_kits/ai-agent/live.jsx":"c938ca7f0f41","ui_kits/ai-agent/logo.js":"72a95ee1b256","ui_kits/ai-agent/overview.jsx":"db81baca36c4","ui_kits/ai-agent/pipeline.jsx":"1d7d65710a6f","ui_kits/ai-agent/shell.jsx":"d43e34858369","ui_kits/ai-agent/tweaks-panel.jsx":"d259e3a86f73","ui_kits/portal/CampaignList.jsx":"a1c6fbb6b1dc","ui_kits/portal/CreateIO.jsx":"20412de1c5e4","ui_kits/portal/Overview.jsx":"5c5747fdeaf3","ui_kits/portal/Shell.jsx":"636e002aa409"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SmartSpendDesignSystem_d4f7b4 = window.SmartSpendDesignSystem_d4f7b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/ButtonGroup.jsx
try { (() => {
function ButtonGroup({
  items = ['Day', 'Week', 'Month'],
  value,
  onChange,
  activeColor = 'var(--accents-brand)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      borderRadius: 12,
      border: '1px solid var(--border-default)',
      overflow: 'hidden',
      ...style
    }
  }, items.map((it, i) => {
    const on = value === i || value === it;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        alignSelf: 'stretch',
        backgroundColor: 'var(--border-default)'
      }
    }) : null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onChange && onChange(typeof value === 'number' ? i : it),
      style: {
        border: 'none',
        cursor: 'pointer',
        padding: '8px 16px',
        backgroundColor: on ? activeColor : '#fff',
        color: on ? '#fff' : 'var(--foreground-primary)',
        fontFamily: 'var(--ss-font-ui)',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '100%'
      }
    }, it));
  }));
}
Object.assign(__ds_scope, { ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const LUCIDE = 'icons/';
function Icon({
  name = 'circle',
  size = 16,
  color = 'currentColor',
  style,
  title
}) {
  const url = 'url(' + LUCIDE + name + '.svg) center / contain no-repeat';
  return /*#__PURE__*/React.createElement("span", {
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flexShrink: 0,
      backgroundColor: color,
      WebkitMask: url,
      mask: url,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  border: 'none',
  transition: 'background-color .15s, box-shadow .15s, opacity .15s'
};
const V = {
  primary: {
    backgroundColor: 'var(--ss-teal-700)',
    color: '#fff',
    borderRadius: 21,
    padding: '8px 16px 8px 12px',
    gap: 8,
    fontFamily: 'var(--ss-font-button)',
    fontSize: 14,
    lineHeight: '20px'
  },
  outline: {
    backgroundColor: '#fff',
    color: 'var(--ss-ink)',
    borderRadius: 8,
    padding: '8px 11px',
    gap: 3,
    border: '0.8px solid rgba(0,0,0,0.1)',
    fontFamily: 'var(--ss-font-button)',
    fontSize: 14,
    lineHeight: '20px'
  },
  pill: {
    backgroundColor: '#fff',
    color: 'var(--ss-teal-700)',
    borderRadius: 30,
    padding: '8px 16px',
    gap: 8,
    boxShadow: 'var(--ss-shadow-float)',
    fontFamily: 'var(--ss-font-body)',
    fontSize: 16,
    lineHeight: '24px',
    textTransform: 'capitalize'
  },
  text: {
    backgroundColor: 'transparent',
    color: 'var(--ss-teal-700)',
    borderRadius: 8,
    padding: '6px 8px',
    gap: 6,
    fontFamily: 'var(--ss-font-body)',
    fontSize: 16,
    lineHeight: '24px'
  },
  danger: {
    backgroundColor: 'var(--ss-red-400)',
    color: '#fff',
    borderRadius: 21,
    padding: '8px 16px',
    gap: 8,
    fontFamily: 'var(--ss-font-button)',
    fontSize: 14,
    lineHeight: '20px'
  }
};
const HOVER = {
  primary: {
    backgroundColor: 'var(--ss-teal-800)'
  },
  outline: {
    backgroundColor: 'var(--ss-gray-25)'
  },
  pill: {
    boxShadow: '0px 4px 8px 0px rgba(101,98,98,0.3)'
  },
  text: {
    backgroundColor: 'rgba(7,101,103,0.06)'
  },
  danger: {
    backgroundColor: '#f04a4a'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  children,
  onClick,
  style,
  type = 'button'
}) {
  const [h, setH] = React.useState(false);
  const v = V[variant] || V.primary;
  const height = size === 'sm' ? 32 : 36;
  const iconSize = 16;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...BASE,
      height,
      ...v,
      ...(h && !disabled ? HOVER[variant] : null),
      ...(disabled ? {
        opacity: 0.5,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }, icon ? typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : icon : null, children != null ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? typeof iconRight === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }) : iconRight : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon = 'pencil',
  size = 14,
  active,
  onClick,
  title,
  color = 'var(--ss-gray-700)',
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: title,
    "aria-label": title,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 4,
      border: 'none',
      cursor: 'pointer',
      backgroundColor: active ? 'rgba(7,101,103,0.12)' : h ? 'var(--ss-gray-80)' : 'transparent',
      color: active ? 'var(--ss-teal-700)' : color,
      ...style
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }) : icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTextSet.jsx
try { (() => {
function IconTextSet({
  icon = 'user',
  children = 'Text',
  type = 'icon-left',
  size = 20,
  color,
  style
}) {
  const ic = typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }) : icon;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: color || 'var(--ss-ink)',
      fontFamily: 'var(--ss-font-ui)',
      fontSize: 14,
      lineHeight: '20px',
      ...style
    }
  }, type === 'icon-left' ? ic : null, /*#__PURE__*/React.createElement("span", null, children), type === 'icon-right' ? ic : null);
}
Object.assign(__ds_scope, { IconTextSet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTextSet.jsx", error: String((e && e.message) || e) }); }

// components/core/Link.jsx
try { (() => {
function Link({
  children = 'Back to IO list',
  href,
  onClick,
  icon = 'arrow-left',
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--ss-font-body)',
      fontSize: 16,
      lineHeight: '24px',
      color: h ? 'var(--ss-teal-700)' : 'var(--ss-slate-500)',
      textDecoration: 'none',
      cursor: 'pointer',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--ss-teal-700)"
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Link.jsx", error: String((e && e.message) || e) }); }

// components/core/PageTitle.jsx
try { (() => {
function PageTitle({
  title = 'Campaign List',
  level = 'page',
  breadcrumb,
  description,
  color,
  style
}) {
  const isPage = level === 'page';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--ss-font-display)',
      fontWeight: 500,
      fontSize: isPage ? 40 : 24,
      lineHeight: 1.3,
      color: color || 'var(--ss-teal-700)',
      textTransform: 'capitalize'
    }
  }, title), breadcrumb && breadcrumb.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ss-font-body)',
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--ss-slate-600)'
    }
  }, breadcrumb.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontWeight: i === breadcrumb.length - 1 ? 600 : 400
    }
  }, i > 0 ? ' > ' : '', b))) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--ss-font-body)',
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--ss-slate-600)'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { PageTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PageTitle.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const C = {
  blue: ['#edf9ff', '#1056bd'],
  green: ['#effef5', '#13683b'],
  danger: ['#fff0f0', '#ab0909'],
  indigo: ['#f7f3ff', '#4e21b6'],
  orange: ['#fff7ed', '#c54009'],
  custom: ['#edfff8', '#06754f'],
  gray: ['#f6f6f6', '#525252']
};
const FS = {
  16: [7, 10],
  20: [8, 12],
  24: [10, 14],
  28: [12, 16],
  32: [14, 20],
  40: [18, 28],
  48: [20, 30],
  80: [32, 40]
};
function Avatar({
  initials = 'MV',
  src,
  size = 40,
  color = 'blue',
  online,
  focused,
  style
}) {
  const [bg, fg] = C[color] || C.blue;
  const [fs, lh] = FS[size] || FS[40];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 80,
      flexShrink: 0,
      backgroundColor: src ? 'transparent' : bg,
      backgroundImage: src ? 'url(' + src + ')' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: focused ? '0px 1px 2px 0px rgba(36,36,36,0.05), 0px 0px 0px 4px rgb(241,241,241)' : 'none',
      color: fg,
      fontFamily: 'var(--ss-font-ui)',
      fontWeight: 500,
      fontSize: fs,
      lineHeight: lh + 'px',
      ...style
    }
  }, src ? null : initials, online ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: Math.max(6, size / 4),
      height: Math.max(6, size / 4),
      borderRadius: '50%',
      backgroundColor: '#10a957',
      boxShadow: '0 0 0 1.5px #fff'
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/AvatarGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  sm: 24,
  md: 32,
  lg: 40
};
function AvatarGroup({
  avatars = [{
    initials: 'MV'
  }, {
    initials: 'FD',
    color: 'green'
  }, {
    initials: 'AS',
    color: 'indigo'
  }],
  size = 'sm',
  max = 8,
  style
}) {
  const px = SZ[size] || 24;
  const shown = avatars.slice(0, max);
  const rest = avatars.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      ...style
    }
  }, shown.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({
    key: i,
    size: px
  }, a))), rest > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    size: px,
    color: "gray",
    initials: '+' + rest
  }) : null);
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
const C = {
  gray: ['#525252', '#fff'],
  danger: ['#ff5e5e', '#fff0f0'],
  blue: ['#51c0ff', '#edf9ff'],
  indigo: ['#8b5cf6', '#f7f3ff'],
  orange: ['#fe9239', '#fff7ed'],
  green: ['#10a957', '#effef5'],
  white: ['#ffffff', '#525252'],
  custom: ['#00c077', '#edfff8']
};
function Badge({
  children = '12',
  color = 'danger',
  variant = 'filled',
  shape = 'circle',
  style
}) {
  const [main, sub] = C[color] || C.danger;
  const filled = variant === 'filled';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 16,
      minWidth: 16,
      padding: shape === 'circle' ? 0 : '0 8px',
      width: shape === 'circle' ? 16 : 'auto',
      borderRadius: 80,
      boxSizing: 'border-box',
      backgroundColor: filled ? main : sub,
      color: filled ? sub : main,
      boxShadow: filled ? 'none' : 'inset 0 0 0 0.5px ' + main,
      fontFamily: 'var(--ss-font-ui)',
      fontWeight: 700,
      fontSize: 8,
      lineHeight: '100%',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/BadgeOnlineBase.jsx
try { (() => {
function BadgeOnlineBase({
  online,
  size = 6,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: 3,
      flexShrink: 0,
      backgroundColor: online ? 'var(--ss-green-600)' : 'var(--ss-gray-300)',
      boxShadow: '0 0 0 ' + (size >= 6 ? 1.5 : 1) + 'px var(--ss-gray-50)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { BadgeOnlineBase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BadgeOnlineBase.jsx", error: String((e && e.message) || e) }); }

// components/data/Grade.jsx
try { (() => {
const PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';
function Grade({
  value = 0,
  max = 5,
  onChange,
  readOnly,
  style
}) {
  const [hover, setHover] = React.useState(0);
  const shown = hover || value;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 16,
      ...style
    },
    onMouseLeave: () => setHover(0)
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    onMouseEnter: () => !readOnly && setHover(i + 1),
    onClick: () => !readOnly && onChange && onChange(i + 1),
    style: {
      cursor: readOnly ? 'default' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: PATH,
    fill: i < shown ? 'rgb(14,14,44)' : 'rgb(164,164,183)'
  }))));
}
Object.assign(__ds_scope, { Grade });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Grade.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiCard.jsx
try { (() => {
function KpiCard({
  title = 'Spending',
  status = 'off',
  recent = '$68,500.00',
  target = '$20,500.00',
  targetMax,
  progress = 0.35,
  style
}) {
  const on = status === 'on';
  const fg = on ? 'var(--ss-ontrack)' : 'var(--ss-offtrack)';
  const lbl = {
    fontFamily: 'var(--ss-font-body)',
    fontSize: 10,
    lineHeight: '14px',
    color: 'var(--ss-gray-550)',
    textTransform: 'capitalize'
  };
  const val = {
    fontFamily: 'var(--ss-font-body)',
    fontSize: 14,
    lineHeight: '20px',
    color: 'var(--ss-ink)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      boxSizing: 'border-box',
      width: 280,
      padding: '8px 14px 12px 16px',
      borderRadius: 8,
      backgroundColor: '#fff',
      boxShadow: 'var(--ss-shadow-kpi)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--ss-slate-600)',
      textTransform: 'capitalize'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 20,
      padding: '0 10px',
      borderRadius: 10,
      backgroundColor: on ? 'var(--ss-ontrack-bg)' : 'var(--ss-offtrack-bg)',
      color: fg,
      fontFamily: 'var(--ss-font-ui)',
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: 'nowrap'
    }
  }, on ? 'On Track' : 'Off Track')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: 34,
      rowGap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Recent"), /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Target"), /*#__PURE__*/React.createElement("span", {
    style: val
  }, recent), /*#__PURE__*/React.createElement("span", {
    style: {
      ...val,
      fontSize: 12,
      color: 'var(--ss-gray-550)'
    }
  }, targetMax ? 'Min ' + target : target, targetMax ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), 'Max ' + targetMax) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 3,
      backgroundColor: 'var(--ss-progress-track)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(1, progress)) * 100 + '%',
      height: '100%',
      borderRadius: 3,
      backgroundColor: fg
    }
  })));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pages = 50,
  shown = 10,
  total = 20,
  onChange,
  style
}) {
  const [goto, setGoto] = React.useState('');
  const nums = [1, 2, 3, 4].filter(n => n <= pages);
  const num = n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onChange && onChange(n),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--ss-font-body)',
      fontSize: 12,
      fontWeight: n === page ? 600 : 400,
      color: n === page ? 'var(--ss-ink)' : 'var(--ss-teal-700)'
    }
  }, n);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      fontFamily: 'var(--ss-font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, nums.map(num), pages > 4 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ss-teal-700)'
    }
  }, "......"), num(pages)) : null), /*#__PURE__*/React.createElement("input", {
    value: goto,
    onChange: e => setGoto(e.target.value),
    placeholder: "Go to page no.",
    style: {
      width: 107,
      height: 26,
      boxSizing: 'border-box',
      borderRadius: 2,
      border: 'none',
      backgroundColor: 'rgba(217,217,217,0.45)',
      boxShadow: 'inset 0 0 0 1px rgba(197,197,197,0.22)',
      padding: '0 9px',
      fontFamily: 'var(--ss-font-body)',
      fontSize: 11,
      color: 'var(--ss-ink)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const n = parseInt(goto, 10);
      if (n && onChange) onChange(Math.min(pages, Math.max(1, n)));
    },
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--ss-font-body)',
      fontWeight: 500,
      fontSize: 11,
      color: '#3b3b3b'
    }
  }, "Go")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ss-gray-500)'
    }
  }, "View ", shown, " of ", total, " results"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/Star.jsx
try { (() => {
function Star({
  size = 24,
  filled,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: size,
    color: color || (filled ? 'rgb(14,14,44)' : 'var(--ss-gray-900)'),
    style: style
  });
}
Object.assign(__ds_scope, { Star });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Star.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusBadge.jsx
try { (() => {
const C = {
  green: ['5,193,104', 'rgb(20,202,116)', 'rgb(5,193,104)'],
  yellow: ['255,176,22', 'rgb(253,181,42)', 'rgb(253,181,42)'],
  red: ['255,94,94', 'rgb(255,94,94)', 'rgb(255,94,94)'],
  gray: ['124,124,124', 'rgb(82,82,82)', 'rgb(124,124,124)']
};
const S = {
  small: ['2px 6px', 10, 500],
  default: ['4px 8px', 12, 400],
  large: ['6px 10px', 14, 500]
};
function StatusBadge({
  children = 'Default',
  color = 'green',
  size = 'default',
  style
}) {
  const [rgb, fg, dot] = C[color] || C.green;
  const [pad, fs, fw] = S[size] || S.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: pad,
      borderRadius: 2,
      backgroundColor: 'rgba(' + rgb + ',0.2)',
      boxShadow: 'inset 0 0 0 0.6px rgba(' + rgb + ',0.2)',
      fontFamily: '"Mona Sans","Mona-Sans",Inter,sans-serif',
      fontWeight: fw,
      fontSize: fs,
      lineHeight: '14px',
      color: fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: '50%',
      backgroundColor: dot
    }
  }), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/SummaryCard.jsx
try { (() => {
function SummaryCard({
  label = 'In Progress Campaign',
  value = '12',
  active,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      boxSizing: 'border-box',
      padding: '20.8px',
      minWidth: 0,
      borderRadius: 8.25,
      backgroundColor: '#fff',
      border: active ? '0.8px solid var(--ss-teal-700)' : '0.8px solid rgba(0,0,0,0.25)',
      boxShadow: 'var(--ss-shadow-summary)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14,
      lineHeight: '24px',
      color: 'var(--ss-slate-600)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textTransform: 'capitalize'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-body)',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--ss-slate-600)'
    }
  }, value));
}
Object.assign(__ds_scope, { SummaryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SummaryCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
const C = {
  gray: {
    fg: '#525252',
    bg: '#f6f6f6',
    bd: '#bdbdbd',
    dark: '#525252'
  },
  danger: {
    fg: '#ff5e5e',
    bg: '#fff0f0',
    bd: '#ff5e5e',
    dark: '#ab0909'
  },
  blue: {
    fg: '#51c0ff',
    bg: '#edf9ff',
    bd: '#51c0ff',
    dark: '#1056bd'
  },
  indigo: {
    fg: '#8b5cf6',
    bg: '#f7f3ff',
    bd: '#8b5cf6',
    dark: '#4e21b6'
  },
  orange: {
    fg: '#fe9239',
    bg: '#fff7ed',
    bd: '#fe9239',
    dark: '#c54009'
  },
  green: {
    fg: '#10a957',
    bg: '#effef5',
    bd: '#10a957',
    dark: '#13683b'
  },
  custom: {
    fg: '#00c077',
    bg: '#edfff8',
    bd: '#00c077',
    dark: '#06754f'
  }
};
function Tag({
  children = 'Badge',
  color = 'gray',
  variant = 'bordered',
  size = 'sm',
  dot,
  icon,
  onClose,
  style
}) {
  const c = C[color] || C.gray;
  const filled = variant === 'filled';
  const fg = filled ? color === 'gray' ? '#f6f6f6' : '#fff' : c.fg;
  const bg = filled ? c.fg : variant === 'borderless' ? 'transparent' : c.bg;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: sm ? 18 : 24,
      padding: '0 8px',
      borderRadius: 80,
      boxSizing: 'border-box',
      backgroundColor: bg,
      boxShadow: variant === 'bordered' ? 'inset 0 0 0 0.5px ' + c.bd : 'none',
      color: fg,
      fontFamily: 'var(--ss-font-ui)',
      fontWeight: 400,
      fontSize: sm ? 12 : 14,
      lineHeight: sm ? '18px' : '20px',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: fg,
      flexShrink: 0
    }
  }) : null, icon || null, /*#__PURE__*/React.createElement("span", null, children), onClose ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: onClose,
    style: {
      cursor: 'pointer',
      fontSize: sm ? 12 : 14,
      lineHeight: 1,
      opacity: 0.8
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/TableCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TableCell({
  type = 'text',
  color = 'white',
  children,
  sub,
  tag,
  tagColor = 'green',
  trend,
  trendDirection = 'up',
  avatar,
  actions,
  width,
  height = 60,
  align = 'left',
  sortable,
  style
}) {
  const bg = type === 'header' ? 'var(--ss-gray-150)' : color === 'gray' ? 'var(--ss-gray-50)' : 'var(--ss-gray-10)';
  const base = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    boxSizing: 'border-box',
    height,
    width,
    minWidth: 0,
    padding: '10px 16px',
    backgroundColor: bg,
    borderBottom: '1px solid var(--ss-gray-200)',
    fontFamily: 'var(--ss-font-ui)',
    fontSize: 14,
    lineHeight: '20px',
    color: 'var(--ss-gray-700)',
    justifyContent: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start',
    ...style
  };
  if (type === 'header') return /*#__PURE__*/React.createElement("div", {
    role: "columnheader",
    style: {
      ...base,
      fontFamily: 'var(--ss-font-body)',
      color: 'var(--ss-gray-700)',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, children), sortable ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#676767',
      fontSize: 12
    }
  }, "\u2191\u2193") : null);
  let content;
  if (type === 'tag') content = /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    color: tagColor
  }, children);else if (type === 'price') {
    const up = trendDirection === 'up';
    content = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, children), trend ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        padding: '0 6px',
        height: 20,
        borderRadius: 8,
        backgroundColor: up ? '#effef5' : '#fff0f0',
        boxShadow: 'inset 0 0 0 1px ' + (up ? '#10a957' : '#ff5e5e'),
        color: up ? '#10a957' : '#ff5e5e',
        fontSize: 12,
        lineHeight: '18px'
      }
    }, up ? '↑' : '↓', " ", trend) : null);
  } else if (type === 'account') content = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      minWidth: 0
    }
  }, avatar !== false ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({
    size: 40
  }, avatar || {})) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, children), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-gray-300)',
      fontSize: 14,
      lineHeight: '20px'
    }
  }, sub) : null));else if (type === 'actions') content = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, actions || children);else content = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, children), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-gray-300)'
    }
  }, sub) : null);
  return /*#__PURE__*/React.createElement("div", {
    role: "cell",
    style: base
  }, content);
}
Object.assign(__ds_scope, { TableCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TableCell.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const V = {
  default: ['info', '#000', 'var(--ss-gray-25)'],
  neutral: ['info', '#525252', 'var(--ss-gray-50)'],
  success: ['circle-check', '#10a957', '#effef5'],
  error: ['circle-x', '#ff5e5e', '#fff0f0'],
  warning: ['circle-alert', '#fe9239', '#fff7ed']
};
function Alert({
  variant = 'default',
  title = 'We just released something new!',
  children = 'Check out all the latest changes in your profile.',
  onClose,
  width = 484,
  style
}) {
  const [icon, accent, bg] = V[variant] || V.default;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      padding: 16,
      borderRadius: 4,
      width,
      maxWidth: '100%',
      boxSizing: 'border-box',
      backgroundColor: bg,
      boxShadow: 'inset 0 0 0 1px ' + (variant === 'default' ? 'var(--ss-gray-120)' : accent),
      fontFamily: 'var(--ss-font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '100%',
      color: '#000'
    }
  }, title), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '16px',
      color: '#000'
    }
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: onClose,
    style: {
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "#525252"
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const C = {
  gray: '#bdbdbd',
  green: '#10a957',
  danger: '#ff5e5e',
  blue: '#51c0ff',
  indigo: '#8b5cf6',
  orange: '#fe9239',
  custom: '#00c077',
  teal: '#076567'
};
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  color = 'green',
  circle,
  disabled,
  label,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const c = disabled ? '#dcdcdc' : C[color] || C.green;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14,
      color: 'var(--ss-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      boxSizing: 'border-box',
      flexShrink: 0,
      borderRadius: circle ? '50%' : 4,
      backgroundColor: on ? c : '#fff',
      boxShadow: 'inset 0 0 0 2px ' + (on ? c : '#bdbdbd'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, on ? /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 12 9.318"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.595 9.138 C 4.48 9.254 4.324 9.318 4.162 9.318 C 4 9.318 3.843 9.254 3.729 9.138 L 0.269 5.678 C -0.09 5.319 -0.09 4.737 0.269 4.379 L 0.702 3.946 C 1.062 3.587 1.643 3.587 2.002 3.946 L 4.162 6.105 L 9.998 0.269 C 10.357 -0.09 10.939 -0.09 11.298 0.269 L 11.731 0.703 C 12.09 1.062 12.09 1.644 11.731 2.002 L 4.595 9.138 Z",
    fill: "#fdfdfd"
  })) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Breakdown.jsx
try { (() => {
const DEFAULT = [{
  title: 'Campaign Structure',
  items: ['Client', 'Project', 'Project Category']
}, {
  title: 'Channels & Media',
  items: ['Channels', 'Sub-Channel']
}, {
  title: 'Time',
  items: ['Day', 'Week', 'Month']
}, {
  title: 'Team & User',
  items: ['Team', 'User']
}];
function Breakdown({
  groups = DEFAULT,
  selected,
  onChange,
  style
}) {
  const [open, setOpen] = React.useState(() => ({
    0: true
  }));
  const [inner, setInner] = React.useState([]);
  const sel = selected || inner;
  const toggle = it => {
    const n = sel.includes(it) ? sel.filter(x => x !== it) : [...sel, it];
    if (!selected) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 305,
      display: 'flex',
      flexDirection: 'column',
      gap: 19,
      fontFamily: 'var(--ss-font-body)',
      ...style
    }
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen({
      ...open,
      [gi]: !open[gi]
    }),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 22,
      cursor: 'pointer',
      fontSize: 13,
      lineHeight: '100%',
      color: 'var(--ss-purple-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, g.title), /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "4.444",
    viewBox: "0 0 8 4.444",
    style: {
      transform: open[gi] ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0l4 4.444L8 0",
    stroke: "rgb(171,171,171)",
    fill: "none"
  }))), open[gi] ? g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 24,
      paddingLeft: 8,
      fontSize: 13,
      color: 'var(--ss-navy-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    color: "teal",
    checked: sel.includes(it),
    onChange: () => toggle(it),
    label: it,
    style: {
      fontSize: 13,
      color: 'var(--ss-navy-700)'
    }
  }))) : null)));
}
Object.assign(__ds_scope, { Breakdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Breakdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  required,
  value,
  defaultValue,
  placeholder,
  readOnly,
  disabled,
  type = 'text',
  onChange,
  hint,
  width = '100%',
  style
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14,
      lineHeight: '14px',
      color: 'var(--ss-ink)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-required)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    readOnly: readOnly,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      height: 36,
      boxSizing: 'border-box',
      width: '100%',
      borderRadius: 8,
      border: '0.8px solid ' + (f ? 'var(--ss-teal-700)' : 'transparent'),
      backgroundColor: readOnly || disabled ? 'rgba(241,241,241,0.5)' : 'var(--ss-gray-80)',
      padding: '4px 12px',
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--ss-ink)',
      outline: 'none'
    }
  }), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-body)',
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--ss-gray-550)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputChip.jsx
try { (() => {
function InputChip({
  children = 'Posted at',
  kind = 'filter',
  icon,
  onRemove,
  style
}) {
  const pad = {
    date: '6px',
    filter: '6px 8px',
    input: '6px 8px 6px 12px',
    skill: '6px 6px 6px 4px'
  }[kind] || '6px 8px';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: kind === 'skill' ? 4 : 8,
      height: 32,
      boxSizing: 'border-box',
      padding: pad,
      borderRadius: kind === 'input' ? 20 : 36,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.5)',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      fontSize: 14,
      lineHeight: '20px',
      whiteSpace: 'nowrap',
      ...style
    }
  }, kind === 'skill' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.5)'
    }
  }) : icon || null, /*#__PURE__*/React.createElement("span", null, children), onRemove ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      color: 'rgba(255,255,255,0.5)',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { InputChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputText.jsx
try { (() => {
function InputText({
  placeholder = 'Placeholder',
  value,
  onChange,
  size = 'default',
  icon = 'calendar',
  style
}) {
  const sm = size === 'small';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: 9,
      borderRadius: 4,
      backgroundColor: 'rgb(10,19,48)',
      boxShadow: 'inset 0 0 0 0.6px rgb(11,23,57), 1px 1px 1px 0px rgba(16,25,52,0.4)',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 10 : 14,
    color: "rgb(174,185,225)"
  }) : null, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'rgb(174,185,225)',
      fontFamily: '"Mona Sans","Mona-Sans",Inter,sans-serif',
      fontWeight: 500,
      fontSize: sm ? 10 : 12,
      lineHeight: sm ? '10px' : '14px',
      width: 120
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: sm ? 10 : 12,
    color: "rgb(174,185,225)"
  }));
}
Object.assign(__ds_scope, { InputText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputText.jsx", error: String((e && e.message) || e) }); }

// components/forms/ListElement.jsx
try { (() => {
function ListElement({
  children = 'Option 1',
  selected,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    role: "option",
    "aria-selected": !!selected,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minHeight: 40,
      boxSizing: 'border-box',
      padding: '9px 8px 9px 12px',
      backgroundColor: selected ? '#f3f4f6' : h ? '#fafafa' : '#fff',
      fontFamily: 'var(--ss-font-body)',
      fontSize: 16,
      lineHeight: '100%',
      color: '#000',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ListElement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ListElement.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function SearchInput({
  placeholder = 'Search by IO ID, Client, Project, or Campaign Name...',
  value,
  onChange,
  onSubmit,
  width = 465,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      maxWidth: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16,
    color: "var(--ss-gray-450)",
    style: {
      position: 'absolute',
      left: 12,
      top: 10
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    onKeyDown: e => {
      if (e.key === 'Enter' && onSubmit) onSubmit(e.target.value);
    },
    placeholder: placeholder,
    style: {
      width: '100%',
      height: 36,
      boxSizing: 'border-box',
      borderRadius: 8,
      border: '0.8px solid transparent',
      backgroundColor: '#fff',
      padding: '4px 12px 4px 40px',
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14,
      color: 'var(--ss-ink)',
      outline: 'none'
    }
  }));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  on,
  defaultOn,
  onChange,
  disabled,
  label,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultOn);
  const v = on !== undefined ? on : inner;
  const t = () => {
    if (disabled) return;
    if (on === undefined) setInner(!v);
    onChange && onChange(!v);
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14,
      color: 'var(--ss-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": v,
    style: {
      position: 'relative',
      width: 40,
      height: 20,
      borderRadius: 16,
      flexShrink: 0,
      backgroundColor: v ? 'var(--ss-switch-on)' : '#dbdde4',
      transition: 'background-color .15s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: v ? 22 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundColor: '#fff',
      transition: 'left .15s'
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
const Chevron = ({
  color = '#6a7282',
  size = 10
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size * 0.609,
  viewBox: "0 0 16 9.741",
  style: {
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M 0.342 0.247 C 0.757 -0.116 1.389 -0.074 1.753 0.342 L 8 7.481 L 14.247 0.342 C 14.611 -0.074 15.243 -0.116 15.659 0.247 C 16.074 0.611 16.116 1.243 15.753 1.659 L 9.129 9.228 C 8.531 9.911 7.469 9.911 6.871 9.228 L 0.247 1.659 C -0.116 1.243 -0.074 0.611 0.342 0.247 Z",
  fill: color,
  fillRule: "evenodd"
}));
const KINDS = {
  field: {
    height: 40,
    borderRadius: 4,
    backgroundColor: '#fff',
    padding: '8px 12px',
    fontSize: 16,
    color: '#000',
    boxShadow: 'inset 0 0 0 1px var(--ss-gray-200)'
  },
  currency: {
    height: 42,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: '0 19px',
    fontSize: 18,
    color: 'var(--ss-teal-700)',
    boxShadow: 'inset 0 0 0 1.4px var(--ss-gray-250), var(--ss-shadow-dropdown)',
    textTransform: 'capitalize'
  },
  pill: {
    height: 35,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: '9px 15px',
    fontSize: 14,
    color: 'rgb(10,19,48)',
    boxShadow: 'var(--ss-shadow-filter-pill)'
  }
};
function TextField({
  kind = 'field',
  options = [],
  value,
  placeholder = 'Placeholder',
  onChange,
  disabled,
  width,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const k = KINDS[kind] || KINDS.field;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const cur = opts.find(o => o.value === value);
  const w = width || (kind === 'currency' ? 207 : kind === 'pill' ? 193 : 260);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: w,
      maxWidth: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      width: '100%',
      boxSizing: 'border-box',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--ss-font-body)',
      lineHeight: '100%',
      textAlign: 'left',
      ...k,
      ...(disabled ? {
        background: '#f3f4f6',
        color: 'var(--ss-gray-300)'
      } : null)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      opacity: cur ? 1 : 0.6
    }
  }, cur ? cur.label : placeholder), /*#__PURE__*/React.createElement(Chevron, {
    color: kind === 'currency' ? '#6a7282' : '#000',
    size: kind === 'field' ? 12 : 8
  })), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 20,
      top: '100%',
      left: 0,
      marginTop: 4,
      minWidth: '100%',
      backgroundColor: '#fff',
      borderRadius: 8,
      boxShadow: 'var(--ss-shadow-card)',
      overflow: 'hidden',
      border: '0.8px solid var(--ss-gray-120)'
    }
  }, opts.map(o => /*#__PURE__*/React.createElement(__ds_scope.ListElement, {
    key: o.value,
    selected: o.value === value,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, o.label))) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
const C = {
  green: '#10a957',
  gray: '#7c7c7c',
  danger: '#ff5e5e',
  blue: '#51c0ff',
  indigo: '#8b5cf6',
  orange: '#fe9239',
  custom: '#00c077',
  teal: '#076567'
};
function Toggle({
  active,
  defaultActive,
  onChange,
  color = 'green',
  flat,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultActive);
  const v = active !== undefined ? active : inner;
  const t = () => {
    if (disabled) return;
    if (active === undefined) setInner(!v);
    onChange && onChange(!v);
  };
  return /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": v,
    onClick: t,
    style: {
      display: 'inline-flex',
      boxSizing: 'border-box',
      width: 36,
      height: 20,
      padding: 2,
      borderRadius: 12,
      flexShrink: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      backgroundColor: disabled ? '#dcdcdc' : v ? C[color] || C.green : '#dcdcdc',
      justifyContent: v ? 'flex-end' : 'flex-start',
      transition: 'background-color .15s',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundColor: '#fdfdfd',
      boxShadow: flat ? 'none' : 'var(--ss-shadow-toggle-knob)'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControls.jsx
try { (() => {
function SegmentedControls({
  tabs = ['Tab', 'Tab', 'Tab'],
  value = 0,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      padding: 2,
      borderRadius: 8,
      backgroundColor: 'rgba(118,118,128,0.12)',
      gap: 0,
      ...style
    }
  }, tabs.map((t, i) => {
    const on = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(i),
      style: {
        flex: 1,
        border: 'none',
        cursor: 'pointer',
        padding: on ? '4px 12px' : '5px 12px',
        borderRadius: 6,
        backgroundColor: on ? '#fff' : 'transparent',
        boxShadow: on ? '0px 3px 8px 0px rgba(0,0,0,0.12), 0px 3px 1px 0px rgba(0,0,0,0.04)' : 'none',
        fontFamily: '"SF Pro Text",-apple-system,BlinkMacSystemFont,Inter,sans-serif',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: '16px',
        color: 'rgb(60,60,67)',
        whiteSpace: 'nowrap'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { SegmentedControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControls.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideMenu.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  id: 'overview',
  label: 'Overview',
  icon: 'chart-pie'
}, {
  id: 'leads',
  label: 'Leads',
  icon: 'filter'
}, {
  id: 'reports',
  label: 'Reports',
  icon: 'chart-column',
  children: [{
    id: 'closed-reports',
    label: 'Closed Reports'
  }]
}, {
  id: 'clients',
  label: 'Clients',
  icon: 'briefcase-business',
  children: [{
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'io',
    label: 'IO'
  }, {
    id: 'users',
    label: 'Users'
  }, {
    id: 'campaigns',
    label: 'Campaigns'
  }]
}, {
  id: 'teams',
  label: 'Teams',
  icon: 'users'
}, {
  id: 'agency-users',
  label: 'Agency Users',
  icon: 'user-cog'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
function SideMenu({
  items = DEFAULT_ITEMS,
  active = 'overview',
  onSelect,
  logoSrc,
  height = '100%',
  style
}) {
  const parentOf = id => (items.find(i => (i.children || []).some(c => c.id === id)) || {}).id;
  const [open, setOpen] = React.useState(() => ({
    [parentOf(active)]: true
  }));
  const activeParent = parentOf(active) || active;
  const row = {
    display: 'flex',
    alignItems: 'center',
    gap: 9,
    fontFamily: 'var(--ss-font-body)',
    fontSize: 18,
    lineHeight: '23px',
    color: '#fff',
    textTransform: 'capitalize',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      width: 231,
      height,
      flexShrink: 0,
      backgroundColor: 'var(--ss-teal-700)',
      boxSizing: 'border-box',
      paddingTop: 50,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 33px',
      height: 19,
      display: 'flex',
      alignItems: 'center'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "SmartSpend",
    style: {
      width: 165,
      height: 'auto',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-display)',
      fontSize: 22,
      letterSpacing: 1,
      color: '#fff'
    }
  }, "SMARTSPEND")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 46,
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map(it => {
    const isActive = activeParent === it.id;
    const isOpen = !!open[it.id];
    return /*#__PURE__*/React.createElement("div", {
      key: it.id
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => {
        if (it.children) setOpen({
          ...open,
          [it.id]: !isOpen
        });
        onSelect && onSelect(it.id);
      },
      style: {
        position: 'relative',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px 0 41px',
        backgroundColor: isActive ? 'rgba(28,57,74,0.42)' : 'transparent'
      }
    }, isActive ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 10,
        height: 52,
        borderRadius: '0 10px 10px 0',
        backgroundColor: 'var(--ss-navy-700)'
      }
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: row
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 19,
      color: "#fff"
    }), /*#__PURE__*/React.createElement("span", null, it.label), it.children ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'chevron-up' : 'chevron-down',
      size: 14,
      color: "#fff"
    }) : null)), it.children && isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: '6px 0 14px 69px'
      }
    }, it.children.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.id,
      onClick: () => onSelect && onSelect(c.id),
      style: {
        ...row,
        color: active === c.id ? 'var(--ss-navy-600)' : '#fff',
        fontWeight: active === c.id ? 500 : 400
      }
    }, c.label))) : null);
  })));
}
Object.assign(__ds_scope, { SideMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tab.jsx
try { (() => {
function Tab({
  tabs = ['Tab', 'Tab', 'Tab'],
  value = 0,
  onChange,
  color = 'var(--ss-teal-700)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--ss-gray-120)',
      ...style
    }
  }, tabs.map((t, i) => {
    const on = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(i),
      style: {
        position: 'relative',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '12px 0',
        fontFamily: 'var(--ss-font-body)',
        fontWeight: 500,
        fontSize: 12,
        lineHeight: '16px',
        color: on ? color : 'var(--ss-gray-600)'
      }
    }, t, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        backgroundColor: on ? color : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tab.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  userName = 'Fawzy D.',
  onMenu,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      height: 92,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      paddingLeft: 22,
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: onMenu,
    style: {
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 33,
    color: "var(--ss-navy-700)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 42,
      pointerEvents: 'auto'
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 208,
      alignSelf: 'flex-start',
      height: 92,
      backgroundColor: 'var(--ss-teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      color: '#fff',
      fontFamily: 'var(--ss-font-body)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, userName), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    size: 28,
    color: "gray",
    initials: userName.slice(0, 1)
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12,
    color: "#fff"
  }))));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/charts.jsx
try { (() => {
// Lightweight SVG charts for the AI Agent dashboard
function Donut({
  data,
  size = 150,
  stroke = 22,
  center
}) {
  const r = (size - stroke) / 2,
    c = 2 * Math.PI * r;
  const total = data.reduce((a, d) => a + d.value, 0);
  let off = 0;
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--ss-progress-track)",
    strokeWidth: stroke
  }), data.map((d, i) => {
    const len = d.value / total * c;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: d.color,
      strokeWidth: stroke,
      strokeDasharray: `${ready ? Math.max(0, len - 2) : 0} ${c}`,
      strokeDashoffset: -off,
      style: {
        transition: `stroke-dasharray .9s ease ${i * 0.12}s`
      }
    });
    off += len;
    return el;
  })), center ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, center) : null);
}
function Legend({
  data,
  unit = '%'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      color: 'var(--ss-slate-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: d.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, d.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-ink)',
      fontWeight: 500
    }
  }, d.value, unit))));
}
function Funnel({
  steps
}) {
  const max = steps[0].value;
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, steps.map((s, i) => {
    const pct = s.value / max;
    const conv = i > 0 ? Math.round(s.value / steps[i - 1].value * 100) : null;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(110px,150px) 1fr 56px',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--ss-slate-600)'
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30,
        background: 'var(--ss-gray-50)',
        borderRadius: 8,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: (ready ? pct * 100 : 0) + '%',
        background: s.color,
        borderRadius: 8,
        transition: `width 1s cubic-bezier(.2,.8,.2,1) ${i * 0.1}s`,
        display: 'flex',
        alignItems: 'center',
        paddingInline: 10,
        boxSizing: 'border-box',
        color: '#fff',
        fontSize: 12,
        fontWeight: 600
      }
    }, s.value.toLocaleString())), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: conv ? 'var(--ss-green-600)' : 'var(--ss-gray-550)',
        textAlign: 'end'
      }
    }, conv ? conv + '%' : '100%'));
  }));
}
function Bars({
  data,
  height = 170,
  color = 'var(--ss-teal-700)',
  color2
}) {
  const max = Math.max(...data.map(d => Math.max(d.a, d.b || 0)));
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      height,
      paddingTop: 10
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      height: '100%',
      justifyContent: 'flex-end',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 4,
      height: '100%',
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: d.a,
    style: {
      width: '38%',
      maxWidth: 26,
      height: (ready ? d.a / max * 100 : 0) + '%',
      background: color,
      borderRadius: '6px 6px 2px 2px',
      transition: `height .9s ease ${i * 0.06}s`
    }
  }), d.b != null ? /*#__PURE__*/React.createElement("div", {
    title: d.b,
    style: {
      width: '38%',
      maxWidth: 26,
      height: (ready ? d.b / max * 100 : 0) + '%',
      background: color2 || 'var(--ss-teal-200)',
      borderRadius: '6px 6px 2px 2px',
      transition: `height .9s ease ${i * 0.06 + 0.05}s`
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ss-gray-550)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%'
    }
  }, d.label))));
}
function Spark({
  points,
  color = '#01db72',
  w = 120,
  h = 34
}) {
  const max = Math.max(...points),
    min = Math.min(...points);
  const d = points.map((p, i) => `${i ? 'L' : 'M'} ${i / (points.length - 1) * w} ${h - (p - min) / (max - min || 1) * (h - 4) - 2}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Heatmap({
  rows,
  cols,
  values
}) {
  const max = Math.max(...values.flat());
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `44px repeat(${cols.length}, minmax(0,1fr))`,
      gap: 4,
      fontSize: 11,
      color: 'var(--ss-gray-550)'
    }
  }, /*#__PURE__*/React.createElement("span", null), cols.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      textAlign: 'center'
    }
  }, c)), rows.map((r, ri) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'center'
    }
  }, r), values[ri].map((v, ci) => /*#__PURE__*/React.createElement("span", {
    key: ci,
    title: v + '% answer',
    style: {
      height: 26,
      borderRadius: 5,
      background: `rgba(7,101,103,${0.08 + v / max * 0.9})`
    }
  })))));
}
function Wave({
  active = true,
  bars = 36,
  color = 'rgba(255,255,255,0.85)',
  height = 44
}) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTick(x => x + 1), 120);
    return () => clearInterval(id);
  }, [active]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      height
    }
  }, Array.from({
    length: bars
  }).map((_, i) => {
    const v = active ? 0.25 + Math.abs(Math.sin((i + tick) * 0.55) * Math.cos((i - tick) * 0.21)) * 0.75 : 0.12;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 3,
        height: v * height,
        borderRadius: 2,
        background: color,
        transition: 'height .12s linear'
      }
    });
  }));
}
Object.assign(window, {
  Donut,
  Legend,
  Funnel,
  Bars,
  Spark,
  Heatmap,
  Wave
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/charts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/data.jsx
try { (() => {
// SmartSpend AI Agent — demo data + i18n (client: Diar)
const AA_STR = {
  en: {
    nav: {
      overview: 'Overview',
      live: 'Live Calls',
      pipeline: 'Leads Pipeline',
      history: 'Call History',
      insights: 'Insights'
    },
    client: 'Diar',
    agentOnline: 'AI Agent online',
    slots: 'call slots in use',
    allProjects: 'All projects',
    ovTitle: 'AI Agent Overview',
    ovSub: 'Every lead reached within seconds, qualified on the call, followed up on WhatsApp — only qualified leads go to Odoo.',
    hello: 'Good morning, Fawzy',
    liveNow: 'Live now',
    viewLive: 'Open live monitor',
    kpis: {
      leads: 'Leads received',
      answer: 'Answer rate',
      qualified: 'Qualified of answered',
      dropped: 'Dropped-off calls',
      aht: 'Avg handling time',
      csat: 'Customer satisfaction',
      dial: 'Lead → first dial',
      odoo: 'Hang-up → Odoo'
    },
    target: 'Target',
    onTrack: 'On Track',
    offTrack: 'Off Track',
    funnel: 'Lead funnel',
    funnelSteps: ['Leads captured', 'Called', 'Answered', 'Qualified', 'Sent to Odoo'],
    lang: 'Language mix',
    statusMix: 'Lead status',
    recentQ: 'Just qualified',
    seeAll: 'See all',
    today: 'Today',
    d7: '7 days',
    d30: '30 days',
    liveTitle: 'Live Calls Monitor',
    liveSub: 'Voice agents on the line right now. Watch a call unfold and get scored in real time.',
    listening: 'Listening in',
    transcript: 'Live transcript',
    aiScore: 'AI score',
    signals: 'Qualification signals',
    queue: 'Up next in queue',
    endedQ: 'Call ended · lead qualified',
    pipeTitle: 'Leads Pipeline',
    pipeSub: 'Where every lead sits right now, from intake to CRM.',
    histTitle: 'Call History & Recordings',
    histSub: 'Every attempt, inbound and outbound, with recordings retained 90 days.',
    insTitle: 'Insights',
    insSub: 'What callers talk about, when they answer, and which channels bring qualified leads.',
    journey: 'Lead journey',
    extracted: 'Extracted by AI',
    rubric: 'Score breakdown',
    whatsapp: 'WhatsApp follow-up',
    odooSync: 'Odoo sync',
    recording: 'Call recording',
    back: 'Back to pipeline',
    search: 'Search leads by name, phone or project…',
    toastQ: 'qualified · pushed to Odoo',
    score: 'Score'
  },
  ar: {
    nav: {
      overview: 'نظرة عامة',
      live: 'المكالمات المباشرة',
      pipeline: 'مسار العملاء',
      history: 'سجل المكالمات',
      insights: 'التحليلات'
    },
    client: 'ديار',
    agentOnline: 'الوكيل الذكي متصل',
    slots: 'خطوط مستخدمة',
    allProjects: 'كل المشاريع',
    ovTitle: 'نظرة عامة على الوكيل الذكي',
    ovSub: 'نصل لكل عميل خلال ثوانٍ، نؤهله أثناء المكالمة، نتابع عبر واتساب — والعملاء المؤهلون فقط يصلون إلى Odoo.',
    hello: 'صباح الخير، فوزي',
    liveNow: 'مباشر الآن',
    viewLive: 'فتح المراقبة المباشرة',
    kpis: {
      leads: 'العملاء المستلمون',
      answer: 'نسبة الرد',
      qualified: 'المؤهلون من المجيبين',
      dropped: 'مكالمات منقطعة',
      aht: 'متوسط مدة المكالمة',
      csat: 'رضا العملاء',
      dial: 'من العميل إلى أول اتصال',
      odoo: 'من الإنهاء إلى Odoo'
    },
    target: 'المستهدف',
    onTrack: 'على المسار',
    offTrack: 'خارج المسار',
    funnel: 'قمع العملاء',
    funnelSteps: ['عملاء مستلمون', 'تم الاتصال', 'تم الرد', 'مؤهلون', 'أُرسلوا إلى Odoo'],
    lang: 'توزيع اللغات',
    statusMix: 'حالة العملاء',
    recentQ: 'تأهلوا للتو',
    seeAll: 'عرض الكل',
    today: 'اليوم',
    d7: '٧ أيام',
    d30: '٣٠ يوم',
    liveTitle: 'مراقبة المكالمات المباشرة',
    liveSub: 'الوكلاء الصوتيون على الخط الآن. شاهد المكالمة وتقييمها لحظياً.',
    listening: 'استماع مباشر',
    transcript: 'النص المباشر',
    aiScore: 'تقييم الذكاء الاصطناعي',
    signals: 'مؤشرات التأهيل',
    queue: 'التالي في الطابور',
    endedQ: 'انتهت المكالمة · العميل مؤهل',
    pipeTitle: 'مسار العملاء',
    pipeSub: 'موقع كل عميل الآن، من الاستلام حتى نظام CRM.',
    histTitle: 'سجل المكالمات والتسجيلات',
    histSub: 'كل محاولة واردة وصادرة، مع حفظ التسجيلات ٩٠ يوماً.',
    insTitle: 'التحليلات',
    insSub: 'عمّ يتحدث المتصلون، ومتى يردون، وأي القنوات تجلب عملاء مؤهلين.',
    journey: 'رحلة العميل',
    extracted: 'مستخرج بالذكاء الاصطناعي',
    rubric: 'تفصيل التقييم',
    whatsapp: 'متابعة واتساب',
    odooSync: 'مزامنة Odoo',
    recording: 'تسجيل المكالمة',
    back: 'العودة للمسار',
    search: 'ابحث بالاسم أو الهاتف أو المشروع…',
    toastQ: 'مؤهل · أُرسل إلى Odoo',
    score: 'التقييم'
  }
};
const AA_PROJECTS = ['Diar AlHaram', 'Al-Narjis'];
const AA_STATUSES = [{
  id: 'new',
  en: 'New',
  ar: 'جديد',
  color: 'gray'
}, {
  id: 'calling',
  en: 'Queued / Calling',
  ar: 'في الانتظار / جارٍ الاتصال',
  color: 'blue'
}, {
  id: 'qualified',
  en: 'Qualified',
  ar: 'مؤهل',
  color: 'green'
}, {
  id: 'nurture',
  en: 'Nurture',
  ar: 'رعاية',
  color: 'indigo'
}, {
  id: 'call_back',
  en: 'Call back',
  ar: 'معاودة الاتصال',
  color: 'orange'
}, {
  id: 'unreachable',
  en: 'Unreachable',
  ar: 'تعذر الوصول',
  color: 'danger'
}, {
  id: 'not_qualified',
  en: 'Not qualified',
  ar: 'غير مؤهل',
  color: 'gray'
}];
const AA_LEADS = [{
  id: 'L-20931',
  name: 'Ahmed Al-Qahtani',
  ar: 'أحمد القحطاني',
  phone: '+966 55 214 8830',
  project: 'Diar AlHaram',
  channel: 'Meta Lead Ads',
  lang: 'AR',
  status: 'qualified',
  score: 86,
  attempts: 1,
  unit: '3BR',
  when: '2m ago',
  odoo: 'CRM-48211'
}, {
  id: 'L-20930',
  name: 'Sara Al-Otaibi',
  ar: 'سارة العتيبي',
  phone: '+966 50 771 0921',
  project: 'Al-Narjis',
  channel: 'Google Ads',
  lang: 'EN',
  status: 'qualified',
  score: 74,
  attempts: 2,
  unit: 'Villa',
  when: '9m ago',
  odoo: 'CRM-48207'
}, {
  id: 'L-20929',
  name: 'Faisal Al-Harbi',
  ar: 'فيصل الحربي',
  phone: '+966 53 902 4417',
  project: 'Diar AlHaram',
  channel: 'Landing page (QR)',
  lang: 'AR',
  status: 'calling',
  score: null,
  attempts: 1,
  unit: '—',
  when: 'now'
}, {
  id: 'L-20928',
  name: 'Nora Al-Shehri',
  ar: 'نورة الشهري',
  phone: '+966 54 330 1187',
  project: 'Al-Narjis',
  channel: 'TikTok',
  lang: 'AR',
  status: 'nurture',
  score: 52,
  attempts: 1,
  unit: '2BR',
  when: '14m ago'
}, {
  id: 'L-20927',
  name: 'Khalid Al-Dosari',
  ar: 'خالد الدوسري',
  phone: '+966 56 118 2290',
  project: 'Diar AlHaram',
  channel: 'Odoo (recycled)',
  lang: 'AR',
  status: 'call_back',
  score: null,
  attempts: 1,
  unit: '—',
  when: '21m ago',
  callback: 'Today 18:30'
}, {
  id: 'L-20926',
  name: 'Laila Mansour',
  ar: 'ليلى منصور',
  phone: '+966 59 640 7712',
  project: 'Al-Narjis',
  channel: 'Meta Lead Ads',
  lang: 'FR',
  status: 'unreachable',
  score: null,
  attempts: 3,
  unit: '—',
  when: '33m ago'
}, {
  id: 'L-20925',
  name: 'Omar Bakr',
  ar: 'عمر بكر',
  phone: '+966 55 009 3341',
  project: 'Diar AlHaram',
  channel: 'Google Ads',
  lang: 'EN',
  status: 'qualified',
  score: 68,
  attempts: 1,
  unit: '2BR',
  when: '41m ago',
  odoo: 'CRM-48199'
}, {
  id: 'L-20924',
  name: 'Reem Al-Zahrani',
  ar: 'ريم الزهراني',
  phone: '+966 50 482 6650',
  project: 'Al-Narjis',
  channel: 'Snapchat',
  lang: 'AR',
  status: 'not_qualified',
  score: 22,
  attempts: 1,
  unit: 'Studio',
  when: '58m ago'
}, {
  id: 'L-20923',
  name: 'Yousef Al-Malki',
  ar: 'يوسف المالكي',
  phone: '+966 53 774 1029',
  project: 'Diar AlHaram',
  channel: 'Landing page (QR)',
  lang: 'AR',
  status: 'new',
  score: null,
  attempts: 0,
  unit: '—',
  when: 'just now'
}, {
  id: 'L-20922',
  name: 'Hana Al-Ghamdi',
  ar: 'هناء الغامدي',
  phone: '+966 54 201 8873',
  project: 'Al-Narjis',
  channel: 'Meta Lead Ads',
  lang: 'AR',
  status: 'calling',
  score: null,
  attempts: 2,
  unit: '—',
  when: 'now'
}, {
  id: 'L-20921',
  name: 'Mark Ellison',
  ar: 'مارك إليسون',
  phone: '+966 56 551 0042',
  project: 'Diar AlHaram',
  channel: 'LinkedIn',
  lang: 'EN',
  status: 'nurture',
  score: 47,
  attempts: 1,
  unit: '1BR',
  when: '1h ago'
}, {
  id: 'L-20920',
  name: 'Abdullah Al-Saud',
  ar: 'عبدالله السعود',
  phone: '+966 55 873 2201',
  project: 'Al-Narjis',
  channel: 'Odoo (recycled)',
  lang: 'AR',
  status: 'qualified',
  score: 91,
  attempts: 1,
  unit: 'Villa',
  when: '1h ago',
  odoo: 'CRM-48190'
}, {
  id: 'L-20919',
  name: 'Mona Fahad',
  ar: 'منى فهد',
  phone: '+966 59 110 7623',
  project: 'Diar AlHaram',
  channel: 'TikTok',
  lang: 'AR',
  status: 'unreachable',
  score: null,
  attempts: 3,
  unit: '—',
  when: '2h ago'
}, {
  id: 'L-20918',
  name: 'Tariq Nasser',
  ar: 'طارق ناصر',
  phone: '+966 50 338 9014',
  project: 'Al-Narjis',
  channel: 'Google Ads',
  lang: 'EN',
  status: 'new',
  score: null,
  attempts: 0,
  unit: '—',
  when: 'just now'
}];

// Simulated live call — Faisal, Diar AlHaram (Arabic with English gloss)
const AA_SCRIPT = [{
  who: 'agent',
  ar: 'السلام عليكم أستاذ فيصل، معك المساعد الذكي من ديار. المكالمة مسجلة لضمان الجودة.',
  en: 'Hello Mr. Faisal, this is the Diar AI assistant. This call is recorded for quality.'
}, {
  who: 'lead',
  ar: 'وعليكم السلام، أهلاً.',
  en: 'Hello, hi.'
}, {
  who: 'agent',
  ar: 'سجلت معنا عن مشروع ديار الحرم من خلال رمز QR. هل الوقت مناسب لدقيقتين؟',
  en: 'You registered about Diar AlHaram via our QR code. Do you have two minutes?'
}, {
  who: 'lead',
  ar: 'إيه تفضل.',
  en: 'Yes, go ahead.'
}, {
  who: 'agent',
  ar: 'هل الشراء للسكن أو للاستثمار؟',
  en: 'Is the purchase for living or for investment?',
  signal: 'purpose'
}, {
  who: 'lead',
  ar: 'للسكن، أنا وعائلتي.',
  en: 'To live in, me and my family.',
  gain: {
    purpose: 20
  }
}, {
  who: 'agent',
  ar: 'ممتاز. أي نوع وحدة تفضل؟',
  en: 'Great. Which unit type do you prefer?',
  signal: 'unit'
}, {
  who: 'lead',
  ar: 'شقة ثلاث غرف.',
  en: 'A three-bedroom apartment.',
  gain: {
    unit: 10
  }
}, {
  who: 'agent',
  ar: 'وكم الميزانية التقريبية؟',
  en: 'And roughly what budget?',
  signal: 'budget'
}, {
  who: 'lead',
  ar: 'بين ثمانمئة ألف ومليون ريال.',
  en: 'Between 800 thousand and one million riyals.',
  gain: {
    budget: 15
  }
}, {
  who: 'agent',
  ar: 'متى تخطط للشراء؟',
  en: 'When are you planning to buy?',
  signal: 'timeline'
}, {
  who: 'lead',
  ar: 'خلال شهرين إن شاء الله. وأبي أزور المشروع.',
  en: 'Within two months, God willing. And I want to visit the project.',
  gain: {
    timeline: 20,
    engagement: 15
  }
}, {
  who: 'agent',
  ar: 'رائع. سيتصل بك مستشار المبيعات اليوم بين ٤ و٦ مساءً، وتصلك التفاصيل على واتساب. موافق؟',
  en: 'Wonderful. An advisor will call you today 4–6 pm, details on WhatsApp. Agreed?',
  signal: 'permission'
}, {
  who: 'lead',
  ar: 'موافق، شكراً.',
  en: 'Agreed, thanks.',
  gain: {
    permission: 10
  }
}];
const AA_RUBRIC = [{
  id: 'purpose',
  en: 'Purpose',
  ar: 'الغرض',
  max: 20
}, {
  id: 'budget',
  en: 'Budget fit',
  ar: 'ملاءمة الميزانية',
  max: 25
}, {
  id: 'timeline',
  en: 'Timeline',
  ar: 'الجدول الزمني',
  max: 20
}, {
  id: 'unit',
  en: 'Unit preference',
  ar: 'نوع الوحدة',
  max: 10
}, {
  id: 'engagement',
  en: 'Engagement',
  ar: 'التفاعل',
  max: 15
}, {
  id: 'permission',
  en: 'Permission',
  ar: 'الإذن',
  max: 10
}];
const AA_LIVE = [{
  name: 'Hana Al-Ghamdi',
  project: 'Al-Narjis',
  lang: 'AR',
  sec: 74,
  stage: 'Budget'
}, {
  name: 'Mark Ellison',
  project: 'Diar AlHaram',
  lang: 'EN',
  sec: 131,
  stage: 'Timeline'
}, {
  name: 'Salem Al-Anazi',
  project: 'Diar AlHaram',
  lang: 'AR',
  sec: 12,
  stage: 'Greeting'
}, {
  name: 'Dana Youssef',
  project: 'Al-Narjis',
  lang: 'EN',
  sec: 96,
  stage: 'Unit type'
}, {
  name: 'Majed Al-Rashid',
  project: 'Al-Narjis',
  lang: 'AR',
  sec: 48,
  stage: 'Purpose'
}, {
  name: 'Inbound · IVR',
  project: 'Generic Agent',
  lang: 'AR',
  sec: 21,
  stage: 'Language select'
}];
const AA_TICKER = [['Abdullah Al-Saud', 'qualified', 91, 'Al-Narjis'], ['Nora Al-Shehri', 'nurture', 52, 'Al-Narjis'], ['Omar Bakr', 'qualified', 68, 'Diar AlHaram'], ['Khalid Al-Dosari', 'call_back', null, 'Diar AlHaram'], ['Laila Mansour', 'unreachable', null, 'Al-Narjis'], ['Sara Al-Otaibi', 'qualified', 74, 'Al-Narjis']];
const AA_CALLS = [{
  id: 'C-88412',
  lead: 'Ahmed Al-Qahtani',
  dir: 'Outbound',
  project: 'Diar AlHaram',
  lang: 'AR',
  start: 'Oct 4, 09:12',
  dur: '3:08',
  outcome: 'qualified',
  csat: 4.5,
  attempt: '1/3'
}, {
  id: 'C-88409',
  lead: 'Sara Al-Otaibi',
  dir: 'Outbound',
  project: 'Al-Narjis',
  lang: 'EN',
  start: 'Oct 4, 09:03',
  dur: '2:41',
  outcome: 'qualified',
  csat: 4.0,
  attempt: '2/3'
}, {
  id: 'C-88405',
  lead: 'Inbound caller',
  dir: 'Inbound',
  project: 'Generic Agent',
  lang: 'AR',
  start: 'Oct 4, 08:55',
  dur: '1:12',
  outcome: 'generic',
  csat: 3.5,
  attempt: '—'
}, {
  id: 'C-88401',
  lead: 'Nora Al-Shehri',
  dir: 'Outbound',
  project: 'Al-Narjis',
  lang: 'AR',
  start: 'Oct 4, 08:47',
  dur: '2:19',
  outcome: 'nurture',
  csat: 3.8,
  attempt: '1/3'
}, {
  id: 'C-88398',
  lead: 'Khalid Al-Dosari',
  dir: 'Outbound',
  project: 'Diar AlHaram',
  lang: 'AR',
  start: 'Oct 4, 08:40',
  dur: '0:27',
  outcome: 'call_back',
  csat: null,
  attempt: '1/3'
}, {
  id: 'C-88392',
  lead: 'Laila Mansour',
  dir: 'Outbound',
  project: 'Al-Narjis',
  lang: 'FR',
  start: 'Oct 4, 08:31',
  dur: '0:00',
  outcome: 'unreachable',
  csat: null,
  attempt: '3/3'
}, {
  id: 'C-88388',
  lead: 'Omar Bakr',
  dir: 'Outbound',
  project: 'Diar AlHaram',
  lang: 'EN',
  start: 'Oct 4, 08:22',
  dur: '3:34',
  outcome: 'qualified',
  csat: 4.2,
  attempt: '1/3'
}, {
  id: 'C-88380',
  lead: 'Reem Al-Zahrani',
  dir: 'Outbound',
  project: 'Al-Narjis',
  lang: 'AR',
  start: 'Oct 4, 08:10',
  dur: '1:46',
  outcome: 'not_qualified',
  csat: 2.9,
  attempt: '1/3'
}, {
  id: 'C-88371',
  lead: 'Abdullah Al-Saud',
  dir: 'Inbound',
  project: 'Al-Narjis',
  lang: 'AR',
  start: 'Oct 3, 20:41',
  dur: '4:02',
  outcome: 'qualified',
  csat: 4.8,
  attempt: '—'
}];
Object.assign(window, {
  AA_STR,
  AA_PROJECTS,
  AA_STATUSES,
  AA_LEADS,
  AA_SCRIPT,
  AA_RUBRIC,
  AA_LIVE,
  AA_TICKER,
  AA_CALLS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/history-insights.jsx
try { (() => {
function CallHistory({
  t,
  lang,
  project
}) {
  const [dir, setDir] = React.useState(0);
  const [playing, setPlaying] = React.useState(null);
  const dirs = lang === 'ar' ? ['الكل', 'صادرة', 'واردة'] : ['All', 'Outbound', 'Inbound'];
  const calls = AA_CALLS.filter(c => (dir === 0 || c.dir === ['', 'Outbound', 'Inbound'][dir]) && (project === 'all' || c.project === project || c.project === 'Generic Agent'));
  const H = lang === 'ar' ? ['المكالمة', 'العميل', 'الاتجاه', 'المشروع', 'اللغة', 'البدء', 'المدة', 'المحاولة', 'النتيجة', 'الرضا', 'التسجيل'] : ['Call', 'Lead', 'Direction', 'Project', 'Lang', 'Started', 'Duration', 'Attempt', 'Outcome', 'CSAT', 'Recording'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: t.histTitle,
    sub: t.histSub,
    right: /*#__PURE__*/React.createElement(DS.Button, {
      variant: "outline",
      icon: "download"
    }, lang === 'ar' ? 'تصدير التقرير اليومي' : 'Export daily report')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
      gap: 14,
      marginBottom: 20
    }
  }, [[lang === 'ar' ? 'إجمالي المحاولات' : 'Total attempts', '1,506'], [lang === 'ar' ? 'تم الرد' : 'Answered', '937'], [lang === 'ar' ? 'منقطعة' : 'Dropped-off', '143'], [lang === 'ar' ? 'واردة' : 'Inbound', '212'], [lang === 'ar' ? 'متوسط المدة' : 'Avg duration', '2m 55s']].map(([l, v]) => /*#__PURE__*/React.createElement(DS.SummaryCard, {
    key: l,
    label: l,
    value: v
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.SegmentedControls, {
    tabs: dirs,
    value: dir,
    onChange: setDir
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      maxWidth: 360,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(DS.SearchInput, {
    placeholder: lang === 'ar' ? 'ابحث برقم المكالمة أو العميل…' : 'Search by call ID or lead…',
    width: "100%"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "aa-mob",
    style: {
      flexDirection: 'column',
      background: '#fff',
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, calls.map((c, i) => {
    const s = c.outcome === 'generic' ? {
      color: 'gray',
      en: 'Generic inquiry',
      ar: 'استفسار عام'
    } : aaStatus(c.outcome);
    const on = playing === c.id;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        borderBottom: '1px solid var(--ss-gray-120)'
      }
    }, /*#__PURE__*/React.createElement(DS.Icon, {
      name: c.dir === 'Inbound' ? 'phone-incoming' : 'phone-outgoing',
      size: 18,
      color: "var(--ss-teal-700)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--ss-ink)'
      }
    }, c.lead), /*#__PURE__*/React.createElement(DS.Tag, {
      color: s.color,
      size: "sm"
    }, s[lang])), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ss-gray-550)',
        marginTop: 3
      }
    }, c.project, " \xB7 ", c.start, " \xB7 ", c.dur, c.csat ? ' · ★ ' + c.csat.toFixed(1) : '')), c.dur !== '0:00' ? /*#__PURE__*/React.createElement("span", {
      role: "button",
      onClick: () => setPlaying(on ? null : c.id),
      style: {
        width: 44,
        height: 44,
        borderRadius: 22,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--ss-teal-700)' : 'var(--ss-gray-50)',
        cursor: 'pointer',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(DS.Icon, {
      name: on ? 'pause' : 'play',
      size: 16,
      color: on ? '#fff' : 'var(--ss-teal-700)'
    })) : null);
  })), /*#__PURE__*/React.createElement("div", {
    className: "aa-desk",
    style: {
      background: '#fff',
      borderRadius: 23,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '100px 180px 110px 140px 70px 130px 90px 90px 140px 80px 120px',
      minWidth: 1270
    }
  }, H.map(h => /*#__PURE__*/React.createElement(DS.TableCell, {
    key: h,
    type: "header"
  }, h)), calls.map((c, i) => {
    const col = i % 2 ? 'gray' : 'white';
    const s = c.outcome === 'generic' ? {
      color: 'gray',
      en: 'Generic inquiry',
      ar: 'استفسار عام'
    } : aaStatus(c.outcome);
    const on = playing === c.id;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: c.id
    }, /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.id), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.lead), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, /*#__PURE__*/React.createElement(DS.IconTextSet, {
      icon: c.dir === 'Inbound' ? 'phone-incoming' : 'phone-outgoing',
      size: 14,
      style: {
        fontSize: 13,
        color: 'var(--ss-gray-700)'
      }
    }, c.dir === 'Inbound' ? lang === 'ar' ? 'واردة' : 'Inbound' : lang === 'ar' ? 'صادرة' : 'Outbound')), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.project), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.lang), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.start), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.dur), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.attempt), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col,
      type: "tag",
      tagColor: s.color
    }, s[lang]), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.csat ? c.csat.toFixed(1) : '—'), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: col
    }, c.dur !== '0:00' ? /*#__PURE__*/React.createElement("span", {
      role: "button",
      onClick: () => setPlaying(on ? null : c.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        color: 'var(--ss-teal-700)'
      }
    }, /*#__PURE__*/React.createElement(DS.Icon, {
      name: on ? 'pause' : 'play',
      size: 14
    }), on ? /*#__PURE__*/React.createElement(Wave, {
      bars: 10,
      height: 16,
      color: "var(--ss-teal-500)"
    }) : lang === 'ar' ? 'تشغيل' : 'Play') : '—'));
  }))), /*#__PURE__*/React.createElement(DS.Pagination, {
    page: 1,
    pages: 151,
    shown: calls.length,
    total: 1506,
    style: {
      padding: '20px 32px'
    }
  })));
}
function Insights({
  t,
  lang
}) {
  const topics = lang === 'ar' ? [['خطط السداد', 34], ['موعد التسليم', 27], ['الموقع والقرب من الحرم', 22], ['مساحة الوحدات', 18], ['رسوم الخدمات', 11], ['زيارة الموقع', 9]] : [['Payment plans', 34], ['Handover date', 27], ['Location & distance to Haram', 22], ['Unit sizes', 18], ['Service charges', 11], ['Site visit', 9]];
  const objections = lang === 'ar' ? [['السعر أعلى من الميزانية', 41], ['ليس الوقت المناسب', 26], ['يقارن مع مطور آخر', 19], ['يحتاج استشارة العائلة', 14]] : [['Price above budget', 41], ['Not the right time', 26], ['Comparing other developers', 19], ['Needs to consult family', 14]];
  const channels = [{
    label: 'Meta',
    a: 412,
    b: 168
  }, {
    label: 'Google',
    a: 356,
    b: 171
  }, {
    label: 'TikTok',
    a: 248,
    b: 64
  }, {
    label: 'Snapchat',
    a: 162,
    b: 41
  }, {
    label: 'QR',
    a: 131,
    b: 79
  }, {
    label: 'Odoo ↻',
    a: 197,
    b: 87
  }];
  const days = lang === 'ar' ? ['سبت', 'أحد', 'اثن', 'ثلا', 'أرب', 'خمي'] : ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const hours = ['09', '11', '13', '15', '17', '19', '21'];
  const heat = [[48, 55, 41, 52, 66, 71, 58], [51, 58, 44, 55, 69, 74, 61], [46, 54, 39, 50, 64, 70, 57], [50, 57, 43, 53, 67, 73, 60], [47, 53, 40, 51, 65, 68, 55], [42, 49, 37, 46, 58, 62, 49]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: t.insTitle,
    sub: t.insSub
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: lang === 'ar' ? 'العملاء والمؤهلون حسب القناة' : 'Leads vs qualified by channel',
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        fontSize: 12,
        color: 'var(--ss-slate-600)'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      style: {
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 2,
        background: 'var(--ss-teal-700)',
        marginInlineEnd: 6
      }
    }), lang === 'ar' ? 'عملاء' : 'Leads'), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      style: {
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 2,
        background: 'var(--ss-purple-300)',
        marginInlineEnd: 6
      }
    }), lang === 'ar' ? 'مؤهلون' : 'Qualified'))
  }, /*#__PURE__*/React.createElement(Bars, {
    data: channels,
    color: "var(--ss-teal-700)",
    color2: "var(--ss-purple-300)",
    height: 200
  })), /*#__PURE__*/React.createElement(Panel, {
    title: lang === 'ar' ? 'أفضل أوقات الرد (نسبة الرد)' : 'Best time to call (answer rate)'
  }, /*#__PURE__*/React.createElement(Heatmap, {
    rows: days,
    cols: hours,
    values: heat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ss-gray-550)',
      marginTop: 12
    }
  }, lang === 'ar' ? 'النافذة: سبت–خميس ٠٩:٠٠–٢١:٠٠ بتوقيت السعودية · ذروة ١٧–١٩' : 'Window Sat–Thu 09:00–21:00 KSA · peak 17:00–19:00')), /*#__PURE__*/React.createElement(Panel, {
    title: lang === 'ar' ? 'المواضيع الأكثر نقاشاً' : 'Topics discussed',
    action: /*#__PURE__*/React.createElement(DS.StatusBadge, {
      color: "gray",
      size: "small"
    }, "AI Batch QA")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, topics.map(([n, v], i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      borderRadius: 20,
      background: i < 2 ? 'var(--ss-teal-700)' : 'rgba(7,101,103,' + (0.14 - i * 0.015) + ')',
      color: i < 2 ? '#fff' : 'var(--ss-teal-800)',
      fontSize: 12 + Math.round(v / 10)
    }
  }, n, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      fontSize: 12
    }
  }, v, "%"))))), /*#__PURE__*/React.createElement(Panel, {
    title: lang === 'ar' ? 'أبرز الاعتراضات' : 'Top objections'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, objections.map(([n, v]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(150px, 220px) 1fr 40px',
      gap: 12,
      alignItems: 'center',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-slate-600)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--ss-progress-track)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v * 2 + '%',
      height: '100%',
      borderRadius: 4,
      background: 'var(--ss-purple-700)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'end'
    }
  }, v, "%"))))), /*#__PURE__*/React.createElement(Panel, {
    title: lang === 'ar' ? 'الأداء حسب المشروع' : 'Performance by project'
  }, [['Diar AlHaram', 884, 64, 3.8, 'Project Agent'], ['Al-Narjis', 622, 61, 3.6, 'Project Agent']].map(([p, n, q, cs, ag]) => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 12,
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid var(--ss-gray-120)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ss-ink)',
      fontSize: 14
    }
  }, p), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ss-gray-550)',
      fontSize: 11
    }
  }, ag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ss-gray-550)',
      fontSize: 11
    }
  }, lang === 'ar' ? 'عملاء' : 'Leads'), n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ss-gray-550)',
      fontSize: 11
    }
  }, lang === 'ar' ? 'مؤهلون' : 'Qualified'), q, "%"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ss-gray-550)',
      fontSize: 11
    }
  }, "CSAT"), cs)))), /*#__PURE__*/React.createElement(Panel, {
    title: lang === 'ar' ? 'نتائج الرسائل على واتساب' : 'WhatsApp follow-up results'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    size: 130,
    stroke: 18,
    data: [{
      value: 71,
      color: 'var(--ss-green-600)'
    }, {
      value: 18,
      color: 'var(--ss-teal-200)'
    }, {
      value: 8,
      color: 'var(--ss-orange-400)'
    }, {
      value: 3,
      color: 'var(--ss-red-400)'
    }],
    center: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        fontWeight: 600
      }
    }, "1,284"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ss-gray-550)'
      }
    }, lang === 'ar' ? 'رسالة' : 'sent'))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 170
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    data: [{
      label: lang === 'ar' ? 'تمت القراءة' : 'Read',
      value: 71,
      color: 'var(--ss-green-600)'
    }, {
      label: lang === 'ar' ? 'تم التسليم' : 'Delivered',
      value: 18,
      color: 'var(--ss-teal-200)'
    }, {
      label: lang === 'ar' ? '“اتصل بي الآن”' : '“Call me now” taps',
      value: 8,
      color: 'var(--ss-orange-400)'
    }, {
      label: lang === 'ar' ? 'إيقاف' : 'Opt-out (STOP)',
      value: 3,
      color: 'var(--ss-red-400)'
    }]
  }))))));
}
Object.assign(window, {
  CallHistory,
  Insights
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/history-insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/lead.jsx
try { (() => {
function LeadDetail({
  t,
  lang,
  id,
  back
}) {
  const l = AA_LEADS.find(x => x.id === id) || AA_LEADS[0];
  const [playing, setPlaying] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const total = 188;
  React.useEffect(() => {
    if (!playing) return;
    const iv = setInterval(() => setPos(p => {
      if (p >= total) {
        setPlaying(false);
        return total;
      }
      return p + 1;
    }), 250);
    return () => clearInterval(iv);
  }, [playing]);
  const isQ = l.status === 'qualified' || l.id === 'L-20929';
  const score = l.score != null ? l.score : l.id === 'L-20929' ? 90 : 0;
  const st = aaStatus(l.id === 'L-20929' ? 'qualified' : l.status);
  const name = lang === 'ar' ? l.ar : l.name;
  const journey = [['circle-plus', lang === 'ar' ? 'الاستلام' : 'Captured', l.channel, '09:09:14'], ['git-branch', lang === 'ar' ? 'التوجيه' : 'Routed', lang === 'ar' ? 'رقم موحد · بدون تكرار · نافذة مفتوحة' : 'E.164 · no duplicate · window open', '09:09:16'], ['phone-outgoing', lang === 'ar' ? 'الاتصال' : 'AI call', l.project + ' Agent · 3:08', '09:09:52'], ['sparkles', lang === 'ar' ? 'التقييم' : 'Scored', score + '/100 · conf 0.92', '09:13:07'], ['database', 'Odoo', isQ ? (l.odoo || 'CRM-48214') + ' · AI Qualified' : lang === 'ar' ? 'غير مرسل' : 'Not sent', '09:13:41'], ['message-circle', 'WhatsApp', isQ ? 'lead_qualified_followup · ' + (lang === 'ar' ? 'تم القراءة' : 'Read') : 'lead_unreachable_notice', '09:13:58']];
  const fields = [['purpose', lang === 'ar' ? 'سكن' : 'residence'], ['unit_type', l.unit === '—' ? '3br' : l.unit.toLowerCase()], ['budget_sar', '800,000 – 1,000,000'], ['timeline_months', '2'], ['financing', 'bank'], ['viewing_requested', 'true'], ['consent_whatsapp', 'true'], ['preferred_callback', lang === 'ar' ? 'اليوم ١٦:٠٠–١٨:٠٠' : 'Today 16:00–18:00'], ['sentiment', 'positive'], ['next_action', 'advisor_call']];
  const rubric = {
    purpose: 20,
    budget: 15,
    timeline: 20,
    unit: 10,
    engagement: 15,
    permission: 10
  };
  const scale = score / 90;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(DS.Link, {
    onClick: e => {
      e.preventDefault();
      back();
    },
    icon: lang === 'ar' ? 'arrow-right' : 'arrow-left'
  }, t.back), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1b2738',
      color: '#fff',
      borderRadius: 22,
      padding: 'clamp(18px, 2.4vw, 28px)',
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    score: score,
    size: 96,
    stroke: 8,
    dark: true,
    label: t.score
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 'min(100%, 240px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--ss-font-display)',
      fontWeight: 500,
      fontSize: 'clamp(22px, 3vw, 30px)'
    }
  }, name), /*#__PURE__*/React.createElement(DS.Tag, {
    color: st.color,
    variant: "filled",
    size: "md"
  }, st[lang])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: 0.75,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    dir: "ltr"
  }, l.phone), " \xB7 ", l.project, " \xB7 ", l.channel, " \xB7 ", l.lang), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.85,
      marginTop: 12,
      maxWidth: 720,
      lineHeight: 1.6
    }
  }, lang === 'ar' ? 'يرغب في شقة ٣ غرف للسكن العائلي، الميزانية ٨٠٠ ألف–١ مليون ريال، الشراء خلال شهرين بتمويل بنكي، وطلب زيارة الموقع. يفضل اتصال المستشار اليوم ٤–٦ مساءً.' : 'Wants a 3BR for family living, budget SAR 800k–1M, buying within 2 months via bank financing, asked to visit the site. Prefers advisor call today 4–6 pm.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "pill",
    icon: "phone"
  }, lang === 'ar' ? 'اتصال الآن' : 'Call now'), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    icon: "external-link",
    style: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.3)'
    }
  }, "Odoo"))), /*#__PURE__*/React.createElement(Panel, {
    title: t.journey
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 0,
      position: 'relative'
    }
  }, journey.map(([ic, lb, sub, tm], i) => {
    const done = isQ || i < 4;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "aa-fade",
      style: {
        animationDelay: i * 0.12 + 's',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: '0 10px 6px 0',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: done ? 'var(--ss-teal-700)' : 'var(--ss-gray-120)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(DS.Icon, {
      name: ic,
      size: 17,
      color: done ? '#fff' : 'var(--ss-gray-450)'
    })), i < journey.length - 1 ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        background: done ? 'var(--ss-teal-200)' : 'var(--ss-gray-120)'
      }
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--ss-ink)',
        fontWeight: 500
      }
    }, lb), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ss-slate-600)',
        lineHeight: 1.4
      }
    }, sub), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ss-gray-550)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, tm));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: t.recording
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 14,
      borderRadius: 12,
      background: 'var(--ss-gray-50)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: () => setPlaying(!playing),
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--ss-teal-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: playing ? 'pause' : 'play',
    size: 18,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: 'var(--ss-gray-120)',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    onClick: e => {
      const r = e.currentTarget.getBoundingClientRect();
      const x = lang === 'ar' ? r.right - e.clientX : e.clientX - r.left;
      setPos(Math.round(x / r.width * total));
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pos / total * 100 + '%',
      height: '100%',
      background: 'var(--ss-teal-700)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      color: 'var(--ss-gray-550)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, fmtSec(pos)), /*#__PURE__*/React.createElement("span", null, fmtSec(total))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxHeight: 280,
      overflowY: 'auto'
    }
  }, AA_SCRIPT.map((s, i) => {
    const active = playing && Math.floor(pos / total * AA_SCRIPT.length) === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '44px 1fr',
        gap: 10,
        padding: '6px 8px',
        borderRadius: 8,
        background: active ? 'rgba(7,101,103,0.08)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: s.who === 'agent' ? 'var(--ss-purple-700)' : 'var(--ss-teal-700)',
        fontWeight: 600,
        paddingTop: 2
      }
    }, s.who === 'agent' ? 'AI' : lang === 'ar' ? 'العميل' : 'Lead'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        lineHeight: 1.55,
        color: 'var(--ss-ink)'
      }
    }, lang === 'ar' ? s.ar : s.en));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: t.rubric
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, AA_RUBRIC.map(r => {
    const g = Math.round((rubric[r.id] || 0) * scale);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(90px, 130px) 1fr 50px',
        gap: 12,
        alignItems: 'center',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ss-slate-600)'
      }
    }, r[lang]), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 3,
        background: 'var(--ss-progress-track)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: g / r.max * 100 + '%',
        height: '100%',
        background: 'var(--ss-ontrack)',
        borderRadius: 3
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'end',
        color: 'var(--ss-ink)'
      }
    }, g, "/", r.max));
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: t.extracted,
    action: /*#__PURE__*/React.createElement(DS.StatusBadge, {
      color: "green",
      size: "small"
    }, "confidence 0.92")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
      gap: '10px 18px'
    }
  }, fields.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fontfamily-mono, monospace)',
      fontSize: 11,
      color: 'var(--ss-gray-550)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ss-ink)'
    }
  }, v))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: t.whatsapp,
    action: /*#__PURE__*/React.createElement(DS.Tag, {
      color: "green",
      dot: true
    }, lang === 'ar' ? 'تمت القراءة' : 'Read', " 09:15")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#e9e3d8',
      borderRadius: 14,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340,
      background: '#fff',
      borderRadius: '4px 12px 12px 12px',
      padding: 10,
      boxShadow: '0 1px 1px rgba(0,0,0,0.08)'
    },
    dir: lang === 'ar' ? 'rtl' : 'ltr'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 70,
      borderRadius: 8,
      background: 'var(--ss-teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: '#fff',
      fontSize: 13,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: "file-text",
    size: 20,
    color: "#fff"
  }), l.project, " Brochure.pdf"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: '#111'
    }
  }, lang === 'ar' ? `مرحباً ${name.split(' ')[0]}، شكراً لاهتمامك بمشروع ${l.project}. مرفق الكتيب، وسيتصل بك مستشارنا اليوم بين ٤ و٦ مساءً.` : `Hi ${name.split(' ')[0]}, thanks for your interest in ${l.project}. The brochure is attached and our advisor will call you today between 4 and 6 pm.`), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#8a8a8a',
      textAlign: 'end',
      marginTop: 4
    }
  }, "09:13 \u2713\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #eee',
      marginTop: 8,
      paddingTop: 8,
      textAlign: 'center',
      color: '#0a7cff',
      fontSize: 13
    }
  }, lang === 'ar' ? 'عرض المشروع' : 'View project'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ss-gray-550)',
      marginTop: 10
    }
  }, "Template lead_qualified_followup \xB7 Utility \xB7 ", lang === 'ar' ? 'ar' : 'en')), /*#__PURE__*/React.createElement(Panel, {
    title: t.odooSync
  }, [['09:13:22', 'POST Zapier Z1 · catch hook', '200 · 310 ms'], ['09:13:31', 'Find partner by +966 phone', lang === 'ar' ? 'لا يوجد · إنشاء' : 'none · create'], ['09:13:41', 'crm.lead create · stage “AI Qualified”', l.odoo || 'CRM-48214'], ['09:13:42', 'mail.activity · Call · advisor Rania', 'due 16:00']].map(([tm, a, r], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px minmax(0, 1fr) auto',
      gap: 12,
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: i < 3 ? '1px solid var(--ss-gray-120)' : 'none',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-gray-550)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, tm), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-ink)'
    }
  }, a), /*#__PURE__*/React.createElement(DS.Tag, {
    color: "green"
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(DS.Alert, {
    variant: "success",
    width: "100%",
    title: lang === 'ar' ? 'وصل إلى Odoo خلال ٣٤ ثانية من إنهاء المكالمة' : 'Reached Odoo 34 s after hang-up'
  }, lang === 'ar' ? 'المستهدف ≤ دقيقتين' : 'Target ≤ 2 min · no duplicates')))));
}
window.LeadDetail = LeadDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/lead.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/live.jsx
try { (() => {
function useTicker(ms = 1000) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setN(x => x + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return n;
}
const fmtSec = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
function LiveCall({
  t,
  lang,
  speed,
  onQualified,
  openLead
}) {
  const [step, setStep] = React.useState(0);
  const [phase, setPhase] = React.useState('call'); // call → scoring → done
  const [post, setPost] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const boxRef = React.useRef(null);
  const interval = 2300 / speed;
  React.useEffect(() => {
    if (phase !== 'call') return;
    if (step >= AA_SCRIPT.length) {
      setPhase('scoring');
      return;
    }
    const id = setTimeout(() => setStep(s => s + 1), step === 0 ? 600 : interval);
    return () => clearTimeout(id);
  }, [step, phase, interval]);
  React.useEffect(() => {
    if (phase !== 'call') return;
    const id = setInterval(() => setSec(s => s + 1), 1000 / speed);
    return () => clearInterval(id);
  }, [phase, speed]);
  React.useEffect(() => {
    if (phase !== 'scoring') return;
    if (post >= 4) {
      setPhase('done');
      onQualified && onQualified({
        name: lang === 'ar' ? 'فيصل الحربي' : 'Faisal Al-Harbi',
        score: 90
      });
      return;
    }
    const id = setTimeout(() => setPost(p => p + 1), 900 / speed);
    return () => clearTimeout(id);
  }, [phase, post, speed]);
  React.useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [step]);
  const lines = AA_SCRIPT.slice(0, step);
  const gains = {};
  lines.forEach(l => l.gain && Object.assign(gains, l.gain));
  const score = Object.values(gains).reduce((a, b) => a + b, 0);
  const current = AA_SCRIPT[Math.max(0, step - 1)];
  const replay = () => {
    setStep(0);
    setPhase('call');
    setPost(0);
    setSec(0);
  };
  const postSteps = lang === 'ar' ? ['تحويل النص إلى JSON', 'حساب التقييم ← مؤهل', 'إنشاء فرصة في Odoo', 'إرسال قالب واتساب WA-01'] : ['Transcript → JSON', 'Score computed → qualified', 'Odoo opportunity created', 'WhatsApp WA-01 sent'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1b2738',
      borderRadius: 22,
      color: '#fff',
      padding: 'clamp(18px, 2.4vw, 28px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
      gap: 24,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineStart: -140,
      bottom: -180,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'rgba(7,101,103,0.4)',
      filter: 'blur(70px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DS.Avatar, {
    initials: "FH",
    size: 48,
    color: "custom"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.65,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, phase === 'call' ? /*#__PURE__*/React.createElement(LiveDot, null) : null, phase === 'call' ? t.listening : t.endedQ), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500
    }
  }, lang === 'ar' ? 'فيصل الحربي' : 'Faisal Al-Harbi'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.65
    }
  }, "Diar AlHaram \xB7 Landing page (QR) \xB7 AR \xB7 Outbound 1/3")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600
    }
  }, fmtSec(sec))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 16px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: current && current.who === 'agent' ? 'bot' : 'user',
    size: 18,
    color: "#c394ff"
  }), /*#__PURE__*/React.createElement(Wave, {
    active: phase === 'call',
    color: current && current.who === 'agent' ? '#c394ff' : 'rgba(255,255,255,0.85)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.6,
      textTransform: 'uppercase',
      letterSpacing: 0.6
    }
  }, t.transcript), /*#__PURE__*/React.createElement("div", {
    ref: boxRef,
    style: {
      height: 300,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingInlineEnd: 6
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "aa-fade",
    style: {
      alignSelf: l.who === 'agent' ? 'flex-start' : 'flex-end',
      maxWidth: '86%',
      padding: '10px 14px',
      borderRadius: 14,
      background: l.who === 'agent' ? 'rgba(195,148,255,0.16)' : 'rgba(255,255,255,0.1)',
      border: l.signal ? '1px solid rgba(195,148,255,0.35)' : '1px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55
    },
    dir: lang === 'ar' ? 'rtl' : 'ltr'
  }, lang === 'ar' ? l.ar : l.en), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.55,
      marginTop: 4
    },
    dir: lang === 'ar' ? 'ltr' : 'rtl'
  }, lang === 'ar' ? l.en : l.ar))), phase === 'call' && step < AA_SCRIPT.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.5
    }
  }, "\u2026") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: 18,
      borderRadius: 16,
      background: 'rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    score: score,
    size: 92,
    stroke: 8,
    dark: true,
    label: "/100"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.65
    }
  }, t.aiScore), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      margin: '4px 0'
    }
  }, score >= 60 ? aaStatus('qualified')[lang] : score >= 35 ? aaStatus('nurture')[lang] : lang === 'ar' ? 'جارٍ التقييم' : 'Scoring…'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.6
    }
  }, lang === 'ar' ? 'مؤهل عند ٦٠ أو أكثر' : 'Qualified at ≥ 60 · nurture 35–59'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.6,
      textTransform: 'uppercase',
      letterSpacing: 0.6
    }
  }, t.signals), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, AA_RUBRIC.map(r => {
    const g = gains[r.id] || 0;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(84px, 120px) 1fr 48px',
        alignItems: 'center',
        gap: 12,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.8
      }
    }, r[lang]), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.12)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: g / r.max * 100 + '%',
        height: '100%',
        background: g ? '#5fe0a3' : 'transparent',
        borderRadius: 3,
        transition: 'width .7s ease'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'end',
        fontVariantNumeric: 'tabular-nums',
        opacity: g ? 1 : 0.5
      }
    }, g, "/", r.max));
  })), phase !== 'call' ? /*#__PURE__*/React.createElement("div", {
    className: "aa-fade",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 16,
      borderRadius: 14,
      background: 'rgba(1,219,114,0.08)',
      border: '1px solid rgba(1,219,114,0.25)'
    }
  }, postSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      opacity: i < post ? 1 : 0.4,
      transition: 'opacity .3s'
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: i < post ? 'circle-check' : 'loader',
    size: 16,
    color: i < post ? '#01db72' : '#fff'
  }), s)), phase === 'done' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "pill",
    icon: "user",
    onClick: () => openLead('L-20929')
  }, lang === 'ar' ? 'فتح ملف العميل' : 'Open lead'), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "text",
    icon: "rotate-ccw",
    onClick: replay,
    style: {
      color: '#fff'
    }
  }, lang === 'ar' ? 'إعادة' : 'Replay call')) : null) : null));
}
function LiveCalls({
  t,
  lang,
  speed,
  onQualified,
  openLead,
  project
}) {
  const tick = useTicker(1000);
  const calls = AA_LIVE.filter(c => project === 'all' || c.project === project || c.project === 'Generic Agent');
  const queue = AA_LEADS.filter(l => l.status === 'new' || l.status === 'call_back');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: t.liveTitle,
    sub: t.liveSub,
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(DS.Tag, {
      size: "md",
      color: "green",
      dot: true
    }, lang === 'ar' ? 'نافذة الاتصال مفتوحة · سبت–خميس ٩–٢١' : 'Calling window open · Sat–Thu 09:00–21:00 KSA'))
  }), /*#__PURE__*/React.createElement(LiveCall, {
    t: t,
    lang: lang,
    speed: speed,
    onQualified: onQualified,
    openLead: openLead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
      gap: 20,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: lang === 'ar' ? 'مكالمات أخرى جارية' : 'Other calls in progress'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 150px), 1fr))',
      gap: 12
    }
  }, calls.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 14,
      borderRadius: 12,
      border: '1px solid var(--ss-gray-120)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(LiveDot, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ss-ink)',
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--ss-slate-600)'
    }
  }, fmtSec(c.sec + tick))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ss-gray-550)'
    }
  }, c.project, " \xB7 ", c.lang), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    bars: 22,
    height: 20,
    color: "var(--ss-teal-500)"
  }), /*#__PURE__*/React.createElement(DS.Tag, {
    color: "blue"
  }, c.stage)))))), /*#__PURE__*/React.createElement(Panel, {
    title: t.queue,
    pad: 14
  }, queue.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    onClick: () => openLead(l.id),
    className: "aa-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 10px',
      borderRadius: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DS.Avatar, {
    initials: l.name.split(' ').map(x => x[0]).slice(0, 2).join(''),
    size: 36,
    color: l.status === 'call_back' ? 'orange' : 'gray'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ss-ink)'
    }
  }, lang === 'ar' ? l.ar : l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ss-gray-550)'
    }
  }, l.project, " \xB7 ", l.channel)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ss-slate-600)',
      whiteSpace: 'nowrap'
    }
  }, l.callback || (lang === 'ar' ? 'خلال ٦٠ ث' : 'Dial in < 60 s')))))));
}
Object.assign(window, {
  LiveCalls,
  fmtSec
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/live.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/logo.js
try { (() => {
window.AA_LOGO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDMuNzI2IiBoZWlnaHQ9IjI3LjcyIiB2aWV3Qm94PSIwIDAgMjQzLjcyNiAyNy43MiIgZmlsbD0iI0ZGRkZGRiIgeG1sbnM6YzJwYT0iaHR0cDovL2MycGEub3JnL21hbmlmZXN0Ij48bWV0YWRhdGE+PGMycGE6bWFuaWZlc3Q+QUFBV2dtcDFiV0lBQUFBZWFuVnRaR015Y0dFQUVRQVFnQUFBcWdBNG0zRURZekp3WVFBQUFCWmNhblZ0WWdBQUFFZHFkVzFrWXpKdFlRQVJBQkNBQUFDcUFEaWJjUU4xY200Nll6SndZVHBrTlRJMU9HWTJNQzB4T1dVeExUUTNOalV0T0dZM055MW1NRGhpWWpOa05tUTRPV1lBQUFBRGwycDFiV0lBQUFBcGFuVnRaR015WVhNQUVRQVFnQUFBcWdBNG0zRURZekp3WVM1aGMzTmxjblJwYjI1ekFBQUFBTHhxZFcxaUFBQUFSR3AxYldSalltOXlBQkVBRUlBQUFLb0FPSnR4RTJNeWNHRXVhVzVuY21Wa2FXVnVkQzUyTXdBQUFBQVlZekp6YUo0MTJxeGh2WWg3SEUrQjJYR2lyM0FBQUFCd1kySnZjcU5wWkdNNlptOXliV0YwYldsdFlXZGxMM04yWnl0NGJXeHFhVzV6ZEdGdVkyVkpSSGdzZUcxd09tbHBaRG80WmpCbVpXVmpZeTFpTnpVMUxUUXpNemt0WWpGaU1pMDNORE5pTVRkbE1UQXlOV0pzY21Wc1lYUnBiMjV6YUdsd2FIQmhjbVZ1ZEU5bUFBQUI0bXAxYldJQUFBQkJhblZ0WkdOaWIzSUFFUUFRZ0FBQXFnQTRtM0VUWXpKd1lTNWhZM1JwYjI1ekxuWXlBQUFBQUJoak1uTm9yZWk1OGYwbVdMMWI0UjFtQ0tLM1dnQUFBWmxqWW05eW9tZGhZM1JwYjI1emdxSm1ZV04wYVc5dWEyTXljR0V1YjNCbGJtVmthbkJoY21GdFpYUmxjbk9oYTJsdVozSmxaR2xsYm5SemdhSmpkWEpzZUMxelpXeG1JMnAxYldKbVBXTXljR0V1WVhOelpYSjBhVzl1Y3k5ak1uQmhMbWx1WjNKbFpHbGxiblF1ZGpOa2FHRnphRmdnckhBemlUR2hQanBiQzkzRnRPampZQWp2SmZNOFFDWk9vK2hiSUpzYjZweWtabUZqZEdsdmJuZ2RZMjl0TG1GdWRHaHliM0JwWXk1amJHRjFaR1V1Y0hKdmRtbGtaV1JxY0dGeVlXMWxkR1Z5YzZGNEgyTnZiUzVoYm5Sb2NtOXdhV011YjNKcFoybHVMV052Ym1acFpHVnVZMlZuZFc1cmJtOTNibXRrWlhOamNtbHdkR2x2Ym5obVEyeGhkV1JsSUhCeWIzWnBaR1ZrSUhSb2FYTWdabWxzWlNCaGRDQjBhR1VnY21WeGRXVnpkQ0J2WmlCaElIVnpaWElnWVc1a0lHMWhlU0JvWVhabElHTnlaV0YwWldRZ2IzSWdiVzlrYVdacFpXUWdkR2hsSUdacGJHVWdZMjl1ZEdWdWRITXViWE52Wm5SM1lYSmxRV2RsYm5TaFpHNWhiV1ZtUTJ4aGRXUmxjbUZzYkVGamRHbHZibk5KYm1Oc2RXUmxaUFVBQUFESWFuVnRZZ0FBQUVCcWRXMWtZMkp2Y2dBUkFCQ0FBQUNxQURpYmNSTmpNbkJoTG1oaGMyZ3VaR0YwWVFBQUFBQVlZekp6YUhhVTNtVURhU0FlaWJvb3dsZkFYN3NBQUFDQVkySnZjcVZqWVd4blpuTm9ZVEkxTm1Od1lXUk5BQUFBQUFBQUFBQUFBQUFBQUdSb1lYTm9XQ0JxT1piSnpTTk42MlJZN01UcUcyK2hyZUNOQytvNnB1cERNWkN1UGtoT0lHUnVZVzFsYm1wMWJXSm1JRzFoYm1sbVpYTjBhbVY0WTJ4MWMybHZibk9Cb21WemRHRnlkQml4Wm14bGJtZDBhQmtlQkFBQUFqNXFkVzFpQUFBQUoycDFiV1JqTW1Oc0FCRUFFSUFBQUtvQU9KdHhBMk15Y0dFdVkyeGhhVzB1ZGpJQUFBQUNEMk5pYjNLbFkyRnNaMlp6YUdFeU5UWnBjMmxuYm1GMGRYSmxlRTF6Wld4bUkycDFiV0ptUFM5ak1uQmhMM1Z5Ympwak1uQmhPbVExTWpVNFpqWXdMVEU1WlRFdE5EYzJOUzA0WmpjM0xXWXdPR0ppTTJRMlpEZzVaaTlqTW5CaExuTnBaMjVoZEhWeVpXcHBibk4wWVc1alpVbEVlQ3g0YlhBNmFXbGtPbUV6WWpnMk4yUTFMV0l4WW1ZdE5Ea3pZaTFpTWpJMExXRmhNV05rWkRNek5qQmpPWEpqY21WaGRHVmtYMkZ6YzJWeWRHbHZibk9Eb21OMWNteDRMWE5sYkdZamFuVnRZbVk5WXpKd1lTNWhjM05sY25ScGIyNXpMMk15Y0dFdWFXNW5jbVZrYVdWdWRDNTJNMlJvWVhOb1dDQ3NjRE9KTWFFK09sc0wzY1cwNk9OZ0NPOGw4enhBSms2ajZGc2dteHZxbktKamRYSnNlQ3B6Wld4bUkycDFiV0ptUFdNeWNHRXVZWE56WlhKMGFXOXVjeTlqTW5CaExtRmpkR2x2Ym5NdWRqSmthR0Z6YUZnZ1BOelBLekFWRXRJK3g5QXVYNUNSU1FrK25yU0JWUU5ZRFVxSXBENkNRbHlpWTNWeWJIZ3BjMlZzWmlOcWRXMWlaajFqTW5CaExtRnpjMlZ5ZEdsdmJuTXZZekp3WVM1b1lYTm9MbVJoZEdGa2FHRnphRmdnZ3BYVGowazh5aVM5S2hSeGZZdXErUCtpTDdyNXROejM0VjVIVVpVY29nZDBZMnhoYVcxZloyVnVaWEpoZEc5eVgybHVabStqWkc1aGJXVnZRVzUwYUhKdmNHbGpJRVpwYkdWelozWmxjbk5wYjI1bE1TNHdMakJyYzNCbFkxWmxjbk5wYjI1bE1pNDBMakFBQUJBNGFuVnRZZ0FBQUNocWRXMWtZekpqY3dBUkFCQ0FBQUNxQURpYmNRTmpNbkJoTG5OcFoyNWhkSFZ5WlFBQUFCQUlZMkp2Y3RLRVdRSVNvZ0VtR0NGWkFnb3dnZ0lHTUlJQmphQURBZ0VDQWhSQTVhQUs3c0k1MEw2NGcvb0dRZ1U5WjFVVEFEQUtCZ2dxaGtqT1BRUURBekJKTVJjd0ZRWURWUVFLRXc1QmJuUm9jbTl3YVdNc0lGQkNRekV1TUN3R0ExVUVBeE1sUVc1MGFISnZjR2xqSUVOdmJuUmxiblFnUTNKbFpHVnVkR2xoYkhNZ1VtOXZkQ0JEUVRBZUZ3MHlOakE0TURjeE9EUXpOVFphRncweU9EQTRNRFl4T1RRek5UWmFNRVF4RnpBVkJnTlZCQW9URGtGdWRHaHliM0JwWXl3Z1VFSkRNU2t3SndZRFZRUURFeUJCYm5Sb2NtOXdhV01nUTJ4aGRXUmxJRU52Ym5SbGJuUWdVMmxuYm1sdVp6QlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJKaDZDbXZMVUJnRkZOVTB2VUtsT1Z0RTZkamQxN0w1U3V3WDBMZW1GaXNCTTNka2QvM2N5anhGQTNRbzVTNDZmWDAvaWhZMFZaN21mYjlLRjcwM3Q1T2pXREJXTUE0R0ExVWREd0VCL3dRRUF3SUhnREFWQmdOVkhTVUVEakFNQmdvckJnRUVBWVBvWGdJQk1Bd0dBMVVkRXdFQi93UUNNQUF3SHdZRFZSMGpCQmd3Rm9BVXpsSGlCSUZPWkZzaitPUEV6NW8rbk1IWFhNSXdDZ1lJS29aSXpqMEVBd01EWndBd1pBSXdNWE1kRko0QmV0TExWWTdPUnVFOW5vcWJiQVpPWm4vYUFyWHlUd0ZBWmZLclB6eEYydlBvSk5mMStVQ2RnMVhHQWpCd1gxemQ5V0dxWWtxbUw1U0ZxdzFReVNqcjF6SmZwSk05KzFyZER3U1BMTU9QT2pLdWlYam9VL3BVVWVHOVJ3bWhZM0JoWkZrTm5nQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUFpZUUtEaFhabkZzaGJTQXdGc0VGdUJNUEwzYytiMWdrQVpqVnp3Z2F5ay84bkVEaVk4QUFlMWlxenptTTZhT1A1UFNmUGtTODltMnBCSTNRQ0VhK3daZjRZPTwvYzJwYTptYW5pZmVzdD48L21ldGFkYXRhPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyMi4wMTQgMCkiIGQ9Ik0gOS41NjIgMCBMIDAgMCBMIDAgMTEuMDMxIEwgNS4xNjUgMTEuMDMxIEwgNS4xNjUgMy45NDEgTCAxNy44ODMgMTMuNzAyIEwgNS4xNjUgMjMuNzU5IEwgNS4xNjUgMTUuNjUxIEwgMCAxNS42NTEgTCAwIDI3LjY5OSBMIDkuNTYyIDI3LjY5OSBDIDE3LjAzMSAyNy42OTkgMjEuNzA5IDIwLjI5IDIxLjcwOSAxMy43MDIgQyAyMS43MDkgNy4xMTQgMTcuMTk0IDAgOS41NjIgMCBaIj48L3BhdGg+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZD0iTSAzLjMyOSAxOS41ODIgQyA1LjE0NyAyMS42NzMgNy42NTMgMjMuMTUgMTAuNDIzIDIzLjE1IEMgMTMuNzk4IDIzLjEwMyAxNi4xMzIgMjEuNzIzIDE2LjEzMiAxOS4yMDIgQyAxNi4xMzIgMTMuMzUzIDAuNzM1IDE4LjY0NyAwLjczNSA3Ljg5NSBDIDAuNzM1IDMuMjM2IDUuMTg5IDAgMTAuNjQxIDAgQyAxNC41NzggMCAxNy43NzcgMS4zOCAyMC4xNTcgMy45OTQgTCAxNi44NyA3LjIzIEMgMTQuNzA4IDQuODk5IDEyLjcxOSA0LjA5MSAxMC4zODEgNC4wOTEgQyA2Ljc0OSA0LjA5MSA1LjM2NCA2LjA4OSA1LjM2NCA3LjY1OSBDIDUuMzY0IDEzLjU1OSAyMC43NjIgOC4wMjUgMjAuNzYyIDE4Ljk2NiBDIDIwLjc2MiAyNC40MzcgMTUuNyAyNy43MTkgMTAuMjUxIDI3LjcxOSBDIDYuODc2IDI3LjcxOSAzLjAyNyAyNi4zMzkgMCAyMi44NjcgTCAzLjMyOSAxOS41ODUgTCAzLjMyOSAxOS41ODIgWiI+PC9wYXRoPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjA4NCAwKSIgZD0iTSAwIDAgTCAxMC42NDEgOS44MDEgTCAyMS4yMzcgMCBMIDIxLjIzNyAyNy42OTkgTCAxNi44MjUgMjcuNjk5IEwgMTYuODI1IDEwLjYwOSBMIDEwLjY0MSAxNS42NTEgTCA0LjQxMiAxMC42MDkgTCA0LjQxMiAyNy42OTkgTCAwIDI3LjY5OSBMIDAgMCBaIj48L3BhdGg+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAuNjYxIDApIiBkPSJNIDExLjYyNyAwIEwgMjMuMjU0IDI3LjY5OSBMIDE3LjUzIDI3LjY5OSBMIDExLjYzNiAxMS4wMzUgTCA0Ljk5NSAyNy42OTkgTCAwIDI3LjY5OSBMIDExLjYyNyAwIFoiPjwvcGF0aD48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OC4yMjIgMCkiIGQ9Ik0gMCAwIEwgMTEuMzc2IDAgQyAxNi43NCAwIDE5Ljk4MiAyLjYzNyAxOS45ODIgNy44MjIgQyAxOS45ODIgMTEuNjI3IDE3LjYwMiAxMy40NTkgMTQuNDAzIDE0LjU1MyBMIDIwLjM3MiAyNy42OTYgTCAxNC44MzUgMjcuNjk2IEwgOS44MTkgMTUuNjQ3IEwgNC40MTIgMTUuNjQ3IEwgNC40MTIgMjcuNjk2IEwgMCAyNy42OTYgTCAwIDAgWiBNIDQuNDEyIDExLjAzMSBMIDExLjAyOCAxMS4wMzEgQyAxNC4xODUgMTEuMDMxIDE1LjU3IDEwLjE1MyAxNS41NyA3LjgyMiBDIDE1LjU3IDUuNDkxIDE0LjE4NSA0LjYxMyAxMS4wMjggNC42MTMgTCA0LjQxMiA0LjYxMyBMIDQuNDEyIDExLjAzMSBaIj48L3BhdGg+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAyLjkxOSAwKSIgZD0iTSA3LjAwNiA0LjYxMyBMIDAgNC42MTMgTCAwIDAgTCAxOC40MjUgMCBMIDE4LjQyNSA0LjYxMyBMIDExLjQxOCA0LjYxMyBMIDExLjQxOCAyNy42OTYgTCA3LjAwNiAyNy42OTYgTCA3LjAwNiA0LjYxMyBaIj48L3BhdGg+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI1LjY4NyAwLjAwNCkiIGQ9Ik0gMy4zMjkgMTkuNTc4IEMgNS4xNDcgMjEuNjcgNy42NTMgMjMuMTQ3IDEwLjQyMyAyMy4xNDcgQyAxMy43OTggMjMuMSAxNi4xMzIgMjEuNzIgMTYuMTMyIDE5LjE5OSBDIDE2LjEzMiAxMy4zNDkgMC43MzUgMTguNjQ0IDAuNzM1IDcuODk1IEMgMC43MzUgMy4yMzMgNS4xODkgMCAxMC42MzggMCBDIDE0LjU3NSAwIDE3Ljc3NCAxLjM4IDIwLjE1NCAzLjk5NCBMIDE2Ljg2NyA3LjIzIEMgMTQuNzA1IDQuODk5IDEyLjcxNSA0LjA5MSAxMC4zODEgNC4wOTEgQyA2Ljc0OSA0LjA5MSA1LjM2NCA2LjA4OSA1LjM2NCA3LjY1OSBDIDUuMzY0IDEzLjU1OSAyMC43NjIgOC4wMjIgMjAuNzYyIDE4Ljk2MyBDIDIwLjc2MiAyNC40MzQgMTUuNzAzIDI3LjcxNiAxMC4yNTEgMjcuNzE2IEMgNi44NzYgMjcuNzE2IDMuMDI3IDI1Ljk3MyAwIDIyLjUwMSBMIDMuMzI5IDE5LjU4MiBMIDMuMzI5IDE5LjU3OCBaIj48L3BhdGg+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwLjc4IDApIiBkPSJNIDAgMCBMIDExLjM3NiAwIEMgMTYuNzQgMCAxOS45ODIgMi42MzcgMTkuOTgyIDcuODIyIEMgMTkuOTgyIDEzLjAwNyAxNi43MzcgMTUuNjQ3IDExLjM3NiAxNS42NDcgTCA0LjQxMiAxNS42NDcgTCA0LjQxMiAyNy42OTYgTCAwIDI3LjY5NiBMIDAgMCBaIE0gNC40MTIgMTEuMDMxIEwgMTEuMDI4IDExLjAzMSBDIDE0LjE4NSAxMS4wMzEgMTUuNTcgMTAuMjY2IDE1LjU3IDcuOTM1IEMgMTUuNTcgNS42MDQgMTQuMTg1IDQuNjEzIDExLjAyOCA0LjYxMyBMIDQuNDEyIDQuNjEzIEwgNC40MTIgMTEuMDMxIFoiPjwvcGF0aD48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzUuMDY1IDApIiBkPSJNIDAgMCBMIDE4LjM0IDAgTCAxOC4zNCA0LjYxMyBMIDQuNDEyIDQuNjEzIEwgNC40MTIgMTEuMDM1IEwgMTQuMTQzIDExLjAzNSBMIDE0LjE0MyAxNS42NDcgTCA0LjQxMiAxNS42NDcgTCA0LjQxMiAyMy4wOCBMIDE4LjM0IDIzLjA4IEwgMTguMzQgMjcuNjkzIEwgMCAyNy42OTMgTCAwIDAgWiI+PC9wYXRoPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5Ny43ODUgMCkiIGQ9Ik0gNC40MTIgMTAuNzAyIEwgNC40MTIgMjcuNjk2IEwgMCAyNy42OTYgTCAwIDAgTCAxNS40NCAxNi42NDggTCAxNS40NCAwIEwgMTkuODUyIDAgTCAxOS44NTIgMjcuNjEzIEwgNC40MTIgMTAuNzAyIFoiPjwvcGF0aD48L3N2Zz4=';
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/logo.js", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/overview.jsx
try { (() => {
const OV_RANGES = {
  today: 0.09,
  d7: 0.42,
  d30: 1
};
function HeroKpi({
  label,
  value,
  fmt,
  target,
  good,
  dark,
  delay = 0
}) {
  const v = useCountUp(value, 1300, [delay]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      borderRadius: 14,
      background: dark ? 'rgba(255,255,255,0.07)' : '#fff',
      border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
      boxShadow: dark ? 'none' : 'var(--ss-shadow-summary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: dark ? 'rgba(255,255,255,0.72)' : 'var(--ss-slate-600)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(26px, 2.6vw, 34px)',
      fontWeight: 600,
      lineHeight: 1,
      color: dark ? '#fff' : 'var(--ss-ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(v)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--ss-gray-550)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 20,
      padding: '0 9px',
      borderRadius: 10,
      fontFamily: 'var(--ss-font-ui)',
      fontWeight: 600,
      fontSize: 10,
      background: good ? dark ? 'rgba(33,184,115,0.2)' : 'var(--ss-ontrack-bg)' : dark ? 'rgba(232,77,61,0.2)' : 'var(--ss-offtrack-bg)',
      color: good ? dark ? '#5fe0a3' : 'var(--ss-ontrack)' : dark ? '#ff8a7d' : 'var(--ss-offtrack)'
    }
  }, good ? 'On Track' : 'Off Track'), target));
}
function Ticker({
  t,
  lang,
  dark
}) {
  const items = [...AA_TICKER, ...AA_TICKER];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      overflow: 'hidden',
      borderRadius: 12,
      padding: '10px 14px',
      background: dark ? 'rgba(0,0,0,0.18)' : '#fff',
      border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 0.6,
      textTransform: 'uppercase',
      color: dark ? '#fff' : 'var(--ss-navy-700)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(LiveDot, null), t.liveNow), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      flex: 1,
      maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: lang === 'ar' ? 'aa-marquee-rtl' : 'aa-marquee',
    style: {
      display: 'flex',
      gap: 28,
      width: 'max-content'
    }
  }, items.map(([n, s, sc, p], i) => {
    const st = aaStatus(s);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: dark ? 'rgba(255,255,255,0.85)' : 'var(--ss-slate-600)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(DS.Icon, {
      name: "phone",
      size: 13,
      color: dark ? 'rgba(255,255,255,0.5)' : 'var(--ss-gray-450)'
    }), n, " \xB7 ", p, /*#__PURE__*/React.createElement(DS.Tag, {
      color: st.color,
      variant: dark ? 'filled' : 'bordered'
    }, st[lang], sc ? ' · ' + sc : ''));
  }))));
}
function Overview({
  t,
  lang,
  hero,
  go,
  openLead,
  project
}) {
  const [range, setRange] = React.useState('d30');
  const k = OV_RANGES[range];
  const dark = hero !== 'light';
  const heroBg = hero === 'navy' ? '#1b2738' : hero === 'teal' ? 'var(--ss-teal-700)' : 'transparent';
  const leads = Math.round(1506 * k),
    answered = Math.round(937 * k),
    qualified = Math.round(610 * k);
  const pf = l => project === 'all' || l.project === project;
  const recent = AA_LEADS.filter(l => l.status === 'qualified' && pf(l)).slice(0, 4);
  const statusData = [{
    label: aaStatus('qualified')[lang],
    value: 41,
    color: 'var(--ss-green-600)'
  }, {
    label: aaStatus('nurture')[lang],
    value: 17,
    color: 'var(--ss-purple-300)'
  }, {
    label: aaStatus('call_back')[lang],
    value: 9,
    color: 'var(--ss-orange-400)'
  }, {
    label: aaStatus('unreachable')[lang],
    value: 21,
    color: 'var(--ss-red-400)'
  }, {
    label: aaStatus('not_qualified')[lang],
    value: 12,
    color: 'var(--ss-gray-300)'
  }];
  const ranges = [['today', t.today], ['d7', t.d7], ['d30', t.d30]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: heroBg,
      borderRadius: dark ? 22 : 0,
      padding: dark ? 'clamp(20px, 3vw, 36px)' : 0,
      color: dark ? '#fff' : 'inherit',
      position: 'relative',
      overflow: 'hidden'
    }
  }, dark ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineEnd: -120,
      top: -160,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: hero === 'navy' ? 'rgba(7,101,103,0.35)' : 'rgba(195,148,255,0.22)',
      filter: 'blur(60px)',
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: 0.75,
      marginBottom: 6
    }
  }, t.hello), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--ss-font-display)',
      fontWeight: 500,
      fontSize: 'clamp(28px, 3vw, 40px)',
      lineHeight: 1.3,
      color: dark ? '#fff' : 'var(--ss-teal-700)'
    }
  }, t.ovTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 16,
      lineHeight: '24px',
      color: dark ? 'rgba(255,255,255,0.75)' : 'var(--ss-slate-600)'
    }
  }, t.ovSub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.ButtonGroup, {
    items: ranges.map(r => r[1]),
    value: ranges.find(r => r[0] === range)[1],
    onChange: v => setRange(ranges.find(r => r[1] === v)[0]),
    activeColor: "var(--ss-teal-700)",
    style: {
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement(DS.Button, {
    variant: dark ? 'pill' : 'primary',
    icon: "radio",
    onClick: () => go('live')
  }, t.viewLive))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(HeroKpi, {
    dark: dark,
    label: t.kpis.answer,
    value: 62,
    fmt: v => Math.round(v) + '%',
    target: t.target + ' ≥ 55%',
    good: true,
    delay: range
  }), /*#__PURE__*/React.createElement(HeroKpi, {
    dark: dark,
    label: t.kpis.qualified,
    value: 65,
    fmt: v => Math.round(v) + '%',
    target: t.target + ' ≥ 50%',
    good: true,
    delay: range
  }), /*#__PURE__*/React.createElement(HeroKpi, {
    dark: dark,
    label: t.kpis.dropped,
    value: 9,
    fmt: v => Math.round(v) + '%',
    target: t.target + ' ≤ 12%',
    good: true,
    delay: range
  }), /*#__PURE__*/React.createElement(HeroKpi, {
    dark: dark,
    label: t.kpis.aht,
    value: 175,
    fmt: v => Math.floor(v / 60) + 'm ' + String(Math.round(v % 60)).padStart(2, '0') + 's',
    target: t.target + ' ≤ 3m 30s',
    good: true,
    delay: range
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Ticker, {
    t: t,
    lang: lang,
    dark: dark
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
      gap: 16
    }
  }, [[t.kpis.leads, leads.toLocaleString(), 'users', [12, 18, 15, 22, 26, 24, 31]], [t.kpis.csat, '3.7 / 5', 'smile', [3.4, 3.5, 3.6, 3.5, 3.7, 3.8, 3.7]], [t.kpis.dial, '42 s', 'timer', [58, 51, 47, 49, 44, 41, 42]], [t.kpis.odoo, '1m 24s', 'refresh-cw', [130, 118, 101, 96, 90, 88, 84]]].map(([l, v, ic, sp]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: '#fff',
      borderRadius: 12,
      padding: '16px 18px',
      boxShadow: 'var(--ss-shadow-kpi)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'rgba(7,101,103,0.08)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: ic,
    size: 19,
    color: "var(--ss-teal-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ss-slate-600)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--ss-ink)'
    }
  }, v)), /*#__PURE__*/React.createElement(Spark, {
    points: sp,
    color: "var(--ss-teal-500)",
    w: 70,
    h: 28
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: t.funnel
  }, /*#__PURE__*/React.createElement(Funnel, {
    key: range,
    steps: [{
      label: t.funnelSteps[0],
      value: leads,
      color: 'var(--ss-navy-700)'
    }, {
      label: t.funnelSteps[1],
      value: Math.round(1452 * k),
      color: 'var(--ss-teal-800)'
    }, {
      label: t.funnelSteps[2],
      value: answered,
      color: 'var(--ss-teal-500)'
    }, {
      label: t.funnelSteps[3],
      value: qualified,
      color: 'var(--ss-green-600)'
    }, {
      label: t.funnelSteps[4],
      value: Math.round(604 * k),
      color: 'var(--ss-purple-700)'
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    title: t.lang
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    data: [{
      value: 62,
      color: 'var(--ss-teal-700)'
    }, {
      value: 30,
      color: 'var(--ss-purple-300)'
    }, {
      value: 8,
      color: 'var(--ss-lime-300)'
    }],
    center: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 600
      }
    }, answered.toLocaleString()), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--ss-gray-550)'
      }
    }, t.funnelSteps[2]))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    data: [{
      label: lang === 'ar' ? 'العربية (سعودي)' : 'Arabic (Saudi)',
      value: 62,
      color: 'var(--ss-teal-700)'
    }, {
      label: lang === 'ar' ? 'الإنجليزية' : 'English',
      value: 30,
      color: 'var(--ss-purple-300)'
    }, {
      label: lang === 'ar' ? 'الفرنسية ← إنجليزي' : 'French → handled in English',
      value: 8,
      color: 'var(--ss-lime-300)'
    }]
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: t.statusMix,
    action: /*#__PURE__*/React.createElement(DS.Button, {
      variant: "text",
      onClick: () => go('pipeline')
    }, t.seeAll)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 14,
      borderRadius: 7,
      overflow: 'hidden',
      marginBottom: 18
    }
  }, statusData.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: s.value + '%',
      background: s.color
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    data: statusData.slice(0, 3)
  }), /*#__PURE__*/React.createElement(Legend, {
    data: statusData.slice(3)
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: t.recentQ,
    action: /*#__PURE__*/React.createElement(DS.Button, {
      variant: "text",
      onClick: () => go('pipeline')
    }, t.seeAll),
    pad: 12
  }, recent.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    onClick: () => openLead(l.id),
    className: "aa-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 12px',
      borderRadius: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    score: l.score,
    size: 42,
    stroke: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ss-ink)'
    }
  }, lang === 'ar' ? l.ar : l.name, " \xB7 ", l.unit), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ss-gray-550)'
    }
  }, l.project, " \xB7 ", l.channel, " \xB7 ", l.when)), /*#__PURE__*/React.createElement(DS.Tag, {
    color: "green",
    dot: true
  }, "Odoo ", l.odoo))))));
}
window.Overview = Overview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/pipeline.jsx
try { (() => {
function Pipeline({
  t,
  lang,
  openLead,
  project
}) {
  const [q, setQ] = React.useState('');
  const [view, setView] = React.useState(0);
  const leads = AA_LEADS.filter(l => (project === 'all' || l.project === project) && (!q || (l.name + l.ar + l.phone + l.project).toLowerCase().includes(q.toLowerCase())));
  const card = l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    onClick: () => openLead(l.id),
    className: "aa-card",
    style: {
      background: '#fff',
      borderRadius: 12,
      padding: 14,
      boxShadow: 'var(--ss-shadow-kpi)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DS.Avatar, {
    initials: l.name.split(' ').map(x => x[0]).slice(0, 2).join(''),
    size: 32,
    color: l.status === 'qualified' ? 'green' : l.status === 'unreachable' ? 'danger' : 'blue'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ss-ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, lang === 'ar' ? l.ar : l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ss-gray-550)'
    }
  }, l.id, " \xB7 ", l.when)), l.score != null ? /*#__PURE__*/React.createElement(ScoreRing, {
    score: l.score,
    size: 34,
    stroke: 3
  }) : l.status === 'calling' ? /*#__PURE__*/React.createElement(LiveDot, null) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.Tag, {
    color: "gray"
  }, l.project), /*#__PURE__*/React.createElement(DS.Tag, {
    color: "indigo"
  }, l.lang), l.unit !== '—' ? /*#__PURE__*/React.createElement(DS.Tag, {
    color: "blue"
  }, l.unit) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      color: 'var(--ss-gray-550)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l.channel), /*#__PURE__*/React.createElement("span", null, lang === 'ar' ? 'محاولة' : 'Attempt', " ", l.attempts, "/3")), l.odoo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11,
      color: 'var(--ss-green-600)'
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: "check",
    size: 12
  }), "Odoo ", l.odoo, " \xB7 WhatsApp \u2713") : null, l.callback ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ss-orange-400)'
    }
  }, "\u21BB ", l.callback) : null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: t.pipeTitle,
    sub: t.pipeSub,
    right: /*#__PURE__*/React.createElement(DS.SegmentedControls, {
      tabs: lang === 'ar' ? ['لوحة', 'قائمة'] : ['Board', 'List'],
      value: view,
      onChange: setView
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      maxWidth: 420,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(DS.SearchInput, {
    placeholder: t.search,
    value: q,
    onChange: e => setQ(e.target.value),
    width: "100%"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ss-gray-550)'
    }
  }, leads.length, " ", lang === 'ar' ? 'عميل' : 'leads')), view === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(min(78vw, 250px), 1fr)',
      gap: 14,
      overflowX: 'auto',
      paddingBottom: 12,
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch'
    }
  }, AA_STATUSES.map(s => {
    const col = leads.filter(l => l.status === s.id);
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        scrollSnapAlign: 'start',
        background: 'rgba(255,255,255,0.55)',
        borderRadius: 14,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        minHeight: 420
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 4px 6px'
      }
    }, /*#__PURE__*/React.createElement(DS.Tag, {
      color: s.color,
      variant: s.id === 'qualified' ? 'filled' : 'bordered',
      size: "md"
    }, s[lang]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ss-gray-550)'
      }
    }, col.length)), col.map(card));
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "aa-mob",
    style: {
      flexDirection: 'column',
      gap: 10
    }
  }, leads.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      position: 'relative'
    }
  }, card(l), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      insetInlineEnd: 56
    }
  }, /*#__PURE__*/React.createElement(DS.Tag, {
    color: aaStatus(l.status).color,
    size: "sm"
  }, aaStatus(l.status)[lang]))))), /*#__PURE__*/React.createElement("div", {
    className: "aa-desk",
    style: {
      background: '#fff',
      borderRadius: 23,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 150px 140px 160px 80px 90px 150px 140px',
      minWidth: 1130
    }
  }, (lang === 'ar' ? ['العميل', 'الهاتف', 'المشروع', 'القناة', 'اللغة', 'التقييم', 'الحالة', 'Odoo'] : ['Lead', 'Phone', 'Project', 'Channel', 'Lang', 'Score', 'Status', 'Odoo']).map(h => /*#__PURE__*/React.createElement(DS.TableCell, {
    key: h,
    type: "header"
  }, h)), leads.map((l, i) => {
    const c = i % 2 ? 'gray' : 'white',
      s = aaStatus(l.status);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: l.id
    }, /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c,
      type: "account",
      avatar: {
        initials: l.name.split(' ').map(x => x[0]).slice(0, 2).join('')
      },
      sub: l.id
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        color: 'var(--ss-teal-700)'
      },
      onClick: () => openLead(l.id)
    }, lang === 'ar' ? l.ar : l.name)), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c
    }, /*#__PURE__*/React.createElement("span", {
      dir: "ltr"
    }, l.phone)), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c
    }, l.project), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c
    }, l.channel), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c
    }, l.lang), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c
    }, l.score != null ? l.score : '—'), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c,
      type: "tag",
      tagColor: s.color
    }, s[lang]), /*#__PURE__*/React.createElement(DS.TableCell, {
      color: c
    }, l.odoo || '—'));
  }))))));
}
window.Pipeline = Pipeline;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/pipeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/shell.jsx
try { (() => {
var DS = window.SmartSpendDesignSystem_d4f7b4;
function aaStatus(id) {
  return AA_STATUSES.find(s => s.id === id) || {
    id,
    en: id,
    ar: id,
    color: 'gray'
  };
}
function useCountUp(target, dur = 1200, deps = []) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const t0 = Date.now();
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / dur);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p >= 1) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [target, ...deps]);
  return v;
}
function Panel({
  title,
  action,
  children,
  style,
  pad = 24,
  dark
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: dark ? 'rgba(255,255,255,0.06)' : '#fff',
      border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
      borderRadius: 14,
      padding: pad,
      boxShadow: dark ? 'none' : 'var(--ss-shadow-card)',
      minWidth: 0,
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--ss-font-display)',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.3,
      color: dark ? '#fff' : 'var(--ss-teal-700)'
    }
  }, title), action || null) : null, children);
}
function LiveDot({
  color = '#01db72',
  size = 8
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "aa-ping",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: color,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color
    }
  }));
}
function ScoreRing({
  score = 0,
  size = 64,
  stroke = 6,
  dark,
  label
}) {
  const r = (size - stroke) / 2,
    c = 2 * Math.PI * r;
  const col = score >= 60 ? 'var(--ss-ontrack)' : score >= 35 ? 'var(--ss-purple-300)' : 'var(--ss-offtrack)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: dark ? 'rgba(255,255,255,0.15)' : 'var(--ss-progress-track)',
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: col,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - Math.min(100, score) / 100),
    style: {
      transition: 'stroke-dashoffset .6s ease'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: dark ? '#fff' : 'var(--ss-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: size * 0.3,
      lineHeight: 1
    }
  }, Math.round(score)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      opacity: 0.7,
      marginTop: 2
    }
  }, label) : null));
}
const NAV = [['overview', 'layout-dashboard'], ['live', 'phone-call'], ['pipeline', 'kanban'], ['history', 'history'], ['insights', 'chart-no-axes-combined']];
function AASidebar({
  route,
  go,
  t,
  theme,
  rail: railIn,
  mobile,
  open,
  onClose
}) {
  const bg = theme === 'navy' ? '#16202f' : 'var(--ss-teal-700)';
  const rail = mobile ? false : railIn;
  const w = rail ? 76 : mobile ? 260 : 231;
  const goM = id => {
    go(id);
    if (mobile && onClose) onClose();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, mobile && open ? /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(16,25,52,0.45)',
      zIndex: 19
    }
  }) : null, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: mobile ? 'fixed' : 'sticky',
      top: 0,
      insetInlineStart: 0,
      height: mobile ? '100dvh' : '100vh',
      width: w,
      flexShrink: 0,
      background: bg,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width .2s, transform .25s ease',
      transform: mobile && !open ? 'translateX(calc(-100% * var(--aa-dir, 1)))' : 'none',
      overflow: 'hidden',
      overflowY: 'auto',
      zIndex: mobile ? 20 : 5,
      boxShadow: mobile && open ? '0 0 40px rgba(0,0,0,0.3)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 92,
      display: 'flex',
      alignItems: 'center',
      justifyContent: rail ? 'center' : 'flex-start',
      paddingInline: rail ? 0 : 33
    }
  }, rail ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-display)',
      fontSize: 22,
      fontWeight: 600
    }
  }, "S") : /*#__PURE__*/React.createElement("img", {
    src: window.AA_LOGO,
    alt: "SmartSpend",
    style: {
      width: 150,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: rail ? 0 : 33,
      marginBottom: 18,
      display: rail ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: 0.7,
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "AI Call Agent")), NAV.map(([id, icon]) => {
    const on = route === id || route === 'lead' && id === 'pipeline';
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      onClick: () => goM(id),
      title: t.nav[id],
      style: {
        position: 'relative',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        paddingInline: rail ? 0 : 33,
        justifyContent: rail ? 'center' : 'flex-start',
        cursor: 'pointer',
        background: on ? 'rgba(28,57,74,0.55)' : 'transparent',
        fontSize: 16,
        transition: 'background .15s'
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        insetInlineStart: 0,
        top: 0,
        width: 6,
        height: 52,
        borderStartEndRadius: 8,
        borderEndEndRadius: 8,
        background: 'var(--ss-purple-300)'
      }
    }) : null, /*#__PURE__*/React.createElement(DS.Icon, {
      name: icon,
      size: 19,
      color: "#fff"
    }), rail ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, t.nav[id]), id === 'live' && !rail ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginInlineStart: 'auto',
        marginInlineEnd: 20,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 11,
        background: 'rgba(1,219,114,0.18)',
        padding: '2px 8px',
        borderRadius: 20
      }
    }, /*#__PURE__*/React.createElement(LiveDot, {
      size: 6
    }), "6") : null);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: rail ? 12 : '20px 26px',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: rail ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(DS.Avatar, {
    initials: "D",
    size: 32,
    color: "custom"
  }), rail ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "Diar Developments"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7
    }
  }, "Client workspace")))));
}
function AAHeader({
  t,
  lang,
  setLang,
  project,
  setProject,
  onMenu,
  mobile
}) {
  const projOpts = [{
    value: 'all',
    label: t.allProjects
  }, ...AA_PROJECTS.map(p => ({
    value: p,
    label: p
  }))];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: mobile ? 10 : 16,
      height: mobile ? 60 : 76,
      paddingInline: 'clamp(16px, 3vw, 40px)',
      background: 'rgba(239,239,239,0.85)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 4,
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: onMenu,
    style: {
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: "menu",
    size: 24,
    color: "var(--ss-navy-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 20,
      background: '#fff',
      boxShadow: 'var(--ss-shadow-summary)',
      fontSize: 13,
      color: 'var(--ss-navy-700)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(LiveDot, null), mobile ? '6/15' : t.agentOnline, mobile ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-gray-550)'
    }
  }, "\xB7 6/15 ", t.slots)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(DS.TextField, {
    kind: "pill",
    options: projOpts,
    value: project,
    onChange: setProject,
    width: mobile ? 132 : 190
  }), false && /*#__PURE__*/React.createElement(DS.ButtonGroup, {
    items: ['EN', 'عربي'],
    value: lang === 'en' ? 'EN' : 'عربي',
    onChange: v => setLang(v === 'EN' ? 'en' : 'ar'),
    activeColor: "var(--ss-teal-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: "bell",
    size: 20,
    color: "var(--ss-navy-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      insetInlineEnd: -6
    }
  }, /*#__PURE__*/React.createElement(DS.Badge, null, "3"))), mobile ? null : /*#__PURE__*/React.createElement(DS.Avatar, {
    initials: "FD",
    size: 36,
    color: "green",
    online: true
  }));
}
function AAToasts({
  toasts
}) {
  const sm = typeof window !== 'undefined' && window.innerWidth < 720;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: sm ? 12 : 24,
      insetInlineEnd: sm ? 12 : 24,
      insetInlineStart: sm ? 12 : 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, toasts.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.id,
    className: "aa-toast",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: sm ? 0 : 300,
      padding: '12px 16px',
      borderRadius: 12,
      background: 'var(--ss-navy-700)',
      color: '#fff',
      boxShadow: '0 12px 32px rgba(16,25,52,0.35)',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    score: x.score,
    size: 40,
    stroke: 4,
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, x.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.75
    }
  }, x.text)), /*#__PURE__*/React.createElement(DS.Icon, {
    name: "circle-check",
    size: 18,
    color: "#01db72",
    style: {
      marginInlineStart: 'auto'
    }
  }))));
}
function PageHead({
  title,
  sub,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--ss-font-display)',
      fontWeight: 500,
      fontSize: 'clamp(24px, 3vw, 40px)',
      lineHeight: 1.3,
      color: 'var(--ss-teal-700)',
      textTransform: 'capitalize'
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'clamp(14px, 1.6vw, 16px)',
      lineHeight: 1.5,
      color: 'var(--ss-slate-600)'
    }
  }, sub) : null), right || null);
}
Object.assign(window, {
  aaStatus,
  useCountUp,
  Panel,
  LiveDot,
  ScoreRing,
  AASidebar,
  AAHeader,
  AAToasts,
  PageHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-agent/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-agent/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/CampaignList.jsx
try { (() => {
var SS = window.SmartSpendDesignSystem_d4f7b4;
const CL_ROWS = [{
  id: 'IO-2024-456',
  sub: '@mayoralven',
  av: {
    initials: 'MV',
    color: 'blue'
  },
  client: 'TechCorp Solutions',
  project: 'Q4 Product Launch',
  name: 'Q4 Product Launch - Lead Generation',
  dur: '15 oct 2023 - 15 oct 2024',
  days: 6,
  bx: '5000$',
  bxp: '85%',
  tr: '30%',
  dir: 'up',
  kpi: 'Leads: 500 · Qualified: 60%',
  ach: '50%',
  status: 'In Progress',
  sc: 'danger'
}, {
  id: 'IO-2024-457',
  sub: 'Text2',
  av: {
    initials: 'CX',
    color: 'green'
  },
  client: 'Cometrex',
  project: 'Brand Awareness',
  name: 'Spring Reach Push',
  dur: '01 jan 2025 - 30 mar 2025',
  days: 7,
  bx: '12000$',
  bxp: '95%',
  tr: '12%',
  dir: 'down',
  kpi: 'Reach: 20000',
  ach: '72%',
  status: 'In Review',
  sc: 'green'
}, {
  id: 'IO-2024-458',
  sub: '@mayoralven',
  av: {
    initials: 'MV',
    color: 'blue'
  },
  client: 'TechCorp Solutions',
  project: 'Q4 Product Launch',
  name: 'Retargeting - Lead Generation',
  dur: '15 oct 2023 - 15 oct 2024',
  days: 7,
  bx: '5000$',
  bxp: '85%',
  tr: '30%',
  dir: 'up',
  kpi: 'Impressions: 5000 · Clicks: 50000',
  ach: '50%',
  status: 'Paused',
  sc: 'green'
}, {
  id: 'IO-2024-459',
  sub: 'Text2',
  av: {
    initials: 'NR',
    color: 'indigo'
  },
  client: 'Nile Realty',
  project: 'New Compound',
  name: 'Compound Launch - Leads',
  dur: '10 aug 2026 - 30 sep 2026',
  days: 8,
  bx: '8000$',
  bxp: '64%',
  tr: '8%',
  dir: 'up',
  kpi: 'Leads: 500 · CPL: 12$',
  ach: '64%',
  status: 'Completed',
  sc: 'blue'
}, {
  id: 'IO-2024-460',
  sub: '@mayoralven',
  av: {
    initials: 'MV',
    color: 'blue'
  },
  client: 'TechCorp Solutions',
  project: 'Q4 Product Launch',
  name: 'Q4 Product Launch - Search',
  dur: '15 oct 2023 - 15 oct 2024',
  days: 8,
  bx: '5000$',
  bxp: '85%',
  tr: '30%',
  dir: 'up',
  kpi: 'Reach: 20000',
  ach: '50%',
  status: 'Closed',
  sc: 'green'
}];
const CL_STATS = [['Total Campaign', '29'], ['In Progress Campaign', '12'], ['In Review Campaign', '4'], ['Completed', '2'], ['Closed', '2'], ['Paused', '6'], ['Archived', '3']];
function CampaignList({
  onOpen
}) {
  const {
    PageTitle,
    SearchInput,
    Button,
    SummaryCard,
    TableCell,
    Toggle,
    Checkbox,
    Pagination,
    Icon
  } = SS;
  const [q, setQ] = React.useState('');
  const [filter, setFilter] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const rows = CL_ROWS.filter(r => (!filter || filter === 'Total Campaign' || filter.toLowerCase().startsWith(r.status.toLowerCase())) && (!q || (r.id + r.client + r.project + r.name).toLowerCase().includes(q.toLowerCase())));
  const cols = '44px 170px 170px 160px 200px 190px 110px 130px 180px 110px 40px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PageTitle, {
    title: "Campaign List",
    breadcrumb: ['Clients', 'Campaigns'],
    description: "Monitor and manage all active and completed campaigns generated from approved IOs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 37,
      height: 37,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--ss-shadow-float)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 18,
    color: "var(--ss-navy-700)"
  })), /*#__PURE__*/React.createElement(SearchInput, {
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Search"), /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: () => {
      setQ('');
      setFilter(null);
    },
    style: {
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "rotate-ccw",
    size: 19,
    color: "var(--ss-teal-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "pill"
  }, "Closed Reports Campaigns")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 16
    }
  }, CL_STATS.map(([l, v]) => /*#__PURE__*/React.createElement(SummaryCard, {
    key: l,
    label: l,
    value: v,
    active: filter === l,
    onClick: () => setFilter(filter === l ? null : l)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 23,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      minWidth: 1504
    }
  }, /*#__PURE__*/React.createElement(TableCell, {
    type: "header"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    color: "gray"
  })), ['IO ID', 'Client', 'Project', 'Campaign', 'Duration', 'Days', 'Budget (X)', 'KPI Targets', 'Status', ''].map((h, i) => /*#__PURE__*/React.createElement(TableCell, {
    key: i,
    type: "header",
    sortable: ['IO ID', 'Budget (X)', 'Days'].includes(h)
  }, h)), rows.map((r, i) => {
    const c = i % 2 ? 'gray' : 'white';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: r.id
    }, /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, /*#__PURE__*/React.createElement(Checkbox, {
      color: "gray"
    })), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75,
      type: "account",
      avatar: r.av,
      sub: r.sub
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      },
      onClick: () => onOpen && onOpen(r)
    }, r.id)), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, r.client), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, r.project), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, r.name), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, r.dur), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, r.days), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75,
      type: "price",
      trend: r.tr,
      trendDirection: r.dir,
      sub: r.bxp
    }, r.bx), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, r.kpi)), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75,
      type: "tag",
      tagColor: r.sc
    }, r.status), /*#__PURE__*/React.createElement(TableCell, {
      color: c,
      height: 75
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ellipsis",
      size: 18,
      color: "var(--ss-gray-700)"
    })));
  }))), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pages: 50,
    shown: rows.length,
    total: 20,
    onChange: setPage,
    style: {
      padding: '24px 40px'
    }
  })));
}
window.CampaignList = CampaignList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/CampaignList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/CreateIO.jsx
try { (() => {
var SS = window.SmartSpendDesignSystem_d4f7b4;
function CreateIO({
  onDone
}) {
  const {
    PageTitle,
    Link,
    Input,
    TextField,
    Button,
    Switch,
    Tag
  } = SS;
  const [budget, setBudget] = React.useState('');
  const [alloc, setAlloc] = React.useState('100');
  const [sent, setSent] = React.useState(false);
  const b = parseFloat(budget) || 0;
  const allocated = b * (parseFloat(alloc) || 0) / 100;
  const card = {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 14,
    padding: '24px 26px',
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  };
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 20
  };
  const h = {
    fontFamily: 'var(--ss-font-display)',
    fontWeight: 500,
    fontSize: 18,
    color: 'var(--ss-teal-700)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 1240
    }
  }, /*#__PURE__*/React.createElement(PageTitle, {
    title: "Create IO",
    breadcrumb: ['Client', 'IO List', 'Create IO']
  }), /*#__PURE__*/React.createElement(Link, {
    onClick: e => {
      e.preventDefault();
      onDone && onDone();
    }
  }, "Back to IO list"), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("span", {
    style: h
  }, "Client Details"), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '14px'
    }
  }, "Client Name ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-required)'
    }
  }, "*")), /*#__PURE__*/React.createElement(TextField, {
    width: "100%",
    placeholder: "Select client",
    options: ['TechCorp Solutions', 'Cometrex', 'Nile Realty']
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '14px'
    }
  }, "Project ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ss-required)'
    }
  }, "*")), /*#__PURE__*/React.createElement(TextField, {
    width: "100%",
    placeholder: "Select project",
    options: ['Q4 Product Launch', 'Brand Awareness']
  })))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("span", {
    style: h
  }, "IO Details"), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, /*#__PURE__*/React.createElement(Input, {
    label: "IO Name",
    required: true,
    placeholder: "e.g. Q4 Product Launch - Lead Generation"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Total Budget (EUR)",
    required: true,
    placeholder: "0.00",
    value: budget,
    onChange: e => setBudget(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Allocation %",
    required: true,
    value: alloc,
    onChange: e => setAlloc(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Allocated Budget",
    readOnly: true,
    value: 'EUR ' + allocated.toFixed(2),
    hint: 'Client budget EUR ' + (allocated * 0.88).toFixed(2) + ' — after 12% management fee'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    defaultOn: true,
    label: "Active"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Enable Online Payment"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 12
    }
  }, sent ? /*#__PURE__*/React.createElement(Tag, {
    color: "blue",
    size: "md",
    dot: true
  }, "Sent for approval") : null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onDone
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    icon: "send",
    onClick: () => setSent(true)
  }, "Submit for Approval")));
}
window.CreateIO = CreateIO;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/CreateIO.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Overview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SS = window.SmartSpendDesignSystem_d4f7b4;
function Overview() {
  const {
    PageTitle,
    TextField,
    Button,
    KpiCard,
    Tag
  } = SS;
  const [client, setClient] = React.useState();
  const [io, setIo] = React.useState();
  const info = [['IO-2024-001', 'Q4 Product Launch - Lead Generation'], ['Project Name', 'Cometrex'], ['Budget', '$250,000'], ['Start Date', 'Dec 28, 2024'], ['End Date', 'Dec 28, 2024']];
  const label = {
    fontFamily: 'var(--ss-font-body)',
    fontSize: 14,
    lineHeight: '20px',
    color: 'var(--ss-slate-600)',
    textTransform: 'capitalize',
    margin: '8px 0 12px'
  };
  const section = (title, pct, kpis, metrics) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 8,
      padding: '24px 26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ss-font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--ss-teal-700)',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 270,
      height: 8,
      borderRadius: 4,
      background: 'var(--ss-progress-track)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: 'var(--ss-purple-700)',
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ss-ink)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "KPIs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement(KpiCard, _extends({
    key: i
  }, k)))), metrics ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Metrics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, metrics.map((k, i) => /*#__PURE__*/React.createElement(KpiCard, _extends({
    key: i
  }, k))))) : null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PageTitle, {
    title: "Welcome back, John",
    color: "var(--ss-navy-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    kind: "pill",
    placeholder: "Client Name",
    value: client,
    onChange: setClient,
    options: ['TechCorp Solutions', 'Cometrex', 'Nile Realty']
  }), /*#__PURE__*/React.createElement(TextField, {
    kind: "pill",
    placeholder: "IO Name",
    value: io,
    onChange: setIo,
    options: ['IO-2024-001', 'IO-2024-002']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 35,
      borderRadius: 20,
      boxShadow: '1px 1px 1px 0px rgba(16,25,52,0.4)',
      background: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 18px',
      fontSize: 13,
      color: 'var(--ss-slate-600)'
    }
  }, "Last updated: Mar 18, 2026 20:28:41")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 8,
      padding: '24px 38px',
      display: 'grid',
      gridTemplateColumns: '1.6fr repeat(4, 1fr)',
      gap: 24
    }
  }, info.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--ss-slate-600)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      color: 'rgb(16,24,40)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(PageTitle, {
    level: "section",
    title: "Objective Performance Metrics"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: "plus"
  }, "Data Range")), section('Brand Awareness', 60, [{
    title: 'Spending',
    status: 'off',
    recent: '$68,500.00',
    target: '$20,500.00',
    targetMax: '$20,500.00',
    progress: 0.3
  }, {
    title: 'Impression',
    status: 'off',
    recent: '14',
    target: '10',
    targetMax: '20',
    progress: 0.3
  }], [{
    title: 'Reach',
    status: 'on',
    recent: '15',
    target: '10',
    targetMax: '15',
    progress: 0.95
  }, {
    title: 'Video View',
    status: 'on',
    recent: '5',
    target: '10',
    targetMax: '15',
    progress: 0.3
  }]), section('Lead Generation', 60, [{
    title: 'Spending',
    status: 'off',
    progress: 0.3
  }, {
    title: 'Number of Leads',
    status: 'on',
    progress: 0.9
  }, {
    title: 'CPL',
    status: 'off',
    progress: 0.36
  }, {
    title: 'Qualified Leads',
    status: 'on',
    progress: 0.7
  }]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "indigo",
    size: "md"
  }, "Search Campaigns"), /*#__PURE__*/React.createElement(Tag, {
    color: "gray",
    size: "md"
  }, "Charts are omitted in this kit")));
}
window.Overview = Overview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Shell.jsx
try { (() => {
var SS = window.SmartSpendDesignSystem_d4f7b4;
function PortalShell({
  route,
  setRoute,
  children
}) {
  const {
    SideMenu,
    TopBar,
    TextField
  } = SS;
  const [cur, setCur] = React.useState('USD - US Dollar');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--ss-gray-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SideMenu, {
    active: route,
    onSelect: setRoute,
    logoSrc: "../../assets/logo-white.svg"
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    userName: "Fawzy D.",
    style: {
      position: 'relative',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    kind: "currency",
    value: cur,
    onChange: setCur,
    options: ['USD - US Dollar', 'EUR - Euro', 'EGP - Egyptian Pound']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 52px 48px 75px',
      marginTop: -62,
      position: 'relative',
      zIndex: 1
    }
  }, children)));
}
window.PortalShell = PortalShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonGroup = __ds_scope.ButtonGroup;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.IconTextSet = __ds_scope.IconTextSet;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.PageTitle = __ds_scope.PageTitle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BadgeOnlineBase = __ds_scope.BadgeOnlineBase;

__ds_ns.Grade = __ds_scope.Grade;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Star = __ds_scope.Star;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.SummaryCard = __ds_scope.SummaryCard;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Breakdown = __ds_scope.Breakdown;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.InputChip = __ds_scope.InputChip;

__ds_ns.InputText = __ds_scope.InputText;

__ds_ns.ListElement = __ds_scope.ListElement;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.SegmentedControls = __ds_scope.SegmentedControls;

__ds_ns.SideMenu = __ds_scope.SideMenu;

__ds_ns.Tab = __ds_scope.Tab;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
