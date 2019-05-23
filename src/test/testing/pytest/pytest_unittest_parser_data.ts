// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

"use strict";

// disable the ' quotemark, as we need to consume many strings from stdout that use that
// test delimiter exclusively.

// tslint:disable:quotemark

export enum PytestDataPlatformType {
    NonWindows = "non-windows",
    Windows = "windows"
}

export type PytestDiscoveryScenario = {
    pytest_version_spec: string;
    platform: string;
    description: string;
    rootdir: string;
    test_functions: string[];
    functionCount: number;
    stdout: string[];
};

// Data to test the pytest unit test parser with. See pytest.discovery.unit.test.ts.
export const pytestScenarioData: PytestDiscoveryScenario[] = [
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "src/test_things.py::test_things_major",
            "test/this/is/deep/testing/test_very_deeply.py::test_math_works"
        ],
        functionCount: 9,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 9 items",
            "<Module 'src/test_things.py'>",
            "  <Function 'test_things_major'>",
            "  <Function 'test_things_minor'>",
            "<Module 'src/under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'src/under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "<Module 'test/test_other_other_things.py'>",
            "  <Function 'test_sys_ver'>",
            "<Module 'test/test_other_things.py'>",
            "  <Function 'test_sys_ver'>",
            "<Module 'test/this/is/deep/testing/test_deeply.py'>",
            "  <Function 'test_json_works'>",
            "  <Function 'test_json_numbers_work'>",
            "<Module 'test/this/is/deep/testing/test_very_deeply.py'>",
            "  <Function 'test_math_works'>",
            "",
            "========================= no tests ran in 0.02 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "src/test_things.py::test_things_major",
            "test/this/is/deep/testing/test_very_deeply.py::test_math_works"
        ],
        functionCount: 9,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 9 items",
            "<Module 'src/test_things.py'>",
            "  <Function 'test_things_major'>",
            "  <Function 'test_things_minor'>",
            "<Module 'src/under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'src/under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "<Module 'test/test_other_other_things.py'>",
            "  <Function 'test_sys_ver'>",
            "<Module 'test/test_other_things.py'>",
            "  <Function 'test_sys_ver'>",
            "<Module 'test/this/is/deep/testing/test_deeply.py'>",
            "  <Function 'test_json_works'>",
            "  <Function 'test_json_numbers_work'>",
            "<Module 'test/this/is/deep/testing/test_very_deeply.py'>",
            "  <Function 'test_math_works'>",
            "",
            "========================= no tests ran in 0.18 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "src/test_things.py::test_things_major",
            "test/this/is/deep/testing/test_very_deeply.py::test_math_works"
        ],
        functionCount: 9,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 9 items",
            "<Module src/test_things.py>",
            "  <Function test_things_major>",
            "  <Function test_things_minor>",
            "<Module src/under/test_other_stuff.py>",
            "  <Function test_machine_values>",
            "<Module src/under/test_stuff.py>",
            "  <Function test_platform>",
            "<Module test/test_other_other_things.py>",
            "  <Function test_sys_ver>",
            "<Module test/test_other_things.py>",
            "  <Function test_sys_ver>",
            "<Module test/this/is/deep/testing/test_deeply.py>",
            "  <Function test_json_works>",
            "  <Function test_json_numbers_work>",
            "<Module test/this/is/deep/testing/test_very_deeply.py>",
            "  <Function test_math_works>",
            "",
            "========================= no tests ran in 0.18 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "src/test_things.py::test_things_major",
            "src/under/test_stuff.py::test_platform"
        ],
        functionCount: 5,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 5 items",
            "<Module 'src/test_things.py'>",
            "  <Function 'test_things_major'>",
            "  <Function 'test_things_minor'>",
            "<Module 'src/test_things_again.py'>",
            "  <Function 'test_it_over_again'>",
            "<Module 'src/under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'src/under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.05 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "src/test_things.py::test_things_major",
            "src/under/test_stuff.py::test_platform"
        ],
        functionCount: 5,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 5 items",
            "<Module 'src/test_things.py'>",
            "  <Function 'test_things_major'>",
            "  <Function 'test_things_minor'>",
            "<Module 'src/test_things_again.py'>",
            "  <Function 'test_it_over_again'>",
            "<Module 'src/under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'src/under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.03 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "src/test_things.py::test_things_major",
            "src/under/test_stuff.py::test_platform"
        ],
        functionCount: 5,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 5 items",
            "<Module src/test_things.py>",
            "  <Function test_things_major>",
            "  <Function test_things_minor>",
            "<Module src/test_things_again.py>",
            "  <Function test_it_over_again>",
            "<Module src/under/test_other_stuff.py>",
            "  <Function test_machine_values>",
            "<Module src/under/test_stuff.py>",
            "  <Function test_platform>",
            "",
            "========================= no tests ran in 0.03 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_things.py::test_things_major",
            "under/test_stuff.py::test_platform"
        ],
        functionCount: 5,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 5 items",
            "<Module 'test_things.py'>",
            "  <Function 'test_things_major'>",
            "  <Function 'test_things_minor'>",
            "<Module 'test_things_again.py'>",
            "  <Function 'test_it_over_again'>",
            "<Module 'under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.12 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_things.py::test_things_major",
            "under/test_stuff.py::test_platform"
        ],
        functionCount: 5,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 5 items",
            "<Module 'test_things.py'>",
            "  <Function 'test_things_major'>",
            "  <Function 'test_things_minor'>",
            "<Module 'test_things_again.py'>",
            "  <Function 'test_it_over_again'>",
            "<Module 'under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.12 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_things.py::test_things_major",
            "under/test_stuff.py::test_platform"
        ],
        functionCount: 5,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 5 items",
            "<Module test_things.py>",
            "  <Function test_things_major>",
            "  <Function test_things_minor>",
            "<Module test_things_again.py>",
            "  <Function test_it_over_again>",
            "<Module under/test_other_stuff.py>",
            "  <Function test_machine_values>",
            "<Module under/test_stuff.py>",
            "  <Function test_platform>",
            "",
            "========================= no tests ran in 0.12 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in a subfolder off the root.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "under/test_other_stuff.py::test_machine_values",
            "under/test_stuff.py::test_platform"
        ],
        functionCount: 2,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 2 items",
            "<Module 'under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.06 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in a subfolder off the root.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "under/test_other_stuff.py::test_machine_values",
            "under/test_stuff.py::test_platform"
        ],
        functionCount: 2,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 2 items",
            "<Module 'under/test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'under/test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.05 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Non-package source, 2 test modules in a subfolder off the root.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "under/test_other_stuff.py::test_machine_values",
            "under/test_stuff.py::test_platform"
        ],
        functionCount: 2,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 2 items",
            "<Module under/test_other_stuff.py>",
            "  <Function test_machine_values>",
            "<Module under/test_stuff.py>",
            "  <Function test_platform>",
            "",
            "========================= no tests ran in 0.05 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description: "Non-package source, 2 modules at the topmost level.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_other_stuff.py::test_machine_values",
            "test_stuff.py::test_platform"
        ],
        functionCount: 2,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 2 items",
            "<Module 'test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.05 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description: "Non-package source, 2 modules at the topmost level.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_other_stuff.py::test_machine_values",
            "test_stuff.py::test_platform"
        ],
        functionCount: 2,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 2 items",
            "<Module 'test_other_stuff.py'>",
            "  <Function 'test_machine_values'>",
            "<Module 'test_stuff.py'>",
            "  <Function 'test_platform'>",
            "",
            "========================= no tests ran in 0.05 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description: "Non-package source, 2 modules at the topmost level.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_other_stuff.py::test_machine_values",
            "test_stuff.py::test_platform"
        ],
        functionCount: 2,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 2 items",
            "<Module test_other_stuff.py>",
            "  <Function test_machine_values>",
            "<Module test_stuff.py>",
            "  <Function test_platform>",
            "",
            "========================= no tests ran in 0.05 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_basic_root.py::test_basic_major",
            "test/test_other_basic.py::test_basic_major_minor_internal",
            "test/subdir/under/another/subdir/test_other_basic_sub.py::test_basic_major_minor"
        ],
        functionCount: 16,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 16 items",
            "<Module 'test_basic_root.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test_other_basic_root.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/test_basic.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/test_other_basic.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/subdir/under/another/subdir/test_basic_sub.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/subdir/under/another/subdir/test_other_basic_sub.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/uneven/folders/test_basic_uneven.py'>",
            "  <Function 'test_basic_major_uneven'>",
            "  <Function 'test_basic_minor_uneven'>",
            "<Module 'test/uneven/folders/test_other_basic_uneven.py'>",
            "  <Function 'test_basic_major_minor_uneven'>",
            "  <Function 'test_basic_major_minor_internal_uneven'>",
            "",
            "========================= no tests ran in 0.07 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_basic_root.py::test_basic_major",
            "test/test_other_basic.py::test_basic_major_minor_internal",
            "test/subdir/under/another/subdir/test_other_basic_sub.py::test_basic_major_minor",
            "test/uneven/folders/test_other_basic_uneven.py::test_basic_major_minor_internal_uneven"
        ],
        functionCount: 16,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 16 items",
            "<Package '/home/user/test/pytest_scenario'>",
            "  <Module 'test_basic_root.py'>",
            "    <Function 'test_basic_major'>",
            "    <Function 'test_basic_minor'>",
            "  <Module 'test_other_basic_root.py'>",
            "    <Function 'test_basic_major_minor'>",
            "    <Function 'test_basic_major_minor_internal'>",
            "  <Package '/home/user/test/pytest_scenario/test'>",
            "    <Module 'test_basic.py'>",
            "      <Function 'test_basic_major'>",
            "      <Function 'test_basic_minor'>",
            "    <Module 'test_other_basic.py'>",
            "      <Function 'test_basic_major_minor'>",
            "      <Function 'test_basic_major_minor_internal'>",
            "    <Package '/home/user/test/pytest_scenario/test/subdir'>",
            "      <Package '/home/user/test/pytest_scenario/test/subdir/under'>",
            "        <Package '/home/user/test/pytest_scenario/test/subdir/under/another'>",
            "          <Package '/home/user/test/pytest_scenario/test/subdir/under/another/subdir'>",
            "            <Module 'test_basic_sub.py'>",
            "              <Function 'test_basic_major'>",
            "              <Function 'test_basic_minor'>",
            "            <Module 'test_other_basic_sub.py'>",
            "              <Function 'test_basic_major_minor'>",
            "              <Function 'test_basic_major_minor_internal'>",
            "    <Package '/home/user/test/pytest_scenario/test/uneven'>",
            "      <Package '/home/user/test/pytest_scenario/test/uneven/folders'>",
            "        <Module 'test_basic_uneven.py'>",
            "          <Function 'test_basic_major_uneven'>",
            "          <Function 'test_basic_minor_uneven'>",
            "        <Module 'test_other_basic_uneven.py'>",
            "          <Function 'test_basic_major_minor_uneven'>",
            "          <Function 'test_basic_major_minor_internal_uneven'>",
            "",
            "========================= no tests ran in 0.13 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_basic_root.py::test_basic_major",
            "test/test_other_basic.py::test_basic_major_minor_internal",
            "test/subdir/under/another/subdir/test_other_basic_sub.py::test_basic_major_minor",
            "test/uneven/folders/test_other_basic_uneven.py::test_basic_major_minor_internal_uneven"
        ],
        functionCount: 16,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 16 items",
            "<Package /home/user/test/pytest_scenario>",
            "  <Module test_basic_root.py>",
            "    <Function test_basic_major>",
            "    <Function test_basic_minor>",
            "  <Module test_other_basic_root.py>",
            "    <Function test_basic_major_minor>",
            "    <Function test_basic_major_minor_internal>",
            "  <Package /home/user/test/pytest_scenario/test>",
            "    <Module test_basic.py>",
            "      <Function test_basic_major>",
            "      <Function test_basic_minor>",
            "    <Module test_other_basic.py>",
            "      <Function test_basic_major_minor>",
            "      <Function test_basic_major_minor_internal>",
            "    <Package /home/user/test/pytest_scenario/test/subdir>",
            "      <Package /home/user/test/pytest_scenario/test/subdir/under>",
            "        <Package /home/user/test/pytest_scenario/test/subdir/under/another>",
            "          <Package /home/user/test/pytest_scenario/test/subdir/under/another/subdir>",
            "            <Module test_basic_sub.py>",
            "              <Function test_basic_major>",
            "              <Function test_basic_minor>",
            "            <Module test_other_basic_sub.py>",
            "              <Function test_basic_major_minor>",
            "              <Function test_basic_major_minor_internal>",
            "    <Package /home/user/test/pytest_scenario/test/uneven>",
            "      <Package /home/user/test/pytest_scenario/test/uneven/folders>",
            "        <Module test_basic_uneven.py>",
            "          <Function test_basic_major_uneven>",
            "          <Function test_basic_minor_uneven>",
            "        <Module test_other_basic_uneven.py>",
            "          <Function test_basic_major_minor_uneven>",
            "          <Function test_basic_major_minor_internal_uneven>",
            "",
            "========================= no tests ran in 0.13 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test/test_other_basic.py::test_basic_major_minor_internal",
            "test/subdir/test_other_basic_sub.py::test_basic_major_minor"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Module 'test/test_basic.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/test_basic_root.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/test_other_basic.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/test_other_basic_root.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/subdir/test_basic_sub.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/subdir/test_other_basic_sub.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.18 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test/test_other_basic.py::test_basic_major_minor_internal",
            "test/subdir/test_other_basic_sub.py::test_basic_major_minor"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package '/home/user/test/pytest_scenario'>",
            "  <Package '/home/user/test/pytest_scenario/test'>",
            "    <Module 'test_basic.py'>",
            "      <Function 'test_basic_major'>",
            "      <Function 'test_basic_minor'>",
            "    <Module 'test_basic_root.py'>",
            "      <Function 'test_basic_major'>",
            "      <Function 'test_basic_minor'>",
            "    <Module 'test_other_basic.py'>",
            "      <Function 'test_basic_major_minor'>",
            "      <Function 'test_basic_major_minor_internal'>",
            "    <Module 'test_other_basic_root.py'>",
            "      <Function 'test_basic_major_minor'>",
            "      <Function 'test_basic_major_minor_internal'>",
            "    <Package '/home/user/test/pytest_scenario/test/subdir'>",
            "      <Module 'test_basic_sub.py'>",
            "        <Function 'test_basic_major'>",
            "        <Function 'test_basic_minor'>",
            "      <Module 'test_other_basic_sub.py'>",
            "        <Function 'test_basic_major_minor'>",
            "        <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.07 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test/test_other_basic.py::test_basic_major_minor_internal",
            "test/subdir/test_other_basic_sub.py::test_basic_major_minor"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package /home/user/test/pytest_scenario>",
            "  <Package /home/user/test/pytest_scenario/test>",
            "    <Module test_basic.py>",
            "      <Function test_basic_major>",
            "      <Function test_basic_minor>",
            "    <Module test_basic_root.py>",
            "      <Function test_basic_major>",
            "      <Function test_basic_minor>",
            "    <Module test_other_basic.py>",
            "      <Function test_basic_major_minor>",
            "      <Function test_basic_major_minor_internal>",
            "    <Module test_other_basic_root.py>",
            "      <Function test_basic_major_minor>",
            "      <Function test_basic_major_minor_internal>",
            "    <Package /home/user/test/pytest_scenario/test/subdir>",
            "      <Module test_basic_sub.py>",
            "        <Function test_basic_major>",
            "        <Function test_basic_minor>",
            "      <Module test_other_basic_sub.py>",
            "        <Function test_basic_major_minor>",
            "        <Function test_basic_major_minor_internal>",
            "",
            "========================= no tests ran in 0.07 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_other_basic_root.py::test_basic_major_minor_internal",
            "test/test_other_basic_sub.py::test_basic_major_minor"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Module 'test_basic.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test_basic_root.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test_other_basic.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test_other_basic_root.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/test_basic_sub.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/test_other_basic_sub.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.18 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_other_basic_root.py::test_basic_major_minor_internal",
            "test/test_basic_sub.py::test_basic_major",
            "test/test_basic_sub.py::test_basic_minor"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package '/home/user/test/pytest_scenario'>",
            "  <Module 'test_basic.py'>",
            "    <Function 'test_basic_major'>",
            "    <Function 'test_basic_minor'>",
            "  <Module 'test_basic_root.py'>",
            "    <Function 'test_basic_major'>",
            "    <Function 'test_basic_minor'>",
            "  <Module 'test_other_basic.py'>",
            "    <Function 'test_basic_major_minor'>",
            "    <Function 'test_basic_major_minor_internal'>",
            "  <Module 'test_other_basic_root.py'>",
            "    <Function 'test_basic_major_minor'>",
            "    <Function 'test_basic_major_minor_internal'>",
            "  <Package '/home/user/test/pytest_scenario/test'>",
            "    <Module 'test_basic_sub.py'>",
            "      <Function 'test_basic_major'>",
            "      <Function 'test_basic_minor'>",
            "    <Module 'test_other_basic_sub.py'>",
            "      <Function 'test_basic_major_minor'>",
            "      <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.22 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_other_basic_root.py::test_basic_major_minor_internal",
            "test/test_basic_sub.py::test_basic_major",
            "test/test_basic_sub.py::test_basic_minor"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package /home/user/test/pytest_scenario>",
            "  <Module test_basic.py>",
            "    <Function test_basic_major>",
            "    <Function test_basic_minor>",
            "  <Module test_basic_root.py>",
            "    <Function test_basic_major>",
            "    <Function test_basic_minor>",
            "  <Module test_other_basic.py>",
            "    <Function test_basic_major_minor>",
            "    <Function test_basic_major_minor_internal>",
            "  <Module test_other_basic_root.py>",
            "    <Function test_basic_major_minor>",
            "    <Function test_basic_major_minor_internal>",
            "  <Package /home/user/test/pytest_scenario/test>",
            "    <Module test_basic_sub.py>",
            "      <Function test_basic_major>",
            "      <Function test_basic_minor>",
            "    <Module test_other_basic_sub.py>",
            "      <Function test_basic_major_minor>",
            "      <Function test_basic_major_minor_internal>",
            "",
            "========================= no tests ran in 0.22 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2+ test modules in a subfolder off the root.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test/test_basic.py::test_basic_minor",
            "test/test_other_basic.py::test_basic_major_minor",
            "test/test_other_basic_root.py::test_basic_major_minor",
            "test/test_other_basic_sub.py::test_basic_major_minor_internal"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Module 'test/test_basic.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/test_basic_root.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/test_basic_sub.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test/test_other_basic.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/test_other_basic_root.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test/test_other_basic_sub.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.15 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2+ test modules in a subfolder off the root.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test/test_basic.py::test_basic_minor",
            "test/test_other_basic.py::test_basic_major_minor",
            "test/test_other_basic_root.py::test_basic_major_minor",
            "test/test_other_basic_sub.py::test_basic_major_minor_internal"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package '/home/user/test/pytest_scenario'>",
            "  <Package '/home/user/test/pytest_scenario/test'>",
            "    <Module 'test_basic.py'>",
            "      <Function 'test_basic_major'>",
            "      <Function 'test_basic_minor'>",
            "    <Module 'test_basic_root.py'>",
            "      <Function 'test_basic_major'>",
            "      <Function 'test_basic_minor'>",
            "    <Module 'test_basic_sub.py'>",
            "      <Function 'test_basic_major'>",
            "      <Function 'test_basic_minor'>",
            "    <Module 'test_other_basic.py'>",
            "      <Function 'test_basic_major_minor'>",
            "      <Function 'test_basic_major_minor_internal'>",
            "    <Module 'test_other_basic_root.py'>",
            "      <Function 'test_basic_major_minor'>",
            "      <Function 'test_basic_major_minor_internal'>",
            "    <Module 'test_other_basic_sub.py'>",
            "      <Function 'test_basic_major_minor'>",
            "      <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.15 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description:
            "Package-based source, 2+ test modules in a subfolder off the root.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test/test_basic.py::test_basic_minor",
            "test/test_other_basic.py::test_basic_major_minor",
            "test/test_other_basic_root.py::test_basic_major_minor",
            "test/test_other_basic_sub.py::test_basic_major_minor_internal"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package /home/user/test/pytest_scenario>",
            "  <Package /home/user/test/pytest_scenario/test>",
            "    <Module test_basic.py>",
            "      <Function test_basic_major>",
            "      <Function test_basic_minor>",
            "    <Module test_basic_root.py>",
            "      <Function test_basic_major>",
            "      <Function test_basic_minor>",
            "    <Module test_basic_sub.py>",
            "      <Function test_basic_major>",
            "      <Function test_basic_minor>",
            "    <Module test_other_basic.py>",
            "      <Function test_basic_major_minor>",
            "      <Function test_basic_major_minor_internal>",
            "    <Module test_other_basic_root.py>",
            "      <Function test_basic_major_minor>",
            "      <Function test_basic_major_minor_internal>",
            "    <Module test_other_basic_sub.py>",
            "      <Function test_basic_major_minor>",
            "      <Function test_basic_major_minor_internal>",
            "",
            "========================= no tests ran in 0.15 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.NonWindows,
        description: "Package-based source, 2+ modules at the topmost level.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_basic.py::test_basic_major",
            "test_basic_root.py::test_basic_major",
            "test_other_basic_root.py::test_basic_major_minor",
            "test_other_basic_sub.py::test_basic_major_minor_internal"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Module 'test_basic.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test_basic_root.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test_basic_sub.py'>",
            "  <Function 'test_basic_major'>",
            "  <Function 'test_basic_minor'>",
            "<Module 'test_other_basic.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test_other_basic_root.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "<Module 'test_other_basic_sub.py'>",
            "  <Function 'test_basic_major_minor'>",
            "  <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.23 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description: "Package-based source, 2+ modules at the topmost level.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_basic.py::test_basic_major",
            "test_basic_root.py::test_basic_major",
            "test_other_basic_root.py::test_basic_major_minor",
            "test_other_basic_sub.py::test_basic_major_minor_internal"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package '/home/user/test/pytest_scenario'>",
            "  <Module 'test_basic.py'>",
            "    <Function 'test_basic_major'>",
            "    <Function 'test_basic_minor'>",
            "  <Module 'test_basic_root.py'>",
            "    <Function 'test_basic_major'>",
            "    <Function 'test_basic_minor'>",
            "  <Module 'test_basic_sub.py'>",
            "    <Function 'test_basic_major'>",
            "    <Function 'test_basic_minor'>",
            "  <Module 'test_other_basic.py'>",
            "    <Function 'test_basic_major_minor'>",
            "    <Function 'test_basic_major_minor_internal'>",
            "  <Module 'test_other_basic_root.py'>",
            "    <Function 'test_basic_major_minor'>",
            "    <Function 'test_basic_major_minor_internal'>",
            "  <Module 'test_other_basic_sub.py'>",
            "    <Function 'test_basic_major_minor'>",
            "    <Function 'test_basic_major_minor_internal'>",
            "",
            "========================= no tests ran in 0.16 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description: "Package-based source, 2+ modules at the topmost level.",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "test_basic.py::test_basic_major",
            "test_basic_root.py::test_basic_major",
            "test_other_basic_root.py::test_basic_major_minor",
            "test_other_basic_sub.py::test_basic_major_minor_internal"
        ],
        functionCount: 12,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.0+, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 12 items",
            "<Package /home/user/test/pytest_scenario>",
            "  <Module test_basic.py>",
            "    <Function test_basic_major>",
            "    <Function test_basic_minor>",
            "  <Module test_basic_root.py>",
            "    <Function test_basic_major>",
            "    <Function test_basic_minor>",
            "  <Module test_basic_sub.py>",
            "    <Function test_basic_major>",
            "    <Function test_basic_minor>",
            "  <Module test_other_basic.py>",
            "    <Function test_basic_major_minor>",
            "    <Function test_basic_major_minor_internal>",
            "  <Module test_other_basic_root.py>",
            "    <Function test_basic_major_minor>",
            "    <Function test_basic_major_minor_internal>",
            "  <Module test_other_basic_sub.py>",
            "    <Function test_basic_major_minor>",
            "    <Function test_basic_major_minor_internal>",
            "",
            "========================= no tests ran in 0.16 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "other_tests/test_base_stuff.py::test_do_other_test",
            "other_tests/test_base_stuff.py::test_do_test",
            "tests/further_tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_100",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 8 items",
            "<Module 'other_tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/further_tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/further_tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "<Module 'tests/further_tests/deeper/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "",
            "======================== no tests ran in 0.30 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "other_tests/test_base_stuff.py::test_do_other_test",
            "other_tests/test_base_stuff.py::test_do_test",
            "tests/further_tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_100",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package 'e:\\\\user\\\\test\\\\pytest_scenario'>",
            "  <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\other_tests'>",
            "    <Module 'test_base_stuff.py'>",
            "      <Function 'test_do_test'>",
            "      <Function 'test_do_other_test'>",
            "  <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\tests'>",
            "    <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\tests\\\\further_tests'>",
            "      <Module 'test_gimme_5.py'>",
            "        <Function 'test_gimme_5'>",
            "      <Module 'test_multiply.py'>",
            "        <Function 'test_times_10'>",
            "        <Function 'test_times_2'>",
            "      <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\tests\\\\further_tests\\\\deeper'>",
            "        <Module 'test_more_multiply.py'>",
            "          <Function 'test_times_100'>",
            "          <Function 'test_times_negative_1'>",
            "",
            "======================== no tests ran in 0.42 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "other_tests/test_base_stuff.py::test_do_other_test",
            "other_tests/test_base_stuff.py::test_do_test",
            "tests/further_tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_100",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package e:\\\\user\\\\test\\\\pytest_scenario>",
            "  <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\other_tests>",
            "    <Module test_base_stuff.py>",
            "      <Function test_do_test>",
            "      <Function test_do_other_test>",
            "  <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\tests>",
            "    <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\tests\\\\further_tests>",
            "      <Module test_gimme_5.py>",
            "        <Function test_gimme_5>",
            "      <Module test_multiply.py>",
            "        <Function test_times_10>",
            "        <Function test_times_2>",
            "      <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\tests\\\\further_tests\\\\deeper>",
            "        <Module test_more_multiply.py>",
            "          <Function test_times_100>",
            "          <Function test_times_negative_1>",
            "",
            "======================== no tests ran in 0.42 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "other_tests/test_base_stuff.py::test_do_other_test",
            "other_tests/test_base_stuff.py::test_do_test",
            "tests/further_tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_100",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'other_tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/further_tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/further_tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "<Module 'tests/further_tests/deeper/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "",
            "======================== no tests ran in 0.11 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "other_tests/test_base_stuff.py::test_do_other_test",
            "other_tests/test_base_stuff.py::test_do_test",
            "tests/further_tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_100",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'other_tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/further_tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/further_tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "<Module 'tests/further_tests/deeper/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "",
            "======================== no tests ran in 0.17 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, tests throughout a deeper tree, including 2 distinct folder paths at different levels.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "other_tests/test_base_stuff.py::test_do_other_test",
            "other_tests/test_base_stuff.py::test_do_test",
            "tests/further_tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_100",
            "tests/further_tests/deeper/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module other_tests/test_base_stuff.py>",
            "  <Function test_do_test>",
            "  <Function test_do_other_test>",
            "<Module tests/further_tests/test_gimme_5.py>",
            "  <Function test_gimme_5>",
            "<Module tests/further_tests/test_multiply.py>",
            "  <Function test_times_10>",
            "  <Function test_times_2>",
            "<Module tests/further_tests/deeper/test_more_multiply.py>",
            "  <Function test_times_100>",
            "  <Function test_times_negative_1>",
            "",
            "======================== no tests ran in 0.17 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_more_multiply.py::test_times_100",
            "tests/further_tests/test_more_multiply.py::test_times_negative_1",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/further_tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/further_tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.26 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_more_multiply.py::test_times_100",
            "tests/further_tests/test_more_multiply.py::test_times_negative_1",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package 'e:\\\\user\\\\test\\\\pytest_scenario'>",
            "  <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\tests'>",
            "    <Module 'test_base_stuff.py'>",
            "      <Function 'test_do_test'>",
            "      <Function 'test_do_other_test'>",
            "    <Module 'test_gimme_5.py'>",
            "      <Function 'test_gimme_5'>",
            "    <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\tests\\\\further_tests'>",
            "      <Module 'test_more_multiply.py'>",
            "        <Function 'test_times_100'>",
            "        <Function 'test_times_negative_1'>",
            "      <Module 'test_multiply.py'>",
            "        <Function 'test_times_10'>",
            "        <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.38 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_more_multiply.py::test_times_100",
            "tests/further_tests/test_more_multiply.py::test_times_negative_1",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package e:\\\\user\\\\test\\\\pytest_scenario>",
            "  <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\tests>",
            "    <Module test_base_stuff.py>",
            "      <Function test_do_test>",
            "      <Function test_do_other_test>",
            "    <Module test_gimme_5.py>",
            "      <Function test_gimme_5>",
            "    <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\tests\\\\further_tests>",
            "      <Module test_more_multiply.py>",
            "        <Function test_times_100>",
            "        <Function test_times_negative_1>",
            "      <Module test_multiply.py>",
            "        <Function test_times_10>",
            "        <Function test_times_2>",
            "",
            "======================== no tests ran in 0.38 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_more_multiply.py::test_times_100",
            "tests/further_tests/test_more_multiply.py::test_times_negative_1",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/further_tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/further_tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.17 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_more_multiply.py::test_times_100",
            "tests/further_tests/test_more_multiply.py::test_times_negative_1",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/further_tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/further_tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.20 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2 test modules in subfolders of root, and 2 more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/further_tests/test_more_multiply.py::test_times_100",
            "tests/further_tests/test_more_multiply.py::test_times_negative_1",
            "tests/further_tests/test_multiply.py::test_times_10",
            "tests/further_tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module tests/test_base_stuff.py>",
            "  <Function test_do_test>",
            "  <Function test_do_other_test>",
            "<Module tests/test_gimme_5.py>",
            "  <Function test_gimme_5>",
            "<Module tests/further_tests/test_more_multiply.py>",
            "  <Function test_times_100>",
            "  <Function test_times_negative_1>",
            "<Module tests/further_tests/test_multiply.py>",
            "  <Function test_times_10>",
            "  <Function test_times_2>",
            "",
            "======================== no tests ran in 0.20 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.26 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package 'e:\\\\user\\\\test\\\\pytest_scenario'>",
            "  <Module 'test_base_stuff.py'>",
            "    <Function 'test_do_test'>",
            "    <Function 'test_do_other_test'>",
            "  <Module 'test_gimme_5.py'>",
            "    <Function 'test_gimme_5'>",
            "  <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\tests'>",
            "    <Module 'test_more_multiply.py'>",
            "      <Function 'test_times_100'>",
            "      <Function 'test_times_negative_1'>",
            "    <Module 'test_multiply.py'>",
            "      <Function 'test_times_10'>",
            "      <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.66 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package e:\\\\user\\\\test\\\\pytest_scenario>",
            "  <Module test_base_stuff.py>",
            "    <Function test_do_test>",
            "    <Function test_do_other_test>",
            "  <Module test_gimme_5.py>",
            "    <Function test_gimme_5>",
            "  <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\tests>",
            "    <Module test_more_multiply.py>",
            "      <Function test_times_100>",
            "      <Function test_times_negative_1>",
            "    <Module test_multiply.py>",
            "      <Function test_times_10>",
            "      <Function test_times_2>",
            "",
            "======================== no tests ran in 0.66 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.11 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.41 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2+ test modules in root folder and two more in one (direct) subfolder.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module test_base_stuff.py>",
            "  <Function test_do_test>",
            "  <Function test_do_other_test>",
            "<Module test_gimme_5.py>",
            "  <Function test_gimme_5>",
            "<Module tests/test_more_multiply.py>",
            "  <Function test_times_100>",
            "  <Function test_times_negative_1>",
            "<Module tests/test_multiply.py>",
            "  <Function test_times_10>",
            "  <Function test_times_2>",
            "",
            "======================== no tests ran in 0.41 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2+ test modules in a subfolder off the root.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.20 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2+ test modules in a subfolder off the root.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package 'e:\\\\user\\\\test\\\\pytest_scenario'>",
            "  <Package 'e:\\\\user\\\\test\\\\pytest_scenario\\\\tests'>",
            "    <Module 'test_base_stuff.py'>",
            "      <Function 'test_do_test'>",
            "      <Function 'test_do_other_test'>",
            "    <Module 'test_gimme_5.py'>",
            "      <Function 'test_gimme_5'>",
            "    <Module 'test_more_multiply.py'>",
            "      <Function 'test_times_100'>",
            "      <Function 'test_times_negative_1'>",
            "    <Module 'test_multiply.py'>",
            "      <Function 'test_times_10'>",
            "      <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.26 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Package-based source, 2+ test modules in a subfolder off the root.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Package e:\\\\user\\\\test\\\\pytest_scenario>",
            "  <Package e:\\\\user\\\\test\\\\pytest_scenario\\\\tests>",
            "    <Module test_base_stuff.py>",
            "      <Function test_do_test>",
            "      <Function test_do_other_test>",
            "    <Module test_gimme_5.py>",
            "      <Function test_gimme_5>",
            "    <Module test_more_multiply.py>",
            "      <Function test_times_100>",
            "      <Function test_times_negative_1>",
            "    <Module test_multiply.py>",
            "      <Function test_times_10>",
            "      <Function test_times_2>",
            "",
            "======================== no tests ran in 0.26 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2+ test modules in a subfolder off the root.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.26 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2+ test modules in a subfolder off the root.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module 'tests/test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'tests/test_gimme_5.py'>",
            "  <Function 'test_gimme_5'>",
            "<Module 'tests/test_more_multiply.py'>",
            "  <Function 'test_times_100'>",
            "  <Function 'test_times_negative_1'>",
            "<Module 'tests/test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.26 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description:
            "Non-package source, 2+ test modules in a subfolder off the root.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "tests/test_base_stuff.py::test_do_test",
            "tests/test_base_stuff.py::test_do_other_test",
            "tests/test_gimme_5.py::test_gimme_5",
            "tests/test_more_multiply.py::test_times_100",
            "tests/test_more_multiply.py::test_times_negative_1",
            "tests/test_multiply.py::test_times_10",
            "tests/test_multiply.py::test_times_2"
        ],
        functionCount: 7,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 7 items",
            "<Module tests/test_base_stuff.py>",
            "  <Function test_do_test>",
            "  <Function test_do_other_test>",
            "<Module tests/test_gimme_5.py>",
            "  <Function test_gimme_5>",
            "<Module tests/test_more_multiply.py>",
            "  <Function test_times_100>",
            "  <Function test_times_negative_1>",
            "<Module tests/test_multiply.py>",
            "  <Function test_times_10>",
            "  <Function test_times_2>",
            "",
            "======================== no tests ran in 0.26 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description: "Package-based source, 2+ modules at the topmost level.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "test_multiply.py::test_times_10",
            "test_multiply.py::test_times_2"
        ],
        functionCount: 4,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 4 items",
            "<Module 'test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.17 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description: "Package-based source, 2+ modules at the topmost level.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "test_multiply.py::test_times_10",
            "test_multiply.py::test_times_2"
        ],
        functionCount: 4,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 4 items",
            "<Package 'e:\\\\user\\\\test\\\\pytest_scenario'>",
            "  <Module 'test_base_stuff.py'>",
            "    <Function 'test_do_test'>",
            "    <Function 'test_do_other_test'>",
            "  <Module 'test_multiply.py'>",
            "    <Function 'test_times_10'>",
            "    <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.37 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description: "Package-based source, 2+ modules at the topmost level.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "test_multiply.py::test_times_10",
            "test_multiply.py::test_times_2"
        ],
        functionCount: 4,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 4 items",
            "<Package e:\\\\user\\\\test\\\\pytest_scenario>",
            "  <Module test_base_stuff.py>",
            "    <Function test_do_test>",
            "    <Function test_do_other_test>",
            "  <Module test_multiply.py>",
            "    <Function test_times_10>",
            "    <Function test_times_2>",
            "",
            "======================== no tests ran in 0.37 seconds ========================="
        ]
    },
    {
        pytest_version_spec: "< 3.7",
        platform: PytestDataPlatformType.Windows,
        description: "Non-package source, 2 modules at the topmost level.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "test_multiply.py::test_times_10",
            "test_multiply.py::test_times_2"
        ],
        functionCount: 4,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.6.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 4 items",
            "<Module 'test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.18 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 3.7 < 4.1",
        platform: PytestDataPlatformType.Windows,
        description: "Non-package source, 2 modules at the topmost level.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "test_multiply.py::test_times_10",
            "test_multiply.py::test_times_2"
        ],
        functionCount: 4,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-3.7.4, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 4 items",
            "<Module 'test_base_stuff.py'>",
            "  <Function 'test_do_test'>",
            "  <Function 'test_do_other_test'>",
            "<Module 'test_multiply.py'>",
            "  <Function 'test_times_10'>",
            "  <Function 'test_times_2'>",
            "",
            "======================== no tests ran in 0.36 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.Windows,
        description: "Non-package source, 2 modules at the topmost level.",
        rootdir: "e:\\user\\test\\pytest_scenario",
        test_functions: [
            "test_base_stuff.py::test_do_test",
            "test_base_stuff.py::test_do_other_test",
            "test_multiply.py::test_times_10",
            "test_multiply.py::test_times_2"
        ],
        functionCount: 4,
        stdout: [
            "============================= test session starts =============================",
            "platform win32 -- Python 3.7.0, pytest-4.1.0, py-1.6.0, pluggy-0.7.1",
            "rootdir: e:\\user\\test\\pytest_scenario, inifile:",
            "collected 4 items",
            "<Module test_base_stuff.py>",
            "  <Function test_do_test>",
            "  <Function test_do_other_test>",
            "<Module test_multiply.py>",
            "  <Function test_times_10>",
            "  <Function test_times_2>",
            "",
            "======================== no tests ran in 0.36 seconds ========================="
        ]
    },
    {
        pytest_version_spec: ">= 4.1",
        platform: PytestDataPlatformType.NonWindows,
        description: "Parameterized tests",
        rootdir: "/home/user/test/pytest_scenario",
        test_functions: [
            "tests/test_spam.py::test_with_subtests[1-2]",
            "tests/test_spam.py::test_with_subtests[3-4]"
        ],
        functionCount: 2,
        stdout: [
            "============================= test session starts ==============================",
            "platform linux -- Python 3.7.1, pytest-4.2.1, py-1.7.0, pluggy-0.8.1",
            "rootdir: /home/user/test/pytest_scenario, inifile:",
            "collected 2 items",
            "<Package /home/user/test/pytest_scenario/tests>",
            "  <Module test_spam.py>",
            "    <Function test_with_subtests[1-2]>",
            "    <Function test_with_subtests[3-4]>",
            "",
            "========================= no tests ran in 0.02 seconds ========================="
        ]
    }
];
