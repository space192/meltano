from flask import Blueprint, jsonify, request
from .reports_helper import ReportsHelper

reportsBP = Blueprint("reports", __name__, url_prefix="/reports")


@reportsBP.route("/load/<report_name>", methods=["GET"])
def load_report(report_name):
    reports_helper = ReportsHelper()
    response_data = reports_helper.load_report(report_name)
    return jsonify(response_data)


@reportsBP.route("/save", methods=["POST"])
def save_report():
    reports_helper = ReportsHelper()
    post_data = request.get_json()
    response_data = reports_helper.save_report(post_data)
    return jsonify(response_data)
