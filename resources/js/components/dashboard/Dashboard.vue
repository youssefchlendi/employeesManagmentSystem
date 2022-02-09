<template>

</template>

<script>
export default {

}
</script>

<style>
.btn-default,
.btn-primary,
.btn-success,
.btn-info,
.btn-warning,
.btn-danger {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-default:active,
.btn-primary:active,
.btn-success:active,
.btn-info:active,
.btn-warning:active,
.btn-danger:active,
.btn-default.active,
.btn-primary.active,
.btn-success.active,
.btn-info.active,
.btn-warning.active,
.btn-danger.active {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn:active,
.btn.active {
    background-image: none;
}

.btn-primary {
    background-image: -webkit-linear-gradient(top, #337ab7 0%, #265a88 100%);
    background-image: -o-linear-gradient(top, #337ab7 0%, #265a88 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#337ab7),
        to(#265a88)
    );
    background-image: linear-gradient(to bottom, #337ab7 0%, #265a88 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #245580;
}

.btn-primary:hover,
.btn-primary:focus {
    background-color: #265a88;
    background-position: 0 -15px;
}

.btn-primary:active,
.btn-primary.active {
    background-color: #265a88;
    border-color: #245580;
}

.btn-success {
    background-image: -webkit-linear-gradient(top, #5cb85c 0%, #419641 100%);
    background-image: -o-linear-gradient(top, #5cb85c 0%, #419641 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#5cb85c),
        to(#419641)
    );
    background-image: linear-gradient(to bottom, #5cb85c 0%, #419641 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #3e8f3e;
}

.btn-success:hover,
.btn-success:focus {
    background-color: #419641;
    background-position: 0 -15px;
}

.btn-success:active,
.btn-success.active {
    background-color: #419641;
    border-color: #3e8f3e;
}

.btn-default,
.btn-primary,
.btn-success,
.btn-info,
.btn-warning,
.btn-danger {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-default:active,
.btn-primary:active,
.btn-success:active,
.btn-info:active,
.btn-warning:active,
.btn-danger:active,
.btn-default.active,
.btn-primary.active,
.btn-success.active,
.btn-info.active,
.btn-warning.active,
.btn-danger.active {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn:active,
.btn.active {
    background-image: none;
}

.btn-primary {
    background-image: -webkit-linear-gradient(top, #337ab7 0%, #265a88 100%);
    background-image: -o-linear-gradient(top, #337ab7 0%, #265a88 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#337ab7),
        to(#265a88)
    );
    background-image: linear-gradient(to bottom, #337ab7 0%, #265a88 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #245580;
}

.btn-primary:hover,
.btn-primary:focus {
    background-color: #265a88;
    background-position: 0 -15px;
}

.btn-primary:active,
.btn-primary.active {
    background-color: #265a88;
    border-color: #245580;
}

.btn-success {
    background-image: -webkit-linear-gradient(top, #5cb85c 0%, #419641 100%);
    background-image: -o-linear-gradient(top, #5cb85c 0%, #419641 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#5cb85c),
        to(#419641)
    );
    background-image: linear-gradient(to bottom, #5cb85c 0%, #419641 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #3e8f3e;
}

.btn-success:hover,
.btn-success:focus {
    background-color: #419641;
    background-position: 0 -15px;
}

.btn-success:active,
.btn-success.active {
    background-color: #419641;
    border-color: #3e8f3e;
}

.btn-danger,
.btn-default,
.btn-info,
.btn-primary,
.btn-success,
.btn-warning {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-danger.active,
.btn-danger:active,
.btn-default.active,
.btn-default:active,
.btn-info.active,
.btn-info:active,
.btn-primary.active,
.btn-primary:active,
.btn-success.active,
.btn-success:active,
.btn-warning.active,
.btn-warning:active {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn.active,
.btn:active {
    background-image: none;
}

.btn-primary {
    background-image: -webkit-linear-gradient(top, #337ab7 0, #265a88 100%);
    background-image: -o-linear-gradient(top, #337ab7 0, #265a88 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#337ab7),
        to(#265a88)
    );
    background-image: linear-gradient(to bottom, #337ab7 0, #265a88 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #245580;
}

.btn-primary:focus,
.btn-primary:hover {
    background-color: #265a88;
    background-position: 0 -15px;
}

.btn-primary.active,
.btn-primary:active {
    background-color: #265a88;
    border-color: #245580;
}

.btn-success {
    background-image: -webkit-linear-gradient(top, #5cb85c 0, #419641 100%);
    background-image: -o-linear-gradient(top, #5cb85c 0, #419641 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#5cb85c),
        to(#419641)
    );
    background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #3e8f3e;
}

.btn-success:focus,
.btn-success:hover {
    background-color: #419641;
    background-position: 0 -15px;
}

.btn-success.active,
.btn-success:active {
    background-color: #419641;
    border-color: #3e8f3e;
}

.btn-danger,
.btn-default,
.btn-info,
.btn-primary,
.btn-success,
.btn-warning {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-danger.active,
.btn-danger:active,
.btn-default.active,
.btn-default:active,
.btn-info.active,
.btn-info:active,
.btn-primary.active,
.btn-primary:active,
.btn-success.active,
.btn-success:active,
.btn-warning.active,
.btn-warning:active {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn.active,
.btn:active {
    background-image: none;
}

.btn-primary {
    background-image: -webkit-linear-gradient(top, #337ab7 0, #265a88 100%);
    background-image: -o-linear-gradient(top, #337ab7 0, #265a88 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#337ab7),
        to(#265a88)
    );
    background-image: linear-gradient(to bottom, #337ab7 0, #265a88 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #245580;
}

.btn-primary:focus,
.btn-primary:hover {
    background-color: #265a88;
    background-position: 0 -15px;
}

.btn-primary.active,
.btn-primary:active {
    background-color: #265a88;
    border-color: #245580;
}

.btn-success {
    background-image: -webkit-linear-gradient(top, #5cb85c 0, #419641 100%);
    background-image: -o-linear-gradient(top, #5cb85c 0, #419641 100%);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#5cb85c),
        to(#419641)
    );
    background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #3e8f3e;
}

.btn-success:focus,
.btn-success:hover {
    background-color: #419641;
    background-position: 0 -15px;
}

.btn-success.active,
.btn-success:active {
    background-color: #419641;
    border-color: #3e8f3e;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

button {
    border-radius: 0;
}

button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

input[type="radio"],
input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
    .form-control {
        transition: none;
    }
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-group {
    margin-bottom: 1rem;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
}

.btn:hover,
.btn:focus {
    text-decoration: none;
}

.btn:focus,
.btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled).active {
    background-image: none;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
}

.btn-primary:focus,
.btn-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0062cc;
    border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

.btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
}

.btn-success:focus,
.btn-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
}

.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.bg-white {
    background-color: #fff !important;
}

.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}

.justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}

.m-2 {
    margin: 0.5rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

button {
    border-radius: 0;
}

button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

input[type="radio"],
input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
    .form-control {
        transition: none;
    }
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-group {
    margin-bottom: 1rem;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
}

.btn:hover,
.btn:focus {
    text-decoration: none;
}

.btn:focus,
.btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled).active {
    background-image: none;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
}

.btn-primary:focus,
.btn-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0062cc;
    border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

.btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
}

.btn-success:focus,
.btn-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
}

.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.bg-white {
    background-color: #fff !important;
}

.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}

.justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}

.m-2 {
    margin: 0.5rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}

button {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}

input {
    line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

*:before,
*:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

input,
button,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="radio"],
input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
}

input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
}

.form-group {
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.btn:hover,
.btn:focus,
.btn.focus {
    color: #333;
    text-decoration: none;
}

.btn:active,
.btn.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.btn-primary:focus,
.btn-primary.focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
}

.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary:active:hover,
.btn-primary.active:hover,
.open > .dropdown-toggle.btn-primary:hover,
.btn-primary:active:focus,
.btn-primary.active:focus,
.open > .dropdown-toggle.btn-primary:focus,
.btn-primary:active.focus,
.btn-primary.active.focus,
.open > .dropdown-toggle.btn-primary.focus {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
}

.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.btn-success:focus,
.btn-success.focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
}

.btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success:active:hover,
.btn-success.active:hover,
.open > .dropdown-toggle.btn-success:hover,
.btn-success:active:focus,
.btn-success.active:focus,
.open > .dropdown-toggle.btn-success:focus,
.btn-success:active.focus,
.btn-success.active.focus,
.open > .dropdown-toggle.btn-success.focus {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
}

.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
    background-image: none;
}

.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after {
    display: table;
    content: " ";
}

.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after {
    clear: both;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}

button {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}

input {
    line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

*:before,
*:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

input,
button,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="radio"],
input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
}

input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
}

.form-group {
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.btn:hover,
.btn:focus,
.btn.focus {
    color: #333;
    text-decoration: none;
}

.btn:active,
.btn.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.btn-primary:focus,
.btn-primary.focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
}

.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary:active:hover,
.btn-primary.active:hover,
.open > .dropdown-toggle.btn-primary:hover,
.btn-primary:active:focus,
.btn-primary.active:focus,
.open > .dropdown-toggle.btn-primary:focus,
.btn-primary:active.focus,
.btn-primary.active.focus,
.open > .dropdown-toggle.btn-primary.focus {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
}

.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.btn-success:focus,
.btn-success.focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
}

.btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success:active:hover,
.btn-success.active:hover,
.open > .dropdown-toggle.btn-success:hover,
.btn-success:active:focus,
.btn-success.active:focus,
.open > .dropdown-toggle.btn-success:focus,
.btn-success:active.focus,
.btn-success.active.focus,
.open > .dropdown-toggle.btn-success.focus {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
}

.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
    background-image: none;
}

.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after {
    display: table;
    content: " ";
}

.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after {
    clear: both;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}

button {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}

input {
    line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

button,
input,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}

input[type="checkbox"],
input[type="radio"] {
    margin: 4px 0 0;
    margin-top: 1px\9;
    line-height: normal;
}

input[type="file"]:focus,
input[type="checkbox"]:focus,
input[type="radio"]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
}

.form-group {
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.btn.focus,
.btn:focus,
.btn:hover {
    color: #333;
    text-decoration: none;
}

.btn.active,
.btn:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.btn-primary.focus,
.btn-primary:focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
}

.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary.active.focus,
.btn-primary.active:focus,
.btn-primary.active:hover,
.btn-primary:active.focus,
.btn-primary:active:focus,
.btn-primary:active:hover,
.open > .dropdown-toggle.btn-primary.focus,
.open > .dropdown-toggle.btn-primary:focus,
.open > .dropdown-toggle.btn-primary:hover {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.btn-success.focus,
.btn-success:focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
}

.btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success.active,
.btn-success:active,
.open > .dropdown-toggle.btn-success {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success.active.focus,
.btn-success.active:focus,
.btn-success.active:hover,
.btn-success:active.focus,
.btn-success:active:focus,
.btn-success:active:hover,
.open > .dropdown-toggle.btn-success.focus,
.open > .dropdown-toggle.btn-success:focus,
.open > .dropdown-toggle.btn-success:hover {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
}

.btn-success.active,
.btn-success:active,
.open > .dropdown-toggle.btn-success {
    background-image: none;
}

.btn-group-vertical > .btn-group:after,
.btn-group-vertical > .btn-group:before,
.btn-toolbar:after,
.btn-toolbar:before,
.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.dl-horizontal dd:after,
.dl-horizontal dd:before,
.form-horizontal .form-group:after,
.form-horizontal .form-group:before,
.modal-footer:after,
.modal-footer:before,
.modal-header:after,
.modal-header:before,
.nav:after,
.nav:before,
.navbar-collapse:after,
.navbar-collapse:before,
.navbar-header:after,
.navbar-header:before,
.navbar:after,
.navbar:before,
.pager:after,
.pager:before,
.panel-body:after,
.panel-body:before,
.row:after,
.row:before {
    display: table;
    content: " ";
}

.btn-group-vertical > .btn-group:after,
.btn-toolbar:after,
.clearfix:after,
.container-fluid:after,
.container:after,
.dl-horizontal dd:after,
.form-horizontal .form-group:after,
.modal-footer:after,
.modal-header:after,
.nav:after,
.navbar-collapse:after,
.navbar-header:after,
.navbar:after,
.pager:after,
.panel-body:after,
.row:after {
    clear: both;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}

button {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}

input {
    line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

button,
input,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}

input[type="checkbox"],
input[type="radio"] {
    margin: 4px 0 0;
    margin-top: 1px\9;
    line-height: normal;
}

input[type="file"]:focus,
input[type="checkbox"]:focus,
input[type="radio"]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
}

.form-group {
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.btn.focus,
.btn:focus,
.btn:hover {
    color: #333;
    text-decoration: none;
}

.btn.active,
.btn:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.btn-primary.focus,
.btn-primary:focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
}

.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary.active.focus,
.btn-primary.active:focus,
.btn-primary.active:hover,
.btn-primary:active.focus,
.btn-primary:active:focus,
.btn-primary:active:hover,
.open > .dropdown-toggle.btn-primary.focus,
.open > .dropdown-toggle.btn-primary:focus,
.open > .dropdown-toggle.btn-primary:hover {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.btn-success.focus,
.btn-success:focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
}

.btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success.active,
.btn-success:active,
.open > .dropdown-toggle.btn-success {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success.active.focus,
.btn-success.active:focus,
.btn-success.active:hover,
.btn-success:active.focus,
.btn-success:active:focus,
.btn-success:active:hover,
.open > .dropdown-toggle.btn-success.focus,
.open > .dropdown-toggle.btn-success:focus,
.open > .dropdown-toggle.btn-success:hover {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
}

.btn-success.active,
.btn-success:active,
.open > .dropdown-toggle.btn-success {
    background-image: none;
}

.btn-group-vertical > .btn-group:after,
.btn-group-vertical > .btn-group:before,
.btn-toolbar:after,
.btn-toolbar:before,
.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.dl-horizontal dd:after,
.dl-horizontal dd:before,
.form-horizontal .form-group:after,
.form-horizontal .form-group:before,
.modal-footer:after,
.modal-footer:before,
.modal-header:after,
.modal-header:before,
.nav:after,
.nav:before,
.navbar-collapse:after,
.navbar-collapse:before,
.navbar-header:after,
.navbar-header:before,
.navbar:after,
.navbar:before,
.pager:after,
.pager:before,
.panel-body:after,
.panel-body:before,
.row:after,
.row:before {
    display: table;
    content: " ";
}

.btn-group-vertical > .btn-group:after,
.btn-toolbar:after,
.clearfix:after,
.container-fluid:after,
.container:after,
.dl-horizontal dd:after,
.form-horizontal .form-group:after,
.modal-footer:after,
.modal-header:after,
.nav:after,
.navbar-collapse:after,
.navbar-header:after,
.navbar:after,
.pager:after,
.panel-body:after,
.row:after {
    clear: both;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}

button {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}

input {
    line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

button,
input,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}

input[type="checkbox"],
input[type="radio"] {
    margin: 4px 0 0;
    margin-top: 1px\9;
    line-height: normal;
}

input[type="file"]:focus,
input[type="checkbox"]:focus,
input[type="radio"]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
}

.form-group {
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.btn.focus,
.btn:focus,
.btn:hover {
    color: #333;
    text-decoration: none;
}

.btn.active,
.btn:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.btn-primary.focus,
.btn-primary:focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
}

.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-primary.active.focus,
.btn-primary.active:focus,
.btn-primary.active:hover,
.btn-primary:active.focus,
.btn-primary:active:focus,
.btn-primary:active:hover,
.open > .dropdown-toggle.btn-primary.focus,
.open > .dropdown-toggle.btn-primary:focus,
.open > .dropdown-toggle.btn-primary:hover {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.btn-success.focus,
.btn-success:focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
}

.btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success.active,
.btn-success:active,
.open > .dropdown-toggle.btn-success {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.btn-success.active.focus,
.btn-success.active:focus,
.btn-success.active:hover,
.btn-success:active.focus,
.btn-success:active:focus,
.btn-success:active:hover,
.open > .dropdown-toggle.btn-success.focus,
.open > .dropdown-toggle.btn-success:focus,
.open > .dropdown-toggle.btn-success:hover {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
}

.btn-success.active,
.btn-success:active,
.open > .dropdown-toggle.btn-success {
    background-image: none;
}

.btn-group-vertical > .btn-group:after,
.btn-group-vertical > .btn-group:before,
.btn-toolbar:after,
.btn-toolbar:before,
.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.dl-horizontal dd:after,
.dl-horizontal dd:before,
.form-horizontal .form-group:after,
.form-horizontal .form-group:before,
.modal-footer:after,
.modal-footer:before,
.modal-header:after,
.modal-header:before,
.nav:after,
.nav:before,
.navbar-collapse:after,
.navbar-collapse:before,
.navbar-header:after,
.navbar-header:before,
.navbar:after,
.navbar:before,
.pager:after,
.pager:before,
.panel-body:after,
.panel-body:before,
.row:after,
.row:before {
    display: table;
    content: " ";
}

.btn-group-vertical > .btn-group:after,
.btn-toolbar:after,
.clearfix:after,
.container-fluid:after,
.container:after,
.dl-horizontal dd:after,
.form-horizontal .form-group:after,
.modal-footer:after,
.modal-header:after,
.nav:after,
.navbar-collapse:after,
.navbar-header:after,
.navbar:after,
.pager:after,
.panel-body:after,
.row:after {
    clear: both;
}

.ladda-button {
    position: relative;
}

.ladda-button .ladda-label {
    position: relative;
    z-index: 3;
}

.ladda-button,
.ladda-button .ladda-spinner,
.ladda-button .ladda-label {
    -webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;
    -moz-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;
    -ms-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;
    -o-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;
}

.btn {
    border-radius: 3px;
}

.btn-primary {
    background-color: #1ab394;
    border-color: #1ab394;
    color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary.active:hover,
.btn-primary.active:focus {
    background-color: #18a689;
    border-color: #18a689;
    color: #ffffff;
}

.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    background-color: #1c84c6;
    border-color: #1c84c6;
    color: #ffffff;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success,
.btn-success:active:focus,
.btn-success:active:hover,
.btn-success.active:hover,
.btn-success.active:focus {
    background-color: #1a7bb9;
    border-color: #1a7bb9;
    color: #ffffff;
}

.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
    background-image: none;
}

.form-control,
.form-control:focus,
.has-error .form-control:focus,
.has-success .form-control:focus,
.has-warning .form-control:focus,
.navbar-collapse,
.navbar-form,
.navbar-form-custom .form-control:focus,
.navbar-form-custom .form-control:hover,
.open .btn.dropdown-toggle,
.panel,
.popover,
.progress,
.progress-bar {
    box-shadow: none;
}

.btn:focus {
    outline: none !important;
}

.onoffswitch {
    position: relative;
    width: 64px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #1ab394;
    border-radius: 2px;
}

.onoffswitch-inner {
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    line-height: 20px;
    font-size: 12px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "ON";
    padding-left: 10px;
    background-color: #1ab394;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 10px;
    background-color: #ffffff;
    color: #999999;
    text-align: right;
}

.onoffswitch-switch {
    width: 20px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #1ab394;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 44px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.form-control,
.single-line {
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #e5e6e7;
    border-radius: 1px;
    color: inherit;
    display: block;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s,
        box-shadow 0.15s ease-in-out 0s;
    width: 100%;
}

.form-control:focus,
.single-line:focus {
    border-color: #1ab394;
}

.onoffswitch {
    position: relative;
    width: 54px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #1ab394;
    border-radius: 3px;
}

.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 16px;
    padding: 0;
    line-height: 16px;
    font-size: 10px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "ON";
    padding-left: 7px;
    background-color: #1ab394;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 7px;
    background-color: #ffffff;
    color: #919191;
    text-align: right;
}

.onoffswitch-switch {
    display: block;
    width: 18px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #1ab394;
    border-radius: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 36px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.wrapper {
    padding: 0 20px;
}

.wrapper-content {
    padding: 20px 10px 40px;
}

.btn {
    border-radius: 40px;
    padding: 1rem 1.2rem;
    font-size: 14px;
    line-height: 1;
    text-transform: none;
    font-weight: 400;
}

.btn-primary {
    background-color: #002737;
    border-color: #002737;
    color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary.active:hover,
.btn-primary.active:focus {
    background-color: #003951;
    border-color: #003951;
    color: #ffffff;
}

.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
    background-image: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;
}

.btn-success {
    background-color: #ff0053;
    border-color: #ff0053;
    color: #ffffff;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success,
.btn-success:active:focus,
.btn-success:active:hover,
.btn-success.active:hover,
.btn-success.active:focus {
    background-color: #e6004b !important;
    border-color: #e6004b !important;
    color: #ffffff;
}

.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
    background-color: #e6004b;
    border-color: #e6004b;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) inset;
}

.form-control,
.form-control:focus,
.has-error .form-control:focus,
.has-success .form-control:focus,
.has-warning .form-control:focus,
.navbar-collapse,
.navbar-form,
.navbar-form-custom .form-control:focus,
.navbar-form-custom .form-control:hover,
.open .btn.dropdown-toggle,
.panel,
.popover,
.progress,
.progress-bar {
    box-shadow: none;
}

.btn:focus {
    outline: none !important;
}

.btn i + span {
    margin-left: 5px;
}

.onoffswitch {
    position: relative;
    width: 64px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #002737;
    border-radius: 2px;
}

.onoffswitch-inner {
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    line-height: 20px;
    font-size: 12px;
    color: white;
    font-family: "Roboto", Arial, sans-serif;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "Sim";
    padding-left: 10px;
    background-color: #002737;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "Não";
    padding-right: 10px;
    background-color: #ffffff;
    color: #999999;
    text-align: right;
}

.onoffswitch-switch {
    width: 20px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #002737;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 44px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.onoffswitch {
    position: relative;
    width: 75px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #d4dadc;
    border-radius: 40px;
}

.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 25px;
    padding: 0;
    line-height: 26px;
    font-size: 10px;
    color: white;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "Sim";
    padding-left: 15px;
    background-color: #25b26b;
    color: #ffffff;
    text-align: left;
}

.onoffswitch-inner:after {
    content: "Não";
    padding-right: 15px;
    background-color: #ffffff;
    color: #919191;
    text-align: right;
}

.onoffswitch-switch {
    text-align: center;
    display: block;
    width: 28px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #a3bcc8;
    box-shadow: 0 0 15px rgba(2, 15, 24, 0.35);
    border-radius: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 48px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.onoffswitch-switch:hover {
    border-color: #638ea1;
}

.wrapper {
    padding: 0 20px;
    position: relative;
}

.wrapper-content {
    padding: 10px 10px 40px;
    min-height: 100vh;
}

.white-bg,
.bg-white {
    background-color: #ffffff;
}

.animation-transition,
.button,
.button.disabled,
.button[disabled],
.button:hover,
.slider .slider-pagination .slider-page,
.slider .slider-pagination .slider-page.active,
.form-control:hover,
.form-control:focus,
.form-control:active,
.single-line:hover,
.single-line:focus,
.single-line:active,
.input-group,
.input-group:hover,
.input-group:focus,
.input-group:active,
.input-group:hover .input-group-append,
.input-group:focus .input-group-append,
.input-group:active .input-group-append {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.switch {
    display: flex;
}

.switch label {
    font-weight: normal;
    display: inline-block;
    margin: 0;
    line-height: 24px;
}

.switch .onoffswitch {
    width: 42px;
    display: inline-block;
    margin: 0 10px;
}

.switch .onoffswitch .onoffswitch-inner::before {
    content: "";
    background: #456573;
}

.switch .onoffswitch .onoffswitch-inner::after {
    content: "";
}

.switch .onoffswitch .onoffswitch-label {
    border: 1px solid #c4c4c4;
    width: 42px;
    height: 24px;
    background: #fff;
    margin: 0;
}

.switch .onoffswitch .onoffswitch-label .onoffswitch-switch {
    background: #fff;
    border: 1px solid #c4c4c4;
    width: 24px;
    height: 24px;
    right: 18px;
}

.form-group {
    position: relative;
    margin-bottom: 25px;
}

.form-group .form-control {
    margin-bottom: 0;
}

.form-control,
.single-line {
    background: #fff;
    border: 1px solid #c2c2c2;
    border-radius: 40px;
    color: #002737;
    display: block;
    transition: all 0.15s ease-in-out;
    width: 100%;
    font-size: 14px;
    height: 40px;
    border: 1px solid #c2c2c2;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05);
    -webkit-appearance: none;
    padding: 0 15px;
}

.form-control:hover,
.form-control:focus,
.form-control:active,
.single-line:hover,
.single-line:focus,
.single-line:active {
    background: #fff;
    border-color: #002737 !important;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05),
        0px 0px 8px rgba(0, 0, 0, 0.05);
}

.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}

.m-2 {
    margin: 0.5rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

.justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-done-all:before {
    content: "\e924";
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-done-all:before {
    content: "\e924";
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-done-all:before {
    content: "\e924";
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.btn i {
    font-size: 18px;
    vertical-align: middle;
}

label,
th {
    font-size: 12px !important;
    font-weight: normal !important;
    margin: 0 !important;
}

.onoffswitch-inner:before {
    content: "Sim";
}

.onoffswitch-inner:after {
    content: "Não";
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.btn i {
    font-size: 18px;
    vertical-align: middle;
}

label,
th {
    font-size: 12px !important;
    font-weight: normal !important;
    margin: 0 !important;
}

.onoffswitch-inner:before {
    content: "Sim";
}

.onoffswitch-inner:after {
    content: "Não";
}

.btn {
    border-radius: 3px;
}

.btn-primary {
    background-color: #1ab394;
    border-color: #1ab394;
    color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary.active:hover,
.btn-primary.active:focus {
    background-color: #18a689;
    border-color: #18a689;
    color: #ffffff;
}

.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    background-color: #1c84c6;
    border-color: #1c84c6;
    color: #ffffff;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success,
.btn-success:active:focus,
.btn-success:active:hover,
.btn-success.active:hover,
.btn-success.active:focus {
    background-color: #1a7bb9;
    border-color: #1a7bb9;
    color: #ffffff;
}

.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
    background-image: none;
}

.form-control,
.form-control:focus,
.has-error .form-control:focus,
.has-success .form-control:focus,
.has-warning .form-control:focus,
.navbar-collapse,
.navbar-form,
.navbar-form-custom .form-control:focus,
.navbar-form-custom .form-control:hover,
.open .btn.dropdown-toggle,
.panel,
.popover,
.progress,
.progress-bar {
    box-shadow: none;
}

.btn:focus {
    outline: none !important;
}

.onoffswitch {
    position: relative;
    width: 64px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #1ab394;
    border-radius: 2px;
}

.onoffswitch-inner {
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    line-height: 20px;
    font-size: 12px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "ON";
    padding-left: 10px;
    background-color: #1ab394;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 10px;
    background-color: #ffffff;
    color: #999999;
    text-align: right;
}

.onoffswitch-switch {
    width: 20px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #1ab394;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 44px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.form-control,
.single-line {
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #e5e6e7;
    border-radius: 1px;
    color: inherit;
    display: block;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s,
        box-shadow 0.15s ease-in-out 0s;
    width: 100%;
}

.form-control:focus,
.single-line:focus {
    border-color: #1ab394;
}

.onoffswitch {
    position: relative;
    width: 54px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #1ab394;
    border-radius: 3px;
}

.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 16px;
    padding: 0;
    line-height: 16px;
    font-size: 10px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "ON";
    padding-left: 7px;
    background-color: #1ab394;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 7px;
    background-color: #ffffff;
    color: #919191;
    text-align: right;
}

.onoffswitch-switch {
    display: block;
    width: 18px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #1ab394;
    border-radius: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 36px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.wrapper {
    padding: 0 20px;
}

.wrapper-content {
    padding: 20px 10px 40px;
}

.btn {
    border-radius: 3px;
}

.btn-primary {
    background-color: #1ab394;
    border-color: #1ab394;
    color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary.active:hover,
.btn-primary.active:focus {
    background-color: #18a689;
    border-color: #18a689;
    color: #ffffff;
}

.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
    background-image: none;
}

.btn-success {
    background-color: #1c84c6;
    border-color: #1c84c6;
    color: #ffffff;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success,
.btn-success:active:focus,
.btn-success:active:hover,
.btn-success.active:hover,
.btn-success.active:focus {
    background-color: #1a7bb9;
    border-color: #1a7bb9;
    color: #ffffff;
}

.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
    background-image: none;
}

.form-control,
.form-control:focus,
.has-error .form-control:focus,
.has-success .form-control:focus,
.has-warning .form-control:focus,
.navbar-collapse,
.navbar-form,
.navbar-form-custom .form-control:focus,
.navbar-form-custom .form-control:hover,
.open .btn.dropdown-toggle,
.panel,
.popover,
.progress,
.progress-bar {
    box-shadow: none;
}

.btn:focus {
    outline: none !important;
}

.onoffswitch {
    position: relative;
    width: 64px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #1ab394;
    border-radius: 2px;
}

.onoffswitch-inner {
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    line-height: 20px;
    font-size: 12px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "ON";
    padding-left: 10px;
    background-color: #1ab394;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 10px;
    background-color: #ffffff;
    color: #999999;
    text-align: right;
}

.onoffswitch-switch {
    width: 20px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #1ab394;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 44px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.form-control,
.single-line {
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #e5e6e7;
    border-radius: 1px;
    color: inherit;
    display: block;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s,
        box-shadow 0.15s ease-in-out 0s;
    width: 100%;
}

.form-control:focus,
.single-line:focus {
    border-color: #1ab394;
}

.onoffswitch {
    position: relative;
    width: 54px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #1ab394;
    border-radius: 3px;
}

.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 16px;
    padding: 0;
    line-height: 16px;
    font-size: 10px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "ON";
    padding-left: 7px;
    background-color: #1ab394;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 7px;
    background-color: #ffffff;
    color: #919191;
    text-align: right;
}

.onoffswitch-switch {
    display: block;
    width: 18px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #1ab394;
    border-radius: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 36px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.wrapper {
    padding: 0 20px;
}

.wrapper-content {
    padding: 20px 10px 40px;
}

.btn {
    border-radius: 40px;
    padding: 1rem 1.2rem;
    font-size: 14px;
    line-height: 1;
    text-transform: none;
    font-weight: 400;
}

.btn-primary {
    background-color: #002737;
    border-color: #002737;
    color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary.active:hover,
.btn-primary.active:focus {
    background-color: #003951;
    border-color: #003951;
    color: #ffffff;
}

.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
    background-image: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;
}

.btn-success {
    background-color: #ff0053;
    border-color: #ff0053;
    color: #ffffff;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success,
.btn-success:active:focus,
.btn-success:active:hover,
.btn-success.active:hover,
.btn-success.active:focus {
    background-color: #e6004b !important;
    border-color: #e6004b !important;
    color: #ffffff;
}

.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
    background-color: #e6004b;
    border-color: #e6004b;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) inset;
}

.form-control,
.form-control:focus,
.has-error .form-control:focus,
.has-success .form-control:focus,
.has-warning .form-control:focus,
.navbar-collapse,
.navbar-form,
.navbar-form-custom .form-control:focus,
.navbar-form-custom .form-control:hover,
.open .btn.dropdown-toggle,
.panel,
.popover,
.progress,
.progress-bar {
    box-shadow: none;
}

.btn:focus {
    outline: none !important;
}

.btn i + span {
    margin-left: 5px;
}

.onoffswitch {
    position: relative;
    width: 64px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #002737;
    border-radius: 2px;
}

.onoffswitch-inner {
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    line-height: 20px;
    font-size: 12px;
    color: white;
    font-family: "Roboto", Arial, sans-serif;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "Sim";
    padding-left: 10px;
    background-color: #002737;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "Não";
    padding-right: 10px;
    background-color: #ffffff;
    color: #999999;
    text-align: right;
}

.onoffswitch-switch {
    width: 20px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #002737;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 44px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.onoffswitch {
    position: relative;
    width: 75px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;


}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #d4dadc;
    border-radius: 40px;
}

.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 25px;
    padding: 0;
    line-height: 26px;
    font-size: 10px;
    color: white;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "Sim";
    padding-left: 15px;
    background-color: #25b26b;
    color: #ffffff;
    text-align: left;
}

.onoffswitch-inner:after {
    content: "Não";
    padding-right: 15px;
    background-color: #ffffff;
    color: #919191;
    text-align: right;
}

.onoffswitch-switch {
    text-align: center;
    display: block;
    width: 28px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #a3bcc8;
    box-shadow: 0 0 15px rgba(2, 15, 24, 0.35);
    border-radius: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 48px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.onoffswitch-switch:hover {
    border-color: #638ea1;
}

.wrapper {
    padding: 0 20px;
    position: relative;
}

.wrapper-content {
    padding: 10px 10px 40px;
    min-height: 100vh;
}

.white-bg,
.bg-white {
    background-color: #ffffff;
}

.animation-transition,
.button,
.button.disabled,
.button[disabled],
.button:hover,
.slider .slider-pagination .slider-page,
.slider .slider-pagination .slider-page.active,
.form-control:hover,
.form-control:focus,
.form-control:active,
.single-line:hover,
.single-line:focus,
.single-line:active,
.input-group,
.input-group:hover,
.input-group:focus,
.input-group:active,
.input-group:hover .input-group-append,
.input-group:focus .input-group-append,
.input-group:active .input-group-append {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.switch {
    display: flex;
}

.switch label {
    font-weight: normal;
    display: inline-block;
    margin: 0;
    line-height: 24px;
}

.switch .onoffswitch {
    width: 42px;
    display: inline-block;
    margin: 0 10px;
}

.switch .onoffswitch .onoffswitch-inner::before {
    content: "";
    background: #456573;
}

.switch .onoffswitch .onoffswitch-inner::after {
    content: "";
}

.switch .onoffswitch .onoffswitch-label {
    border: 1px solid #c4c4c4;
    width: 42px;
    height: 24px;
    background: #fff;
    margin: 0;
}

.switch .onoffswitch .onoffswitch-label .onoffswitch-switch {
    background: #fff;
    border: 1px solid #c4c4c4;
    width: 24px;
    height: 24px;
    right: 18px;
}

.form-group {
    position: relative;
    margin-bottom: 25px;
}

.form-group .form-control {
    margin-bottom: 0;
}

.form-control,
.single-line {
    background: #fff;
    border: 1px solid #c2c2c2;
    border-radius: 40px;
    color: #002737;
    display: block;
    transition: all 0.15s ease-in-out;
    width: 100%;
    font-size: 14px;
    height: 45px;
    border: 1px solid #c2c2c2;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05);
    -webkit-appearance: none;
    padding: 0 15px;
}

.form-control:hover,
.form-control:focus,
.form-control:active,
.single-line:hover,
.single-line:focus,
.single-line:active {
    background: #fff;
    border-color: #002737 !important;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05),
        0px 0px 8px rgba(0, 0, 0, 0.05);
}

.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}

.m-2 {
    margin: 0.5rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

.justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}

.btn {
    border-radius: 40px;
    padding: 1rem 1.2rem;
    font-size: 14px;
    line-height: 1;
    text-transform: none;
    font-weight: 400;
}

.btn-primary {
    background-color: #002737;
    border-color: #002737;
    color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary.active:hover,
.btn-primary.active:focus {
    background-color: #003951;
    border-color: #003951;
    color: #ffffff;
}

.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
    background-image: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;
}

.btn-success {
    background-color: #ff0053;
    border-color: #ff0053;
    color: #ffffff;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success,
.btn-success:active:focus,
.btn-success:active:hover,
.btn-success.active:hover,
.btn-success.active:focus {
    background-color: #e6004b !important;
    border-color: #e6004b !important;
    color: #ffffff;
}

.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
    background-color: #e6004b;
    border-color: #e6004b;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) inset;
}

.form-control,
.form-control:focus,
.has-error .form-control:focus,
.has-success .form-control:focus,
.has-warning .form-control:focus,
.navbar-collapse,
.navbar-form,
.navbar-form-custom .form-control:focus,
.navbar-form-custom .form-control:hover,
.open .btn.dropdown-toggle,
.panel,
.popover,
.progress,
.progress-bar {
    box-shadow: none;
}

.btn:focus {
    outline: none !important;
}

.btn i + span {
    margin-left: 5px;
}

.onoffswitch {
    position: relative;
    width: 64px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #002737;
    border-radius: 2px;
}

.onoffswitch-inner {
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    line-height: 20px;
    font-size: 12px;
    color: white;
    font-family: "Roboto", Arial, sans-serif;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "Sim";
    padding-left: 10px;
    background-color: #002737;
    color: #ffffff;
}

.onoffswitch-inner:after {
    content: "Não";
    padding-right: 10px;
    background-color: #ffffff;
    color: #999999;
    text-align: right;
}

.onoffswitch-switch {
    width: 20px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #002737;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 44px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.onoffswitch {
    position: relative;
    width: 75px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #d4dadc;
    border-radius: 40px;
}

.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 25px;
    padding: 0;
    line-height: 26px;
    font-size: 10px;
    color: white;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "Sim";
    padding-left: 15px;
    background-color: #25b26b;
    color: #ffffff;
    text-align: left;
}

.onoffswitch-inner:after {
    content: "Não";
    padding-right: 15px;
    background-color: #ffffff;
    color: #919191;
    text-align: right;
}

.onoffswitch-switch {
    text-align: center;
    display: block;
    width: 28px;
    margin: 0;
    background: #ffffff;
    border: 2px solid #a3bcc8;
    box-shadow: 0 0 15px rgba(2, 15, 24, 0.35);
    border-radius: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 48px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}

.onoffswitch-switch:hover {
    border-color: #638ea1;
}

.wrapper {
    padding: 0 20px;
    position: relative;
}

.wrapper-content {
    padding: 10px 10px 40px;
    min-height: 100vh;
}

.white-bg,
.bg-white {
    background-color: #ffffff;
}

.animation-transition,
.button,
.button.disabled,
.button[disabled],
.button:hover,
.slider .slider-pagination .slider-page,
.slider .slider-pagination .slider-page.active,
.form-control:hover,
.form-control:focus,
.form-control:active,
.single-line:hover,
.single-line:focus,
.single-line:active,
.input-group,
.input-group:hover,
.input-group:focus,
.input-group:active,
.input-group:hover .input-group-append,
.input-group:focus .input-group-append,
.input-group:active .input-group-append {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.switch {
    display: flex;
}

.switch label {
    font-weight: normal;
    display: inline-block;
    margin: 0;
    line-height: 24px;
}

.switch .onoffswitch {
    width: 42px;
    display: inline-block;
    margin: 0 10px;
}

.switch .onoffswitch .onoffswitch-inner::before {
    content: "";
    background: #456573;
}

.switch .onoffswitch .onoffswitch-inner::after {
    content: "";
}

.switch .onoffswitch .onoffswitch-label {
    border: 1px solid #c4c4c4;
    width: 42px;
    height: 24px;
    background: #fff;
    margin: 0;
}

.switch .onoffswitch .onoffswitch-label .onoffswitch-switch {
    background: #fff;
    border: 1px solid #c4c4c4;
    width: 24px;
    height: 24px;
    right: 18px;
}

.form-group {
    position: relative;
    margin-bottom: 25px;
}

.form-group .form-control {
    margin-bottom: 0;
}

.form-control,
.single-line {
    background: #fff;
    border: 1px solid #c2c2c2;
    border-radius: 40px;
    color: #002737;
    display: block;
    transition: all 0.15s ease-in-out;
    width: 100%;
    font-size: 14px;
    height: 34px;
    border: 1px solid #c2c2c2;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05);
    -webkit-appearance: none;
    padding: 0 15px;
}

.form-control:hover,
.form-control:focus,
.form-control:active,
.single-line:hover,
.single-line:focus,
.single-line:active {
    background: #fff;
    border-color: #002737 !important;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.05),
        0px 0px 8px rgba(0, 0, 0, 0.05);
}

.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}

.m-2 {
    margin: 0.5rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

.justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}

</style>
