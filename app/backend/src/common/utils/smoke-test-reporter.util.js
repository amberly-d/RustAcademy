"use strict";
/**
 * Smoke Test Reporter Utility
 *
 * Provides utilities for generating and formatting smoke test results
 * for CI/CD integration and local development.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokeTestReporter = void 0;
exports.runSmokeTest = runSmokeTest;
var SmokeTestReporter = /** @class */ (function () {
    function SmokeTestReporter(environment, baseUrl) {
        this.results = [];
        this.startTime = 0;
        this.environment = environment;
        this.baseUrl = baseUrl;
    }
    /**
     * Start the smoke test run
     */
    SmokeTestReporter.prototype.start = function () {
        this.startTime = Date.now();
        this.results = [];
    };
    /**
     * Record a test result
     */
    SmokeTestReporter.prototype.recordResult = function (result) {
        this.results.push(result);
    };
    /**
     * Generate the final report
     */
    SmokeTestReporter.prototype.generateReport = function () {
        var _this = this;
        var duration = Date.now() - this.startTime;
        var passed = this.results.filter(function (r) { return r.status === 'pass'; }).length;
        var failed = this.results.filter(function (r) { return r.status === 'fail'; }).length;
        var skipped = this.results.filter(function (r) { return r.status === 'skip'; }).length;
        // Identify critical failures
        var criticalFailures = this.results
            .filter(function (r) { return r.status === 'fail' && _this.isCriticalTest(r.name); })
            .map(function (r) { return r.name; });
        return {
            timestamp: new Date().toISOString(),
            environment: this.environment,
            baseUrl: this.baseUrl,
            totalTests: this.results.length,
            passed: passed,
            failed: failed,
            skipped: skipped,
            duration: duration,
            results: this.results,
            criticalFailures: criticalFailures,
        };
    };
    /**
     * Format report for console output
     */
    SmokeTestReporter.prototype.formatConsoleOutput = function () {
        var report = this.generateReport();
        var lines = [];
        lines.push('='.repeat(60));
        lines.push('SMOKE TEST REPORT');
        lines.push('='.repeat(60));
        lines.push("Environment: ".concat(report.environment));
        lines.push("Base URL: ".concat(report.baseUrl));
        lines.push("Timestamp: ".concat(report.timestamp));
        lines.push("Duration: ".concat(report.duration, "ms"));
        lines.push('');
        lines.push('Results:');
        lines.push("  Total: ".concat(report.totalTests));
        lines.push("  Passed: ".concat(report.passed, " \u2705"));
        lines.push("  Failed: ".concat(report.failed, " \u274C"));
        lines.push("  Skipped: ".concat(report.skipped, " \u23ED\uFE0F"));
        lines.push('');
        if (report.criticalFailures.length > 0) {
            lines.push('CRITICAL FAILURES:');
            report.criticalFailures.forEach(function (failure) {
                lines.push("  - ".concat(failure));
            });
            lines.push('');
        }
        lines.push('Test Details:');
        this.results.forEach(function (result) {
            var statusIcon = result.status === 'pass' ? '✅' : result.status === 'fail' ? '❌' : '⏭️';
            lines.push("  ".concat(statusIcon, " ").concat(result.name, " (").concat(result.duration, "ms) [").concat(result.category, "]"));
            if (result.error) {
                lines.push("     Error: ".concat(result.error));
            }
        });
        lines.push('='.repeat(60));
        return lines.join('\n');
    };
    /**
     * Format report for GitHub Actions summary
     */
    SmokeTestReporter.prototype.formatGitHubSummary = function () {
        var report = this.generateReport();
        var lines = [];
        lines.push('# Smoke Test Report\n');
        lines.push("**Environment:** ".concat(report.environment, "\n"));
        lines.push("**Base URL:** ".concat(report.baseUrl, "\n"));
        lines.push("**Timestamp:** ".concat(report.timestamp, "\n"));
        lines.push("**Duration:** ".concat(report.duration, "ms\n"));
        lines.push('\n## Results\n');
        lines.push("| Metric | Count |\n");
        lines.push("|--------|-------|\n");
        lines.push("| Total | ".concat(report.totalTests, " |\n"));
        lines.push("| Passed | ".concat(report.passed, " \u2705 |\n"));
        lines.push("| Failed | ".concat(report.failed, " \u274C |\n"));
        lines.push("| Skipped | ".concat(report.skipped, " \u23ED\uFE0F |\n"));
        if (report.criticalFailures.length > 0) {
            lines.push('\n## ⚠️ Critical Failures\n');
            report.criticalFailures.forEach(function (failure) {
                lines.push("- ".concat(failure, "\n"));
            });
        }
        lines.push('\n## Test Details\n');
        lines.push('| Test | Status | Duration | Category |\n');
        lines.push('|------|--------|----------|----------|\n');
        this.results.forEach(function (result) {
            var statusIcon = result.status === 'pass' ? '✅' : result.status === 'fail' ? '❌' : '⏭️';
            lines.push("| ".concat(result.name, " | ").concat(statusIcon, " ").concat(result.status, " | ").concat(result.duration, "ms | ").concat(result.category, " |\n"));
        });
        return lines.join('');
    };
    /**
     * Format report as JSON
     */
    SmokeTestReporter.prototype.formatJson = function () {
        return JSON.stringify(this.generateReport(), null, 2);
    };
    /**
     * Determine if a test is critical
     */
    SmokeTestReporter.prototype.isCriticalTest = function (testName) {
        var criticalKeywords = [
            'health',
            'ready',
            'supabase',
            'horizon',
            'soroban',
            'network',
            'database',
            'migration',
        ];
        return criticalKeywords.some(function (keyword) {
            return testName.toLowerCase().includes(keyword);
        });
    };
    /**
     * Check if the smoke test run passed
     */
    SmokeTestReporter.prototype.hasPassed = function () {
        var report = this.generateReport();
        return report.failed === 0 && report.criticalFailures.length === 0;
    };
    return SmokeTestReporter;
}());
exports.SmokeTestReporter = SmokeTestReporter;
/**
 * Helper function to run a smoke test and record the result
 */
function runSmokeTest(reporter, name, category, testFn) {
    return __awaiter(this, void 0, void 0, function () {
        var start, duration, error_1, duration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = Date.now();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, testFn()];
                case 2:
                    _a.sent();
                    duration = Date.now() - start;
                    reporter.recordResult({
                        name: name,
                        status: 'pass',
                        duration: duration,
                        category: category,
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    duration = Date.now() - start;
                    reporter.recordResult({
                        name: name,
                        status: 'fail',
                        duration: duration,
                        error: error_1.message,
                        category: category,
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
