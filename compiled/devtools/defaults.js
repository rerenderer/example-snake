// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.defaults');
goog.require('cljs.core');
devtools.defaults.known_features = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$formatters,cljs.core.cst$kw$hints,cljs.core.cst$kw$async], null);
devtools.defaults.default_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$formatters], null);
devtools.defaults.feature_groups = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$all,devtools.defaults.known_features,cljs.core.cst$kw$default,devtools.defaults.default_features], null);
devtools.defaults.prefs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$standalone_DASH_type_DASH_style,cljs.core.cst$kw$bypass_DASH_availability_DASH_checks,cljs.core.cst$kw$max_DASH_number_DASH_body_DASH_items,cljs.core.cst$kw$symbol_DASH_style,cljs.core.cst$kw$meta_DASH_reference_DASH_tag,cljs.core.cst$kw$nil_DASH_style,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_tag,cljs.core.cst$kw$type_DASH_header_DASH_background,cljs.core.cst$kw$instance_DASH_value_DASH_separator,cljs.core.cst$kw$body_DASH_pre_DASH_handler,cljs.core.cst$kw$initial_DASH_hierarchy_DASH_depth_DASH_budget,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_tag,cljs.core.cst$kw$line_DASH_index_DASH_separator,cljs.core.cst$kw$suppress_DASH_preload_DASH_install,cljs.core.cst$kw$new_DASH_line_DASH_string_DASH_replacer,cljs.core.cst$kw$body_DASH_field_DASH_td3_DASH_style,cljs.core.cst$kw$more_DASH_fields_DASH_symbol,cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_spacer,cljs.core.cst$kw$meta_DASH_reference_DASH_style,cljs.core.cst$kw$protocol_DASH_background,cljs.core.cst$kw$protocols_DASH_icon,cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_tag,cljs.core.cst$kw$symbol_DASH_tag,cljs.core.cst$kw$render_DASH_keywords,cljs.core.cst$kw$fn_DASH_header_DASH_tag,cljs.core.cst$kw$keyword_DASH_tag,cljs.core.cst$kw$header_DASH_style,cljs.core.cst$kw$render_DASH_metas,cljs.core.cst$kw$fields_DASH_header_DASH_tag,cljs.core.cst$kw$fn_DASH_args_DASH_style,cljs.core.cst$kw$max_DASH_instance_DASH_custom_DASH_printing_DASH_level,cljs.core.cst$kw$expandable_DASH_inner_DASH_style,cljs.core.cst$kw$table,cljs.core.cst$kw$fn_DASH_header_DASH_style,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label,cljs.core.cst$kw$fn_DASH_name_DASH_style,cljs.core.cst$kw$nil_DASH_tag,cljs.core.cst$kw$instance_DASH_header_DASH_style,cljs.core.cst$kw$float_DASH_tag,cljs.core.cst$kw$protocol_DASH_ns_DASH_name_DASH_tag,cljs.core.cst$kw$fast_DASH_protocol_DASH_style,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_more_DASH_symbol,cljs.core.cst$kw$has_DASH_body_DASH_pre_DASH_handler,cljs.core.cst$kw$index_DASH_tag,cljs.core.cst$kw$rest_DASH_symbol,cljs.core.cst$kw$protocol_DASH_name_DASH_tag,cljs.core.cst$kw$instance_DASH_header_DASH_background,cljs.core.cst$kw$body_DASH_tag,cljs.core.cst$kw$cljs_DASH_land_DASH_tag,cljs.core.cst$kw$max_DASH_list_DASH_protocols,cljs.core.cst$kw$string_DASH_abbreviation_DASH_marker,cljs.core.cst$kw$max_DASH_header_DASH_elements,cljs.core.cst$kw$native_DASH_icon,cljs.core.cst$kw$instance_DASH_body_DASH_fields_DASH_table_DASH_tag,cljs.core.cst$kw$render_DASH_symbols,cljs.core.cst$kw$protocol_DASH_method_DASH_name_DASH_style,cljs.core.cst$kw$type_DASH_name_DASH_tag,cljs.core.cst$kw$list_DASH_separator,cljs.core.cst$kw$td,cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_spacer,cljs.core.cst$kw$li,cljs.core.cst$kw$fast_DASH_protocol_DASH_tag,cljs.core.cst$kw$render_DASH_strings,cljs.core.cst$kw$standalone_DASH_type_DASH_tag,cljs.core.cst$kw$protocol_DASH_ns_DASH_name_DASH_style,cljs.core.cst$kw$type_DASH_header_DASH_tag,cljs.core.cst$kw$cljs_DASH_land_DASH_style,cljs.core.cst$kw$lambda_DASH_icon,cljs.core.cst$kw$list_DASH_style,cljs.core.cst$kw$sanity_DASH_hint_DASH_min_DASH_length,cljs.core.cst$kw$render_DASH_functions,cljs.core.cst$kw$fields_DASH_header_DASH_open_DASH_symbol,cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_style,cljs.core.cst$kw$header_DASH_pre_DASH_handler,cljs.core.cst$kw$tr,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_style,cljs.core.cst$kw$plus_DASH_symbol,cljs.core.cst$kw$fn_DASH_prefix_DASH_style,cljs.core.cst$kw$args_DASH_open_DASH_symbol,cljs.core.cst$kw$expanded_DASH_string_DASH_style,cljs.core.cst$kw$fn_DASH_name_DASH_tag,cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_tag,cljs.core.cst$kw$standard_DASH_li_DASH_style,cljs.core.cst$kw$fields_DASH_icon,cljs.core.cst$kw$body_DASH_style,cljs.core.cst$kw$type_DASH_wrapper_DASH_tag,cljs.core.cst$kw$standard_DASH_li_DASH_tag,cljs.core.cst$kw$type_DASH_wrapper_DASH_style,cljs.core.cst$kw$render_DASH_bools,cljs.core.cst$kw$dq,cljs.core.cst$kw$fields_DASH_header_DASH_no_DASH_fields_DASH_symbol,cljs.core.cst$kw$nil_DASH_label,cljs.core.cst$kw$list_DASH_open_DASH_symbol,cljs.core.cst$kw$body_DASH_field_DASH_td2_DASH_style,cljs.core.cst$kw$type_DASH_header_DASH_style,cljs.core.cst$kw$header_DASH_field_DASH_separator,cljs.core.cst$kw$body_DASH_field_DASH_td3_DASH_tag,cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_style,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_wrapper_DASH_style,cljs.core.cst$kw$more_DASH_symbol,cljs.core.cst$kw$string_DASH_tag,cljs.core.cst$kw$meta_DASH_wrapper_DASH_tag,cljs.core.cst$kw$method_DASH_icon,cljs.core.cst$kw$max_DASH_protocol_DASH_method_DASH_arities_DASH_list,cljs.core.cst$kw$min_DASH_expandable_DASH_sequable_DASH_count_DASH_for_DASH_well_DASH_known_DASH_types,cljs.core.cst$kw$basis_DASH_icon,cljs.core.cst$kw$fn_DASH_args_DASH_tag,cljs.core.cst$kw$standard_DASH_ol_DASH_style,cljs.core.cst$kw$file_DASH_reader,cljs.core.cst$kw$bool_DASH_tag,cljs.core.cst$kw$expandable_DASH_inner_DASH_tag,cljs.core.cst$kw$fn_DASH_prefix_DASH_tag,cljs.core.cst$kw$float_DASH_style,cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_tag,cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_style,cljs.core.cst$kw$div,cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_tag,cljs.core.cst$kw$body_DASH_post_DASH_handler,cljs.core.cst$kw$more_DASH_marker,cljs.core.cst$kw$header_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_name_DASH_tag,cljs.core.cst$kw$expanded_DASH_string_DASH_tag,cljs.core.cst$kw$bool_DASH_style,cljs.core.cst$kw$default_DASH_envelope_DASH_style,cljs.core.cst$kw$protocol_DASH_more_DASH_tag,cljs.core.cst$kw$string_DASH_style,cljs.core.cst$kw$body_DASH_field_DASH_name_DASH_style,cljs.core.cst$kw$meta_DASH_body_DASH_tag,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_background,cljs.core.cst$kw$integer_DASH_style,cljs.core.cst$kw$native_DASH_reference_DASH_background,cljs.core.cst$kw$header_DASH_field_DASH_name_DASH_style,cljs.core.cst$kw$default_DASH_envelope_DASH_header,cljs.core.cst$kw$instance_DASH_type_DASH_header_DASH_style,cljs.core.cst$kw$ol,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_style,cljs.core.cst$kw$min_DASH_expandable_DASH_sequable_DASH_count,cljs.core.cst$kw$fields_DASH_header_DASH_style,cljs.core.cst$kw$instance_DASH_type_DASH_header_DASH_tag,cljs.core.cst$kw$spacer,cljs.core.cst$kw$body_DASH_field_DASH_td1_DASH_style,cljs.core.cst$kw$body_DASH_field_DASH_tr_DASH_tag,cljs.core.cst$kw$header_DASH_field_DASH_name_DASH_tag,cljs.core.cst$kw$type_DASH_name_DASH_style,cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_tag,cljs.core.cst$kw$list_DASH_tag,cljs.core.cst$kw$instance_DASH_body_DASH_fields_DASH_table_DASH_style,cljs.core.cst$kw$body_DASH_field_DASH_td1_DASH_tag,cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_style,cljs.core.cst$kw$slow_DASH_protocol_DASH_style,cljs.core.cst$kw$render_DASH_types,cljs.core.cst$kw$args_DASH_close_DASH_symbol,cljs.core.cst$kw$string_DASH_postfix_DASH_limit,cljs.core.cst$kw$disable_DASH_cljs_DASH_fn_DASH_formatting,cljs.core.cst$kw$item_DASH_style,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_list_DASH_header_DASH_separator,cljs.core.cst$kw$protocol_DASH_method_DASH_tag,cljs.core.cst$kw$index_DASH_style,cljs.core.cst$kw$list_DASH_close_DASH_symbol,cljs.core.cst$kw$render_DASH_numbers,cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_tag,cljs.core.cst$kw$empty_DASH_basis_DASH_symbol,cljs.core.cst$kw$fn_DASH_icon,cljs.core.cst$kw$integer_DASH_tag,cljs.core.cst$kw$protocols_DASH_header_DASH_tag,cljs.core.cst$kw$protocol_DASH_method_DASH_name_DASH_tag,cljs.core.cst$kw$item_DASH_tag,cljs.core.cst$kw$instance_DASH_value_DASH_tag,cljs.core.cst$kw$expandable_DASH_wrapper_DASH_style,cljs.core.cst$kw$expandable_DASH_style,cljs.core.cst$kw$well_DASH_known_DASH_types,cljs.core.cst$kw$fn_DASH_multi_DASH_arity_DASH_args_DASH_indent_DASH_style,cljs.core.cst$kw$type_DASH_ref_DASH_style,cljs.core.cst$kw$circular_DASH_ref_DASH_icon,cljs.core.cst$kw$type_DASH_basis_DASH_style,cljs.core.cst$kw$standard_DASH_ol_DASH_tag,cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_style,cljs.core.cst$kw$circular_DASH_reference_DASH_body_DASH_tag,cljs.core.cst$kw$has_DASH_body_DASH_post_DASH_handler,cljs.core.cst$kw$native_DASH_reference_DASH_tag,cljs.core.cst$kw$aligned_DASH_li_DASH_tag,cljs.core.cst$kw$native_DASH_reference_DASH_wrapper_DASH_style,cljs.core.cst$kw$render_DASH_instances,cljs.core.cst$kw$expandable_DASH_symbol,cljs.core.cst$kw$fn_DASH_multi_DASH_arity_DASH_args_DASH_indent_DASH_tag,cljs.core.cst$kw$expandable_DASH_tag,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_tag,cljs.core.cst$kw$max_DASH_instance_DASH_header_DASH_fields,cljs.core.cst$kw$type_DASH_ref_DASH_tag,cljs.core.cst$kw$max_DASH_print_DASH_level,cljs.core.cst$kw$meta_DASH_wrapper_DASH_style,cljs.core.cst$kw$multi_DASH_arity_DASH_symbol,cljs.core.cst$kw$render_DASH_nils,cljs.core.cst$kw$meta_DASH_header_DASH_tag,cljs.core.cst$kw$print_DASH_config_DASH_overrides,cljs.core.cst$kw$slow_DASH_protocol_DASH_tag,cljs.core.cst$kw$header_DASH_field_DASH_tag,cljs.core.cst$kw$header_DASH_post_DASH_handelr,cljs.core.cst$kw$meta_DASH_body_DASH_style,cljs.core.cst$kw$native_DASH_reference_DASH_wrapper_DASH_tag,cljs.core.cst$kw$fields_DASH_header_DASH_close_DASH_symbol,cljs.core.cst$kw$string_DASH_prefix_DASH_limit,cljs.core.cst$kw$native_DASH_reference_DASH_style,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_wrapper_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_td2_DASH_tag,cljs.core.cst$kw$type_DASH_basis_DASH_tag,cljs.core.cst$kw$features_DASH_to_DASH_install,cljs.core.cst$kw$aligned_DASH_li_DASH_style,cljs.core.cst$kw$default_DASH_envelope_DASH_tag,cljs.core.cst$kw$protocol_DASH_more_DASH_style,cljs.core.cst$kw$instance_DASH_header_DASH_tag,cljs.core.cst$kw$ns_DASH_icon,cljs.core.cst$kw$protocol_DASH_name_DASH_style,cljs.core.cst$kw$body_DASH_line_DASH_max_DASH_print_DASH_level,cljs.core.cst$kw$circular_DASH_reference_DASH_tag,cljs.core.cst$kw$keyword_DASH_style,cljs.core.cst$kw$header_DASH_expander_DASH_symbol,cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_style],["box-shadow:0px 0px 0px 1px rgba(0,160,220,0.5) inset;margin-top:1px;border-radius:2px;",false,(100),"color:rgba(0,0,0,1);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_reference_DASH_style], null),"color:rgba(128,128,128,1);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(0,160,220,0.5);position:absolute;top:1px;right:1px;bottom:1px;left:1px;border-radius:1px;"], null)], null),"",null,((20) - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_style], null),"",false,"\u21B5","vertical-align:top;padding:0;","\u2026",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"color:rgba(204,204,204,1);"], null),"="], null),"background-color:rgba(255,102,0,1);border-radius:0 2px 2px 0;",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(41,59,163,0.5);position:absolute;top:1px;right:1px;bottom:1px;left:1px;border-radius:1px;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(41,59,163,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"\u22A2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$symbol_DASH_style], null),true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fn_DASH_header_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$keyword_DASH_style], null),"white-space:nowrap;",true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fields_DASH_header_DASH_style], null),"color:rgba(170,130,20,1);",(2),"margin-left:-3px;","table",null,"more\u2026","color:rgba(30,130,30,1);margin-right:2px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$nil_DASH_style], null),"box-shadow:0px 0px 0px 1px rgba(0,160,220,0.5) inset;margin-top:1px;border-radius:2px;position:relative;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$float_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$protocol_DASH_ns_DASH_name_DASH_style], null),"position:relative;padding:0px 4px;border-radius:2px;-webkit-user-select:none;color:rgba(255,255,170,1);","\u2026",null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$index_DASH_style], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$protocol_DASH_name_DASH_style], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$body_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$cljs_DASH_land_DASH_style], null),(5)," \u2026 ",(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(255,0,255,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"js"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$instance_DASH_body_DASH_fields_DASH_table_DASH_style], null),true,"margin-right:6px;color:rgba(41,59,163,1) ;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$type_DASH_name_DASH_style], null)," ","td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"color:rgba(204,204,204,1);"], null),"="], null),"li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fast_DASH_protocol_DASH_style], null),true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$standalone_DASH_type_DASH_style], null),"color:rgba(150,150,150,1);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$type_DASH_header_DASH_style], null),"background-color:rgba(100,255,100,0.08);color:rgba(0,0,0,1);border-radius:2px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(30,130,30,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"\u03BB"], null),null,(128),true,"","margin-left:6px;",null,"tr","background-color:rgba(153,153,153,1);min-width:50px;display:inline-block;color:rgba(255,255,255,1);cursor:pointer;line-height:14px;font-size:10px;border-radius:2px;padding:0px 4px 0px 4px;margin:1px 0px 0px 0px;-webkit-user-select:none;","+",null,"[","padding:0px 12px 0px 12px;color:rgba(196,26,22,1);white-space:pre;border-top:1px solid rgba(255,100,100,0.4);border-radius:1px;margin:0px 0px 2px 0px;background-color:rgba(255,100,100,0.08);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fn_DASH_name_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_style], null),"margin-left:0px;min-height:14px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(0,160,220,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"\u220B"], null),"display:inline-block;padding:3px 12px;border-top:2px solid rgba(60,90,60,0.1);margin:1px;margin-top:0px;background-color:rgba(100,255,100,0.08);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$type_DASH_wrapper_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.cst$kw$standard_DASH_li_DASH_style], null),"position:relative;padding-left:1px;border-radius:2px;",true,"\"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$header_DASH_field_DASH_name_DASH_style], null),"\u2205"], null),"nil","","vertical-align:top;padding:0;","color:rgba(238,238,355,1);padding:0px 2px 0px 2px;-webkit-user-select:none;border-radius:2px;"," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$body_DASH_field_DASH_td3_DASH_style], null),"list-style-type:none;padding-left:0px;margin-top:0px;margin-bottom:0px;margin-left:0px;","position:relative;border-radius:2px;","\u2026",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$string_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_wrapper_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(41,59,163,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"m"], null),(3),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(0,160,220,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"\u03B2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fn_DASH_args_DASH_style], null),"list-style-type:none;padding-left:0px;margin-top:0px;margin-bottom:0px;margin-left:0px;",null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$bool_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$expandable_DASH_inner_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fn_DASH_prefix_DASH_style], null),"color:rgba(28,136,207,1);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_style], null),"color:rgba(0,160,220,1);margin-right:6px;","div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_style], null),null,"\u2026",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$header_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$body_DASH_field_DASH_name_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$expanded_DASH_string_DASH_style], null),"color:rgba(0,153,153,1);",null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$protocol_DASH_more_DASH_style], null),"color:rgba(196,26,22,1);","color:rgba(0,160,220,1);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_body_DASH_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(255,255,200,1);position:absolute;top:1px;right:1px;bottom:1px;left:1px;border-radius:1px;border-radius:0 1px 1px 0;"], null)], null),"color:rgba(28,0,207,1);",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(255,255,255,1);position:absolute;top:1px;right:1px;bottom:1px;left:1px;border-radius:1px;"], null)], null),"color:rgba(0,160,220,1);","\uD83D\uDCE8","color:rgba(238,238,355,1);padding:0px 2px 0px 2px;-webkit-user-select:none;border-radius:2px 0 0 2px;","ol","position:relative;padding:0 2px 0 4px;",(0),"padding:0px 3px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$instance_DASH_type_DASH_header_DASH_style], null)," ","vertical-align:top;padding:0;padding-right:4px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.cst$kw$body_DASH_field_DASH_tr_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$header_DASH_field_DASH_name_DASH_style], null),"padding-right:4px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$list_DASH_style], null),"border-spacing:0;border-collapse:collapse;margin-bottom:-2px;display:inline-block;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$body_DASH_field_DASH_td1_DASH_style], null),"margin-left:0px;min-height:14px;","position:relative;padding:0px 4px;border-radius:2px;-webkit-user-select:none;color:rgba(238,238,238,1);",true,"]",(20),false,"display:inline-block;white-space:nowrap;border-left:2px solid rgba(100,100,100,0.2);padding:0px 4px 0px 4px;margin:1px 0px 0px 0px;"," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$protocol_DASH_method_DASH_style], null),"min-width:50px;display:inline-block;text-align:right;vertical-align:top;background-color:rgba(221,221,221,1);color:rgba(0,0,0,1);opacity:0.5;margin-right:3px;padding:0px 4px 0px 4px;margin:1px 0px 0px 0px;-webkit-user-select:none;","",true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,null], null),cljs.core.cst$kw$basis_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_style], null),"\u2205"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(30,130,30,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"fn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$integer_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$protocols_DASH_header_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$protocol_DASH_method_DASH_name_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$item_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$instance_DASH_value_DASH_style], null),null,"white-space:nowrap;padding-left:3px;",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 34, ["cljs.core/ValSeq",null,"cljs.core/ArrayNodeSeq",null,"cljs.core/Cons",null,"cljs.core/ES6IteratorSeq",null,"cljs.core/List",null,"cljs.core/PersistentArrayMapSeq",null,"cljs.core/Symbol",null,"cljs.core/PersistentHashMap",null,"cljs.core/Subvec",null,"cljs.core/EmptyList",null,"cljs.core/BlackNode",null,"cljs.core/PersistentArrayMap",null,"cljs.core/LazyTransformer",null,"cljs.core/PersistentTreeMapSeq",null,"cljs.core/PersistentQueueSeq",null,"cljs.core/Keyword",null,"cljs.core/Range",null,"cljs.core/UUID",null,"cljs.core/IndexedSeq",null,"cljs.core/KeySeq",null,"cljs.core/RSeq",null,"cljs.core/ObjMap",null,"cljs.core/PersistentVector",null,"cljs.core/PersistentTreeSet",null,"cljs.core/Eduction",null,"cljs.core/NodeSeq",null,"cljs.core/RedNode",null,"cljs.core/ExceptionInfo",null,"cljs.core/PersistentHashSet",null,"cljs.core/PersistentTreeMap",null,"cljs.core/LazySeq",null,"cljs.core/ChunkedSeq",null,"cljs.core/ChunkedCons",null,"cljs.core/TaggedLiteral",null], null), null),"visibility:hidden;","position:relative;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(255,0,0,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:0px 4px;top:2px;"], null),"\u221E"], null),"margin-right:3px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,cljs.core.cst$kw$standard_DASH_ol_DASH_style], null),"color:rgba(150,150,150,1);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$circular_DASH_reference_DASH_body_DASH_style], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$native_DASH_reference_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.cst$kw$aligned_DASH_li_DASH_style], null),"position:relative;display:inline-flex;",true,"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$fn_DASH_multi_DASH_arity_DASH_args_DASH_indent_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$expandable_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_style], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$type_DASH_ref_DASH_style], null),(2),"box-shadow:0px 0px 0px 1px rgba(255,102,0,1) inset;margin-top:1px;border-radius:2px;","\u2026",true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_style], null),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$slow_DASH_protocol_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$header_DASH_field_DASH_style], null),null,"background-color:rgba(255,102,0,0.1);box-shadow:0px 0px 0px 1px rgba(255,102,0,1) inset;position:relative;top:-1px;padding:3px 12px;border-bottom-right-radius:2px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$native_DASH_reference_DASH_wrapper_DASH_style], null),"",(20),"padding:0px 3px;margin:-4px 0px -2px;position:relative;top:1px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_wrapper_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$body_DASH_field_DASH_td2_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$type_DASH_basis_DASH_style], null),cljs.core.cst$kw$default,"margin-left:0px;min-height:14px;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$default_DASH_envelope_DASH_style], null),"font-size:8px;position:relative;",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$instance_DASH_header_DASH_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"background-color:rgba(150,150,150,1);color:#fff;width:20px;display:inline-block;text-align:center;font-size:8px;opacity:0.5;vertical-align:top;position:relative;margin-right:3px;border-radius:2px;-webkit-user-select:none;padding:1px 4px;top:1px;"], null),"in"], null),"position:relative;",(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$circular_DASH_reference_DASH_wrapper_DASH_style], null),"color:rgba(136,19,145,1);",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,null], null),"~"], null),"span","color:rgba(238,238,238,1);padding:0px 3px;-webkit-user-select:none;"]);
